author=Dominique Revuz

clog=error|quoting|print


title= Corrige Moi !
name= Trouvez l'erreur 5
template=/python/0PLG/template.pl
text==

Le programme python si dessous contient une erreur corrigez la pour passer à l'exercice suivant.
Texte attendu :

	Bonjour je m'appel Jules et je suis heureux de vous acceuillir ici !

==

code==
print('Bonjour je m'appel Jules et je suis heureux de vous acceuillir ici !')
==

expectedoutput=Bonjour je m'appel Jules et je suis heureux de vous acceuillir ici !


compilehelp==
Dans cet exemple nous cherchons a écrire un texte pour cela nous avons placé le texte entre des caractères ' apostrophe.
Malheureusement pour nous c'est un mauvais choix car nous souhaitons avoir un apostrophe dans notre texte.
D'ou l'erreur.

Deux possibilités pour corriger soit placer votre texte ente guillemets ".
soit placer un anti-slash avant l'apostrophe \' .
==

