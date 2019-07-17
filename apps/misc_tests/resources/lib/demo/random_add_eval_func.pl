#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr

title= Addition Aléatoire (using eval_func)

author = Quentin Coumes

text==
Combien <i>font</i> ***{{ op1 }} + {{ op2 }}*** ?
==

form==
<div class="input-group">
    <input name="answer" id="form_answer" type="number" class="form-control" value="{{ answers__.answer }}" required/>
</div>
==

settings.oneshot=yes
settings.allow_reroll=yes


evalfunc==
import traceback
import sys

def evalfunc(dic, answers):
    try: 
        if int(answers['answer']) == dic['op1'] + dic['op2']:
            return (100, "Bonne réponse")
        return (0, "Mauvaise réponse")
    except:
        print(traceback.format_exc(), file=sys.stderr)
        return(-1, "Merci de rentrer un entier")
==


before==
import random
random.seed(seed)
op1 = random.randint(1, 10)
op2 = random.randint(1, 10)
==

@ ~/utils/sandboxio.py
@ ~/builder/before.py [builder.py]
@ ~/grader/evalfunc.py [grader.py]










