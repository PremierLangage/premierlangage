# Build

## Résumé

* **Inclusion:** `@ /grader/evalfunc.py [builder.py]`


* **Dépendance:**
    * `@ /utils/sandboxio.py`


* **Clés utilisées**: `grader/grader.py, evalfunc`
___



## Utilisation
Ce grader permet de déclarer un script Python 3 dans la clé `evalfunc`.
Ce script doit déclarer une fonction qui doit retourner un tuple (note, feedback): 
`(100, "Bonne réponse")`. La note doit être incluse dans [-1, 100].

Le fonction evalfunc à pour prototype `def evalfunc(dic, response)` où dic est un dictionnaire
contenant l'ensemble des variables de l'exercice et response l'ensemble des réponses de l'élève.
Par exemple, en supposant que le PL utilise un champ `form_answer`, la fonction evalfunc aura accès a la variable `response['answer']`.


* Avantages :
    * Possibilité d'utilisé les modules built-in ainsi que d'importer tout fichier
      ajouté à l'exercice grâce à la syntaxe `@ monscript.py`
    * Permet de déclarer des clés de type : 
      `int, float, string, list, dict and NoneType`. Tout autre type encodera
      `type.__dict__`.
* Inconvénients :
    * Nécessite l'écriture d'une fonction et d'accèder à un dictionnaire
      pour chaque modification de variable, ce qui peut devenir vite redondant.
___



## Débugage
Il est possible de *print* dans *sys.stderr* à des fins de débugage. Ces prints
ne seront affiché qu'en cas d'erreur, et seulement aux professeurs:
```python
import sys

def build(dic, response):
    print("debug", file=sys.stderr)
```
___



## Exemple
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








