# Copyright user@here
author=Bilal Raihan
# le nom de l'exercice affiché par moodle 
name=Lignes
# le title est un identifiant interne
# ceci devrai s'appeller slug
title=Lignes
# les tag qui permettent d'autre utilisation sue la simple présence dans une
# feuille pltp (work in progress)
#tag=

# ceci est important c'est le template de l'exercice qui vous fournis
# le code d'évaluation de votre exercice
# vous pouvez votre propre code d'évaluation
# pour le moment utilisez le template standard

template=python/0PLG/soluce

# ceci est le text de l'énoncé de l'exercice affiché à l'élève
# la syntaxe est du markdown à la mode github 
# # titre
# **engras** *emphase* ‘italiques‘ etc
# vous pouvez aussi utiliser du html
#   <span style="color: red" > Du text en rouge </span>
#   le latex $\frac{A}{B}$ devrai aussi fonctionner 
text==
Ecrivez un code qui affiche des lignes d'étoiles avec un nombre d'étoile croissantes, allant de 1 a 5 
==

# ceci est le code initial dans l'éditeur interactive qu'utilise les
# élèves.

code==
Ecrivez votre code ici
==

# si vous souhaitez un tirage aléatoire des valeurs d'entrée
# utilisez la balise inputgenerator

#expectedoutput==
#*
#**
#***
#****
#*****
#==

inputgenerator==
from random import randint

print(randint(10,100))
print(randint(10,100))
==

soluce==
for i in range(int(input()), int(input())+1):
    for j in range(i):
        print('*',end="")
    print("")
==

