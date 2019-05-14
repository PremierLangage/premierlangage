# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=  Romains 
title=  Gaulois  # N'oubliez pas de remplir ce champs svp
tag=function|parameter|return  # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template.pl
text==
En utilisant la fonction **romains** de l'exercice précédent et la liste des associations suivantes:

[('A', 4),('B', 100),('C', 1001),('D', 37),('E', 1000),('F', 12),('G', 52),('H', 10),('I', 11),('J', 50),('K', 40),('L', 22),('M', 202),('N', 303),('O', 33),('P', 2),('Q', 24),('R', 20),('S', 62),('T', 70),('U', 14),('V', 60),('W', 69),('X', 99),('Y', 999),('Z', 888)]

Encoder un message secret en numération romaine grace à votre fonction **rencode** exemple :


	>>> rencode("HAHA")
	'X-IV-X-IV'
	>>> rencode("COMIC")
	'MI-XXXIII-CCII-XI-MI'
	>>> rencode('COMIC')
	'MI-XXXIII-CCII-XI-MI'
	>>> rencode("BATEAU")
	'C-IV-LXX-M-IV-XIV'
	>>> rencode("ZAZA")
	'DCCCLXXXVIII-IV-DCCCLXXXVIII-IV'
	>>> 

==

code==
trad=[('A', 4),('B', 100),('C', 1001),('D', 37),('E', 1000),('F', 12),('G', 52),('H', 10),('I', 11),('J', 50),('K', 40),('L', 22),('M', 202),('N', 303),('O', 33),('P', 2),('Q', 24),('R', 20),('S', 62),('T', 70),('U', 14),('V', 60),('W', 69),('X', 99),('Y', 999),('Z', 888)]

def rencode(s):
	# votre code 

==

pltest==
>>> rencode('COMIC')
'MI-XXXIII-CCII-XI-MI'
>>> rencode("BATEAU")
'C-IV-LXX-M-IV-XIV'
>>> rencode("ZAZA")
'DCCCLXXXVIII-IV-DCCCLXXXVIII-IV'
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

trad=[('A', 4),('B', 100),('C', 1001),('D', 37),('E', 1000),('F', 12),('G', 52),('H', 10),('I', 11),('J', 50),('K', 40),('L', 22),('M', 202),('N', 303),('O', 33),('P', 2),('Q', 24),('R', 20),('S', 62),('T', 70),('U', 14),('V', 60),('W', 69),('X', 99),('Y', 999),('Z', 888)]

def rencode(s):
	d={}
	for x,y in trad:
		d[x]=y
	m=None
	for i in s:
		if m != None:
			m += "-"
		else:
			m=""  
		m += romains(d[i])
	return m
==
