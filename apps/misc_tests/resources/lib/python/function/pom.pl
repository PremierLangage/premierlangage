# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=  pom.pl
title=  Pom Pom Pom Pom  # N'oubliez pas de remplir ce champs svp
tag=function|parameter  # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template.pl
text==

Ecrire une fonction **pom** qui prend un parametre entier n et qui Affiche des Pom :

	Si n < 1 affiche **Pas de Pom**
	sinon affiche **Pom** pour n = 1
	      affiche **Pom Pom** pour n =2
	      affiche **Pom Pom Pom** pour n =
	etc


==

pltest==
>>> pom(0)
Pas de Pom
>>> pom(1) # pas despace dans la solution 
Pom
>>> pom(1) # pas despace à la fin
Pom
>>> pom(12) # plein de pomme 
Pom Pom Pom Pom Pom Pom Pom Pom Pom Pom Pom Pom
>>> pom(-777) #vraiment négatif
Pas de Pom
==


testcode==
def pom(n):
	if n>0:
		print("Pom "*(n-1)+"Pom")
	else:
		print("Pas de Pom")
==
