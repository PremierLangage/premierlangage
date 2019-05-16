# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>

# using the new plgrader  

# resrved for soluce problems



grader==
from plgrader import Grader
g=Grader()
print(g.grade())
==

@/__init__.py
@/plgrader.py
@/feedback.py
@/plutils.py
@/pldoctest.py
@/template.html


type=sandbox

# ce builder ne fait rien mais il a la bonne api
# il prend un de dic pl en parametre et retourne un dic de pl
build==
def build(bob):
    return bob
==




# une interface standard d'exercice avec un editeur pour la réponse
form=@ /editorform.html


