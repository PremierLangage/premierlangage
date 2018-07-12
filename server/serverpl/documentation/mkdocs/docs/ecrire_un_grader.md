
# ecriture d'un grader 

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

Créez un exercice qui ne contient que les trois balises suivantes: **title**,**text**, et **grader**

```
  title= Je dit toujours OUI

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
