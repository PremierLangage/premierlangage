#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_utils.py
#  
#  


from django.test import TestCase


from loader.exceptions import SyntaxErrorPL, SemanticError, DirectoryNotFound, FileNotFound,\
UnknownType, UnknownExtension, MissingKey

from os.path import abspath


class ExceptionsTestCase(TestCase):
    """ Test functions of loader.exceptions modules. """
    
    def test_syntax_error_pl_str(self):
        path = 'first1/second1'
        line = '3'
        lineno = '45'
        message = "Syntax error"
        str_message = path + " - " + message + " at line " + lineno + ":\n" + line
        
        self.assertEqual(str(SyntaxErrorPL(path, line, lineno, message)), str_message)
    
    
    def test_semantic_error_str(self):
        path = 'first1/second1'
        line = '3'
        lineno = '45'
        message = "Semantic error"
        str_message = path + " -- " + message + " at line " + lineno + "\n" + line
        
        self.assertEqual(str(SemanticError(path, line, lineno, message)), str_message)
    
    
    def test_directory_not_found_str(self):
        path = 'first1/second1'
        line = '3'
        lineno = '45'
        name = 'dir1'
        message = "Directory not found"
        str_message = path + " -- " + message + " : line " + lineno + " - '" + name + "'\n" + line
        
        self.assertEqual(str(DirectoryNotFound(path, line, name, lineno, message)),str_message)
    
    
    def test_file_not_found_str(self):
        path = 'first1/second1'
        line = '3'
        lineno = '45'
        path_not_found = 'dir1'
        message = "File not found"
        str_message = path + " " + "at line " + lineno + " -- " + message + " : '" + path_not_found + "'\n" + line
        
        self.assertEqual(str(FileNotFound(path, line, path_not_found, lineno, message)), str_message)


    def test_unknown_extension_str(self):
        path = 'first1/second1'
        name = 'name.pl'
        message = "Unknown Extension"
        str_message = path + " -- " + message + " : '.pl' of file '" + name + "'" 
        
        self.assertEqual(str( UnknownExtension(path, name, message)), str_message)
    
    
    def test_unknown_type_str(self):
        typ = 'directory'
        parser = '3'
        message = "Unknown Type"
        str_message = message + " : '" + typ + "' of parser '" + parser + "'" 
        
        self.assertEqual(str(UnknownType(typ, parser, message)),str_message)
    
    
    def test_missing_key_str(self):
        path = 'first1/second1'
        key = "k"
        message = "error"
        str_message = message + " : '" + key + "' in file " + path
        
        self.assertEqual(str(MissingKey(path, key, message)   ),str_message)
