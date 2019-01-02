# Le langage de Premier Langage


## Introduction
Sur Premier Langage, les exercices sont écrits à l'aide du langage **pl**.
**pl** est un langage déclaratif très simple permettant d'associer des *valeurs*
à des *clés*.
La création d'exercice repose donc sur la définition de clés précises qui seront
interprétées par la plateforme afin d'afficher l'exercice.

Bien qu'il soit possible d'écrire des exercices sans aucune connaissance en informatique,
des connaissances en HTML, JavaScript et Python pourront vous permettre de mieux
personnaliser vos exercices.



## Syntaxe
Comme expliqué précédemment, **pl** repose sur l'attribution de valeurs a des clés.
Pour ceci, il existe différents opérateurs permettant d'attribuer une valeur de
différentes façons:

* L'opérateur `=` : Permet l'attribution d'une valeur sur une ligne, par exemple:
```
title = Exercice 1
```
___


* L'opérateur `==` : Permet l'attribution d'une valeur sur plusieurs lignes,
                     de la ligne suivant `clé ==` à la ligne précédant le
                     prochain `==`, par exemple:
```
text ==
Voici un énoncé d'exercice
qui peut prendre plusieurs lignes.
==
```
___


* L'opérateur `=@` : Permet d'attribuer le contenu d'un fichier à la clé, par exemple:
```
text =@ /python/enonce/exercice3.txt
```
___


* L'opérateur `%` : Permet d'assigner un dictionnaire à une clé. Le contenu de la
                    clé doit être écris sur une seul ligne et au format **json**,
                    par exemple:
```
student % {"name": "Jake", "age": 20}
```
___


* L'opérateur `%=` : Permet d'assigner un dictionnaire à une clé. Le contenu de la
                    clé peut être écris sur plusieurs lignes et doit être au format
                    **json**, par exemple:
```
student %=
{
    "name": "Jake",
    "age": 20
}
```
___


* L'opérateur `+=` : Permet d'ajouter du contenu à une clé déjà existante,
                     doit être écris sur plusieurs lignes, de la lignes suivant
                     `+=` à la ligne précédant le prochain `==`, par exemple:
```
title = Addition

text == 
Faisons des multiplications
==

title +=
et Soustraction
==

text += 
et des divisions
==
```
La clé **title** vaut maintenant:
```
Addition
et Soustraction
```
et la clé **text** vaut:
```
Faisons des multiplications
et des divisions
```
Vous remarquerez que dans les deux cas, le nouveau contenu est ajouté sur une nouvelle ligne.
___


* L'opérateur `+=@` : Permet d'ajouter le contenu d'un fichier à une clé déjà existante, par exemple,
en supposant que le fichier `exercice3.txt` contient *"et des divisions"* :
```
text == 
Faisons des multiplications
==

text +=@ /python/enonce/exercice3.txt
```
La clé **text** vaut:
```
Faisons des multiplications
et des divisions
```
___


* En plus des clés, il est parfois nécessaire d'ajouter des fichiers à un exercice
  (pour l'évaluation par exemple), ou un exercice à une feuille d'exercice,
  nous utilisons pour cela l'opérateur `@`. La syntaxe correcte est donc
  `@ chemin/vers/fichier.txt [alias]`, l'alias étant optionnel. Exemple:
```
@ /grader/grader.py
@ /utils/sandboxio.py [io.py]
```
Le fichier `grader.py` sera donc ajouté sous le même nom, et le fichier `sandboxio.py`
sera ajouté sous le nom de `io.py`.
___


Les espaces et tabulations entourant les opérateurs ne sont pas important,
`a = b`, `a=b`, `a= b` et `a =b` seront donc tous interprétés de la même manière.  
**En revanche**, les opérateurs commençant en début de ligne, comme `==` ou `@` 
ne doivent être précédé d'aucun caractères.


Voici un exemple simple d'exercice valide utilisant divers opérateurs:
```
title = Addition et soustraction

text ==
Combien font:
1 + 2 - 3
==

form =@ /form/digit_input.html
grader =@ /grader/math.py
@ /utils/sandboxio.py [io.py]
```



## Espaces de Noms 
Jusque là, l'ensemble de nos valeurs était attribué à de simples clés.
Il est aussi possible de créer des espaces de noms et d'y attribuer des valeurs
cantonnées à ceux-ci afin d'éviter des conflits entre clés du même nom.  

Par exemple, en supposant que le formulaire d'un exercice ainsi que la fonction
d'évaluation de celui-ci ce servent tous les deux d'une clé `answer`. Ce genre de
conflit pourrait être évité si le formulaire et l'évaluation limitaient les clés
demandées à un espace de noms qui leur serait propre.  
Le formulaire pourrait par exemple utiliser un espace de noms **formvar** et la
fonction d'évaluation un espace de noms **evalvar**. Nous aurions alors les clés
`formvar.answer` et `evalvar.answer`, évitant ainsi tout conflit.

De tels espaces de noms peuvent être utilisés à l'aide du point `.`. En utilisant
les espaces de nom ci-dessus nous aurions donc:
```
formvar.answer = une valeur
evalvar.answer = une autre valeur
```

Plusieurs espaces de noms peuvent être imbriqués les uns dans les autres (jusqu'à
une limite d'environ 900), ceci ne devrait donc pas vous limiter:
```
a.b.c.d = 2
a.b.c.d2 = 3
a.b2 = 4

e.f.g.h.i.j.k.l = 5
```


## Les références de fichiers
Comme vue précédemment, certains opérateurs se servent de fichiers, il est donc important
de savoir comment référencer ces fichiers dans les exercices.

Il y a trois manière de référencer un fichier:

* Avec un chemin relatif à l'exercice (ex: `../../fichier.ext`)

* Avec un chemin absolu (ex: `/chemin/vers/fichier.ext`):
    * Si le fichier contenant la référence est dans un dépôt git (repository), le chemin partira de la racine de celui-ci.
    * Sinon, le chemin partira de la racine du dossier *home* de l'utilisateur.
    * Enfin, si le fichier n'est pas trouvé, celui-ci sera recherché dans les librairies standards de Premier Langage.
	
* Avec une référence de dossier (ex: `dossier:/chemin/vers/fichier.ext`):
    * Si la référence est exactement **'home'**, le chemin partira de la racine du dossier *home* de l'utilisateur (cette syntaxe est déconseillée).
    * Sinon, le chemin partira de `home/[dossier]`, ce qui permet de faire référence a un fichier dans un autre dépôt git (repository).


Ainsi, avec une arbre de répertoire comme celui-ci:

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

Il est possible de référencer *exo1.pl* à l'intérieur de *feuille.pltp* de plusieurs manières:

```
@ ../exo1.pl
@ home:/dossier1/exo1.pl
@ dossier1:/exo1.pl
```

De même, il est possible de référencer *exo2.pl* à l'intérieur de *feuille.pltp* de plusieurs manières:

```
@ exo2.pl
@ /exo2.pl
@ home:/git1/exo2.pl
```

Pour référencer *exo3.pl* de lib à l'intérieur de *feuille.pltp*:
```
@ /dossier2/exo3.pl
```

Bien entendu, cela impose plusieurs limitations:
* Ne pas créer de dossier/cloner de dépôt s'appelant `home`
* Ne pas avoir de chemin de fichier identique à ceux d'une librairie


## Repository

L'écriture d'exercice ne doit pas être une activité solitaire; nous
vous conseillons d'utiliser un dépôt git pour partager l'écriture de
vos exercices. C'est avec cela en tête que la syntaxe de référence des
fichiers à été conçue et définie.


## Écrire un Exercice

Le déroulement d'un exercice sous Premier Langage se compose de 3 parties:

* **[La Construction](../construction/)**, à l'aide d'un script *builder.py* (optionnel)
* **[L'Affichage](../affichage/)**, à l'aide des clés *title*, *author*, *text* et *form*
* **[L'Évaluation](../evaluation/)**, à l'aide d'un script *grader.py*

Il est possible d'utiliser des modules déjà existants dans les
librairies standards de Premier Langage pour chacune de ces parties,
mais je vous invite à cliquer sur chacune pour plus d'information.
