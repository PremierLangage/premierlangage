
# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
title=stackbasic

template=/python/0PLG/template
soluce=Y pas de méthode

concept=call|return
text==
Pour modéliser une pile nous allons proposer trois fonctions qui permettent de manipuler une pile.
Une fonction //create()// qui retourne une pile.
Une fonction //push(pile,value)// qui ajoute la valeur à la pile 
Une fontion //pop(pile)// qui retire le haut de la pile et retourne la valeur.

Ecrire les trois fonctions.

==
code==
# Veuillez saisir votre code ici
def create():
	return []

def push(pile,valeur):
	pass

def pop(pile):
	pass

==
grader==
import sys
import json 


dico_good = { "success": True , "errormessages" : "" , "execution": "OK", "feedback": "ok", "other": "" }
dico_bad = { "success": False , "errormessages" : "création d'une exception", "execution": "", "feedback": "modifier votre valeur", "other": "" }


try:
	from student import create,push,pop
	pipi = create()
	push(pipi,"val1")
	push(pipi,"val2")
	if pop(pipi) == "val2":
		print(json.dumps(dico_good))
	else:
		dico_bad["errormessages"] = "Valeur incorrecte  "
		dico_bad["feedback"] = " Vous renvoyez le premier élément entré et pas le dernier"
		print(json.dumps(dico_bad))
except:
    print(json.dumps(dico_bad))
==

