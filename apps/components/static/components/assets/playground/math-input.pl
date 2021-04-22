@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

component =: MathInput

before==
==

title==
Math Input Component
==

text==
==

form==
{{ component|component}}
==

evaluator==
grade = (100, component.value);
==

