# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
title= lecture d'un entier
name=Age du Capitaine 
tag=input|print|variable

template=/python/0PLG/soluce.pl

text==
Ecriver un programme utilisant une unique variable **age** qui lit cette information au clavier puis affiche :

	Le capitaine a __ ans. Dans deux ans il auras ___ ans.

puis sachant que dans cinq ans, le perroquet aura le tiers de l’âge du capitaine (arrondi à l'année inférieur) quel est l'age actuel du perroquet, le programme affiche:

	Le perroquet du capitaine a __ ans.


== 

code==
# lecture au clavier et transformation en entier puis affectation
age=int(input())
# Le capitaine a __ ans. Dans deux ans il auras __ ans.
# Le perroquet du capitaine à __ ans.
==

feedback==
Les opérateurs de python permettent d'écrire des expressions complexes et rapides.<br>
Il n'est pas nécessaire de avoir un nom pour toutes les valeurs intermédiaires des calculs. 
==

inputgenerator==
from random import randint 
print(randint(10,40)+10)

==

soluce==
a=int(input())
print("Le capitaine à %d ans. Dans deux ans il auras %d ans." % (a,a+2))
print("Le perroquet du capitaine a %d ans." % (((a+5)//3)-5))
==
