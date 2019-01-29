

import feedback # quelques fonctions utiles plbank/pysrc/src/utils 
import sys
import json


fb = feedback.Feedback()
try:
    with open("student.py","r") as f:
        exec(f.read(),globals()) # chargement du code de l'élève ou X doit être défini 
    if X == "Toto":
        fb.setsuccess(True)
        fb.addFeedback("Bravo c'est bon !!!")
    else:
        fb.setsuccess(False)
        fb.addFeedback("La variable est mal initialisé !!!")
        
except NameError as e:
    fb.setsuccess(False)
    fb.addFeedback("Il faut déclarer une variable X \n"+str(e))
except Exception as e :
    fb.setsuccess(False)
    fb.addFeedback("Proposez un code qui compile"+str(e))
print(json.dumps(fb.outputdic()))
# pour être sur que le grader se termine bien ;)
sys.exit(0)

