

@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

buttons =: Buttons
# types : text, svg, icon
buttons.type = icon
buttons.buttons %=
[
    { "icon": "menu", "content":"bouton1" ,"id":"1" },
    { "icon": "home", "content":"bouton2" ,"id":"2" },
    { "icon": "nature_people", "content":"bouton3" ,"id":"3" }
]
==

# Choix des icons
# https://www.angularjswiki.com/fr/angular/angular-material-icons-list-mat-icon-list/#mat-icon-list-cat%C3%A9gorie-action

before==

==

title==
Button icon exemple
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

