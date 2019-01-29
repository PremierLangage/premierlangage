# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
title=randomcolor1.pl
# N'oubliez pas d'indiquez les tags
tag=list|function|random
template=/python/0PLG/template
tag=function|random|list
text==

# Couleur aléatoire
L'objectif est de fournir une fonction qui fournis une couleur tirée aléatoirement dans une liste de couleurs.
La fonction s'appelle **randomcolor**.
La liste de couleur est fournie en paramêtre de la fonction.

Exemple:

	randomcolor(['blue','red','white','black'])
	retourne 
	blue

==
code==
# la fonction random est définie dans le module random
import random
colorlist=['blue','red','white','black']

def randomcolor(cl):
	pass

==

pltest==
>>> randomcolor(['yellow']) # Ne marche pas avec un seul élement dans la liste
'yellow'
>>> colorlist=['blue','red','white','black']
>>> randomcolor(colorlist) in colorlist # usage normal 
True
>>> not randomcolor(colorlist) in colorlist # c'est aléatoire mais pas dans la liste 
False
>>> vide=[]
>>> randomcolor(vide)# ne renvoie rien 
>>> ll =[u for u in range(1,10000)] 
>>> randomcolor(ll) == randomcolor(ll) and randomcolor(ll) == randomcolor(ll) # votre fonction n'est pas aleatoire
False
==

testcode==
import random
def randomcolor(cl):
	if len(cl)>0:
		return cl[random.randint(0,len(cl)-1)]
==



