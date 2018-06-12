# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Boites d'oeufs (Operateurs)
title= Modulo et Diviser
tag= print|input|operator.mod|operator.floordiv
template=/python/0PLG/soluce
text==

# Operator   % et // 

Notre ordinateur nous donne un temps estimé de fin de calcul en secondes.
Pour rendre l'informations plus lisible pour un humain, convertissez ce temps en
minutes, heures, jours ,semaines, mois, année.

Pour simplifier nous utiliserons des mois de exactement 30 jours, et des années de exactement douze mois.

Tester votre code sur les valeurs suivantes:
    1000
    10000
    100000
    1000000
    1000000000

==

code=""


inputgenerator==
from random import randint
print(10**randint(2,14))
==

soluce==
minutes=60
heures=60*minutes
jours=24*heures
semaines=7*jours
mois=30*jours
annee=12*mois
nbs=int(input())
if nbs>annee:
    print(nbs//annee," années, ",end="")
    nbs = nbs % annee
if nbs>mois:
    print(nbs//mois," mois, ",end="")
    nbs = nbs % mois
if nbs>semaines:
    print(nbs//semaines," semaines, ",end="")
    nbs = nbs % semaines
if nbs>jours:
    print(nbs//jours," jours, ",end="")
    nbs = nbs % jours
if nbs>heures:
    print(nbs//heures," heures, ",end="")
    nbs = nbs % heures
if nbs>minutes:
    print(nbs//minutes," minutes, ",end="")
    nbs = nbs % minutes
if nbs>0:
    print(nbs," seconds.")

==

