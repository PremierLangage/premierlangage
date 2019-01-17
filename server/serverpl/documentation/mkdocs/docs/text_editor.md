# Éditeur de texte

## Résumé

* **Inclusion:** `form =@ /form/text_editor.html`

* **ID:** L'ID par défaut est `form_answer`. Celle-ci peut être modifiée (voir [Personnalisation de l'éditeur](#personnalisation-de-lediteur))
  Il faut donc accéder a la clé `answer` du dictionnaire de réponses pour récupérer
  la réponse.

* **Clés utilisées**: `form, editor`

* **Utilisé par les templates:**
    * [Java](../template_java/)
___



## Informations

Ce formulaire fournit un éditeur de texte utilisant le module JavaScript
[Ace](https://ace.c9.io/).

Celui-ci est utile pour tout exercices de programmation nécessitant à l'utilisateur
d'écrire du code.

De plus, l'éditeur est personnalisable en fonction des besoins de l'exercices.
___



## Personnalisation de l'éditeur

Les paramètres de l'éditeur peut être modifié grâce à certaines clés dans l'espace
de nom `editor` (voir [espaces de noms](../langage_pl/#espaces-de-noms)).

Il n'est pas possible de modifier le thème utilisé. Celui-ci peut être en
revanche modifié par les utilisateurs dans les paramètres de leur profil.


* `editor.id`: ID de l'éditeur, sans le préfixe `form_`, `answer` par défaut.
               Exemple: `editor.id = editor`.

* `editor.language`: Langage utilisé pour la colorisation syntaxique,
                     voir [les langages disponibles](../liste_langages/),
                     `python` par défaut. Exemple : `editor.language = c_cpp`.

* `editor.fontsize`: Taille en pixel de la police, **12** par défaut.
                     Exemple : `editor.fontsize = 20`

* `editor.height` : Hauteur en pixel de l'éditeur. Une ligne correspond à peu
                    près à `editor.fontsize + 3.5`. **400** par défaut soit
                    `400/(12+3.5) = 26` lignes avec `editor.fontsize` par défaut.
                    À noter que l'éditeur est redimensionnable sur *x* et *y* en
                    étirant l'éditeur depuis l'angle inférieur droit.
                    Exemple : `editor.height = 200`.

* `editor.spacetab`: Utilise des espaces à la place de tabulations si la valeur
                     est différente de `false` (insensible à la casse).
                     `true` par défaut. Exemple : `editor.spacetab = False`.

* `editor.tabsize`: Taille des tabulations (nombre d'espaces),
                    **4** par défaut. Exemple : `editor.tabsize = 8`.


* `editor.indentguide`: Affiche les guides d'indentation si la valeur
                        est différente de `false` (insensible à la casse).
                       `true` par défaut. Exemple : `editor.indentguide = False`.

* `editor.showinvisible`: Affiche les caractères invisible (telle que
                          les espaces et les tabulations) si la valeur
                          est différente de `false` (insensible à la casse).
                         `true` par défaut. Exemple : `editor.showinvisible = False`.
___


## Valeur par défaut
Il est possible de fournir une valeur par défaut a l'éditeur grâce
à la clé `editor.code`.

**Note :** La taille de l'indentation de la balise `editor.code` peut être modifié si
`editor.tabsize` est différent.


## Exemple

Avec le code PL ci-dessous:
```
form =@ /form/text_editor.html

editor.fontsize = 14
editor.showinvisible = False
editor.height = 330
editor.tabsize = 2
editor.language = c_cpp

editor.code ==
/* add.c
 * a simple C program
 */
  
#include <stdio.h>
#define LAST 10
  
int main() {
    int i, sum = 0;
   
    for ( i = 1; i <= LAST; i++ ) {
      sum += i;
    } /*-for-*/
    printf("sum = %d\n", sum);

    return 0;
}
==
```

On obtiens:
![text_editor_example]({% static 'documentation/img/text_editor_example.png' %})