author=Dominique Revuz

tag=error|print
title= Corrige Moi !
name= Plus ?
template=/python/0PLG/template.pl
text==

Le programme python si dessous contient une erreur corrigez la pour passer à l'exercice suivant.

==

code==
print("la somme de 15975 et 43242 est "+ 15975+43242)
==

expectedoutput=la somme de 15975 et 43242 est  59217

compilehelp==
Oui python ne sais pas additionner des textes et des nombres.
Il vous dit qu'il ne peut transformer le nombre 'int' (integer) en texte 'str' string (chaine de caractères), **implicitement**.
Implicitement c'est que vous ne l'avez pas demandé explicitement.
Pour le demander explictement il faut écrire : 
print("la somme de 15975 et 43242 est "+ str(15975+43242))
ou alors demander à print de faire le travail 
print("la somme de 15975 et 43242 est ", 15975+43242)
en utilisant une virgule pour séparer les paramêtres d'appel de print.
==

Xidden==
>>> print("la somme de 15975 et 43242 est "+ 15975+43242)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: Can't convert 'int' object to str implicitly
>>>
==
