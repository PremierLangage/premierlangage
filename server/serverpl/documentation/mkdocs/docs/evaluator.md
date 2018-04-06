# Écriture d'une Fonction d'Évaluation

La clé **evaluator** contient le script qui sera appelée avec la réponse de l'élève afin de le corriger.

Ce script étant déclarer en **python 3**, il est nécessaire d'avoir des connaissances en python.


Le script **evalutor** permet d'évaluer la réponse d'un utilisateur à l'exercice.
Pour cela est défini un dictionnaire  **response** contenant tout les éléments de réponse de l'élève. 

Toutes les clefs de l'exercice (y compris les celles créer par **build**) sont acessibles comme des variables locales dans l'evaluator. 


## Les Bases

Pour fournir l'évaluation à la plateforme 
Le script doit définir un itérable (tuple, list...) appelé ***grade***.
Cet itérable doit contenir deux élement:

* fraction : L'élève à réussi (1 à 100) ou échoué (0) l'exercice. Affiche d'une information, abandon, problèmes, etc (négatif).
* feedback : String contenant le feedback de l'évaluation qui sera affiché à l'élève (ou l'information pour négatif).

Ce script doit être déclaré dans le PL grâce à la clé **evaluator**, dans l'exemple suivant l'exercice demande une réponse simple
la réponse de l'élève est stocker dans response['answer'] (voire l'input dans la balise form voir [formulaire](./formulaire/),
la bonne réponse à été placéé directement dans l'énoncé du pl ou placée par *build* :
```python
evaluator==
if response['answer'] == answer:
    grade = (True, "Bonne réponse")
else:
    grade = (False, "Mauvaise réponse)
==
```

<i class="fas fa-exclamation-triangle"></i> **Attention :** Il est important de faire attention au nom donné aux variables, celles-ci pouvant écraser les clés du PL, il est donc possible d'écraser des clés importantes (telle que *form*) par mégarde.

## Modules et Fonctions Secondaires
N'importe quel module peut être importé dans le script, de même, plusieurs fonctions annexes peuvent être déclarées et être appelée par celui-ci. Par exemple, avec un PL déclarant un **n** aléatoire et l'élève devant donner la racine carré de ce **n**:
```python
evaluator==
import math

def is_sqrt(i, j):
    return math.pow(i,2) == j

try:
    if is_sqrt(int(reponse['square']), n):
        grade = (True, "Bonne réponse")
    else
        grade = (False, "Mauvaise Réponse")
except:
    grade = (None, "Merci de rentrer un entier")
==
```

Il est important de noter que les fonctions et les modules sont aussi des variables en python, il faut donc encore une fois faire attention au nom utilisé.


## Exercice de Programmation

Pour les exercice de programmation, il ne faut pour l'instant fournir aucun evaluator, le plateforme effectuera la correction d'elle même.
