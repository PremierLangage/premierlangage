
@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

inputbox =: Input
inputbox.type = text
inputbox.appearance = outline

choices= 
feedback = 
horizontal % false

before==
import re
lines = choices.split('\n')
choices = []
liste = []
mode = None
pattern = re.compile(r'(?P<type>\=|\/|:)(?P<score>.*)->(?P<left>.*)->(?P<right>(?:(?:\\\#)|[^\#])+)(?:\#(?P<feedback>.*))?')
for line in lines:
    match = pattern.match(line)
    if not match:
        continue
    choice = {
        "feedback": match.group('feedback') or '',
        "type": match.group('type'),
        "left": match.group('left'),
        "right": match.group('right'),
        "score": match.group('score')
    }
    mode = "tolerance"
    if choice["type"] == "/":
        mode = "range"
    choices.append(choice)
==

title==
==
text==
==

form==
{{ inputbox|component }}
==

evaluator== #|python|
error =  1 
score = 0
feed = feedback
try:
    inputbox.value = float(inputbox.value)
    if mode == "tolerance":
        for index, content in enumerate(choices):
            choice = choices[index]
            mini = float(choice["left"])  - float(choice["right"])
            maxi =   float(choice["left"])  + float(choice["right"])
            
            if  inputbox.value >=  mini and inputbox.value <=  maxi :
                error = 0
                if score < float(choice["score"]):
                    score = float(choice["score"])
                    feed = choice['feedback'] or feed or '👏👏👏'
    if mode == "range": 
        for index ,content in enumerate(choices) :
            mini = float(choices[index]["left"]) 
            maxi =   float(choices[index]["right"])  
            if  inputbox.value >=  mini and inputbox.value <=  maxi :
                error = 0
                if score <float(choices[index]["score"]) :
                    score = float(choices[index]["score"])
                    feed = choice['feedback'] or feed or '👎👎👎'
    if  error == 0 :
        grade = (score, f'<span class="success-state animated pulse infinite">{feed} {score} </span>')
    else :
        grade = (score, f'<span class="error-state animated pulse infinite">{feed} {score} </span>')
except:
    grade = (-1, f'<span class="warning-state animated pulse infinite">You must enter a valid answer</span>')
==







