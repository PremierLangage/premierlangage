# Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=testok.pl
title=  Testeur de la plateforme 
tag=nil
template=/python/test/template.pl
type=sandbox
text==

# Essai de test de la plateforme


==

grader==


>>> try:
		import utils
	except ImportError as ie:
		dico = {"plateforme":True,"stderr":toe,"result":False,"stdout":"temps d'execution trop long"}
		"Problème le fichier ",ie.name,"est abscent de l'environnement d'execution")
		
>>>  try:
		import plutils
	except ImportError as ie:
		print("Problème le fichier ",ie.name,"est abscent de l'environnement d'execution")
>>>  try:
		import pldoctest
	except ImportError as ie:
		print("Problème le fichier ",ie.name,"est abscent de l'environnement d'execution")
>>>import os
>>> os.path.exists("student.py")
True
>>> os.path.exists("pl.json")
True

# essailler de contacter l'extérieur
#try:
	#import urllib
	##params = urllib.urlencode({'spam': 1, 'eggs': 2, 'bacon': 0})
	#f = urllib.urlopen("http://www.python.org/")
	#print("Problème le fichier est abscent de l'environnement d'execution")
#except ImportError as ie:
	#print(" urllib n'est pas installée")

==
