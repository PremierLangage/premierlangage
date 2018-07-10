#! /usr/bin/env python3
"""
Configuration information for the bench runner

@author: chilowi at u-pem.fr
"""

import re

MAX_OUTPUT_SIZE = 2**16 # maximal output of the bench (in bytes)

class DICT_KEYS:
	"""Dictionary keys definition that have a special meaning"""
	_k = lambda x: x
	template = _k("template") # for dictionary inheritance
	substituer = _k("subst") # the substituer regexp (or keyword)
	init = _k("init") # code that is executed before the generation of the dictionary
	precode = _k("code") # code that is executed before testing
	code = _k("soluce") # for the answer code
	proposed_code = _k("student") # code proposed by the student
	taboo = _k("taboo") # taboo keywords
	
class SUBSTITUERS:
	"""Common substituers"""
	shell = re.compile("\\$\\{([^\\}]+)\\}")
	@classmethod
	def get(cls, name):
		s = getattr(cls, name, None)
		if s:
			return s
		else:
			return re.compile(name)
