# IMPORTS
@ /utils/sandboxio.py
@ /grader/evaluator.py [grader.py]
@ /builder/before.py [builder.py]

# DECLARATION
component =: SortList
component.items ==
Lorem ipsum A
Lorem ipsum B
Lorem ipsum C
Lorem ipsum D
==

component.text % 10

# RANDOMIZATION
before==
component.parse_string('\n')
component.remind()
==

# FORM
title = Sort List Component
text = *Drag and Drop the items to sort the list*
form = {{ component|component }}



# EVALUATION
evaluator==
score = component.auto_grade()
grade = (score, str(score))
==

