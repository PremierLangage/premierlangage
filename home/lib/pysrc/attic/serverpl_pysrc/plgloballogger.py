#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  plgloballogger.py
#  
#  Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
#  

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
