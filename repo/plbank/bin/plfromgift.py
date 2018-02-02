#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  pltpfromgift.py
#  
#  Copyright 2017 Raihan BILAL <rbilal@u-pem.fr>
#  

'''gifttol.py
    Load Questions from gift file using the giftparser.py
    Creates one dictionnary per Question then writes new pl files in plbank and a new pltp containing them
'''

"""
pltpfromgift repertoiredestination giftfiles ...

creer des repertoire repertoirededestination/basename(gifile)/ contenant

un fichier basename(gitstfile).pltp et un pour chaque 
"""

import os
import sys
from os.path import basename, isdir, isfile, realpath, dirname
sys.path.append(os.path.dirname(__file__)+"/../../../server/serverpl/pysrc")
from giftparser import *
import re
from copy import copy
import getopt

def work(rel_path):
    res = list()
    try :
        with open(rel_path, 'r') as gift :
            questions = parseFile(gift)
            print(str(len(questions)) + " question(s) chargée(s)")
            for q in questions:
                d = q.toPl()
                if d:
                    res.append(d)
        return res
    except IOError as e:
        print("Impossible d'ouvrir le fichier : " + str(rel_path))
        return None


def create_pl(dicts, dest_path, pltp):
    '''
        Création pour chaque dictionnaire dans une liste de dictionnaire d'un fichier .pl
        Ecriture dans le .pl sous la forme :
        clef==
        valeur
        ==
        
        :param dicts : Une liste de dictionnaire
        :type dicts: List of dict
    '''
    list_res = list()
    for d in dicts :
        with open(dest_path+pltp+"/"+ re.sub(r'\W+', '', d['title']) +".pl", 'w') as pl :
            for k in d.keys():
                if '\n' in str(d[k]):
                    print(str(k) +"==\n"+str(d[k])+"\n==", file=pl)
                else:
                    print(str(k) +"="+str(d[k]), file = pl)
            list_res.append(str(pl.name.split('/')[-1]))
    for pl in list_res : print(pl)
    return list_res

def create_pltp(dicts, dest_path, pltp_name):
    '''
        Création des pl puis creation d'un pltp qui les référence tous
        :param dicts : Une liste de dictionnaire
        :type dicts: List of dict
    '''
    #If a pltp have already this name, we add a number to the name
    nouveau_pltp = (dest_path + pltp_name)
    try:
        os.mkdir(nouveau_pltp)
    except FileExistsError:
        n = 2
        while isdir(nouveau_pltp + str(n)):
            n+=1
        os.mkdir(nouveau_pltp + str(n))
        pltp_name = pltp_name + str(n)
    except OSError as e:
        print(type(e))
        print(str(e) + "impossible de créer le dossier")
        print(nouveau_pltp)
        sys.exit(1)
    pl_names = create_pl(dicts, dest_path, pltp_name)

    with open(dest_path + "%s/%s.pltp"%(pltp_name, pltp_name), 'w') as pltp:
        print("title=" + pltp_name.replace("_", " "), file = pltp)
        print("concept==gift", file = pltp)
        for plname in pl_names :
            print("@ /gift/%s/"%(pltp_name)+plname, file = pltp)
        print("==", file=pltp)

def treat_options(repo, opts):
    '''if not "-r" in [x[0] for x in opts]:
        repo = os.path.dirname(__file__)+"/../"
        if not "-d" in [x[0] for x in opts]:
            repo += "gift/"'''

    opt_r= False
    opt_d = False

    for opt, arg in opts:
        if opt == "-r":
            opt_r = True
            prefix_repo = arg
        if opt == "-d":
            opt_d = True
            suffix_repo = arg

    if opt_r and opt_d:
        repo = prefix_repo + '/' + suffix_repo
        if not isdir(repo):
            os.mkdir(repo)
    elif opt_r:
        repo = prefix_repo + "/gift"
    elif opt_d:
        repo += suffix_repo
        if not isdir(repo):
            os.mkdir(repo)

    return repo

def usage():
        print('''
Vous disposez des options facultatives suivantes : 

-r=[destination]
Pour renseigner l'endroit où vous désirer ranger le dossier qui contiendra votre pltp et vos pl, par defaut la destination est plbank

-d=[dir_gift]
Pour renseigner dans quel répertoire de l'endroit où vous souhaitez ranger votre dossier qui contiendra votre pltp et vos pl, par défaut dir_gift = gift/
            ''')

def main(argv):

    try :
        opts, args = getopt.getopt(argv, "r:d:")
    except getopt.GetoptError as ge:
        print(ge)
        usage()
        sys.exit(1)
    
    repo = os.path.dirname(__file__)+"/../"
    
    if not opts:
        repo += "gift/"
    else:    
        repo = treat_options(repo, opts)
    
    #adding a slash if necessary
    if not (repo[-1] == '/'):
        repo += '/'

    prefix_dir = os.getcwd()

    #si ce n'est pas un chemin absolu qui est renseigné    
    if not repo[0] == '/':
        repo = prefix_dir +'/'+repo

    for i in range(len(args)):
        if (args[i][0] == '/'):
            gift_dir = args[i]
        #si ce n'est pas un chemin absolu qui est renseigné
        else:
            gift_dir = prefix_dir + '/'+args[i]
        dicts = work(gift_dir)

        if dicts :
            create_pltp(dicts, repo, basename(gift_dir).split(".")[0])

if __name__ == '__main__':

    main(sys.argv[1:])
