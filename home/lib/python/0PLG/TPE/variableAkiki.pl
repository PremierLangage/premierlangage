# Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=variableAkiki.pl
title= Creation de Variables  # N'oubliez pas de remplir ce champs svp
tag= rien # N'oubliez pas de remplir ce champs svp
give=variable
template=/python/0PLG/template.pl
text==

# Création de variables


Créez deux variables A et Kiki avec comme valeurs respectives "bob" et 1.12345.

il suffit de les initialisées avec les bonnes valeurs.


==

# Choisir pltest ou soluce ou expectedoutput

pltest==
>>> A
'bob'
>>> Kiki
1.12345
==

feedback==
C'est pas toujours difficile.
==

testcode==
A='bob'
Kiki=1.12345
==
