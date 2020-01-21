#! linter:require: answer::bool \n

@ /utils/sandboxio.py 
@ /builder/before.py [builder.py] 
@ /grader/evaluator.py [grader.py] 


textTrue = yes 
textFalse = no 
horizontal % false 
feedbackCorrect % null 
feedbackWrong % null 

before==
radiobox = RadioGroup(
    horizontal=horizontal,
    items = [
        { "id": 'choice1', "content": textTrue },
        { "id": 'choice2', "content": textFalse },
    ]
)
==

title==
==
text==
==
feedbackGeneral==
==

form==
{{ radiobox|component }}
==

evaluator==
score = 0
radiobox.items[0]['css'] = ''
radiobox.items[1]['css'] = ''
feedback = ''
if answer:
    if radiobox.selection == 'choice1':
        score = 100
        radiobox.items[0]['css'] = 'success-state anim-fade'
       
    else:
        radiobox.items[1]['css'] = 'error-state anim-fade'
        
else:
    if radiobox.selection == 'choice2':
        radiobox.items[1]['css'] = 'success-state anim-fade'
        score = 100
        
    else:
        radiobox.items[0]['css'] = 'error-state anim-fade'
    
feedback += feedbackWrong + feedbackCorrect
feedback +=  "<br>" + feedbackGeneral
grade = (score, feedback)

==











