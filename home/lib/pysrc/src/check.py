#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  check.py
#
#  Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
#

import sys
import os
import re
import json
#import tempfile
import time
import shutil
import subprocess



debug=True
#debug=False




def openandsplit(filename):
	try:
		return open(filename,"r").read().split("\n")
	except IOError as e:
		print(e)
		sys.exit(1)

"""
env racine="la racine de votre repository"
cd $racine
python3 check.py python/.../exo.pl

permet de verifier si est syntaxiquement correct et si les fichiers existent.

Creation du Dictionnaire
construction d'un fichier json de l'exercice
BUG: chargement du json
construction du repertoire d'execution dans /tmp
	creation grader.py
	copie des fichiers
	création du pl.json
TODO
verifier l'execution du grader dans /tmp
verifier Error de execution avec student vide
si soluce verifier ok avec student copie de soluce
verifier Error avec erreur de compile

Faire un check au niveau pltp.
Avec verification de tout les fichiers liés

"""





#def buildregexep():
	#single = '^(?P<s_attributes>[0-9a-zA-Z]*)\s*=\s*(?P<s_values>[^\s=][^#]*)(\s*(#.*|))$'

	#multiple ='^(?P<m_attributes>[a-zA-Z][0-1a-zA-Z]*)\s*==.*$(?P<m_values>.*)^==$'


	#comment ='^(?P<comment>\s*#.*)$'
	#espace = '^\s*$'
	#pcre = '('+ espace+')|('+comment+')' #+')|('+single+')|('+multiple
	##print(pcre)
	#return re.compile(pcre, re.VERBOSE | re.M)

def baseline(text,d):
	"""
	analyse a base line that can be
	empty -> return False,None
	online def (with optional comment) -> add def to dictionnary and return False, None
	comment -> return False, None
	multiline first line -> return True,name

	>>> baseline(" ",None)
	(False, None)
	>>> baseline(" # ceci est un commentaire ", None)
	(False, None)
	>>> d={}
	>>> baseline(" simple= prout prout",d)
	(False, {'simple': 'prout prout'})
	>>> baseline("simple= ceciestsimple",d)
	(False, {'simple': 'ceciestsimple'})
	>>> baseline("files=@    /python/template/template.py  ",d)
	(False, '/python/template/template.py')
	>>> baseline(" multi== caractères en trops ",d)
	(True, 'multi')
	"""
	single = '(?P<s_attributes>[0-9a-zA-Z]*)\s*=\s*(?P<s_values>[^\s=][^#]*)(#?.*)$'
	there = re.compile(single)
	respace = re.compile("^\s*$")
	recomment = re.compile('^\s*(?P<comment>#.*)$')
	remul = re.compile('^\s*(?P<m_name>[a-zA-Z][0-1a-zA-Z]*)\s*==.*$')
	refiles = re.compile('^files=@\s*(?P<f_name>[^\s@]+)\s*$')
	redefbyfile = re.compile('^(?P<s_attributes>[0-9a-zA-Z]*)=@\s*(?P<f_name>[^\s@]+)\s*$')
	if text == "":
		return False,None
	elif respace.match(text):
			return False,None
	m= recomment.match(text)
	if m :
		return False,None
	m = refiles.search(text)
	if m :
		if not "files" in d:
			d['files']=[]
		d['files'].append(m.group("f_name"))
		return False,d
	m = redefbyfile.match(text)
	if m:
		# lire le fichier paramêtre
		try:
			f=open(m.group("f_name"),"r")
			d[m.group("s_attributes")]=f.read()
		except :
			print("can't  open file ",m.group("f_name")," for ",m.group("s_attributes")," value")
			sys.exit(5)
	m = remul.match(text)
	if  m :
		return True, m.group("m_name")
	m = there.search(text)
	if m :
		# if not allready defined use template's version
		if not m.group("s_attributes") in d:
			d[m.group("s_attributes")]= m.group("s_values")
		#else:
		#	print(m.group("s_attributes"),"rédéfini\n")
		return False,d
	return None,None


# racine = ""
# racine=os.environ["racine"]
#racine="/Users/dr/DJANGO/pltutorial"


def printdico(d):
	"""
	output a dict with values reduced to 30 chars
	>>> printdico({"toto":"titixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"})
	toto : titixxxxxxxxxxxxxxxxxxxxxxxxxx
	>>> printdico({})
	>>> printdico({"to":"\n\n","ville":"champagne"})
	ville : champagne
	to : 


	"""
	for k in d.keys():
		if type(d[k]) == str :
			print(k,":",d[k][0:30])
		elif type(d[k]) == list :
			print(k,":",d[k][0])
		else:
			for kk in d[k].keys():
				print(k,kk)

def parse(name,dico):
	"""
	a list of lines converted in a dictionnary
	"""
	lines = openandsplit(name)
	multi = False
	for laligne in lines:
		if not multi:
			multi,multiname =  baseline(laligne,dico)

			multivalue=""
		elif multi :
			#print("multi",multiname,"<"+laligne+">")
			if laligne=="==" :
				dico[multiname]=multivalue
				multi = False
				multiname = None
			else:
				multivalue += laligne + "\n"
	#printdico(dico)
	return dico


def perror(m):
	import sys
	print(m,file=sys.stderr)



def checkkeys(dic):
	valide=True
	if not "text" in dic:
		perror("N'a pas de balise text c'est à dire pas de sujet pour l'élève")
		valide=False
	if not "name" in dic:
		perror("N'a pas de balise Name obligatoire")
		valide=False
	if not "title" in dic:
		perror("N'a pas de balise Title obligatoire")
		valide=False
	if "gradertype" in dic:
		perror("Grader personnel \n\n A vos risques et périls\n\nFaites le verifier par un autre utilisateur avant la mise en production\n")
	elif not "pltest" in dic and not "soluce" in dic and not "expectedoutput" in dic:
		perror("Aucune balise d'évaluation: pltest soluce or expectedoutput")
		valide=False
	if not "grader" in dic and  "basefiles" in dic and "grader.py" not in dic["basefiles"]:
		perror("Error no grader, and no grader.py in files")
		valide=False
	return valide

def buildir(dic, namedic={"grader":"grader.py","testcode":"testcode.py","soluce":"soluce.py","testcode":"testcode.py"}, dirname=None ):

	"""
	Création du répertoire de l'exercice a partir du dic
	FIXME y a un problème avec json
	"""
	# verification de la cohérence du sujet
	if not checkkeys(dic):
		sys.exit(1)
	
	print("Dirname ",dirname)
#	with  tempfile.TemporaryDirectory(dir="/tmp") as dirname:
#		print(dirname)
	if not dirname:
		dirname="/tmp/pldir"+str(int(time.time()))
	os.mkdir(dirname)
	os.chdir(dirname)
	# écriture des fichiers dans le répertoire de travail
	for k in dic:
		if k in namedic:
			with open(namedic[k],"w") as gf:
				print(dic[k],file=gf)
	if "basefiles" in dic:
		bd = dic["basefiles"]
		for k in bd.keys():
			with open(k,"w") as gf :
				print(bd[k],file=gf)
		del dic["basefiles"] # FIXME je retire les fichier de pl.json
	json.dump(dic,open("pl.json","w"))
	testexecution(dirname)

def main(plname,dirname=None):
	if not plname.endswith(".pl"):
		print("Type de fichier incorrect doit finir par .pl",file=sys.stderr)
		return 1
	if not plname.startswith("/"):
		print("Il faut que le nom soit absolu par rapport a la racine du git",file=sys.stderr)
		return 1
	dico={}
	parse(racine+plname,dico)
	### Appel récursif sur le template 
	while "template" in dico:
		templatename = dico['template']
		if not templatename.endswith(".pl") :
			templatename += ".pl"
		del dico['template'] # on boucle sur les templates
		dicttt={}
		dicx =parse(racine+templatename,dicttt)
		dicx.update(dico)
		dico=dicx
	# read the files
	if 'files' in dico:
		dico["basefiles"]={}
		l = dico['files']
		del dico['files']
		for x in l:
			name = os.path.basename(x)
			if name in dico:
				perror("le nom ",name, " est déja défini ")
			try:
				f= open(racine+x,"r")
				dico["basefiles"][name]=f.read()
			except Exception as e:
				print(e)
				print("le fichier de la directive files",racine+x,"ne peut être ouvert")

	name = plname.split("/")[-1][:-3]
	name += ".json"
	fjdump= open(name,"w")
	json.dump(dico,fjdump)
	return buildir(dico,dirname=dirname)


def createStudentPy(text):
	with open("student.py","w") as f :
		print(text,file=f)
	return

def createStudentFromSoluce():
	try:
		with open("soluce.py","r") as solf :
			text = solf.read()
			createStudentPy(text)
	except IOError as e:
		return False
	return True


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
	if debug:
		print("debug >>> pldicsingleton ==\n"+str(pldicsingleton))
	return pldicsingleton




def getExecDic(diex):
	try:
		return json.loads(diex["stdout"].decode("utf-8"))
	except Exception as e:
		print("Problem d'execution du grader"+str(e),file=sys.stderr)
		bash_command("python3 grader.py")
		print(" Hop !!")

def bash_command(cmd):
    subprocess.Popen(['/bin/bash', '-c', cmd])



def controlcoherencecheck():
	args=['python3','grader.py']
	timeout=1
	createStudentPy(" print('je suis mal indenté')\n")
	cp = subprocess.run(args, stdin=subprocess.DEVNULL, stdout=subprocess.PIPE,stderr=subprocess.PIPE, timeout=timeout)
	dicr = {"plateforme":True,"stderr":cp.stderr,"success":cp.returncode==0,"stdout":cp.stdout}
	if debug :
		print("<<<<debug>>>>:",dicr)
	if getExecDic(dicr)["success"] :
		print("ERREUR : Non détection d'une erreur de compilation : ",cp.stdout)
		sys.exit(2)

	# Test is soluce ok
	if createStudentFromSoluce():
		cp = subprocess.run(args, stdin=subprocess.DEVNULL, stdout=subprocess.PIPE,stderr=subprocess.PIPE, timeout=timeout)
		dicr = {"plateforme":True,"stderr":cp.stderr,"result":cp.returncode==0,"stdout":cp.stdout}
		print("===",cp.stdout)
		if cp.stdout == b'' :
			print("test soluce sans sortie standard LOUCHE ")
		if getExecDic(dicr)["success"] :
			print("test soluce against la soluce ok")
		else:
			print(" Apriori une erreur de compile de la soluce ")
			print(" Détection d'un problème inexistant \n",cp.stdout)
			sys.exit(4)

def testexecution(dummy):
	"""
	"""
	controlcoherencecheck()# Verification que le grader fonctionne
	args=['python3','grader.py']
	timeout=1
	# Test pltest
	pld = getpldic()
	if "pltest" in pld or "gradertype" in pld :
		try:
			if debug:
				print("<<<<debug>>>>: testexecution")
			tcf =  open("testcode.py","r")
			createStudentPy(tcf.read())
			os.environ['TERM']='linux' # bug dans readline
			cp = subprocess.run(args, stdin=subprocess.DEVNULL, stdout=subprocess.PIPE,stderr=subprocess.PIPE, timeout=timeout)
			dicr = {"plateforme":True,"stderr":cp.stderr,"result":cp.returncode==0,"stdout":cp.stdout}
			#print(cp)
			if cp.stderr != b'' :
				print("plateforme error:",cp.stderr)
			if getExecDic(dicr)["success"] :
				print("bravo votre correction fonctionne ")
			else:
				print(" votre correction ne fonctionne pas : ",cp.stdout)
		except IOError :
			print(" Vous n'avez pas founir de balise testcode pour controler vos pltest")




if __name__ == '__main__':
	import sys
	racine=os.environ["racine"]
	if sys.argv[1].endswith(".pl"):
		dirname= main(sys.argv[1])
#		testexecution(dirname)
	else:
		dirname=None
		sys.argv.pop(0) # name of command
		while sys.argv :
			if sys.argv[0] == "-d" :
				mode = "dir"
				sys.argv.pop(0)
				dirname = sys.argv.pop(0)
			elif sys.argv[0] == "-t" :
				mode = "test"
				sys.argv.pop(0)
			else:
				main(sys.argv[0],dirname=dirname)
#				testexecution(dirname)
				dirname += "N"
				sys.argv.pop(0)
else:
	racine=input("Racine de votre environement(/Users/dr/DJANGO/plbank/) ?")
	if racine == "":
		racine = "/Users/dr/DJANGO/plbank/"
	
