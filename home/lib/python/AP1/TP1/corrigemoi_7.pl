author=Dominique Revuz

tag=error
title= Corrige Moi !
name= Trouvez l'erreur
template=/python/0PLG/template.pl
text==

Le programme python si dessous contient une erreur corrigez la pour passer à l'exercice suivant.

==

code==
a=Pomme
print("je mange une ",a)
==

expectedoutput=je mange une Pomme


compilehelp==
C'est une erreur classique quand un identifiant est mal orthographié.
Ici Pomme ne devrai pas être interprété comme un identifant mais comme une chaine.
donc le bon code est 
a="Pomme"

Avec les identifiants contenant des Majuscules ou des pluriels il est facile de ce tromper.
Entre :
listeVide listesVide listesvide etc.
soyez vigilant et attendez vous a ce type d'erreur.
==

