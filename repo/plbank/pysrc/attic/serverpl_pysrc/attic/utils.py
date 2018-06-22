#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  utils.py
#
#  Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
#
# help functions to use in the PL project
#
#

import subprocess
import json
import sys
import re
import os

from plutils import *






def exectojson(target,infile=None,jsonfile=None,timeout=1):
	"""
	exectojson execute the shell process
	python3 target <infile
	catches the result, stdout, stderr of this process and
	return a dictionnary with these three values
	if jsonfile != None:
		a jsondump of the dictionnary is done in the file named jsonfile
	the process is kill after a timeout (1 default) seconds


		>>> d=exectojson("xx.py",infile="entrrrrrrree.tex")
		>>> d['result']==False
		True
		>>> d['stdout'] == "PlateForme IO ERROR"
		True

		>>> f=open("entree.tex","r")
		>>> d=exectojson("tolong.py",infile="entree.tex")
		>>> d['result']
		False
		>>> d['stdout']
		"temps d'execution trop long"

		>>> d=exectojson("xx.py",infile="entree.tex")
		>>> d['result']
		True
		>>> d['stdout']
		"procesus fils\\nj'ai lu  PAS DE PROBLEM DE LECTURE\\n"
		>>> d=exectojson("xx.py") # pas d'input
		>>> d['result']
		False
		>>> d['stdout']
		'procesus fils\\n'
		>>> exectojson(['-m','doctest','testofdoc.py'])
		>>> d['result']
		True

	"""
	# TODO can i check the existance of python3 ?
	# CHECKME no options
	if isinstance(target, str):
		args=['python3',target]
	elif isinstance(target, list):
		args=['python3']
		args.extend(target)
	else:
		raise TypeError(target)
	try:
		if infile:
			entry = open(infile, "rb")
			cp = subprocess.run(args, input=entry.read(),
				stdout=subprocess.PIPE,stderr=subprocess.PIPE,
				timeout=timeout)
		else:
			cp = subprocess.run(args, stdin=subprocess.DEVNULL, stdout=subprocess.PIPE,stderr=subprocess.PIPE, timeout=timeout)
		dico = {"plateforme":True,"stderr":cp.stderr.decode("utf-8"),"result":(cp.returncode==0),"stdout":cp.stdout.decode("utf-8"),"cp":cp,"pwd":os.getcwd()}
		return(dico)
	except (OSError, IOError) as e:
		dico = {"plateforme":False,"stderr":e,"result":False,"stdout":"PlateForme IO ERROR"}
	except subprocess.TimeoutExpired as toe:
		dico = {"plateforme":True,"stderr":toe,"result":False,"stdout":"temps d'execution trop long"}

	if jsonfile:
		with open(jsonfile,"w") as jsf:
			json.dump(dico, fp=jsf,sort_keys=True)
	return(dico)

def compiletest():
	"""
	TODO ne détecte pas les erreurs de compile dans une fonction
	>>> _createStudentCode("@ <- ça grosse erreur de compile ")
	>>> compiletest()
	Traceback (most recent call last):
	...
	SystemExit: 0
	>>> _createStudentCode("print('titi') ")
	>>> compiletest()
	True
	"""
	EEE=None
	import py_compile
	try:
		x= py_compile.compile("student.py",doraise=True)
	except Exception as EE:
		# feedback.compileError(EE)
		EEE=EE
		return False	
	else:
		return True





def prepareFileInputOutput(n,pld):
	"""
	>>> import os
	>>> os.remove("input.txt")
	>>> prepareFileInputOutput(1,{"input1":"","output1":""})
	True
	>>> os.path.exist("input.txt")

	>>> prepareFileInputOutput(2,{"input1":"","output1":""})
	False
	"""
	si="input"+str(n)
	so="output"+str(n)
	if si in pld and so in pld :
		try:
			with open("input.txt","w") as it :
				print(pldecode(pld[si]),file=it)
				del pld[si]
			with open("output.txt","w") as ot :
				print(pldecode(pld[so]),file=ot)
				del pld[so]
		except EnvironmentError as e:
			return False
		return True
	return False

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


def compareexecution():
	"""
	check the execution of student with input = input.txt
	against the execution of soluce with input = input.txt
	"""
	dt= exectojson("soluce.py",infile="input.txt")
	ds= exectojson("student.py",infile="input.txt")
	if check_output(dt['stdout'],ds['stdout']):
		# TODO
		return True,"",""
	else:
		return False,str(dt['stdout']),str(ds['stdout'])


def comparetoexpected(output):
	"""
	check the execution of student with input = input.txt
	against the execution of soluce with input = input.txt
	"""
	ds= exectojson("student.py",infile="input.txt")
	
	if check_output(dt['stdout'],output):
		# TODO
		return True,"",""
	else:
		return False,str(dt['stdout']),str(ds['stdout'])



def dumpdic(dic):
	import json
	f=open("pl.json","w")
	print(json.dump(dic,f,sort_keys=True))
	f.close()
	return

def _createStudentCode(code):
	f=open("student.py","w")
	print(code,file=f)
	f.close()

def testexpectedoutput():
	pld=getpldic()
	if not createInputFile(pld): # il n'y a pas de fichier d'entrée
		d=exectojson("student.py")
	else:
		d=exectojson("student.py",infile="input.txt")
	if check_output(pld['expectedoutput'],d['stdout']):
		success(pld['expectedoutput'])
	else:
		message = "Votre script ne produit pas la bonne sortie.\n\nsortie attendue:\n" + pld['expectedoutput']
		message += "\n\nsortie optenue:\n\n" + pldecode( d['stdout'])
		erreurdexecution(message)

def inputoutput():
	""" appellée si il y a une balise output 
	"""
	result=True # a priori cela se passe bien
	pld=getpldic()
	si="input"
	so="output"
	i= -1
	while si in pld and so in pld:
		# feedback.addinput(pld[si])
		theoutput = subprocess.check_output(["python","student.py"],input=pld[si].encode("utf-8"))
		theoutput= theoutput.decode("utf-8")
		if not theoutput == pld[so]:
			# resultat mauvais
			# feedback.addAttendu(pld[so])
			print("Attendu >>>>"+pld[so]+"<<<<")
			# feedback.addOptenu(theoutput)
			print("Optenu >>>>"+theoutput+"<<<<")
			result = False
		else:
			# feedback.addSortie(pld[so])
			pass
		i=i+1
		si="input"+str(i)
		so="output"+str(i)
		print(si,so)
	return result


def testpltest():
	pld=getpldic()
	with open("pltest.py","w") as pltf :
		with open("student.py","r") as f:
			print("\"\"\"\n"+pld["pltest"]+"\"\"\"",file=pltf)
			print(f.read(),file=pltf)
	os.environ['TERM']="linux"# bug in readlinhttps://bugs.python.org/msg191824
	d=exectojson(['-m','pldoctest','-v','pltest.py'])
	if d['result']:
		success("# Bravo \n\nTout les tests sont passés \n\n")
	else:
		erreurdexecution("# Execution des Tests\n\n"+"<br>".join(d['stdout'].split("\n")))


def testsoluce():
	pld=getpldic()
	if "generateinput" in pld:
		nbt2g = int(pld["generateinput"])
	else:
		nbt2g=3
	NBT=0 # NOMBRE DE TESTS REUSSIT
	didcreate =  createInputFile(pld,lastgenerated=False)
	if not didcreate :
		plateform({}) # pas d'input définis ni de inputgenerator
	while  didcreate:
		r,want,got = compareexecution()
		if not r : # echec d'un test
			message= "# "+ str(NBT)+" tests réussits\n"
			message += "entree:\n"
			message += open("input.txt","r").read()
			message += "\nsortie attendue:\n" + str(want)
			message += "\nsortie optenue:\n" + str(got)
			failure(message)
		else:
			NBT+=1
			lastgenerated = (NBT<nbt2g)
			didcreate  =  createInputFile(pld, lastgenerated  )
	message="%d tests passé avec succes " % NBT
	success(message)

def grade():
	"""
	# pour que ce test fonctionne il faut un fichier pl.json
	>>> dumpdic({"input":"1\\n2\\n","expectedoutput":"1\\n2\\n"})
	None
	>>> _createStudentCode("print(input())\\nprint(input())\\n")
	>>> d=grade()
	Traceback (most recent call last):
	...
	SystemExit: 0
	>>>
	"""
	
	pld=getpldic()
	if 'taboo' in pld:
		checktaboo(pld['taboo'])
	compiletest()
	if 'expectedoutput' in pld:
		return testexpectedoutput()
	elif 'pltest' in pld:
		return testpltest()
	elif 'soluce' in pld:
		return testsoluce()
	else:
		plateform(message="Utilisez une méthode d'évaluation expectedoutput,pltest,soluce,input-output\\n")


def main(args):
	pld=getpldic()
	print(pld)
	print(inputoutput())
	
	print("ce fichier n'est pas un script principal",file=sys.stderr)
	return 1

if __name__ == '__main__':
    import sys
    sys.exit(main(sys.argv))
