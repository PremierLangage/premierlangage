author=Dominique Revuz
name=Conway
title=Conway
tag=string|function

text==
# la suite de Conway :

	1
	11
	21
	1211
	111221
	312211
	...


Comment ça marche cette suite ?
Par exemple, pour passer de la ligne 5:"111221" à la ligne 6:"312211",
on regarde la ligne 5, on la lit en regroupant les chiffres identiques qui se suivent, ce qui donne :

	"3 fois le chiffre 1 puis 2 fois le chiffre 2 et enfin 1 fois le chiffre 1"

et enfin, en extrayant les nombres :

	312211

d'où la ligne 6.

## Enoncé

Ecrire une fonction *conway* qui prend une chaine en paramètre et retourne la chaine suivante par la transformation décrite ci dessus.

==

pltest==
>>> conway("111221")
"312211"
>>> conway("1231")
"11121311"
>>> conway(conway(conway(conway("1"))))
"111221"
==

testcode==
def conway(s):
	k=0
	res=""
	for x in s:
		if k==0:
			l=x
			compte=1
			k=1
		elif k==1:
			if x==l:
				compte+=1
			else:
				res+=str(compte)+str(l)
				l=x
				compte=0
	return res
==
