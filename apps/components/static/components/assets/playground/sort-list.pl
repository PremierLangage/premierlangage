@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

# DECLARATION
sortlist =: SortList
sortlist.items %= #|json|
[
    { "id": "1", "content": "First Item" },
    { "id": "2", "content": "Second Item" },
    { "id": "3", "content": "Third Item" }
]
==

# RANDOMIZATION
before== #|python|
import random
answer = []
for e in sortlist.items:
    answer.append(e["id"])
random.shuffle(sortlist.items)
==

# FORM
title = Sort List Component
text = *Drag and Drop the items to sort the list*
form = {{ sortlist|component }}


# EVALUATION
evaluator== #|python|
errors = 0
for i, e in enumerate(sortlist.items):
    e['css'] = 'success-state anim-fade'
    if e['id'] != answer[i]:
        e['css'] = 'error-state anim-fade'
        errors += 1

if errors == 0:
    grade = (100, 'GOOOOOOOD')
else:
    grade = (0, '%s wrong answers' % errors)
==
