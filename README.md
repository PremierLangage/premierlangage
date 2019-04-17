# premierlangage

The "premier langage" project aims to provide an easy-to-use, automatically correcting exercise platform.

## For Students

An intuitive and simple interface for exercises.
The possibility, for the student, to create a course reviewing path fitting his needs.

## For Teachers

We wish to simplify the life of the poor parents of online teaching platforms !!
Both the **maximal potential** : possibility to design new exercises types, and **super easy**, MCQ exercises, drag and drop, selection... that takes two minutes to write.



### An exercise conception language

An exercise definition language, both very easy and complete, based on Python,
it is indeed possible to code with Python and JavaScript every ideas that we may have without losing the platform integration.

# Activity and classroom management language

## A classroom dashboard

A  graphical interface with immediate information.
Statistiques and scores of the students for each exercises and each sheet.
Database and plug-ins with API to multiply the analyzing means (open access to data where anonymity  can be secured).
Keywords analyse, concepts, leaderboards, distributions, positioning...

## Classrooms tools

Give class, sub-groups, students, specific exercise.  
Monitor progress.   
Organize your groups.  
Organise group exercises (competitions, work-sharing, projects, games).



# Comment contribuer à PL ?


Vous voulez contribuer au jeune projet informatique PL, toute aide est la bienvenue. Nous avançons rapidement sur plusieurs plans, les parties internes, les outils généraux et aussi les ressources spécifiques.

## Le serveur PL, coeur de PL :


Le cœur de PL est la partie serveur. Cette dernière utilise Docker et des machines virtuelles dans le but de mettre en œuvre toute situation pédagogique imaginable. C'est la partie dédiée de nos jeunes développeurs experts en informatique. Les objectifs principaux de cette partie sont les suivants :
* administration : gestion des utilisateurs et leur rôles, identification
* sécurité : assurer la stabilité de la plateforme PL en utilisation
* tenir la charge : le passage à l'échelle avec les technologies adaptées d'aujourd'hui

Contribuer au cœur de PL est clairement la tâche exigeant le plus de compétences techniques informatiques. Il ne s'agit pas ici de produire de la pédagogie mais de construire un utilitaire solide pour accueillir et jouer des ressources pédagogiques. Ce cœur de PL reste toutefois conçu et développé par des enseignants compétents en informatiques et leurs étudiants. Les technologies à maîtriser sont les langages de programmation Python, javascript et les langages du web. Aussi, on utilise Django, jinja, jquery et beaucoup de concepts.


## pl-standard-lib : la librairie standard de PL 


Ici, on commence à ce rapprocher du travail d'enseignant mais pas trop. Cette partie est tout aussi essentiel à PL. La librairie standard de PL propose des outils standards et adaptables aux plus grands nombres d'enseignants (codeur d'exercices).
Par exemple, un moteur jouant des QCM en sélectionnant au hasard des questions, pour chaque question, en sélectionnant au hasard des propositions de réponse et en proposant une correction et notation automatique. Ce moteur n'est pas réservé aux enseignant en droit, en histoire, en chimie ou encore en informatique. 
Toutes matières peut, à un moment, décider d'évaluer des savoirs par QCM. Et bien pour éviter que tout le monde conçoive de son coté un moteur de génération et correction de QCM, la librairie standard de PL est là pour ça. 

C'est donc une collection d'outils moyennement technique et à visé pédagogique pour concevoir des activités dynamiques dans toutes matières. Parfois, il s'agit de fonctionnalité plus techniques. Si les enseignants en math veulent tracer des graphes de fonctions, des électriciens veulent dessiner des digrammes de Bode, des physicien souhaite dessiner des diagrammes de phases, etc... Il apparaît alors tout naturel de partager l'outil technique dessinant ces courbes dans un navigateur. Plus nous mutualisons, plus le collectif gagne.
La librairie standard a vocation a être accessible directement par la sandbox donc les imports et les fichiers récurrant sont dans la  stdlib. (https://github.com/premierlanagage/pl-standard-lib/)[La lib standard: pl-standard-lib/]

## Les dépots de ressources dédiées 

Nous arrivons finalement vers les ressources pédagogiques finales, les énoncés d'exercices que nous voulons jouer en classe, à la maison, dans les transports, en autonomie ou même parfois de manière partagée. Ces ressources finales sont, pour le moment, organisé dans différents dépôts git. Ces dépôts sont plus ou moins administrés par des enseignants curieux de PL commençant à jouer avec l'outil dans le but de le faire monter en puissance. Il est tout naturel de s'organiser dans un premier temps par domaine ou matière. Le mieux est de contacter une personne référente pour commencer à contribuer. Suivant vos objectifs pédagogiques et ceux de la personne visée, des partages de ressources peuvent facilement s'organiser.

Ces ressources sont partagées sur Yggdrasil (l'arbre de tout). 
(https://github.com/premierlanagage/yggdrasil/)[yggdrasil ou l'arbre des ressource]

Pour les débutants vous trouverez un répertoire bac-a-sable à la racine de Yggdrasil 

Bienvenu à bord.




We are on Github, you can find the conception (in french) of the project here -> https://github.com/plgitlogin/plconception
