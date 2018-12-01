

# Ecriture d'un grader 


L'objectif de cette page de documentation est d'écrire ce script grader pour qu'il soit compatible avec la plateforme.
Et qu'il permettent d'évaluer la réponse de l'étudiant.

## La balide grader

A priori vous n'avez pas a spécifier de balise grader car vous utiliser un patron d'exercice qui contient déjà cette balise.

Si vous devez le conseil est d'ecrire un script python en vous inspirant des grader existant et en lisant la section suivante.

En terme de syntaxe vous pouvez définir votre grader de deux façons soit avec  une balise grader :

    grader==
    import sandboxio 
    if len(sys.argv)<4:
      print(" grader incorrect pas assez d'arguments ",file=sys.stderr)
    ...
    ==
soit en  utilisant la syntaxe alias (recommandé car plus commode):

  @ /quelquepartsurmoncompte/mongradergenial.py [grader.py]


##  Programmation du grader 
Toutes les évaluation d'un exercice sont faites en utilisant un serveur "sandbox" c'est à dire un bac à sable
où il n'y a pas de risque d'éxécuter du code mal écrit ou mal intentioné.

Le serveur sanbox recoit une archive qu'il déploie dans un répertoire temporaire puis une fois placé dans ce repertoire
lance la commande : 

  python3 grader.py pl.json anwser.json sortie.json feedback 

Le fichier python3 **grader.py** doit être défini dans l'exercice (la balise grader ou un fichier avec comme alias grader.py).

Le fichier **pl.json** est le fichier qui contient le dictionnaire de l'exercice en json.

Le fichier **anwser.json** est fournis par la plateforme il contient la réponse de l'étudiant en json (la structure de ce fichier est définie par la balise **form** ).

Le fichier **sortie.json** contiendra après le grader le nouveau "dictionnaire" de l'exercice modifié par l'évaluation de la réponse de l'élève (voire la section grader avancé pour l'utilisation de cette possibilité), par défaut fichier vide.

Le fichier **feedback** contiendra le feedback de l'évaluation, c'est à dire une string qui contient du markdown ou du html et qui sera affiché à l'étudiant.

Enfin le grader fournis sur la sortie standard un entier de 0 à 100 qui est l'évaluation (grade) 0 echec total, 100 sucess total.

La sortie erreur standard sera récupérée et affichée à l'étudiant.

Pour vous aider à écrire votre grader le fichier **lib/utils/sandbox.io** contient l'api suivante:

  get_answers()
  """Return a dictionnary containing every answer."""
  Un dictionnaire contenant pour chaque input de id="form_XXX" dans la form de l'exercice 
  une entrée XXX contenant la valeur (en json) de l'input.
  
  TODO : un exemple 

  get_context()
  """Return the dictionnary containing the context of the exercise."""
  Le dictionnaire de l'exercice. 
  
  output(grade, feedback, context=None)
  """Used to output the grade, feedback and context to the sandbox 
        grade - (int) Grade of the student. Should be an integer or implementing __int__.
        feedback - (str) Feedback shown to the student. Should be a str or implementing __str__.
        grade - (dict - optionnal) Modified context of the exercise."""

  Permet de terminer l'exécution du grader en créeant les fichier et sorties nécessaires.

Pour l'utiliser il suffit d'avoir une ligne :

  @ /utils/sandboxio.py


Fin de la première partie.

