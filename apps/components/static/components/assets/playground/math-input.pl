@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

mathinput =: MathInput

before==
==

title==
Math Input Component
==

text==
==

form==
{{ mathinput|component}}
==

evaluator==
grade = (100, mathinput.value);
==

