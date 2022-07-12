@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

mathinput =: MathInputQuill

before==
==

title==
Math Input Quill Component
==

text==
==

form==
{{ mathinput|component}}
==

evaluator==
grade = (100, mathinput.value);
==

