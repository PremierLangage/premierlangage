#! /usr/bin/env python3
"""
Main module running bench tests

@author: chilowi at u-pem.fr
"""

from steval import config, taxonomy
from steval.generator import generator
from steval.utils import jsoniblify, i18nize

import json, sys, argparse, traceback, os, signal, logging
from collections import OrderedDict

def run_test(data, sandbox, bench_whitelist, rootdir=None):
	"""
	Dictionary of the test instance is provided by the data argument
	The result output is returned as a dictionary
	
	Some common problems are specified with an entry in the dictionary (with an explanation as value):
	- formatException: the PL dictionary does not follow the format (e.g. no grader specified)
	- resourceException: the grading test consumed too much resource (CPU time and/or memory, dangerous syscalls...)
	- platformException: due to a bug in the bench test code
	"""
	try:
		benchname = data["bench"] # select the bench to use
		if benchname not in bench_whitelist: # check if the grader is authorized
			return {"error": True, "resourceException": "The specified bench {} is not authorized".format(benchname)}
		bench = taxonomy.BENCHS[benchname](data)
		bench.set_rootdir(rootdir)
	except Exception as e:
		return {"error": True, "formatException": "The specified bench is not available: {}".format(data.get("bench", None)), "exception": str(e)}
	# the sandbox resources may be lowered using the data dictionary
	try:
		if "memoryLimit" in data:
			sandbox.memory_limit = min(sandbox.memory_limit, int(data["memoryLimit"]))
		if "cpuLimit" in data:
			sandbox.cpu_limit = min(sandbox.cpu_limit, int(data["cpuLimit"]))
	except:
		return {"error": True, "formatException": "Adjusting resource limits failed"}
	pipe_r, pipe_w = os.pipe()
	print("Forking...", file=sys.stderr)
	sys.stdout.flush()
	sys.stderr.flush()
	pid = os.fork()
	if pid > 0:
		# parent case
		# wait for the end of execution
		os.close(pipe_w)
		pipe_r = os.fdopen(pipe_r, "r") # wrap with a file object
		read_output = pipe_r.read(config.MAX_OUTPUT_SIZE)
		if pipe_r.read(1): # data remain to be read
			return {"error": True, "platformException": "The test bench is too talkative", "output": read_output}
		os.close(pipe_r.fileno())
		resultcode = os.waitpid(pid, 0)[1]
		sig = resultcode & 0x00ff
		code = resultcode & 0xff00
		print("Resultcode: {}".format(resultcode), file=sys.stderr)
		if sig == signal.SIGXCPU:
			return {"error": True, "resourceException": "Code consumed too much CPU time"}
		elif sig in (signal.SIGKILL, signal.SIGSYS):
			return {"error": True, "resourceException": "Grader process was killed due to anormal syscalls or overconsumption of resources (memory, time...)"}
		elif sig == signal.SIGSEGV:
			return {"error": True, "platformException": "A segmentation error was detected"}
		try:
			return json.loads(read_output, object_pairs_hook=OrderedDict)
		except:
			return {"error": True, "platformException": "The produced output does not follow the JSON format", "output": read_output}
	else:
		os.close(pipe_r)
		pipe_w = os.fdopen(pipe_w, "w") # wrap with a file object
		try:
			bench.prepare()
			with sandbox:
				result = bench.execute()
				if hasattr(result, "to_dict"):
					result = result.to_dict()
				result = jsoniblify(result)
		except Exception as e:
			if not sandbox.enabled:
				traceback.print_exc()
			result = {"error": True, "platformException": "Exception while running the test bench", "cause": str(e)}
		try:
			output = json.dumps(result)
		except Exception as e:
			output = {"error": True, "platformException": "Cannot JSONify the result", "output": str(result)}
		try:
			print(output, file=pipe_w)
		except BrokenPipeError as e:
			pass # since we are taoo talkative the parent process does not listen to us anymore
		pipe_w.close()
		sys.exit(0)
			
def read_string(a, d=None):
	if d is None: d = {}
	if a.startswith("@"): # it is a file
		if a[1:] == "-":
			f = sys.stdin
		else:
			f = open(a[1:], "r")
		return read_string(f.read().strip(), d)
	elif a.startswith("#"): # copy a previous entry from the dictionary d
		return d[a[1:]]
	elif a.startswith("[") or a.startswith("{"):
		return json.loads(a.strip())
	else:
		return a.strip()
			
def load_dictionary(content):
	"""Load a dictionary by guessing its format"""
	s = read_string(content)
	if s.startswith("{"):
		# considered as JSON content
		return json.loads(content, object_pairs_hook=OrderedDict) # to keep the order of entries
	elif content.startswith("@"):
		# considered as PL format
		return generator.load_dictionary(content[1:])
	else:
		raise Exception("The following content is not supported as a dictionary: {}".format(content))
		
def main(argv):
	import argparse
	parser = argparse.ArgumentParser()
	parser.add_argument('-d', '--dict', action="append", default=[], help="Use the specified JSON string as the input dictionary (prefix by @ to specify a path, @- for stdin)")
	parser.add_argument("-e", "--entry", action="append", default=[], help="Add a new entry 'key=value' in the dictionary (prefix the value by @ to specify a file where a string must be read, # to copy the value from another previously specified entry)")
	parser.add_argument("-s", "--sandbox", choices=list(taxonomy.SANDBOXES), default=taxonomy.DEFAULT_SANDBOX, help="Use a preset sandbox configuration")
	parser.add_argument("-o", "--output", default="-", help="File where the output must be written (by default stdout)")
	parser.add_argument("-b", "--bench", choices=list(taxonomy.BENCHS), action="append", default=[], help="Specify a whitelisted bench")
	parser.add_argument("-l", "--language", default=None, help="Print the internationalized strings in the given language (2 letter ISO code like en, fr, de...)")
	parser.add_argument("-r", "--rootdir", default=None, help="Root directory under where local files must be searched")
	args = parser.parse_args(argv)
	data = OrderedDict()
	# configure the logger
	logging.getLogger("").setLevel(logging.DEBUG)
	logging.getLogger("").addHandler(logging.StreamHandler())
	for d in args.dict:
		try:
			data.update(load_dictionary(d))
		except Exception as e:
			traceback.print_exc()
			print("Cannot read the dictionary specified with {} due to {}".format(d, e), file=sys.stderr)
			return -1
	for entry in args.entry:
		try:
			k, v = entry.split("=", 1)
			data[k] = read_string(v, data)
		except Exception as e:
			print("Cannot add the new entry {} in the dictionary due to {}".format(entry, e), file=sys.stderr)
			return -1
	# the dictionary is ready!
	try:
		dump_file = sys.stdout if args.output == "-" else open(args.output, "w")
	except:
		print("Cannot open the output file {}".format(args.output), file=sys.stderr)
		return -1
	output = run_test(data, taxonomy.SANDBOXES[args.sandbox], args.bench, rootdir=args.rootdir)
	if args.language:
		output = jsoniblify(i18nize(output), language=args.language)
	with dump_file:
		print(json.dumps(output, indent=True), file=dump_file)
	if not output or output.get("error", False):
		return 1
	else:
		return 0

if __name__ == "__main__":
	v = main(sys.argv[1:])
	sys.exit(v)
