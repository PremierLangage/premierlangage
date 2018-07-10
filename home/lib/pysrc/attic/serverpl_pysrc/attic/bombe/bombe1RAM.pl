# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= bombe1RAM.pl
title=  bombe1RAM.pl
text==

bombe1RAM

creation d'une liste de 1go elements 

==

# Choisir pltest ou soluce ou expectedoutput


grader==

from random import randint

l=[0]
for i in range(1,2**30):
	l.append(randint(1,10000))


json.dumps({"plateforme":True,"stderr":"","result":True,"stdout":"temps d'execution trop long"})

==
