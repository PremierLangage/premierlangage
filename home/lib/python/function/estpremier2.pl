# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Est Premier
title= Premier Suivant   # N'oubliez pas de remplir ce champs svp
tag=def|parameters|return # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template.pl
text==


## Premier Suivant


Écrire ou réutiliser une fonction **estpremier** qui prend comme arguments un entier positif et qui retourne un booléen (True ou False) si l'entier passé en argument est premier on non.

Avec la fonction **estpremier** écrivez la fonction **premiersuivant** qui prend un entier *n* en argument et qui retourne le premier nombre premier strictement plus grand que *n*.

Exemples :

	>>> premiersuivant(2)
	3
	>>> premiersuivant(12)
	13
	>>> premiersuivant(97)
	101
	>>> premiersuivant(65537)
	65539

==

# Choisir pltest ou soluce ou expectedoutput
# 14041997
pltest==
>>> premiersuivant(2)
3
>>> premiersuivant(12)
13
>>> premiersuivant(97)
101
>>> premiersuivant(65537)
65539
==


testcode==
def estpremier(p):
	for i in range(2,p//2):
		if p % i == 0:
			return False
	return True

def premiersuivant(k):
	while True:
		k += 1
		if estpremier(k):
			return(k)

==
