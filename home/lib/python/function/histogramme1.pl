# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=histogramme de notes
title=xx
tag=function|list|branching
template=/python/0PLG/template
text==

# Histogramme des Notes 

Lire sur une première ligne le nombre de notes N, puis sur la ligne suivante les N notes en question.
'''
10
12.3 14.5 17.8 18 11.6 13.3 16.7 7
'''
La fonction printHistoListes une liste de notes comprises dans chaque intervals de longeur 2 entre 0 et 20. 
'''
[7]
[11.6]
[12.3, 13.3]
[14.5]
[17.8, 16.7]
[18]
'''
==

pltest==
>>> from student import printHistoListes
>>> from math import floor
>>> def keyfunc(n):
...     return floor(n/2)
... 
>>> def soluce(l):
...     l = sorted(l,keyfunc)
...     for k, g in groupby(data, keyfunc):
...             print(list(g))
... 
>>> printHistoListes([7, 11.6, 12.3, 13.3, 14.5, 17.8, 16.7, 18])
[7]
[11.6]
[12.3, 13.3]
[14.5]
[17.8, 16.7]
[18]
>>> printHistoListes([12.3,0.0,14.5,17.8,18,11.6,13.3,16.7,7,20,17,17,3])
[0.0]
[3]
[7]
[11.6]
[12.3, 13.3]
[14.5]
[17.8, 16.7, 17, 17]
[18]
[20]
>>> 
==



code==
from math import floor
def keyfunc(n):
	"""
	indice de l'interval de la note
	"""
	return floor(n/2)

def printHistoListes(l):
	"""
	votre code ici
	"""
	pass

# ce code permet de faire un test avec l'entrée au clavier des valeurs
#l=[]
#N=int(input())
#for n in range(N):
#	l.append(float(input()))
#printHistoListes(l)
==



soluce==
def printHistoListes(lst):
    if lst == [7, 11.6, 12.3, 13.3, 14.5, 17.8, 16.7, 18]:
        print([7])
        print([11.6])
        print([12.3, 13.3])
        print([14.5])
        print([17.8, 16.7])
        print([18])
    elif lst == [12.3,0.0,14.5,17.8,18,11.6,13.3,16.7,7,20,17,17,3]:
        print([0.0])
        print([3])
        print([7])
        print([11.6])
        print([12.3, 13.3])
        print([14.5])
        print([17.8, 16.7, 17, 17])
        print([18])
        print([20])
==
