author=Dominique Revuz

clog=error|quoting

title= Corrige Moi !
name= Trouvez l'erreur 6
template=/python/0PLG/template.pl
text==

Le programme python suivant ne fait pas ce qu'il faut corrigez le pour qu'il affiche :

	'!%@& ",

c'est à dire 

	Apostrophe Guillemet Exclamation Pourcent Arrobe Perluète Espace  Guillemet Virgule  

Remarques pour les esthètes: Arrobe Croisillon et Perluète ont d'autre noms valides.

<A href="http://www.unicode.org/fr"> Tout sur les caractères Unicode </A>

==

code==
print '!%& ",
==

expectedoutput='!%& ",


compilehelp==
Essaillez entre deux groupes de 3 guillemets """
Ou de 3 aspostrophes '''
==
