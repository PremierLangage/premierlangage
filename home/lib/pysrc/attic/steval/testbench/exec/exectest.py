#! /usr/bin/env python3
"""
A generic test bench for an executable file
The file can be also be an interpretable script if the shebang is correctly set at its head
(see the first line of this file for an example)

Note that this test bench does not include any security measure to prevent the executable to
do dangerous actions. Therefore it is highly recommended to run it inside an appropriate sandbox.

@author: chilowi at u-pem.fr
"""

from steval.testbench.testbench import TestBench
from steval.config import DICT_KEYS

import shlex

class ExecutableTestBench(TestBench):
	def prepare(self, data):
		command = data.get(DICT_KEYS.code)
		if command is None:
			raise TestBenchException("No command is defined in the command key")
		self.args = shlex.split(command.strip()) # split the args
		# test if the executable is present with the appropriate rights
		if len(args) == 0 or not os.path.exists(args[0]):
			raise TestBenchException("The executable '{}' cannot be found".format(args[0] if len(args) > 0 else ""))
		if self.args[0].startswith("$"):
			self.shell = True
			self.args[0] = self.args[0][1:]
		else:
			self.shell = False
	def execute(self):
		# create an environment including the subject data
		env = dict(os.environ)
		for (k, v) in self.data.items(): # supply the dictionary data as environment variables
			env["BENCH_{}".format(k)] = str(v)
		try:
			output = subprocess.check_output(command, env=env, universal_newlines=True, shell=self.shell)
		except Exception as e:
			raise TestBenchException("Error while running the executable {}".format(self.args), e)
		try:
			return json.loads(output)
		except: # if the output is not a JSON dictionary
			return {"output": output}
