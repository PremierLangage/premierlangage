@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

component.cid = component
component.selector = pl-code-editor
component.code ==
import os
==
component.theme = dark
component.language = python


before==
==

title = Code Editor Component

text==
==

form==
{{component|component }}
==

evaluator==
grade = (100, "")
==
