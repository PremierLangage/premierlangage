# Copyright 2016 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# devinez la valeur d'une variable après un jeu d'instructions

author=Nicolas Borie
name=Jeu d'instructions arithmétiques
title=Jeu d'instructions arithmétiques
tag=program|variable

type=direct

build=@Cbank:exercices/program/code_generation.py

consistency==
def check_consistency(dic):
    return True, ""
==


nb_variables = 3
complexity = 10
instruct_complexity = 3


form==
<div class="input-group">
<span class="input-group-addon">Réponse</span>
<input id="form_txt_answer" type="text" class="form-control" placeholder="" required>
</div>
==

evaluator==
def evaluator(response, dic):
    if dic['vars_values'] is None:
        if response['answer'] == "Erreur":
            return True, "Bravo"
        else:
            return False, "Mauvaise réponse"
    try: 
        value = int(response['answer'])
    except:
        return False, "Mauvaise réponse"
    if value == dic['vars_values'][0]:
        return True, "Bravo"
    else:
        return False, "Mauvaise réponse"
==
