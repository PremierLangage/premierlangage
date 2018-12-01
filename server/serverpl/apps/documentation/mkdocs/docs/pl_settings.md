# Paramètres d'un Exercice


Les exercices utilisent un espace de nom `settings` (voir
[espaces de noms](../langage_pl/#espaces-de-noms)) pour définir ou modifier
certains paramètres, par exemple:

```
settings.oneshot = true
settings.allow_reroll = true
```
___



## Paramètrage de la seed

Lorsqu'un élève lance un exercice pour la première fois, une seed lui est
attribuée. Par défaut ce tirage est définitif et la seed ne changera jamais.
Il est possible de modifier ce comportement grâce à ces paramètres:




#### À chaque essais

Pour qu'une nouvelle seed soit tiré après chaque essais de l'élève, il faut
définit le paramètres `settings.oneshot = true`. Une nouvelle seed sera donc
tiré à chaque fois que la réponse de l'élève aura une note inférieur à 100.

Il est en possible de modifié cette valeur avec
`settings.oneshot_threshold = [-1, 100]`.

Exemple, avec:
```
settings.oneshot = true
settings.oneshot_threshold = 50
```
Une nouvelle seed sera tirée tant que l'élève aura un score inférieur à 50.



#### Après une réussite

Par défaut, une fois que l'élève a réussit un exercice (score égale à 100 par défaut),
la seed est fixée (même si `settings.oneshot` est activé). Il est alors
possible d'autoriser à l'élève à tiré une nouvelle seed (pour s'entrainer par
exemple). il faut pour cela définir le paramètre `settings.allow_reroll = true`.

Il est possible de modifié le score à partir duquel le bouton apparait
(100 par défaut) grâce à `settings.reroll_threshold = [-1, 100]`.

Exemple, avec:
```
settings.allow_reroll = true
settings.reroll_threshold = 75
```
Le bouton permettant d'effectuer un nouveau tirage aléatoire apparaitra
si l'élève obtiens un score d'au moins 75.

***NOTE*** : Le bouton pour effectuer un nouveau tirage n'apparait pas dans
l'éditeur, mais seulement dans le cadre d'une activité.