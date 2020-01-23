@ /utils/sandboxio.py
@ /grader/evaluator.py [grader.py]
@ /builder/before.py [builder.py]

inputbox =: Input
inputbox.type = number
inputbox.appearance = outline

choices= 
horizontal % false
general_feedback = 

title = PLEASE OVERRIDE THE TITLE OF THE EXERCISE
text  = PLEASE OVERRIDE THE TEXT OF THE EXERCISE
form  = {{ inputbox|component }}

before== #|python|
import re
lines = choices.split('\n')
choices = []
liste = []
mode = None
pattern = re.compile(r'(?:%(?P<score>.*)%)?(?P<v1>.*)(?P<mode>\:|\.\.)(?P<v2>(?:(?:\\\#)|[^\#])+)(?:\#(?P<feedback>.*))?')
for line in lines:
    match = pattern.match(line)
    if not match:
        continue
    choice = {
        "score": match.group('score') or 100,
        "v1": match.group('v1').strip(),
        "mode": match.group('mode'),
        "v2": match.group('v2').strip(),
        "feedback": match.group('feedback') or ''
    }
    choices.append(choice)
==

evaluator== #|python|
score = 0
feedback = ''
try:
    value = float(inputbox.value)
    for i, e in enumerate(choices):
        mode = e['mode']
        if mode == ':': # margin mode
            answer = float(e['v1'])
            tolerance = float(e['v2'])
            mini = answer - tolerance
            maxi = answer + tolerance
        else: # range mode
            mini = float(e['v1'])
            maxi = float(e['v2'])
        if value >= mini and value <= maxi:
            score = int(float(e['score']))
            if e['feedback']:
                feedback = e['feedback'] + "<br/>"
            break
    feedback += general_feedback
except:
    score = -1
    feedback = ''

inputbox.suffix = '<i class="fas fa-times"></i>'
if score > 0:
    inputbox.suffix = '<i class="fas fa-check"></i>'
grade = (score, f"<p>{feedback}</p>")
==



















