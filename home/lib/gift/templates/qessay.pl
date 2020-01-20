@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

# STEP 1

match =: Input
match.type = text
feedback =
before==
==
title==
==
text==
==

form==
{{ match|component }}
==

evaluator==
grade = (100, '<span class="success-state">Good answser</span>')
==

