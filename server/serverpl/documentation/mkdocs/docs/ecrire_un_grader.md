
# Ecriture d'un grader 

## Introduction 
Toutes les évaluation d'un exercice sont faites en utilisant un serveur "sandbox" c'est à dire un bac à sable
où il n'y a pas de risque d'éxécuter du code mal écrit ou mal intentioné.

Le serveur sanbox recoit une archive qu'il déploie dans un répertoire temporaire puis une fois placé sur ce repertoire
lance la commande : python3 grader.py

L'objectif de cette page de documentation est d'écrire un script grader qui soit compatible avec la plateforme.

# La balide grader

Vous pouvez dans la  balise grader définir directement le code python de votre grader. Par exemple,
le grader pas exigent suivant:

```
  grader==
  print('''{"success":True,"error":"","message":" Bravo !!!"}""")
  ==
```

Créez un exercice qui ne contient que les trois balises suivantes: **title**,**form**, et **grader**.
C'est l'exercice minimal celui qui à un titre, une champs de saisie pour l'élève et une évaluation de la réponse.

```
  title= Je dit toujours OUI
  # nous avons ajouté la ligne suivante pour rendre l'exo plus agréable à regarder.
  texth==
  <h3 color="RED" >QUelque soit la réponse c'est oui !!!</h3> 
  ==

  form==
  <span class="input-group-addon">Réponse</span>
  <input id="form_txt_answer" type="text" class="form-control" placeholder="NON" required>
  ==


  grader==
  import json
  print(json.dumps({"success":True,"feedback":" Bravo mon coco !!!"}))
  ==
```


Testez en créant un nouveau fichier sur pl, Editez le et faites des tests avec la preview.

Vous obtenez toujours un Bravo mon coco !!! sur fond vert.

## Lecture de la réponse de l'étudiant 

```
  title= Tester l'existance
  # nous avons ajouté la ligne suivante pour rendre l'exo plus agréable à regarder.
  texth==
  <h3 style="color:RED" >
  Si vous validez sans réponse il n'y aura pas de fichier réponse 
  dans le répertoire de la sandbox 
  !!!</h3> 

  Ainsi l'énoncé de cette exercice est : répondez quelque chose !!!
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
