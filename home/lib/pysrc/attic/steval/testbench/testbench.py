#! /usr/bin/env python3
"""
A test bench for answers submitted for a problem

@author: chilowi at u-pem.fr
"""

from enum import IntEnum
from steval.utils import get_traceback_str, jsoniblify, update_dict, i18n

from collections import OrderedDict

import logging

logger = logging.getLogger(__name__)

DISPLAY_CHILD_VERDICTS = False

class TestBenchException(Exception):
	"""Exception raised if there is a problem while initializing a test bench"""
	def __init__(self, message, cause=None):
		self.message = message
		self.cause = cause

class TestStatus(IntEnum):
	EXCEPTION = -1 # an exception has been encountered that is due to a problem of the testing framework
	FATAL_FAILURE = 0 # a failure that prevents other test to be done
	FAILURE = 1 # a failure that allows other tests to be made
	PARTIAL_SUCCESS = 2 # a mix of failure and success
	SUCCESS = 3 # a complete success

class TestVerdict(object):
	DEFAULT_SUCCESS_MESSAGE = i18n(_="Success", fr="Succès")
	DEFAULT_PARTIAL_SUCCESS_MESSAGE = i18n(_="Mixed result: {}/1", fr="Résultat mitigé: {}/1")
	DEFAULT_FAILURE_MESSAGE = i18n(_="Failure", fr= "Echec")
	DEFAULT_FATAL_FAILURE_MESSAGE = i18n(_="Fatal failure", fr="Echec fatal")
	DEFAULT_EXCEPTION_MESSAGE = i18n(_="Problem while executing the test", fr="Problème lors de l'exécution du test")
	def __init__(self, grade: float, message, weight=1.0):
		self.grade = grade # grade for the test
		self.message = message # a human-understandable message for the verdict
		self.weight = weight
	def to_dict(self):
		"""Convert the result to a JSONizable dictionary form"""
		d = OrderedDict()
		d["grade"] = self.grade
		d["message"] = jsoniblify(self.message)
		return d
	@classmethod
	def create(self, grade, message=None, weight=1.0, attributes=None):
		if attributes is None:
			attributes = {}
		if grade is True:
			grade = 1.0
		elif grade is False:
			grade = 0.0
		elif grade is None:
			grade = -1.0
		elif isinstance(grade, str):
			message = grade
			grade = 0.0
		try:
			grade = float(grade)
		except:
			grade = -2.0 # problem when expliciting the verdict
		if message is None:
			if grade < -1.0:
				message = self.DEFAULT_EXCEPTION_MESSAGE
			elif grade < 0.0:
				message = self.DEFAULT_FATAL_FAILURE_MESSAGE
			elif grade == 0.0:
				message = self.DEFAULT_FAILURE_MESSAGE
			elif grade < 1.0:
				message = self.DEFAULT_PARTIAL_SUCCESS_MESSAGE.format(grade)
			elif grade >= 1.0:
				message = self.DEFAULT_SUCCESS_MESSAGE
		if isinstance(message, (str, i18n)):
			message = message.format(**attributes)
		try:
			message = jsoniblify(message)
		except:
			message = None
		try:
			weight = float(weight)
		except:
			weight = 1.0
		return TestVerdict(grade, message, weight)
	def __repr__(self):
		return "grade={},message={},weight={}".format(self.grade, self.message, self.weight) 
		
		
	
class CompoundTestVerdict(TestVerdict):
	def __init__(self, grade: float, message, children, weight=1.0):
		TestVerdict.__init__(self, grade, message, weight=weight)
		self.children = children # children verdicts
	def to_dict(self):
		d = super(CompoundTestVerdict, self).to_dict()
		if DISPLAY_CHILD_VERDICTS:
			d["children"] = OrderedDict()
			for (k, v) in self.children.items():
				d["children"][k] = v.to_dict()
		return d
	def __repr__(self):
		return str(self.to_dict())
		
class TestVerdictConsolidator(object):
	def consolidate(self, verdicts: dict, weight = 1.0, flatten=True):
		"""Default implementation to consolidate verdicts"""
		verdicts2 = OrderedDict()
		update_dict(verdicts2, filter(lambda kv: kv[1] is not None, verdicts.items()))
		verdicts = verdicts2
		if not verdicts:
			return None
		if flatten and len(verdicts) == 1: # remove 1-ary nodes
			for (k, v) in verdicts.items():
				return v
		min_grade = min(map(lambda x: x.grade, verdicts.values()))
		if min_grade < 0:
			grade = min_grade
		else:
			# compute the weighted average for the grade
			weight_sum = sum(map(lambda k: verdicts[k].weight, verdicts))
			if weight_sum <= 0.0: weight_sum = 1.0
			grade = sum(map(lambda k: verdicts[k].grade * verdicts[k].weight, verdicts)) / weight_sum
		message = OrderedDict()
		update_dict(message, map(lambda k: (k, verdicts[k].message), verdicts))
		return CompoundTestVerdict(grade, message, verdicts, weight=weight)
		
		
class Test(object):
	def __init__(self):
		self._result = None
		self._executed = False
	def get_precedence(self):
		# return the precedence of the test fragment
		# a fragment with a lower precedence value will be executed first
		return 0
	def initialize(self):
		"""Initialiaze the test
		Code implemented in this method must be safe and not depend on user input (it may be executed outside of a sandbox"""
		pass
	def execute(self):
		if not self._executed: 
			try:
				self._result = self._execute()
			except Exception as e:
				self._result = TestVerdict(TestStatus.EXCEPTION, {"exception": e, "exceptionTraceback": get_traceback_str()})
			self._executed = True
		return self._result
	def _execute(self):
		"""Execute the test fragment and return a TestVerdict
		Execution of this method is not generally safe since user-defined can be executed
		Execution must be sandboxed"""
		raise NotImplementedError()

class TestFragment(Test):
	pass
		
class CompoundTest(Test):
	"""A collection of test fragments"""
	def __init__(self, consolidator=TestVerdictConsolidator()):
		Test.__init__(self)
		self.children = OrderedDict()
		self.consolidator = consolidator
		self._counter = 0 # counter of added tests
	def add(self, name, test: Test):
		self.children[name] = (test, self._counter)
		self._counter += 1
	def _execute(self):
		verdicts = OrderedDict()
		go = True
		while go:
			start_counter = self._counter
			testnames = list(filter(lambda x: x not in verdicts, self.children))
			# sort the sub-tests to be executed, first by precedence, next by addition order
			testnames.sort(key= lambda x: (self.children[x][0].get_precedence(), self.children[x][1]))
			for testname in testnames:
				test = self.children[testname][0]
				if not test._result:
					logger.info("Executing test named {} {}".format(testname, test))
				verdict = test.execute()
				verdicts[testname] = verdict # tests can add new tests to their parent
				if verdict and verdict.grade < 0.0:
					go = False
					break # do not continue testing
			go = go and self._counter > start_counter # new tests have been added
		return self.consolidator.consolidate(verdicts)

class TestBench(object):
	def __init__(self, data):
		self.data = data
		self.rootdir = None
	def set_rootdir(self, rootdir):
		self.rootdir = rootdir
	def prepare(self):
		"""Prepare the execution
		One must assume that the preparation is safe and never execute unknown code
		Therefore it is not sandboxed"""
		pass # do nothing by default, override this for a custom behavior
	def execute(self):
		raise NotImplementedError("should be implemented in derived classes")
		
class EchoTestBench(TestBench):
	"""A test bench that does nothing
	It prints the content of supplied dictionary in its verdict"""
	def execute(self):
		return SimpleTestVerdict(TestStatus.SUCCESS, {"echo": self.data})
