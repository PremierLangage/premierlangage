# Build

## Résumé


* **Inclusion:** `@ /lib/builder/build.py [builder.py]`

* **Clés utilisées**: `builder/builder.py, build`
___



## Utilisation
Ce builder permet de déclarer un script Python 3 dans la clé `build`.
Ce script doit déclarer une fonction qui peut modifier, créer ou
supprimer des clés du contexte de l'exercice.

Le fonction `build` a pour prototype `def build(dic)` où dic est un dictionnaire
contenant l'ensemble des variables de l'exercice. La fonction doit retourner un
dictionnaire, qui est le contexte modifié.


* Avantages :
    * Possibilité d'utiliser les modules built-in ainsi que d'importer tout fichier
      ajouté à l'exercice grâce à la syntaxe `@ monscript.py`
    * Permet de déclarer des clés de type : 
      `int, float, string, list, dict and NoneType`. Tout autre type encodera
      `type.__dict__`.
    * Permet d'écrire des tests pour le build en utilisant les bibliothèques
      usuelles de test unitaire de Python (en mettant aussi la fonction `build`
      dans un fichier inclu).
* Inconvénients :
    * Nécessite l'écriture d'une fonction et d'accèder à un dictionnaire
      pour chaque modification de variable, ce qui peut devenir vite redondant.
___



## Aléatoire
Pour utiliser l'aléatoire, le module random doit tout d'abord être initialisé avec
la graine (seed) du contexte de l'exercice:
```python
import random

def build(dic):
    random.seed(dic['seed'])
    [...]
```
Si Sympy est utilisé, il faut instancier Random :
```python
import random

def build(dic):
    rd = random.Random()
    rd.seed(dic['seed'])
    [...]
    
```

## Débogage
Il est possible de *print* dans *sys.stderr* à des fins de débugage. Ces prints
ne seront affiché qu'en cas d'erreur, et seulement aux professeurs:
```python
import sys

def build(dic):
    print("debug", file=sys.stderr)
```
___



## Example
```
@ /builder/build.py [builder.py]

build==
import random

def build(dic):
    random.seed(dic['seed'])
    dic['op1'] = random.randint(1, 1000)
    dic['op2'] = random.randint(1, 1000)
    
    if dic['op1'] % 10 and dic['op2'] % 10: # Stop si aucun opérateur n'est multiple de 10
        return dic
    while(not (dic['op1'] % 10 and dic['op2'] % 10)):
        dic['op1'] = random.randint(1, 1000)
        dic['op2'] =  random.randint(1, 1000)
    return dic
==

text==
Combien <i>font</i> ***{{ op1 }} + {{ op2 }}*** ?
==

form =  <input id="form_answer" type="number" value="{{ answers__.answer }}" required/>
```

Affichera :
![text_editor_example]({% static 'documentation/img/before_build_example.png' %})












