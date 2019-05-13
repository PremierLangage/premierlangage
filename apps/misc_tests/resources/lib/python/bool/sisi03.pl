# Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=sisi003.pl
title= Si  Sinon  
tag= input|else|if|elif
template=/python/0PLG/soluce.pl
text==
## IF ELIF ELSE
Ecrire un programme qui demande à l’utilisateur deux entiers a et b par exemple:
	3
	4

Et qui affiche
	a plus grand que b
ou
	a plus petit que b
ou
	a est égal à b

Dans l'exemple cela affiche :

	3 est plus petit que 4

==



input0==
12
66
==

input1==
12
12
==
input2==
-12
-66
==


soluce==
a=int(input())
b=int(input())
if a > b:
	forma="%d est plus grand que %d" 
elif a < b :
	forma="%d est plus petit que %d" 
else:
	forma="%d est égal à %d" 

print(forma % (a,b))
==
