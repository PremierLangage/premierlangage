author=Sylvestre Massalaz
name=Bombe 3 - Exercice très lent
text==
Ceci est un des exercices de test de la sécurité de la sandbox. Le but de ce dernier est de réaliser un exercice 
qui tourne pour plus d'une minute ayant pour but de surcharger l'exe
==

grader==
import time
import json

for i in range(1,200):
    time.sleep(1)    
    print("Cela fait " + str(i) + " secondes que le script tourne")
    
print(json.dumps({"feedback": "Hum... On dirait que vous avez attendu 300 secondes au lieu de 60", "success": False}))
==
