# Écrire un Exercice
## Introduction

PL est un format de fichier permettant l'écriture d'exercices très différents. L'évaluation ainsi que le formulaire de réponse de l'exercice étant intégré à celui-ci, les possibilités sont quasiment infinis (les limites étant le langage Python ainsi que les différents langages web: HTML, JS, etc...). 

## Quelque remarques pratiques

Pour apprendre à écrire des exercices pl le plus simple et de se connecter à PL [connection.md](connection.md).
Puis dans le repertoire home de créer un fichier avec l'extention pl.


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

## Espaces de Noms 

Si votre cles contient un point par exemple :

    avant.apres= valeur
Ceci est interprete comme : 
avant est une clef dont la valeur est un dictionnaire, et une des cles de ce dictionnaire est la cles apres.
Cette definition est recursive.


### Clés réservées
Bien qu'il soit possible d'attribuer une valeur à n'importe quel clés, il est important de noter que certaines sont réservées pour l'interface et pour le traitement de l'exercice, ces clés réservées sont:


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

L'ensemble des opérateurs vus dans [Format](#Format) ont un comportement identique dans les PL et les PLTP.
Sauf  l'opérateur **@** !!

### PL
Dans un pl l'oéprateur **@**  indique un fichier que l'on souhaite voire dans le contexte d'exécution sur la sandbox:

il est classique de trouvez dans un template la ligne :
```
@ /pysrc/src/utils.py
```
Le fichier utils.py contenant des fonctions qui simplifies l'écriture des grader.



### PLTP

Dans un PLTP, l'opérateur **@** permet d'ajouter un PL à la feuille d'exercice.

```
@ /path/to/file.pl
```

## Les références de fichiers
Il y a trois manière de référencé un fichier:

* Avec un chemin relatif (ex: `../../fichier.ext`)

* Avec un chemin absolu (ex: `/chemin/vers/fichier.ext`):
	* Si le fichier contenant la référence est dans un répository git, le chemin partira de la racine de celui-ci.
	* Sinon, le chemin partira de la racine du dossier *home* de l'utilisateur.

* Avec une référence de dossier (ex: `dossier:/chemin/vers/fichier.ext`):
	* Si la référence est exactement **'home'**, le chemin partira de la racine du dossier *home* de l'utilisateur.
	* Sinon, le chemin partira de `home/[dossier]`.

Si à n'importe quelle moment, un fichier n'est pas trouvé dans le home de l'utilisateur, celui-ci sera cherché dans les librairies.

Ainsi, avec une arbre de repertoire comme celui-ci:

```
home/
├──dossier1/
│  ├─ exo1.pl
├──git1/
│  ├─ exo2.pl
│  ├─ feuille.pltp


lib/
├──dossier2/
│  ├─ exo3.pl
```

Il est possible de référencer *exo1.pl* dans *feuille.pltp* de plusieurs manière:

```
@ ../exo1.pl
@ home:/dossier1/exo1.pl
@ dossier1:/exo1.pl
```

De même, il est possible de référencer *exo2.pl* dans *feuille.pltp* de plusieurs manière:

```
@ exo2.pl
@ /exo2.pl
@ home:/git1/exo2.pl
```

Pour référencer *exo3.pl* de lib dans *feuille.pltp*:
```
@ /dossier2/exo3.pl
```

Bien entendu, cela pose plusieurs limitations:
* Ne pas créer de dossier/cloner de dépot s'appelant `home`
* Ne pas avoir de chemin de fichier identique à ceux d'une librairie

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
