
dico['type']='direct'

template=python/0PLG/template.pl
patrontext==
# Dynamic

Lisez et évaluer le code suivant et indiquer la valeur de la variable r à la fin de l'execution 
{{ enonce }}

==
# si text existe pas et que plbuilder existe on le charge pour creer la balise text
plbuilder==
import jinja2

import random


def randomcode(seed):
	rng=random.Random(seed)
	code="""\na=%d\nb=%d\n""" % (rng.randint(-1,1),rng.randint(-1,1))
	l=["a=b","b=a","a=a+b","a=a-b","a=a*b","b=a*b","b=a-b","b=b-a"]
	last="r=a+b\n"
	
	for i in range(rng.randint(1,5)):
		dice=rng.randint(0,len(l)-1)
		code += l[dice]
		del l[dice]
		code += "\n"
	code += last
	return code


def updatedic(dico,seed=None):
        if not seed :
		seed=random.randrange(100000)
	dico['seed']=seed
	code=randomcode(seed)
	dico['text']= Template(dico['patrontext'],enonce=code).render()
	dico['expectedoutput']=eval(code)
==

