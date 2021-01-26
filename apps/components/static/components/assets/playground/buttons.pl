

@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

buttons =: Buttons
# types : text, svg, icons
buttons.type = text
buttons.buttons %=
[
    { "mat-type": "mat-raised-button", "content":"bouton1" ,"handle":"1" },
    { "mat-type": "mat-raised-button", "content":"bouton2" ,"handle":"2" },
    { "mat-type": "mat-raised-button", "content":"bouton3" ,"handle":"3" }
]
==



before==
==

title==
Button exemple
==

text==
Choose one button.
==

form==
{{ buttons|component}}
==

evaluator==
if r == buttons.selected:
    grade = (100, '<span class="success-state">Good 👏👏👏</span>')
else:
    grade = (0, '<span class="error-state">Bad answer 👎👎👎</span>')
==

