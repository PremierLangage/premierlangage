# premierlangage

Le projet premier langage à pour objectif de fournir une plateforme d'exercices en auto correction facile d'utilisation.

## Pour élèves 
 
Une interface simple et intuitive des exercices.
La posibilité pour l'élève de construire un parcours de révision en fonction de ces besoins.

## Pour les enseignants

Les parents pauvres des plateformes d'enseignement en ligne, nous souhaitons leur simplifier la vie !!
A la fois la **puissance maximum** : possibilité d'inventer  de nouveau types d'exercices, et **super simple** des exercices QCM, Drag and drop, selection, etc qui prennent deux minutes à écrire. 


### Une interface de pilotage de classe 
Statistiques et notes sur les élèves et les exercices. 
Base de données et modules d'extension avec des API pour multiplier les moyens d'analyse.
Analyse par mot clefs, concepts, classement, distributions, positionnement etc.

### Un langage de conception d'exercice 
Un langage de définitions d'exercice à la fois très simple et complet basé sur python, 
en effet il est possible de programmer en python et en java script toutes idées que l'on peut avoir 
sans perdre l'intégration sur la plateforme.

### Un langage de gestion des feuilles et des classes
#### les classes 
En fonction de votre besoin vous pouvez soit travailler sur une classe sur laquelle
vous souhaiter pouvoir indiquer à des groupes d'élèves des exercices spécifiques (notion non comprise,
exercices plus simples, exercices plus motivants,).
Vous souhaiter organiser vos groupes de travail facilement. 
Vous souhaiter organiser des exercices de groupes (compétitions, mises en communs, projets, jeux).
#### Les feuilles 
Vous avez une liste d'exercices et vous souhaiter que les élèves la fasse le plus vite possible
et qu'a la fin la (les) notion(s) importantes soit comprises. 
L'hétérogénéité des élèves veux dire que certains execices sont utiles pour des élèves et pas pour d'autre, 
le langage de descriptions de feuilles vas vous permettre de "coder" ces différences.

# Participer au projet 

Nous sommes sur github le projet de conception est la -> https://github.com/plgitlogin/plconception



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



