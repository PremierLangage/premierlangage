# Écriture d'un Build

Le script *before* permet de rajouter à l'exercice des variables ne pouvant être ajoutées par la syntaxe PL : des listes, nombres aléatoires, objet python, etc...

Ce script étant déclarer en **python 3**, il est nécessaire d'avoir des connaissances en python.

Chacune des variables déclarées dans le script sera alors disponible dans le [formulaire](./formulaire/) et l'[évaluateur](./evaluator/).

## Les Bases

Ce script doit être déclaré dans le PL grâce à la clé **before**, il suffit de déclarer une variable pour que celle-ci soit disponible dans le [formulaire](./formulaire/) et l'[évaluateur](./evaluator/).
Par exemple:
```python
before==
import random

a = random.random()
==
```

La variable **a** est maintenant disponible dans le formulaire et l'evaluator.

Il est aussi possible d'écraser des clés du PL dans le before:
```python
before==
titre = "Nouveau titre"
==
```

La clé *titre* du PL vaut maintenant *Nouveau titre*.

<i class="fas fa-exclamation-triangle"></i> **Attention :** Il est important de faire attention au nom donné aux variables, celles-ci pouvant écraser les clés du PL, il est donc possible d'écraser des clés importantes (telle que *form*) par mégarde.



## Modules et Fonctions Secondaires
N'importe quel module peut être importé avant la déclaration de before, de même, plusieurs fonctions annexes peuvent être déclarées dans le script *build* et être appelée par celui-ci:

```python
import time

def time_minute():
    return time.time()/60

minute = time_minute()
```

Il est important de noter que les fonctions et les modules sont aussi des variables en python, il faut donc encore une fois faire attention au nom utilisé.

## Variables Aléatoires
Lors de la première ouverture d'un exercice par un élève, une *seed* (actuellement *time.time()*, qui est le nombre de seconde écoulée depuis 01/01/1970) est automatiquement généré par la plateforme. Cette *seed* est accessible n'importe où dans l'exercice grâce à la variable **seed** et doit donc être utilisée pour initialiser le module *random* afin que l'exercice reste identique une fois généré pour un élève.

Si vous souhaiter que la *seed* soit régénérée à chaque fois que l'on charge l'exercice ajouter la balise *oneshot=True* dans votre pl. 

Pour initialiser le module random avec la *seed*, il suffit d'ajouter au début du script *before*:
```python
import random
random.seed(seed)

[...]
```
 
