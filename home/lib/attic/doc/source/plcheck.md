# Commande plcheck
## Installation

Pour installer la commande et ainsi l'utiliser aisément il vous faut modifier le fichier ~/.bashrc
Pour cela, il faut lancer depuis un terminal
```
gedit ~/.bashrc
```
Ceci va ouvrir le fichier correspondant, ensuite il vous faut ajouter la ligne suivante à ce fichier :

```
export PATH=$PATH:/home/premierlangage/server/serverpl/pysrc
```

## Utilisation
```
	plcheck.py [OPTION]...[FILE]...
```
Seuls les fichiers au format pl ou pltp sont acceptés. Concernant les pl vous devez renseigner le chemin à partir de plbank ou bien un autre répertoire qui est dans repo sous forme d'un chemin relatif classique ou sous la forme
```
plbank:chemin_vers_le_fichier_pl
```

A gauche des ':' le nom du repo, à droite le chemin relatif à partir du repo

## Description
Plcheck est un outil en ligne de commande permettant de vérifier qu'une feuille d'exercice est conforme et que l'exercice fonctionne.
Pour cela elle utilise:
gitload/loader.py pysrc/plparser.py pour charger des PL et PLTP tout en faisant attention de ne pas les sauvegarder dans la base.
pysrc/pleditor pour vérifier les conditions sur les champs etc
Une fois l'exercice parsé et édité convenablement, plcheck va tester le fonctionnement de l'exercice en tentant de le résoudre tout d'abord avec la bonne réponse puis avec la mauvaise réponse. Selo le type d'évaluation de l'exercice cette commande peut utiliser pysrc/plrequest pour tester sur la sandbox le bon fonctionnement de l'exercice ou bien simplement l'evaluateur fournit avec l'exercice si il est de type direct.
Si tout s'est bien passé, plcheck effectue ensuite l'ajout de l'exercice dans repo du repertoire git.


## Options

-s, --sandbox=[sandbox_address]
       Après cette option, préciser l'adresse de la sandbox que vous voulez utiliser, par défaut    "http://pl-sandbox-test.u-pem.fr/?action=execute"

-v, --verbose 
      Affiche plus d'informations

-d, --debug 
      Quitte le programme et redirige à l'endroit où vous avez accès directement aux fichiers créés par la sandbox afin de débuguer. 

-h, --help 
      Affiche la page d'aide et quitte le programme
