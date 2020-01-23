@ /utils/sandboxio.py
@ /grader/evaluator.py [grader.py]
@ /builder/before.py [builder.py]

inputbox =: Input
inputbox.type = text
inputbox.appearance = outline

choices = 
general_feedback = 

title = PLEASE OVERRIDE THE TITLE OF THE EXERCISE
text  = PLEASE OVERRIDE THE TEXT OF THE EXERCISE
form  = {{ inputbox|component}}


before== #|python|
import re
lines = choices.split('\n')
choices = []
pattern = re.compile(r'=(?P<value>(?:(?:\\\#)|[^\#])+)(?:\#(?P<feedback>.*))?')
for line in lines:
    match = pattern.match(line)
    if not match:
        continue
    choice = {
        "feedback": match.group('feedback') or '',
        "value": match.group('value').strip()
    }
    choices.append(choice)
==

evaluator== #|python|
score = 0
feedback = ''
studentAnswer = inputbox.value.strip()
inputbox.suffix = '<i class="fas fa-times"></i>'
for i, e in enumerate(choices):
    if e["value"] == studentAnswer:
        score = 100
        inputbox.suffix = '<i class="fas fa-check"></i>'
        if e["feedback"]:
            feedback = e["feedback"] + "<br/>"
        break
feedback += general_feedback
grade = (score, f"<p>{feedback}</p>")
==








