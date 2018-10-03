
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

  
