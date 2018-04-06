#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-06-29
#  Last Modified: 2017-06-29

type=direct

title=Random add

form==
Combien font {{ op1 }} + {{ op2 }}?
<div class="input-group">
    <span class="input-group-addon">Réponse</span>
    <input id="form_txt_answer" type="number" class="form-control" placeholder="" required>
</div>
==

text==

==

evaluator==
if int(response['answer']) == op1 + op2:
    grade = (True, "Bonne réponse")
else:
    grade = (False, "Mauvaise réponse")
==

before==
import random
random.seed(seed)
op1 = random.randint(0, 100)
op2 = random.randint(0, 100)
==




buildX==
import random
def build(dic):
    random.seed(dic["seed"])
    dic["op1"] = random.randint(0, 100)
    dic["op2"] = random.randint(0, 100)
    return dic
==






