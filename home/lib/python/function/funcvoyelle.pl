# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Function Voyelles
title=None
template=/python/0PLG/template.pl
text==
# Appartient

Ecrire une fonction **voyelles** qui compte le nombre de voyelles (minuscules, sans accents) dans une chaîne de caractères passée en argument.

==

code==
# les voyelles aeiouy

==


pltest==
>>> voyelles("aeiouy")
6
>>> voyelles("ceci est un exemple")
7
>>> voyelles("")
0
>>> voyelles("zrt&(§ç&!'§(&!'è(ç")
0
==

