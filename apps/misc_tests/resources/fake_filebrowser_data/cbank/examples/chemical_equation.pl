@ /utils/sandboxio.py

title = Chimie : équilibrer une équation chimique
author = N.B.

text==
Veuillez équilibrer l'équation chimique suivante avec des entiers strictement 
positifs les plus petits possibles.
==

builder =@ /builder/none.py

form==
<input type="text" id="form_co" size="1" value="{{ '?' }}" required> $%CO%$ + 
<input type="text" id="form_fe3o4" size="1" value="{{ '?' }}" required> 
$%Fe_3 O_4 \quad \longrightarrow \quad%$ 
<input type="text" id="form_co2" size="1" value="{{ '?' }}" required> $%CO_2%$ + 
<input type="text" id="form_fe" size="1" value="{{ '?' }}" required> $%Fe%$
==

grader==
import sys
import json
from sandboxio import output

if __name__ == "__main__":
    with open(sys.argv[2]) as f:
        answers = json.load(f)
    f.close()
    
    grade = 0
    
    if (len(answers['co']) == 0) or (len(answers['fe3o4']) == 0) or (len(answers['co2']) == 0) or (len(answers['fe']) == 0):
        output(-1, "Veuillez remplir les quatres champs !")
    if int(answers['co']) == 4:
        grade += 25
    if int(answers['fe3o4']) == 1:
        grade += 25
    if int(answers['co2']) == 4:
        grade += 25   
    if int(answers['fe']) == 3:
        grade += 25
    
    if grade == 0:
        feedback = "Aucune de vos réponses n'est exacte"
    elif grade == 25:
        feedback = "Seul un des coeficients est bon"
    elif grade == 50:
        feedback = "Deux coeficients sont bons et deux son éronnés"
    elif grade == 75:
        feedback = "Il y a une seule erreur dans vos quatres coeficients"
    else:
        feedback = "Bravo, la réaction est bien équilibré."
        
    output(grade, feedback)
==

