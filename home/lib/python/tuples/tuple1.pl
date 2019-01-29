
# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
title=tuple1.pl
template=/python/tuples/tuple_template.pl
#On voudrait pouvoir écrire template=tuple_template.pl
text==

Créez un tuple **toto** contenant 1 et 2 .


Rappel: un Tuple est une liste non mutable 
==
code==

# initialisez toto correctement 
toto=

==
grader==
import sys
import json 


dico_good = { "success": True , "errormessages" : "" , "execution": "OK", "feedback": "ok", "other": "" }
dico_bad = { "success": False , "errormessages" : "création d'une exception", "execution": "", "feedback": "toto n'est pas un tuple ", "other": "" }


try:
    from student import toto
    if toto==(1,2) :
        print(json.dumps(dico_good))
    else:
        print(json.dumps(dico_bad))
except:
    print(json.dumps(dico_bad))
==

