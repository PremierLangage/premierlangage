# Feuille d'Exercices

Une feuille d'exercice (ou **PLTP**) est un ensemble d'exercice (PL).

La syntaxe utilisé pour l'écriture de celles-ci est semblable à celle d'écriture
des exercice (voir [Le langage de Premier Langage](../langage_pl/)).


Une feuille d'exercice est composé principalement de 4 clés:

* **title** : Le titre de la feuille
* **author** : L'auteur de la feuille (optionnel)
* **introduction** : Semblable à **text** pour les exercices, c'est un énoncé
                     visible par les élèves.
* **teacher** : Texte visible seulement par les enseignants (optionnel)
___


## *text* et *teacher*
Les clés **text** et **teacher** supporte le *HTML* ainsi que le [Markdown](https://fr.wikipedia.org/wiki/Markdown),
c'est dans cette clé que l'énoncé de l'exercice doit être écris. Il est possible de plus
d'afficher n'importe qu'elle variable de l'exercice à l'aide de la syntaxe `{% templatetag openvariable %} var {% templatetag closevariable %}`,
par exemple:
```
introduction = Voici **un cour** de <i>{% templatetag openvariable %} course {% templatetag closevariable %}</i>

course = Mathématiques
```
A l'affichage, après traitement du markdown, du HTML et des variables le texte 
suivant sera affiché:  
> Voici **un cours** de *Mathématiques*
___


## Ajouter des exercices

L'ajout d'exercice se fait grâce à l'opérateur `@` (voir [Syntaxe de PL](../langage_pl/#les-references-de-fichiers))


## Example

```
title = Additions Aléatoires

@ /demo/random_add.pl
@ random_add_eval_func.pl

introduction==
Des <i>additions</i> **aléatoires**
==

teacher = Un petit texte pour les enseignants
```