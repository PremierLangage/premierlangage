#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-06-29
#  Last Modified: 2017-06-29

type=direct
title=<h1 style="color:pink">Pas de Titre </h1>

good==
Napoleon, Oui c'est ca
Bonapparte, Oui aussi malgré l'orthographe

==

bad==
Michel Fugain, T'es con ou quoi 
Quentin Coumes, Peut être un jour
==

before==
def spit(a):
    d={}
    for x in a.split("\n") :
        if x:
            x=x.split(",")
            d[x[0]]=x[1]
    return d

goods=spit(good)
bads=spit(bad)
question=[x for x in goods.keys()]+[x for x in bads.keys()]
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



evaluator==
def evaluator(reponse, dic):
    if not 'answer' in reponse:
        return False, "Merci de cocher au moins une case"
    if reponse['answer'] in dic['goods']:
        return 100, dic['goods'][reponse['answer']]
    if reponse['answer'] in dic['bads']:
        return 100, dic['bads'][reponse['answer']]

==

