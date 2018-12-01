# Construction

Afin de construire des exercices ayant une part d'aléatoire, où de faciliter la création de type 
d'exercices réutilisables, il peut être nécessaires de passer par un script de construction de l'exercice.

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
Ce script est appelé avec 2 arguments dans cet ordre:

    python3 builder.py CONTEXT_FILE MODIFIED_CONTEXT_FILE


Utilisez l'indice dans la ligne de commande (sys.argv) pour manipuler ces deux fichiers. Le noms étant défini par l'extérieur. 

Pour récupérer le context, il est donc possible de faire:
```python
import json
with open(sys.argv[1],'r') as f:
    context = json.load(f)
```
___


## Sortie
#### Un context modifié
Doit être écrit dans `MODIFIED_CONTEXT_FILE`:
```python
import json
with open(sys.argv[2], 'w+') as f:
    json.dump(context, f)
```
Le *builder* peut modifier l'ensemble du context de l'exercice.

En cas d'utilisation d'aléatoire, il faut initialiser `random.seed()` avec
la clé *seed* du context.

## un exemple qui ne fait rien
```python
if __name__ == "__main__":
    if len(sys.argv) < 3:
        msg = ("Sandbox did not call builder properly:\n"
               +"Usage: python3 builder.py [input_json] [output_json]")
        print(msg, file=sys.stderr)
        sys.exit(1)
    input_json = sys.argv[1]
    output_json = sys.argv[2]
    with open(input_json,'r') as i:
        with open(output_json,"w") as o:
            o.write(i.read()) # pas de conversion de et vers json comme on ne fait rien 
```


#### La sortie d'erreur:

Afin de débuguer votre *builder*, il est possible de print sur la sortie d'erreur
lorsque le code de retour est différent de 0  (`sys.exit(1)` par exemple):
```python
import sys
print(debug_msg, file=sys.stderr)
sys.exit(1)
```

Dans certain cas (en cas de *timeout* par exemple), stderr peut ne pas être reçu. Dans ce cas, utilisez:
`sys.stderr.flush()` après vos prints.

La sortie d'erreur est redirigée vers un fichier STDERR_FILE (actuellement `stderr.log`) et sera ajoutée
à la fin du du message d'erreur.

En cas d'erreur, le code de retour ainsi que l'ID de l'environnement d'exécution vous seront
donnés.   
si le code est 0 tout c'est bien passé. 
Si le code de retour est strictement positif, il s'agira du code de retour de votre grader,
et stderr vous sera affiché.
Si il est négatif, il s'agit d'un code interne à la sandbox (à communiquer à l'administrateur
en cas de besoin), et un message d'erreur de la sandbox vous sera donné en plus de *stderr*.



* **[L'Affichage](../affichage/)**, à l'aide des clés *title*, *author*, *text* et *form*
* **[L'Évaluation](../evaluation/)**, à l'aide d'un script *grader.py*
