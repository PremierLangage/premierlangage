#  Author: Bilal Raihan     Mail: rbilal@etud.u-pem.fr
#  Created: 2017-06-29
#  Last Modified: 2017-09-11

type=direct



build==
def build(dic) :
    if 'answer' in dic:
        dic['only_rep'] = dic['answer']
        if 'wrong_feedback' in dic:
            dic['answer'] = [(dic['answer'], dic['wrong_feedback'])]
        else:
            dic['answer'] = [(dic['answer'], 'Bonne réponse')]
        return dic
    n = 1
    answer = list()
    only_rep = list()
    while ('answer'+str(n) in dic):
        ans = dic['answer'+str(n)]
        if ('feedback'+str(n) in dic):
            fee = dic['feedback'+str(n)]
        else:
            fee = ('Bonne réponse')
        answer.append((ans, fee))
        only_rep.append(ans)
        n += 1
    dic['answer'] = answer
    dic['only_rep'] = only_rep
    return dic
==

form==
    <div style="display: inline-block; vertical-align: middle;">
            <span class="input">{{text1}}:</span>
            <select id="form_txt_{{text1}}" class="selectpicker" style="display: inline-block; vertical-align: middle;" title="Réponse" required>
                {% for elmt in only_rep %}
                    <option value="{{elmt}}">{{{elmt}}</option>
                {% endfor %}
            </select>
            <br>
            <br>
            {{text2}}
    </div>
==

responses==
def create_responses(dic):
    good_rep = dict()
    wrong_rep = dict()
    ans = [dic[x] for x in dic.keys() if 'answer' in x]
    good_rep['answer'] = ans[0]
    wrong_rep['answer'] = 'nrwgo'
    return good_rep, wrong_rep
==


evaluator==
def evaluator(response, dic):
    for ans, feedback in dic['answer'] :
        if response['answer'] == ans :
            if feedback:
                return True, feedback
            return True, "Bonne réponse"
        else:
            if 'wrong_feedback' in dic:
                return False, dic['wrong_feedback']
            return False, "Mauvaise réponse"
==
