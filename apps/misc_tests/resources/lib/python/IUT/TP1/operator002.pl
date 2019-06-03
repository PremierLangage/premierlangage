# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Calcul d'intérêt
title= Operateurs mutliplicatifs 

tag= print|input|operator.mod|operator.floordiv
template=/python/0PLG/template
text==

# Operator ** / * + - 

Vous devez emprunter pour construire votre projet de vie (maison voiture etc.).

Vous voulez savoir l'importance du taux d'interêt et du nombre d'années sur vos mensualités voici la formule utilisée par les banques pour calculer le montant d'une mensualité:

    $$\frac{k*\frac{t}{12}}{1-\left ( 1+\frac{t}{12} \right )^{-n}}$$


En utilisant cette formule calculez et affichez la mensualité si le capital emprunté est k=150000, la durée de l'emprunt est n=144 mois (douze ans), et  le taux d'intéret est t=0.023 soit 2,3 pourcent.


Opérateur x ** y l'exponentiation  x à la puissance y.

Opérateur x / y la vrai division  x divisé par y.

Opérateur x * y la multiplication x multiplier par y.

Pensez à la précédence des opérateurs en utilisant des paranthèses pour être sur de l'ordre des calculs.

==

code==
k=150000
n=144
t=0.023
m= ? # Ecrivez la formule en python

print("Montant de la mensualité=",int(m))

# Fin du code, n'écrivez pas de code après cette ligne s'il vous plait !
# L'équipe PL
==

# 



expectedoutput==
Montant de la mensualité= 1193
==

