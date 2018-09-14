
## Ecrire un pl utilisant wims

Il s'agit d'un pl normal utilisant un certain template permettant de créer des exercices WIMS sur Premier Langage.
Ici on a besion de WIMS. Les balises **title** et **extends** avec le bon template est obligatoire.
Il y a 3 manières différentes de créer un exercice WIMS.

### WIMS module

Les wims modules sont des exercices publiés disponibles sur la plate-forme WIMS. La seule manière de créer un exercice utilisant les modules est la suivante :

	
	title=Title
	extends=template.pl
	url = https://wims.u-pem.fr/wims.cgi?session=BZE547E1EF.2&lang=fr&cmd=new&module=H3%2Fgeometry%2Frotshoot.fr&level=3&shoots=3

Il suffit de copier/coller le lien de l'exercice une fois configuré dans WIMS puis de le mettre dans la balise url et vous avez votre exercice utilisant un module WIMS.
Cette syntaxe sert uniquement pour les modules WIMS les liens appartenant à une classe ne fonctionneront pas.
La balise **extends** sert à aller chercher la template WIMS obligatoire pour les pl utilisant WIMS.

### WIMS exercice créé manuellement

Il vous suffit d'aller sur WIMS de créer votre exercice et de récupérer le code source de l'exercice.
Vous aurez besoin d'une balise **nameoef** dans laquelle vous entrerez le nom de votre exercice et d'une balise **oef** dans laquelle il faut copier/coller le code source de votre exercice.

	title=Title
	extends=template.pl
	nameoef=name
	oef==
		/*--- CODE SOURCE EXO WIMS ---*/
	==

La troisième manière est presque identique, au lieu de copier/coller le code source, il suffit de le télécharger, de l'upload sur Premier Langage et de mettre le chemin du fichier à la place de la balise **oef** comme ceci :

	title=Title
	extends=template.pl
	nameoef=name
	@ chemin relatif du code source [nameoef]

