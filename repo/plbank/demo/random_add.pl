#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-06-29
#  Last Modified: 2017-06-29

type=direct

title= Addition Aléatoire

text==
Combien font ***{{ op1 }} + {{ op2 }}*** ?
==

form==
<div class="input-group">
    <input id="form_txt_answer" type="number" class="form-control" placeholder="" required>
</div>
==

evaluator==
try: 
    if int(response['answer']) == op1 + op2:
        grade = (True, "Bonne réponse")
    else:
        grade = (False, "Mauvaise réponse")
except:
    grade = (None, "Merci de rentrer un entier")
==


before==
import random
random.seed(seed)
op1 = random.randint(20, 100)
op2 = random.randint(20, 100)
==




