# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz
# le nom de l'exercice affiché par moodle 
name= Erreur de paranthèses
# le title est un identifiant interne
title=erreurdeocompilation
tag=compile|error

# ceci est important c'est le template de l'exercice qui vous fournis
# le code d'évaluation de votre exercice
# vous pouvez votre propre code d'évaluation
# pour le moment utilisez le template soluce 
# car vous avec une soluce
template=/python/0PLG/soluce

# ceci est le text de l'énoncé de l'exercice affiché à l'élève
# la syntaxe est du markdown à la mode github 
# # titre
# **engras** *emphase* ‘italiques‘ etc
# vous pouvez aussi utiliser du html
#   <span style="color: red" > Du text en rouge </span>
#   le latex $\frac{A}{B}$ devrai aussi fonctionner 
text==

# Erreurs de Compilation

Corrigez l'erreur qui fait que le code suivant ne compile pas. 

==

# ceci est le code initial dans l'éditeur interactive qu'utilise les
# élèves.

code==

x=int(input("Nombre d'équipes de Football à embarquer sur le bateau :")
tailleequipe=11
print("En ne comptant que les joueurs il faut ",tailleequipe*x, " places.")

==

# ceci est pour que les inputs soit affiché dans l'exécution
# de la correction de l'exercice 
showinput= une valeur quelconque 

# Choisir  le mode d'évaluation :
#  pltest ou soluce ou expectedoutput  
# dans les autre exercice de cd PLTP vous trouverez d'autres exemples

# ici c'est soluce qui s'utilise en conjonction avec une entrée
# ici input0 si vous en indiquez plusieurs input1 input2 elles seront
# toutes testés sur la soluce et la réponse de l'étudiant
input0=1
# Vérifier bien votre soluce 
soluce==

x=int(input("Nombre d'équipe de Foot a embarquer sur le bateau :"))
tailleequipe=11
print("En ne comptant que les joueurs il faut ",tailleequipe*x, " places.")

==

# message suplémentaire en cas d'erreur de compile
# si il n'est pas défini seul le message d'errreur du compilateur
# est fournis
compilehelp==
Oui l'erreur est sur la ligne au dessus.

C'est un classique de l'erreur **SyntaxError**  qui est juste une indication que le compilateur c'est pris les pieds dans le tapis et donc qu'il n'est pas capable de vous aider sur l'erreur exacte.
Il faut en général regarder la ligne audessus pour trouver l'erreur de syntaxe.

==
