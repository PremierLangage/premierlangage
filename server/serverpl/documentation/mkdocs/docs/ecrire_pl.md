# Écrire un Exercice
## Introduction

PL est un format de fichier permettant l'écriture d'exercices très différents. L'évaluation ainsi que le formulaire de réponse de l'exercice étant intégré à celui-ci, les possibilités sont quasiment infinis (les limites étant le langage Python ainsi que les différents langages web: HTML, JS, etc...). 


## Format
Le format PL est un ensemble de déclaration de couple clé, valeur. Ces déclarations ce font avec une syntaxe simple que voici:

* "**=**" (_clé = valeur_) : Permet l'attribution d'une valeur sur une ligne, exemple: _title=Exercice 1_

* "**=@**" (_clé =@ valeur_) : Permet d'attribuer le contenu d'un fichier à la clé, exemple: _enonce=@ /python/enonce/exercice3.txt_

* "**+=@**" (_clé +=@ valeur_) : Permet d'ajouter le contenu d'un fichier à une clé déjà existante, exemple: _enonce+=@ /python/enonce/exercice3.txt_

* "**%**" (_clé % valeur_) : Permet d'assigner un dictionnaire à la clé au format json, exemple: _enonce % { "name": "Jake", "Age": 20 }_

* "**=%**" : Permet d'assigner un dictionnaire à la clé au format json. Cet opérateur permet l'écriture du json sur plusieurs lignes, de la ligne suivant _clé=&zwj;%_ à la ligne précédant le prochain _==_ exemple:
```
clé =%
{
    "name": "Jake",
    "age": 20,
}
==
```

* "**=&zwj;=**" : Permet l'attribution d'une valeur sur plusieurs lignes, de la ligne suivant _clé=&zwj;=_ à la ligne précédant le prochain _==_


* "**+&zwj;=**" : Permet d'ajouter du contenu, à une clé déjà existante, sur plusieurs lignes, de la lignes suivant _clé+&zwj;=_ à la ligne précédant le prochain _==_, exemple:

```
clé ==
valeur
sur
==

uneautreclé=Rien ou quelque chose 

clé +=
plusieurs
lignes
==
```

clé vaut maintenant:
```
clé ==
valeur
sur
plusieurs
lignes
==
```

### Clés Particulières
Il existe une clés particulière associée au symbole "=": la clé  "_extends_"(_extends= /python/patron-exercice.pl_)

_extends_ permet d'étendre un autre fichier, c'est à dire de récupérer l'ensemble des clés de ce fichier puis, si n'importe laquelle de ces clés est aussi déclaré dans votre fichier, cette dernière écrasera celle du fichier étendue. Le chemin doit respecter la syntaxe de l'opérateur **@** du PLTP (voir Différence PL / PLTP -> PLTP)


Ces balises permettent d'éviter de devoir réécrire les clés les plus compliquées pouvant servir pour plusieurs exercices (formulaire, fonction d'évaluation, etc...).


### Clés réservées
Bien qu'il soit possible d'attribuer n'importe quel clés, il est important de noté que certaine sont utilisé pour l'interface et pour le traitement de l'exercice, ces clés sont:


#### PLTP & PL:
* _title_ - Titre de l'exercice/feuille d'exercice
* _author_ - Auteur de l'exercice


#### PLTP
* _introduction_ - Présentation de la feuille d'exercice, le contenu de cette clé est interprété comme du markdown.
* _introductionh_ - Présentation de la feuille d'exercice, le contenu de cette clé est interprété comme du html.
* _teacher_ - Sur un PLTP, affiche un note visible par les enseignant seulement

#### PL
* _text_ - Énoncé de l'exercice, le contenu de cette clé est interprété comme du markdown.
* _texth_ - Énoncé de l'exercice, le contenu de cette clé est interprété comme du html.
* _build_  Clé contenant une fonction build (ancienne syntaxe: utiliser de préférence _before_)
* _before_ - Code python permettant de modifier l'exercice avant sont exécution sur le navigateur, en particulier modifier des clefs avec des éléments plus variées (liste, dictionnaire, utilisation d'aléatoire, etc...). Ce code sera exécuté avant l'affichage et avant l'évaluation de l'exercice.  Voir la page [Écrire un Build](./build/).
* _evaluator_ - Code python permettant d'évaluer la réponse l'élève. Voir la page [Écrire un Évaluateur](./evaluator/)
* _form_ - Formulaire HTML permettant à l'élève de répondre. Voir la page [Écrire un Formulaire](./formulaire/) .

## Différence PL / PLTP

L'ensemble des opérateur vue dans **Format** est identique pour les PL et les PLTP. Il existe cependant un autre opérateur ayant une signification différentes : l'opérateur **@**

### PLTP

Dans un PLTP, l'opérateur **@** permet d'ajouter un PL à la feuille d'exercice, il se présente de différentes manières:

```
@ /path/to/file.pl

@ ../relative/path/file.pl

@ autre_repertoire:/path/to/file.pl
```

Le premier cas indique un chemin absolue depuis le même dépot que le PLTP.
Le second cas indique un chemin relatif au pltp dans le même dépot que celui-ci.
Le dernier cas indique le chemin d'un fichier situé dans le dépot 'autre_répertoire'.

Ainsi, avec une arbre de repertoire comme celui-ci:

```
repertoire_1/
├──dossier1/
│  ├─ exo1.pl

repertoire_2/
├──dossier2/
│  ├─ exo2.pl
│  ├─ feuille.pltp
```

Il est possible de référencer *exo2.pl* dans *feuille.pltp* de plusieurs manière:

```
@ exo2.pl
@ /dossier2/exo2.pl
@ repertoire_2:/dossier2/exo2.pl
```

*exo1.pl* se trouvant dans un autre répertoire que *feuille.pltp*, il n'est en revanche possible de le référencer que d'une seul manière:

```
@ repertoire_1:/dossier1/exo1.pl
```

Une feuille d'exercice voulant donc référencer ces deux exercice contiendrait donc:

```
@ exo2.pl
@ repertoire_1:/dossier1/exo1.pl
```

### PL
Dans un PLTP, l'opérateur **@** permet d'associer un fichier au PL qui sera envoyé à la sandbox avec la réponse de l'élève.
La syntaxe se présente de cette façon :

```
@  chemin [alias]
```

*Chemin* se présente de la même façon que dans un PLTP, les 3 mêmes cas son possible. Il est en revanche possible ici de nommé le fichier avec un alias, par exemple avec:

```
@ repertoire:/dossier1/fichier.py [grader.py]
```

un fichier *grader.py* ayant le même contenu que le fichier pointé par *repertoire:/dossier1/fichier.py* sera envoyé à la sandbox avec la réponse de l'utilisateur.

La balise *alias* est falcultative, le nom du fichier correspondra par défaut au nom du fichier sur lequel le chemin pointe:

```
@ repertoire:/dossier1/fichier.py
```
Enverra donc un fichier *fichier.py* à la sandbox.
