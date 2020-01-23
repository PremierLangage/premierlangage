@ /utils/sandboxio.py
@ /grader/evaluator.py [grader.py]
@ /builder/before.py [builder.py]

radio =: RadioGroup
horizontal % false 
feedback_correct =  
feedback_wrong =  
general_feedback=

title = PLEASE OVERRIDE THE TITLE OF THE EXERCISE
text  = PLEASE OVERRIDE THE TEXT OF THE EXERCISE
form  = {{ radio|component}}

before== #|python|
if answer != 'T' and answer != 'F':
    raise Exception('you must define a variable "answer = T or F"')

radio.horizontal = horizontal
radio.items = [
    { "id": "choice1", "content": "<i class='fas fa-check'></i>" },
    { "id": "choice2", "content": "<i class='fas fa-times'></i>" }
]
==


evaluator== #|python|
score = 0
feedback = feedback_wrong
radio.items[0]['css'] = ''
radio.items[1]['css'] = ''
if answer == 'T':
    if radio.selection == 'choice1':
        score = 100
        radio.items[0]['css'] = 'success-border'
    else:
        radio.items[1]['css'] = 'error-border'
else:
    if radio.selection == 'choice2':
        score = 100
        radio.items[1]['css'] = 'success-border'
    else:
        radio.items[0]['css'] = 'error-border'

if score == 100:
    if feedback_correct:
        feedback = feedback_correct + "<br/>"
elif feedback_wrong:
    feedback = feedback_wrong + "<br/>"

feedback += general_feedback
grade = (score, f"<p>{feedback}</p>")
==


