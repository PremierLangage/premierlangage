# Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=Kolakoski.pl
title=  kolakoski:codageparplages
tag=tag # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template.pl
text==

# La  séquence de Kolakoski

Une séquence de Kolakoski est une séquence infine de chiffres qui encode sa propre compression par codage par plages. Par exemple:

	Séquence:    1  2 2  1 1  2  1  2 2  1  2 2 …
				 ↕   ↕    ↕   ↕  ↕   ↕   ↕   ↕
	Plages :     1   2    2   1  1   2   1   2  …  ← même séquence

Pour plus d'information voir la page : [http://fr.wikipedia.org/wiki/Suite_de_Kolakoski](http://fr.wikipedia.org/wiki/Suite_de_Kolakoski)


## Codage par Plages

Dans un premier temps nous nous intéresserons au codage par plages.

Ecrire une fonction cpp(s) qui retourne une chaine qui est le codage par plage de la chaine passée en parametre:

	>>> cpp("12")
	"1112"
	>>> cpp("11")
	"2"
	>>> cpp("112211")
	"212221"

==

# Choisir pltest ou soluce ou expectedoutput

pltest==
	>>> cpp("12")
	"1112"
	>>> cpp("11")
	"21"
	>>> cpp("112211")
	"212221"
	>>> cpp(cpp(cpp("11"))) # 21 1211 111221
	"111221"
==
