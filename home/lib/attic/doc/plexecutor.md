Spécification du plexecutor
D Revuz

# pour les spécifications d'appel voir le wiki.


====== Goal ======

===== Steps of executor sandbox activity =====


  - Writes in ///compile/code/student.py//
  - Change directory to ///compile/code///


==== InputCreation ====

  - if  'inputgenerator.py' exist 
  - Execute ''python3 inputgenerator.py'' in a container 
  - if error create a platform error
  - Else
  - Get //stdout// put it in file ''input''

==== Execute ====

  - Execute ''python3 student.py < input '' in a container.
  - Get //stdout// and //stderr// exit status Convert to JSON put in file ''student.json''
 
  - if ''soluce.py'' exist
  - Execute ''python3 soluce.py < input'' in a container.
  - Get //stdout// and //stderr// exit status Convert to JSON put in file ''soluce.json''


==== Grade ====

  - Execute ''python3 grader.py'' in a container.
    - If ''python3 tester.py'' fails, ''exit''
    - Else execute //grader.py//.
  - Get //stdout// && //stderr//.
  - Display //stdout// and //stderr// to student.
  - OK if //stderr// is empty

====== Return Values ======

The return value of plexecutor is a JSON file.


====== Spécification des valeurs de retour de plexecutor ======


plexecutor fournis à plactivity (ou autre) un fichier au format json: executor.json 

ce fichier est construit avec l'exécution de python3 grader.py (dans le bon répertoire docker etc etc) 
ce grader.py à une sortie standard qui est le fichier décrit comme grader.json plus bas.

Premièrement gestion des erreurs de la plateforme :
- problemes avec docker 
- problemes avec l'exécutable python3   
- problemes avec l'exécution du grader (si le grader déconne c'est une erreur plateforme)
- problemes autres ? (Sylvestre a toi de jouer ici)
  + Fichier manquant (student, grader...)
  + problème lors de l'exécution de l'un des scripts
  + erreur dans le json généré

executor.json
{
  "platform_error" : null,
  "grade": grade.json,
  "code": codedeletudiant
}

==== Le format de platform_error ====

Les erreurs de la plateforme seront stockées en json dans le champ "platform_error" sous la forme d'un tableau. Ce tableau contiendra une entrée par exécution ayant levé une erreur sur la sortie standard ou un code de retour différent de 0. Les différentes entrées seront au format suivant : 

   {
     "file": "inputgenerator.py",
     "stdout": "stdout",
     "stderr": "stderr",
     "exit_code": 42
   }


====== le format grade.json ======


Le fichier grade.json contient 

grader.json 
{
	"success": "True or False", 
	"errormessages" : "a afficher dans plactivity avec la couleur erreur",
	"execution": "a afficher dans plactivity avec la couleur execution",
	"feedback": "a afficher dans plactivity avec la couleur feedback",
	"other": "autres choses a voir plus tard"
}

