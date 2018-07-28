import os
import sys
import json
sys.path.append(os.path.dirname(__file__)+"/..")


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

if BASE_DIR not in sys.path:
    sys.path.append(BASE_DIR)


#os.environ.setdefault("DJANGO_SETTINGS_MODULE", "serverpl.settings")



from pleditor import check_dic_pl,  get_zip_value
from plparser import dicFromFile
from plrequest import SandboxCheck , PlMissingSoluceError
sys.path.append(os.path.dirname(__file__)+"/../")
from playexo.pythonbuildertest import PythonBuilderTest

import html

verbose=False

def evaluate(dic, answer):
    try:
        exec(dic['evaluator'], globals())
        state, feedback = evaluator(answer, self.dic)
        if (not isinstance(state, bool)) or (not isinstance(feedback, str)):
            return True, ("/!\ ATTENTION: La fonction d'évaluation de cet exercice est incorrecte, merci de prévenir votre professeur:\n"
                          "Function evaluator() should return a tuple (bool, str).")
        return state, feedback
    except Exception as e:
        er=html.escape(str(type(e))+":\n"+str(e))
        return True, ("/!\ ATTENTION: La fonction d'évaluation de cet exercice est incorrecte, merci de prévenir votre professeur:\nError - "+er)
    
#A FAIRE A CHAQUE FOIS QUE L'OPTION -K EST PRECISEE
def go_to_tmp(sandbox):
    if  "127.0.0.1" in sandbox.url :
        os.chdir(sandbox.createlocaldir())
    else:
        os.chdir(result['path_files'])
    os.environ['PS1']="Testez votre grader> "
    os.execl("/bin/bash",'bash','-norc')
    

def sandbox_checking(sandbox, studentcode = None):
    answer = sandbox.call(studentcode)
    result = json.loads(answer)
    if result["platform_error"] != []:
        print("\n[Invalid Pl] : Erreur de plateforme : " + str(result["platform_error"])+'\n')
        print("Vérifiez les fichiers produits par la Sandbox "+str(sandbox.url) +'\n')
        go_to_tmp(sandbox)
    if not studentcode :
        if not result['grade']['success'] :
            print("\n[Invalid PL] : Bad soluce or testcode\n")
            go_to_tmp(sandbox)
    elif result['grade']['success'] :
        print('arv')
        print("\n[Invalid Pl] :  mauvais code donne True\n")
        go_to_tmp(sandbox)


def checkplfile(filename, repo, sandboxurl="http://pl-sandbox-test.u-pem.fr/?action=execute", verbose = False):
    """
    checkplfile : verifie le bon fonctionnement d'un exercice 
    
    1) charger avec plparser l'exercice et verifier la bonne syntaxe 
    si on echoue ici on retourne false,1

    2) verifier le "type" de l'exo si toute les balises nécessaires à l'exo sont présentes 
    si on echoue ici on retourne false2
    2.5) builder l'exercice (FIXME timeout)
    si echoue false,3
    3) si l'exo utilise la sandbox on test avec "print(3000)" comme studentcode 
    la réponse de la sandbox doit être plateforme==[] et sucess=false
    4) si l'exo utilise la sandbox on test avec soluce ou testcode comme studentcode 
    la réponse de la sandbox doit être plateforme==[] et sucess=True
    Dans les cas 4 et 5 si plateforme != [] 
    false,4
    
    si tout est ok retourne True,None
    """
    q,warning = dicFromFile(filename,repo)
    print(warning)
    
    if not q :
        return False
    
    state, warning_msg = check_dic_pl(q)
    if not state:
        print(filename+" - "+warning_msg)
        return False
    if warning_msg:
            warning += warning_msg+'\n'
    try:        
        q = PythonBuilderTest(q).get_dico()
    except Exception as e:
        print(str(type(e)) + str(e))
        return False
    q['zipvalue'] = get_zip_value(q)
    if not q['zipvalue']:
        #Ceci devrait fonctionner pour tous les gifts si on ne duplique plus les réponses 
        list_rep = [q[x] for x in q.keys() if 'answer' in x]
        v,f = evaluate(q,list_rep)
        if not v:
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
    q,warning = dicFromFile(filename,repo)
    print(warning)
    if not q :
        return False
    for pl in q['conceptl']:
        if not checkplfile(pl[0], pl[1], sandboxurl):
            print(pl[0])
            return False

    return True


''' ajouter des options pour préciser une url pour la sandbox si nécessaire
    tester si ca ping etc
'''




