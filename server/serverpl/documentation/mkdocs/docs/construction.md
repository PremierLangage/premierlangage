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


## Entrées
Ce script est appelé avec 4 arguments dans cet ordre:

* `CONTEXT_FILE` : Chemin vers le json contenant le context de l'exercice.
* `MODIFIED_CONTEXT_FILE` : Chemin vers le json dans lequel écrire le nouveau context.

Pour récupérer le context, il est donc possible de faire:
```python
import json
with open(sys.argv[1]) as f:
    context = json.load(f)
```
___


## Sortie
#### Un context modifié
Doit être écrit dans `MODIFIED_CONTEXT_FILE`:
```python
import json
with open(sys.argv[3], 'w+') as f:
    json.dump(context, f)
```
Le *builder* peut modifier l'ensemble du context de l'exercice.

En cas d'utilisation d'aléatoire, il faut initialiser `random.seed()` avec
la clé *seed* du context.

#### La sortie d'erreur:

Afin de débuguer votre *builder*, il est possible de print sur la sortie d'erreur
lorsque le code de retour est différent de 0  (`sys.exit(1)` par exemple):
```python
import sys
print(debug_msg, file=sys.stderr)
```

Dans certain cas (en cas de *timeout* par exemple), stderr peut ne pas être reçu. Dans ce cas, utilisé:
`sys.stderr.flush()` après vos prints.

La sortie d'erreur est redirigée vers un fichier STDERR_FILE (actuellement `stderr.log`) et sera ajoutée
à la fin du du message d'erreur.

En cas d'erreur, le code de retour ainsi que l'ID de l'environnement d'exécution vous seront
donnés.   
Si le code de retour est positif, il s'agira du code de retour de votre grader,
et stderr vous sera affiché.
Si il est négatif, il s'agit d'un code interne à la sandbox (à communiquer à l'administrateur
en cas de besoin), et un message d'erreur de la sandbox vous sera donné en plus de *stderr*.