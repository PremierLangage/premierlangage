@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

component1 %=
{
    "cid": "c1",
    "text": "The quick brown fox jumps over the lazy dog.",
    "selectable": true
}
==

component2.cid = c2
component2.selector = pl-input
component2.type = number
component2.value % 10

before==
component2.value = 100
==

title = Components

text==
==

form==
<pl-text cid="c1"></pl-text>
{{ component2|component }}
==

evaluator==
feedback = "c1 selections: %s, c2 value: %s" % (component1.selections, component2.value)
grade = (100, feedback)
==
