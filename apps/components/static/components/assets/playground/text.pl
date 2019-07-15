@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

component =: Text
component.text = The quick brown fox jumps over the lazy dog.
component.selectable % true

before==
==

title==
Text Component
==

text==
Select the words containing **o**
==

form==
{{ component|component}}
==

evaluator==
score = 100
indices = [2, 3, 5, 8]
for e in component.selections:
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

