#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  exceptions.py
#  
#  Copyright 2018 Coumes Quentin

from os.path import splitext, basename, normpath, join, normpath

from django.conf import settings

from loader.utils import displayed_path



class SyntaxErrorPL(Exception):
    """Raised when a syntax error occured while parsing a file."""

    def __init__(self, path, line, lineno, message="Syntax error"):
        self.path = displayed_path(path)
        self.line = line
        self.message = message
        self.lineno = str(lineno)
        
    def __str__(self):
        return normpath(self.path) + " - " + self.message + " at line " + str(self.lineno) + ":\n" + self.line



class SemanticError(Exception):
    """Raised when a semantic error occured while parsing a file."""

    def __init__(self, path, line, lineno, message="Semantic error"):
        self.path = displayed_path(path)
        self.line = line
        self.message = message
        self.lineno = str(lineno)
        
    def __str__(self):
        return normpath(self.path) + " -- " + self.message + " at line " + str(self.lineno) + "\n" + self.line



class DirectoryNotFound(Exception):
    """Raised when a directory named with the syntax 'directory:path' couldn't be found in the database."""
    
    def __init__(self, path, line, name, lineno, message="Directory not found"):
        self.path = displayed_path(path)
        self.line = line
        self.name = name
        self.message = message
        self.lineno = str(lineno)
        
    def __str__(self):
        return normpath(self.path) + " -- " + self.message + " : line " + str(self.lineno) + " - '"+ self.name + "'\n" + self.line



class FileNotFound(Exception):
    """Raised when a file given by any path couldn't be found."""
    
    def __init__(self, path, line, path_not_found, lineno=None, message="File not found"):
        self.line = line
        self.path = displayed_path(path)
        self.message = message
        self.lineno = '' if not lineno else 'at line '+str(lineno)
        self.path_not_found = displayed_path(path_not_found)
        
    def __str__(self):
        return (normpath(self.path) + " " + self.lineno
            + " -- " + self.message 
            + " : '"+ normpath(self.path_not_found).replace(settings.FILEBROWSER_ROOT, '')
            + "'\n" + self.line)



class UnknownExtension(Exception):
    """Raised when the parsed file have an unknown extension"""
    
    def __init__(self, path, name, message="Unknown Extension"):
        self.path = displayed_path(path)
        self.name = basename(name)
        self.ext = splitext(name)[1] if splitext(name)[1] else "[NO EXTENSION]"
        self.message = message
        
    def __str__(self):
        return normpath(self.path) + " -- " + self.message + " : '"+ self.ext + "' of file '" + self.name + "'"



class UnknownType(Exception):
    """Raised when the parsed file have an unknown extension"""
    
    def __init__(self, typ, parser, message="Unknown Type"):
        self.typ = typ
        self.parser = str(parser)
        self.message = message
        
    def __str__(self):
        return self.message + " : '"+ self.typ + "' of parser '" + self.parser + "'"



class MissingKey(Exception):
    """Raised when a key is missing in a parsed file"""
    
    def __init__(self, file_path, key, message="Missing key"):
        self.path = displayed_path(file_path)
        self.key = key
        self.message = message
    
    def __str__(self):
        return self.message + " : '" + self.key + "' in file " + normpath(self.path)
