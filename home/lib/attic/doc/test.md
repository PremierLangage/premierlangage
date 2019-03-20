Module de Test de Pl Executor 
Dominique Revuz


# Vérification du use case de base


## Le fichier "test_exo.pl" 

le resultat sans modification d'une évaluation du code donne 
le json suivant :

'{"success": true, "other": "", "feedback": "feedback OK", "execution": "OK", "errormessages": ""}'



## le fichier "testlink.pl"

Vérification de l'accès au fichier avec un grader externe : graderOK.py
qui retourne le json suivant quelque soit le fichier student.py.

'{"success": true, "other": "", "feedback": "feedback OK", "execution": "OK", "errormessages": ""}'

Ceci est pour vérifier le fonctionnement du Lien
grader=@graderOK.py

 **fonctionne au 2/2/2016 ** 


## le fichier "testtemplate.pl"

Verification de la commande template on charge le test précédent a travers une instruction template.

