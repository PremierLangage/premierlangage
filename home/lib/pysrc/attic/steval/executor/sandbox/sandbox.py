#! /usr/bin/env python3
"""
Sandboxing exploiting seccomp kernel functionalities

@author: chilowi at u-pem.fr
"""

import sys, os, resource, json, signal
from steval import utils

class Sandbox(object):
	"""A sandbox using seccomp
	Once all Python modules are imported 
	and brk set to an acceptable amount of memory, 
	the seccomp mode can be enabled"""
	LIBRARY_PATH = os.path.join(os.path.dirname(__file__), "./seccomputils.so")
	def __init__(self, memory_limit=sys.maxsize, cpu_limit=sys.maxsize, enabled=True):
		self.memory_limit = memory_limit
		self.cpu_limit = cpu_limit
		self.enabled = enabled
		self.sandboxed = False # if the sandbox is currently active
	def start(self):
		utils.DISABLE_TRACEBACK = True # FIXME...
		from ctypes import cdll
		lib = cdll.LoadLibrary(self.LIBRARY_PATH)
		if self.cpu_limit is not None:
			resource.setrlimit(resource.RLIMIT_CPU, (self.cpu_limit, self.cpu_limit))
		if self.memory_limit is not None:
			resource.setrlimit(resource.RLIMIT_AS, (self.memory_limit, self.memory_limit))
		r = lib.startSandbox()
		if r == 0:
			print("Irreversibly entered in sandbox mode", file=sys.stderr)
			self.sandboxed = True
		else:
			raise Exception("Cannot start the seccomp sandbox: error {}".format(r))
	def __enter__(self):
		if self.enabled:
			self.start()
		return self
	def __exit__(self, type, value, traceback):
		return None # do nothing since installing the sandbox is irreversible! 
	def eval(self, function, *args, **kwargs):
		"""Evaluate the function in this sandbox"""
		r_pipe, w_pipe = os.pipe()
		pid = os.fork()
		if pid == 0:
			with self:
				valid = True
				os.close(r_pipe)
				result = function(*args, **kwargs)
				try:
					result2 = json.dumps(utils.jsoniblify(result))
				except:
					result2 = json.dumps({"invalidJSON": str(result)})
					valid = False
				os.write(w_pipe, result2.encode("UTF-8"))
				os.close(w_pipe)
				sys.exit(0 if valid else 1)
		else:
			os.close(w_pipe)
			r_pipe = os.fdopen(r_pipe, "r")
			with r_pipe:
				content = r_pipe.read()
				(_pid, status) = os.waitpid(pid, 0)
				if status & 0xff != 0:
					raise ValueError("The function tried to access to restricted syscalls or used too much resources: status={}".format(status))
				if (status & 0xff00) != 0:
					raise ValueError("The subprocess exited with resultcode {}; returned content: {}".format(status >> 8, content))
				try:
					return json.loads(content)
				except:
					raise ValueError("Content {} does not follow JSON format".format(content))
		
