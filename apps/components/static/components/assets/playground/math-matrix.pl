@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

matrix =: MathMatrix
matrix.resizable % true


before==
matrix.matrix = [
    [{ "value": 0, "css": "success-state animated rotateIn" }, { "value": 0 },],
    [{ "value": 0 }, { "value": 0, "css": "error-state animated pulse infinite" },]
]
==

title==
Math Matrix Component
==

text==
==

form==
{{ matrix|component}}
==

evaluator==
grade = (100, matrix.matrix);
==

