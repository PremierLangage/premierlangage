# IMPORTS
@ /utils/sandboxio.py
@ /grader/evaluator.py [grader.py]
@ /builder/before.py [builder.py]

# DECLARATION
sortlist =: SortList
sortlist.items ==
Lorem ipsum A
Lorem ipsum B
Lorem ipsum C
Lorem ipsum D
==

# RANDOMIZATION
before==
sortlist.parse_string('\n')
sortlist.remind()
==

# FORM
title = Sort List Component
text = *Drag and Drop the items to sort the list*
form = {{ sortlist|component }}



# EVALUATION
evaluator==
score = sortlist.auto_grade() * 100

if score == 100:
    grade = (100, '<span class="success-state">Good answer</span>')
else:
    grade = (0, f'<span class="error-state">Try again</span>')
==

