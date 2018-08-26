
# Ecriture d'un grader (pour l'évaluation de programmes)

## Introduction 
Toutes les évaluation d'un exercice sont faites en utilisant un serveur "sandbox" c'est à dire un bac à sable
où il n'y a pas de risque d'éxécuter du code mal écrit ou mal intentioné.

Le serveur sanbox recoit une archive qu'il déploie dans un répertoire temporaire puis une fois placé sur ce repertoire
lance la commande : python3 grader.py

L'objectif de cette page de documentation est d'écrire ce script grader pour qu'il soit compatible avec la plateforme.
Et qu'il permettent d'évaluaer la réponse de l'étudiant.

# La balide grader

Vous pouvez dans la  balise grader  d'un exercice pl définir directement le code python de votre grader. Par exemple,
le grader pas exigant suivant qui est toujours satisfait du travail de l'étudiant :

```
  grader==
  import json
  print(json.dumps({"success":True,"error":"","feedback":" Bravo !!!"}))
  ==
```
Remarquez que ce grader écrit sur la sortie standard un dictionnaire au format json.
C'est ce qui est attendu par le serveur pl pour obtenir l'évaluation de l'exercice.



# Un premier exercice avec votre grader


Créez un exercice qui ne contient que les trois balises suivantes: **title**,**form**, et **grader**.

  C'est l'exercice minimal celui qui à un titre, une champs de saisie pour l'élève et une évaluation de la réponse.

```
  title= Je dit toujours OUI
  # nous avons ajouté la ligne suivante pour rendre l'exo plus agréable à regarder.
  texth==
  <h3 style="color:RED" >Quelque soit la réponse c'est oui !!!</h3> 
  ==
  # ici nous avons un champs de saisie text avec le titre réponse 
  form==
  <span class="input-group-addon">Réponse</span>
  <input id="form_txt_answer" type="text" class="form-control" placeholder="NON" required>
  ==

  # voici notre grader toujours aussi gentil.
  grader==
  import json
  print(json.dumps({"success":True,"feedback":" Bravo mon coco !!!"}))
  ==
```


Testez en créant un nouveau fichier sur pl, Editez le et faites des tests avec le mode preview .


Vous obtenez toujours un Bravo mon coco !!! sur fond vert.

## Lecture de la réponse de l'étudiant 

Pour faire l'évaluation de l'exercice.



```
  title= Tester l'existance
  # nous avons ajouté la ligne suivante pour rendre l'exo plus agréable à regarder.
  text==
  **Si vous validez sans réponse il n'y aura pas de fichier réponse "student"
  dans le répertoire de la sandbox !!!** 

  Ainsi l'énoncé de cette exercice est : ~~répondez quelque chose~~ !!!
  ==

  form==
  <span class="input-group-addon">Réponse</span>
  <input id="form_txt_answer" type="text" class="form-control" placeholder="NON" required>
  ==


  grader==
  import json
  import os
  feedback=""
  if os.path.isfile('./student'):
      feedback += "Bravo Student exist et contient : \n"
      with open("./student","r") as f:
          feedback += f.read()
      print(json.dumps({"success":True,"feedback": feedback}))
  else:
      feedback += "Student n'existe pas \n"
      print(json.dumps({"success":False,"feedback": feedback}))
  ==

```
