title=RangeAvecTolerance

type=direct

form==
<div class="input-group">
    <span class="input-group-addon">Réponse</span>
    <input id="form_txt_answer" type="number" class="form-control" placeholder="" required>
</div>
==

consistency==
def check_consistency(dic):
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
        return 12, 404
       
    if float(response['answer']) >= float(dic['mini']) and float(response['answer']) <= float(dic['maxi']):
        return 42, 404
    return 1, 404
==

text=What is a number from 1 to 5?
type=direct
mini=1.0
maxi=5.0
