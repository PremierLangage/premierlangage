# Évaluation

L'évaluation d'un exercice est fait à l'aide d'un script. Ce script à accès à l'ensemble
des variables de l'exercice: celles déclarées dans le PL et celles créés par le script
de construction.

Pour cela, il est possible de déclarer un script python dans une clé **grader**
ou dans un fichier **grader.py**:

```python
grader==
import sys

if __name__ == "__main__":
    [ some code ]
    sys.exit(0)
==
```

ou

```
@ chemin/vers/mon_grader.py [grader.py]
```
___


## Entrées
Ce script est appelé avec 4 arguments dans cet ordre:

* `CONTEXT_FILE` : Chemin vers le json contenant le (potentiellement construit)
                 context de l'exercice.
* `ANSWERS_FILE` : Chemin vers le json contenant les réponses de l'élèves.
* `MODIFIED_CONTEXT_FILE` : Chemin vers le json dans lequel écrire le nouveau context.
* `FEEDBACK_FILE` : Chemin vers le fichier dans lequel écrire le feedback visible par l'élève
                    (format HTML ou markdown).

Pour récuperer le context ou les réponses, il est donc possible de faire:
```python
import json
with open(sys.argv[1]) as f: # sys.argv[2] pour les réponses
    context = json.load(f)
```
___


## Sortie

Plusieurs données peuvent être renvoyé par le grader:

#### La note de l'élève

Entre [-1, 100], sur la sortie standard: `print(100)`

-1 peut être utilisé en cas d'erreur afin de ne pas pénaliser l'élève pour une
erreur de saisie par exemple.

#### Un feedback
Doit doit être écrit dans `FEEDBACK_FILE`. Si celui-ci est vide,
la note de l'élève sera renvoyée:
```python
with open(sys.argv[4], 'w+') as f:
    print(feedback, file=f)
```

Le feedback passera par un traitement **markdown** puis par un traitement
**HTML**. Il est recommandé de ne pas faire de tabulation car celles-ci
pourraient être interprété par le **markdown** comme du code (à moins que ce soit
l'effet désiré).


#### Un context modifié (optionnel)
Doit être écrit dans `MODIFIED_CONTEXT_FILE`:
```python
import json
with open(sys.argv[3], 'w+') as f:
    json.dump(context, f)
```

Le grader peut en effet modifier les clés de l'exercice (y compris `form` et `text`).

Ce context  ne sert que pour l'affichage et n'est pas donc pas sauvegardé. Il ne peut
donc pas être utilisé pour de futures appelles au *grader*.


#### La sortie d'erreur:

Afin de débuguer votre grader, il est possible de print sur la sortie d'erreur:
```python
import sys
print(debug_msg, file=sys.stderr)
```

Dans certain cas (en cas de *timeout* par exemple), stderr peut ne pas être reçu. Dans ce cas, utilisé:
`sys.stderr.flush()` après vos prints.

La sortie d'erreur est redirigée vers un fichier STDERR_FILE (actuellement `stderr.log`) et sera ajoutée
à la fin du feedback (seulement visible par les enseignants).


#### Code de retour
Lorsqu'une évaluation c'est bien déroulée, le code de retour de l'execution du grader
doit être **0** (peut importe la note de l'élève), mais doit être un nombre strictement positif en cas
d'erreur (`sys.exit(1)` par exemple).

En cas d'erreur, le code de retour ainsi que l'ID de l'environnement d'exécution vous seront
donnés.   
Si le code de retour est positif, il s'agira du code de retour de votre grader,
et stderr vous sera affiché.
Si il est négatif, il s'agit d'un code interne à la sandbox (à communiquer à l'administrateur
en cas de besoin), et un message d'erreur de la sandbox vous sera donné en plus de *stderr*.

***Le context modifié ne sera pas utilisé si le code de retour est différent de 0.***