#! /usr/bin/env python3
"""
Execute a Python module and save some properties about it

@author: chilowi at u-pem.fr
"""

from .codemetrics import CodeMetrics
from .memoryfiles import VirtualFileManager
from steval.utils import PrefixMapping, limited_sys, get_traceback_str, update_dict

import time, ast, sys, io, resource, traceback, logging, imp
from .importinfo import get_transitive_import_dependencies, RemoteDependency
from collections import namedtuple, OrderedDict

logger = logging.getLogger(__name__)

globalvars = globals

from ctypes import pythonapi, POINTER, py_object

_get_dict = pythonapi._PyObject_GetDictPtr
_get_dict.restype = POINTER(py_object)
_get_dict.argtypes = [py_object]
del pythonapi, POINTER, py_object

def dictionary_of(ob):
    dptr = _get_dict(ob)
    return dptr.contents.value
    
    
class ForeignCodeException(Exception):
    """An exeption due to foreign code"""
    def __init__(self, cause, trace, environment):
        self.cause = cause
        self.trace = trace
        self.environment = environment
    @property
    def code_lines(self):
        e = self.environment
        while hasattr(e, "parent"):
            e = e.parent
        return e.code.split("\n") if e else []
    @property
    def verbose_traceback(self):
        # return get_traceback_str(self.trace)
        try:
            l = []
            trace = self.trace
            while trace:
                element = {"lineno": trace.tb_lineno, "line": None, "filename": trace.tb_frame.f_code.co_filename, "name": trace.tb_frame.f_code.co_name}
                if element["filename"] == "<string>":
                    try:
                        element["line"] = self.code_lines[element["lineno"]-1]
                    except:
                        pass # cannot retrieve the line
                    l.append(element)
                trace = trace.tb_next
            r = ""
            for element in l:
                r += "{}({})\t{}\n".format(element["name"], element["lineno"], element["line"])
            return r
        except:
            traceback.print_exc()
    @classmethod
    def create(cls, environment):
        (typ, value, traceback) = sys.exc_info()
        return cls(value, traceback, environment)

class ParsingException(ForeignCodeException):
    @property
    def explanation(self):
        if isinstance(self.cause, SyntaxError):
            return "{} detected at line {} character {}: {}".format(type(self.cause).__name__, self.cause.lineno, self.cause.offset, self.cause.text)
        else:
            return "Code parsing failed with the exception {}: {}\n\nTraceback:\n{}".format(type(self.cause).__name__, self.cause, self.verbose_traceback)
    def __str__(self):
        return self.explanation
        
class FailedImportException(ForeignCodeException):
    def __init__(self, rejected_imports, environment):
        super(FailedImportException, self).__init__(None, None, environment)
        self.rejected_imports = rejected_imports
    @property
    def explanation(self):
        return "The following imported modules were rejected (due to unavailability or blacklisting): {}".format(",".join(map(str, self.rejected_imports)))
    def __str__(self):
        return self.explanation
    
class ExecutionException(ForeignCodeException):
    @property
    def explanation(self):
        return "Code execution failed with the exception {} \"{}\"\n\nTraceback:\n{}".format(type(self.cause), self.cause, self.verbose_traceback)
    def __str__(self):
        return self.explanation
        
class SuppliedFile(object):
    def __init__(self, name, content=None):
        self.name = named
        if isinstance(content, (bytes, str, bytearray)):
            self.content = content
        elif hasattr(content,'__iter__'):
            self.content = sum(content)
            
class FunctionArguments(object):
    def __init__(self, args, kwargs=None, globals=None, files=None):
        self.args = args
        self.kwargs = kwargs if kwargs else {}
        self.globals = globals if globals else {}
        self.files = files if files else {}

class ExecutionResult(object):
    def __init__(self):
        self.executed = False # is the function executed
        self.returned = None # could be also an exception
        self.globals = None
        self.stdout = None
        self.stderr = None
        self.files = None
        self.time = None # to be modified when the function is executed
        self.memory = None # TODO: to be implemented to supply the memory usage
        self._start_time = None
    def _signal_parse_error(self, error):
        self.returned = ParsingException(error)
    def _start(self):
        self._start_time = time.process_time()
    def _end(self, returned, globals=None):
        self.executed = True
        self.time = time.process_time() - self._start_time if self._start_time else None
        self.returned = returned
        self.globals = globals
    def __repr__(self):
        return "returned={}, globals={}, stdout={}, stderr={}, files={}, time={}, memory={}".format(self.returned, self.globals, self.stdout, self.stderr, self.files, self.time, self.memory)
    def to_dict(self):
        return {"result": self.returned, "globals": self.globals, "stdout": self.stdout, "stderr": self.stderr, "files": self.files, "time": self.time}
        
class ExecutionEnvironment(object):
    def __init__(self, funcargs: FunctionArguments):
        self.funcargs = funcargs
        self.globals = dict(self.funcargs.globals) # to be overriden is special cases
        self.result = ExecutionResult()
        self.file_manager = VirtualFileManager()
        # supply files in the file manager 
        for (k, v) in self.funcargs.files.items():
            self.file_manager.supply(k, v)
        self._redirect_stdfiles = False
    def _execute(self):
        raise NotImplementedError()
    def execute(self):
        stdout, stderr = (sys.stdout, sys.stderr)
        try:
            if self._redirect_stdfiles:
                sys.stdout, sys.stderr = (io.StringIO(), io.StringIO())
            self._execute()
            if self._redirect_stdfiles:
                self.result.stdout = sys.stdout.getvalue().strip()
                self.result.stderr = sys.stderr.getvalue().strip()
                self.result.files = {k: v.content for (k, v) in self.file_manager.files.items() if k not in self.funcargs.files }
            return self.result
        finally:
            sys.stdout, sys.stderr = (stdout, stderr) # restore old stdout and stderr
        
    
class ExecutionProfile(object):
    """A restricted Python execution profile based on bultins and module whitelists"""
    def __init__(self):
        self._builtin_import = __import__
    def get_builtins_whitelist(self):
        """Return a set of authorized builtins"""
        raise NotImplementedError()
    def get_modified_builtins(self):
        """Return rewritten builtins limiting security risks"""
        return {}
    def get_modules_whitelist(self):
        """Return a set of authorized modules (as strings)"""
        raise NotImplementedError()
    def get_modified_modules(self):
        """Return the modules that have been modified to limit permissions"""
        return {}
    def get_available_files(self):
        return frozenset()
    def _import_interceptor(self, context, name, globals=None, locals=None, fromlist=(), level=0):
        """Implementation of an import interceptor"""
        if name in self.get_modified_modules():
            return self.get_modified_modules()[name]
        elif name not in self.get_modules_whitelist():
            if name in context.imported:
                return context.imported[name]
            name2 = name.replace(".", "/") + ".py"
            try:
                # special import from the supplied files
                with context.file_manager.open(name2, "r") as f:
                    module = imp.new_module(name)
                    exec(f.read(), module.__dict__)
                    context.imported[name] = module
                    return module
            except IOError as e:
                raise ImportError("The module {} is not whitelisted".format(name))
        else:
            return self._builtin_import(name, globals, locals, fromlist, level)
    def make_builtins(self, file_manager):
        used = filter(lambda x: x in self.get_builtins_whitelist(), __builtins__)
        modified = self.get_modified_builtins()
        new_builtins = {k: modified[k] if k in modified else __builtins__[k] for k in used}
        class ImportContext(object):
            def __init__(self):
                self.file_manager = file_manager
                self.imported = {}
        import_context = ImportContext()
        def imp(name, globals=None, locals=None, fromlist=(), level=0):
            return self._import_interceptor(import_context, name, globals, locals, fromlist, level)
        new_builtins["__import__"] = imp
        # Reduce introspection capabilities
        from types import FunctionType
        type2 = dictionary_of(type)
        if "__bases__" in type2: type2.pop("__bases__") # to avoid climbing to the ancestor of a class
        if "__subclasses__" in type2: type2.pop("__subclasses__") # to avoid descending to the subclasses
        if "func_code" in dictionary_of(FunctionType): dictionary_of(FunctionType).pop("func_code")
        # add a specially crafted open function that preload files and store them in memory
        new_builtins["open"] = file_manager.open
        return new_builtins
    def evaluate(self, code, file_manager=None, globals=None):
        """Evaluate some code using the current profile"""
        g = dict(globals) if globals else {} # copy the globals dictionary to not modify it in place
        g["__builtins__"] = self.make_builtins(file_manager)
        return eval(code, globals=g)
    
        
class DefaultExecutionProfile(ExecutionProfile):
    """A default implementation of an execution profile with reasonable settings
    to try to limit execution risks"""
    def __init__(self):
        super(DefaultExecutionProfile, self).__init__()
        self.builtins_whitelist = set([
            "abs", "all", "any", "ascii", "bin", "bool", "bytearray", "bytes", "callable", "chr", "classmethod",
            "complex", "delattr", "dict", "divmod", "enumerate", "filter", "float", "format", "frozenset", "getattr",
            "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter",
            "len", "list", "locals", "map", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow",
            "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted",
            "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip",
            "None", "NotImplemented", "Ellipsis",
            "Exception", "RuntimeError", "SyntaxError", "ZeroDivisionError", "TypeError",
            "IndexError", "NameError", "AssertionError", "ImportError", "OverflowError", "LookpError",
            "IOError", "FloatingPointError", "ValueError", "UnicodeError", "ArithmeticError", "UnboundLocalError",
            "IndentationError", "UnicodeEncodeError", "KeyError",
            "sys", "__build_class__", "__name__"])
        self.modules_whitelist = set([
            "abc", "array", "base64", "binascii", "binhex", "bisect",
            "calendar", "cmath", "collections", "copy", "datetime", "decimal", 
            "difflib", "encodings", "fractions", "functools", "hashlib", "heapq",
            "math", "numbers", "operator", "queue", "random", "re", "string", "time"])
        self.modified_modules = {"sys": limited_sys}
    def get_builtins_whitelist(self):
        return self.builtins_whitelist
    def get_modules_whitelist(self):
        return self.modules_whitelist
    def get_modified_modules(self):
        return self.modified_modules
    
    
class CodeParsingEnvironment(ExecutionEnvironment):
    @classmethod
    def from_file(self, filepath):
        with open(filepath, "r") as f:
            return CodeExecutionEnvironment(f.read(), FunctionArguments(None))
    def __init__(self, code, funcargs: FunctionArguments, profile=None, rootdir=None):
        super(CodeParsingEnvironment, self).__init__(funcargs)
        if profile is None: profile = DefaultExecutionProfile()
        self._redirect_stdfiles = True
        self.code = code
        self.profile = profile
        self.rootdir = rootdir
        self.ast = None
        self.metrics = None
    def execute(self):
        # add the required files in the file manager
        try:
            self.ast = ast.parse(self.code)
        except:
            self.result._end(ParsingException.create(self))
        else:
            self.metrics = CodeMetrics(self.code, self.ast)
            imports = get_transitive_import_dependencies(self.code, paths=(self.rootdir,) if self.rootdir else tuple())
            remote_imports = list(filter(lambda x: isinstance(x, RemoteDependency), imports))
            whitelisted_prefixes = PrefixMapping(map(lambda x: x.split("."), self.profile.get_modules_whitelist()))
            rejected_imports = frozenset(filter(lambda x: len(whitelisted_prefixes[x.module.split(".")]) == 0, remote_imports))
            self.rejected_imports = rejected_imports
            if not rejected_imports:
                for remote_import in remote_imports:
                    logger.info("Importing {}".format(remote_import))
                    __import__(remote_import.module)
            else:
                self.result._end(FailedImportException(rejected_imports, self))
            if not self.result.executed:
                self.result._end(True)
        return self.result
    def create_main_environment(self, funcargs: FunctionArguments):
        if not self.result.executed:
            raise Exception("Not already executed")
        else:
            funcargs.globals.update(self.funcargs.globals)
            return CodeExecutionEnvironment(self, funcargs)
    @classmethod
    def execute_for_globals(cls, code, funcargs, profile=None, rootdir=None):
        env = CodeParsingEnvironment(code, funcargs, profile=profile, rootdir=rootdir)
        env.execute()
        env2 = env.create_main_environment(FunctionArguments(None))
        result = env2.execute()
        if not isinstance(result.returned, ForeignCodeException):
            return result.globals
        else:
            raise result.returned
        
            
        
class CodeExecutionEnvironment(ExecutionEnvironment):
    """Execute top-level Python code"""
    def __init__(self, parent, funcargs: FunctionArguments):
        super(CodeExecutionEnvironment, self).__init__(funcargs)
        self.parent = parent
        self._redirect_stdfiles = True
        self.profile = parent.profile
        self.globals["__builtins__"] = self.profile.make_builtins(self.file_manager)
        self.file_manager.parent = parent.file_manager # stack the file manager
    def _execute(self):
        g = dict(self.globals)
        self.result._start()
        try:
            exec(self.parent.code, self.globals)
        except Exception as e:
            self.result._end(ExecutionException.create(self))
        else:
            self.result._end(None, globals={k: v for (k, v) in self.globals.items() if k not in g})
        return self.result
    def create_function_environment(self, name, funcargs: FunctionArguments):
        if not self.result.executed:
            raise Exception("Not already executed")
        else:
            function = self.result.globals.get(name, self.globals.get(name, None))
            if function is None:
                return None
            env = FunctionExecutionEnvironment(self, name, funcargs)
            return env
    
class FunctionExecutionEnvironment(ExecutionEnvironment):
    def __init__(self, parent, function, funcargs: FunctionArguments):
        super(FunctionExecutionEnvironment, self).__init__(funcargs)
        self._redirect_stdfiles = True
        self.parent = parent # parent execution environment
        self.function = function
        self.funcargs = funcargs
        self.globals = dict(self.parent.globals)
        self.globals.update(self.parent.result.globals)
        self.globals.update(self.funcargs.globals)
        self.globals["__builtins__"] = self.parent.profile.make_builtins(self.file_manager)
        # parent.globals["__builtins__"] = self.globals["__builtins__"] # required since the functions keep their container globals
        self.args_dict = OrderedDict()
        update_dict(self.args_dict, [ ("__args_{}".format(i), self.funcargs.args[i]) for i in range(0, len(self.funcargs.args)) ])
        update_dict(self.args_dict, [ ("__kwargs_{}".format(k), v) for (k, v) in self.funcargs.kwargs.items() ])
        self.globals.update(self.args_dict)	
        self.file_manager.parent = parent.file_manager
    def _execute(self):
        """Execute the function"""
        # TODO: memory profiling..
        # Create the string to be evaluated
        g = dict(self.globals)
        f = g.get(self.function)
        f.__globals__.clear()
        f.__globals__.update(g)
        call = "{}({})".format(self.function, ",".join(self.args_dict))
        self.result._start()
        try:
            r = eval(call, self.globals)
        except Exception as e:
            r = ExecutionException.create(self)
        self.result._end(r, globals={k: v for (k, v) in self.globals.items() if k not in g})
    
    
if __name__ == "__main__":
    test_code = """
import sys

def fib(n):
    return fib(n-1) + fib(n-2) if n > 1 else 1
print("Little message on stdout", file=sys.stdout)
print("Little message on stderr", file=sys.stderr) # FIXME: file
"""
    test_code2 = """
import sys

def fib(n):
    if n < 2: return 1
    v, w = (1, 1)
    for k in range(2, n+1):
        tmp = w
        w = v + w
        v = tmp
    return w
"""
    cee = CodeExecutionEnvironment(test_code)
    cee.parse()
    if cee.parsed is True:
        print("Vocabulary: {}".format(cee.metrics.vocabulary))
        print("AST height: {}".format(cee.metrics.height))
    else:
        print("Parsing error: {}".format(cee.parsed))
    with Sandbox(10000000, 10, enabled=False):
        print("foo")
        cee.execute()
        print("Result: {}".format(cee.result))
        for a in (1,2,3,4,5, 6, 7, 8, 9, 10):
            print(cee.execute_function("fib", a).result)
        ExecutionEnvironments(test_code, test_code2).test_results("fib", *[ (x,) for x in range(0, 10) ])
    print("The end.")
