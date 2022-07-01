@ /utils/sandboxio.py
@ /grader/evaluator.py [grader.py]
@ /builder/before.py [builder.py]

inputbox =: Input
inputbox.type = text



general_feedback = Merci pour votre réponse

title = PLEASE OVERRIDE THE TITLE OF THE EXERCISE
text  = PLEASE OVERRIDE THE TEXT OF THE EXERCISE
form  = {{ inputbox|component }}

before= 

evaluator==
# la réponse de l'élève est dans la variable inputbox.value 
grade = (100, general_feedback)
==

