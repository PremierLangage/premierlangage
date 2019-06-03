# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=  Pim Pim Pim Pim
title=  Pim Pim Pim Pim  # N'oubliez pas de remplir ce champs svp
tag= def|return  # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template.pl

taboo=print|join
text==

# Ecrire une fonction **pim**

	Qui prend un parametre entier n et qui retourne des Pim :

	Si n < 1 retourne la chaine  **Pas de Pim**
	sinon retourne la chaine **Pim** pour n = 1
	      retourne la chaine **Pim Pim** pour n = 2
	      retourne la chaine **Pim Pim Pim** pour n = 3
	etc

## taboo

	Ne pas utiliser **print** ni **join**.

==

pltest==
>>> pim(0)
'Pas de Pim'
>>> pim(1) # pas despace dans la solution 
'Pim'
>>> pim(1) # pas despace à la fin
'Pim'
>>> pim(12) # plein de pimme 
'Pim Pim Pim Pim Pim Pim Pim Pim Pim Pim Pim Pim'
>>> pim(-777) #vraiment négatif
'Pas de Pim'
==


testcode==
# p r i n t pour tester taboo et ca marche 
def pim(n):
	if n>0:
		return("Pim "*(n-1)+"Pim")
	else:
		return("Pas de Pim")
==
