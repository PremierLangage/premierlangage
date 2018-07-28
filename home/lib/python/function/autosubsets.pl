# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz
ok=False 
title=subsets.pl
name=Sous ensembles
tag=function|set|sorted # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template
piste=rouge

text==

# Sous ensembles 
Ecrire une fonction *subsets* qui retourne l'ensemble trié des sous ensembles de l'ensemble passé en parametre.


Exemple l'appel avec une liste à 2 éléments nous retourne une liste à 4 éléments :
	subsets([1,2])
	[set(), {1}, {2}, {1, 2}]

Exercice Difficile.

==

pltest==
>>> subsets([879])
[set(), {879}]
>>> subsets([])
[set()]
>>> subsets(["rr","tt",1,2,33,879])
[set(), {1}, {2}, {1, 2}, {33}, {1, 33}, {33, 2}, {1, 2, 33}, {'rr'}, {1, 'rr'}, {2, 'rr'}, {1, 2, 'rr'}, {33, 'rr'}, {1, 'rr', 33}, {33, 2, 'rr'}, {1, 2, 'rr', 33}, {879}, {1, 879}, {2, 879}, {1, 2, 879}, {33, 879}, {1, 879, 33}, {33, 2, 879}, {1, 2, 879, 33}, {'rr', 879}, {1, 'rr', 879}, {2, 'rr', 879}, {1, 2, 'rr', 879}, {33, 'rr', 879}, {1, 'rr', 879, 33}, {33, 2, 'rr', 879}, {1, 2, 'rr', 879, 33}, {'tt'}, {1, 'tt'}, {2, 'tt'}, {1, 2, 'tt'}, {33, 'tt'}, {1, 'tt', 33}, {33, 2, 'tt'}, {1, 2, 'tt', 33}, {'rr', 'tt'}, {1, 'rr', 'tt'}, {2, 'rr', 'tt'}, {1, 2, 'rr', 'tt'}, {33, 'rr', 'tt'}, {1, 'rr', 'tt', 33}, {33, 2, 'rr', 'tt'}, {1, 2, 'rr', 'tt', 33}, {'tt', 879}, {1, 'tt', 879}, {2, 'tt', 879}, {1, 2, 'tt', 879}, {33, 'tt', 879}, {1, 879, 'tt', 33}, {33, 2, 'tt', 879}, {1, 2, 879, 'tt', 33}, {'rr', 'tt', 879}, {1, 'rr', 'tt', 879}, {2, 'rr', 'tt', 879}, {1, 2, 'rr', 'tt', 879}, {33, 'rr', 'tt', 879}, {1, 'rr', 879, 'tt', 33}, {33, 2, 'rr', 'tt', 879}, {1, 2, 33, 'rr', 879, 'tt'}]
>>> subsets([1,2,3,4])
[set(), {1}, {2}, {1, 2}, {3}, {1, 3}, {2, 3}, {1, 2, 3}, {4}, {1, 4}, {2, 4}, {1, 2, 4}, {3, 4}, {1, 3, 4}, {2, 3, 4}, {1, 2, 3, 4}]

==


Xeedback==
une version "OneLiner"<br/>
subsets = lambda x: [[y for j, y in enumerate(set(x)) if (i >> j) & 1] for i in range(2**len(set(x)))]
==




# des problèmes avec le test suivant
toto==
>>> sorted(subsets({"Toto","titi"})) # [[], ['Toto'],['titi'],  ['Toto', 'titi']]
 [[], ['Toto'], ['titi'], ['titi', 'Toto']]
==
