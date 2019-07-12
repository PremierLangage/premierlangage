@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

component.cid = component
component.selector = pl-automaton-editor
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
