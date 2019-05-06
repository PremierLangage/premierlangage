@ /utils/sandboxio.py
@ /examples/french_sentence.py

title = Grammaire : reconnaître les propositions subordonnées relatives 
author = N.B.

builder==
import sys
import json
from french_sentence import faire_phrase

if __name__ == "__main__":
    with open(sys.argv[1],'r') as f:
        context = json.load(f)
        
    enonce = "Combien il y a-t-il de propositions subordonnées relatives dans la phrase suivante :"
    phrase, solution = faire_phrase()
    enonce += "\n\n**" + phrase + "**"
    context['text'] = enonce
    context['nb_psr'] = solution
        
    with open(sys.argv[2], 'w+') as f:
        json.dump(context, f)
    sys.exit(0)
==

form==
Nombre de propositions subordonnées relatives : <input type="text" id="form_psr" size="1" value="{{ '?' }}" required>
==

grader==
import sys
import json
from sandboxio import output

if __name__ == "__main__":
    with open(sys.argv[1]) as f:
        context = json.load(f)
    f.close()
    
    with open(sys.argv[2]) as f:
        answers = json.load(f)
    f.close()
    
    grade = 0
    
    if (len(answers['psr']) == 0):
        output(-1, "Veuillez remplir les quatres champs !")
    if int(answers['psr']) == int(context['nb_psr']):
        grade += 100
    
    if grade == 0:
        feedback = "Non, relisez et analysez bien la phrase !"
    else:
        feedback = "Bravo, c'est correct !"
        
    output(grade, feedback)
==

