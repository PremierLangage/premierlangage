TODO: accents

# Écriture d'un Build / before


Dans certains cas nous souhaitons pouvoir modifer l'exercice avant qu'il soit presente a l'eleve pour tout un tas de raisons mais la plus simple etant d'apporter un element aleatoire a l'exercice. C'est le role du script **before** qui est appele juste avant l'affichage de l'exercice.

	Toute la structure de l'exercice peut ^etre ainsi modifiee. Attention a ne pas tout faire dans un exercice, pour les notes et l'activite des eleves sur la plateforme d'autres outils existent il ne faut pas les reecrire dasn le code d'un exercice. Un exercice est une question, une reponse (interaction), et un resultat (note, feedback).



Dans l'exercice pl si l'on souhaite utiliser un build, il faut:
- soit déclarer dans une balise **build**  une fonction **build** 
- soit déclarer un script dans la balise *before*.

Ce script doit être écrit en **python 3**, il est nécessaire d'avoir des connaissances en python, proportionelles à vos objectifs.

L'intéret du script **before** ou de la fonction **build** est de pouvoir modifier l'exercice avant qu'il soit présenté à l'élève.

En particulier le script *before* permet d'ajouter de l'aléatoire dans les valeurs numérique ou dans l'énoncé, enfin il permet de déclarer des variables accessibles dans le [formulaire](./formulaire/) et l'[évaluateur](./evaluator/).

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
title = "Nouveau titre"
==
```

La clé *title* du PL vaut maintenant *Nouveau titre*.

<i class="fas fa-exclamation-triangle"></i> **Attention :** Il est important de faire attention au nom donné aux variables, celles-ci pouvant écraser les clés du PL, il est donc possible d'écraser des clés importantes (telle que *form*) par mégarde.


## Modules et Fonctions Secondaires
N'importe quel module installé peut être importé avant la déclaration de before, de même, plusieurs fonctions annexes peuvent être déclarées dans le script *build* et être appelée par celui-ci:

	Instalation de modules suplémentaire.
	Le fichier server/serverpl/additionalrequirements.txt contient les modules suplémentaires spécifiques à votre instalation. 

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
 


