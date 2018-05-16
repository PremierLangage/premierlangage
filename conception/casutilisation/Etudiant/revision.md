
# UC: Révision
Acteur Principal : Etudiant
Objectif :  Permettre à l'étudiant de revoir les notions qui a besoin de connaitre pour l'examen.

Résumé général : Donner accès à des cours et des exercices d'une matière que l'étudiant souhaite réviser.


# Données



## Pré-conditions

L'étudiant doit être connecté et avoir accès aux cours et aux exercices qu'il veut réviser


## Post Conditions

En cas de succès : L'étudiant a accès aux cours et aux exercices qu'il veut réviser, il peut refaire des 
exercices qu'il a déjà fait (réussi ou non) ou faire des exercices qu'il n'a jamais fait.

En cas d'échec : Les cours et/ou les exercices de la matière qu'il veut réviser ne sont pas disponible.


# Navigation / IHM 

L'étudiant peut réviser en ayant accès aux cours et aux exercices à partir de son tableau de bord, recherche 
des cours et exercices voulus dans la base de données s'ils sont présents.


## Scénarios

MAIN SUCCESS SCENARIO
S	[l'étudiant peut accéder aux cours et exercices voulus pour réviser]
1	[L'étudiant se connecte]
2	[L'étudiant essaie d'accéder aux cours et exercices voulus depuis le tableau de bord]
3	[Recherche dans la base de données]
4	[L'étudiant accède aux cours et exercices qu'il veut réviser]
