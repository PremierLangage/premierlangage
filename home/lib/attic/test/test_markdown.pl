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
*Voici* du **Code** ***Python***:

sur une autre ligne

```python
def ma_fonction(arg):
    return False
```
==

evaluator==
def evaluator(response, dic):
    if int(response['answer']) == dic["op1"] + dic["op2"]:
        return True, "Bonne réponse"
    return False, "Mauvaise réponse"
==

build==
import random
def build(dic):
    print("1: '"+str(type(dic['seed'])), str(dic['seed'])+"'")
    random.seed(dic["seed"])
    dic["op1"] = random.randint(0, 100)
    dic["op2"] = random.randint(0, 100)
    print(dic["op1"],"+",dic["op2"])
    return dic
==
