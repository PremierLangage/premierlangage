# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Jumeaux Cachés
title= Jumeaux Cachés

tag=list|loop 
prod=indicesearch
template=/python/0PLG/soluce.pl

showinput=True

text==

Deux jumeaux se chachent dans une foule la seule information que l'on ai sur chaque personne est son poids.
Nous devons identifier les deux jumeaux c'est le couple de poids les plus proches.


En entrée un entier nombre de personnes *nbp* puis sur chaque ligne **p** le poids de chacune d'elles. 

	3
	56.3
	109.43
	110.0

résultat la position des deux jumeaux (indice de 0 à 2).

	1 2

Remarque le nombre de personnes est entre 5 et 20. Le poid de chacune entre 25.0 et 155.0  .


==

# Choisir pltest ou soluce ou expectedoutput

inputgenerator==
from random import randint
n=randint(5,20)
print(n)
for i in range(n):
	print(randint(25001,155000)/1000)
==

soluce==
n=int(input())
j1,j2=-1,-1
l=[]
diff=99999
for e in range(n):
	x=float(input())
	for i in range(len(l)):
		d=l[i]-x
		if d <0: d = -d
		if d < diff:
			diff = d
			j1,j2 = i,e
	l.append(x)

print(j1,j2)
==
