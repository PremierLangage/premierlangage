@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

grid =: EvalGrid


# GENERATE A RANDOM QUESTION
before==

grid.items = [
    {
        'title': 'First step of evaluation grid',
        'description': 'For default check choice set "selected"',
        'choices': [
            'Choice with index 0',
            'Choice with index 1',
            'Choice with index 2',
            'Choice with index 3',
        ],
        'selected': 1
    },
    {
        'title': 'Second step of evaluation grid',
        'description': 'This feature is preview feature',
        'choices': [
            'Choice with index 0',
            'Choice with index 1',
            'Choice with index 2',
            'Choice with index 3',
        ]
    },
]

==

title = Eval Grid Component

text==
Complet your evaluation
==

# PRESENT THE QUESTION TO THE STUDENT
form==
{{ grid|component }}
==

# EVALUATE THE STUDENT ANSWER
evaluator==

feedback = ""

for item in grid.items:
    if item['selected'] == -1:
        feedback += "Undefined"
    else:
        feedback += item['choices'][item['selected']]
    feedback += "<br>"

grade = (100, feedback)

==
