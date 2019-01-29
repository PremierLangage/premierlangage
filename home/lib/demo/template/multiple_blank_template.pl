#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-06-29
#  Last Modified: 2017-06-29

type=direct

build==

def build(dic):
    d=dict(dic)
    n=1
    m=1
    question=list()
    answer=list()
    answers = list()
    text=list()
    resp = [x for x in dic.keys() if 'answer' in x and x != 'student_answer']
    resp.sort()
    for x in  resp :
        if str(n)+'_'+str(m) in x:
            answers.append(dic['answer'+str(n)+'_'+str(m)])
            m += 1
        else:
            answer.append(answers)
            answers = list()
            # On ajoute le Answer(n+1)_1 et puis on repart à partir de m = 2
            n += 1
            answers.append(dic['answer'+str(n)+'_1'])
            m = 2
    answer.append(answers)
    t = 1
    while 'text'+str(t) in dic:
            text.append((dic['text'+str(t)], 'answer'+str(t)))
            t += 1
    d['fin'] = text[-1][0]
    text = text[:-1]
        
    d['question'] = question
    d['answer'] = answer
    d['txt'] = text
    return d
==


form==
<center>
    {% for elmt,name in txt %}
        {{elmt}} <input id="form_txt_{{name}}" style="width:90px; type="text"  placeholder="" required>
    {% endfor %}
        {{fin}}
</center>
==

consistency==
def check_consistency(dic):
    n = 1
    lst = [int(x[-3]) for x in dic.keys() if x[-2] == '_']
    lst.sort()
    while n < len(lst):
        if lst[n] != lst[n-1] + 1 and lst[n] != lst[n-1]:
            return False, "You must give consecutive numbers to your answers"
        n +=1
    
    n = 1
    list = [int(x[-1]) for x in dic.keys() if x.startswith('answer') and x != 'answer']
    list.sort()
    while n < len(list):
        if list[n] != list[n-1] + 1 and list[n] != list[n-1]:
            return False, "You must give consecutive numbers to your sub_answers"
        n +=1
    
    n = 1
    list = [int(x[-1]) for x in dic.keys() if 'text' in x]
    list.sort()
    while n < len(list):
        if list[n] != list[n-1] + 1:
            return False, "You must give consecutive numbers to your text pieces"
        n +=1
        
    return True, ""
==

responses==
def create_responses(dic):
    good_rep = dict()
    wrong_rep = dict()
    n = 1
    for x in [x[0] for x in dic['answer']] :
        good_rep['answer' + str(n)] = x
        n+=1
    print(good_rep)
    wrong_rep['answer'] = []
    return good_rep, wrong_rep
==


evaluator==
def evaluator(reponse, dic):
    if len(reponse.keys()) == len(dic['answer']):
        n = 1
        while 'answer'+str(n) in reponse:
            if not reponse['answer'+str(n)] in dic['answer'][n-1] :
                return False, "Réponse incorrecte"
            n+=1
        return True, "Bonne réponse"
    return False, "Réponse incorrecte"
==
