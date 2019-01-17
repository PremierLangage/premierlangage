

# Deuxième partie 

Votre grader doit évaluer le travail de l'élève.

Mais en général quand l'on écrit un grader ce n'est pas pour écrire un seul exercice mais fournir une famille d'exercice.

## Un premier exemple pour python pltest 

Ce type d'exercice est celui défini par le patron /template/pltest.pl (pour le moment dans le projet 
http://github.com/nimdanor/python-pl-bank/)

L'idée de ce grader est de permettre d'ecrire des exercices de python ou l'on fournis  des tests à la norme [doctest](https://docs.python.org/3/library/doctest.html) par exemple l'exercice pl suivant 

```python
extends=/template/pltest.pl
title= démo
author= DR
tag=function
text==
Ecrire une fonction f qui retourne 3457
==
pltest==
>>> f() # j'appel f() et je doit optenir 3457
3457
>>> f() == 3457 # f() == 3457 je veux m'assurer que c'est pas un affichage
True
==
```


Voici le template :

```python

@ evaluator.py [grader.py]
# du code plus spécifique pour faire les tests pltests:
@ pltest_doc.py
@ feedback2.py
@ template.html
@ /utils/sandboxio.py
builder=@ /template/donobuild.py # devrai disparaitre dans une version ultérieur
form=@ /python/form/editorform.html

```

Regardons chacun des fichiers un part un :

evaluator.py
```python
#!/usr/bin/env python3
# coding: utf-8
import sys, jsonpickle
from sandboxio import output, get_context, get_answers


missing_evaluator_stderr = """\
The key 'evaluator' was not found in the context.
When using this grader, the PL must declare a script inside a key 'evaluator'. This script have
access to every variable declared in the PL and its 'before' script.
It should declare a variable 'grade' which should contain a tuple (int, feedback) where int is the grade between [0, 100]."""
missing_grade_stderr = """\
'evaluator' did not declare the variable 'grade'. 
The script have access to every variable declared in the PL and its 'before' script.
It should declare a variable 'grade' which should contain a tuple (int, feedback) where int is the grade between [0, 100]."""
if __name__ == "__main__":
    if len(sys.argv) < 5:
        msg = ("Sandbox did not call grader properly:\n"
               + "Usage: python3 grader.py [input_json] [output_json] [answer_file] [feedback_file]")
        print(msg, file=sys.stderr)
        sys.exit(1)
    dic = get_context()
    # partie spécifique à notre grader 
    if "pltest" not in dic :
        print("No pltest defined needed for this template ", file=sys.stderr)
        sys.exit(1)
    
    from pltest_doc import PlRunner
    # le PlRunner est une classe qui fait l'évaluation de l'exercice voir le fichier suivant 
    student = get_answers()['answer']
    pltest = dic['pltest']
    tester = PlRunner(student,pltest)
    a, b = tester.runpltest(1)
    # fin de la partie spécifique 
    output(a,b)
```

Regardons maintenant le fichier pldoc_test.py qui contient la classe PlRunner:
Sans rentrer dans les détails elle est capable de parser un script de test et de la tester contre le code.
[La classe PlRunner](https://github.com/nimdanor/python-pl-bank/blob/master/template/pltest_doc.py)
Votre premier grader sera peut-être plus simple donc avancons sur les autres éléments.

Votre code d'évaluation devra utiliser la classe feedback qui a une api réduite :
 addtestSuccess/addtestFailure/addTestsError qui ajoute des résultats de tests,
 et la méthode getOuput qui récupère la sortie html du feedback.
 
 L'idée est que l'on peut définir le format de sortie (pour pc, ou telephone par exemple) en fonction d'un patron html (plus exactement un template jinja2), que l'on peut spécifier dans l'exercice ou le template. 
 Eventuellement vous devrez fournir plusieurs template que la plateforme peut choisir pour avoir un comportement plus responsive.
 Dans notre cas nous n'avons fournis qu'un fichier le template.html qui est 'en théorie' valable pour toutes les plateformes physiques utilisés par les élèves.
 
 
 # Ecrivons notre partie spécifique du grader 
 
 
 
 
 
 
 
 




