# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz
name=Multiplication des chaines
title=La fonction print
tag=print
give=print
template=/python/0PLG/template.pl
text==

Utilisons la fonction **print** pour faire un affichage.

Testez l'affichage deu code suivant:

	print("+" * 3)

en déduire le code pour afficher les lignes suivantes:

	+
	++
	+++
	++++
	+++++

==

code==
print("+"*3)
==

expectedoutput==
+
++
+++
++++
+++++
==

feedback==
Très bien, a chaque fois que vous souhaitez avoir une information pendant l'execution de votre programme il suffit de faire un **print** de
cette information.<br>
Remarque: en python 2 les paranthèses ne sont pas nécessaire, mais garder l'habitude de les utiliser.
==
