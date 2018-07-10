#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-06-29
#  Last Modified: 2017-06-29

type=direct

form==
<div class="input-group">
    <span class="input-group-addon">Réponse</span>
    <input id="form_txt_answer" type="number" class="form-control" placeholder="" required>
</div>
==

consistency==
def check_consistency(dic):
    if not dic['mini'].isnumeric() or not dic['maxi'].isnumeric() :
        return False, "mini and maxi keys have to be numeric"
    return True, ""
==

responses==
def create_responses(dic):
    good_rep = dict()
    wrong_rep = dict()
    good_rep['answer'] = dic['mini']
    wrong_rep['answer'] = str(float(dic['maxi']) + 1994.0) 
    return good_rep, wrong_rep
==

evaluator==
def evaluator(response, dic):
    try:
        float(response['answer'])
    except:
        return False, "Merci de rentrer un entier ou un flottant"
       
    if float(response['answer']) >= float(dic['mini']) and float(response['answer']) <= float(dic['maxi']):
        return True, 'Bonne réponse'
    return False, 'Réponse incorrecte'
==
