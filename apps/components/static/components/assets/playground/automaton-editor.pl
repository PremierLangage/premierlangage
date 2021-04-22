@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

component =: AutomatonEditor

before==
==

title = Automaton Editor

text==
==

form==
{{ component|component }}
==

evaluator==
grade = (100, "")
==
