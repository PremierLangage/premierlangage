@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

component.cid = component
component.selector = pl-automaton-drawer
component.automaton ==
#states
s0
s1
s2
#initial
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

title = Automaton Drawer

text==
==

form==
{{ component|component }}
==

evaluator==
grade = (100, "")
==
