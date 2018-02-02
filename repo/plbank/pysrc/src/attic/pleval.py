#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  pleval.py
#
#  Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
#



import subprocess
import json
import sys
from plutils import getpldic,check_output
from utils import createInputFile

# language nom du langage, répertoire des exercices
# studentfile nom du fichier du code étudiant
# cli commande sh pour une execution direct SINON
# clic commande sh pour une compilation
# clie commande sh pour l'exécution du fichier compilé

dicPython={ "language":"python",
		"studentfile":"student.py",
		"pltestfile":"pltest.py",
		"cli":["python3"], # python3 studentfile.py pour expectedoutput
		"tcli":["python3","-m","pldoctest","-v"],# + pltestfile
		}

dicC={ "language":"C",
		"studentfile":"student.c",
		"cli":["tcc","-run","student.c"],  # tcc -run studentfile pour expectedoutput
		"clic":["gcc","-o","student.exe","student.c"],
		"clie":["student.exe"], # if no tcc
		"pltestfile":"pltest.py"
		}






debug=False

class pleval():
	"""
	class de description d'une evaluation
	permet de différencier les langages de programmation
	"""
	def __init__(self,dico=None):
		# default values
		self.language="python"
		self.studentfile="student.py"
		self.cli=["python3","student.py"]
		# must initialise for an other languages
		if dico :
			self.__dict__.update(dico)
		# elements from the exercice
		self.pld = getpldic()
		if self.pld["debug"]=="on":
			debug = True

	def testpltest(self):
		pass

	def grade(self):
		"""
		Fonction principale
		"""
		if "cli" in self.__dict__:
			if 'expectedoutput' in self.pld:
				return self.testexpectedoutput()
			elif 'pltest' in self.pld:
				return self.testpltest()
			elif 'soluce' in self.pld:
				return self.testsoluce()
			else:
				self.doExitMessage(False,["# Utilisez une méthode d'évaluation :","1) expectedoutput","2) pltest","3) soluce"])
		else:
			self.doExitMessage(False,["# Problème plateforme","langage non défini"])

	def doExitMessage(self,resultat,message):
		linedelimiter="\n"
		dico={"error":"vide","execution":"vide","feedback":""}
		if "help" in self.pld :
			message.append("## Aide")
			message.append(pld["help"])
		if resultat and "taboo" in self.pld and checktaboo(self.pld["taboo"]):
			if debug :
				print("taboo",file=sys.stderr)
			resultat=False
			message.append(["## TABOOOOO ","Vous avez utilisé un terme interdit", "## "+self.pld['taboo']])

		dico["success"]=resultat
		dico["feedback"] += linedelimiter.join(message)
		json.dump(dico,fp=sys.stdout)
		if resultat :
			ev = 0
		else:
			ev = 1
		sys.exit(ev)



	def testexpectedoutput(self):
		"""
		build file student.c with
		"""
		if self.language == "C":
			if "before" in self.pld and "after" in self.pld :
				print("before","and","after")
				try:
					f=open("student.c","w")
					sf=open("student.py","r")
					print(pld["before"],file=f)
					print(sf.read(),file=f)
					print(pld["after"],file=f)
					# buid source file
					# avant + student.py + apres
					f.close()
				except Exception as e:
					pass
			else:
				os.rename("student.py","student.c")
		if not createInputFile(self.pld):
			r,d=self.runcli()
		else:
			r,d=self.runcli(infile="input.txt")
		if debug :
			print('debug',d["cp"],file=sys.stderr)
		if r:
			if 'timeout' in d:
				message = ["## Time OUT  "," Temps d'execution trop long" ]
				self.doExitMessage(False,message)
			if check_output(self.pld['expectedoutput'],d['stdout']):
				message = ["## Execution  "," sortie attendue ",d['stdout'],"OK" ]
				self.doExitMessage(True,message)
			else:
				message = ["## Test de Sortie ","Votre script ne produit pas la bonne sortie.","Sortie attendue:"]
				message.append(self.pld['expectedoutput'].split("\n"))
				message.append("sortie optenue:")
				message.append(d['stdout'].split("\n"))
				self.doExitMessage(False,message)
		else: # problème de plateforme
			message= ["# Erreur de Plateforme","Prevenez le chargé de cours."]
			self.doExitMessage(False,message)


	def runcli(self,infile=None,timeout=None):
		"""
		Used to check expectedoutput
		execute self.cli with input file (if any) and time (if any)
		return False,dico in case of a plateforme problem indication are in the dico stdout : reason, stderr: exception
		return True,dico in case of good execution (eventualy a time out)
		 stdout: stdout, stderr:stderr result: exit value
		 timeout: time_ok_or_not
		"""

		try:
			if infile:
				entry = open(infile, "rb")
				cp = subprocess.run(self.cli, input=entry.read(),
					stdout=subprocess.PIPE,stderr=subprocess.PIPE,
					timeout=timeout)
			else:
				cp = subprocess.run(self.cli,
					stdin=subprocess.DEVNULL,
					stdout=subprocess.PIPE,
					stderr=subprocess.PIPE,
					timeout=timeout)
			return True,{ "stderr":cp.stderr.decode("utf-8"),"success":(cp.returncode==0),"stdout":cp.stdout.decode("utf-8"),"cp":cp}
		except subprocess.TimeoutExpired as toe:
			return True,{"stderr":toe,"result":False,"stdout":"temps d'execution trop long", "timeout":True }
		except (OSError, IOError) as e:
			return False,{"stderr":e,"result":False,"stdout":"PlateForme IO ERROR"}
		except Exception as e:
			return False,{"stderr":e,"result":False,"stdout":"UnKown  ERROR"}


