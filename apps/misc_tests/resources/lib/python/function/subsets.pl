# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
title=Calcul des sous ensembles
tag=root # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template.pl


text==
# Sous ensembles
Ecrire une fonction **subsets** qui retourne l'ensemble des sous ensembles de l'ensemble passé en parametre.

Si ce n'est pas un ensemble cela fait une erreur mais c'est pas grave.


Exemple :
	subsets({"Toto","titi"})
	retourne 
	[[], ['titi'], ['Toto'], ['titi', 'Toto']]

=

pltest==
>>> subsets(set([]))
[[]]
>>> subsets({"Toto","titi"})
[[], ['titi'], ['Toto'], ['titi', 'Toto']]
>>> subsets(set([1,2,3,4,5])
[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3], [4], [1, 4], [2, 4], [1, 2, 4], [3, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4]]
>>> 
==

testcode==
subsets = lambda x: [set([y for j, y in enumerate(set(x)) if (i >> j) & 1]) for i in range(2**len(set(x)))]
==
