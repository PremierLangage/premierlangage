# Copyright 2016 Nicolas Borie <nicolas.borie@u-pem.fr>
#
#
# nouvelle exigence du 8 Juillet le type 
template=/python/0PLG/template.pl

author=Nicolas Borie
title=<>
text==

Ceci est un texte qui ne devrait pas apparaitre!
Voyez avec nicolas.borie@u-pem.fr en signalant le nom de l'exercice qui devrait
être différent de autograderC.pl

==

# chargement des fichiers utiles 
sandbox=@/C/template/basic.c
sandbox=@/C/template/graderC.py


grader==
from graderC import grade
grade()
==

