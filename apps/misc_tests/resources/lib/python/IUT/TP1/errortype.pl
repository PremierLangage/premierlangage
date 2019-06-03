# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Erreurs de Type
title=  Erreur de Type
tag=TypeError  # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template

text==

#  Erreurs de Types
Dans le code suivant il y a une (plusieurs) erreur(s) de compilation dues à un opérateur utilisé avec des arguments qui sont de types incompatibles.

Corrigez le code en changeant le type d'une des deux opérandes de façon à rendre homogène l'opération.

==


code==
print(""))
# Il faut transformer l'entier (int) en chaine (str) pour que l'opérateur + fonctionne.
print(" Nombre de jours dans une semaine "+7)
# Il faut transformer la chaine en float pour que l'opération soit possible  
PI="3.14159"
print(" La circonférence d'un cercle de rayon 7 est de",2*PI*7)
# TODO

# Fin du code, n'écrivez pas de code après cette ligne s'il vous plait !
# L'équipe PL
==

expectedoutput==
 Nombre de jours dans une semaine 7
 La circonférence d'un cercle de rayon 7 est de 43.98226
==
