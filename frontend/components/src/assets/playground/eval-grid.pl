@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

grid =: EvalGrid

# GENERATE A RANDOM QUESTION
before==

==

title = Eval Grid Component

text==
Complet your evaluation
==

# PRESENT THE QUESTION TO THE STUDENT
form==
{{ grid|component }}
==

# EVALUATE THE STUDENT ANSWER
evaluator==

==
