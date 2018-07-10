#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  plcheck.py
#  
#  Copyright 2017 Raihan BILAL <rbilal@u-pem.fr>
#  

import subprocess
import sys
import os
import getopt

sys.path.append(os.path.dirname(__file__)+"/..")


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

if BASE_DIR not in sys.path:
    sys.path.append(BASE_DIR)

#from newcheck import checkplfile, checkpltpfile, verbose
from pleditor import check_dic_pl,  get_zip_value
from plparser import dicFromFile
from plrequest import SandboxCheck
sys.path.append(os.path.dirname(__file__)+"/../")
from playexo.pythonbuildertest import PythonBuilderTest
    
verbose=False
debug=False


defaultsandbox="http://pl-sandbox-test.u-pem.fr/?action=execute"
localsandbox="http://127.0.0.1:8000/sandbox/?action=execute"

commandline=False

helpp='''
Utilisation : plcheck.py [OPTION]... [PL/PLTP]...
Check if the pl/pltp is usable

If you want check a pl you have to precise the repository and the path from this repository like this
    
    repository:path

If you don't precise a repo, plcheck will search in plbank

About the pltp you have to precise the relative path towards the pltp file, like usually

-s, --sandbox precise a sandbox address

-v, --verbose display more informations

-d, --debug redirect you where the sandbox files are stored and give you a direct access to this files

-h, --help show you this page and exit

'''

usage = ''' 
You have the following options :
-s, --sandbox to precise a sandbox address

-v, --verbose to display more informations

-d, --debug to redirect you where the sandbox files are stored and give you a direct access to this files

-h, --help to show you a complete help page
'''

def evaluate(dic, answer):
    try:
        exec(dic['evaluator'], globals())
        state, feedback = evaluator(answer, dic)
        #print("state is :", state)
        if (not isinstance(state, bool)) or (not isinstance(feedback, str)):
            return 2, ("[Error]: Wrong evaluator\n"
                          "Function evaluator() should return a tuple (bool, str).")
        return state, feedback
    except Exception as e:
        return 3, ("[Error] : Exception occured during evaluation \nError - "+str(type(e))+":\n"+str(e))

def check_responses(good_rep, wrong_rep) :
    if (not isinstance(good_rep, dict)) or (not isinstance(wrong_rep, dict)) :
        print ("/!\ Error : create_responses() should return a tuple (dict, dict), please check the value of the 'responses' key")
        return False
    return True

def go_to_tmp(sandbox):
    if  "127.0.0.1" in sandbox.url :
        os.chdir(sandbox.createlocaldir())
    else:
        os.chdir('/tmp/sandbox')
    os.environ['PS1']="Testez votre grader> "
    os.execl("/bin/bash",'bash','-norc')


def sandbox_checking(sandbox, studentcode = None):
    result = sandbox.call(studentcode)
    if debug :
        go_to_tmp(sandbox)
    if result["platform_error"] != []:
        print("\n[Invalid Pl] : Erreur de plateforme : " + str(result["platform_error"])+'\n')
        print("Vérifiez les fichiers produits pour la Sandbox "+str(sandbox.url) +'\n')
        go_to_tmp(sandbox)
    if not studentcode :
        if not result['grade']['success'] :
            print("\n[Invalid PL] : Bad soluce or testcode\n")
            go_to_tmp(sandbox)
    elif result['grade']['success'] :
        print("\n[Invalid Pl] :  Bad code evaluated as True\n")
        go_to_tmp(sandbox)
    

def checkplfile(filename, repo, sandboxurl="http://pl-test.u-pem.fr/?action=execute"):
    """
    checkplfile : verifie le bon fonctionnement d'un exercice 
    
    1) charger avec plparser l'exercice et verifier la bonne syntaxe 

    2) verifier le "type" de l'exo si toute les balises nécessaires à l'exo sont présentes 
    2.5) builder l'exercice (FIXME timeout)
    3) si l'exo utilise la sandbox on test avec "print(3000)" comme studentcode 
    la réponse de la sandbox doit être plateforme==[] et sucess=false
    4) si l'exo utilise la sandbox on test avec soluce ou testcode comme studentcode 
    la réponse de la sandbox doit être plateforme==[] et sucess=True
    
    si tout est ok retourne True
    """
    q,warning = dicFromFile(filename,repo)
    if not q:
        print(warning)
        return False
    state, warning_msg = check_dic_pl(q)
    if not state:
        print(filename+" - "+warning_msg)
        return False
    if warning_msg:
            warning += warning_msg+'\n'

    q = PythonBuilderTest(q).get_dico()
    
    try:
        q['zipvalue'] = get_zip_value(q)
    except Exception as e:
        print(str(type(e)) + str(e))
        return False
    
    print(q.keys())
    
    if not q['zipvalue']:
        if  q['type'] == 'Description' or q['type'] == 'description':
            print("Description is validated by parsing")
        else:  
            exec(q['consistency'], globals())
            consistent, feedback = check_consistency(q)
            if not consistent :
                print("\n[Invalid PL]  "+feedback)
                return False

            exec(q['responses'], globals())
            good_rep, wrong_rep = create_responses(q)
            if not check_responses(good_rep, wrong_rep):
                return False

            v,f = evaluate(q, good_rep)
            if v == False :
                print("\n[Invalid PL] : PL is evaluated as wrong with a correct answer, please check your evaluator and create_responses method\n")
                return False
            elif v != True :
                print(f)
                return False
            v,f = evaluate(q, wrong_rep)
            #print("v is: ",v)
            if v == True:
                print('[Invalid Pl] : Pl is evaluated as correct with a wrong answer, please check your evaluator and create_responses method\n')
                return False
            if v != False : 
                print(f)
                return False
    #If dictionnary contains a zipvalue key, we have to use the sandbox
    else:
        s = SandboxCheck(q, url = sandboxurl)
        try:
            rappel=""
            sandbox_checking(s)
            s.dic['zipvalue'] = s.zipvalue
            rappel ='re'
            sandbox_checking(s, 'print(3000)')
        except Exception as e:
                print("Impossible de "+rappel+"joindre la sandbox : " ,sandboxurl, " - " + "exception is : " + str(type(e)) + " : "+ str(e))
                print("Avez vous lancer la sandbox ?")
                print("cd premierlangage/server/serverpl/")
                print("./run")
                return False
    return True
    '''if verbose: print("La correction est "+result["grade"]['feedback'])
    print("Saving tags")
    for key in q.dico.keys():
        print(key)
    tagl=q.dico["tag"].split("|")
    for tag in tagl:
        plcreatetag(tag,description="Initialisation par plcheck\n Dominique Revuz\n")
    print("Tags saved")'''


def checkpltpfile(filename, repo, sandboxurl="http://pl-sandbox-test.u-pem.fr/?action=execute") :
    #Return None only in case of invalid format, this case is treated before calling checkplfile method
    q,warning = dicFromFile(filename,repo)
    print(warning)

    for pl in q['conceptl']:
        if not checkplfile(pl[0], pl[1], sandboxurl):
            print(pl[0])
            return False
        else:
            docommit_pl(pl[0], pl[1])
    x = getrepodir()
    if 'repo' in x:
        x=x.split('/repo/')[0]
    os.chdir(x+'/repo/'+repo)
    return True

def find_bank(path):
    if path.startswith('/'):
        path=path[1:]
    p = os.path.abspath(path)
    print("p is :",p)
    #We know that the bank is after repo/ in the path
    find_repo = p.split('/')
    indice_repo =  find_repo.index('repo')+1
    return find_repo[indice_repo]


def main(exopath,sandboxurl=localsandbox):
    if verbose :
        pass
    if exopath.endswith(".pl"):
        if ":" in exopath:
            bank = exopath.split(':')[0]
            pl = exopath.split(':')[1]
            if checkplfile(pl, bank, sandboxurl=sandboxurl):
                docommit_pl(pl, bank)
        else:
            if checkplfile(exopath, 'plbank', sandboxurl=sandboxurl):
                docommit_pl(exopath, 'plbank')
        subprocess.run(['git', 'push'])
        return True
    if exopath.endswith(".pltp"):
        bank = find_bank(exopath)
        if 'repo' in os.getcwd():
            exopath = os.getcwd().split('repo')[1] + '/' + exopath
        if checkpltpfile(exopath, bank, sandboxurl=sandboxurl):
            docommit_pltp(exopath, bank)
        subprocess.run(['git', 'push'])
        return True
    print("[Error] : Invalid file format, expected formats are pl or pltp")
    return False

def getrepodir():
    return subprocess.Popen(['git', 'rev-parse', '--show-toplevel'],
    stdout=subprocess.PIPE).communicate()[0].rstrip().decode("utf-8")

def docommit_pl(name, bank):
    print('\n'+name.split("/")[-1]+" is valid, committing...\n")
    '''x = subprocess.check_output(['git', 'rev-parse', '--show-toplevel'])
    x = str(x[:-1], 'utf-8')'''
    x = getrepodir()
    if 'repo' in x:
        x=x.split('/repo/')[0]
    name=x+'/repo/'+bank+'/'+name
    os.chdir(x+'/repo/'+bank)
    subprocess.run(['git', 'add', name])
    subprocess.run(['git', 'commit','-m','plcheck commit '+name, name])

def docommit_pltp(name, bank):
    print('\n'+name.split("/")[-1]+" is valid, committing...\n")
    if bank in name:
        name = name.split(bank+'/')[1]
    subprocess.run(['git', 'add', name])
    subprocess.run(['git', 'commit','-m','plcheck commit '+name, name])


def usage():
    print(usage)

def show_help():
    print(helpp)

if __name__ == '__main__':
    sandboxarg = localsandbox
    
    try :
        opts, args = getopt.getopt(sys.argv[1:], "s:vdh", ["sandbox=", "verbose", "debug", "help"])
    except getopt.GetoptError as goe:
        print(goe)
        usage()
        sys.exit(1)

    for opt, arg in opts:
        if opt in ('-v', '--verbose'):
            verbose = True
        if opt in ('-s', '--sandbox'):
            sandboxarg = arg
        if opt in ('-d', '--debug'):
            debug = True
        if opt in ('-h', '--help'):
            show_help()
            sys.exit(1)
    try:
        version = subprocess.run(['curl', str(sandboxarg[:-7])+'version'],stdout=subprocess.DEVNULL)
        if debug : print(version)
    except subprocess.CalledProcessError as cpe:
        print("Attention vous aviez oublié de lancer le serveur")
        p = subprocess.Popen(['python', '/home/igm/premierlangage/server/serverpl/manage.py', 'runserver', '&'], shell=True).pid
    
    #version = subprocess.check_output(['curl', str(sandboxarg[:-7])+'version'])
    #while (str(version, 'utf-8') != "{\"version\":\"pysandbox-0.1\"}"):
        #sleep(1)
        #version = subprocess.check_output(['curl', str(sandboxarg[:-7])+'version'])
    
    for pl in args:
        try:
            main(pl,sandboxurl=sandboxarg) #  tout les test en local and sandbox
        except Exception as e:
            print("Problem avec ",pl)
            raise e

    sys.exit(0)
