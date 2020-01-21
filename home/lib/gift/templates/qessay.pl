@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

# STEP 1

match =: Input
match.type = text

before==
==
title==
==
text==
==
feedbackGeneral==
==


form==
{{ match|component }}
==

evaluator==

feedback = feedbackGeneral
css = 'success-state anim-fade'
grade = (100, f"<p class='{css}'>{feedback}</p>" )
==

