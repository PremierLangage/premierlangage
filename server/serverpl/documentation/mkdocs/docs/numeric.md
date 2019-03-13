# Réponse numérique simple 

## Résumé

* **Inclusion:** `form =@ /form/simplenumeric.html`  
Présent dans lib.

* **ID:** L'ID par défaut est `form_txt_answer`. Celle-ci peut être modifiée (voir [Personnalisation de l'éditeur](#personnalisation-de-lediteur))
  Il faut donc accéder a la clé `txt_answer` du dictionnaire de réponses pour récupérer
  la réponse.

* **Clés utilisées**: `form,`

## Usage 

Permet de récupérer une réponse numérique simple, le navigateur vérifiant que la valeur saisie est numérique.

exemple dans l'évaluateur :
```
valeur=int(response['txt_answer'])
if valeur== ... :
  grade=(100,"bonne réponse")
else:
  grade=(0, " Tss tss tss ")
```

