# Copyright 2016 Nicolas Borie <nicolas.borie@u-pem.fr>
#
#
# nouvelle exigence du 8 Juillet le type 
# template=@/python/0PLG/template.pl

author=Nicolas Borie
title=Template d'exercices de C standards sous sandbox
text==

Ceci est un texte qui ne devrait jamais apparaitre!
Voyez avec nicolas.borie@u-pem.fr en signalant le nom de l'exercice qui devrait
être différent de "Template d'exercices de C standards sous sandbox" auquel cas, 
vous avez juste fait une erreur de clic.

==

type=sandbox

# chargement des fichiers utiles 
@/template/basic.c
@/template/graderC.py
@/template/feedbackC.py
@/template/__init__.py
@/template/templateC.html
@/template/templateConglet.html
@/utils/sandboxio.py

#evaluator
@/template/evaluatorC.py [grader.py]

# builder
builder=@/builder/none.py

# interface exercice standard plbank
form=@/form/text_editor.html
editor.language = c_cpp
editor.fontsize = 16

#expectedoutput==
#NE SERT A RIEN SI TOUT VA BIEN...
#==


