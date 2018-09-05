#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  request.py
#  
#  Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
# 


import logging, tempfile, tarfile, json, os, hashlib, requests, traceback

from sandbox.models import Sandbox
from playexo.utils import get_sandbox, tar_from_dic


logger = logging.getLogger(__name__)


class SandboxBuild:
    
    def __init__(self, dic, test=False):
        
        self.sandbox = get_sandbox()
        self.dic = dict(dic)
        self.test = test
    
    
    def _build_env(self):
        env = dict(self.dic['__files'])
        tmp = self.dic
        del tmp['__files']
        
        env['pl.json'] = json.dumps(tmp)
        
        if 'grader' in self.dic and 'grader.py' not in env:
            env['grader.py'] = self.dic['grader']
        
        if 'builder' in self.dic and 'builder.py' not in env:
            env['builder.py'] = self.dic['builder']
        
        return env
    
    
    def call(self, request_timeout=10):
        files = {'environment.tgz': tar_from_dic(self._build_env())}
        
        if self.test:
            data['test'] = True
        
        logger.info("Building on sandbox '" + self.sandbox.url + " (" + self.sandbox.name + ")'.")
        response = requests.post(self.sandbox.url + "build/", files=files, timeout=request_timeout)
        return json.loads(response.text)



class SandboxEval:
    
    def __init__(self, uuid, sandbox, answers):
        self.uuid = uuid
        self.sandbox = get_sandbox(sandbox)
        self.answers = answers
    
    
    def check(self):
        r = requests.head(self.sandbox.url + "env/" + self.uuid + "/", timeout=1)
        return 200 <= r.status_code <= 299
    
    
    def call(self, request_timeout=10):
        data={
            'answers': json.dumps(self.answers),
        }
        logger.info("Evaluating on sandbox '" + self.sandbox.url + " (" + self.sandbox.name + ")'.")
        response = requests.post(self.sandbox.url + "eval/%s/" % self.uuid, data=data, timeout=request_timeout)
        return json.loads(response.text)
