# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>

# using the new plgrader  


name=/python/0PLG/template.pl

grader==
from plgrader import Grader
g=Grader()
print(g.grade())
==

@ /pysrc/src/__init__.py
@/pysrc/src/plgrader.py
@/pysrc/src/feedback.py
@/pysrc/src/plutils.py
@/pysrc/src/pldoctest.py
@/pysrc/src/template.html





# une interface standard d'exercice avec un editeur pour la réponse
form=@ /python/form/editorform.html





