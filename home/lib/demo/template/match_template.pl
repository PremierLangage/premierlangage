#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-06-29
#  Last Modified: 2017-06-29

type=direct

build==
def build(dic):
    n=1
    answer = dict()
    question_list = list()
    answer_list = list()
    while ('answer'+str(n) in dic):
        answer_list.append(dic['answer'+str(n)])
        question_list.append(dic['question'+str(n)])
        answer[dic['question'+str(n)]] = dic['answer'+str(n)]
        n += 1
    dic['answer'] = answer
    dic['answer_list'] = answer_list
    dic['question_list'] = question_list
    return dic
==


css==
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/js/bootstrap-select.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/css/bootstrap-select.min.css">
==

form==
<center>
    <div style="display: inline-block; vertical-align: middle;">
        {% for item in question_list %}
            <span class="input">{{item}}:</span>
            <select id="form_txt_{{item}}" class="selectpicker" style="display: inline-block; vertical-align: middle;" title="Réponse" required>
                {% for item2 in answer_list %}
                    <option value="{{ item2 }}">{{item2}}</option>
                {% endfor %}
            </select>
            <br>
            <br>
        {% endfor %}
    </div>
</center>
==

consistency==
def check_consistency(dic):
    n = 1
    list = [int(x[-1]) for x in dic.keys() if x[:-1] == 'answer']
    list.sort()
    while n < len(list):
        if list[n] != list[n-1] + 1:
            return False, "You must give consecutive numbers to your answers"
        n +=1
    
    n = 1
    list = [int(x[-1]) for x in dic.keys() if x[:-1] == 'question']
    list.sort()
    while n < len(list):
        if list[n] != list[n-1] + 1:
            return False, "You must give consecutive numbers to your questions"
        n +=1
        
    if len(dic['answer_list']) != len(dic['question_list']):
        return False, "The number of questions must be equal to the number of answers"
    return True, ""
==

responses==
def create_responses(dic):
    good_rep = dict()
    wrong_rep = dict()
    good_rep = dic['answer']
    wrong_rep = {}
    return good_rep, wrong_rep
==

evaluator==
def evaluator(reponse, dic):
    if (reponse == dic['answer']):
        return True, "Bien joué"
    return False, "Mauvais matching"
==

