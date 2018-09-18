# Évaluation

L'évaluation d'un exercice est fait à l'aide d'un script. Ce script à accès à l'ensemble
des variables de l'exercice: celles déclarées dans le PL et celles créés par le script
de construction.

Pour cela, il est possible de déclarer un script python dans une clé **grader**
ou dans un fichier **grader.py**:

```python
grader==
import sys

if __name__ == "__main__":
    [ some code ]
    sys.exit(0)
==
```

ou

```
@ chemin/vers/mon_grader.py [grader.py]
```


Ce script sera appellé avec X argument:
