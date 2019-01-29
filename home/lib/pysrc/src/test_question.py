#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  testQuestion.py
#  
#  Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
#  

import question
import plrequest
import os


def mysetup(text, filename="qtest.pl"):
    with open(filename,"w") as qt:
        print(text,file=qt)

def myteardown( filename="qtest.pl"):
	os.remove(filename)

def printdico(d):
    print("{",end="")
    for k in d.keys():
        if type(d[k]) == str :
            print("\""+k+"\" : \""+d[k],end="\",")
        elif type(d[k]) == list :
            print("["+",".join(d[k])+"]",end=",")
        elif type(d[k]) == dict :
            printdico(d[k])
            print(end=",")
        else:
            print("Type étrange ")
    print("}",end="")

def dicotopl(d):
        for k in d.keys():
            if type(d[k]) == str :
                if not "\n" in d[k]:
                    print(k+"= "+d[k])
                else:
                    print(k+"==")
                for line in d[k].split("\n"):
                    print(line)
                    print("==")
            elif type(d[k]) == list :
                print("["+",".join(d[k])+"]",end=",")
            elif type(d[k]) == dict :
                for z in d[k]:
                    print("files=@ "+z)
                print()
            else:
                raise ValueError("Type étrange ")



import json

def test_Question_load_simple():
    """
    Test de lecture d'un fichier simple  avec des mutli lines sans fichier
    """
    mysetup("bob== hhh\ndes truc\n==\naa=bb\nccccccc=k\nbxb==xx\n\n\nxxx yyyy\n# des trucs \n==\n# doit pas apparaitre")
    q=question.Question("qtest.pl",root=".")
    myteardown()
    assert json.loads(q.json) == {"bob": "des truc\n", "ccccccc": "k", "bxb": "\n\nxxx yyyy\n# des trucs \n", "aa": "bb",'url': 'qtest.pl',}


def test_question_load_withfiles():
    """
    Test de lecture d'un fichier avec des mutli lines
    """
    mysetup("a=b\nfiles=@ fortest3.py\n\n# doit pas apparaitre\nfiles=@fortest2.py\nfiles=@fortest1.py")
    mysetup("lefichier pout les test 1 \n nom unix fotest1.py","fortest1.py")
    mysetup("lefichier g\n\n\n\n\n\n\n\n\n\n\n\ny","fortest2.py")
    mysetup("lefichier grader.py","fortest3.py")
    
    q=question.Question("qtest.pl",root=".")
    myteardown()
    myteardown('fortest1.py')
    myteardown('fortest2.py')
    myteardown('fortest3.py')
    assert json.loads(q.json) == {"a": "b", "basefiles": {"fortest1.py": "lefichier pout les test 1 \n nom unix fotest1.py\n", "fortest3.py": "lefichier grader.py\n", "fortest2.py": "lefichier g\n\n\n\n\n\n\n\n\n\n\n\ny\n"},'url': 'qtest.pl'}

def test_question_save_to_dir():
    mysetup("a=b\nfiles=@ fortest3.py\n\n# doit pas apparaitre\nfiles=@fortest2.py\nfiles=@fortest1.py","gommo.pl")
    mysetup("lefichier pout les test 1 \n nom unix fotest1.py","fortest1.py")
    mysetup("lefichier g\n\n\n\n\n\n\n\n\n\n\n\ny","fortest2.py")
    mysetup("lefichier grader.py","fortest3.py")
    q=question.Question("gommo.pl",root=".")
    myteardown("gommo.pl")
    myteardown('fortest1.py')
    myteardown('fortest2.py')
    myteardown('fortest3.py')
    dirname = q.createdir("print(4)")
    assert len([x for x in dirname.iterdir()]) == 5
    from shutil import rmtree
    rmtree(str(dirname))


def qforsandbox():
    mysetup("autor=dr\nsoluce=print(4)\n#\ngrader==\n\nimport json\nd={ \"success\": True , \"errormessages\" : \"\",\"feedback\": \"Yesssss\", \"other\": \"\",\"error\":\"\",\"execution\": \"\",\"grade\":\"1\"}\nprint(json.dumps(d))\n==\nexpectedoutput==\n4\n==\n","testSandbox.pl")
    q =question.Question("testSanbox.pl",root=".")
    myteardown("testSandbox.pl")
    q.dir  = q.createdir("print(5)\n")
    return q

def test_SanboxSession():
    q=qforsandbox()
    s= plrequest.SanboxSession(q,"http://pl-sandbox-test.u-pem.fr/?action=version",studentfile="print(4)")
    assert s.answer.text == '{"version":"0.5"}'


def test_SanboxSession2():
    q=qforsandbox()
    s= plrequest.SanboxSession(q,"http://pl-sandbox-test.u-pem.fr/?action=execute",studentfile="print(4)")
    print(s.answer.text)
    assert json.loads(s.answer.text) == {"platform_error":[],"grade":{"errormessages":"","execution":"","feedback":"Yesssss","error":"","success":True,"other":"","grade":"1"}}
