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
    if dic['answer'] != 'True' and dic['answer'] != 'False' :
                return False, "Answer must be True or False"
    return True, ""
==

responses==
def create_responses(dic):
    return 'bjr', 'bjr'
==

evaluator==
def evaluator(reponse, dic):
    if (str(dic['answer']) == reponse['answer']):
        return True, str(dic['feedback_correct'])
    return False, str(dic['feedback_wrong'])
==









text=Grant was buried in a tomb in New York City.
answer=True
