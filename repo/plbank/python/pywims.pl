author=M. Sandier
title=Premier PyWims
type=direct


css==
<link rel="stylesheet" href="{% static 'css/pywims_exos.css' %}">
==

form==
{% load input_fields %}
Combien font 21+27? {% input_text "reponse" %}.
Combien font 42+22? {% input_text "reponse2" %}.
Combien font 25+26? {% input_text "reponse3" %}.
==

evaluator==
def evaluator(answer, dic):
    dic['answer_data'] = dict()
    dic['form_data'] = dict()
    dic['form_data']['reponse'] = answer['reponse'][0]
    dic['form_data']['reponse2'] = answer['reponse2'][0]
    dic['form_data']['reponse3'] = answer['reponse3'][0]
    
    if int(answer['reponse'][0]) == 4:
        feedback = "Bravo"
        dic['answer_data']['reponse'] = True
    else:
        feedback = "Nope"
        dic['answer_data']['reponse'] = False
        
    if int(answer['reponse2'][0]) == 4:
        feedback = "Bravo"
        dic['answer_data']['reponse2'] = True
    else:
        feedback = "Nope"
        dic['answer_data']['reponse2'] = False
    
    if int(answer['reponse3'][0]) == 4:
        feedback = "Bravo"
        dic['answer_data']['reponse3'] = True
    else:
        feedback = "Nope"
        dic['answer_data']['reponse3'] = False
    
    return True, feedback
==
