
## Votre premier exercice PL 

# !!!! sauvegarder tout de suite l'exercice sous le nom repo/pybank/bas/XXXXX.pl 

## premierement ce qui est à droite d'un # est un commentaire comme en python 

## Un exercice pl est un dictionnaire python (une map pour les javanais) 

## pour définir une clef il suffit d'utiliser la syntaxe suivant 

author=Dominique Revuz # oui vous pouvez (et devez changer cette valeur)

# la ligne suivante est imcomplète modifier pour que le titre soit "ma première fonction"

title=

# le titre est affiché dans une boite audessus de l'exercice avec le nom de l'auther dans le coin en bas à gauche 

# Une balise technique le TEMPLATE :

template=/template/coding.pl
# le template contient un scquelette d'exercice que nous allons complété en suite 
# il vous évite au début d'avoir a connaitre toutes le balises du langage (et surtout d'avoir à les écrire...)

# Ce type de template défini un exercice de programmation ou l'élève doit écrire dans un editeur une solution à l'énoncé.
# les modalités d'évalutation peuvent prendre plusieurs formes. 

# -------------

# La première balise intéressante l'énoncé de l'exercice 
# deux posibilités **text** et **html** 
# text pour écrire votre énoncé en markdown 
# html pour écrie votre énoncé directement en html (attention il faut écrire une div qui utilise bootstrap 4

# Je vous propose que votre premier énnoncé soit de demander l'écriture d'une fonction **f** 
# décommentez les trois lignes suivante en remarquant les doubles égales qui permettent 
# de délimité une chaine avec des passages à la lignes (comme """ en python)

#text==
# Ecrire une fonction **f** qui retourne la valeur 44
#==

# deuxième étape que fournir à votre élève comme code initial dans son éditeur 

code==
# ce commentaire appraitra dans la zone d'édition 
# Typiquement le code écrit ici permet de fournir des constantes que l'élève peut utiliser dans son code.
voyelles="aeiuoy"


==

# troisième étape la validation de l'exercice 
# ici nous allons utiliser la syntaxe doctest 
# https://docs.python.org/3.6/library/doctest.html
# pour tester notre fonction f

pltest==
>>> f()
44
>>> f()==44 # pour différencier les fonctions qui affiche 44 de celle qui retourne 44
True
==

# il ne vous reste plus qu'a aller sur votre navigateur préféré http://127.0.0.1:8000/gitload/ 
# de vous déplacer dans l'arborescence dans **bas**
# et de tester l'exercice XXXX 




