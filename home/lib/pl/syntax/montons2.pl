# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=montons2.pl
title= Une question vraie fausse.
tog=simples



# n'oubliez pas d'indenter votre code dans le texte de l'exercice pour que cela soit interprété comme du code.
text==

# La réponse
Continuons avec notre question avec une réponse fermée (Vraie, Fausse). Copiez coller le texte suivant :

	type=truefalse
	title=Moutons ?
	text==
	Les moutons sont des animaux à poils laineux ?
	==

Il nous manque le moyen d'évaluer l'exercice. Pour cela nous allons ajouter une balise:

	answer=True 


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
			return False," Votre exercice n'a pas de balise *title* obligatoire\n Oui je sais je ne vous l'avais pas indiquée\n mais c'est pour les bon élèves qu'ils constate ce qui se passe quand on échoue à un exercice\n"
		for key in ["type","text","title","answer"]:
			if not key in dico :
				return False," Votre exercice n'a pas de balise *"+key+"* obligatoire"


		return True," OK toutes les balises demandées sont présentes"
		
==






