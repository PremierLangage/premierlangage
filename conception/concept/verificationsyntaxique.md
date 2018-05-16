# La verification syntaxique

La vérification syntaxique est un problème qui doit être traité de façon la plus large possible, en effet il est important pour le programmeur d'exercice de comprendre ou est l'erreur qui fait que son exercice ne marche pas.

Les erreurs possibles :

1) Syntaxe PL non respectée: pas de préview (ni de chargement de l'exercice)
	exemples: pas de == pour finir un bloc, du code qui traine entre deux balises etc. Avec l'editeur de champs (qui permet d'editer les variables/balises une a une ce type d'erreur ne peux pas avoir lieux).

2) Erreur de Syntaxe du python dans une des balises de code.
 -> les balises de code sont: build,before,evaluate,
	(TODO: il serait bien que la liste soit stockée quelque part).
 -> pendant l'execution d'un exercice:
	la balise  **before** est exécuté pour préparer le dictionnaire qui va servire à l'affichage et la correction, il faut si il y a une exception dans ce code, signaler à l'utilisateur que c'est dans cette balise que ce trouve l'erreur. Et il faut calculer la ligne ou a lieux l'erreur et afficher la ligne et la précédente.
	la balise **evaluator** est éxécutée pour évaluer la réponse de l'élève. Même problèmatique il faut signaler que l'erreur est dans évaluator et donner l'exception et la ligne (recalculé) et la précédente.

3) Erreur de Syntaxe et ou d'execution de la Sandbox, le retour de la sandbox est invalide (genre problème json) il faut que l'affichage soit clair sur ce le fait que l'erreur à lieux dans la communication avec la sandbox. 

4) Erreur  de Syntaxe ou d'exécution dans le code de l'étudiant. C'est pour ces pieds mais il faut lui remonter l'information mais c'est au gradeur de le faire dans le champs feedback de la réponse de la sandbox.


 
