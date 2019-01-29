# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=  Carre Cube 
title= Carre Cube

tag= def|return  # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template.pl

taboo=print
text==

# Ecrire deux fonctions **carre** et **cube**
 
	Qui prend un parametre entier n et qui retourne :

	carre(n) retourne n*n
	cube(n) retourne n*n*n  ou n**3

# taboo

	Ne pas utiliser print.

==

pltest==
>>> carre(0)
0
>>> carre(56)
3136
>>> carre(-1)
1
>>> cube(1)
1
>>> cube(12)
1728
>>> cube(-777)
-469097433
==


testcode==
def carre(n):
	return n*n
def cube(n):
	return n**3
==


