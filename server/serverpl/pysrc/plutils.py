#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  plutils.py
#
#  Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
#
#  This program is free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 2 of the License, or
#  (at your option) any later version.
#
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#
#  You should have received a copy of the GNU General Public License
#  along with this program; if not, write to the Free Software
#  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
#  MA 02110-1301, USA.
#
#


"""
Fonction utiles pour les grader PL.

"""
import json
import re
import sys

dictrans={ "execution": "Exécution" ,"error":"Erreur","compile":"Compilation ","feedback":"Retours"}

# le checktaboo doit être fait en debut de grader
def checktaboo(taboo,studentfile="student.py"):
	"""
	check taboo est brutal
	il faudrais faire une analyse du code avec l'AST pour
	être sur que les mots clefs sont vraiment des mots clef
	pas des truc ou les loups 'bass' sont transformée en 'bbotom'.
	"""
	globaltaboo = False
	ltaboo = taboo.split('|')
	mots = open(studentfile,"r").read() #
	for x in ltaboo:
		reexp=re.compile(x)
		if reexp.search(mots) :
			globaltaboo = True
	return globaltaboo



def feedback(success=True,**kwargs):
	message=""
	d=  { "success": success , "execution" : "", "feedback": "", "other": "","error":""}
	for k in dictrans.keys():
		if k in kwargs.keys():
			message += "# "+dictrans[k] + "\n"
			message += kwargs[k] + "\n"
	d["feedback"]=message
	return json.dumps(d)


def dodump(dr,ev=0):
	#for key in ['execution','feedback','error','other','error']:
	#	dr[key]= '<br>'.join(dr[key].split("\n"))
	pld=getpldic()
	if "help" in pld:
		dr['feedback'] += pld["help"]
	if dr["success"] and "taboo" in pld and checktaboo(pld["taboo"]):
		dr["success"]=False
		dr['feedback'] += "# TABOOOOO \n\n Vous avez utilisé un terme interdit \n\n"+pld['taboo']
	print(json.dumps(dr))
	sys.exit(ev)


# dépréciée
def success(message):
	dico_reponse = { "success": True ,
	"execution" : "",
	"feedback": "# Bravo ! \n\n vous avez réussit l'exercice\n"+message,
	"other": "","error":""}
	dodump(dico_reponse)

# dépréciée
def compileerror(message):
	"""
	compileerror("les messages du compilateur pour l'execution ")

	"""
	message = "\n\n".join(pldecode(message).split("\n"))
	dico_reponse = { "success": False ,
	 "feedback": "# Erreur de compilation \n\n Le compilateur à détecté une erreur\n\n il faut la corriger\n\n"+message,"errormessages" : "" , "other": "","error":"","execution":"" }
	dodump(dico_reponse)


# dépréciée
def erreurdexecution(message):
	"""
	appellez cette fonction quand il y a une exception dans l'execution
	i.e. stderr non vide
	appeller avec la concaténation de stdout et sdterr
	"""
	dico_reponse = { "success": False ,
	 "feedback": "# Erreur à l'exécution\n Il semble qu'une erreur de programmation\n s'est glissée dans votre code \n# la Sortie standard\n"+str(message),"errormessages" : "" , "other": "","error":"","execution":"" }
	dodump(dico_reponse)


# dépréciée
def failure(message):
	"""
	Une erreur d'excution résultat non conforme aux attentes
	le message contient le nombre de tests réussis et le test en échec
	"""
	dico_reponse = { "success": False , "errormessages" : "" ,
	 "feedback": "#Mauvais résultat \n Il n'y a pas d'erreur dans votre code \n Mais il ne calcule pas le résultat attendu\n # Execution \n "+str(message), "other":"" ,"error":"","execution":""}
	dodump(dico_reponse)


# dépréciée
def plateform(dexec,feedback="# Erreur Plateforme \n Un problème de la plateforme\\n parlez en au professeur\\n passez à l'exercice suivant"):
	feedback += "\n# Execution \n" + dexec['stdout']
	feedback += "\# Erreurs \n"+ dexec['stderr']+"\n"+error
	dico_reponse = { "success": True , "errormessages" : "","feedback": feedback, "other": "","error":"","execution": ""
		}
	dodump(dico_reponse,ev=1)


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
			pldicsingleton = {"plateforme":False,
				"stderr":e,"result":False,
				"stdout":"PlateForme IO ERROR"}
	return pldicsingleton




def pldecode(s):
	if type(s) is str:
		return s
	else:
		return str(s.decode(encoding="utf-8", errors="strict"))




def check_output(want, got, normelize=True):
	"""
	Return True iff the actual output from an example (`got`)
	matches the expected output (`want`).
	If True the second return is
	0 perfect fit
	1 no lines reduced to spaces
	2 Normalization of spaces ( \s* -> \s )
	3 No Spaces in comparaison

	>>> check_output("éeè ","   \\néeè ".encode("utf-8"))
	(True, 1)
	>>> check_output("é  e  è  \\n     ","é e è  ".encode("utf-8"))
	(True, 2)
	>>> check_output("é  e \t è \\n  ","éeè")
	(True, 3)
	"""

	if type(got)== type(b'r') :
		got = got.decode("utf-8")
	if type(want)== type(b'r') :
		want = want.decode("utf-8")
	if got == want:
		return True,0

	# If a line in got contains only spaces, then remove the
	# spaces.
	got = re.sub('(?m)^\s*?$', '', got)
	print(got)
	if got == want:
		return True,1
	# This flag causes doctest to ignore any differences in the
	# contents of whitespace strings.  Note that this can be used
	# in conjunction with the ELLIPSIS flag.
	if normelize : # we want normelized white spaces
		got = ' '.join(got.split())
		want = ' '.join(want.split())
		if got == want:
			return True,2
	# We didn't find any match; return false.
	if True : # no white spaces
		got = ''.join(got.split())
		want = ''.join(want.split())
		if got == want:
			return True,3
	return False,-1





def createInputFile(pld,lastgenerated=True):
	# il faut pour tous les input* verifier que l'execution de student celle de soluce
    # ou bien faire inputgeneratorcalls appels à inputgenerator et verifier la même chose
	"""
	creates a file "input.txt" in current directory
	with the inputgenerator if it exist
	with the input field if it exist
	with input0 to input9 FIXME in this order
	the inputgenerator is considered random
		and new file will create each call

	>>> import os.path
	>>> if os.path.isfile("input.txt"): os.remove("input.txt")
	>>> plk={"inputgenerator":"import random\\nfor  n in range(10):\\n  print(random.randint(4,123))","input":None}
	>>> createInputFile(plk,lastgenerated=True)
	True
	>>> "inputgenerator" in plk
	False
	>>> os.path.isfile("input.txt")
	True
	>>> createInputFile({"inputgenerator":"import random\\nfor  n in range(10):\\n  print(random.randint(4,123))","input":"Toto"}) # ambiguité entre input et inputgenerator
	Traceback (most recent call last):
	...
	SystemExit: 0
	>>> if os.path.isfile("input.txt"): os.remove("input.txt")
	>>> createInputFile({"input": b"1\\n2\\n3\\n4\\n"})
	True
	>>> os.path.isfile("input.txt")
	True
	>>> createInputFile({"input4": b"5\\n5\\n5\\n5\\n"})
	True
	>>> createInputFile({})
	False
	"""

	if 'inputgenerator' in pld:
		with open("inputgen.py","w") as ig:
			print(pld["inputgenerator"],file=ig)
		d=exectojson("inputgen.py")
		if  'input' in pld and pld['input'] != None:
			# TODO remonter une erreur a l'auteur du test
			failure("INPUT ET INPUTGENERATOR AMBIGUITE\\n")
		pld['input']=d['stdout'] # on écrasse le input
		if lastgenerated:
			del pld['inputgenerator'] # doit repondre faux la prochaine fois
	elif not 'input' in pld:
		for i in range(0,10):
			s='input'+str(i)
			if s in pld:
				pld['input']=pld[s]
				del pld[s]
				break

	if 'input' in pld:
		with open("input.txt","w") as it :
			print(pldecode(pld['input']),file=it)
			del pld['input']
		return True
	else:
		return False # retourne faux si pas de input ou si fin des inputs prédéfinis

