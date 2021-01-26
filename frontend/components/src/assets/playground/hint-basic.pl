@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

hints % { "cid": "hints", "selector": "c-hint" }
hints.label = **Stucked?** Ask a hint.
hints.confirmMessage ==
The usage of a hint may affect your final score!
==

hints.shouldConfirm % true
hints.confirmTitle = Are you sure you want a hint ?
hints.confirmOkTitle = Yes
hints.confirmNoTitle = No
hints.items %=
[
    { "content": "**Hint 1**" },
    { "content": "**Hint 2**"  },
    { "content": "**Hint 3**", "css": "warning-state"  }
]
==

before==

==

title==
Hint Component
==

text==
==

form==
{{ hints|component}}
==

evaluator==
counter = 0
for e in hints.items:
    if 'consumed' in e:
        counter += 1

if counter > 0:
    grade = (0, f'<span class="warning-state">You used {counter} hint(s) to achieve the exercise</span>')
else:
    grade = (100, '<span class="success-state">You finished the exercise without using a hint</span>')
==

