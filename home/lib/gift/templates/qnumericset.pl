
@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

inputbox =: Input
inputbox.type = text
inputbox.appearance = outline

choices= 
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
feedbackGeneral==
==

form==
{{ inputbox|component }}
==

evaluator== #|python|
error =  1 
score = 0
feedback = ''
try:
    valeur = float(inputbox.value)
    if mode == "tolerance":
        for index, content in enumerate(choices):
            choice = choices[index]
            mini = float(choice["left"])  - float(choice["right"])
            maxi =   float(choice["left"])  + float(choice["right"])
            if  valeur >=  mini and valeur <=  maxi :
                error = 0
                if score < float(choice["score"]):
                    score = float(choice["score"])
                    feedback += "<br>" +  choice['feedback']
    if mode == "range": 
        for index ,content in enumerate(choices) :
            mini = float(choices[index]["left"]) 
            maxi =   float(choices[index]["right"])  
            if  valeur >=  mini and valeur <=  maxi :
                error = 0
                if score <float(choices[index]["score"]) :
                    score = float(choices[index]["score"])
                    feedback += "<br>" + choice['feedback'] 
    feedback +=  "<br>" + feedbackGeneral
    css = 'error-state anim-fade'
    if  error == 0:
         css = 'success-state anim-fade' 
except:
    score = -1

grade = (score, f"<p class='{css}'>{feedback}</p>")
==







