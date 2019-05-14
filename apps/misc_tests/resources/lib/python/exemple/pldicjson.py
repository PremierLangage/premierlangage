#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  pldicjson.py
#  
#  Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
#  
#  Ce module fournis une fonction getpldic() qui lit le fichier pl.json du répertoire
# et retourne un dictionnaire de l'exercice
# une fonction getstudic et une fonction getsoldic qui respectivement
# retourne le dictoinnaire student.json et soluce.json
# programmés avec des singleton pour eviter de relire le fichier 


import json


pldicsingleton=None

def getpldic():
	'''
	getpdic return the dictionnary contained in the file "./pl.json" 
	'''
	global pldicsingleton
	if pldicsingleton == None :
		try:
			pldicsingleton= json.load(open("pl.json","r"))
		except Exception as e:
			# TODO gestion des exceptions dans plExecutor
			pldicsingleton = dict() # retourne un dico vide 
	return pldicsingleton

studentdicsingleton=None

def getstudic():
	"""
	getsutdic loads the student.json file in a dictionnary
	"""
	global studentdicsingleton
	if studentdicsingleton == None:
		try:
			studentdicsingleton = json.load(open("student.json","r"))
		except Exception as e:
			# TODO gestion des exceptions dans plExecutor
			studentdicsingleton = dict() # retourne un dico vide 
	return studentdicsingleton 


solucedicsingleton=None

def getsoldic():
	"""
	getsutdic loads the soluce.json file in a dictionnary
	"""
	global solucedicsingleton
	if solucedicsingleton == None:
		try:
			solucedicsingleton = json.load(open("soluce.json","r"))
		except Exception as e:
			# TODO gestion des exceptions dans plExecutor
			solucedicsingleton = dict() # retourne un dico vide 
	return solucedicsingleton 
