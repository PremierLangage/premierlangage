#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  pltp.py
#  
#  Copyright 2018 Coumes Quentin


import re, json, hashlib
from os.path import join
from django.core.exceptions import ObjectDoesNotExist
from loader.exceptions import SemanticError, SyntaxErrorPL, DirectoryNotFound, FileNotFound
from loader.utils import get_location
from serverpl.settings import REPO_ROOT


class Parser:
    """Parser used to parse pltp files with .pltp extension"""

    KEY = r'^(?P<key>[a-zA-Z_][a-zA-Z0-9_]*)\s*'
    COMMENT = r'(?P<comment>#.*)'
    VALUE = r'(?P<value>[^=@%#][^#]*?)\s*'
    FILE = r'(?P<file>([a-zA-Z_][a-zA-Z0-9_]*:)?((\/)?[a-zA-Z0-9_.]+)(\/[a-zA-Z0-9_.]+)*)\s*'

    ONE_LINE = re.compile(KEY + r'(?P<operator>=|\%)\s*' + VALUE + COMMENT+r'?' + r'$')
    FROM_FILE_LINE = re.compile(KEY + r'(?P<operator>=@|\+=@)\s*' + FILE + COMMENT+r'?' + r'$')
    EXTENDS_LINE = re.compile(r'(extends|template)\s*=\s*' + FILE + COMMENT+r'?' + r'$')
    MULTI_LINE = re.compile(KEY + r'(?P<operator>==|\+=|\%=)\s*' + COMMENT+r'?' + r'$')
    PL_FILE_LINE = re.compile(r'@\s*'+ FILE + COMMENT+r'?' + r'$')
    END_MULTI_LINE = re.compile(r'\s*==\s*')
    COMMENT_LINE = re.compile(r'\s*' + COMMENT + r'$')
    EMPTY_LINE = re.compile(r'\s*$')

    
    def __init__(self, directory, rel_path):
        self.directory = directory
        self.path = rel_path
        self.path_parsed_file = join(directory.root, rel_path).replace(REPO_ROOT, '')
        self.lineno = 1
        self.dic = dict()
        self.warning = list()
        
        with open(join(directory.root, rel_path), 'r') as f:
            self.lines = f.readlines()
        
        self._multiline_key = None
        self._multiline_opened_lineno = None
        self._multiline_json = False
    
    
    def add_warning(self, message):
        """Append a warning the self.warning list according to message."""
        
        self.warning.append(self.path_parsed_file + ' -- ' + message)
    
    
    def fill_meta(self):
        """Append meta informations to self.dic. Meta informations should starts with two underscores"""
        
        self.dic['__format'] = '.pltp'
        self.dic['__rel_path'] = self.path_parsed_file
        self.dic['__comment'] = ''
        self.dic['__pl'] = list()
        self.dic['__extends'] = list()
        
        sha1 = hashlib.sha1()
        sha1.update((self.directory.name+':'+self.path).encode('utf-8'))
        self.dic['__sha1'] = sha1.hexdigest()
    
    
    def extends_line_match(self, match, line):
        """ Appends file, line and lineno to self.dic['__extends'] so that it can be later processed
            by loader.parser.
            
            Raise loader.exceptions.SyntaxErrorPL if no group 'file' was found."""
        
        if not match.group('file'):
            raise SyntaxErrorPL(self.path_parsed_file, line, self.lineno)
        
        directory, path = get_location(self.directory, match.group('file'), current=self.path_parsed_file)
        
        self.dic['__extends'].append({
            'path': path.replace(directory.name+'/', ''),
            'line': line,
            'lineno': self.lineno,
            'directory_name': directory.name
        })
    
    
    def from_file_line_match(self, match, line):
        """ Map (or append) the content if the file corresponding to file)
            to the key key)
            
            Raise from loader.exceptions:
                - SyntaxErrorPL if no group 'file' or 'key' was found
                - SemanticError if trying to append a nonexistent key
                - DirectoryNotFound if trying to load from a nonexistent directory
                - FileNotFound if the given file do not exists."""
        
        if not match.group('file') or not match.group('key') or not match.group('operator'):
            raise SyntaxErrorPL(self.path_parsed_file, line, self.lineno)
        
        key = match.group('key')
        op = match.group('operator')
        
        # Add warning when overwritting a key
        if key in self.dic and '+' not in op:
            self.add_warning("Key '" + key + "' overwritten at line " + str(self.lineno))
        
        try:
            directory, path = get_location(self.directory, match.group('file'), current=self.path_parsed_file)
            path = join(directory.root, path.replace(directory.name+'/', ''))
            with open(path, 'r') as f:
                if '+' in op:
                    if not key in self.dic.keys():
                        raise SemanticError(self.path_parsed_file, line, self.lineno, "Trying to append to non-existent key '"+key+"'.")
                    self.dic[key] += f.read()
                else:
                    self.dic[key] = f.read()
        except ObjectDoesNotExist:
            raise DirectoryNotFound(self.path_parsed_file, line, match.group('file'), self.lineno)
        except FileNotFoundError:
            raise FileNotFound(self.path_parsed_file, line, path, lineno=self.lineno)
        except ValueError:
            raise FileNotFound(self.path_parsed_file, line, match.group('file'), lineno=self.lineno, message="Path from another directory must be absolute")
    
    
    def one_line_match(self, match, line):
        """ Map value to key if operator is '=',
            Map json.loads(value) if operator is '%'
            
            Raise from loader.exceptions:
                - SyntaxErrorPL if no group 'value', 'key' or 'operator' was found
                              if operator is '%' and value isn't a well formated json"""
        
        if not (match.group('key') and match.group('value') and match.group('operator')):
            raise SyntaxErrorPL(self.path_parsed_file, line, self.lineno)
        
        key = match.group('key')
        
        # Add warning when overwritting a key
        if key in self.dic:
            self.add_warning("Key '" + key + "' overwritten at line " + str(self.lineno))
            
        if match.group('operator') == '=':
            self.dic[key] = match.group('value')
        else:
            try:
                self.dic[key] = json.loads(match.group('value'))
            except:
                SyntaxErrorPL(join(self.directory.root, self.path), line, self.lineno, message="Invalid JSON syntax ")
        
    
    
    def multi_line_match(self, match, line):
        """ Set self._multiline_key and self._multiline_opened_lineno.
            Also set self._multiline_json if operator is '=%'
            
            Raise from loader.exceptions:
                - SyntaxErrorPL if no group 'key' or 'operator' was found"""
        
        if not match.group('key') or not match.group('operator'):
            raise SyntaxErrorPL(self.path_parsed_file, line, self.lineno)
        
        key = match.group('key')
        op = match.group('operator')
        
        # Add warning when overwritting a key
        if op != '+=' and key in self.dic:
            self.add_warning("Key '" + key + "' overwritten at line " + str(self.lineno))
        
        self._multiline_key = key
        self._multiline_opened_lineno = self.lineno
        if op == '=%':
            self._multiline_json = True
        
        if op != '+=': # Allow next lines to be concatenated
            self.dic[key] = ''
    
    
    def while_multi_line(self, line):
        """ Append line to self.dic[self._multiline_key] if line does
            not match END_MULTI_LINE.
            
            Raise from loader.exceptions:
                - SyntaxErrorPL if self._multiline_json is True, line match END_MULTI_LINE
                  and string consisting of all readed line is not a well formated json."""
        
        if self.END_MULTI_LINE.match(line):
            if self._multiline_json:
                try:
                    self.dic[self._multiline_key] = json.loads(self.dic[self._multiline_key])
                except:
                    SyntaxErrorPL(join(self.directory.root, self.path), self.lines[self._multi_line_lineno-1], self._multi_line_lineno, message="Invalid JSON syntax starting ")
            self._multiline_key = None
            self._multiline_json = False
        else:
            # Add warning when detecting '==' to prevent unintentionnal nested key
            if '==' in line:
                self.add_warning("Nested '==' detected inside a multiple line value ("+self._multiline_key+") at line "+str(self.lineno)+". You can ignore this warning if this is intended.")
            self.dic[self._multiline_key] += '\n'+line
    
    
    def pl_file_line_match(self, match, line):
        """ Appends file, line and lineno to self.dic['__pl'] so that it can be later processed
            by loader.loader.
            
            Raise loader.exceptions.SyntaxErrorPL if no group 'file' was found."""
        
        if not match.group('file'):
            raise SyntaxErrorPL(self.path_parsed_file, line, self.lineno)
        
        directory, path = get_location(self.directory, match.group('file'), current=self.path_parsed_file)
        
        self.dic['__pl'].append({
            'path': path.replace(directory.name+'/', ''),
            'line': line,
            'lineno': self.lineno,
            'directory_name': directory.name
        })
    
    
    def parse_line(self, line):
        """ Parse the given line by calling the appropriate function according to regex match.
        
            Raise loader.exceptions.SyntaxErrorPL if the line wasn't match by any regex."""
        
        if self._multiline_key:
            self.while_multi_line(line)
        
        elif self.EXTENDS_LINE.match(line):
            self.extends_line_match(self.EXTENDS_LINE.match(line), line)
        
        elif self.FROM_FILE_LINE.match(line):
            self.from_file_line_match(self.FROM_FILE_LINE.match(line), line)
            
        elif self.ONE_LINE.match(line):
            self.one_line_match(self.ONE_LINE.match(line), line)
        
        elif self.PL_FILE_LINE.match(line):
            self.pl_file_line_match(self.PL_FILE_LINE.match(line), line)
        
        elif self.MULTI_LINE.match(line):
            self.multi_line_match(self.MULTI_LINE.match(line), line)
        
        elif self.COMMENT_LINE.match(line):
            self.dic['__comment'] += '\n' + self.COMMENT_LINE.match(line).group('comment')
        
        elif not self.EMPTY_LINE.match(line):
            raise SyntaxErrorPL(self.path_parsed_file, line, self.lineno)    
    
    
    def parse(self):
        """ Parse the given file.
        
            Return a tuple (dic, warning) where:
                - dic is a dictionnary containing every key of the parse file.
                - warning is a list (may be empty) containing every warning
            
            Raise SyntaxErrorPL if a multi line key is still open at the end of the file."""
        
        self.fill_meta()
        
        for line in self.lines:
            self.parse_line(line)
            self.lineno += 1
        
        if self._multiline_key: # If a multiline value is still open at the end of the parsing
            raise SyntaxErrorPL(join(self.directory.root, self.path), line[self._multiline_opened_lineno-1], self._multiline_opened_line, message="Multiline value never closed, start ")
        
        return self.dic, self.warning




def get_parser():
    """ Used to dynamicaly add parser to the loader.
        Should return dictionnary containing :
            - a list of extension using this parser, 
            - the class object
            - the type parsed ('pl' or 'pltp')."""
        
    return {
        'ext': ['.pltp'],
        'parser': Parser,
        'type': 'pltp'
    }
