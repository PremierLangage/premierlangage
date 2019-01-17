# Before

## Résumé

* **Inclusion:** `@ /grader/evaluator.py [grader.py]`

* **Dépendance:**
    * `@ /utils/sandboxio.py`


* **Clés utilisées**: `evaluator/evaluator.py, evaluator, response, StopBeforeExec`
___



## Utilisation
Ce grader permet de déclarer un script Python 3 dans la clé `evaluator`
chargé de corriger la réponse de l'élève.
 
Ce script à accès directement à l'ensemble des
variables déclarées dans le PL ainsi que dans le builder il a de plus accès à
l'ensemble des réponses de l'élève dans le dictionnaire `response`.
Par exemple, en supposant que le PL utilise un champ `form_answer`, le script
evaluator aura accès a la variable `response['answer']`.

Ce évalue la réponse en déclarant un tuple (note, feedback) dans la variable
**grade**: `grade = (100, "Bonne réponse")`. La note doit être incluse dans [-1, 100].

L'exécution se déroulant en dehors d'une fonction, il n'est pas possible d'utiliser
`return` ou `yield` pour arrêter le script. Une Exception spécifique à donc été mis
en place pour ceci: `raise StopEvaluatorExec`.

De plus, ce script peut modifier temporairement les variables du contexte de l'exercice
(form, text...), pour cela, il suffit de modifié les variables du même nom dans
le script. Ces modifications ne seront utilisé que pour l'affichage du feedback mais ne
sont pas enregistré dans la session de l'elève.

* Avantages :
    * Simple et rapide d'utilisation, `globals()` étant le contexte de l'exercice.
    * Possibilité d'utilisé les modules built-in ainsi que d'importer tout fichier
      ajouté à l'exercice grâce à la syntaxe `@ monscript.py`
    * Permet de déclarer des clés de type : 
      `int, float, string, list, dict and NoneType`. Tout autre type encodera
      `type.__dict__`.
* Inconvénients :
    * Le contexte de l'exercice étant `globals()`, il est possible d'écraser par
      erreur des clés. Il est important de noter que les fonctions, classes et modules
      sont aussi dans `globals()`, il faut donc encore une fois faire attention aux 
      noms utilisés. Il est pour cette raison recommandé de ne pas importer `*`
      (`from x import *`).

***Attention:*** Le script doit être indenté à l'aide de 4 espaces ou de tabulations.
___



## Débugage
Il est possible de *print* dans *sys.stderr* à des fins de débugage. Ces prints
ne seront affiché qu'aux professeurs:
```python
import sys
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










