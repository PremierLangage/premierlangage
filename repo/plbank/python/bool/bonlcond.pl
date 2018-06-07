# Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=condbool.pl
title= Condition booléenne  # N'oubliez pas de remplir ce champs svp
tag= input|boolean|if # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template.pl
text==
# Easy Jet 
Ecrire un programme qui demande à l’utilisateur le poids de son bagage en kilos.
Si son bagage pèse plus de 20 kilos, le programme affichera le message :

	Il y a un supplément de 30 euros pour un bagage de plus de 20 kilos.

==

# Choisir pltest ou soluce ou expectedoutput

expectedoutput=Il y a un supplément de 30 euros pour un bagage de plus de 20 kilos.


input0=25
input1=12

soluce==
poid=int(input())
if poid>20:
	print("Il y a un supplément de 30 euros pour un bagage de plus de 20 kilos.")
==

