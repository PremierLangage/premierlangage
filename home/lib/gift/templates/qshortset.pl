
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
feedbackGeneral==
==


form==
{{ inputbox|component}}
==

evaluator==
result = 0
feedback = ''
value = inputbox.value
for index ,content in enumerate(choices) :
    if (choices[index]["right"]) == value:
        feedback += "<br>" + choices[index]["feedback"]
        result = 1 
feedback +=  "<br>" + feedbackGeneral
css = 'error-state anim-fade'
score = 0 
if result == 1  :
    score = 100
    css = 'success-state anim-fade' 
    
grade = (score, f"<p class='{css}'>{feedback}</p>")
    
==



