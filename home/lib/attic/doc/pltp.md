# le format pltp




## La page de TP



Le plugin moodle_pl / pl_activity  vous permet de créer une nouvelle activité.
Cette nouvelle activité est un feuille de tp (sheet) qui doit être sur le repository git accessible par le module pl-gitload

pour charger une page de TP il faut que le repository soit connecté cf. repository.pl 

moodle_import  "git+ssh://repository.fr/pl.git/cours/moncours/sheet.pltp"


L'idée des activités  TP premier language  dans moodle est que l'on écrit un fichier de type .pltp (cf. plus bas) on parle de sheet (feuille)
et puis on charge ce fichier à la création de l'activité, ce chargement consiste a téléverser depuis le repository git la feuille de tp
et les exercices associées, de compacter (détempletiser) ceux ci en vérifiant que toutes les références sont fonctionnelles.
Voire sous projet pl-gitload.
La version de l'exercice est soit la dernière version soit celle qui est indiquée dans le fichier pltp


## Chargement d'un fichier pltp

Scénario du téléversement du fichier  TP01.pltp 

le fichier est choisi dans le plugin puis le fichier est parcé pour trouver tout les exercices (fichiers.pl)  référencés dedant.

	Pour chaque fichier.pl :
		1) vérifier son existance sinon afficher l'erreur et passer en mode erreur.
		2) Charger le fichier et faire la liste des opérations assciées cf. chargement fichier.pl si le chargement échoue passer en mode erreur.
		
Si le mode est en erreur proposer deux solutions :
	que le fichiers d'exercices en erreur soit ignoré 
	ou abandon du chargement du TP (fichier.pltp)



Il est possible en suite de demander le rechargement d'une page qui recharge les exercies avec leur dernière version.
 Dans la version 2.0 il est possible de spécifier quels sont les exercices que l'on souhaite recharger (pour avoir la dernière version du repository).
 Dans les cas de rechargement il ya deux modes qui permettent de spécifier comment doit on associe les exercices fait à la nouvelle version.

### rechargement et modifications

En cas de rechargement la situation de l'étudiant reste la même il en est toujours au même exercice  (sauf si l'exercice sur lequel
 il était a disparu au quel cas il est placé sur l'exercice suivant dans la feuille.) 

Pour l'évaluation il doit y avoir dans l'identificaiton de l'exercice le time stamp du chargement de l'exercice.



Un TP a pour objectif de faire manipuler par un élèves un certain nombre de concepts.
Ainsi un TP a pour structure fondamentale une liste de concepts.

Ce sur quoi le prof bot peut agir c'est l'ordre dans lequel les exercices sont proposés.




# La structure d'un fichier pltp

La structure est des plus simple pour la version 1.0 
un champ multiligne `intro` 
puis une ligne par exercice importé la syntaxe est simplement de faire précédé 
le nom de fichier par un caractère @.



`/cours/moncours/mapage1.pltp`
````
intro==
la présentation du TP top top
c'est ici
==

@ /exercices/example/example.pl
@ /exercices/conditionnel/cond1.pl




````
