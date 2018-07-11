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
    
    
    
    def test_syntax_error_pl_init(self):
        path = 'first1/second1/'
        line = 32
        lineno = '45'
        columno = None
        message = "error"
        
        classe = SyntaxErrorPL(path, line, lineno, columno, message)
        
        self.assertEqual(classe.path, 'first1/second1/')
        self.assertEqual(classe.line, 32)
        self.assertEqual(classe.lineno, '45')
        self.assertEqual(classe.columno, '')
        self.assertEqual(classe.message, 'error')
        
        classe2 = SyntaxErrorPL(path, line, lineno, '4')
       
        self.assertEqual(classe2.path, 'first1/second1/')
        self.assertEqual(classe2.line, 32)
        self.assertEqual(classe2.lineno, '45')
        self.assertEqual(classe2.columno, ":4")
        self.assertEqual(classe2.message, "Syntax error") 
  
  
    def test_syntax_error_pl_str(self):
        path = 'first1/second1/'
        line = '3'
        lineno = '45'
        columno = ''
        message = "Syntax error"
        str_message = abspath(path) + " - " + message + " at line " + lineno + ":" + columno + ":\n" + line
        
        classe = SyntaxErrorPL(path, line, lineno, columno, message)
        
        
        self.assertEqual(str(classe),str_message)
        
        
    def test_semantic_error_init(self):
        path = 'first1/second1/'
        line = 32
        lineno = '45'
        columno = None
        message = "error"
        
        classe = SemanticError(path, line, lineno, columno, message)
        
        self.assertEqual(classe.path, 'first1/second1/')
        self.assertEqual(classe.line, 32)
        self.assertEqual(classe.lineno, '45')
        self.assertEqual(classe.columno, '')
        self.assertEqual(classe.message, 'error')
        
        classe2 = SemanticError(path, line, lineno, '4')
       
        self.assertEqual(classe2.path, 'first1/second1/')
        self.assertEqual(classe2.line, 32)
        self.assertEqual(classe2.lineno, '45')
        self.assertEqual(classe2.columno, ":4")
        self.assertEqual(classe2.message, "Semantic error") 
  
    def test_semantic_erro_str(self):
        path = 'first1/second1/'
        line = '3'
        lineno = '45'
        columno = ''
        message = "Semantic error"
        str_message = abspath(path) + " -- " + message + "at line " + lineno + ":" + columno + "\n" + line
        
        classe = SemanticError(path, line, lineno, columno, message)
        
        
        self.assertEqual(str(classe),str_message)


    def test_directory_not_found_init(self):
        path = 'first1/second1/'
        line = 32
        lineno = '45'
        name = "dir1"
        message = "error"
        
        classe = DirectoryNotFound(path, line, name, lineno, message)
        
        self.assertEqual(classe.path, 'first1/second1/')
        self.assertEqual(classe.line, 32)
        self.assertEqual(classe.lineno, '45')
        self.assertEqual(classe.name, 'dir1')
        self.assertEqual(classe.message, 'error')
        
        classe2 = DirectoryNotFound(path, line, name, lineno)
       
        self.assertEqual(classe2.path, 'first1/second1/')
        self.assertEqual(classe2.line, 32)
        self.assertEqual(classe2.lineno, '45')
        self.assertEqual(classe2.name, "dir1")
        self.assertEqual(classe2.message, "Directory not found") 
  
  
    def test_directory_not_found_str(self):
        path = 'first1/second1/'
        line = '3'
        lineno = '45'
        name = 'dir1'
        message = "Directory not found"
        str_message = abspath(path) + " -- " + message + " : line " + lineno + " - '" + name + "'\n" + line
        
        classe = DirectoryNotFound(path, line, name, lineno, message)
        
        
        self.assertEqual(str(classe),str_message)


    def test_file_not_found_init(self):
        path = 'first1/second1/'
        line = 32
        lineno = '5'
        path_not_found = 'dir1'
        message = "error"
        
        classe = FileNotFound(path, line, path_not_found, lineno, message)
        
        self.assertEqual(classe.path, 'first1/second1/')
        self.assertEqual(classe.line, 32)
        self.assertEqual(classe.lineno, 'at line 5')
        self.assertEqual(classe.path_not_found, 'dir1')
        self.assertEqual(classe.message, 'error')
        
        classe2 = FileNotFound(path, line, path_not_found)
       
        self.assertEqual(classe2.path, 'first1/second1/')
        self.assertEqual(classe2.line, 32)
        self.assertEqual(classe2.lineno, '')
        self.assertEqual(classe2.path_not_found, 'dir1')
        self.assertEqual(classe2.message, "File not found") 
  
  
    def test_file_not_found_str(self):
        path = 'first1/second1/'
        line = '3'
        lineno = '45'
        path_not_found = 'dir1'
        message = "File not found"
        str_message = abspath(path) + " " + "at line " + lineno + " -- " + message + " : '" + abspath(path_not_found) + "'\n" + line
        
        classe = FileNotFound(path, line, path_not_found, lineno, message)
        
        self.assertEqual(str(classe), str_message)


    def test_unknown_extension_str(self):
        path = 'first1/second1/'
        name = 'name.pl'
        message = "Unknown Extension"
        str_message = abspath(path) + " -- " + message + " : '.pl' of file '" + name + "'" 

        classe = UnknownExtension(path, name, message)
        
        self.assertEqual(str(classe), str_message)
        

    def test_unknown_type_init(self):
        typ = 'directory'
        parser = 'parser'
        message = "error"
        
        classe = UnknownType(typ, parser, message)
        
        self.assertEqual(classe.typ, 'directory')
        self.assertEqual(classe.parser, 'parser')
        self.assertEqual(classe.message, 'error')
        
        classe2 = UnknownType(typ, parser)
       
        self.assertEqual(classe2.typ, 'directory')
        self.assertEqual(classe2.parser, 'parser')
        self.assertEqual(classe2.message, "Unknown Type") 
  
    def test_unknown_type_str(self):
        typ = 'directory'
        parser = '3'
        message = "Unknown Type"
        str_message = message + " : '" + typ + "' of parser '" + parser + "'" 
        
        classe = UnknownType(typ, parser, message)
        self.assertEqual(str(classe),str_message)

    def test_missing_key_init(self):
        path = 'first1/second1/'
        key = "k"
        message = "error"
        
        classe = MissingKey(path, key, message)
        
        self.assertEqual(classe.path, 'first1/second1/')
        self.assertEqual(classe.key, 'k')
        self.assertEqual(classe.message, 'error')
        
    def test_missing_key_str(self):
        path = 'first1/second1/'
        key = "k"
        message = "error"
        str_message = message + " : '" + key + "' in file " + abspath(path)

        classe = MissingKey(path, key, message)   
        
        self.assertEqual(str(classe),str_message)
        
        
