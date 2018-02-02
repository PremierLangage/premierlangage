# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>

# using the new plgrader  


name=/python/0PLG/template.pl

grader==
from plgrader import Grader
g=Grader()
print(g.grade())
==

sandbox=@/pysrc/src/__init__.py
sandbox=@/pysrc/src/plgrader.py
sandbox=@/pysrc/src/feedback.py
files=@/pysrc/src/__init__.py
files=@/pysrc/src/plgrader.py
files=@/pysrc/src/feedback.py
files=@/pysrc/src/plutils.py
sandbox=@/pysrc/src/pldoctest.py

type=sandbox

# ce builder ne fait rien mais il a la bonne api
# il prend un de dic pl en parametre et retourne un dic de pl
build==
def build(bob):
    return bob
==
# un évaluateur de base qui fait appel à la sandbox
evaluator=@ /pysrc/functions/sandboxevaluator.py


# une interface standard d'exercice avec un editeur pour la réponse
form=@ /python/form/editorform.html
