# Écriture d'un Build

La fonction *build()* permet de rajouter au dictionnaire de l'exercice des variables ne pouvant être ajouté par la syntaxe PL : des listes, nombres aléatoires, objet python, etc...

La fonction étant déclarer en **python 3**, il est nécessaire d'avoir des connaissances en python (connaitre les dictionnaires est suffisants pour des *build* simple).

Chacune des variables déclaré dans la fonction *build()* sera alors disponible dans le [formulaire](./formulaire.html) et l'[évaluateur](./evaluator.html).

## Les Bases
La fonction *build()* doit être écrit en **python 3** et respecter un prototype précis:
```python
def build(dic):
    [...]
    return dic
```

Où *dic* est le dictionnaire de l'exercice qui contient donc l'ensemble des variables déclaré dans le fichier PL associé. Il est important de noter qu'il est possible d'écraser les clés du dictionnaire (celles déclarée dans le PL), il est donc important de faire attention lorsqu'on déclare une nouvelle clés, il ne faut surtout pas écraser les clés importantes telles que:
* evaluator
* form
* title
* text
* seed

Elle doit être déclaré dans le PL avec la clé **build**:
```python
build==
def build(dic):
    [...]
    return dic
==
```

Enfin, cette fonction étant appelée avant chaque affichage et chaque évaluation, il est important qu'elle reste relativement rapide

## Modules et Fonctions Secondaires
N'importe quel module, (excepté *os* et *sys*) peut être importé avant la déclaration de build, de même, plusieurs fonctions annexes peuvent être déclarées avant la fonction *build()* et être appelée par celle-ci:
```python
build==
import time

def time_minute():
    return time.time()/60

def build(dic):
    dic['minute'] = time_minute()
    return dic
==
```
## Variables Aléatoires
À chaque exercice associé une *seed* (nombre de seconde depuis 01/01/1970), cette *seed* doit donc être utilisée pour initialisé le module *random* afin de que l'exercice reste identique une fois généré pour un élève. Cette *seed* est créée lors de la première ouverture d'un exercice par un élève. Elle est contenu dans le dictionnaire de l'exercice à la clé 'seed'.
Pour initialisé le module random avec cette *seed*, il suffit d'ajouter au début de la fonction *build()*:
```python
import random

def build(dic):
    random.seed(dic['seed'])
    return dic
```

## Exemples
Voici divers exemples de fonction *build()*:

#### QCM
Afin de pouvoir écrire un formulaire qui s'adapte au nombre de réponse, il est nécessaire de les mettres au préalable dans une liste, de même, pour évaluer un nombre variable de réponse il est aussi nécessaire de les mettre dans une liste, ce que permet de faire ce build:
```python
build==
def build(dic):
    d= dict(dic)
    n=1
    question=list()
    answer=list()
    while ('answer'+str(n) in dic):
        question.append(dic['answer'+str(n)])
        if 'right_answer'+str(n) in dic:
            answer.append(dic['right_answer'+str(n)])
        n += 1
    d['question'] = question
    d['answer'] = answer
    return d
==
```
La fonction prends l'ensemble des réponse *answerX* d'un PL comme celui-ci:
```
title=La Tombe de Grant

text==
Qui sont les personnes enterrés dans la tombe de Grant?

(Indice: 2 personnes)
==

type=direct

template=/gift/template/multiplechoices_template.pl

answer1=La mère de Grant

answer2=Grant

answer3=La femme de Grant

answer4=Le père de Grant

right_answer1=Grant

right_answer2=La femme de Grant
```
et en fait une liste.

#### Match
Il est nécessaire de mettre dans des listes l'ensemble des réponses et des questions afin de créer un formulaire pour un exercice de correspondance, ce build s'en occupe:
```python
build==
def build(dic):
    n=1
    answer = dict()
    question_list = list()
    answer_list = list()
    while ('answer'+str(n) in dic):
        answer_list.append(dic['answer'+str(n)])
        question_list.append(dic['question'+str(n)])
        answer[dic['question'+str(n)]] = dic['answer'+str(n)]
        n += 1
    dic['answer'] = answer
    dic['answer_list'] = answer_list
    dic['question_list'] = question_list
    return dic
==
```
La fonction prends l'ensemble des questions et réponses d'un PL comme celui-ci:
```
title=Match

text=Which animal eats which food?

type=direct

template=/gift/template/match_template.pl

question1=cat 
question2=dog 

answer1= cat food
answer2= dog food
```
et en fait des listes.
