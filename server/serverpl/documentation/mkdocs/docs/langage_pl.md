# Le langage de Premier Langage


## Introduction
Sur Premier Langage, les exercices sont écrit à l'aide du langage **pl**.
**pl** est un langage déclaratif très simple permettant d'associer des *valeurs*
à des *clé*s.
La création d'exercice repose donc sur la définition de clés précise qui seront
interprétées par la plateforme afin d'afficher l'exercise.

Bien qu'il soit possible d'écrire des exercices sans aucune connaissance en informatique,
des connaissances en HTML, JavaScript et Python pourront vous permettre de mieux
personnaliser vos exercices.



## Syntaxe
Comme expliqué précédemment, **pl** repose sur l'attribution de valeurs a des clés.
Pour ceci, il existe différents opérateurs permettants d'attribuer une valeur de
différentes façon:

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


* L'opérateur `=%` : Permet d'assigner un dictionnaire à une clé. Le contenu de la
                    clé peut être écris sur plusieurs lignes et doit être au format
                    **json**, par exemple:
```
student =%
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
Faisont des multiplications
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
Faisont des multiplications
et des divisions
```
Vous remarquerez que dans les deux cas, le nouveau contenu est ajouté sur une nouvelle ligne.
___


* L'opérateur `+=@` : Permet d'ajouter le contenu d'un fichier à une clé déjà existante, par exemple,
en supposant que le fichier `exercice3.txt` contient *"et des divisions"* :
```
text == 
Faisont des multiplications
==

text +=@ /python/enonce/exercice3.txt
```
La clé **text** vaut:
```
Faisont des multiplications
et des divisions
```
___


* En plus des clés, il est parfois nécessaire d'ajouter des fichiers à un exercice
  (pour l'évaluation par exemple), ou un exercice à une feuille d'exercice,
  nous utilisons pour cela l'opérateur `@`. La syntaxe correcte est donc
  `@ chemin/vers/fichier.txt [alias]`, l'alias étant optionnel. Exemple:
```
@ /lib/grader/grader.py
@ /lib/utils/sandboxio.py [io.py]
```
Le fichier `grader.py` sera donc ajouté sous le même nom, et le fichier `sandboxio.py`
sera ajouté sous le nom de `io.py`.
___


Les espaces et tabulations entourant les opérateurs ne sont pas important,
`a = b`, `a=b`, `a= b` et `a =b` seront donc tous interprété de la même manière.  
**En revance**, les opérateurs commençant en début de ligne, comme `==` ou `@` 
ne doivent être précédé d'aucun caractères.


Voici un exemple simple d'exercice valide utilisant divers opérateurs:
```
title = Addition et soustraction

text ==
Combien font:
1 + 2 - 3
==

form =@ /lib/form/digit_input.html
grader =@ /lib/grader/math.py
@ /lib/utils/sandboxio.py [io.py]
```



## Espaces de Noms 
Jusque là, l'ensemble de nos valeurs était attribuées à de simples clés.
Il est aussi possible de créer des espaces de noms et d'y attribuer des valeurs
cantonnées à ceux-ci afin d'éviter des conflits entre clés du même nom.  

Par exemple, en supposant que le formulaire d'un exercice ainsi que la fonction
d'évaluation de celui-ci ce servent tout deux d'une clé `answer`. Ce genre de
conflit pourrait être évité si le formulaire et l'évaluation limitaient les clés
demandées à un espaces de nom qui leur sont propre.  
Le formulaire pourrais par exemple utiliser un espace de nom **formvar** et la
fonction d'évaluation un espace de nom **evalvar**. Nous aurions alors les clés
`formvar.answer` et `evalvar.answer`, évitant ainsi tout conflit.

De tels espaces de nom peuvent être utilisé à l'aide du point `.`. En utilisant
les espaces de nom ci-dessus nous aurions donc:
```
formvar.answer = une valeur
evalvar.answer = une autre valeur
```

Plusieurs espaces de nom peuvent être imbriqué les uns dans les autres, jusqu'à
une limite d'environ 900), ceci est donc tout à fait valable:
```
a.b.c.d = 2
a.b.c.d2 = 3
a.b2 = 4

e.f.g.h.i.j.k.l = 5
```


## Les références de fichiers
Comme vue précédemment, certains opérateur se servent de fichier, il est donc important
de savoir comment référencer ces fichiers dans les exercices.

Il y a trois manière de référencé un fichier:

* Avec un chemin relatif à l'exercice (ex: `../../fichier.ext`)

* Avec un chemin absolu (ex: `/chemin/vers/fichier.ext`):
    * Si le fichier contenant la référence est dans un répository git, le chemin partira de la racine de celui-ci.
    * Sinon, le chemin partira de la racine du dossier *home* de l'utilisateur.
    * Enfin, si les fichier n'est pas trouvé, celui-ci sera cherché dans les librairies standard de Premier Langage..
* Avec une référence de dossier (ex: `dossier:/chemin/vers/fichier.ext`):
    * Si la référence est exactement **'home'**, le chemin partira de la racine du dossier *home* de l'utilisateur.
    * Sinon, le chemin partira de `home/[dossier]`.


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


## Écrire un Exercice

Le déroulement d'un exercice sous Premier Langage se compose de 3 parties:

* **[La Construction](../construction/)**, à l'aide d'un script *builder.py* (optionnel)
* **[L'Affichage](../affichage/)**, à l'aide des clés *title*, *author*, *text* et *form*
* **[L'Évaluation](../evaluation/)**, à l'aide d'un script *grader.py*

Il est possible d'utiliser des modules déjà existants dans les librairies standards
de Premier Langage pour chacune de ces parties, mais je vous invite à cliquer sur chacune
pour plus d'information.