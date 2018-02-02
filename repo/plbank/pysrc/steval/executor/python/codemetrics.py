#! /usr/bin/env python3
"""
Metrics computation for Python source
"""

import ast, collections

class CodeMetrics(object):
    """Some simple metrics about the code"""
    def __init__(self, code, ast):
        self.code = code
        self.ast = ast
    @property
    def loc(self): 
        """Lines of code"""
        return len(self.code.split("\n"))
    @property
    def linelength(self):
        """Average line length"""
        lines = self.code.split("\n")
        return sum([ len(l) for l in lines ]) / len(lines)
    @property
    def nodesbag(self):
        """Return a bag of the nodes of the AST that are used"""
        bag = collections.defaultdict(int)
        for x in ast.walk(self.ast):
            bag[x.__class__.__name__.lower()] += 1
        return bag
    @property
    def vocabulary(self):
        """Return the vocabulary coefficient (between 0.0 and 1.0)
        A coefficient near 1 means that the vocabulary is rich"""
        nodesbag = self.nodesbag
        return len(nodesbag) / sum(nodesbag.values())
    @property
    def height(self):
        """Return the height of the AST"""
        class V(ast.NodeVisitor):
            def __init__(self):
                self.heights = {}
            def visit(self, node):
                self.heights.setdefault(node, 0)
                for child in ast.iter_child_nodes(node):
                    self.heights[child] = self.heights[node] + 1
                    self.visit(child)
        v = V()
        v.visit(self.ast)
        return max(v.heights.values()) + 1
