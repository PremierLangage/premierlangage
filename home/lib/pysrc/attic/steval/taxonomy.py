#! /usr/bin/env python3
"""
Definition of aliases for common objects handled by the bench test runner
"""


from steval.testbench.testbench import EchoTestBench
from steval.testbench.python.pytest import PythonTestBench
from steval.testbench.exec.exectest import ExecutableTestBench
from steval.testbench.quiz.quiztest import QuizTestBench
from steval.executor.sandbox.sandbox import Sandbox

# We define here all the configured benchs
BENCHS = {
	"echo": EchoTestBench, # a tester that does nothing else than printing the supplied dictionary
	"exec": ExecutableTestBench, # a tester based on a supplied executable (typically a script)
	"python": lambda data: PythonTestBench(data, verbosity=0), # a tester for Python functions using annotations
	"python-verbose": lambda data: PythonTestBench(data, verbosity=1),
	"quiz": lambda data: QuizTestBench(data)
}

"""
Note: the exec bench is dangerous since any executable can be run without restriction.
Currently defined sandboxes are too restrictive to run any executable.
It is recommended to wrap the testbench script in a specially crafted sandbox
authorizing appropriate syscalls for the wished use.
"""

# We define here the configured sandboxes
SANDBOXES = {
	"unlimited": Sandbox(enabled=False),
	"100M-10s": Sandbox(enabled=False, memory_limit=100 * 10**6, cpu_limit=10.0),
	"seccomp-100M-10s": Sandbox(enabled=True, memory_limit=100 * 10**6, cpu_limit=10.0)
}

DEFAULT_SANDBOX = "seccomp-100M-10s"
