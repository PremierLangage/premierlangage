# Affichage et Formulaire
L'affichage d'un exercice se fait à l'aide de 4 clés:
* **title** : Le titre de l'exercice
* **author** : L'auteur de l'exercice (optionnel)
* **text** : L'énoncé de l'exercice
* **form** : Le formulaire de l'exercice

Les clés sont affichées suivant cette disposition:
![write_display_pl]({% static 'documentation/img/write_pl_display.png' %})



## text
La clé **text** supporte le *HTML* ainsi que le [Markdown](https://fr.wikipedia.org/wiki/Markdown);
c'est dans cette clé que l'énoncé de l'exercice doit être écrit. Il est possible de plus
d'afficher n'importe qu'elle variable de l'exercice à l'aide de la syntaxe `{% templatetag openvariable %} var {% templatetag closevariable %}`,
par exemple:
```
text = Quel est le **résultat** de: <i>{% templatetag openvariable %} op1 {% templatetag closevariable %}</i> + <i>{% templatetag openvariable %} op2 {% templatetag closevariable %}</i> ?

op1 = 10
op2 = 20
```
A l'affichage, après traitement du markdown, du HTML et des variables, le texte 
suivant sera affiché:  
> Quel est le **résultat** de: *10* + *20* ?



## form
La clé **form** ne supporte que le HTML; elle permet de définir la manière de
répondre de l'utilisateur (champs de saisie, boutons radios, éditeur de text...).

Divers formulaires existent déjà et peuvent être ajouté grâce à l'opérateur `@=`:
```
form =@ /form/text_editor.html
```
Vous pouvez trouver une liste de ces formulaires dans l'onglet ***Formulaires***
de la documentation.


Il se peut que les formulaires existants ne vous conviennent pas et que vous
souhaitiez en écrire un personnalisé. Pour cela, des connaissances de bases en **HTML**
sont nécessaires; je vous invite à vous rendre sur la page correpsondante
de [w3schools](https://www.w3schools.com/html/html_forms.asp) si besoin d'une
piqûre de rappel.

**form** est donc composé d'un ensemble de balise HTML `<input>`. Afin d'être interprétées et prise en compte 
par Premier Langage, ces balises doivent chacune avoir OBLIGATOIREMENT un ID unique de la forme
`form_[id]`, où **id** sera la clé associée à la réponse lors de l'évaluation
de l'exercice. Le champs **name** n'est donc requis pour aucun `<input>`,
excepté celui de type *radio*, n'autorisant ainsi seulement une seule case
d'un groupe de case radio avec le même **name** à être cochée, votre form devra vérifier cette condition.

La clé ne doit contenir ni balise `<form></form>`, ni bouton de type **submit**; ceux-ci sont automatiquement ajoutés dans le code de la page html.

Un formulaire peut être relativement simple, avec par exemple juste un champs texte:
```html
form = <input id="form_answer" type="text" required>
```

Dans cet exemple vous obtiendrez dans le fichier `answer.json` un dictionnaire avec une seul clé "answer" ayant pour valeur la réponse de l'utilisateur.


Il est possible d'utiliser n'importe quelle type d'*input* accépté par *HTML5*, **excepté**  ***submit***:
* text
* radio
* checkbox
* button
* color
* date
* datetime-local
* email
* month
* number
* range
* search
* tel
* time
* url
* week

Voir [les types d'inputs sur w3schools](https://www.w3schools.com/html/html_form_input_types.asp).


Lors de la validation du formulaire par l'élève, la plateforme créera un dictionnaire
contenant chaque *input* en tant que clé et la réponse de l'utilisateur en tant que valeur.
Par exemple, avec le formulaire suivant:
```html
form==
<input id="form_answer1" type="text" required>
<input id="form_answer2" type="text" required>
==
```
si l'élève réponds respectivement "Oui" et "Pomme", la plateforme enverra à la
fonction d'évaluation:
```python
{
    "answer1": "Oui"
    "answer2": "Pomme"
}
```
Tout les *inputs* renvoient un seul élément, que ce soit un mot, une date (dd-mm-yyyy),
une couleur (#XXXXXX), etc. La seule exception est le type **checkbox**:
celui-ci renverra une liste associée au nom de l'input. Par exemple,
```html
form==
<input type="checkbox" id="form_langage" value="c"> C
<input type="checkbox" id="form_langage" value="python"> Python
<input type="checkbox" id="form_langage" value="caml"> Caml
<input type="checkbox" id="form_langage" value="java"> Java
==
```
Renverra, si l'utilisateur choisi C, Python et Java:
```python
{
    "langage": ["c", "python", "java",]
}
```
Si l'utilisateur choisi juste C:
```python
{
    "langage": ["c"]
}
```

De la même manière que pour la clé **text**, il est possible d'utiliser n'importe
quelle variable de l'exercice dans le formulaire avec la syntaxe `{% templatetag openvariable %} var {% templatetag closevariable %}`:
```html
l1 = C
l2 = Python
l3 = Caml

form==
<input type="checkbox" id="form_langage" value="{% templatetag openvariable %} l1 {% templatetag closevariable %}"> {% templatetag openvariable %} l1 {% templatetag closevariable %}
<input type="checkbox" id="form_langage" value="{% templatetag openvariable %} l2 {% templatetag closevariable %}"> {% templatetag openvariable %} l2 {% templatetag closevariable %}
<input type="checkbox" id="form_langage" value="{% templatetag openvariable %} l3 {% templatetag closevariable %}"> {% templatetag openvariable %} l3 {% templatetag closevariable %}
==
```
___

Afin de créer des formulaires réutilisables (ce qui est bien évidemment recommandé),
il est nécessaire de connaitre le **Django Template Language** (*Langage de Gabarit Django*);
je vous invite pour cela à jeter un coup d'oeil à ces deux pages:
* [Gabarits Django](https://docs.djangoproject.com/fr/2.0/topics/templates/#variables)
  Pour comprendre l'utilisation des variables.
* [Référence des Balises Django](https://docs.djangoproject.com/fr/2.0/ref/templates/builtins/#ref-templates-builtins-tags)
  Pour comprendre l'utilisation des balises *if*, *else* et *for*.

En suposant que la partie **[construction](../construction/)** de l'exercice
crée une liste appelée **list_answer**, il est possible, grâce au **for**, de
créer rapidement un bouton radio pour chaque réponse, quel que soit le nombre de réponses:
```
form==
{% for answer in list_answer %}
    <input type="radio" id="form_langage" name="name" value="{% templatetag openvariable %} answer {% templatetag closevariable %}"> {% templatetag openvariable %} answer {% templatetag closevariable %}
{% endfor %}
==
```

Nous venons tout juste de déclarer un formulaire réutilisable par n'importe quel
exercice déclarant une telle liste de réponse.



* **[La Construction](../construction/)**, à l'aide d'un script *builder.py* (optionnel)
* **[L'Évaluation](../evaluation/)**, à l'aide d'un script *grader.py*
