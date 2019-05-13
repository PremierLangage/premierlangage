
# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
title=undopile.pl
tagname=stack

template=/python/0PLG/template
soluce=Y pas de méthode




text==

un collègue programmeur écrit un éditeur, pour pouvoir proposer un mécanisme de **Undo** (annulation), il a besoin de pouvoir stocker des commandes et de pouvoir récuperer ces commandes. Bien sur il veut récupérer les commandes dans l'ordre inverse dans lesquelles il les a entrées. Comme ces commandes peuvent prendre beaucoup de place nous souhaitons limiter le nombre de undo possible à TAILLE (valeur par default 100). 

Pour lui simplifier la vie je vais lui proposer trois fonctions: **setTaille(pile,taille)** qui modifie le nombre maximal de commande enregistrées.
**savecommande(commande)** qui sauvegarde une commande (et oublie le plus vielle commande si l'ajout fait dépasser la taille maximum.
**loadcommande()** qui dépile la dernière commande et renvoi celle ci.

Pour stocker la pile nous utiliserons une liste que l'on passe en paramêtre, la position 0 contenant la taille maximale. 

==
code==
# Veuillez saisir votre code ici

==
grader==
import sys
import json 


dico_good = { "success": True , "errormessages" : "" , "execution": "OK", "feedback": "ok", "other": "" }
dico_bad = { "success": False , "errormessages" : "création d'une exception", "execution": "", "feedback": "modifier votre valeur", "other": "" }


try:
	import student
	mapile = []
	savecommande(mapile,"open") 
	if loadcommande(mapile) != "open" :
		dico_bad["error messages"]= "Ne retourne pas l'élément entrée"
		print(json.dumps(dico_bad))
	print(json.dumps(dico_good))
except:
    print(json.dumps(dico_bad))
==

