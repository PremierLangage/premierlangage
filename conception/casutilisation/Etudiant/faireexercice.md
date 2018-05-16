
# Accès feuille/exercice
Objectif : Pemettre à l'étudiant d'accèder à des feuilles/exercices

Résumé général : Donner accès à des feuilles/exercices pour qu'un étudiant puisse les faire


# Données

Acteur Principal : Etudiant

Concurrence : Non



## Pré-conditions

L'étudiant doit être connecté(login.md) et avoir accès à son tableau de bord.


## Post Conditions

En cas de succès : L'étudiant a accès aux feuilles/exercices qu'il veut faire, il peut choisir des feuilles/exercices qu'il a déjà fait ou qu'il n'a jamais fait.

En cas d'échec : le ou les feuilles/exercices qu'il veut faire ne sont pas disponible.


# Navigation / IHM 

L'étudiant peut faire des feuilles/exercices en les choisissant à partir de son tableau de bord, recherche 
des feuilles/exercices voulus dans la base de données s'ils sont présents.



## Scénarios

MAIN SUCCESS SCENARIO
S	[l'étudiant peut accéder aux feuilles/exercices qu'il veut faire]
1	[L'étudiant se connecte]
2	[L'étudiant essaie d'accéder aux feuilles/exercices qu'il veut faire]
3	[Recherche dans la base de données]
4	[L'étudiant accède aux feuilles/exercices qu'il veut faire]


