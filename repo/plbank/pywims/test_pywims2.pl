title=Exo2

template=/pywims/pywims_template.pl

before==
# Ceci est du code Python, et utilise la librairie de maths symbolique 'Sympy'. On peut aussi utiliser les fonctions des librairies python 'random' et aussi 'math' (avec le prefixe math, comme 'math.ceil' ou 'math.sin', pour éviter les conflits avec Sympy)

# définit 'x' comme un symbole
x = symbols('x')

# la fonction py_wims transforme une string en expression mathématique, sans évaluer ou simplifier
nombre = py_wims('atan(sqrt(3))') 
# par contre ici l'expression mathématique est evaluée, donc bonne_reponse_nombre = pi/3
bonne_reponse_nombre = atan(sqrt(3))

question = 'Combien de pieds a une table ?'
choix_reponse = ['Choisir un chiffre', 'Un','Deux','Trois', 'Quatre']
bonne_reponse_question = 'Quatre'

fonction = sin(x**2)
# bonne_reponse_derivée = 2*x*cos(x**2)
bonne_reponse_derivee = diff(fonction, x) 

# Rational est utilisé pour les fractions, 8/3 serait évalué et donnerait un float
expr = x**(Rational(8,3))
valeur = 8
bonne_reponse_formule = expr.subs(x,8)

# code latex du contenu des boutons 'drag'. Le 'r' devant les quotes signale un 'raw string' c'est à dire empêche l'interprétation de \n comme retour chariot, par exemple. Utile pour le Latex!
integrale = r'$$\int_0^1 x^2\,dx$$'
fraction =  r'$$\frac12 - \frac13$$'
limite = r'$$\lim_{x\to +\infty} x\sin(1/x)$$'
determinant = r'$$\det\begin{pmatrix} 1 & 2\\ 1 & 3\end{pmatrix}$$'
# contenu des boutons 'drop'
qui_vaut_1 = r'Poser ici une expression égale à 1'
qui_vaut_tiers = r'Poser ici une expression égale à $1/3$'
==

form==
{# ceci est un template, syntaxe Django. C'est plus ou moins du HTML. #}

{# Le Latex est entre '$' ou '$$'. #}
{# Les variables définies dans le code python 'avant' sont accessibles en les mettant  entre doubles accolades '{{' .#}
<p> A quoi est égale la dérivée de la fonction $ f(x) =  {{ fonction }}$, hein ?  
{# Champ de saisie. 'reponse_derivee' est le nom de la variable qui accueille la saisie. Dans 'style' on peut contrôler les propriétés CSS#}
{% input_text 'reponse_derivee'  style='size :15' %} </p>
{# Autre type de champ de saisie, pour les réponses à choisir dans une liste 'drop-down'. 'choix_reponse' est la liste des choix proposés, 'reponse' = nom de la variable qui accueille le choix#}
<p>  {{ question }} ?  {% input_select 'reponse'  choix_reponse %}  </p>

 <p>Que vaut ${{ nombre }}$, hein  ?  {% input_text 'reponse_nombre'  style='width : 5em' %} </p>
<p> Que vaut ${{ expr }}$ si $x= {{ valeur }} $, hein ? {% input_text 'reponse_formule' style='size : 5' %}  </p>

{# Champ de saisie du type 'drop'. 'cible_1' est le nom du champ.'qui_vaut_1' = contenu affiché #}

{% input_drop 'cible_1' qui_vaut_1 style_boite='width: 150px; height: 80px' %}

{% input_drop 'cible_2' qui_vaut_tiers style_boite='width: 150px; height: 80px' %}

<br>
{# Champ de saisie du type 'drag'. 'destination_integrale' est la variable qui accueille le  nom du lieu où atterrira le champ en question. 'integrale'= contenu affiché dans le champ #}
{% input_drag 'destination_integrale'  integrale style_boite='width: 100px; height: 60px' %}
{% input_drag 'destination_fraction' fraction  style_boite='width: 90px; height: 50px' %}
{% input_drag 'destination_limite' limite style_boite='width: 150px; height: 50px' %}
{% input_drag 'destination_determinant' determinant style_boite='width: 110px; height: 50px' %}
<br>
==

after==
# Code Python, les variables accueillant les réponses du formulaire 'enoncé', ainsi que les variables définies dans 'avant' sont disponibles

# on transforme les réponses (des strings) en expressions math, sans evaluer ou simplifier
reponse_derivee = py_wims(reponse_derivee)
reponse_nombre = py_wims(reponse_nombre)
reponse_formule = py_wims(reponse_formule)
score = 0
# is_equal teste l'égalité d'expressions Sympy, modulo simplifications
if is_equal(bonne_reponse_derivee,  reponse_derivee) == True: 
    score = score +1
    # on déclare que le champ 'reponse_derivee' a reçu une bonne réponse. Il sera affiché en vert
if bonne_reponse_question == reponse : 
    score = score +1
# is_fraction teste si la réponse est bien un nombre divisé par un autre.  Ca évite que 'atan(sqrt(3))' soit considéré comme une bonne réponse
if is_equal(bonne_reponse_nombre, reponse_nombre) and is_fraction(reponse_nombre) : 
    score = score +1
# is_nombre teste si la réponse est bien un nombre. Evite que '8**Rational(8,3)' soit considéré comme une bonne réponse.
if is_equal(bonne_reponse_formule, reponse_formule) and  is_nombre(reponse_formule) :
    score = score +1
    # teste si un des champs 'drag' voulus a atteri sur le champ 'drop' 'cible_1'
if destination_determinant == 'cible_1' : 
    score = score +1
if destination_limite == 'cible_1' : 
    score = score +1
if destination_integrale == 'cible_2': 
    score = score +1

# donne un indice intéressant aux utilisateurs en difficulté
success = False
if score == 0 : feedback = 'Indice: une table a le même nombre de pieds que deux canards'
if score == 1 : feedback = 'N\'importe quoi, comme d\'habituuuudeuuuh.'
# encourage l'utilisateur en piquant son orgueil
if score == 2 : feedback = 'C\'est complètement nul !'
if score == 3 : feedback = 'Une bonne réponse sur deux, le hasard fait bien les choses !'
if score == 4 : feedback = 'Facile, avec une table à côté.'
if score == 5 : feedback = 'Pas si pire !!'
if score == 6 : feedback = 'Bravo. Il est temps de reprendre l\'activité pour laquelle vous êtes rémunéré.'
if score > 3: success = True
==

feedback==
{# à nouveau un template, syntaxe Django. Les variables définies dans 'avant ou 'après' et celles des champs du formulaire sont accessibles entre doubles accolades #}

Vous avez {{score}} bonne(s) réponse(s). {{feedback}}
==
