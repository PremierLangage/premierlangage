#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  request.py
#  
#  Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
# 


import logging, tempfile, io, tarfile, json, os, hashlib, requests

from serverpl.settings import DEBUG
from sandbox.models import Sandbox

logger = logging.getLogger(__name__)


def get_sandbox():
    sandboxes = Sandbox.objects.all().order_by("priority")
    if not sandboxes:
        raise NotImplementedError("No sandbox has been added to the database. Add one throught Administration -> Sandbox -> New")
    
    tried = "Tried sandboxes:<br>"
    for sandbox in sandboxes:
        try:
            r = requests.head(sandbox.url, timeout=0.5)
            if r.status_code == 200:
                break
            tried += "- "+str(sandbox)+"(code received: "+r.status_code+")<br>"
        except Exception as e:
            if DEBUG:   
                tried += "- "+str(sandbox)+"<br>"+"DEBUG:<br>"+str(e)
            else:
                tried += "- "+str(sandbox)+"<br>"
            pass
    else:
        logger.warning("Couldn't join any sandbox of the database")
        raise NotImplementedError("Couldn't join any sandbox of the database.<br><br>"+tried)
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
    
    def __init__(self, dic, studentfile, timeout=3):
        sandbox = get_sandbox()
        
        self.dic = dic
        self.studentfile = studentfile
        self.url = sandbox.url
        self.name = sandbox.name
        self.timeout = timeout
        
        logger.info("Executing on sandbox '"+sandbox.url+" ("+sandbox.name+")'.")
    
    
    def call(self, timeout=10):
        """ Call the sandbox """
        
        payload = dict(self.dic['__file'])
        
        tmp = dict(self.dic)
        del tmp['__file']
        payload['pl.json'] = json.dumps(tmp)
        if 'grader' in self.dic and 'grader.py' not in payload:
            payload['grader.py'] = self.dic['grader']
        if self.studentfile:
            payload['student.py'] = self.studentfile
        
        
        self.tar = make_tar(payload)
        
        hsh = hashlib.sha1()
        hsh.update(self.tar)
        tar_hash = hsh.hexdigest()
        
        files = {'environment.tgz': self.tar}
        
        try: 
            data={'execution_timeout': self.timeout, 'tar_hash': tar_hash}
            response = requests.post(self.url, data=data, files=files, timeout=10)
            response = response.text
        except Exception as e:
            response = dict()
            response['grade'] = dict()
            msg = "Erreur de la sandbox '"+self.name+"', si l'erreur persiste, merci de contacter votre professeur<br><br>"
            response['grade']['success'] = "info"
            response['grade']['feedback'] = msg+(str(type(e))+": "+str(e)).replace('<', '[').replace('>',']')
            response = json.dumps(response)
            
        return response
