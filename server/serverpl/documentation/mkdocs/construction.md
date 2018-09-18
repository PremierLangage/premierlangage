# Construction

Afin de déclarer des exercices se servant d'aléatoire, où de faciliter la création
d'exercices réutilisables, il peut être nécessaires de passer par un script.

Pour cela, il est possible de déclarer un script python dans une clé **builder**
ou dans un fichier **builder.py**:

```python
builder==
import sys

if __name__ == "__main__":
    [ some code ]
    sys.exit(0)
==
```

ou

```
@ chemin/vers/mon_builder.py [builder.py]
```


Ce script sera appellé avec X argument:
