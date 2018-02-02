# La clé consistency

La valeur de la clé consistency est une fonction python qui permet de vérifier la cohérence entre les questions/propositions et les réponses d'un exercice.

La fonction étant déclarer en **python 3**, il est nécessaire d'avoir des connaissances en python.

Il s'agit d'une fonction que l'on nomme *check_consistency* et qui prend en paramètre le dictionnaire de l'exercice après le passage par la fonction [*build()*](./build.html).

## Les Bases
La fonction *check_consistency()* doit être écrit en **python 3** et respecter un prototype précis:
```python
def check_consistency(dic):
    [...]
    return [True/False], error_message
```

Le type de retour est donc un tuple composé d'un booléen ( True si la cohérence est vérifiée, False sinon ) ainsi que le message d'erreur associé à l'éventuel problème de cohérence. Si la cohérence est vérifiée, le message ne sera pas affiché et il est donc d'usage de ne renvoyer qu'une chaîne vide.

## Modules et Fonctions Secondaires
N'importe quel module, (excepté *os* et *sys*) peut être importé avant la déclaration de build, de même, plusieurs fonctions annexes peuvenr être déclarées avant la fonction *check_consistency()* et être appelée par celle-ci. (voir exemples plus bas)

## Exemples
Ci dessous plusieurs exemples sur des modèles d'exercice existants

#### Phrase à un trou
```python
consistency==
def check_consistency(dic):
    n = 1
    list = [int(x[-1]) for x in dic.keys() if 'answer' in x]
    list.sort()
    while n < len(list):
        if list[n] != list[n-1] + 1:
            return False, "You must give consecutive numbers to your answers"
        n +=1
    
    n = 1
    list = [int(x[-1]) for x in dic.keys() if 'text' in x]
    list.sort()
    while n < len(list):
        if list[n] != list[n-1] + 1:
            return False, "You must give consecutive numbers to your text pieces"
        n +=1
        
    return True, ""
==
```

On vérifie ici que la numérotation des parties de la phrase ainsi que des réponses possibles est bien une numérotation consécutive. (text 1, text2 et non pas text1 et text3)

#### QCM
```python
consistency==

def check_aux(dic, txt):
    n = 1
    list = [int(x[-1]) for x in dic.keys() if x[:-1] == txt]
    list.sort()
    while n < len(list):
        if list[n] != list[n-1] + 1:
            return False, "You must give consecutive numbers to your "+txt+'s'
        n +=1


def check_consistency(dic):
    check_aux(dic, 'answer')
    check_aux(dic, 'right_answer')
    for x in dic['answer'] :
        if x not in dic['question']:
            False, "right_answer must be a possible answer"
    return True, ""

==
```

Ici on vérifie également la numérotation des réponses, mais aussi l'appartenance des bonnes réponses à l'ensemble des réponses proposées. En effet ce modèle d'exercice nous oblige à proposer au moins une bonne réponse parmi les choix qui s'affichent, il serait incohérent d'avoir un couple clé valeur de la sorte right_answer1=réponse_qui_ne figure_pas_dans_les_choix. 






