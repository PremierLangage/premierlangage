@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

component =: MathMatrix
component.resizable % true


before==
component.matrix = [
    [{ "value": 0, "css": "success-state anim-flip" }, { "value": 0 },],
    [{ "value": 0 }, { "value": 0, "css": "error-state anim-bounce" },]
]
==

title==
Math Matrix Component
==

text==
==

form==
{{ component|component}}
==

evaluator==
grade = (100, component.matrix);
==

