
@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

choices= 
horizontal % false

radioGroup =: RadioGroup


before==
import uuid
import re

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
feedbackGeneral==
==

form==
{{ radioGroup|component }}
==

evaluator==
score = 0
feedback = ''
selectedId = radioGroup.selection
for index, item in enumerate(radioGroup.items):
    choice = choices[index]
    item['css'] = ''
    if choice["id"] == selectedId:
        feedback =  choice["feedback"] +"<br>" +   feedbackGeneral
        if choice["right"]:
            item["css"] = "success-state"
            score = 100
        else:
            item["css"] = "error-state"
            score = float(choice["fraction"])
            

grade = (score, f"{feedback}")

==







