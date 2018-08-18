# Écriture d'un Formulaire
Une partie importante de l'exercice est le formulaire. Cette partie permet de définir la manière de répondre de l'utilisateur (champs de saisie, boutons radios, éditeur...). Bien que divers formulaires existent déjà, il se peut qu'il ne vous conviennent pas et que vous souhaitez en écrire un personalisé.

Un formulaire peut être relativement simple, un champs texte, par exemple:
```html
form==
<span class="input-group-addon">Réponse</span>
<input id="form_txt_answer" type="text" class="form-control" placeholder="" required>
==
```
Ou bien plus compliqué, pour une question à champs multiples:
<script src="https://gist.github.com/qcoumes/1360bbee7d782e980e4918b0b882e022.js"></script>


Comme vous pouvez le voir, des connaissances de bases en **HTML** sont nécessaires, je vous invites à vous rendre sur la page correpsondante de [w3schools](https://www.w3schools.com/html/html_forms.asp) si besoin d'une piqûre de rappel.

Pour des formulaire plus compliqués, des connaissances sur les **gabarits Django** (**jinja2** simplifié) seront aussi nécessaire.

Enfin, si l'écriture d'une [fonction build](build.md) est nécessaire, des connaissances en Python 3 seront requis.
Ce guide vous guidera pas-à-pas dans l'écriture d'un formulaire personnalisé.

## Les Bases
Un formulaire est déclaré dans un PL grâce à la clé *form*. Il doit être écrit en *html*, et peut, si besoin, se servir de css/js externe. 
Ce formulaire ne doit contenir ni de balises **<form\>**, ni de bouton **submit**, ceux-ci étant ajouté après par la plateforme.

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

Voir [les types d'inputs sur w3schools](https://www.w3schools.com/html/html_form_input_types.asp)

Pour que la plateform accepte les réponses de ses *inputs*, ils doivent posséder une **ID** de la forme: **form_XXX_YYYYY**
Où *xxx* est le type d'input sur 3 lettres (txt, int, flt, etc...; cette carastéristique n'est pas encore implémentée et importe donc peu pour le moment) et *yyyyy* le nom de l'*input*

Le champs name n'est donc requis pour aucun *input*, **excepté** celui de type *radio*, n'autorisant ainsi seulement une case d'un groupe de case radio portant le même nom d'être cochée.

Lors de la validation du formulaire par l'élève, la plateforme créera un dictionnaire contenant chaque *input* en tant que clés et la réponse de l'utilisateur en tant que valeur. Par exemple avec le formulaire suivant:
```html
form==
<input id="form_txt_answer1" type="text" class="form-control" placeholder="" required>
<input id="form_txt_answer2" type="text" class="form-control" placeholder="" required>
==
```
Si l'élève réponds respectivement "Oui" et "Pomme", la plateforme enverra à la fonction d'évaluation:
```python
{
    "answer1": "Oui"
    "answer2": "Pomme"
}
```
Tout les *inputs* retourne un seul élément, que ce soit un mot, une date (dd-mm-yyyy) une couleur (#XXXXXX), etc...
La seul exception est le type **checkbox**, celui-ci renverra une liste associée au nom de l'input:
```html
<input type="checkbox" id="form_txt_langage" value="c"> C
<input type="checkbox" id="form_txt_langage" value="python"> Python
<input type="checkbox" id="form_txt_langage" value="caml"> Caml
<input type="checkbox" id="form_txt_langage" value="java"> Java
```
Enverra, si l'utilisateur choisi C, Python et Java:
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

## Formulaire Réutilisable
Jusqu'ici, la plupart des formulaires montrés en exemple n'étaient utilisables qu'avec un seul exercice, la valeur des réponses étant rentré en dur. Afin de créer des formulaire réutilisable (ce qui est bien évidemment recommandé), il est nécessaire de connaitre le **Django Template Language** (*Langage de Gabarit Django*), je vous invite pour cela à jeter un coup d'oeil à ces deux pages:
* [Gabarits Django](https://docs.djangoproject.com/fr/1.10/topics/templates/#variables) Pour comprendre l'utilisation des variables.
* [Référence des Balises Django](https://docs.djangoproject.com/fr/1.10/ref/templates/builtins/#ref-templates-builtins-tags) Pour comprendre l'utilisation des balises *if*, *else* et *for*.

Ce langage permet donc d'utiliser les variables du *contexte django* pour remplir votre formulaire html. Cela tombe très bien car **toutes** les variables déclarées dans votre PL, ainsi que celles créées par le *build*, si déclarée, se trouve dans le contexte. Il est donc possible de remplir un formulaire grâce au variables déclaré dans un PL. Pour bien comprendre, voici un exemple de formulaire permettant de choisir entre deux réponses:
<script src="https://gist.github.com/qcoumes/50e42f38de347e9c983039d48c96d187.js"></script>


Dans cet exemple, les mots *{{answer1}}* et  *{{answer2}}* seront remplacés par les valeurs des clés *answer1* et *answer2* déclaré dans votre PL. Par exemple avec ce PL:
```
title=Couleur
text==
Quelle couleur préférez-vous entre:
* Le bleu?
* Le rouge?
==
answer1=rouge
answer2=bleu
form=@chemin/vers/votre/formulaire.pl
```
Le formulaire devient:
```html
<input id="form_txt_answer" type="radio" value="rouge" name="answer" required> rouge
<input id="form_txt_answer" type="radio" value="bleu" name="answer"> bleu
```
Ce formulaire permet donc maintenant de répondre à n'importe quelle question demandant un choix entre **deux réponses**.

Deux réponses ? Voilà qui limite bien ce formulaire, améliorons-le afin qu'il puisse maintenant accepter un nombre non indéfinis de réponses.
Nous aurons pour cela besoin d'une [fonction build](build.md).

Supposons que nous souhaitons pouvoir rentrer un nombre infinis de réponses grâce à des champs *answerX* où *X* représente un nombre entier, il nous dans un premier temps mettre l'ensemble de ces réponses dans une liste, c'est là qu'intervient la fonction build:
```python
n=1
answer=list()
for i in range(100):
    try:
        answer.append(locals()['answer'+str(i)])
    except KeyError:
        break
```
Cette fonction permet donc d'ajouter dans le contexte une liste nommer *answer* contenant chacune des réponses, ils nous suffit alors de boucler dessus dans notre formulaire:
<script src="https://gist.github.com/qcoumes/0a8a95d7672c090139574681f6db1d90.js"></script>

Voilà maintenant un formulaire qui permet de répondre à une question demandant de choisir une réponse sur X réponses proposées.
