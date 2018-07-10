

import subprocess
import sys
import pathlib
from .question import Question
from .plrequest import SandboxSession
import json
from .pltp import Pltp

debug=True
verbose=False

defaultsandbox="http://pl-sandbox-test.u-pem.fr/?action=execute"
localsandbox="http://127.0.0.1:8000/sandbox/?action=execute"

commandline= False

def main(repo_dir,exopath,sandboxurl=localsandbox):
	pe = pathlib.Path(exopath)
	s = str(pe.resolve())
	filename=s[len(str(repo_dir)):]
	if verbose :
		pass
	if s.endswith(".pl"):
		return checkplfile(repo_dir,filename,sandboxurl=sandboxurl)
	elif s.endswith(".pltp"):
		return checkpltpfile(repo_dir,filename,sandboxurl=sandboxurl)


def checkpltpfile(repo_dir,exopath,sandboxurl=defaultsandbox):
	print("Test de "+repo_dir+exopath+"\nsur : "+sandboxurl)
	tp = pltp.Pltp.create(exopath,repo_dir)
	ok=True
	for plfilename in tp.listpl:
		print("checking pl file :", repo_dir +plfilename)
		ok=ok and checkplfile(repo_dir,plfilename,sandboxurl=sandboxurl)
		if not ok:
			raise Exception( "Un exercice pose problème pltp non validé")
	return ok
	#pe = pathlib.Path(exopath)
	#s = str(pe.resolve())
	#if verbose:
		#print("Test de "+s+"\nsur : "+sandboxurl)
	#q=question.Question(s[len(str(repo_dir)):],root=repo_dir)
	#dico = q.dico
	#for key in ["introduction","concept","name"]:
		#if not key in dico:
			#raise question.ErrorPL("PLTP sans balise "+key)
	#if verbose: print(dico['concept'])

	### FIX ME tester si les fichier sont connus de git et a jour


def checkplfile(repo_dir,filename,sandboxurl="http://pl-sandbox-test.u-pem.fr/?action=execute",studentfile="print(3000)"):

	q=question.Question(filename,root=repo_dir)
	if verbose : print("Question chargée") 
	if "testcode" in q.dico:
		studentfile=q.dico["testcode"]
	elif "soluce" in q.dico :
		studentfile=q.dico["soluce"]
	s= plrequest.SanboxSession(q,sandboxurl,studentfile)# question,url,studentfile
	print(s.answer)
	result = json.loads(s.answer.text)
	if result["platform_error"] != []:
		print("Erreur de platforme ")
		print(result["platform_error"])
		return False

	if verbose: print("La correction pour "+studentfile+" est "+result["grade"]['feedback'])
	with open("/tmp/result.html","w")as rf:
		print(result["grade"]['feedback'],file=rf)
	print("le feedback est dans file:///tmp/result.html ")
	print("Saving tags")
	for key in q.dico.keys():
		print(key)
	tagl=q.dico["tag"].split("|")
	for tag in tagl:
		plrequest.plcreatetag(tag,description="Initialisation par plcheck\n Dominique Revuz\n")
	print("Tags saved")
	return True

def getrepodir():
	return subprocess.Popen(['git', 'rev-parse', '--show-toplevel'],
	stdout=subprocess.PIPE).communicate()[0].rstrip().decode("utf-8")

def docommit(name):
	if commandline:
		subprocess.run(['git', 'commit','-m','"plcheck commit"', name])


if __name__ == '__main__':
	commandlne=True
	repo_dir = getrepodir()
	if repo_dir == "" :
		sys.exit(-1)

	if debug :
		print("Traitement du repo"+repo_dir)

	sys.argv.pop(0)
	while sys.argv[0][0]=='-':
		if sys.argv[0][1]=='v':
			verbose = True
		sys.argv.pop(0)
	while sys.argv :
		try:
			if main(repo_dir,sys.argv[0]):
				docommit(sys.argv[0])
		except question.ErrorPL as e:
			print("Fichier ",sys.argv[0]," incorrect ",str(e))
		except Exception as e:
			print("Problem avec ",sys.argv[0])
			raise e
		sys.argv.pop(0)
		if sys.argv :
			input("Fichier suivant")

	sys.exit(0)
