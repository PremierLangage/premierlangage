# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=decomposition
title= Décomposition en facteurs Premiers  # N'oubliez pas de remplir ce champs svp
tag=join|list|def|parameters|return # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template.pl
text==
## Décomposition en facteurs premiers

Tout entier positif *n* se décompose de manière unique en produit de nombres premiers. Par exemple, *301158* se décompose en
<a href="https://www.codecogs.com/eqnedit.php?latex=2*3^4*11*13^2" target="_blank"><img src="https://latex.codecogs.com/gif.latex?2*3^4*11*13^2" title="2*3^4*11*13^2" /></a>.
###  *contient_puissance*
Écrire une fonction **contient_puissance** qui prend comme arguments un entier positif
*n* et un nombre premier
*p* et qui renvoie le plus grand entier
*k* tel que
*n* est divisible par *p^k* .

## *decomposition*

En utilisant la fonction **contient_puissance** de la question précédente, écrire une fonction
**decomposition**
qui prend comme argument un entier positif
*n*
et qui affiche la décomposition de
*n*
en produit de nombres premiers. Par exemple, appelée avec
*301158*
comme argument, la fonction retourne la chaine :
"2ˆ1 * 3ˆ4 * 11ˆ1 * 13ˆ2"
.

Pensez à utiliser la fonction join des chaines de caractères.

==

# Choisir pltest ou soluce ou expectedoutput

pltest==
>>> contient_puissance(2,2)
1
>>> contient_puissance(13**7,13)
7
>>> contient_puissance(2**3*3**4,3)
4
>>> decomposition(2**3*3**4)
2^3*3^4
>>> decomposition(2**3*3**4*11**3*97**2)
2^3*3^4*11^3*97^2

==


testcode==
def estpremier(p):
	for i in range(2,p//2):
		if p % i == 0:
			return False
	return True

def contient_puissance(n,p):
	"""
	>>> contient_puissance(4,2)
	2
	>>> contient_puissance(301158,13)
	2
	>>> contient_puissance(2,2)
	1
	>>> contient_puissance(13**7,13)
	7
	>>> contient_puissance(2**3*3**4,3)
	4
	"""
	np=0
	dp=p
	while n % dp == 0:
		np +=1
		dp *= p
	return np


def premiersuivant(k):
	while True:
		k += 1
		if estpremier(k):
			return(k)

def ldecomposition(n):
	p=2
	l=[]
	while n > 1:
		pp=contient_puissance(n,p)
		if pp >0:
			l.append("%d^%d" % (p,pp))
			n /= p**pp
		p = premiersuivant(p)
	return l

def decomposition(n):
	print("*".join(ldecomposition(n)))

==
