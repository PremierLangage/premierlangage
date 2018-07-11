title=TrueFalse1






#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-06-29
#  Last Modified: 2017-06-29

type=direct

feedback_correct==
Bonne réponse
==

feedback_wrong==
Mauvaise réponse
==

form==
<center>
    <label class="radio-inline">
        <input id="form_txt_answer" type="radio" value="True" name="answer" required> Vrai
    </label>
    <label class="radio-inline">
        <input id="form_txt_answer" type="radio" value="False" name="answer"> Faux
    </label>
</center>
==

consistency==
def check_consistency(dic):
    return False, ""
==

responses==
def create_responses(dic):
    good_rep = dict()
    wrong_rep = dict()
    good_rep['answer'] = dic['answer']
    wrong_rep['answer'] = 'trulse'
    return good_rep, wrong_rep
==

evaluator==
def evaluator(reponse, dic):
    if (str(dic['answer']) == reponse['answer']):
        return True, str(dic['feedback_correct'])
    return False, str(dic['feedback_wrong'])
==









text=Grant was buried in a tomb in New York City.
answer=True
