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
le pape, pas vraiment
Johnny, Pour leatitia 
==


nbgood=2
nbbad=3

before==
import random
def keep(nb,d):
    while len(d)> nb:
        del d[random.choice(list(d.keys()))]
    return d

def spit(a):
    d={}
    for x in a.split("\n") :
        if x:
            x=x.split(",")
            d[x[0]]=x[1]
    return d


goods=keep(int(nbgood),spit(good))
bads=keep(int(nbbad),spit(bad))
question=tuple(goods.keys()) +tuple(bads.keys())

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
f=""
n= 0
if 'answer' not in response:
    grade= 0," Cochez au moins une case la prochaine fois."
else:
    for a in response['answer']:
        if a in goods:
            f += 'Bonne réponse <font style="color:green" >'+ a + "</font>"+ goods[a]+ "</br>"
            n += 10
        elif a  in bads:
            f += 'Mauvaise réponse <font style="color:red" >'+ a + "</font>"+ bads[a]+ "</br>"
            n -= 5 
    if n <0:
        n=0
    NOTE=((n/10)/len(goods.keys()))*10
    grade = n, f + "</br>Note: "+str(NOTE)+"/10"

==





