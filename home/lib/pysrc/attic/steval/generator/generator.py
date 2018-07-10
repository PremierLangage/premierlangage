#! /usr/bin/env python3
"""
An assignment generator loading PL files as dictionaries

@author: chilowi at u-pem.fr
"""

from steval.utils import compute_relpath, jsoniblify, i18n, update_dict
from steval.executor.sandbox.sandbox import Sandbox
from steval.config import DICT_KEYS, SUBSTITUERS

import os, sys, re, json, logging, random
from collections import OrderedDict

logger = logging.getLogger(__name__)

class DictionaryLoader(object):
	"""
	Format of the file (list of key-value entries):
	`key=value` for a single line entry
	`key==line1\nline2\n...\n==` for a multiline entry
	""" 
	def load(self, filepath, root_directory, parser):
		working_directory = os.path.dirname(filepath)
		with open(filepath) as f:
			return parser(f.read(), working_directory, root_directory)
	def load_pl_file(self, filepath, root_directory):
		return self.load(filepath, root_directory, self.parse_pl_content)
	def parse_value(self, content, working_directory=None, root_directory=None, multiline=False):
		if not multiline and content.startswith("@"):
			return self.load(compute_relpath(root_directory, working_directory, content[1:]), root_directory, parser=self.parse_pl_content)
		elif not multiline and content.startswith("§"):
			return self.load(compute_relpath(root_directory, working_directory, content[1:]), root_directory, parser=self.parse_value)
		elif content.startswith("[") or content.startswith("{"):
			return json.loads(content)
		else:
			try:
				return int(content)
			except:
				pass
			try:
				return float(content)
			except:
				pass
			return str(content)
	def parse_pl_content(self, content, working_directory=None, root_directory=None):
		# parsing the PL file
		regex = re.compile("^([^=]+)=(.*)$", re.M)
		regex2 = re.compile("^==\\s*$", re.M)
		d = OrderedDict()
		go = True
		offset = 0
		while go:
			m = regex.search(content, offset)
			if m:
				name = m.group(1)
				value = m.group(2)
				multiline = False
				if value.startswith("="):
					# Multiline value
					multiline = True
					m2 = regex2.search(content, m.end()+1)
					if m2:
						value = content[m.start(2) + 1: m2.start()].strip()
						offset = m2.end()
					else:
						value = content[m.start(2) +1:]
						offset = len(content)
				else:
					offset = m.end()
				d[name] = self.parse_value(value, working_directory, root_directory, multiline=multiline)
			else:
				go = False
		return d
		
class DictionaryTransform(object):
	def __init__(self):
		pass
	def transform(self, data):
		raise NotImplementedError()		

class DictionaryInheriter(object):
	"""
	A transform exploiting inheritance
	"""
	def transform(self, data):
		if "template" in data:
			data2 = OrderedDict(self.transform(data[DICT_KEYS.template]))
			for (k, v) in data.items():
				if k != DICT_KEYS.template:
					data2[k] = v
			return data2
		else:
			return data # do nothing
			
class DictionarySubstituer(DictionaryTransform):
	"""
	A transform substituting variables
	"""
	DEFAULT_MEMORY_LIMIT = 100000000 # in bytes
	DEFAULT_CPU_LIMIT = 1000 # in milliseconds
	def __init__(self, sandbox=True):
		self.sandbox = sandbox
	def transform(self, data):
		if DICT_KEYS.substituer in data:
			return self.substitute(data, SUBSTITUERS.get(data[DICT_KEYS.substituer]), data.get(DICT_KEYS.init, None))
		else:
			return data
	def substitute(self, data, substituer, init):
		"""Use a sandbox for the substitution"""
		sandbox = Sandbox(memory_limit=self.DEFAULT_MEMORY_LIMIT, cpu_limit=self.DEFAULT_CPU_LIMIT, enabled=self.sandbox)
		try:
			return sandbox.eval(self._substitute, data, substituer, init)
		except Exception as e:
			raise Exception("Sandboxed substitution failed", e)
	def _substitute(self, data, substituer, init):
		"""This method should always be called in a sandbox since we evaluate Python code from foreign sources"""
		data2 = OrderedDict()
		if init:
			data2.update(data)
			data2["data"] = OrderedDict()
			exec(init, data2)
			# flatten entries from data to the parent dictionary
			for (k, v) in data2.get("data", {}).items():
				data2[k] = v
			data2.pop("data")
		def subst(v):
			v2 = ""
			i = 0
			single = True
			value = None # if a single value is present
			for m in substituer.finditer(v):
				a = v[i:m.start()]
				if a:
					v2 += v[i:m.start()]
					single = False
				value = eval(m.group(1), data2)
				v2 += str(value)
				i = m.end()
			if v[i:]:
				v2 += v[i:]
				single = False
			return value if single else v2 
		def subst2(structure):
			if isinstance(structure, (list, tuple)):
				return [ subst(v) for v in structure ]
			elif isinstance(structure, dict):
				return OrderedDict([ (k, v) for (k, v) in structure.items() ])
			elif isinstance(structure, str):
				return subst(structure)
			else:
				return structure
		for (k, v) in data.items():
			if k in (DICT_KEYS.substituer, DICT_KEYS.init): continue
			data2[k] = subst2(v)
		return data2
	
def split_key(key):
	"""Split a key into two parts: its main name and its language extension"""
	pointpos = key.rfind(".")
	if pointpos and pointpos == len(key) - 3:
		return (key[0:pointpos], key[pointpos+1:])
	else:
		return (key, "")
	
class Internationalizer(DictionaryTransform):
	def transform(self, data):
		if isinstance(data, dict):
			entries = {}
			for (k, v) in data.items():
				if isinstance(v, str):
					(key, lg) = split_key(k)
					entries.setdefault(key, {})[lg] = v
			entries = dict(filter(lambda kv: len(kv[1]) > 1, entries.items())) # keep only the values with several languages
			# print("Internationalization: {}".format(entries))
			# rewrite the data dictionary
			data2 = OrderedDict()
			for (k, v) in data.items():
				k2 = split_key(k)[0] if isinstance(k, str) else None
				if k2 in entries:
					if k2 not in data2:
						data2[k] = i18n(**entries.get(split_key(k)[0]))
				else:
					data2[k] = self.transform(v)
			return data2
		elif isinstance(data, (list, tuple)):
			return [ self.transform(element) for element in data ]
		else:
			return data
		
def load_dictionary(filepath, root=None, sandbox=True):
	"""Default method to load a dictionary using the standard chain: 
	loader, inheriter and substituer"""
	if root is None:
		# is there a double slash in the filepath to mark the root directory?
		i = filepath.find("//")
		if i >= 0:
			root = filepath[0:i]
		else:
			root = os.path.dirname(filepath)
	logger.info("Loading dictionary in file {} with root {}".format(filepath, root))
	d = DictionaryLoader().load_pl_file(filepath, root)
	for transform in (DictionaryInheriter().transform, DictionarySubstituer(sandbox=sandbox).transform, Internationalizer().transform):
		d = transform(d)
	return d
		
if __name__ == "__main__":
	# load the dictionary and dump it under a JSON format
	import argparse
	parser = argparse.ArgumentParser()
	parser.add_argument("-r", "--root", help="Root directory (that forbids climbing upon it)")
	parser.add_argument("-l", "--language", default=None, help="Filter the internationalized entries by keeping only those matching the language")
	parser.add_argument("-d", "--disable-sandbox", action="store_true", default=False, help="Disable the sandbox mode to generate the assignment (useful for debug purposes)")
	parser.add_argument("filepath", help="Filepath to the PL-formatted file (- to read from STDIN)")
	args = parser.parse_args(sys.argv[1:])
	print(json.dumps(jsoniblify(load_dictionary(args.filepath, args.root, sandbox=not args.disable_sandbox), language=args.language)))
