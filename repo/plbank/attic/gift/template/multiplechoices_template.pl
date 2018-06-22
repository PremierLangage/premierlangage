#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-06-29
#  Last Modified: 2017-06-29

type=direct

build==
def build(dic):
    d= dict(dic)
    n=1
    question=list()
    answer=list()
    while ('answer'+str(n) in dic):
        question.append(dic['answer'+str(n)])
        if 'right_answer'+str(n) in dic:
            answer.append(dic['right_answer'+str(n)])
        n += 1
    d['question'] = question
    d['answer'] = answer
    return d
==

responses==
def create_responses(dic):
    good_rep = dict()
    wrong_rep = dict()
    good_rep['answer'] = dic['answer']
    wrong_rep['answer'] = []
    return good_rep, wrong_rep
==

form==
<center>
    {% for item in question %}
        <label class="checkbox-inline">
        <input type="checkbox" id="form_txt_answer" value="{{item}}"> {{item}}
        </label>
    {% endfor %}
</center>
==

consistency==

def check_aux(dic, txt):
    n = 1
    list = [int(x[-1]) for x in dic.keys() if x[:-1] == txt]
    list.sort()
    while n < len(list):
        if list[n] != list[n-1] + 1:
            return False, "You must give consecutive numbers to your "+txt+'s'
        n +=1


def check_consistency(dic):
    check_aux(dic, 'answer')
    check_aux(dic, 'right_answer')
    for x in dic['answer'] :
        if x not in dic['question']:
            False, "right_answer must be a possible answer"
    return True, ""
==

responses==
def create_responses(dic):
    good_rep = dict()
    wrong_rep = dict()
    good_rep['answer'] = dic['answer']
    wrong_rep['answer'] = []
    return good_rep, wrong_rep
==


evaluator==
def evaluator(reponse, dic):
    if not 'answer' in reponse:
        return False, "Merci de cocher au moins une case"
    if len(reponse['answer']) == len(dic['answer']):
        for answer in dic['answer']:
            if not answer in reponse['answer']:
                return False, "Réponse incorrecte"
        return True, "Bonne réponse"
    return False, "Réponse incorrecte"
==
