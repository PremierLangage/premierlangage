@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

mycomponent % {}
mycomponent.cid = myselector
mycomponent.text = The quick brown fox jumps over the lazy dog.
mycomponent.selectable % true
mycomponent.debug % true

before==
==

title==
Text Component
==

text==
Selectionnez les mots contenant la lettre **o**
==

form==
<pl-text cid="myselector"></pl-text>
==

evaluator==
score = 100
indices = [2, 3, 5, 8]
for e in mycomponent.selections
    e['state'] = "error-state"
    if e['index'] in indices:
        e['state'] = "success-state"
        indices = [i for i in indices if i != e['index']]
    else:
        indices.append(e['state'])

if len(indices) == 0:
    score = 100
    msg = 'Bonne réponse'
else:
    score = 0
    msg = 'Mauvaise réponse'
grade = (score, msg)
==
