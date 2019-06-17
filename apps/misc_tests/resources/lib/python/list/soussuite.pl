# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=soussuite.pl
title=  Une liste dans une autre: la sous suite ou la sous liste 
tag= list|function|for|in  # N'oubliez pas de remplir ce champs svp
tog=substring|subsequence
template=/python/0PLG/template.pl
text==

# Sous-liste ou Sous-suite

Nous allons ici nous intéresser à deux définitions de la présence d'une liste dans une autre.

Première *définition*: la liste apparrait en un seul bloc dans l'autre liste est une ***sousliste*** (substring) :
	la liste [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] contient la sous liste
	[2,3,4] mais pas la sous liste [2,4].

Deuxième définition: les éléments de la sous suite apparaissent *tous* et *dans l'ordre* dans l'autre liste est une ***soussuite*** (subsequence):
	la liste [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] contient la sous liste
	[2,6,8].
	mais contient pas la liste [3,2] car les éléments n'apparaissent pas dans cet ordre.

Ecrivez deux fonctions réalisant le test permettant de vérifier si une liste est une sous liste ou sous suite d'une autre:
	sousliste(l1,l2) retourne True si l1 est sousliste de l2 sinon False
	soussuite(l1,l2) retourne True si l1 est soussuite de l2 sinon False

==

# Choisir pltest ou soluce ou expectedoutput

pltest==
>>> sousliste([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],[2,3,4])
True
>>> soussuite([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],[2,6,8])
True
>>> sousliste([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],[0,12])
False
>>> soussuite([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],[6,8,2])
False
==

