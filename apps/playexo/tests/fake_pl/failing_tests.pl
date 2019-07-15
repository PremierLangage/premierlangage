#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr




title= Addition statique

author = Christophe Callé

text==
Combien <i>font</i> ***3 + 4*** ?
==

form==
<div class="input-group">
    <input name="answer" id="form_answer" type="number" class="form-control" value="{{ answers__.answer }}" required/>
</div>
==

settings.oneshot=yes
settings.allow_reroll=yes


evaluator==
import traceback
import sys

try:
    if int(response['answer']) == 3 + 4:
        grade = (100, "Bonne réponse")
    else:
        grade = (0, "Mauvaise réponse")
==


before==
import random
random.seed(seed)
if seed == 42:
    raise Exception()
op1 = random.randint(1, 10)
op2 = random.randint(1, 10)
==

@ ~/utils/sandboxio.py
@ ~/grader/evaluator.py [grader.py]
@ /builder/before.py [builder.py]

tests %=
{
    "failing_grader" : {
        "response" : {
            "answer" : "aaa"
        },
        "grade" : 100,
        "feedback" : "Bonne réponse\n"
    },
    "failing_builder" : {
        "response" : {
            "answer" : 7
        },
        "grade" : 100,
        "feedback" : "Bonne réponse\n",
        "seed" : 42
    },
    "failing_test" : {
        "grade" : 100,
        "feedback" : "Bonne réponse\n"
    }
}
==



















