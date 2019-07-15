#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  pl_lext.py
#
#  Copyright 2019 Cisse Mamadou [mciissee@gmail.com]


# http://www.dabeaz.com/ply/ply.html#ply_nn18

import json
import re
import traceback
import uuid
from os.path import basename, dirname, join

from django.conf import settings
from ply import yacc

from components.utils import SELECTORS
from filebrowser.models import Directory
from filebrowser.utils import join_fb_root, rm_fb_root, to_download_url
from loader.utils import get_location

from .errors import (CONTRACT_ERROR, SYNTAX_ERROR, TYPE_ERROR,
                     UNDEFINED_VARIABLE, UNRESOLVED_IMPORT,
                     UNRESOLVED_REFERENCE, VARIABLE_OVERRIDE,
                     UNDEFINED_COMPONENT)
from .pl_lexer import Lexer

PARSERS = []

def find_parser(optimize=1):
    """
    Returns an instance of a PL file parser.
    The function will reuse existing parser if possible
    """
    for p in PARSERS:
        if not p.parsing:
            print('REUSE PARSER')
            return p
    print('NEW PARSER')
    return Parser(optimize=optimize)


class Parser(object):
    """
    Parser of a PL program.
    """

    EXTEND_KEYWORDS = ['extends', 'template']
    OVERRIDE_ON_EXTENDS = ['__definitions']
    REQUIRED = ['title', 'text', 'form']
    STRINGS = ['text', 'introduction', 'form', 'evaluator', 'before', 'author', 'title']

    FILE = r'(?P<path>[^\[\#\n]+)'
    ALIAS = r'((\[\s*(?P<alias>[a-zA-Z_.][a-zA-Z0-9_.]*)\s*\])\s*?)?'
    SANBOX_FILE = re.compile(FILE + ALIAS)

    def __init__(self, optimize=1):

        self.lexer = Lexer(optimize=optimize)
        self.tokens = self.lexer.tokens
        self.parser = yacc.yacc(
            module=self,
            start="start",
            optimize=optimize
        )

        self.parsing = False
        self.path = ''
        self.absolute = ''
        self.relative = ''
        self.directory = None

        self.add = {
            '=': self.add_text,
            '+': self.add_text,
            '-': self.add_text,
            '$': self.add_text,
            '==': self.add_text,
            '+=': self.add_text,
            '-=': self.add_text,
            '=$': self.add_text,
            '=:': self.add_component,
            '%': self.add_json,
            '%=': self.add_json,
        }

        PARSERS.append(self)

    def parse(self, path, directory=None, extends=False, debug=0):
        """
        Parses data stored in file and return an AST in JSON format..
        """
        paths = path.split('/')

        self.lineno = 1
        self.path = path
        self.directory = directory
        if not directory:
            self.directory = Directory.objects.get(name=paths[0])

        self.relative  = join(*(paths[1:]))
        self.absolute  = join_fb_root(path)
 
        with open(self.absolute, 'r') as f:
            data = f.read()

        self.ast = {
            '__path': self.path,
            '__files': {},
            '__errors': [],
            '__extends': [],
            '__warnings': [],
            '__definitions': {},
            '__dependencies': [],
            '__comments': []
        }

        self.add_depend(self.path)
 
        self.parsing = True

        self.lexer.reset()
        self.parser.parse(
            input=data,
            lexer=self.lexer, 
            debug=debug
        )

        self.compile(extends)

        self.parsing = False

        return self.ast


    def compile(self, extends):
        self.comments()
        disable = self.lints('disable')
        if not extends: # original compiled file
            self.linting()
            self.requirements()

        if len(disable) > 0:
            self.ast['__errors'] = []
            self.ast['__warnings'] = []


    def comments(self):
        for token in self.lexer.comments:
            self.ast['__comments'].append({
                "start": token.lineno,
                "end": token.lineno + token.value.count('\n'),
                "value": token.value,
                "file": self.path
            })

    def lints(self, name):
        lints = []
        for item in self.ast['__comments']:
            v = item['value']
            s = '#! linter:%s:' % name
            if v.startswith(s):
                lints.append((
                    item['file'],
                    item['start'],
                    v.replace(s, '').strip()
                ))
        return lints

    def requirements(self):
        for k in self.REQUIRED:
            if not k in self.ast:
                self.error(UNDEFINED_VARIABLE, '"%s" must be declared' % k, lineno=1)

        for k in self.ast:
            if not k.startswith('__'):
                self.finddoc(k)
                if k in self.STRINGS and type(self.ast[k]) is not str:
                    self.error(TYPE_ERROR, '"%s" must be a string' % k, lineno=1)

    def linting(self):

        def find_extends():
            extends = self.ast['__extends']
            for e in extends:
                if e['file'] == self.path:
                    return e

        def definitions():
            lints = self.lints('require')

            for lint in lints:
                path, line, lint = lint
                if path == self.path:
                    continue

                lint = lint.split('::')
            
                vartype = None
                varname = lint[0].strip()
                n = len(lint)
                if n == 2:
                    vartype = lint[1].strip()

                if not varname in self.ast['__definitions']:
                    message = 'variable "%s" must be declared'
                    self.error(CONTRACT_ERROR, message % (varname), lineno=1)

                if vartype:
                    try:
                        id, obj = self.get(varname)
                        err = (vartype == 'int' and type(obj[id]) != int) \
                            or (vartype == 'float' and type(obj[id]) != float) \
                            or (vartype == 'dict' and type(obj[id]) != dict) \
                            or (vartype == 'str' and type(obj[id]) != str)

                        if err:
                            message = 'variable "%s" must be of type "%s"'
                            line = self.ast['__definitions'][varname].get('lineno', 1)
                            self.error(CONTRACT_ERROR, message % (varname, vartype), lineno=line)
                    except:
                        # case where we search component.text
                        # but component is not defined
                        # obj will be equals to {} after a call to get and id to text
                        message = 'variable "%s" must be of type "%s"'
                        self.error(CONTRACT_ERROR, message % (varname, vartype), lineno=1)

        def files():
            lints = self.lints('sandbox')
            for lint in lints:
                path, line, lint = lint
                if not lint.strip() in self.ast['__files']:
                    message = '"%s" must be on the sandbox'
                    self.error(CONTRACT_ERROR, message % (lint), lineno=1)

        try:
            definitions()
            files()
        except:
            pass


    def finddoc(self, k):
        definition = self.ast['__definitions'].get(k)
        if definition:
            l = definition['lineno']
            for item in self.ast['__comments']:
                if item['end'] == l - 1 and item['value'].startswith('#*'):
                    definition['doc'] = item['value'].replace('#*', '')

    def abspath(self, ref):
        """
            Converts the given path 'ref' to an absolute path in the file system.

            :param ref: the path to resolve relative to ``self.relative``
            :return: the absolute path of the resolved reference.
        """

        directory, path = get_location(self.directory, ref.strip(),
                            current=dirname(self.relative))
        path = join_fb_root(join(directory, path))
        return path

    def readpath(self, path):
        path = self.abspath(path.strip())
        with open(path, 'r') as f:
            return path, f.read()

    def error(self, type, message, lineno=None, path=None):
        self.ast['__errors'].append({
            'file': path if path else self.path,
            'lineno': lineno if lineno else self.lineno,
            'type': type,
            'message': message
        })

    def warning(self, type, message, lineno=None, path=None):
        self.ast['__warnings'].append({
            'file': path if path else self.path,
            'lineno': lineno if lineno else self.lineno,
            'type': type,
            'message': message
        })

   
    ##
    ## ACTIONS
    ##

    def set(self, d, k, v, append=False, prepend=False, replace=False):
        """
            Add v to d[k] depending to the optional parameters. 

            :param d: A dict object
            :param k: The key to set
            :param v: The value of the key
            :param append: Add v at the end of d[k]
            :param prepend: Add v at at the start d[k]
            :param replace: Replace d[k] by v
            :param add_depend: Add v to the __dependencies of the AST.

            :return: True if sets False otherwise

        """

        added = True
        if k in d and not append and not prepend and not replace:
            self.warning(
                type=VARIABLE_OVERRIDE,
                message=k
            )
        if append:
            if k in d:
                d[k] += v
            else:
                self.error(
                    type=UNDEFINED_VARIABLE,
                    message=k
                )
                added = False
        elif prepend:
            if k in d:
                d[k] = v + ' ' + d[k]
            else:
                self.error(
                    type=UNDEFINED_VARIABLE,
                    message=k
                )
            
            added = False
        else:
            d[k] = v

        return added

    def get(self, k):
        """
            Gets a reference to the variable pointed by 'k'
            in the AST from a dot notation.
    
            Example:
            with the variable a.b.c, the method will
            return (c, self.ast[a][b][c]) and create all the sub dicts if needed
        """

        parent = self.ast
        props = k.split(".")
        for prop in props:
            if prop == '':
                self.error(SYNTAX_ERROR, k)
                return (None, None)
        for prop in props[:-1]:
            parent[prop] = parent.get(prop, dict())
            parent = parent[prop]

        prop = props[-1]
        if not k in self.ast['__definitions'] and not k in self.EXTEND_KEYWORDS:
            self.ast['__definitions'][k] = {
                'lineno': self.lineno,
                'file': self.path,
            }

        return (prop, parent)

    def add_text(self, d, k, v, o):
        k = k.strip()
        v = v

        try:
            if o == '=' or o == '==':
                self.set(d, k, v, replace=True)
            elif o == '+' or o == '+=':
                self.set(d, k, v, append=True)
            elif o == '-' or o == '-=':
                self.set(d, k, v, prepend=True)
            elif o == '$' or o == '=$':
                d[k] = to_download_url(self.abspath(v))

        except FileNotFoundError:
            self.error(
                type=UNRESOLVED_REFERENCE,
                message= '%s %s %s' % (k, o, v)
            )
        except Exception as e:
            self.error(
                type= SYNTAX_ERROR,
                message='%s %s %s: %s' % (k, o, v, e) 
            )

    def add_json(self, d, k, v, o):
        k = k.strip()
        v = v.strip()

        try:
            d[k] = json.loads(v)
        except json.decoder.JSONDecodeError:
            self.error(
                type='invalid syntax',
                message= '%s %s %s' % (k, o, v)
            )

    def add_extends(self, d, k, v, o):

        def merge(target, source):
            """
            Copy every key and value of source in target
            if key is not present in target or override
            if key is in self.OVERRIDE_ON_EXTENDS
            """
            for key, value in source.items():
                if key not in target:
                    target[key] = value
                elif type(target[key]) is dict:
                    if key in self.OVERRIDE_ON_EXTENDS:
                        target[key].update(value)
                    else:
                        merge(target[key], value)
                elif type(target[key]) is list:
                    target[key] += value
            return target

        if o != '=':
            self.error(
                type=SYNTAX_ERROR,
                message='"%s" should be used with "=" operator' % k
            )
        else:
            path = rm_fb_root(self.abspath(v))
            parser = find_parser()
            ast = parser.parse(path, directory=self.directory, extends=True)

            merge(self.ast, ast)

            self.add_depend(path)
            self.ast['__extends'].append({
                'file': self.path,
                'extends': v,
                'lineno': self.lineno
            })

    def add_component(self, d, k, v, o):
        k = k.strip()
        v = v.strip()
        try:
            selector = SELECTORS[v]
            d[k] = {
                "cid": str(uuid.uuid4()),
                "selector": selector
            }
        except KeyError:
            self.error(UNDEFINED_COMPONENT, v)

    def add_depend(self, path):
        self.ast['__dependencies'].append({
            'file': self.path,
            'dependTo': rm_fb_root(path),
            'lineno': self.lineno
        })


    ##
    ## RULES
    ##
    
    def p_start(self, p):
        '''
        start : instructions
        '''

    def p_instructions(self, p):
        '''
        instructions : instructions assign_single
                    | instructions assign_multi
                    | instructions assign_file
                    | instructions sandbox
                    | empty
        '''
        size = len(p)
        if size == 4:
            p[0] = (p[3], p[2], '')
        elif size == 5:
            p[0] = (p[3], p[2], p[4])

    def p_assign_single(self, p):
        '''
        assign_single : ID OP_ASSIGN_SINGLE
                    | ID OP_ASSIGN_SINGLE TEXT
        '''
        self.lineno =  p.lineno(1)
        k = p[1].strip()
        o = p[2]
        v = ''
        if len(p) == 4:
            v = p[3]

        id, obj = self.get(k)
        if not id or not obj:
            return

        if k in self.EXTEND_KEYWORDS:
            self.add_extends(obj, k, v, o)
        else:
            self.add[o](obj, id, v, o)

    def p_assign_multi(self, p):
        '''
        assign_multi : ID OP_ASSIGN_MULTI TEXT
        '''
        self.lineno =  p.lineno(1)
        k = p[1].strip()
        o = p[2]
        v = p[3]
        id, obj = self.get(k)
        if not id or not obj:
            return

        self.add[o](obj, id, v, o)

    def p_assign_file(self, p):
        '''
        assign_file : ID OP_ASSIGN_FILE TEXT
        '''
        self.lineno =  p.lineno(1)
        k = p[1].strip()
        o = p[2]
        v = p[3]
        id, obj = self.get(k)
        if not id or not obj:
            return

        try:
            path, content = self.readpath(v)
            added = False
            if o[0] == '+':
                added = self.set(obj, id, content, append=True)
            elif o[0] == '-':
                added = self.set(obj, id, content, prepend=True)
            else:
                added = self.set(obj, id, content, replace=True)
            if added:
                self.add_depend(path)

        except FileNotFoundError:
            self.error(
                type=UNRESOLVED_REFERENCE,
                message= v,
            )
        except Exception:
            self.error(
                type=SYNTAX_ERROR,
                message= v,
            )

    def p_sandbox(self, p):
        '''
        sandbox : OP_SANDBOX TEXT
        '''
        self.lineno =  p.lineno(1)
        text = p[2].strip()
        match = self.SANBOX_FILE.match(text)
        try:
            if match:
                path = match.group('path').strip()
                alias = match.group('alias')
                if not path and not alias:
                    raise SyntaxError()

                path, content = self.readpath(path)
                name = (basename(path) if not alias else alias).strip()

                self.ast['__files'][name] = content
                self.add_depend(path)
            else:
                raise SyntaxError()
        except SyntaxError:
            self.error(
                type=SYNTAX_ERROR,
                message= text,
            )

        except FileNotFoundError:
            self.error(
                type=UNRESOLVED_IMPORT,
                message= text,
            )

    def p_empty(self, p):
        'empty :'
        pass
    
    def p_error(self, e):
        if e:
            self.error(type=SYNTAX_ERROR, message=e.value, lineno=e.lineno)
        self.parser.errok()
