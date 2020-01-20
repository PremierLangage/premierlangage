
@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

choices= 
feedback = 
horizontal % false

before==
import uuid
import re
radioGroup = RadioGroup()
radioGroup.items = []
lines = choices.split('\n')
choices = []
pattern = re.compile(r'(?P<type>\=|\~)%(?P<fraction>[0-9.]+)%(?P<content>(?:(?:\\\#)|[^\#])+)(?:\#(?P<feedback>.*))?')
for line in lines:
    match = pattern.match(line)
    if not match:
        continue
    randomid = uuid.uuid4()
    choice = {
        "id": randomid,
        "fraction": match.group('fraction'),
        "feedback": match.group('feedback') or '',
        "right": match.group('type') == '='
    }
    choices.append(choice)
    radioGroup.items.append({
        "id": randomid,
        "content": match.group('content')
    })

==

title==
==
text==
==

form==
{{ radioGroup|component }}
==

evaluator==
score = 0
selectedId = radioGroup.selection
for index, item in enumerate(radioGroup.items):
    choice = choices[index]
    if choice["id"] == selectedId:
        feedback = choice["feedback"] or feedback
        if choice["right"]:
            item["css"] = "success-state"
            score = 100
        else:
            item["css"] = "error-state"
            score = float(choice["fraction"])
            
    elif choice["right"]:
        item["css"] = "success-state"

grade = (score, f"{feedback}: {score}")
==







