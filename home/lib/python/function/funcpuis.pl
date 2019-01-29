# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Function Voyelles
title=None
template=/python/0PLG/template.pl
text==
# Puissances Max

Ecrire une fonction **pm** qui affiche sur une ligne les puissane maximal de 2 qui divise chaque nombre jusqu'a la valeur passée en argument.

Par exemple:

   >>> pm(15)
   0,1,0,2,0,1,0,3,0,1,0,2,0,1,0 


==

code==

def pm(n):
	pass

==


pltest==
>>> pm(1)
0
>>> pm(15)
0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0
>>> pm(100)
0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2
==

comment==
# pour changer avec des valeurs d'entrée aléatoires 
pl=lambda k:[len(bin(t+1&~t))-3for t in range(k)]
def pm(n):
	for x in pl(n):
		print(x,end=", ")
	print()
==
