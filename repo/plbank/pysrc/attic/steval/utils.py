#! /usr/bin/env python3
"""
Some useful classes and functions

@author: chilowi at u-pem.fr
"""

import os, sys, io, collections, traceback
from collections import OrderedDict

DISABLE_TRACEBACK = False # FIXME: allow traceback with sandboxing

class ReadOnlyDictWrapper(collections.Mapping):
	"""An immutable wrapper for a dictionary"""
	def __init__(self, data):
		self._data = data
	def __getitem__(self, key):
		return self._data[key]
	def __iter__(self):
		return iter(self._data)
	def __len__(self):
		return len(self._data)
		
class PrefixMapping(object):
	"""Query the longest prefix from the collection"""
	def __init__(self, elements):
		self._prefixes = set()
		for element in elements:
			for i in range(1, len(element)+1):
				self._prefixes.add(tuple(element[0:i]))
	def __getitem__(self, key):
		i = 0
		while i < len(key) and tuple(key[0:i+1]) in self._prefixes:
			i += 1
		return key[0:i]
		
class LimitedModule(object):
	"""A module proxy exposing only the wished members"""
	def __init__(self, module, *whitelist):
		self.module = module
		self.whitelist = whitelist
	def __getattr__(self, k):
		if k in self.whitelist:
			return getattr(self.module, k)
		else:
			raise KeyError("The member {} of the module is not in the authorized whitelist".format(k))
			
		
limited_sys = LimitedModule(sys, "stdin", "stdout", "stderr")

def compute_relpath(root, current_dir, path):
	if not root.endswith("/"): root += "/"
	root = os.path.abspath(root)
	current_dir = os.path.abspath(current_dir)
	if not current_dir.startswith(root):
		raise IOError("The current dir {} is not under the root {}".format(current_dir, root))
	if path.startswith("/"):
		path = os.path.abspath(os.path.join(root, path[1:]))
	else:
		path = os.path.abspath(os.path.join(current_dir, path))
	if not path.startswith(root):
		raise IOError("The specified path {} tries to escape from the root dir {}".format(path, root))
	return path

def get_traceback_str(trace=None):
	if trace is None:
		trace = sys.exc_info()[2]
	container = io.StringIO()
	if not DISABLE_TRACEBACK:
		traceback.print_tb(trace, file=container) # FIXME: cause a problem with seccomp sandboxing
	return container.getvalue()

class i18n(object):
	"""Useful to represent an internationalized string"""
	def __init__(self, **strings):
		self.strings = strings # internationalized strings in a dictionary indexed by the language
		if "_" in self.strings:
			self.strings[""] = self.strings.pop("_")
	def get(self, language):
		s = self.strings.get(language, self.strings.get("", None))
		if s is None:
			for (k, v) in self.strings.items():
				s = v
				break
		return s
	def __add__(self, other):
		strings2 = {}
		for (k, v) in strings.items():
			strings2[k] = strings[k] + other.get(k)
		return i18n(strings)
	def format(self, *kargs, **kwargs):
		return i18n(**dict(map(lambda kv: (kv[0], kv[1].format(*kargs, **kwargs)), self.strings.items())))

def jsoniblify(struct, language=None):
	"""Render a data structure jsonable"""
	if struct is None or isinstance(struct, (bool, int, float, str)):
		return struct # no modification
	elif isinstance(struct, (list, tuple)):
		return [ jsoniblify(s, language=language) for s in struct ]
	elif isinstance(struct, dict):
		d = OrderedDict()
		for (k, v) in struct.items():
			d[jsoniblify(k)] = jsoniblify(v, language=language)
		return d
	elif hasattr(struct, "to_dict"):
		return jsoniblify(struct.to_dict(), language=language)
	elif isinstance(struct, i18n):
		if language is None:
			d = OrderedDict()
			update_dict(d, map(lambda k: ("i18n:{}".format(k), struct.strings[k]), sorted(struct.strings) ))
			return d
		else:
			return struct.get(language)
	else:
		return str(struct) # last resort: we convert to a string
	
def i18nize(struct):
	"""Transform i18n dictionaries to i18n objects"""
	if isinstance(struct, (list, tuple)):
		return [ i18nize(s) for s in struct ]
	elif isinstance(struct, dict):
		if struct and all(map(lambda x: isinstance(x, str) and x.startswith("i18n:"), struct)):
			return i18n(**{k[len("i18n:"):]: v for (k, v) in struct.items() })
		else:
			d = OrderedDict()
			for (k, v) in struct.items():
				d[k] = i18nize(v)
			return d
	else:
		return struct

def update_dict(d, entries):
	for (k, v) in entries:
		d[k] = v
	return d

