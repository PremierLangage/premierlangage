#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  pleditor.py
#  
#  Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
#  

import tempfile, cd, subprocess, random, time, traceback, timeout_decorator, time

from serverpl.settings import DIRREPO

SANDBOX_FILES = {
    'grader': 'grader.py',
    'inputgenerator': 'inputgenerator.py',
    'soluce': 'soluce.py',
}

def createzipfile(files):
    with tempfile.TemporaryDirectory() as td:
        for n,v in files.items():
            with open(td+"/"+n,"w") as f:
                print(v,file=f)
        archivename = "env.zip"
        with cd.cd(td) :
            subprocess.run(['zip','-qjr',archivename,'.'])
            with open(archivename,'rb') as f:
                return f.read()
    

def get_zip_value(dic):
    if 'basefiles' not in dic and 'grader' not in dic:
        return None
    if 'basefiles' not in dic:
        dic['basefiles']=dict()
    new = dic['basefiles']
    for k, name in SANDBOX_FILES.items():
        if k in dic:
            new[name]=dic[k]
            del dic[k]
    dic['basefiles'] = new
    return createzipfile(dic['basefiles'])
    
        
def check_dic_pltp(dic):
    """ Check if the dic contains every needed key, can return:
        - False, error_msg
        - True, warning_msg
        - True, None
    """
    key_error = ['title',  'conceptl']
    key_warning = ['introduction']
    dic_key = dic.keys()
    warning = ""
    
    for key in key_error:
        if key not in dic_key:
            return False, "Error: Key missing in PL - '"+key+"'."
    
    for key in key_warning:
        if key not in dic_key:
            warning += "Warning: Key missing in PL - '"+key+"'.\n"
            
    if warning:
        return True, warning
    return True, None
    
    
@timeout_decorator.timeout(5, use_signals=False)
def check_dic_pl(dic):
    """ Check if the dic contains every needed key according to dic['type'], can return:
        - False, error_msg
        - True, warning_msg
        - True, None
    """
    if not 'type' in dic:
        return False, "Error: Key missing in PL - 'type'."
    
    try:
        typefilename=DIRREPO+'/plbank/types/'+dic['type']+'.py'
        with open(typefilename) as f:
            exec(f.read(), globals())
        dic['seed'] = time.time()
        if 'build' in dic:
            exec(dic['build'], globals())
            dic = build(dic)
        value = check(dic)
        del dic['seed']
        return value
    except IOError:
        return False, "Error: Couldn't find the file relative to '"+dic['type']+"' type."
    except Exception as e:
        return False, "Error in file "+typefilename + " "+str(type(e)).replace("<", "[").replace(">", "]") + ": "+str(e) + " - " + traceback.format_exc().replace('\n', '<br>')
