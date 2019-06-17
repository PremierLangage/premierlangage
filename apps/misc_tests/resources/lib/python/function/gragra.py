
import sys
import json 
import pldoctest
#import doctest
doctest=pldoctest

dico_good = { "success": True , "errormessages" : "" , "execution": "OK", "feedback": "ok", "other": "" }
dico_bad = { "success": False , "errormessages" : "création d'une exception", "execution": "", "feedback": "modifier votre valeur", "other": "" }

__doc__=""">>> from student import fizzbuzz
>>> fizzbuzz(3)
'Fizz'
>>> fizzbuzz(7)
'Buzz'
>>> fizzbuzz(33/0) # divi an djskldqhflkjhdfjks
'Fizz Buzz'
>>> fizzbuzz(11)
>>> 
"""


failures,tests = doctest.testmod()
if failures == 0:
	print(json.dumps(dico_good))
else:
	print(dico_bad)
