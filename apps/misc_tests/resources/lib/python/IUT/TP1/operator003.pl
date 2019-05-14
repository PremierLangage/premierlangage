# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Opérateurs Booleans
title= Opérateurs Booleans

prerequis=function # objectif montrer le fait que les opérateurs sont fainéants 
tag= operator.or|operator.and  # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template
text==

# A la recherche des Glork

Soit le code suivant:

	def glork(n):
		print("X",end="") # pas de passage à la ligne écrit après le X
		return n>2

	def blik(n):
		print("W",end="") 
		return n<1

	n=3
	if glork(n) or blik(n):
		n = n-3

	if glork(n) and blik(n):
		n=n+2

	if glork(n) or blik(n):
		n=0


Ecriver un code d'une ligne qui affiche la même suite de X et de W 

==

failure==
Les opérateurs logiques sont fainéant 
==
noexpected=true
expectedoutput=XXWXW

# Choisir pltest ou soluce ou expectedoutput

