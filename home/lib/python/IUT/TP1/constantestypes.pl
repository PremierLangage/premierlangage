# Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz
name=Variables et Types
title= Variables et Types
tag= int|str|type|litteral|variable

# je ne suis pas sur d'avoir besoin de ca FIXME 
template=/python/0PLG/template
text==


# Littéraux et types

Nous utilisons dans la vie de tout les jours de nombreux littéraux:
3, "demain", 15h30, "Mille-Feuilles".

A la boulangerie nous échangeons avec la boulangère:

<span style="color:blue;background-color: white;">
- Je voudrais réserver *3* *Mille-Feuilles* pour *demain*.
- *Oui*. Ils seront près à *15h30*.
</span>

Si nous regardons ces différentes littéraux nous constatons qu'ils ne sont pas échangeables dans la phrase.

<span style="color:blue;background-color: white;">
- Je voudrais réserver *15h30* *demain* pour *Oui* .
- *3*. Ils seront près à *Mille-Feuilles*.
</span>

Mais il est possible de les changer en les remplacant par une autre constante (littérale) du **MEME TYPE** pour avoir quelque chose de mieux.

<span style="color:blue;background-color: white;">
- Je voudrais réserver *10* *Charlottes-aux-poires* pour *Lundi*.
- *Non*.  Désolé nous somme fermés *Lundi*.
</span>

Le **type** de ces constantes est soit un jour *Lundi*, soit un nom de gateau *Charlottes-aux-poires* soit un nombre entier *10* soit une heure *7h57* etc.

Pour python nous allons trouver des Littéraux avec des types prédéfinis qui nous permettent d'exprimer des valeurs pertinantes ici nous demandons a python de nous donner le type de chaque exemple de littéral :

	>>> type(1)   # je demande le type du littéral 1 un entier 
	<class 'int'>
	>>> type('a') # je demande le type du littéral 'a' une chaine 
	<class 'str'>
	>>> type("Toto") # je demande le type du littéral "toto" une chaine 
	<class 'str'>
	>>> type(3.141592653589793)  # je demande le type du littéral 3.141592653589793 un float
	<class 'float'>
	>>> 

Définition: Un **littéral** est une valeur d'un certain type apparaissant directement dans un programme.

# Variables et identifiants 


Définition : Un **identifiant** est un nom qui permet d'**identifier** un élément d'un programme.

Définition : une **variable** est un couple **identifiant** + **donnée**. La donnée associé à l'identifiant peut changer au cours de l'execution d'ou le nom de variable. Python n'a pas de **constantes** c'est à dire une association **identifiant** + **donnée** définitive.  

Un **identifiant** seul sans valeur associé produira une erreur.

	>>> toto
	Traceback (most recent call last):
	...
	NameError: name 'toto' is not defined
	>>> 

La création d'une variable se fait au moment de l'association initiale.

	>>> a=1
	>>> a
	1
	>>> a=2
	>>> a
	2
	>>> del a   # destruction de la variable 
	>>> a
	Traceback (most recent call last):
	...
	NameError: name 'a' is not defined
	>>> 

Exercice : définisez une variable **entier** entière c'est à dire de type &gt;class int>.

Une variable **bob** réelle de type &gt;class float>.

Une variable **nom** contenant une chaine de caractère c-à-d  de type &gt;class str>.



==
code==
# Ceci est un commentaire
# creez vos trois variables sur les lignes suivantes
# une variable par ligne

==

gradertype=autonome

grader==

import json
import sys
d=  { "success": False , "execution" : "", "feedback": "", "other": "","error":""}


try:
	from  student import entier,bob,nom
	entier>0
	bob>0
	nom=="Emilie"
except NameError as ne:
	d["feedback"]="# oubli\n\n Vous n'avez pas définie la variable **" +  str(ne).split("'")[1]+"**\n"
	print(json.dumps(d))
	sys.exit(1)
except ImportError as ie:
	d["feedback"]="# oubli\n\n Vous n'avez pas définie la variable **" +  str(ie).split("'")[1]+"**\n"
	print(json.dumps(d))
	sys.exit(1)
except Exception as e:
	d["feedback"]="# Problem dans le code\n\n"+str(e)
	print(json.dumps(d))
	sys.exit(1)
if not type(entier) == type(3):
	d["feedback"]="# Type incorrect\n\nla variable entier n'est pas entière \n type(entier) =: " +str(type(entier))  
elif not type(bob) == type(3.12):
	d["feedback"]="# Type incorrect\n\nla variable bob n'est pas un float (réel) \n type(bob) =: " +str(type(bob))  
elif not type(nom) == type(" toto "):
	d["feedback"]="# Type incorrect\n\nla variable nom n'est pas une chaine \n type(nom) =: " +str(type(nom))
else:
	d=  { "success": True , "execution" : "",
	 "feedback": "#bravo \n\nTrois variables que nous allons utiliser dans un programme ;)\n", "other": "","error":""}

print(json.dumps(d))


==

testcode==
entier=123
bob=5.5
nom="jkh"
==

