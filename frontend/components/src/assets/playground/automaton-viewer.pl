# THIS EXAMPLE IS DEPRECATED SINCE THE COMPONENT WILL BE RENAMED SOON

@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

viewer =: AutomatonDrawer
viewer.automaton ==
#states
s0
s1
s2
#initials
s0
#accepting
s2
#alphabet
a
b
#transitions
s0:a>s1
s1:a>s1
s1:b>s2

==
before==
==

title = Automaton Viewer

text==
==

form==
{{ viewer|component }}
==

evaluator==
grade = (100, "")
==
