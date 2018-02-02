# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= bombe2CPU.pl
title=  bombe2CPU.pl
text==

bombe2CPU



==

# Choisir pltest ou soluce ou expectedoutput


grader==

import json
import threading

def worker():
    """thread worker function"""
    j=0
    for i in range(1,1000):
        j += 2**i
    return j

threads = []
for i in range(8): # objectif 800% 
    t = threading.Thread(target=worker)
    threads.append(t)
    t.start()


print(json.dumps({"plateforme":True,"stderr":"","result":True,"stdout":"temps d'execution trop long"}))
==
