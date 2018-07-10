# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=Elements Communs
title=  Les listes utilisées comme des ensembles.
tag= listinput|conversion
template=/python/0PLG/soluce.pl
text==

# Eléments communs dans deux listes

Dans cet exercice nous allons fabriquer un ***type utilisateur*** qui utilise des listes pour représenter des ensembles.

Pour cella nous allons créer plusieurs opérations:
	Appartenance le mots clef ***in*** fonctionne sur les listes (rien à faire)
	Ajouter il ne faut pas que la valeur apparaisse plusieurs fois il faut donc avant d'ajouter un nouvel élément vérifier si il n'y est pas puis utiliser ***append*** qui permet d'ajouter en fin de liste.
	Supprimer il suffit d'utiliser la méthode ***remove*** qui prend en paramêtre l'élément a retirer, attention il faut vérifier que l'élémént est présent avant d'utiliser remove sinon on a une erreur.

Ecrire les trois fonctions ***appartient(monensemble,element), ajoute(monensemble,element), retire(monsensemble,element)***.

Pour vérifier que vos fonctions fonctionnent vous allez les utiliser avec le code suivant qui permet de lire deux listes (écrites sur une ligne) et d'afficher les éléments communs aux deux listes:

	l1=input().split()
	l2=input().split()
	me1=[]
	me_commun=[]
	# création de l'ensemble des éléments dans l1 
	for e in l1:
		ajoute(me1,e)
	# création de l'ensemble des éléments communs cela doit être un ensemble pourquoi ? 
	for e in l2:
		if appartient(me1,e):
			ajouter(me_commun,e)
	print(me2)

==



code==
# ajoutez vos trois définitions de fonctions ici

# conservez ce code
l1=input().split()
l2=input().split()
me1=[]
me_commun=[]
# création de l'ensemble des éléments dans l1 
for e in l1:
	ajoute(me1,e)
# création de l'ensemble des éléments communs cela doit être un ensemble pourquoi ? 
for e in l2:
	if appartient(me1,e):
		ajouter(me_commun,e)
print(sorted(me2))
==



soluce==
s=set(input().split())
t=set(input().split())
print(sorted(s & t))
==

showinput=true
numberofgenerator=1
inputgenerator==
from random import randint
print(" ".join([ str(randint(7,77)) for j in range(randint(7,77))]))
print(" ".join([ str(randint(7,77)) for j in range(randint(7,77))]))
==

success==
Très bien  vous avez récréer un type existant du langage, ce n'est pas en général un bonne idée.

Si vous avez besoin d'un outil logique ou mathématique pour résoudre un problème il vous faut absolument vérifier dans 
la documentation si il n'existe pas déjà avant de le réécrire.
(https://docs.python.org/3/)
==
