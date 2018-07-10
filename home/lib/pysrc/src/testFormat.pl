# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz
title=Toujours Correct
tag=test # N'oubliez pas de remplir ce champs svp

text==

*italic*
**bold**
***bold italic***

# section heading
## sub-section heading
### sub-sub-section heading

* first point
* second point
* third point

An [example link](http://example.com/ "Optional Title") in a sentence.

 $$ x\ =\ \frac{\sqrt{144}}{2}\ \times\ (y\ +\ 12) $$ 

==

grader==
import json
dico_good = { "success": True , "errormessages" : "" , "execution": "OK", "feedback": "ok", "other": "" }


def doGood(success=True,error="",execution="OK",feedback="Bravo",other=""):
	dico_good["success"]=success
	dico_good["error"]=error
	dico_good["execution"]=execution
	dico_good["feedback"]=feedback
	dico_good["other"]=other
	print(json.dumps(dico_good))

sortie="""
*italic*
**bold**
***bold italic***

# section heading
## sub-section heading
### sub-sub-section heading

* first point
* second point
* third point

An [example link](http://example.com/ "Optional Title") in a sentence.

 $$ x\ =\ \frac{\sqrt{144}}{2}\ \times\ (y\ +\ 12) $$ 


"""
doGood(feedback=sortie)

==

