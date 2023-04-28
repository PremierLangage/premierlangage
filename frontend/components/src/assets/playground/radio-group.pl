@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

group =: RadioGroup

# GENERATE A RANDOM QUESTION
before==
import random
import uuid

A = random.randint(0, 10)
B = random.randint(0, 10)
R = uuid.uuid4()

# append random false answers to group.items array.
group.items = []
for i in range(4):
    n = random.randint(0, 100)
    while n == A * B:
        n = random.randint(0, 100)
    group.items.append({
        "id": uuid.uuid4(), # generate a random id instead of an hardcoded to avoid cheat
        "content": str(n)
    })

# append random right answer to group.items array.
group.items.append({
    "id": R,
    "content": str(A * B)
})

# shuffle the items
random.shuffle(group.items)
==

title = Radio Group Component

text==
Select the result of **{{ A }}** x **{{ B }}**.
==

# PRESENT THE QUESTION TO THE STUDENT
form==
{{ group|component }}
==

# EVALUATE THE STUDENT ANSWER
evaluator==
S = group.selection
score = 0
feedback = '<span class="error-state animated pulse infinite">Bad answer</span>'

for item in group.items:
    item['css'] = ''
    if item['id'] == S:
        if S == R:
            item['css'] = 'success-border'
            score = 100
            feedback = '<span class="success-state animated pulse infinite">Good answer</span>'
        else:
            item['css'] = 'error-border'
    elif item['id'] == R:
        item['css'] = 'success-border animated pulse infinite'

grade = (score, feedback)
==
