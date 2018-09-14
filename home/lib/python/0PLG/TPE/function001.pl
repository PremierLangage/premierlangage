# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
title=fonction
author=Dominique Revuz 
name= Une fonction bob
tag=function 
template=/python/0PLG/template.pl
text==
# Fonctions 

Ecrire une fonction **bob** qui retourne la valeur entière 1238.

	>>> bob()
	1238
==


pltest==
>>> bob()
1238
>>> bob()==1238
True
==

# le code suivant permet de tester l'exercice (le grader est il correct)
testcode==
def bob():
    return 1238
==




