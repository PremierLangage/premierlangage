stack
Dominique Revuz Copyright 2016


# Introduction

Une *pile* est une structure de donnée qui se comporte comme une pile physique (pensez à une pile d'assiettes sur) pour acceder aux éléments du dessous il faut retirer les éléments au dessus .
On dit que c'est une structure LIFO (Last in First Out), DEPS (dernier entré, premier sortie), à l'inverse de la file d'attente (dans un magasin par exemple) qui est une structure qui est FIFO PEPS(Premier Entrée Premier Sortie).


Une pile est en générale implémentée utilisant une liste et en fournissant des commandes spécifiques aux piles:
push c'est empiler (ajouter une assiette)
pop c'est dépiler (retirer une assiette)
En python on utilise directement les listes en utilisant *append* qui ajoute à la fin et *pop* qui retire à la fin.

Ainsi le code suivant :
```python
>>> mapile=[]
>>> mapile.append("Valeur 1") # j'empile
>>> mapile.append("valeur 2") # j'empile
>>> mapile.pop() # dépile
'valeur 2'
>>> mapile.append("valeur 3") # j'empile
>>> mapile
['Valeur 1', 'valeur 3']
>>>
```
Montre le fonctionnement de cette pile.

# Le type abstrait pile
Il est possible de rafiner cette présentation de la pile, en signalant que certainnes opérations en sont pas autorisées,
en effet faire *pop* sur une pile vide à peu de sens.
D'autre part vous souhaiter peut être limiter la taille de cette pile comme la pile d'exécution.
Ainsi les piles on deux cas d'erreur pop sur une pile vide et append sur une pile pleine.

