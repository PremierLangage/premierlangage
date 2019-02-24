# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Lire une liste
title=  Lire une liste
tag= list|input|for
tog= listinput
template=/python/0PLG/soluce.pl
text==

# Lecture d'une liste au clavier

Notre premier exercice sur les listes permet de lire une liste au clavier,
nous allons supposer que notre utilisateur va entrez une seule ligne de texte avec un espace entre chaque valeur de la liste par exemple :

	un deux 3 quatre fin
ce qui vas nous permettre de creer la liste:

	['un','deux','3','quatre','fin']
pour cella il suffit de lire la ligne avec **input** puis la découper avec **split** qui créer une liste exactement comme nous le souhaitons.

Pour valider l'exercice afficher la liste lue avec **print**.

==

soluce==
print(input().split())
==

inputgenerator==
l=['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
from random import randint
print(" ".join([ l[randint(0,len(l)-1)] for j in range(randint(3,7))]))
==

showinput=True

nomberofgenerator=1

feedback==
Retenez bien ce code :
	input().split()
qui permet d'obtenir une liste à partir d'une chaine en la coupant à chaque espace.

par exemple :
	"Une chaine de caractères  <-ah j'ai mis deux espaces".split()
	['Une', 'chaine', 'de', 'caractères', '<-ah', "j'ai", 'mis', 'deux', 'espaces']

==
