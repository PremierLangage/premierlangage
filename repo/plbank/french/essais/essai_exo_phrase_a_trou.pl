#Copyright 2018 Elise Hardy <ehardy@etud.u-pem.fr>
#
# 

author=Elise Hardy
title=conjuger les verbes
name=conjuger les verbes
tag=conjugaison 
type=direct

text==
blalbl  
==

form==
<div class="form-group row">

    <label for="lgFormGroupInput" class="col-sm-2 col-form-label col-form-label-lg">blavblad</label>
    <div class="col-sm-1">
    <input type="text" class="form-control" id="form_txt_answer1" placeholder="">
    </div>
    <label for="lgFormGroupInput" class="col-sm-2 col-form-label col-form-label-lg">blavblad</label>
    <div class="col-sm-1">
    <input type="text" class="form-control" id="form_txt_answer2" placeholder="">
    </div>
</div>
==

evaluator==
reponse={'answer1': "a", 'answer2':"b"}
print(reponse)
print(response)
try:
    for x in response:
        if response[x] != reponse[x]:
            grade=(False,"Une erreur s'est glissée parmi vos réponses")
            break;
    else:
        grade=(True,"Toutes les réponses sont justes")
except:
    grade=(None,"Merci de rentrer des réponses")
==
