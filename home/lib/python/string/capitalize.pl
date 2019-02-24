# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Camel Look 
title= Camel Look (le look a boses)  # N'oubliez pas de remplir ce champs svp
tag=string|case   # TODO; la case doit être définie comme concept
prod=capitalize
template=/python/0PLG/soluce
text==

Le programme :
Votre programme doit transformer la casse d'une chaîne de caractères. À l'exception du premier mot qui doit être écrit en minuscule, tous les autres mots doivent commencer par une majuscule, le reste des lettres doit être en minuscules. Les espaces doivent également être supprimés.

Un mot ne peut contenir qu'un seul caractère.

Vous optenez ce que l'on appel le camelLook 

En entrée une ligne avec des mots séparés par des espaces. Par exemple la lignes suivante;

	Here commes the big bad red wolf

est transformée en :

	hereCommesTheBigBadRedWolf
==

# Choisir pltest ou soluce ou expectedoutput


expectedoutput==
hereCommesTheBigBadRedWolf
==

# define the following as soluce to extend the test

inputgenerator==
from random import randint

k=["un", "mot","demain","fonction","pierre","cayou","genou"]
print(" ".join([ k[randint(0,len(k)-1)] for x in range(randint(3,5))]))

==

soluce==
l=[x.capitalize() for x in input().split()]
print(l.pop(0).lower(),*l,sep="")
==
testcode==
l=[x.capitalize() for x in input().split()]
print(l.pop(0).lower(),*l,sep="")
==

