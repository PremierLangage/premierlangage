
@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py
checkGroup =: CheckboxGroup
choices= 
feedback = 

before==
import re
lines = choices.split('\n')
checkGroup.items = []
choices = []
pattern = re.compile(r'(?P<type>\=|\~)%(?P<fraction>[\-0-9.]+)%(?P<content>(?:(?:\\\#)|[^\#])+)(?:\#(?P<feedback>.*))?')
for line in lines:
    match = pattern.match(line)
    if not match:
        continue
    choice = {
        "feedback": match.group('feedback') or '',
        "type": match.group('type') == '=',
        "fraction":match.group('fraction')
    }
    choices.append(choice)
    checkGroup.items.append({
        "feedback": match.group('feedback') or '',
        "content": match.group('content'),
        "type": match.group('type') 
    })
==

title ==
==
text==
==

form==
{{ checkGroup|component }}
==

evaluator==
right = 0
total = 0
for index, item in enumerate(checkGroup.items):
    checked = item['checked']
    choice = choices[index]
    if  item["type"] == "=":
        total += 1
        item['css'] = 'success-border animated pulse infinite'
        if checked:
            right += 1
            item['css'] = 'success-border'
    elif checked:
        item['css'] = 'error-border'

grade = (right / total, f"{right} / {total}")
==


