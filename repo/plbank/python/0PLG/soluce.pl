# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>

# using the new plgrader  

# resrved for soluce problems

soluceX= There is a bug in plgrader so this is needed

name=/python/0PLG/soluce.pl

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
