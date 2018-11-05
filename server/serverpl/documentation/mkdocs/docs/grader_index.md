# Index des Graders

Ici se trouve la liste de l'ensemble des graders de la librairie PL. Pour chacun, un example
est présent ainsi qu'une liste de mots-clés afin de plus facilement le retrouver.

Pour apprendre à créer un builder, voir [Évaluation](../evaluation/)
___



## Evaluator

* [Documentation du grader](../evaluator/)

* mots-clés : `evaluator, programmation, python3, script, programming`

Example:
```
@ /utils/sandboxio.py
@ /grader/evaluator.py [grader.py]

form==
<input id="form_answer" type="number" value="{{ answers__.answer }}" required/>
==

op1 = 32
op2 = 26

evaluator==
import traceback
import sys

try: 
    if int(response['answer']) == int(op1) + int(op2):
        grade = (100, "Bonne réponse")
    else:
        grade = (0, "Mauvaise réponse")
except:
    print(traceback.format_exc(), file=sys.stderr)
    grade = (-1, "Merci de rentrer un entier")
==

```
___



## Evalfunc

* [Documentation du grader](../evalfunc/)

* mots-clés : `evalfunc, programmation, python3, script, fonction, function, programming`

Example:
```
@ /utils/sandboxio.py
@ /grader/evaluator.py [grader.py]

form==
<input id="form_answer" type="number" value="{{ answers__.answer }}" required/>
==

op1 = 32
op2 = 26

evalfunc==
import traceback
import sys

def evalfunc(dic, answers):
    try: 
        if int(answers['answer']) == dic['op1'] + dic['op2']:
            return (100, "Bonne réponse")
        return (0, "Mauvaise réponse")
    except:
        print(traceback.format_exc(), file=sys.stderr)
        return(-1, "Merci de rentrer un entier")
==
```