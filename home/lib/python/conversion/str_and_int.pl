# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
title=Conversion des str et des int
tag=input|int # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template.pl
give=input
text==

Le code suivant met en valeur la différence entre deux interprétation d'un mot écrit avec des chiffres.

Devinez les affichages pour l'entrée 1234 . 
==

code==
# ne modifiez pas le code suivant 
r = input()
print(r + r)
n = int(r)
print(n + n)
==



inputgenerator==
print(1234)
==


expectedoutput==
12341234
2468
==


feedback==
Comme vous pouvez le voir sur cet exemple le type d'une variable modifie son comportement.  
La fonction prédéfinie input retourne toujours (en python3) une chaine de caractère c'est au programmeur de décider en quoi il faut convertir cette chaine.


==
locked=1 # je voudrais bien que le code soit vérouillé 



