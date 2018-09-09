#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-06-29
#  Last Modified: 2017-06-29

type=direct

title= Addition Aléatoire

text==
Combien <i>font</i> ***{{ op1 }} + {{ op2 }}*** ?
==

form==
<div class="input-group">
    <input id="form_answer" type="number" class="form-control" value="{{ answers__.answer }}" required/>
</div>
==

oneshot=True

evaluator==
import traceback
import sys

try: 
    if int(response['answer']) == op1 + op2:
        grade = (100, "Bonne réponse")
    else:
        grade = (0, "Mauvaise réponse")
except:
    print(traceback.format_exc(), file=sys.stderr)
    grade = (-1, "Merci de rentrer un entier")
==


before==
import random
random.seed(seed)
op1 = random.randint(20, 100)
op2 = random.randint(20, 100)
==

@ /utils/sandboxio.py
@ /builder/builder.py
@ /grader/grader.py


