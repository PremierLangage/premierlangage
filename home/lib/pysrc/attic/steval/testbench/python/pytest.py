#! /usr/bin/env python3
"""
Definition of annotations to define tests for Python functions

@author: chilowi at u-pem.fr
"""

from steval.testbench.testbench import TestStatus, TestBench, TestBenchException, CompoundTest, TestFragment, TestVerdict, CompoundTestVerdict, TestVerdictConsolidator
from steval.testbench.python import generator
from steval.executor.python.executor import CodeParsingEnvironment, ExecutionException, FunctionArguments
from steval.config import DICT_KEYS
from steval.utils import i18n, compute_relpath

import inspect, re, sys, itertools, logging
from collections import OrderedDict

# For singleton utility objects...
class DummyObject(object):
	def __init__(self, name):
		self.name = name
	def __repr__(self):
		return self.name

REFERENCE_RESULT = DummyObject("REFERENCE_RESULT") # singleton object to represent a result computed by the reference function
OTHER_RESULT = DummyObject("OTHER_RESULT")
DEFAULT_EXPECTED_RESULTS = {REFERENCE_RESULT: True, OTHER_RESULT: False}
MAX_RECURSION_LEVEL = 32

# TODO: to be externalized...
MESSAGES = {
	"compilable": i18n(_="The compilation was successful", fr="La compilation du code a réussi"),
	"uncompilable": i18n(_="The compilation failed due to an error:\n{result.returned}", fr="La compilation du code a échoué à cause d'une erreur\n{result.returned}"),
	"notaboo": i18n(_="No taboo expression was found", fr="Aucune expression interdite n'a été trouvée"),
	"taboo": i18n(_="The following taboo expressions were found: {}", fr="Les expressions interdites suivantes ont été trouvées: {}")
}

logger = logging.getLogger(__name__)
	
	

class ResultComparator(object):
	def __init__(self, arg):
		if not arg:
			self.reference = lambda x, y: x == y
			self.expected = self.reference
		else:
			try:
				self.reference = arg[0]
			except:
				self.reference = arg
			try:
				self.expected = arg[1]
			except:
				self.expected = arg
	def __call__(self, proposed, case, case_value):
		if case is OTHER_RESULT:
			return True
		if case is REFERENCE_RESULT:
			return self.reference(proposed, case_value)
		if callable(case):
			return case(proposed)
		# standard case
		return self.expected(proposed, case)
		
DEFAULT_RESULT_COMPARATOR = ResultComparator(None)

class EnhancedFunctionArguments(FunctionArguments):
	MAIN = object() # special object used to replace arguments for main code
	"""Arguments for a single run of the function"""
	def __init__(self, args=tuple(), kwargs=None, globals=None, files=None, complexity=None, **additionals):
		FunctionArguments.__init__(self, args, kwargs, globals, files)
		self.complexity = complexity if complexity else {} # estimation of the complexity using different criteria
		self.expected = { k[len("expected_"):]: v for (k, v) in additionals.items() if k.startswith("expected_") }
		if not self.expected:
			self.expected["returned"] = DEFAULT_EXPECTED_RESULTS
	def to_dict(self):
		return {"args": self.args, "kwargs": self.kwargs, "complexity": self.complexity}
	def __repr__(self):
		return str(self.to_dict())
		
		

class TestedFunction(object):
	"""A set of comparators
	The judge is used to declare a verdict for tests implying comparison of proposed code and reference code
	For this task, the judge relies on the declared comparators that are useful to compare chunks of the result (returned value, printed stdout...)"""
	def __init__(self, name):
		self.name = name
		self.arguments_set = []
		self.target = name # default target
		self.judge = default_judge
		self.comparators = {}
	def append(self, arguments):
		"""Append arguments to test for this function"""
		self.arguments_set.append(arguments)
	
# Reachable globals from the test modules
TEST_GLOBALS = {"generator": generator, "REFERENCE_RESULT": REFERENCE_RESULT, "OTHER_RESULT": OTHER_RESULT, "i18n": i18n}
		

class FunctionTestContext(object):
	def __init__(self, name):
		self.tested_function = TestedFunction(name)
	def test_annotation(f):
		f._test_annotation = True
		return f
	@test_annotation
	def arguments(self, *args, kwargs=None, files=None, complexity=None, **additionals):
		self.tested_function.arguments_set.append(EnhancedFunctionArguments(tuple(args), kwargs=kwargs, complexity=complexity, files=files, **additionals))
	@test_annotation
	def arguments_generator(self, generator):
		"""An annotation allowing to supply a generator of arguments"""
		for element in generator:
			if getattr(element, "_wrapper", False): # if it uses an Argument annotation
				self.tested_function.arguments_set.append(EnhancedFunctionArguments(tuple(element.kargs), **element.kwargs))
			else: # to supply a single argument
				# a simple argument
				self.tested_function.arguments_set.append(EnhancedFunctionArguments((element,)))
	@test_annotation
	def judge(self, judge):
		self.tested_function.judge = judge
	@test_annotation
	def target(self, target):
		"""This annotation is used to use another target for the proposed code"""
		self.tested_function.target = target
	@test_annotation
	def comparator(self, **kwargs):
		self.tested_function.comparators.update({k: ResultComparator(v) for (k, v) in kwargs.items() })
	@classmethod
	def annotations(cls):
		"""Return the methods that may be used to annotate functions to be tested"""
		result = []
		for (name, ann) \
		in inspect.getmembers(cls, lambda x: getattr(x, "_test_annotation", False) is True):
			result.append(name)
		return tuple(result)
	@classmethod
	def build_annotation(cls, contexts, annotation_name, mock=False):
		def ann(*kargs, **kwargs):
			class Wrapper(object):
				def __init__(self):
					self._wrapper = True
					self.kargs = kargs
					self.kwargs = kwargs
				def __call__(self, f):
					if f.__name__ not in contexts:
						contexts[f.__name__] = cls(f.__name__)
					getattr(contexts[f.__name__], annotation_name)(*kargs, **kwargs)
					return f
			return Wrapper()
		def ann_mock(*kargs, **kwargs):
			return lambda x: x
		return ann_mock if mock else ann
	@classmethod
	def build_annotations(cls, contexts, mock=False):
		d = {}
		for a in cls.annotations():
			d[a] = cls.build_annotation(contexts, a, mock)
		return d


def default_judge(proposed, reference, arguments: EnhancedFunctionArguments, tested_function: TestedFunction):
	"""A default implementation of a judge deciding a verdict according to the reference result and the proposed result"""
	unavailable = object() # marker object for unavailable result
	verdicts = OrderedDict() # dictionary of verdicts according to the result kind
	for result_kind in arguments.expected:
		expected = arguments.expected[result_kind]
		if expected:
			# reorder the expected keys
			# first we use the reference result
			expected2 = itertools.chain(filter(lambda x: x == REFERENCE_RESULT, expected),
				filter(lambda x: x not in (REFERENCE_RESULT, OTHER_RESULT), expected),
				filter(lambda x: x == OTHER_RESULT, expected))
			for d in (proposed, reference):
				if isinstance(getattr(d, result_kind, None), ExecutionException):
					setattr(d, result_kind, getattr(d, result_kind).cause)
			p = getattr(proposed, result_kind, unavailable)
			r = getattr(reference, result_kind, unavailable)
			comparator = tested_function.comparators.get(result_kind, DEFAULT_RESULT_COMPARATOR)
			for k in expected2:
				e = expected[k]
				if not isinstance(e, tuple):
					e = (e,)
				if p is not unavailable:
					cmp = comparator(p, k, r) if k is not OTHER_RESULT else True
					if cmp:
						verdict = TestVerdict.create(*e, attributes={"arguments": arguments, "result": proposed, "reference_result": reference})
						verdicts[result_kind] = verdict
						break
	return verdicts


class PythonComparisonTest(CompoundTest):
	def __init__(self, reference_code, proposed_code, data, precode=None, taboo=None, rootdir=None, verbosity=0):
		super(PythonComparisonTest, self).__init__()
		self.tested_functions = {}
		self.useless_test_contexts = {} # non used test contexts for proposed code
		globals = TEST_GLOBALS
		ref_globals = dict(globals)
		ref_globals.update(FunctionTestContext.build_annotations(self.tested_functions))
		ref_globals.update(data=data)
		def _i18n(*kargs, **kwargs):
			if kwargs:
				return i18n(**kwargs)
			elif kargs:
				return data.get(kargs[0], kargs[0]) # get the i18n string in the data dictionary
			else:
				return None
		proposed_globals = dict(globals)
		proposed_globals.update(FunctionTestContext.build_annotations(None, mock=True)) # mock annotations useful for test purposes (testing the reference code against itself)
		files = {}
		self.data = data
		self.rootdir = rootdir
		if self.rootdir:
			for filepath in self.data.get("files", []):
				cfilepath = compute_relpath(self.rootdir, self.rootdir, filepath)
				with open(cfilepath, "rb") as f:
					files[filepath] = f.read() # FIXME: examine limits for filesize
		self.reference_code = CodeParsingEnvironment(reference_code, FunctionArguments(None, globals=ref_globals, files=files), rootdir=rootdir)
		self.reference_code2 = None
		self.proposed_code = CodeParsingEnvironment(proposed_code, FunctionArguments(None, globals=proposed_globals, files=files), rootdir=rootdir)
		self.proposed_code2 = None
		self.precode = CodeParsingEnvironment(precode if precode else "", FunctionArguments(None, globals=ref_globals, files=files), rootdir=rootdir)
		self.taboo = taboo
		self.verbosity = verbosity
	def initialize(self):
		this = self
		class ParseTest(TestFragment):
			def get_precedence(self):
				return -100 #it must be the first test
			def _execute(self):
				failure = False
				r = {}
				codes = OrderedDict()
				codes["pre"] = this.precode
				codes["reference"] = this.reference_code
				codes["proposed"] = this.proposed_code
				for (k, v) in codes.items():
					element = v
					result = element.execute()
					if result.returned is True:
						if this.verbosity:
							r[k] = TestVerdict.create(1.0, MESSAGES["compilable"], 0.0)
					else:
						failure = True
						r[k] = TestVerdict.create(-1.0, MESSAGES["uncompilable"], 0.0, attributes={"result": result})
				return TestVerdictConsolidator().consolidate(r, weight=0.0)
		class TabooTest(TestFragment):
			def __init__(self, code, taboo):
				TestFragment.__init__(self)
				try:
					self.code = code
					self.taboo = taboo
					if not taboo:
						self.taboo = []
					elif isinstance(taboo, str):
						self.taboo = [taboo,]
					self.taboo = tuple(map(re.compile, self.taboo))
				except Exception as e:
					raise TestBenchException("Taboo regular expressions {} are not understable".format(taboo), e)
			def get_precedence(self):
				return -99
			def _execute(self):
				logger.debug("Executing taboo test with taboo expressions {}".format(self.taboo))
				taboo_cases = {}
				for t in self.taboo:
					try:
						m = re.compile(t).search(self.code, re.M)
						if m:
							taboo_cases[t] = m.group(0)
					except Exception as e:
						print(e, file=sys.stderr)
						pass # if the regular expression is invalid
				if taboo_cases:
					return TestVerdict.create(-1.0, MESSAGES["taboo"].format(",".join(taboo_cases.values())))
				else:
					if this.verbosity:
						return TestVerdict.create(1.0, MESSAGES["notaboo"], 0.0)
					else:
						return None
		class FunctionSingleExecutionTest(TestFragment):
			def __init__(self, arguments: EnhancedFunctionArguments, tested_function: TestedFunction):
				TestFragment.__init__(self)
				self.arguments = arguments
				self.tested_function = tested_function
				self.results = [None, None]
				self.consolidator = TestVerdictConsolidator()
			def _execute(self):
				logger.debug("Executing function test on {} with arguments {}".format(self.tested_function, self.arguments))
				i = 0
				execute_reference_code = any(map(lambda x: REFERENCE_RESULT in x, self.arguments.expected.values()))
				for code in ((this.proposed_code, this.proposed_code2), (this.reference_code, this.reference_code2) if execute_reference_code else None, ):
					if code is not None:
						target = self.tested_function.name if code[0] == this.reference_code else self.tested_function.target
						if target == "main":
							self.arguments.globals.update({k: v for (k, v) in this.precode_result.globals.items() if k not in self.arguments.globals})
							self.results[i] = code[0].create_main_environment(self.arguments).execute()
						else:
							self.results[i] = code[1].create_function_environment(target, self.arguments).execute()
					else:
						self.results[i] = None
					i += 1
				verdict = self.consolidator.consolidate(self.tested_function.judge(self.results[0], self.results[1], self.arguments, self.tested_function))
				if this.verbosity:
					message = verdict.message
					verdict.message = OrderedDict()
					verdict.message["arguments"] = self.arguments
					verdict.message["results"] = self.results
					verdict.message["message"] = message
				return verdict
		class FunctionMultiExecutionTest(CompoundTest):
			def __init__(self, tested_function: TestedFunction):
				super(FunctionMultiExecutionTest, self).__init__()
				i = 0
				for arguments in tested_function.arguments_set:
					self.add(i, FunctionSingleExecutionTest(arguments, tested_function))
					i += 1
		class MainExecutionTest(TestFragment):
			def get_precedence(self):
				return -98
			def _execute(self):
				logger.debug("Executing main test")
				results = {}
				this.precode_result = this.precode.create_main_environment(FunctionArguments(None)).execute()
				if isinstance(this.precode_result, Exception):
					results["precode"] = this.precode_result
				else:
					# update the globals of the codes to be tested with the globals obtenained after having executed precode
					this.reference_code2 = this.reference_code.create_main_environment(FunctionArguments(None, globals=this.precode_result.globals))
					this.proposed_code2 = this.proposed_code.create_main_environment(FunctionArguments(None, globals=this.precode_result.globals))
					results["reference"] = this.reference_code2.execute()
					results["proposed"] = this.proposed_code2.execute()
					for tested_function in map(lambda x: x.tested_function, this.tested_functions.values()):
						if tested_function.arguments_set: # if there is at least one argument to test
							this.add("function_{}".format(tested_function.name), FunctionMultiExecutionTest(tested_function))
					verdicts = {}
				for (k, v) in results.items():
					exception = isinstance(v.returned, ExecutionException)
					if this.verbosity or exception:
						verdicts[k] = TestVerdict.create(-1.0 if isinstance(v.returned, ExecutionException) else 1.0, {"results": v}, 0.0)
				return TestVerdictConsolidator().consolidate(verdicts)
		pt = ParseTest()
		pt.execute() # preexecute parsing (outside sandbox)
		if self.taboo:
			self.add("taboo", TabooTest(self.proposed_code.code, self.taboo))
		self.add("parsing", pt)
		self.add("main", MainExecutionTest()) # should automatically add the dependent tests
		logger.info("Having initialized")

class PythonTestBench(TestBench):
	def __init__(self, data, verbosity):
		TestBench.__init__(self, data)
		self.verbosity = verbosity
	def prepare(self):
		proposed = self.data.get(DICT_KEYS.proposed_code)
		answer = self.data.get(DICT_KEYS.code)
		taboo = self.data.get(DICT_KEYS.taboo)
		precode = self.data.get(DICT_KEYS.precode)
		if proposed is None or answer is None:
			raise TestBenchException("Missing {} and {} keys".format(DICT_KEYS.code,  DICT_KEYS.proposed_code))
		self.test = PythonComparisonTest(answer, proposed, data=self.data, precode=precode, taboo=taboo, rootdir=self.rootdir, verbosity=self.verbosity)
		self.test.initialize()
	def execute(self):
		return self.test.execute()


