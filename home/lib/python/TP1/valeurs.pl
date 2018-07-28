# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Quelques Constantes
title= Calculs avec des constantes   # N'oubliez pas de remplir ce champs svp
tag=constant|print|int # N'oubliez pas de remplir ce champs svp
#template=/python/exemple/autogradertemplate
template=/python/0PLG/template
text==

Ouvrez un terminal (vu en tp2 ISI),
dans le terminal lancer la commande //python3//.

Vous obtenez quelque chose comme :
	Python 3.5.1 |Anaconda 2.4.1 (x86_64)| (default, Dec  7 2015, 11:24:55) 
	[GCC 4.2.1 (Apple Inc. build 5577)] on darwin
	Type "help", "copyright", "credits" or "license" for more information.
	>>> 

Les trois caractères //>>>// veullent sont une invite de commande il ne vous reste plus qu'a interagir avec ce python.



Dans cet interpréteur python essayez le code suivant :


	PI=3.14156 # Une constante connue   
	km= 10**3 # un kilometre c'est 1000 metres
	a=1 000 000 000 # erreur de syntaxe
	a=1.000.000.000 # erreur de syntaxe
	a=1,000,000,000 # 4 valeurs !!!!
	a
	a=10**9
	a
	a=10^9 
	a # surprise 


Puis revenez dans le elearning et répondez à l'exercice:

Sachant que l'unité de distance la plus petite est 
	$$ 1,616199 10^{−35}$$ metres soit la Longueur de Planck
	et que $$1,3 10^{28}$$ metres est la distance du plus lointain quasar.  

en calculant la distance de ce quasar en longueurs de Planck et en affichant celle ci la sur une ligne en notation mathématique (affichage par défaut). Puis sous forme d'un entier en utilisant:


	print(int(ladistance))


==

expectedoutput==
8.04356394231156e+62
804356394231156020197466798869532453036311623701109748489256960
==



