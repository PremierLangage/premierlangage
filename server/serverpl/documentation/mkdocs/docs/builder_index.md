# Index des Builders

Ici se trouve la liste de l'ensemble des builders de la librairie PL. Pour chacun, un exemple
est présent ainsi qu'une liste de mots-clés afin de plus facilement le retrouver.

Pour apprendre à créer un builder, voir [Construction](../construction/)
___



## Before

* [Documentation du builder](../before/)

* mots-clés : `before, programmation, python3, script, programming`

Exemple:
```
@ /builder/before.py [builder.py]

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
Combien <i>font</i> ***{{ op1 }} + {{ op2 }}*** ?
==

form =  <input id="form_answer" type="number" value="{{ answers__.answer }}" required/>
```
___



## Build

* [Documentation du builder](../build/)

* mots-clés : `build, programmation, python3, script, fonction, function, programming`

Exemple:
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