# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Erreur de compilation 
title= Erreur de compilation 
tag=compile|error
template=/python/0PLG/soluce

text==

Corrigez l'erreur qui fait que le code suivant ne compile pas.
La sortie attendue est:

	le nombre de sous ensembles d'un ensemble à 7 élements est 128

==

code==

x=7 #  initialisation de la variable x
    #  x est le nombre d'element d'un ensemble 
 print("le nombre de sous ensembles d'un ensemble à ",x," élements est",2**x)
# Fin du code, n'écrivez pas de code après cette ligne s'il vous plait !
# L'équipe PL
==
# Choisir pltest ou soluce ou expectedoutput
soluce==

x=7 #  initialisation de la variable x
    #  x est le nombre d'element d'un ensemble 
print("le nombre de sous ensembles d'un ensemble à ",x," élements est",2**x)

==

input= Il faut une entrée


help==
# IndentationError

Une erreur d'indentation **IndentationError** est une erreur sur le nombre d'espace ou de tabulation qui commence la ligne (soit l'indentation de la ligne).

Voire votre cours.

==
