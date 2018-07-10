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
from .question import Question
import zipfile
import pathlib

from .cd import cd
import subprocess
import hashlib

defaultpldataurl="http://127.0.0.1:9090"

def pllogdata(user,zipsha1,pljsonsha1,studentfile=None,mode="try",url = defaultpldataurl):
    if studentfile == None:
        mode= "start"
    geturl=url+"/add/tt"
    posturl=url+"/add/xx"
    try:
        csrftoken = requests.get(geturl).cookies['csrftoken']
        header = {'X-CSRFToken': csrftoken}
        cookies = {'csrftoken': csrftoken}
        r=requests.post(posturl,headers=header, cookies=cookies,data={"user":user,"code":studentfile,"mode":mode,"zipsha1":zipsha1,"pljsonsha1":pljsonsha1})
    except Exception as e:
        print(" Berk can't access pldata",e) # don't dye for this
        r=None
    return r

def plcreatetag(tag,description="construit automatiquement"):
    if studentfile == None:
        mode= "start"
    createurl="http://pl.univ-mlv.fr/concept/create/"
    existurl="http://pl.univ-mlv.fr/concept/exist/"+tag+"/"
    try:
        r=requests.get(existurl)
        if r.ok : # le tag exist sortie 
            return
        csrftoken = requests.get(createurl).cookies['csrftoken']
        header = {'X-CSRFToken': csrftoken}
        cookies = {'csrftoken': csrftoken}
        r=requests.post(createurl,headers=header, cookies=cookies,data={"name":tag,"lname":tag,"description":description})
    except Exception as e:
        print(" Berk can't access pl.univ-mlv.fr",e) # don't dye for this
        r=None
    return r

class SandboxSession:
    def __init__(self,question,url,studentfile):
        self.question = question
        self.url = url
        self.studentfile = studentfile
        self.call(studentfile)


    def createEnvZipRun(self):
        from shutil import rmtree
        rmtree('/tmp/env/', ignore_errors=True)
        p=pathlib.Path('/tmp/env/')
        p=self.question.createdir(self.studentfile)
        self.zipname = str(p.resolve() /  "env.zip")
        with cd.cd(str(p)) :
            subprocess.run(['zip','-qjr','env.zip','.'])
            



    def checkgrader(self):
        self.question.checkgrader()

    def call(self,studentfile):
        self.createEnvZipRun()
        self.checkgrader()
        mn=hashlib.sha1()
        zipvalue=open(self.zipname, 'rb').read()
        mn.update(zipvalue[:])
        self.ziphashvalue = mn.hexdigest()
        a=self.question.getcleanjson()
        a=a.encode()
        pllogdata(-1,self.ziphashvalue,hashlib.sha1(a).hexdigest(),self.studentfile)
        self.files = {'environment': zipvalue,
            'student.py':studentfile,
            "grader.py":self.question.dico['grader'],
            'hashvalue':self.ziphashvalue,
            'pl.json':self.question.json}
        try:
            self.answer = requests.post(self.url,data=self.question.dico,files=self.files,timeout=1000)
        except Exception as e:
            print(" Problem avec post sur",self.url)
        return self.answer

