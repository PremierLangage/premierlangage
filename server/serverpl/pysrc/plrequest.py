#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  request.py
#  
#  Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
#  

__doc__ = """

    Ce fichier a pour objectif de gérer les communications
    avec la sandbox.
    """



import requests
import question
import zipfile
import pathlib
import pleditor
import cd
import subprocess
import hashlib
import json
import shutil
import os


from pleditor import get_zip_value
from sandbox.models import Sandbox

class PlMissingSoluceError(Exception):
    """ Raised if an error occured during parsing a PL """

    def __init__(self, message="Missing Soluce"):
        self.message = message
        
    def __str__(self):
        return self.message



class SandboxCheck:
    def __init__(self, pldic, url = "/sandbox/pl"):
        self.url = url
        self.dic = pldic

    def check():
        """
        retourne vrai si la sandbox répond bien
        """
        if not self.url.endswith("execute"):
            return False
        uu=self.url[:-7]+"version"
        print("---------------------")
        print(uu)
        r=requests.get(uu)
        if r.status_code != 200:
            return False
        return True


    def call(self, studentcode=None):
        if studentcode:
            studentfile=studentcode
            if "testcode" in self.dic:
                self.dic["testcode"]=studentfile
            else:
                self.dic['basefiles']["soluce.py"]=studentfile
        else:
            if "testcode" in self.dic:
                studentfile=self.dic["testcode"]
            elif "soluce.py" in self.dic['basefiles']:
                studentfile=self.dic['basefiles']["soluce.py"]
        mn = hashlib.sha1()
        self.zipvalue = self.dic['zipvalue']
        del self.dic["zipvalue"]
        mn.update(self.zipvalue[:])
        ziphashvalue = mn.hexdigest()
        files = {
            'environment.zip': self.zipvalue,
            'student.py': studentfile,
            "grader.py": self.dic['basefiles']['grader.py'],
            'hashvalue': ziphashvalue,
            'pl.json': json.dumps(self.dic),
        }
        x = requests.post(self.url, data=self.dic, files=files, timeout=1)
        res = json.loads(x.text)
        return res


    def createlocaldir(self,dirname="/tmp/sandbox/"):
        # (re-)create directory
        shutil.rmtree(dirname, ignore_errors=True)
        os.mkdir(dirname)
        with open(dirname+"/environment.zip", 'w') as env:
            print(get_zip_value(self.dic), file=env)
        with open(dirname+"/pl.json", 'w') as js:
            print(json.dumps(self.dic), file=js)
        with open(dirname+"/grader.py", 'w') as grader:
            print(self.dic['basefiles']['grader.py'], file=grader)
        with open(dirname+"/student.py", 'w') as student:
            if 'testcode' in self.dic:
                print(self.dic['testcode'], file=student)
            else :
                print(self.dic['basefiles']['soluce.py'], file=student)
        if 'plgrader.py' in self.dic['basefiles']:
            with open(dirname+'/plgrader.py', 'w') as plgrader:
                print(self.dic['basefiles']['plgrader.py'], file=plgrader)
        if 'feedback.py' in self.dic['basefiles']:
            with open(dirname+'/feedback.py', 'w') as fb:
                print(self.dic['basefiles']['feedback.py'], file=fb)
        #if 'soluce.py' in self.dic['basefiles']:
            #with open(dirname+'/soluce.py', 'w') as fb:
                #print(self.dic['basefiles']['soluce.py'], file=fb)

        return dirname


class SandboxSession:
    def __init__(self, dic, studentfile, timeout=1):
        sandboxes = Sandbox.objects.all().order_by("priority")
        if not sandboxes:
            raise NotImplementedError("No sandbox has been added to the database. Add one throught Administration -> Sandbox -> New")
        
        tried = "Tried sandboxes:<br>"
        found = False
        for sandbox in sandboxes:
            try:
                r = requests.head(sandbox.url, timeout=0.5)
                if r.status_code == 200:
                    found = True
                    break
                tried += "- "+str(sandbox)+"<br>"
            except:
                tried += "- "+str(sandbox)+"<br>"
                pass
        if not found:
            raise NotImplementedError("Couldn't join any sandbox of the database.<br><br>"+tried)        
        
        self.dic = dic
        self.zipvalue = pleditor.createzipfile(dic['basefiles'])
        self.studentfile = studentfile
        self.url = sandbox.url
        self.name = sandbox.name
        self.timeout = timeout
    
    def call(self,timeout=10):
        """
        timeout de 10 secondes pour l'ensemble connection + execution
        """       
        mn = hashlib.sha1()
        mn.update(self.zipvalue[:])
        ziphashvalue = mn.hexdigest()
        
        files = {
            'environment.zip': self.zipvalue,
            'student.py': self.studentfile,
            "grader.py": self.dic['basefiles']['grader.py'],
            'hashvalue': ziphashvalue,
            'pl.json': json.dumps(self.dic),
        }
        
        try: 
            x = requests.post(self.url, data={'execution_timeout': self.timeout}, files=files, timeout=10)
            x = x.text
        except Exception as e:
            x = dict()
            x['grade'] = dict()
            msg = "Erreur de la sandbox '"+self.name+"', si l'erreur persiste, merci de contacter votre professeur<br><br>"
            x['grade']['success'] = "info"
            x['grade']['feedback'] = msg+(str(type(e))+": "+str(e)).replace('<', '[').replace('>',']')
            x = json.dumps(x)
            
        return x
