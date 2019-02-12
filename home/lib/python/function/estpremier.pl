# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Est Premier
title= Est Premier   # N'oubliez pas de remplir ce champs svp
tag=def|parameters|return # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template.pl
text==


## Est Premier

Écrire une fonction **estpremier** qui prend comme arguments un entier positif et qui retourne un booléen (True ou False) si l'entier passé en argument est premier on non.

Un nombre est premier si il n'est divisible que par 1 et par lui même.
Il faut donc tester les autres diviseurs possible si l'on en trouve un c'est fini et l'on peux retourner False sinon on n'en a pas trouvé et l'on peut retourner True.


Exemples :

	>>> estpremier(2)
	True
	>>> estpremier(12)
	False
	>>> estpremier(97)
	True
	>>> estpremier(65537)
	True

==

# Choisir pltest ou soluce ou expectedoutput

pltest==
	>>> estpremier(2)
	True
	>>> estpremier(12)
	False
	>>> estpremier(97)
	True
	>>> estpremier(65537)
	True
	>>> from random import randint
	>>> estpremier(randint(1,1000)*randint(1,1000))
	False
==


testcode==
def estpremier(p):
	for i in range(2,p//2):
		if p % i == 0:
			return False
	return True
==
