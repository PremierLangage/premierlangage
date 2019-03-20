# Écriture des responses

La clé responses qui doit figurer dans le template du nouvel exercice que vous souhaitez créer, sa valeur est une fonction écrite en python et nommée create_responses. Notez qu'il est possible de l'écrire directement dans le pl mais que créer un template est recommandé afin de pouvoir mettre votre type d'exercice à disposition des autres professeurs.
La fonction *create_responses()* est la fonction qui permet de fournir un couple de dictionnaire représentant la bonne réponse ainsi qu'une mauvaise réponse pour pouvoir vérifier le fonctionnement de l'evaluator.

La fonction étant déclarer en **python 3**, il est nécessaire d'avoir des connaissances en python.

La fonction *create_responses()*, reçoit le dictionnaire de l'exercice après un passage par la fonction [*build()*](./build.html).

## Les Bases
La fonction *create_responses()* doit être écrite en **python 3** et respecter un prototype précis:
```python
def create_responses(dic):
    [...]
    return good_rep, wrong_rep
```

Où *dic* est le dictionnaire de l'exercice qui contient donc l'ensemble des variables déclaré dans le fichier PL associé. Il est important de noter qu'il est possible d'écraser les clés du dictionnaire (celles déclarée dans le PL), il est donc important de faire attention lorsqu'on déclare une nouvelle clés, il ne faut surtout pas écraser les clés importantes telles que:
* evaluator
* form
* title
* text
* seed

Elle doit être déclaré dans le PL avec la clé **responses**:
```python
responses==
def create_responses(dic):
    [...]
    return good_rep, wrong_rep
==
```

good_answer est un dictionnaire python qui contient une clé 'answer' qui correspond à la clé 'answer' du dictionnaire généré par build(), 

wrong_answer est un dictionnaire python qui contient une clé 'answer' à pour valeur une mauvaise réponse correspondante au type d'exercice que vous souhaitez écrire.


Cette fonction a pour but de tester le fonctionnement de votre exercice avant de pouvoir valider sa conformité et le mettre en ligne sur github.

## Exemples
Voici divers exemples de fonction *create_responses()*:

#### QCM
```python
responses==
def create_responses(dic):
    good_rep = dict()
    wrong_rep = dict()
    good_rep['answer'] = dic['answer']
    wrong_rep['answer'] = []
    return good_rep, wrong_rep
==
```
Pour ce type d'exercice qui propose au moins une réponse valable, une liste vide sera toujours une mauvaise réponse.

#### Match
```python
responses==
def create_responses(dic):
    good_rep = dict()
    wrong_rep = dict()
    good_rep = dic['answer']
    wrong_rep = {}
    return good_rep, wrong_rep
==
```
Un dictionnaire vide signifie que l'exercice proposerai de ne matcher rien avec rien, ce qui n'est pas possible, donc dcitionnaire vide serait une mauvaise réponse dans tous les cas de figure.
