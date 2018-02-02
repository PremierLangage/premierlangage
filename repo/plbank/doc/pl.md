
#  Les Formats PL
Dominique Revuz Dominique.revuz@univ-mlv.fr LIGM
Version {1.0} 13/05/2015




## Introduction au projet Premier langage



## Organisation des cours PL


Aucune installation nécessaire tout est fait sur navigateur sauf l'édition de fichier que vous pouvez organiser comme vous vouler.

### un repository sous git

Objectifs tout le contenu dans une même structure :

* le cours = structure poly slides et liste de concepts
* les concepts = les grains associés (unités pédagogiques minimal)
* les exercices = auto-correction des exercices et liens avec les concepts
* les codes qui permettent de faire varier les modalitées d'évaluation et de dynamique de  parcourt

Le repository git est la structure directement utilisée par moodle,
ainsi vous pouvez profiter de tout les aspects de git pour organiser le développement de votre cours et vos exercices.

Ainsi vous choisirer le repository et la branche que vous souhaiter utiliser dans votre cours moodle.
Cela permet d'avoir à la fois une approche partagé et distribué des enseignements.

Comme les exercices contiennent parfois la solution nous ne pouvons publier le site dans son intégralité.

Donc un repository public qui contiendra tout sauf les driectives `soluce`.
plus un repository à accès restreint qui contient tout.

Le repository à accès restreint est accessible pour le logiciel moodle ceci est configuré au niveau du cours moodle.

Pour tester vos exercice et la plateforme vous pouvez utiliser le bridge suivant:
https://bridge.pl1.cantor.fr/
login:upem
passwd:Up5mP@s!Wd

pour le git vous pouvez utiliser le github.com suivant :
https://github.com/plgitlogin/demo.git
login:plgitlogin
passwd:    demandez à dominique.revuz@u-pem.fr

Vous pouvez creer votre propre repository public ou privé et l'utiliser dans le bridge.

Pour avoir accès a un repository  accès restreint faites en la demande à mailto:dominique.revuz@u-pem.fr .


### Organisation de l'arborescence

l'arborescence est structuré premièrement par le langage cible.
Donc la racine actuelle ne contient que le sous répertoire `python/`.

.répertoire  `python/`
Ce répertoire `python/` contient les répertoires suivants:

* `ex/` qui contient tout les exercices de python disponible organisé dans des sous répertoires par concept
* `nameofconcept/` qui contient tout les exercices de python disponibles pour le concept nameofconcept
* `ressources/` qui contient tout les éléments partageables de cours dont le répertoire `grains/`
* `grains/` un répertoire par qui contient un sous répertoire par concept
* `cours/` qui contient les structures de cours et les feuilles d'exercices `sheets` et des éléments de cours.


.le répertoire `ex/`
Les exercices sont identifis par leur PATH (chemin dans l'arborescence) 
exemple python/ex/affectation/affectation/affec1.pl

.le répertoire   `python/ex/imports/`
qui contient des fichiers acceccible par tout les exercices.r
ATTENTION: repertoire a ne pas surcharger, faites valider les modifications.

Ainsi

.le répertoire `python/ex/monconcept/`
contient le fichier `monexo.pl` ainsi que des fichiers non partagées comme des données.



### Le format d'exercice
#### Dans l'arborescence

Dans l'arborescence un exercice est matérialisé par un répertoire `python/ex/monexo/` contenant un fichier de même nom `python/ex/monexo/monexo.pl`


### chargement d'un fichier pl

Quand un fichier pl est chargé grace à l'algorithme suivant:
	Lecture du fichier recherche de la balise template
		si la balise template est définie alors chargement du template (qui est un fichier pl, appel récursif)
	Une fois le chargeement du template réalisé
	les autres balises du fichier sont lues et affectés dans les variables correpondantes
	tout les fichiers indiqués sont placé dans un répertoire  dans une archive (archive utilisé par plexecutor).
	la balise version est calculé par le chargeur (plgitload)

Une fois le fichier est chargé si le fichier test.py existe il est imédiatement 
exécuté sur plexecutor pour vérifier que l'exercice est complet et faisable.
En cas de problème une erreur est signalé et la fonction de chargement échoue.



#### Syntaxe des fichiers pl
Les commantaires  utilise le caractère #, caractère a partir du quel le reste de la ligne est considéré comme un commentaire.

Chaque ligne est construite sur une des formes suivantes:

* les lignes vides sont ignorées 

* identifiant=valeur

    valeur peut contenir des blancs
    les blanc intiaux et terminaux sont éliminés
    toto= bande de moules     # hop
    la valeur est "bande de moules"

* identifiant=@reference_de_fichier

    la référence de fichier est par rapport au repository git si elle est absolue (commence par /)
    la référence de fichier est par rapport au répertoire de l'exercice (du fichier.pl) 
    si elle est relative (ne commence pas par /) bien sur dans les templates c'est rélatif au template.

* identifiant== valeur_mutiligne suivie de ==

    ce qui est apprès le premier double égal == est ignoré (commentaire)
    plusieurs lignes de code pouvant contenir un double égal
    des lignes commancant par un double égal mais pas réduite à double égal
    suivie d'une ligne contenant uniquement le double égal
    Sauf indication contraire l'information d'une balise multiligne est sauvegardée dans un
    fichier "./identifiant.py" 



## Réalisation d'un exercice pl sur la plateforme Moodle 

Quand un exercice pl est réalisé sur la plateforme Moodle c'est qu'il est soit dans un contexte de quizz (a voir ce qui est implémenté ce n'est pas une exigence mais une conséquence du moodle pl format cf. wiki)
soit dans un contexte de pltp. 

Quand l'exercice démarre (qqsoit le cadre) il permet d'afficher :
un Titre (directive *title* par défaut celui ci est vide et rien ne s'affiche).
un sujet de l'exercice (directive *text*)
une zone d'édition de code (initialiser avec le contenu de la directive  *code* )
Un bouton est proposé qui permet le lancement du test du code fournis par l'étudiant dans la zone d'édition précédente.

Si le bouton "exécuter/évaluer" est sélectionner la plateforme recupère le code contenue dans
 la zone d'édition, copie ce code dans un fichier "./student.py" (dans le répertoire d'exécution cf. implémentation)
 et l'envoit au module pl-executor avec tout les autres fichiers définis dans l'exercice.

Pl-executor retourne une structure plateform  JSON contenant les champs suivants:

====== plateform.json =====

	{
	  "platform_error" : null,
	  "grade": 
	  {
		"success": "True or False", 
		"errormessages" : "a afficher dans plactivity avec la couleur erreur",
		"execution": "a priori l'execution de student.py,a afficher dans plactivity avec la couleur execution",
		"feedback": "a afficher dans plactivity avec la couleur feedback",
		"other": "autres choses a voir plus tard"
		},
		"student.py": code
	}




====== le format grade.json ======


Le fichier grade.json contient 

grader.json 


Pl activité affiche alors dans un cadre dont le couleur varie en fonctione de la valeur de student.retour (bleu echec/ vert succes) les sorties standard et erreur.

Pl activité affiche ensuite dans un cadre noir le contenu de grader.feedback
 
Pl activité affiche deux boutons <suivant> et <réessayer> dans le cas  grader.success==true

La structure json entière  + un identifiant d'exercice + identifiant d'élève + time.stamp doit être sauvegardé dans moodle.

	{
		"success": True or False, 
		"errormessages" : "utilisation future",
		"execution":  "utilisation future",
		"feedback": "Texte formaté fournis à l'étudiant",
		"other":  "utilisation future"
	}




## remarques pour le module pl Executor 


Le module plexecutor reçois une archive avec tout le contenu du répertoire de travail que doit utiliser l'executor.
L'exécutor se place  dans ce répertoire puis :

execute python3 student.py et créer un fichier student.json de résultat de l'exécution en assurant l'encapsulation des exceptions.
si soluce.py exist réalise la même exécution avec en créant un fichier soluce.json

puis exécute python3 grader.py ou grader.py est le fichier défini par la directive *grader* 

la sortie standard du grader.py doit être au format grader.json vue juste au dessus. 

c'est a dire un json bien formé.

### Définitions

. Liste de définitions

Ces nom de champs sont utilisé dans le format json et dans le format interne de la base de donnée.
La version 2.0 est plus étandue et serai faite dans un deuxième temps.

* `author`

	- __version:__ 1.0	
	- __Description:__ variable d'information author initial (option : le dernier modificateurs git est ajouté en fin de ligne )
	- __Obligatoire:__ non
	- __Valeur par défaut:__ (vide)

* `code`

	- __version:__ 1.0	
	- __Description:__ Le code initial contenu dans l'éditeur de programme de l'apprenant
	- __Obligatoire:__ oui
	- __Valeur par défaut:__ "# saisissez votre code ici"

* `concept`

	- __version:__ 1.0	
	- __Description:__ Liste de concepts (nom réduits) du site pl.univ-mlv.fr
	- __Obligatoire:__ oui
	- __Valeur par défaut:__ "root"
    Remarque le séparateur de concept est le caractère pipe '|' 


* `difficulty`

	- __version:__ 2.0	
	- __Description:__ Niveau de difficulté de l'exercice echelle sans fin, 0 = pas de difficulté pas d'erreur de compile
	- __Obligatoire:__ oui
	- __Valeur par défaut:__ 1

	Description des niveaux: 0 pas d'erreur syntaxique 
							 1 le programme doit corresponde à un critère suplémentaire défini dans le grader
							 2+ niveaux de difficulté définie par le créateur de l'exercice 


* `failure`

	- __version:__ 2.0	
	- __Description:__ Est un texte qui est affiché en cas d'echec qui permet de faire du renforcement sur la notion,
	eventuellement s'assurer que l'apprenant a bien compris l'exercice dans la zone de feedback plactivity
	- __Obligatoire:__ NON
	- __Valeur par défaut:__ None
							 
* `feedback`

	- __version:__ 2.0	
	- __Description:__ fournis en cas d'echec ou de succès, donne une information sur l'exercice  pour mieux le comprendre
	- __Obligatoire:__ non
	- __Valeur par défaut:__(vide)
	en version 1.0 veuillez utiliser le grader pour cela.

* `files`

	- __version:__ 1.0	
	- __Description:__ peut être mis plusieurs fois et déclare un fichier a importer dans l'environnement d'exécution exemple
	files=@test.py
	files=@data
	copie du repertore courrant de l'exercice dans le repertoire d'excution
	- __Obligatoire:__ non 
	- __Valeur par défaut:__ aucune 


* `grader`

	- __version:__ 1.0	
	- __Description:__ le grader est une commande exécutable dans l'environement d'exécution de pl-executor,
			qui va évaluer le code fournis par l'apprenant
	- __Obligatoire:__ oui
	- __Valeur par défaut:__ erreur en cas d'abscence 


* `hint0`

	- __version:__ 2.0	
	- __Description:__ une aide de l'exercice hintN ou N est le numéro de l'aide qui peut être demandé et fournie progressivement à l'apprenant.
	hint est equivalent à hint0 (une seule aide)
	- __Obligatoire:__ NON 
	- __Valeur par défaut:__ None 

* `inputNN`
	
	- __version:__ 1.0	
	- __Description:__ ligne d'entré dans le cas ou vous en vouler une entrée aleatoire utilisez le inputgenerator
    input peut être mutliligne
	- __Obligatoire:__
	- __Valeur par défaut:__

* `inputgenerator`

	- __version:__ 2.0
	- __Description:__ un code qui permet de produire une entrée standard (différente à chaque utilisation, sinon utiliser directement input
	- __Obligatoire:__ non 
	- __Valeur par défaut:__ none

	inputgenerator est du code python permettant de produire un fichier deux façon de le produire, soit directement sous la forme d'un fichier inptugenerator.py soit 
	sous forme d'une balise inputgenerator


* `soluce`

	- __version:__ 2.0	
	- __Description:__ un fichier qui sera comparé par la sortie standard du code de l'apprenant 
	- __Obligatoire:__ Non 
	- __Valeur par défaut:__ None


* `success`

	- __version:__ 2.0	
	- __Description:__ Est un texte qui est affiché en cas de succes qui permet de faire du renforcement sur la notion,
	eventuellement s'assurer que l'apprenant a bien compris l'exercice
	(fenetre modale) peut être que cela pourrais apparaitre dans une fenetre modale
	- __Obligatoire:__ oui  
	- __Valeur par défaut:__ Bravo, vous pouvez passer à l'exercice suivant !
	version 1.0 utilisez directement le grader
    

* `taboo=pas|de|mot|français|é|è|à|ù`
	- __version:__ 2.0
	- __Description:__ liste de mots interdits dans la solution (option; expression rationelles)
	- __Obligatoire:__ Non 
	- __Valeur par défaut:__ none 
    	modalité création d'un fichier 'taboo' contenant un mot par ligne 
	version 1.0 utiliser la classe Grader ou un subprocess de la commande grep

* `template`

	- __version:__ 1.0
	- __Description:__ l'exercice de référence qui est chargé avant pour initialiser les variables, l'inclusion est récursive si l'on n'indique pas de template ou le template=None
    alors l'exercice est un des exercices de base
	- __Obligatoire:__
	- __Valeur par défaut:__ none

* `text`
		- __version:__ 1.0
	- __Description:__ Sujet de l'exercice contient les explications et ce que doit faire l'apprenant pour réussir son exercice, la syntaxe est celle du
	[filtre latex](https://docs.moodle.org/29/en/TeX_notation_filter) de moodle et la possibilité d'utiliser le
	[markdown](https://docs.moodle.org/29/en/Markdown)
	- __Obligatoire:__ oui 
    

* `timeout`
	- __version:__ 2.0
	- __Description:__ temps maximal d'exécution en milli-secondes du code (par défaut 5000 soit 5 secondes)
	- __Obligatoire:__ non 
	- __Valeur par défaut:__ 5000 ms valeur par défaut de PLExecutor 
    
* `title`
	- __version:__ 1.0
	- __Description:__ Titre de l'exercice
	- __Obligatoire:__ Non 
	- __Valeur par défaut:__ (vide)


* `version`

	- __Description:__ version git de l'exercice mis à jour valeur calculé au chargement 
	- __Obligatoire:__ OUI 
	- __Valeur par défaut:__ VALEUR CALCULE PAR LE PLGITLOAD

* `tester`

	- __version:__ 2.0
	- __Description:__ un code qui execute des testes unitaires sur le code de l'apprenant, conportement classique avec affichage de la sortie standard + sortie erreur standard et un texte explicatant le nombre de test échoués sur le nombre de test faits.
	renvois 0 si il y a aucuns echecs.
	- __Obligatoire:__ NON 
	- __Valeur par défaut:__ none




#Exemples 

La meilleur façon de se former à l'utilisation des fichier pl est de lire des exercices types dans 
l'arborescence des exercices.



#### Exemple de contenu de `monexo.pl`

````python
author=DR # Mai 2015
template= example # on hérite de toutes les variables de l'exercice 'example'
title=Entrée/sorties Elémentaires (print)
text == # le texte qui est affiché à l'apprenant
# la syntax des textes est du markdown compatible moodle
 donc la ligne précédente était un titre en markdown les titres sont des lignes commencant par # 
Votre premier exercice python affichez quelque chose à l'écran
en utilisant la fonction print et une chaine de caractère
pour cela écrivez une ligne comme celle ci :
print(" le texte de votre choix")
une fois l'exécution réalisée" vous pourrer passer à l'exercice suivant
==
code==
# ce texte est mis comme valeur par defaut du widget d'édition de code
# et donc apparait dans la fenêtre d'edition
# tapez dans la ligne suivante le code print("hello world ")
==
````


Un autre exemple correction d'une erreur de syntaxe :
#### Exemple le fichier `erreurs/erreur1.pl`
````python
template= example # même heritage
text==
Une des difficultés de la programmation vient du fait que l'ordinateur ne comprend pas mais exécute simplement vos instructions.
Hors si celle ci n'ont pas de *sens* , si votre programme n'est pas *correct* , le programme n'est pas executable.
Le code qui vous est proposé dans l'éditeur contient une erreur. Lancez l'execution du code pour voir l'erreur.
Puis corrigez celle ci.
==
code==
print("hello python student")
 print(" vive les tabulations")
==
soluce==
print("hello python student")
print(" vive les tabulations")
==
````






.un template de base le template

`/python/ex/example/example.pl`

````python
# commentaire : ceci est un template de base qui permet d'implémenter la fonctionalité pyExample
author=DR
template=None # ceci est un template de base
text==
ceci est le text du template doit être remplacé dans l'exercice
Ne doit pas être nul car c'est la question à la quelle doit répondre l'apprenant
vous pouver utiliser ici le format (markdown|asciidoc) pour formater votre
texte qui sera en suite transcodé en html en particulier les & et autres < et >
</body> <!-- avec ce truc la y aura bug ou pas ?
==
grader=@graderOK.py
````

le fichier `/python/ex/example/graderOK.py`
````python
import sys
import json
print(json.dumps({ "success": True , "errormessages" : "", "execution": "OK", "feedback": "feedback OK", "other": "" }))
````
le fichier  exercice réussit quelque soit le code de l'élève.


le template `python/ex/example/solver.pl` est plus compliqué mais facile en suite à utilisé :
````
template=None # basic template
grader==

import json

def compareexecutions():
	'''
	reads the files student.json soluce.json
	en compare them
	if file soluce.json dosen't exist return OK,"pas de fichier"
	if file student.json dosn't existe return OK,"pas de fichier"
	if file are equal return OK,"execution du code"
	'''
	jstu="init"
	try:
		sol = open("soluce.json",mode="r")
		stu = open("student.json",mode="r")
	except:
		return True,"fichier json manquant"

	try:
		jstu = json.load(stu)
		jsol = json.load(sol)
	except:
	
		return True,"Plateforme error probleme with parsing the json in student.json or soluce.json" 
	if jstu['stdout'] != jsol['stdout']:
		comparaison = "sortie standard attendais %s obtenue %s" % (jsol['stdout'], jstu['stdout'])
		return False, comparaison
	if jstu['return_code'] != jsol['return_code']:
		comparaison = " code de retour attendais %s obtenue %s" % (jsol['return_code'], jstu['return_code'])
		return False, comparaison
	if jstu['stderr'] != jsol['stderr']:
		comparaison = " sortie erreur attendais %s obtenue %s" % (jsol['stderr'], jstu['stderr'])
		return False, comparaison
	return True,"ok résultat egale a la correction"+jstu['stdout']


success,texte  = compareexecutions()
dico = { "success": success , "errormessages" : "", "execution": "", "feedback": "", "other": s }
if  success :
	dico["execution"]= texte
else:
	dico["errormessages"] =  texte
print(json.dump(dico))

==

````



un  exemple d'utilisation du template solver:
[source]
.`/python/ex/xcarre/xcarre.pl`
````
# le source de l'exercice
template=/python/ex/example/solver.pl
author=Jeremy
soluce=@/python/ex/xcarre/soluce.py
text==
Afficher sur une ligne les Dix premiers carés séparés par un espace en commencant par 1:
1 4 9 16 25 36 49 64 81 100
la solution la plus simple est
print("1 4 9 16 25 36 49 64 81 100 ")
mais que pensez vous des 1324556677 premiers carès ?
==
````


.`/python/ex/xcarre/solver.py`
````
# le source de la solution cachée utilisée par l'exercice xcare
# je pense que cet exercice est idiot
for i in range(1,11):
    print(i*i,end=" ")
print("")
````

Le grader permet de donner une évaluation et termine l'exercice bien ou mal, le grader lance le tester et le solver avant de faire l'évaluation, mémorisation de la solution proposé.
si vous souhaiter réaliser un jeu de tests plus complexe qu'une seule exécution nous nous efforcons de vous fournir une syntaxe rapidement mais pour le moment vous devez programmer directement dans le grader.


## interface utilisateur 

TODO 

Les boutons de l'interface des élèves:

* executer
* abandonner
* help


* Glossaire

`repertoire d'execution` : le répertoire dans lequel la sandbox travail

