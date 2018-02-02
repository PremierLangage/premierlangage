#! /usr/bin/env python3
"""
Definition of the quiz test bench

@author: chilowi at u-pem.fr
"""

from steval.testbench.testbench import TestStatus, TestBench, TestBenchException, CompoundTest, TestFragment, TestVerdict, CompoundTestVerdict, TestVerdictConsolidator
from steval.executor.python.executor import CodeParsingEnvironment, ExecutionException, FunctionArguments
from steval.utils import i18n
from collections import OrderedDict
import json

AVAILABLE_GLOBALS = {"i18n": i18n}

class NumberRange(object):
	def __init__(self, a, b):
		self.a = a
		self.b = b
	def match(self, element):
		return element >= self.a and element <= self.b

def extract_ranges(seq):
	if isinstance(seq, (int, float)):
		return (NumberRange(seq, seq),)
	elif all(map(lambda x: isinstance(x, (int, float)), seq)):
		return tuple(map(lambda x: NumberRange(x, x), seq))
	elif len(seq) == 3 and isinstance(seq[0], (int, float)) and seq[1] == ".." and isinstance(seq[2], (int, float)):
		return (NumberRange(min(seq[0], seq[2]), max(seq[0], seq[2])),)
	else:
		return sum(map(extract_ranges, seq), tuple()) 

class QuizTestBench(TestBench):
	def __init__(self, data, verbosity=0):
		TestBench.__init__(self, data)
		self.verbosity = verbosity
	def prepare(self):
		pass
	def execute(self):
		verdicts = OrderedDict()
		precode = self.data.get("precode", "")
		used_globals = dict(AVAILABLE_GLOBALS)
		used_globals.update(data=self.data)
		g = CodeParsingEnvironment.execute_for_globals(precode, FunctionArguments(None, globals=used_globals))
		g2 = dict(self.data)
		g2.update(g)
		questions = list(map(lambda k: k[len("question_"):], filter(lambda k: k.startswith("question_"), g2)))
		for question in questions:
			success_message = g2.get("success_{}".format(question), None)
			failure_message = g2.get("failure_{}".format(question), None)
			weight = g2.get("weight_{}".format(question), 1.0)
			verdict = None
			answer = g2.get("answer_{}".format(question), None)
			if answer is None:
				verdict = TestVerdict.create(0.0, "No answer is provided for question {}".format(question))
			elif "free_{}".format(question) in g2:
				# Free form answer
				try:
					d = dict(g2)
					d.update(answer=answer)
					evaluated = eval(g2["free_{}".format(question)], d) # sandboxed
				except Exception as e:
					verdict = TestVerdict.create(-2, "Exception while evaluating {}: {}".format(e), weight)
				else:
					if isinstance(evaluated, (list, tuple)):
						verdict = TestVerdict.create(*evaluated)
					else:
						verdict = TestVerdict.create(evaluated)
			elif "int_{}".format(question) in g2:
				# Numeric answer
				verdict = None
				expected = g2["int_{}".format(question)]
				ranges = extract_ranges(expected)
				answernum = None
				try:
					answernum = int(answer)
				except:
					try:
						answernum = float(answer)
					except:
						pass
				if answernum is None:
					verdict = TestVerdict.create(0.0, "Answer for question {} must be a number".format(question))
				else:
					if any(map(lambda x: x.match(answernum), ranges)):
						verdict = TestVerdict.create(1.0, success_message, weight)
					else:
						verdict = TestVerdict.create(0.0, failure_message, weight)
			elif any(map(lambda k: k.startswith("bool_{}_".format(question)), g2)):
				# Boolean answer among a set of choices
				verdict = TestVerdict.create(0.0, "No answer for question".format(question))
				propositions = { k[len("bool_{}_".format(question)):]: v for (k, v) in g2.items() if k.startswith("bool_{}_".format(question)) }
				valid = [ k[:-1] for k in propositions if k.endswith("*") ]
				answer = json.loads(answer)
				if not isinstance(answer, list):
					verdict = TestVerdict.create(-2.0, "Answer is not properly specified as a JSON array", weight)
				elif set(answer) == set(valid):
					verdict = TestVerdict.create(1.0, success_message, weight)
				else:
					verdict = TestVerdict.create(0.0, failure_message, weight)
			verdicts[question] = verdict
		return TestVerdictConsolidator().consolidate(verdicts)
			