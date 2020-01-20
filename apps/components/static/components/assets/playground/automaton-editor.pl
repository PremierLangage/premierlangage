@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

editor =: AutomatonEditor

before==
==

title = Automaton Editor

text==
==

form==
{{ editor|component }}
==

evaluator==
grade = (100, "")
==
