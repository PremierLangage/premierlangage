
Orga
- infra
    - repositories du code source des composants : 1 repository par composant (faible couplage). tous sur Sourcesup (GIT)
    - accès hors de la fac
        - possible pour les etudiants MLV ou autre. ok pour PF.
        - TODO PP : création d'un compte CANTOR + autoriser PF (finkel@u-pem.fr) + autoriser Sylvestre  + nous donner les URLs, instructions.
    - communication : mail, tél
    - issues, wiki : trouver celui qu'on veut sur sourcesup
            --> tout sur le projet PL Doc. markdown pour les docs.
    - TODO Cantor jenkins : essayer de le créer sur SourceSup. Sinon sur un environnement Cantor
    - TODO Cantor utilité que Cantor crée des environnements dans le "cloud"
        - bien dans un premier temps
        - bien pour valider la chaîne de packaging/déploiement
        - (offert par Cantor dans le cadre de notre montée en compétence déploiement hybride)
    - description des environnements pour pouvoir faire des environnements de DEV (moodle et ses modules/activités/.... + sandbox)
        - TODO PP : doc de déploiement / installation
        - TODO Cantor : à "dockeriser" ce qui est possible
- planning minimaliste : liste tâches + estimations charge + affectation + roadmap (par principe ça vivra)
    - TODO PP
- TODO DR rétro-planning de l'utilisation en TD
    - les exos
    - le déploiement en PROD
    - etc...
- point hebdo sur avancement
    - Pierre à Charenton 1j /semaine. jeudi comme base.
    - un ordi portable serait bien.
- dates Pierre : jusqu'à fin août. du 27/7 au 18/8 : fac fermé. possible à Cantor. congés Pierre : quelques jours épars
- équipe ?
    TODO Cantor + préciser équipe + congés
- congés DR : mi juillet + aout. accessible partiellement.
- congés PF: 29/7 -> 21/8
- TODO à organiser : formation Moodle par Pierre pour Cantor

Etat des lieux
- charge au 18/6 : Pierre : 35 j.h
- réalisés :
    - études techniques + brainstorming fonctionnel
    - proto sandbox
    - proto intégration moodle : PL Activity (fork de quizz) et nouveau type de question PL QuestionType

Architecture
- TODO PP documentation et schéma à faire
    - Data Model. sans rentrer dans le détail : périmètre entre moodle et fichiers
    - Use cases
    - schéma d'architecture
    - utilisation des repositories ou ?? pour le stockage des exercices
    ?? à clarifier !! qu'est-ce qui est de l'ordre du générique, des conventions, des listes fermées
- TODO Cantor  poser des questions sur les docs et schéma !!

- Liste des composants :
    PL Activity
        PL QuestionType
    PL Bot
    Executor API (sandbox docker) : Executor Manager et Executor
    Import dans Moodle
        PL GitLoad (indépendant de moodle). fabrique le "json DM conceptuel PL"
            a besoin d'une vérification de cohérence forte car les repo peuvent venir de n'importe où
            par exemple sur le langage
        PL Repository (module Moodle avec ihm) . accède à PL GitLoad. glue entre moodle et PL GitLoad. peut aussi charger simplement un fichier déjà résultat de l'agrégation et déjà au bon format.
            inclut les écrans d'admin prof pour configurer les repos et charger les clés ssh
        PL QuestionFormat : convertisseur format PL (json DM conceptuel PL) to Moodle (DM Moodle spécifique PL QuestionType)
    PL Student : TBS
        DM pour stocker les infos sur les activités de l'élève (dans Moodle ou pas ?)
        en particulier pour fournir l'API nécessaire à PL Bot

Points à clarifier
- OK : intégration GIT pour les exos :
    - "juste" pour avoir un accès au repo avec les exos et garantissant la cohérence entre les fichiers
    - le ou les repo sont connus de Moodle
    - la gestion des branches possibles car PL Repository sera simplement capable de les lister
    - possible de configurer les listes de repo accessibles de manière globale, par cours ou par user (pour ne pas polluer)
- docklet ? c'est quoi pour DR
- tests

Composant PL Bot
- la tâche principale de Cantor
- à spécifier
    - contraintes techniques : language ? à discuter/décider entre php/python/java.
    - composant back-office
    - données :
        - accès aux données des exos à clarifier (Moodle et/ou ?)
        - accès aux données de moodle/PL Activity via ?
        - TBS : quoi ? où ?
    - récupération des résultats ?
    - administration ?
    - ihm ?

Composant PL Activity
- géré par Pierre
- spec fonctionnelles complètes à faire

Composant PL QuestionType
- géré par Pierre

Composant Import dans Moodle
        PL GitLoad : TB specified
            accède à git comme "filesystem" + agrégation des données en un seul fichier complet (héritage + ...).
            construction du format PL json (PL "agrégé")
            (à ajouter à la TODO list: accès ssh)
            rappel : pas de liens entre repo !! jamais !
        PL Repository (module Moodle avec ihm) : TBS
        PL QuestionFormat : convertisseur format PL (json DM conceptuel PL) to Moodle (DM Moodle spécifique PL QuestionType)

Questions d'intégration Moodle pour les élèves et les profs
- pour les élèves : ihm spécifique ? ligne de progression ? sa note ? ...
- pour les profs : où en sont les élèves ? ...

Composant Executor API
proto ok

Composant sandbox's docker
à clarifier le support des langages, des versions, que fait le CRI, comment les profs spécifient les prérequis d'exécution, les librairies du langage à installer ...

Data et jeux de tests
- qui  ?
- quand ?
- TODO DR (fin juin) : exos pour les tests unitaires
- TODO ??? (DR et autres profs) exos pour les TP réels à la rentrée

Idées DR pour les futures versions
- FranceIOI : pour importer les exercices et/ou utiliser leur API pour être compatible
- ouverture du système pour d'autres types d'exercices dans la même activité
- voir les résultats d'exécution progressivement
- pouvoir exécuter ds exercices graphiques et voir le résultat
- pour le prof: pouvoir modifier le modèle de l'élève pour influencer le moteur de décision plBot
- utiliser PL QuestionType dans un contexte différent de PL Activity



