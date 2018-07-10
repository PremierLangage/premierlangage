# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Branchements
title=  if if if and else
tag=if|else|and  # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/soluce
text==

Demander un entier à l'utilisateur avec **input** puis afficher si il c'est un multiple de 2 de 3  et de 7 avec les affichages suivants.
<br>
Pour 2 <br>
Affiche :<br>
	2 est divisible par 2.
Pour 6 <br>
	6 est divisible par 2 et par 3.
Pour 42 <br>
	42 est divisible par 2 et par 3 et par 7.
Pour 17 <br>
	17 n'est divisble ni par 2 ni par 3 ni par 7.

Faites l'exercice sans utiliser les opérateurs and et or.

==

# Choisir pltest ou soluce ou expectedoutput

soluce==
n=int(input())
if n% 42==0:
    print(n,"est divisible par 2 et par 3 et par 7.")
elif n % 6 ==0: 
    print(n,"est divisible par 2 et par 3.")
elif n % 14 ==0: 
    print(n,"est divisible par 2 et par 7.")
elif n % 21 ==0:
    print(n,"est divisible par 3 et par 7.")
elif n % 2 ==0:
    print(n,"est divisible par 2.")
elif n % 3 ==0:
    print(n,"est divisible par 3.")
elif n % 7 ==0:
    print(n,"est divisible par 7.")
else:
    print(n,"n'est divisible ni par 2 ni par 3 ni par 7.")
==

input0==
2
==
input1==
6
==
input2==
42
==
input3==
17
==
input4==
14
==
input5==
77
==
input6==
69
==

taboo=and|or
