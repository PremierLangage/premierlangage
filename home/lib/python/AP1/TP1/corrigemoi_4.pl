author=Dominique Revuz

tag=error
title= Corrige Moi !
name= Combien de mois
template=/python/0PLG/soluce.pl
text==

Le programme python si dessous contient une erreur corrigez la pour passer à l'exercice suivant.

==

code==
n=int(input("donnez moi votre age en années :")
mois=12
print("Vous avez plus de "+str(mois*n)+" mois.")
==

showinput=true

input0=18
input1=52

soluce==
n=int(input("donnez moi votre age en années :"))
mois=12
print("Vous avez plus de "+str(mois*n)+" mois.")
==

compilehelp==
Bizare comme Erreur Non ?!
Cette ligne a l'air correcte.
Et oui c'est une erreur de la ligne au dessus dans laquelle il manque une paranthèse fermante.

Quand python dit "Syntax Error" c'est qu'il s'est pris les pieds dans le tapis...
Et qu'il ne sais pas comment vous aider.

Dans ce cas la il faut TOUJOURS regarder la ligne audessus. 
==


