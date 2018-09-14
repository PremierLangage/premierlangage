#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  request.py
#  
#  Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
# 


import logging, json, requests, os

from django.conf import settings

from playexo.utils import tar_from_dic
from playexo.exception import SandboxUnavailable

logger = logging.getLogger(__name__)


class SandboxBuild:
    
    def __init__(self, dic, sandbox=None, test=False):
        self.sandbox = settings.SANDBOX if sandbox is None else sandbox
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
        try:
            files = {'environment.tgz': tar_from_dic(self._build_env())}
            data = {'test': True} if self.test else {}
            logger.info("Building on sandbox '" + self.sandbox + "'.")
            url = os.path.join(self.sandbox, "build/")
            response = requests.post(url, data=data, files=files, timeout=request_timeout)
            return json.loads(response.text)
        except json.decoder.JSONDecodeError:
            msg = "Sandbox '" + url + "' returned a non JSON response:\n" + response.text
            logger.critical(msg)
            raise SandboxUnavailable(msg)
        except:
            msg = "Could not join the sandbox '" + url + "'."
            logger.exception(msg)
            raise SandboxUnavailable(msg)



class SandboxEval:
    
    def __init__(self, uuid, answers, sandbox=None):
        self.uuid = uuid
        self.sandbox = settings.SANDBOX if sandbox is None else sandbox
        self.answers = answers
    
    
    def check(self):
        try:
            url = os.path.join(self.sandbox, "env/%s/")
            r = requests.head(url % str(self.uuid), timeout=1)
            return 200 <= r.status_code <= 299
        except:
            msg = "Could not join the sandbox '" + url + "'."
            logger.exception(msg)
            raise SandboxUnavailable(msg)
    

    def call(self, request_timeout=10):
        try:
            data={'answers': json.dumps(self.answers),}
            logger.info("Evaluating on sandbox '" + self.sandbox + "'.")
            url = os.path.join(self.sandbox, "eval/%s/")
            response = requests.post(url % str(self.uuid), data=data, timeout=request_timeout)
            return json.loads(response.text)
        except json.decoder.JSONDecodeError:
            msg = "Sandbox '" + url + "' returned a non JSON response:\n" + response.text
            logger.critical(msg)
            raise SandboxUnavailable(msg)
        except:
            msg = "Could not join the sandbox '" + url + "'."
            logger.exception(msg)
            raise SandboxUnavailable(msg)
