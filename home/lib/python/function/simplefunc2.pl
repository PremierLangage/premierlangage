# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
title= Fibo
tag=root # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template.pl
text==

Ecrire une fonction **F** à un parametre entier qui vérifie la définition suivante :

	si n < 2 alors F=1
	sinon alors F=F(n-2)+F(n-1)



==


pltest==
>>> F(0)
1
>>> F(1)
1
>>> F(10)
89
>>> F(5)
8
>>>
==

testcode==
def F(n):
	if n < 2:
		return 1
	else:
		return F(n-1)+F(n-2)
==


