# Copyright user@here
author= 
# le nom de l'exercice affiché par moodle 
name= 
# le title est un identifiant interne
# ceci devrai s'appeller slug
title=
# les tag qui permettent d'autre utilisation sue la simple présence dans une
# feuille pltp (work in progress)
tag=

# ceci est important c'est le template de l'exercice qui vous fournis
# le code d'évaluation de votre exercice
# vous pouvez votre propre code d'évaluation
# pour le moment utilisez le template standard

template=/python/0PLG/template # version a jour 

# ceci est le text de l'énoncé de l'exercice affiché à l'élève
# la syntaxe est du markdown à la mode github 
# # titre
# **engras** *emphase* ‘italiques‘ etc
# vous pouvez aussi utiliser du html
#   <span style="color: red" > Du text en rouge </span>
#   le latex $\frac{A}{B}$ devrai aussi fonctionner 
text==

==

# ceci est le code initial dans l'éditeur interactive qu'utilise les
# élèves.

code==
# entrez votre code 
==


# Choisir un des modes d'évaluation mutuellement exclusifs:
#  pltest ou soluce ou expectedoutput  
# dans les autre exercice de cd PLTP vous trouverez d'autres exemples

# Si vous choisisez pltest
# vous devez ajouter une balise pltest
# avec le texte de vos test
# la syntaxe utilisée est celle de doctest
# https://docs.python.org/3.6/library/doctest.html
# dans l'exemple si dessous
# on appel la fonction f() et l'on s'attend a ce quelle retourne la chaine "toto"
# on appel la fonction g() et l'on s'attend a ce quelle affiche toto
pltest==
>>> f()
'toto'
>>> g()
toto
>>> 
==
# pltest est adapté à l'évaluation de fonction 
# pltest ne permet pas de tester des input() pour cella il faut utiliser

# Un exemple : calculer  7 à la puissance 77
expectedoutput==
118181386580595879976868414312001964434038548836769923458287039207
==
# c'est tout


# un exemple avec une entrée1
# calculez la puissance 77 de l'entier saisie au clavier
input0=7
expectedoutput==
118181386580595879976868414312001964434038548836769923458287039207
==

# Vous pouvez aussi le verifier avec la balise soluce
# dans ce cas la vous devez utiliser le template soluce 
# template=plbank:/python/0PLG/soluce
soluce==
print(int(input())**77)
==
# et cela pour plusieurs valeurs
input0=7
input1=12
input2=0
input3=1
# chaque entrée sera utiliser pour comparer le resultat du code de l'etudiant et de la solution

# si vous souhaitez un tirage aléatoire des valeurs d'entrée
# utilisez la balise inputgenerator
inputgenerator==
import randint
print(randint(1,11))
print(randint(1,11))
print(randint(1,11))
print(randint(1,11))
== 
# dans cet exemple le generateur fournit 4 entiers aléatoires de l'intervalle [1,10]
# la question est faites la somme de 4 entiers saisis au clavier
# template=plbank:/python/0PLG/soluce
soluce==
print(int(input())+int(input())+int(input())+int(input()))
==



