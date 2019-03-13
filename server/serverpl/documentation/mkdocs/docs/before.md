# Before

## Résumé

* **Inclusion:** `@ /builder/before.py [builder.py]`

* **Clés utilisées**: `builder / builder.py, before, StopBeforeExec`

* **Utilisé par les templates:**
    * [Java](../template_java/)

___



## Utilisation
Ce builder permet de déclarer un script Python 3 dans la clé `before`.
Ce script peut modifier, créer ou supprimer des clés du context de
l'exercice.

Toutes variables déclarés dans ce script existera donc dans le contexte de l'exercice,
celle-ci pourront donc être utilisé dans `form` et `text` grâce à
`{% templatetag openvariable %} var {% templatetag closevariable %}`, ainsi
que dans le **grader**.

L'exécution se déroulant en dehors d'une fonction, il n'est pas possible d'utiliser
`return` ou `yield` pour arrêter le script. Une Exception spécifique à donc été mis
en place pour ceci: `raise StopBeforeExec`.

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

***Attention:*** Le script doit être indenté à l'aide de 4 espaces ou de tabulations. Pas de d'indentation de 1 2 ou 3 espaces.

___



## Aléatoire
Pour utiliser l'aléatoire, le module random doit tout d'abord être initialisé avec
la seed du context de l'exercice:
```python
import random
random.seed(seed)
d6=random.randint(1,6)
```
Si Sympy est utilisé, il faut instancier un générateur pour l'exercice car le générateur par défaut de Random est manipulé par sympy :
```python
import random
rd = random.Random()
rd.seed(seed)
d6=rd.randint(1,6)
d12=rd.randint(1,12)
```


## Débugage
Il est possible de *print* dans *sys.stderr* à des fins de débugage (les autres syntaxes pour écrire sur la sortie erreur standard sont acceptables. Cet textes ne seront affichés qu'en cas d'erreur, et seulement aux professeurs:
```python
import sys
print("debug", file=sys.stderr)
```
___



## Exemple

un exercice de calcul ou il faut calculer la somme de deux nombres entre 1 et 1000 tirés aléatoirements. 

```
@ /builder/before.py [builder.py]
title= Une somme aléatoire
before==
import random
random.seed(seed)
op1 = random.randint(1, 1000)
op2 = random.randint(1, 1000)

if op1 % 10 and op2 % 10: # Stop si aucun opérateur n'est multiple de 10
    raise StopBeforeExec
while(not (op1 % 10 and op2 % 10)):
    op1 = random.randint(1, 1000)
    op2 = random.randint(1, 1000)
==

text==
Combien <i>font</i> ***{% templatetag openvariable %} op1 {% templatetag closevariable %} + {% templatetag openvariable %} op2 {% templatetag closevariable %}*** ? 
==

form =  <input id="form_answer" type="number" value="{% templatetag openvariable %} answers__.answer {% templatetag closevariable %}" required/>

# pour l'évaluation de cet exercice voir evaluator.

```

Affichera :
![text_editor_example]({% static 'documentation/img/before_build_example.png' %})

