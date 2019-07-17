@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

component =: Input
component.type = number

before==
==

title==
Input Component
==

text==
==

form==
{{ component|component}}
==

evaluator==
grade = (100, component.value);
==

