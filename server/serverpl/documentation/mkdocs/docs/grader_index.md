# Index des Graders

Ici se trouve la liste des graders prédéfinis de la librairie PL. Pour chacun, un exemple
est présent ainsi qu'une liste de mots-clés afin de plus facilement le retrouver.

Pour apprendre à créer un grader, voir [Évaluation](../evaluation/)
___



## Evaluator

* [Documentation du grader](../evaluator/)

* mots-clés : `evaluator, programmation, python3, script, programming`

Exemple:
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

Exemple:
```
@ /utils/sandboxio.py
@ /grader/evalfunc.py [grader.py]

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
___



## Java

* [Documentation du grader](../grader_java/)

* mots-clés : `programmation, java, junit, stdout, programming`


Exemple:
```java
title = Stdout Tests

text ==
Write a main printing on stdout:

* `Hello` if not argument was provided.
* `Hello [arg1]` if one argument was provided.
* `Hello [arg1] and [arg2] ... and [argn]` if n argument was provided.
==

classname = HelloWorld

stdout_tests==
"No argument" Hello
James "Hello James" James
"2 arguments" "Hello Jhon and James" Jhon James
!"One argument with space" "Hello Jhon Doe" "Jhon Doe"
==

editor.language = java
editor.id = answer

form =@ /form/text_editor.html
@ /grader/java.py [grader.py]
@ /builder/none.py [builder.py]
@ /utils/sandboxio.py
```
___
