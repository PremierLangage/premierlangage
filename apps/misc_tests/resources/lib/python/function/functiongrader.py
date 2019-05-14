#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  functiongrader.py
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



import sys
import json 
import pldoctest
import io



dico_good = { "success": True , "errormessages" : "" , "execution": "OK", "feedback": "ok", "other": "" }
dico_bad = { "success": False , "errormessages" : "création d'une exception", "execution": "", "feedback": "modifier votre valeur", "other": "" }

def doGood(success=True,error="",execution="OK",feedback="Bravo",other=""):
	dico_good["success"]=success
	dico_good["error"]=error
	dico_good["execution"]=execution
	dico_good["feedback"]=feedback
	dico_good["other"]=other
	print(json.dumps(dico_good)) 

def doBad(success=False,error="Des erreurs dans l'exécution",execution="pas de sorties",feedback="Corrigez votre code",other=""):
	dico_good["success"]=success
	dico_good["error"]=error
	dico_good["execution"]="<br>".join(execution.split("\n"))
	dico_good["feedback"]=feedback
	dico_good["other"]=other
	print(json.dumps(dico_good)) 




def grade():
	with io.StringIO() as bob:
		# TODO il faut tester si le code compile avant de lancer les test pour clarifier les messages d'erreurs 
		oldstd = sys.stdout
		sys.stdout = bob
		failures,tests = pldoctest.testmod(name=" Votre Code <br> ")
		sys.stdout=oldstd
		if failures ==0:
			doGood(execution=bob.getvalue())
		else:
			doBad(execution=bob.getvalue(),feedback=" %d tests raté sur %d " % (failures,tests))


# modif pour probleme de syncro a effacer
