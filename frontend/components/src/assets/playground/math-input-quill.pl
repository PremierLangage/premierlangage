@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

mathinput =: MathInputQuill
mathinput.config %=
{
    "charsThatBreakOutOfSupSub": "+-=<>",
    "autoCommands": "pi theta sum sqrt infty infin emptyset",
    "autoOperatorNames": "sin cos tan ln exp cup cap"
}
==

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

