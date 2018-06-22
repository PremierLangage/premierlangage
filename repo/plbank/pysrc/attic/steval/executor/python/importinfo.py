#! /usr/bin/env python3
"""
Retrieve the import dependencies of a specified code

@author: chilowi at u-pem.fr
"""

import ast, os

class Dependency(object):
	def __init__(self, module):
		self.module = module
	def __repr__(self):
		return self.module
	
class LocalDependency(Dependency):
	def __init__(self, module, filepath, code):
		Dependency.__init__(self, module)
		self.filepath = filepath
		self.code = code
		
class RemoteDependency(Dependency):
	def __init__(self, module):
		Dependency.__init__(self, module)
		

def get_import_dependencies(code):
	"""Determine the imported modules by examing the AST
	Return a dictionary {import_name: complete_module_name}"""
	tree = ast.parse(code)
	class V(ast.NodeVisitor):
		def __init__(self):
			self.imports = {}
		def visit(self, node):
			if type(node) in (ast.Import, ast.ImportFrom):
				module = getattr(node, "module", "")
				if module: module += "."
				for name in node.names:
					self.imports[name.asname if name.asname else name.name] = module + name.name
			else:
				super(V, self).visit(node)
	v = V()
	v.visit(tree)
	return v.imports
	
def get_transitive_import_dependencies(code, paths=(".")):
	imports = get_import_dependencies(code)
	results = set()
	def find_path(imp_name):
		if imp_name.find("..") >= 0:
			return None # we do not support relative .. import for security reasons
		imp_name2 = imp_name.replace(".", "/")
		for path in paths:
			filepath = "{}.py".format(os.path.join(path, imp_name2))
			if os.path.exists(filepath):
				return filepath
	for (k, v) in imports.items():
		filepath = find_path(v)
		if filepath:
			with open(filepath, "r") as f:
				code = f.read()
				results.add(LocalDependency(v, filepath, code))
				results = results.union(get_transitive_import_dependencies(code, paths))
		else:
			results.add(RemoteDependency(v))
	return results
	
				
				


