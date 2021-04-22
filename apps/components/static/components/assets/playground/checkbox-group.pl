@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

component =: CheckboxGroup

before==
component.items = [
    { "id": "Winter", "content": "Winter" },
    { "id": "Spring", "content": "Spring", "css": "error-state" },
    { "id": "Summer", "content": "Summer" },
    { "id": "Autumn", "content": "<img src='https://htpratique.com/wp-content/uploads/2018/06/Les-meilleurs-outils-pour-créer-un-quiz-et-questionnaires-en-ligne.jpg'/>" }
]
==

title = Checkbox Group Component

text==
==

form==
{{ component|component }}
==

evaluator==
grade = (100, "")
==
