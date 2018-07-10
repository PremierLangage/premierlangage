# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Vérification des identificateurs 
title= Vérification des identificateurs 
tag=identifier
give=identifier
# 0PLG

type=sandbox

text==

Eliminez les lignes qui ne sont pas des identificateurs utilisables pour une variable en python :

	jenesuispasunidentifiant
	JeNeSuisPasUnIdentifiant
	Je ne suis pas un identifiant
	a
	a1
	1a
	abc
	def
	"bob"
	'bob'
	b*b
	__truc__
	@@Truc@@
	truc()
	$pip$
	42
==

code==
# Eliminez les lignes qui ne sont pas des identifiants correcte
jenesuispasunidentifiant
JeNeSuisPasUnIdentifiant
Je ne suis pas un identifiant
a
a1
1a
abc
def
"bob"
'bob'
b*b
__truc__
@@Truc@@
truc()
$pip$
42
# Fin du code, n'écrivez pas de code après cette ligne s'il vous plait !
# L'équipe PL
==

# dans cet exercice vous avez un grader totalement
# spécifique à l'exercice 
# vous pouvez l'utiliser comme modèle pour 
# un autre exercice 

grader==
#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  drgrader.py
#  
#  Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
#  



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

# lecture du code de l'etudiant 
f = open("student.py","r")
lignes = f.read().split('\n')

# la suite est spécifique à l'exercice 
# il faut garder les identificateurs correct 
# si l'on efface tout cela ne marche pas ;)
if len(lignes)<2:
	failure("Qui a dit efface tout cela va marcher ?\n")

if "1a" in lignes :
		failure("Désolé mais **1a** n'est pas un identifiant correct.\nIl peut être confondu avec le nombre en héxadécimal 170 \n Aucun identificateur ne peut commencer par un chiffre\n Par contre a1 est correct \n")
if "\"bob\"" in lignes or "\'bob\'" in lignes:
		failure(" Les **bob** sont des chaines de caractères les \" guillemets et les \' apostrophes délimitant le début et la fin de celles-ci.\n Ce n'est donc pas un identificateur.")
if "b*b" in lignes:
		failure(" **b*b** est le résultat d'une multiplication * de la variable b\n Ce n'est donc pas un identificateur.")
if "@@Truc@@" in lignes:
		failure(" le caractère @ n'est pas autorisé dans les identificateurs.\n @@Truc@@ n'est donc pas un identificateur.")
if "truc()" in lignes:
		failure("# **truc()** est le resultat d'un appel de la fonction **truc**\n\n **truc** est un identificateur, mais truc() est le résultat de l'appel.\nCe n'est donc pas un identificateur.")
if "def" in lignes:
		failure(" **def** est un mot réservé du langage <a href=\"https://fr.wikibooks.org/wiki/Programmation_Python/Tableau_des_mots_r%C3%A9serv%C3%A9s\">Tableau des mots réservés</A> ce mot permet de définir une fonction.\n C'est un mot réservé donc pas utlisable pour une variable.")
if "$pip$" in lignes:
		failure(" **$pip$** contient des $ qui ne sont pas autorisés dans les identificateurs de variables.\n Ce n'est donc pas un identificateur.")
if "Je ne suis pas un identifiant" in lignes:
		failure(" le caractère espace permet de séparer les mots et les identificateurs il n'est donc pas autorisé dans un identificateur.\n **\'Je ne suis pas un identifiant\'** n'est donc pas un identificateur.")

if "42" in lignes:
		failure(" **42** est un entier et donc pour ne pas avoir d\'ambiguïté entre des valeurs entière et des identificateurs les valeurs entières ne sont pas des identificateurs.")


for x in ["jenesuispasunidentifiant", "JeNeSuisPasUnIdentifiant", "a",
"a1","abc", "__truc__"]:
	if not x in lignes:
		failure("Vous avez éliminé l'identificateur "+str(x)+" qui est un identificateur valable.\n")

# Si aucune des cause d'erreur n'a été détécté alors l'exercice et juste :)
# nous aurions pu avoir une fonction successs pour ces deux lignes ;)

dico_reponse = { "success": True , "errormessages" : "" ,
 "feedback": "# Bien \n vous avez **identifié** tout les identificateurs :)\n", "other":"" ,"error":"","execution":""}
print(json.dumps(dico_reponse))


==

soluce==
jenesuispasunidentifiant
JeNeSuisPasUnIdentifiant
a1
a
abc
__truc__
==



evaluator=@ /pysrc/functions/sandboxevaluator.py

form=@ /python/form/editorform.html
