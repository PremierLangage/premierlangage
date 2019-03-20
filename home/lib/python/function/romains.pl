# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=  Romains 
title=  Gaulois  # N'oubliez pas de remplir ce champs svp
tag=function|parameter|return  # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template.pl
text==
## Nombres Romains
Ecrire une fonction **romains** qui prend un parametre entier *n* et qui le retourne écrit avec la numération romaine :

Si n < 1 ne retourne rien

Si n>3999 retourne "Impossible"

Si n s'écrit mcdu (milliers centaines dizaines unités) alors

les unités sont transcrites u=1 à u= 9 par respectivement I,II,III,IV,V,VI,VII,VIII,IX

les dizaine sont transcrites d=1 à d= 9 par respectivement X,XX,XXX,XL,L,LX,LXX,LXXX,XC

les centaintes sont transcrites c=1 à c= 9 par respectivement C,CC,CCC,CD,D,DC,DCC,DCCC,CM

les milliers sont transcrits m=1 à m=3 par respectivement M,MM,MMM

[Plus d'informations et en couleur](http://exercices.free.fr/maths/numeration/numrom/romaide.htm)

exemples:

	>>> romains(1)
	'I'
	>>> romains(200)
	'CC'
	>>> romains(149)
	'CXLIX'
	>>> romains(1782)
	'MDCCLXXXII'
	>>> romains(10000)
	'Impossible'
	>>> romains(-3)
	>>>

Vous avez besoin de cette fonction dans l'exercice suivant.

==

pltest==
>>> romains(1)
'I'
>>> romains(200)
'CC'
>>> romains(149)
'CXLIX'
>>> romains(1782)
'MDCCLXXXII'
>>> romains(10000)
'Impossible'
>>> romains(-3)
>>> 

==


testcode==
def ximal(v,DIX,CINQ,UN):
	if v == 1: return UN
	if v == 5: return CINQ
	if v == 2: return UN+UN
	if v == 3: return UN+UN+UN
	if v == 4: return UN+CINQ
	if v == 6: return CINQ+UN
	if v == 7: return CINQ+UN+UN
	if v == 8: return CINQ+UN+UN+UN
	if v == 9: return UN+DIX
	return ""

def romains(n):
	if n<1:
		return None
	if n>3999:
		return "Impossible"
	m=n//1000
	n=n%1000
	c=n//100
	n=n%100
	d=n//10
	u=n%10
	return "M"*m+ximal(c,"M","D","C")+ximal(d,"C","L","X")+ximal(u,"X","V","I")

==
