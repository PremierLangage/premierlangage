# Tableau de bord


Objectif :  Permet à l'utilisateur de voir sa progression, ces difficultés, ces cours, ces exercices, son classement par rapport à toute ça promotion, il s'agit d'un tableau suivie.

Résumé général: Lorsque l'utilisateur se connecte il a directement accès à son tableau de bord.

# Données

Acteur Principal : Utilisateur

Acteurs secondaires : Admin

Fréquence   : fréquence de la connexion

Concurrence : Oui

Déclencheur : se déclenche lorsque l'utilisateur se connect, quand il clique sur le bouton "Tableau de bord", ou encore lors de l'actualisation de la page.


## Pré-conditions

### Données d'entrées
	login

	classe

Avoir un compte dans la base de donnée, pour cela il dois [s'inscrire](/inscription.md).
L'inscription dois être effectué préalablement.

## Post Conditions

### Donnée sortie
	feuille d'exo

	suivie

	classement étudiant

	validation de tag pour les porfs avec un bon karma dans la discipline TODO

En cas de succès : L'utilisateur voit tous son suivie, les excercices qu'il a réussi, qu'il a raté, qu'il n'a pas fait, il voit son "classement" dans la classe et les cours.

En cas d'échec: ré-actualiser la page internet.

# Navigation / IHM 

Principe de navigation du scénario principal, organisation de l'IHM.

Une fois que l'utilisateur s'est connecté, il voit directement son tableau de bord ou il voit son suivi, son classement, ces difficultés dans les matières qu'il est tenu de suivre, il a alors la possibilité de faire de [reviser](/revision.md), d'[étudier](/etude.md), en fesant des exercices, en regardant les cours, il aura aussi la possibilité d'effectuer des [exercices](/exercice.md) qui lui sont assigné.

## Scénarios

# MAIN SUCCESS SCENARIO

Step    Action

S    [L'utilisateur est sur la page d'acceuil apres s'etre connecté, il a accès au tableau de bord]

1    [Ce cas d'utilisation commence quand l'utilisateur clique sur le bouton "Tableau de bord", quand il se connecte ou encore quand on entre l'url dans un navigateur.]

2    [il voit ces difficulté en rouge].

3    [il voit ces cours].

4    [il voit ces exercices].

5    [il voit les exercices pas fait en blanc].

6    [il voit les exercices pas fini en orange].

7    [il voit son suivi].

8    [Ce cas d'utilisation se finis lorsque l'utilisateur change de page internet].

# RELATED INFORMATION

Concurrency    [Le tableau de bord s'actualise en temps réel.]

Include Use Cases    [Exercice](/exercice.md), [Etude](/etude.md),[Revision](/revision.md)
 
