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
except:
    print(traceback.format_exc(), file=sys.stderr)
    grade = (-1, "Merci de rentrer un entier")
==

@ ~/utils/sandboxio.py
@ ~/grader/evaluator.py [grader.py]

tests %=
{
    "correct" : {
        "response" : {
            "answer" : 7
        },
        "grade" : 100,
        "feedback" : "Bonne réponse\n"
    },
    "incorrect" : {
        "response" : {
            "answer" : 8
        },
        "grade" : 0,
        "feedback" : "Mauvaise réponse\n"
    },
    "not working" : {
        "response" : {
            "answer" : 8
        },
        "grade" : 50,
        "feedback" : "Bonne réponse\n",
        "seed" : 130
    },
    "only grade" : {
        "response" : {
            "answer" : 7
        },
        "grade" : 100
    },
    "only feedback" : {
        "response" : {
            "answer" : 7
        },
        "feedback" : "Bonne réponse\n"
    },
    "grader failure" : {
        "response" : {
            "answer" : "aa"
        },
        "feedback" : "Bonne réponse\n"
    }
}
==



















