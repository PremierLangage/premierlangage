# Copyright user@here
author= Gilles
# le nom de l'exercice affiché par moodle 
name= 
# le title est un identifiant interne
# ceci devrai s'appeller slug
title=Exo 1
# les tag qui permettent d'autre utilisation sue la simple présence dans une
# feuille pltp (work in progress)
tag=

# ceci est important c'est le template de l'exercice qui vous fournis
# le code d'évaluation de votre exercice
# vous pouvez votre propre code d'évaluation
# pour le moment utilisez le template standard
extends= plbank:/python/0PLG/template.pl # version a jour 

# ceci est le text de l'énoncé de l'exercice affiché à l'élève
# la syntaxe est du markdown à la mode github 
# # titre
# **engras** *emphase* ‘italiques‘ etc
# vous pouvez aussi utiliser du html
#   <span style="color: red" > Du text en rouge </span>
#   le latex $\frac{A}{B}$ devrai aussi fonctionner 

before==
import random

n=random.randint(1,5)
p=random.randint(1,5)

text="Calculez la somme de {} et {}" .format(n,p)

==

# ceci est le code initial dans l'éditeur interactive qu'utilise les
# élèves.

grader==

import sys
import json
# ceci permet de retourner le json (sous forme d'une chaine) pour le logiciel de
# gestion des exercices
# seul les champs success et feedback sont utile pour le moment 
def failure(message):
	dico_reponse = { "success": False , "errormessages" : "" ,
	 "feedback": message, "other":"" ,"error":"","execution":""}
	print(json.dumps(dico_reponse))
	sys.exit(0)

#récupération du dictionnaire de l'exo
import plutils
d=plutils.getpldic()
exec(d['before'],d)
# lecture du code de l'etudiant 
f = open("student.py","r")
lignes = f.read().split('\n')
#
try:
    if (int(d['n'])+int(d['p'])) == int(lignes[0]):
	    dico_reponse = { "success": True , "errormessages" : "" ,
	    "feedback":"# bravo", "other":"" ,"error":"","execution":""}
	    print(json.dumps(dico_reponse))
	    sys.exit(0)
    else:
        failure(" vous ne savez pas compter")
except ValueError as e:
       failure(" entrer un entier sur la première ligne")
==



