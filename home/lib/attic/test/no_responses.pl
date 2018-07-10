#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-06-29
#  Last Modified: 2017-06-29

type=direct

form==
<div class="input-group">
    <span class="input-group-addon">Réponse</span>
    <input id="form_txt_answer" type="text" class="form-control" placeholder="" required>
</div>
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
