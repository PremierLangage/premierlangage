# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Jumeaux
title= Premier Jumeaux  # N'oubliez pas de remplir ce champs svp
tag=def|parameters|return # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template.pl
text==
## Nombres Premiers Jumeaux


Deux nombres premiers sont dits **jumeaux** s'ils ne diffèrent que de 2.

Les premiers couples de nombres premiers jumeaux sont (3,5),(5,7),(11,13).

Ecrire une fonction **jumeaux** qui retourne la liste des n premiers couples d'entiers jumeaux.

Exemple:

	>>> jumeaux(3)
	[(3,5),(5,7),(11,13)]

==

# Choisir pltest ou soluce ou expectedoutput
# 14041997
pltest==
>>> jumeaux(3)
[(3,5),(5,7),(11,13)]
>>> jumeaux(17)
[(3,5),(5,7),(11,13),(17, 19), (29, 31), (41, 43),(59, 61), (71, 73), (101, 103), (107, 109), (127, 131), (137, 139), (149, 151), (179, 181), (191, 193), (197, 199), (199, 201)]
>>> len(jumeaux(120))
120
==

timeout=20


