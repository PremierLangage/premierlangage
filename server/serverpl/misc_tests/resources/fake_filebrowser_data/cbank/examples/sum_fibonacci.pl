@ /utils/sandboxio.py

title = Somme des premiers termes de Fibonacci
author = N.B.

text==
On définit la suite de Fibonacci $%(f_n)_{n \in \mathbb{N}}%$ de manière 
récursive comme il suit :

$% f_n := 
\left\\{
\begin{array}{ll}
1 & \text{ si } n = 0 \\newline
1 & \text{ si } n = 1 \\newline
f_{n-1} + f_{n-2} & \text{ si } n \geqslant 2 \\newline
\end{array}
\\right.
%$

Calculez la somme des 54 premiers termes de la suite de Fibonacci.
==

builder =@ /builder/none.py

form==
$% \displaystyle\sum_{n=0}^{53} f_n  = %$ <input type="text" id="form_sum" size="6" value="{{ '?' }}" required>
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

