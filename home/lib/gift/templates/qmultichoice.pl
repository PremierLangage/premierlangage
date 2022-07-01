@ /utils/sandboxio.py
@ /grader/evaluator.py [grader.py]
@ /builder/before.py [builder.py]

checkbox =: CheckboxGroup

doc==
il faut définir une balise choices qui contient des ligne de la forme :
%80.0% valide a 80 pourcent 
%100% valide à 100%
%0% pas bon 

et une balide general_feedback qui fait quelque chose .

==



choices= 
general_feedback = 

title = PLEASE OVERRIDE THE TITLE OF THE EXERCISE
text  = PLEASE OVERRIDE THE TEXT OF THE EXERCISE
form  = {{ checkbox|component }}

before== #|python|
import re
lines = choices.split('\n')
checkbox.items = []
choices = []
pattern = re.compile(r'%(?P<fraction>[\-0-9.]+)%(?P<content>(?:(?:\\\#)|[^\#])+)(?:\#(?P<feedback>.*))?')
for line in lines:
    match = pattern.match(line)
    if not match:
        continue
    choice = {
        "feedback": match.group('feedback') or '',
        "fraction":match.group('fraction')
    }
    choices.append(choice)
    checkbox.items.append({
        "content": match.group('content'),
    })
==

evaluator== #|python|
score = 0
feedback = ''
for i, e in enumerate(checkbox.items):
    e['css'] = ''
    choice = choices[i]
    fraction = float(choice['fraction'])
    if fraction > 0:
        e['css'] = 'success-border anim-pulse'

    if e['checked']:
        if choice['feedback']:
            feedback += choice['feedback'] + '<br/>'
        score += fraction
        e['css'] = 'success-border'
        if fraction <= 0:
            e['css'] = 'error-border'

feedback +=  general_feedback
score = max(score, 0)
grade = (score, f"<p>{feedback}<p>")
==






