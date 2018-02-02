# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=egal.pl
title= Les déclarations de variables multiline
tog=multilines



# n'oubliez pas d'indenter votre code dans le texte de l'exercice pour que cela soit interprété comme du code.
text==

# Mutlilines

Une déclaration multiline : 

Nous allons commencer par un exercice simple qui permet de poser une question avec une réponse fermée (Vraie, Fausse).

Vous devez pour commencer créer une balise **text** soit placer dans l'éditeur la ligne suivante :

	text=Les moutons sont des animaux à poils laineux ?

Vous avec besoin de précisez à pl le type d'exercice que vous souhaiter créer.

	type=truefalse

Si vous lancer valider cet exercice vous aurez un message d'erreur.
Validez l'exercice.

==
code==
# le programme de votre exercice est ici

==


type=direct

evaluator==
## evaluator PL
# doit vérifier que le pl est correct pour checkpl avec mode error no-debug
# c'est à dire que l'on signal les erreurs de syntaxe et les erreurs de type et de balises.
# par contre pas de fabrication d'un pl ni de test sandbox
# lancer pysrc/pleditor 


# si l'evaluator est correct on fabrique un exo temporaire que l'on lance
# avec la stratégie test/monotest qui permet de tester un exercice.
#
#  il me faut une api pour faire cela
#
import serverpl.pysrc.plparser
	def evaluate(dico,studentanswer):
		dico = serverpl.pysrc.plparser._parseOneFileAsString(studentanwser)	
		if not "title" in dico:
			return False," Votre exercice n'a pas de balise *title* obligatoire\n Oui je sais je ne vous l'avais pas indiquée\n mais c'est pour les bon élèves parmis vous pour qu'ils constatent ce qui se passe quand on échoue à un exercice\n Quels sont les messages d'erreur du système.\n"
		for key in ["type","text","title"]
			if not key in dico :
				return False," Votre exercice n'a pas de balise *"+key+"* obligatoire"
		return True," OK touts les balise demandés sont présentes"
==






