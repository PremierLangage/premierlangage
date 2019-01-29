#  Author: Bilal Raihan     Mail: rbilal@etud.u-pem.fr
#  Created: 2017-06-29
#  Last Modified: 2017-09-11

type=direct

form==
<p>  {{text1}} <input id="form_txt_answer" style="width:150px; type="text"  placeholder="" required> {{text2}} </p>
<br>
<br>
==

consistency==
def check_consistency(dic):
    n = 1
    list = [int(x[-1]) for x in dic.keys() if 'answer' in x]
    list.sort()
    while n < len(list):
        if list[n] != list[n-1] + 1:
            return False, "You must give consecutive numbers to your answers"
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
    ans = [dic[x] for x in dic.keys() if 'answer' in x]
    good_rep['answer'] = ans[0]
    wrong_rep['answer'] = 'nrwgo'
    return good_rep, wrong_rep
==


evaluator==
def evaluator(response, dic):
    if 'answer' in dic:
        if response['answer'] == dic['answer']:
            if 'correct_feedback' in dic:
                return True, dic['correct_feedback']
            return True, "Bonne réponse"
        else:
            if 'wrong_feedback' in dic:
                return False, dic['wrong_feedback']
            return False, "Mauvaise réponse"
    else:
        n = 1
        answer = list()
        while ('answer'+str(n) in dic):
            ans = dic['answer'+str(n)]
            if ('feedback'+str(n) in dic):
                fee = dic['feedback'+str(n)]
            else:
                fee = ('Bonne réponse')
            answer.append((ans, fee))
            n += 1
        for answer, feedback in answer:
            if response['answer'] == answer:
                return True, feedback
        if 'wrong_feedback' in dic:
            return False, dic['wrong_feedback']
        return False, "Mauvaise réponse"
==
