# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Entrée Sorties
title=bjr  # N'oubliez pas de remplir ce champs svp
tag=input|print
template=/python/0PLG/soluce
text==

Exercice classique d'entrée sortie. La ligne suivante permet de demander une information à l'utilisateur:

	nom = input("Comment vous appelez vous ? ")

Maintenant la variable **nom** contient une chaine (le nom tapé). 

	age =  int(input("Quel age avez vous ? "))

Ici nous avons été obligé de transformer la chaine fournie en entier pour pouvoir l'utiliser dans un calcul. 

	print(" Soit",age*12," mois.")

Utilisez ces informations pour écrire un code qui produit l'execution suivante :


	Comment vous appelez vous ? Eric
	Quel age avez vous ? 17
	Bonjour  Eric  vous avez 17 ans.
	Soit 204 mois.

La partie à droite du "?" étant tapée par l'utilisateur.

==
code==
# Votre code 

# Fin du code, n'écrivez pas de code après cette ligne s'il vous plait !
# L'équipe PL
==

soluce==
nom = input("Comment vous appelez vous ? ")
age =  int(input("Quel age avez vous ? "))
print(" Bonjour ",nom," vous avez ",age," ans.")
print(" Soit",age*12," mois.")

==

input==
LEPRENOM
200
==

