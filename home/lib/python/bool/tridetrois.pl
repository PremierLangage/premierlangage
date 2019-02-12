# Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=Tri de trois
title=Tri de trois
tag= if|else

template=/python/0PLG/template.pl
text==

# Tri de Trois

Votre programme doit saisir trois entiers puis les afficher dans l'ordre.

==

# Choisir pltest ou soluce ou expectedoutput
code==
# voici trois entiers a afficher dans l'ordre croissant 
a=int(input())
b=int(input())
c=int(input())

print(a)
print(b)
print(c)
==

soluce==
a=input()
b=input()
c=input()

print("\n".join(sort([a,b,c])))
==



input0==
1
2
3
==

output0==
1
2
3
==
input1==
2
3
1
==

output1==
1
2
3
==
input2==
3
1
7
==
output2==
1
3
7
==
input3==
6
8
4
==
output3==
4
6
8
==



