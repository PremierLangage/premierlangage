
@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

inputbox =: Input
inputbox.type = text
inputbox.appearance = outline
choices= 

before==
import uuid
import re
lines = choices.split('\n')
choices = []
pattern = re.compile(r'(?P<type>\=)(?P<content>(?:(?:\\\#)|[^\#])+)(?:\#(?P<feedback>.*))?')
for line in lines:
    match = pattern.match(line)
    if not match:
        continue
    choice = {
        "feedback": match.group('feedback') or '',
        "right": match.group('content')
    }
    choices.append(choice)

==

title==
==
text==
==

form==
{{ inputbox|component}}
==

evaluator==
result = 0
value = inputbox.value
for index ,content in enumerate(choices) :
    if (choices[index]["right"]) == value:
        result = 1 
if result == 1  :
    grade = (100, '<span class="success-state">Good 👏👏👏</span>')
else : 
    grade = (0, '<span class="error-state">Bad answer 👎👎👎</span>')
    
==



