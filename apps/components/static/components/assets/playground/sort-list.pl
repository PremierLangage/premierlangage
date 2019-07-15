# IMPORTS
@ /utils/sandboxio.py
@ /grader/evaluator.py [grader.py]
@ /builder/before.py [builder.py]

# DECLARATION
component =: SortList
component.items ==
Lorem ipsum A #
Lorem ipsum B #
Lorem ipsum C #
Lorem ipsum D #
==

component.text % 10

# RANDOMIZATION
before==
component.string_format()
component.remind()
component.randomize()
==

# EVALUATION
evaluator==
score = component.auto_grade()
grade = (score, str(score))
==

# LAYOUT
title==
Sort List Component
==

text==
Sort the list
==

form==
{{ component|component }}
==
