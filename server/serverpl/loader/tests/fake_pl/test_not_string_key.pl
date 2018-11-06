title %=
{"a":1, "b" : 2}
==

text = a

text +=
b
==

form = a


@ /utils/sandboxio.py
@ /builder/before.py [builder.py]
@ /grader/evaluator.py [grader.py]