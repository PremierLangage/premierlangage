@ /utils/sandboxio.py
@ /examples/random_matrix_rank.py

title = Algèbre : trouver le rang d'une matrice simple
author = N.B.

builder==
import sys
import json
import random
from random_matrix_rank import rand_mat_rank

if __name__ == "__main__":
    with open(sys.argv[1],'r') as f:
        context = json.load(f)
        
    enonce = "Quel est le rang de la matrice suivante ?"
    matrix, solution = rand_mat_rank(random.randint(3,8))
    enonce += "\n\n" + matrix 
    context['text'] = enonce
    context['rank_mat'] = solution
        
    with open(sys.argv[2], 'w+') as f:
        json.dump(context, f)
    sys.exit(0)
==

form==
Rang de la matrice : <input type="text" id="form_rank" size="1" value="{{ '?' }}" required>
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
    
    if (len(answers['rank']) == 0):
        output(-1, "Veuillez remplir les quatres champs !")
    if int(answers['rank']) == int(context['rank_mat']):
        grade += 100
    
    if grade == 0:
        feedback = "Non, relisez et analysez bien les colonnes de la matrice !"
    else:
        feedback = "Bravo, c'est correct !"
        
    output(grade, feedback)
==

