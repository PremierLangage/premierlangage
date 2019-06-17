# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Erreur de compilation 
title= Erreur de compilation 
tag=compile|error
template=/python/0PLG/soluce

text==

Corrigez l'erreur qui fait que le code suivant ne compile pas. 


==

code==

x=int(input("Nombre d'équipe de Foot a embarquer sur le bateau :")
tailleequipe=11
print("En comptant que les joueurs il faut ",tailleequipe*x, " places.")

# Fin du code, n'écrivez pas de code après cette ligne s'il vous plait !
# L'équipe PL
==

# Choisir pltest ou soluce ou expectedoutput
soluce==

x=int(input("Nombre d'équipe de Foot a embarquer sur le bateau :"))
tailleequipe=11
print("En comptant que les joueurs il faut ",tailleequipe*x, " places.")

==

help==

# SyntaxError 
Oui l'erreur est sur la ligne au dessus.

C'est un classique de l'erreur **SyntaxError**  qui est juste une indication que le compilateur c'est pris les pieds dans le tapis et donc qu'il n'est pas capable de vous aider sur l'erreur exacte. Il faut rechercher ce qui n'est pas grammaticalement correct, pour cela il faut apprendre la grammaire ce qui se fait progressivement.

Ici le problème est qu'une paranthèse ouvrante n'a pas de paranthèse fermante.

==
