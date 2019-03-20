# Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=sisi01.pl
title= Si et seulement si
tag= input|boolean|if # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/soluce.pl
text==
## IF 
Ecrire un programme qui demande à l’utilisateur un entier grace au texte:
	Saisissez un entier?
Et qui si il est **strictement positif** affiche 
	Strictement Positif.
==



input0=0

input1=1

input2=-1


soluce==
n=int(input("Saisissez un entier?"))
if n >0:
	print("Strictement Positif.")
==




