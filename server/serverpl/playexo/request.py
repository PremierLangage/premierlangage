#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  request.py
#  
#  Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
# 


import logging, tempfile, tarfile, json, os, hashlib, requests, traceback

from serverpl.settings import DEBUG
from sandbox.models import Sandbox

logger = logging.getLogger(__name__)


def get_sandbox():
    """ Return the first available sandbox.
        Raise NotImplementedError if not sandbox could be found."""
    
    sandboxes = Sandbox.objects.all().order_by("priority")
    if not sandboxes:
        raise NotImplementedError("No sandbox has been added to the database. Add one throught Administration -> Sandbox -> New")
    
    tried = "Tried sandboxes:<br>"
    for sandbox in sandboxes:
        try:
            r = requests.head(sandbox.url + "?version=1.0.0", timeout=2)
            if r.status_code == 200:
                break
            tried += "- " + str(sandbox) + "(code received: " + str(r.status_code) + ")<br>"
        except Exception as e:
            if DEBUG:   
                tried += "- "+str(sandbox)+"<br>"+"DEBUG:<br>"+str(e)
            else:
                tried += "- "+str(sandbox)+"<br>"
            pass
    else:
        logger.warning("Couldn't join any sandbox of the database")
        raise NotImplementedError("Couldn't join any sandbox of the database.<br><br>"+str(tried))
    return sandbox



def make_tar(files):
    with tempfile.TemporaryDirectory() as tmp_dir, tempfile.TemporaryDirectory() as env_dir:
        with tarfile.open(tmp_dir + "/environment.tgz", "w:gz") as tar:
            for key in files:
                with open(env_dir + "/" + key, "w") as f:
                    print(files[key], file=f)
                    
                tar.add(env_dir, arcname=os.path.sep)
            
        with open(tmp_dir + "/environment.tgz", 'rb') as tar:
                tar_stream = tar.read()
            
    return tar_stream
    



class SandboxSession:
    
    def __init__(self, dic, exec_timeout=5, test=False, params=""):
        
        self.sandbox = sandbox = get_sandbox()
        self.dic = dict(dic)
        self.exec_timeout = exec_timeout
        self.test = test
        self.params = params
        
        logger.info("Executing on sandbox '" + self.sandbox.url + " (" + self.sandbox.name + ")'.")
    
    
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
    
    
    def call_build(self, request_timeout=10):
        files = {'environment.tgz': make_tar(self._build_env())}
        
        data={
            'execution_timeout': self.exec_timeout,
            'params': self.params,
        }
        if self.test:
            data['test'] = True
            
        response = requests.post(self.sandbox.url + "build/", data=data, files=files, timeout=request_timeout)
        return response
