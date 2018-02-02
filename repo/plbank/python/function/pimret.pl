# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=  Pim Plus Plus
title=  Pim  Plus Pim  # N'oubliez pas de remplir ce champs svp
tag= def|return|list|function|join  # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template.pl

taboo=print
text==

# Ecrire une fonction **pims**

Qui prend un parametre entier *n* et une chaine *s* qui retourne des PimS :

	Si la chaine s vaut "+" 
	Si n < 1 retourne la chaine  "Pas+de+Pim"
	sinon retourne la chaine "Pim" pour n = 1
		  retourne la chaine "Pim+Pim" pour n = 2
		  retourne la chaine "Pim+Pim+Pim" pour n = 3
	etc

	Si la chaine s vaut " Oh! "" 
	Si n < 1 retourne la chaine  "Pas Oh! de Oh! Pim"
	etc

Pour cela utiliser la fonction **join** des chaines de caractères voici deux exemples:

	"Kiki".join(["Oh! un "," C'est formidable un "," Quoi encore un "," fin."])
	"Oh! un Kiki C'est formidable un Kiki Quoi encore un Kiki fin."
	# les éléments de la liste doivent être des chaines 
	" ".join(['1','2','3','4','5'])
	'1 2 3 4 5'

Comme on peut le voir cela permet de coller les chaines de la liste avec la chaine de jointure ici successivement "Kiki" et " ".


## taboo

	Ne pas utiliser print.

==

pltest==
>>> pims(0,"+")
'Pas+de+Pim'
>>> pims(1,"éléphant") # pas despace dans la solution 
'Pim'
>>> pims(1,"éléphant") # pas despace à la fin
'Pim'
>>> pims(12,"-") # plein de pimme 
'Pim-Pim-Pim-Pim-Pim-Pim-Pim-Pim-Pim-Pim-Pim-Pim'
>>> pims(-777," une longue chaine ") #vraiment négatif
'Pas une longue chaine de une longue chaine Pim'
==


testcode==
# p r i n t pour tester taboo et ca marche 
def pims(n,s):
	if n <1:
		return s.join(['Pas','de','Pim'])
	else:
		return s.join(['Pim']*n)

==
