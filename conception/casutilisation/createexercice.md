
Le cas d'utilisation de création d'exercice.

Acteur: Utilisateur.

Le role d'effectif de l'utilisateur (etudiant, enseignant,créateur, etc) peut changer le comportement du système dans ce cas d'utilisation, en particulier le workflot est différent.


La création d'exercice a deux phases:
- phase de conception et d'édition du source de l'exercice qui utilise l'éditeur en ligne et la prévisualisation.

- phase de validation qui consiste à proposer l'exercice pour qu'il soit public.


La phase de conception commence quand dans l'interface on click sur le menu créer exercice.
Le système ouvre la page edition avec un fichier untitled.pl 
Sénario alternatif, meme chose mais avec un fichier selectionné dans l'arborescence.

Dans la page d'edition on trouve en plus de l'éditeur et de la prévisualisation, deux boutons, preview qui permet de tester l'exercice et sauvegarde qui permet de sauvegarder le fichier.

Dans le cas ou le fichier n'a pas de repertoire de stockage (il est uniquement dans la zone tampon) il faut demander dans quel répertoire le sauvegarder en proposant un navigateur de répertoires et en demandant le nom du fichier.


La preview permet de vérifier le bon fonctionnement de l'exercice. 
Voir vérification syntaxique dans le glossaire.



%%%%
Remarques: on veut un mode ou l'on ne perd pas de travail,
le fichier courrant si il n'a pas de nom est sauvegardé sous le nom untitled dans un repertoire caché réservé à l'utilisateur courrant.
Pendant l'édition le fichier courrant est sauvegardé dans une copie dans le répertoire chaché  zone tamon spécifique à l'utilisateur.
Le fichier en cours d'édition sera sauvegardé toutes les X=10 seconde et si il y a une modification ou si il y a un signal de l'éditeur (le truc le plus malin a voir avec les capacités de l'éditeur). 
