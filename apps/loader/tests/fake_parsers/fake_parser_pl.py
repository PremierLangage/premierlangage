#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  pl.py
#
#  Copyright 2018 Coumes Quentin

import json
import os
import re
from os.path import basename, dirname, join

from django.conf import settings

from filebrowser.utils import to_download_url
from loader.exceptions import FileNotFound, SemanticError, SyntaxErrorPL
from loader.utils import get_location


BAD_CHAR = r''.join(settings.FILEBROWSER_DISALLOWED_CHAR)



class Parser:
    """Parser used to parse pl files with .pl extension"""
    
    KEY = r'^(?P<key>[a-zA-Z_][a-zA-Z0-9_\.]*)\s*'
    COMMENT = r'(?P<comment>#.*)'
    VALUE = r'(?P<value>[^=@%#][^#]*?)\s*'
    FILE = r'(?P<file>([a-zA-Z0-9_]*:)?((\/)?[^' + BAD_CHAR + r']+)(\/[^' + BAD_CHAR + r']+)*)\s*'
    ALIAS = r'((\[\s*(?P<alias>[a-zA-Z_.][a-zA-Z0-9_.]*)\s*\])\s*?)?'
    
    URL_LINE = re.compile(KEY + r'(?P<operator>\$=)\s*' + FILE + COMMENT + r'?$')
    ONE_LINE = re.compile(KEY + r'(?P<operator>=|\%|\+|\-)\s*' + VALUE + COMMENT + r'?$')
    FROM_FILE_LINE = re.compile(KEY + r'(?P<operator>=@|\+=@|\-=@)\s*' + FILE + COMMENT + r'?$')
    EXTENDS_LINE = re.compile(r'(extends|template)\s*=\s*' + FILE + COMMENT + r'?$')
    MULTI_LINE = re.compile(KEY + r'(?P<operator>==|\+=|\-=|\%=)\s*' + COMMENT + r'?$')
    SANDBOX_FILE_LINE = re.compile(r'@\s*' + FILE + ALIAS + COMMENT + r'?$')
    END_MULTI_LINE = re.compile(r'==\s*$')
    COMMENT_LINE = re.compile(r'\s*' + COMMENT + r'$')
    EMPTY_LINE = re.compile(r'\s*$')
    HTML_KEYS = ['title', 'teacher', 'introductionh', 'text', 'form']
    
    
    def __init__(self, directory, rel_path):
        self.directory = directory
        self.path = rel_path
        self.path_parsed_file = join(directory.root, rel_path)
        self.lineno = 1
        self.dic = dict()
        self.warning = list()

        with open(self.path_parsed_file) as f:
            self.lines = f.readlines()
        
        self._multiline_dic = None
        self._multiline_key = None
        self._multiline_op = None
        self._multiline_value = None
        self._multiline_opened_lineno = None
        self._multiline_json = False
    
    
    def add_warning(self, message):
        """Append a warning the self.warning list according to message."""
        f = (self.path_parsed_file, self.lineno, message, self.lines[self.lineno - 1])
        self.warning.append("%s:%d -- %s\n%s" % f)
    
    
    def dic_add_key(self, key, value, append=False, prepend=False, replace=False):
        """Add the value to the key in the dictionnary, parse the key to create sub dictionnaries.
         Append the value if append is set to True.
         Does not generate a warning when the key already exists if replace is set to True """
        current_dic = self.dic
        sub_keys = key.split(".")
        for k in sub_keys:
            if k == '':
                raise SyntaxErrorPL(self.path_parsed_file, self.lines[self.lineno - 1], self.lineno)
        for k in sub_keys[:-1]:  # creating sub dictionnaries
            current_dic[k] = current_dic.get(k, dict())
            current_dic = current_dic[k]
        last_key = sub_keys[-1]
        
        if last_key in current_dic and not append and not prepend and not replace:
            self.add_warning("Key '" + key + "' overwritten at line " + str(self.lineno))
        if append:
            if last_key not in current_dic:
                line = self._multiline_opened_lineno if self._multiline_key else self.lineno
                error = "Trying to append to non-existent key '" + key + "'."
                raise SemanticError(self.path_parsed_file, self.lines[line - 1], line, error)
            current_dic[last_key] += value
        elif prepend:
            if last_key not in current_dic:
                line = self._multiline_opened_lineno if self._multiline_key else self.lineno
                error = "Trying to prepend to non-existent key '" + key + "'."
                raise SemanticError(self.path_parsed_file, self.lines[line - 1], line, error)
            current_dic[last_key] = value + current_dic[last_key]
        else:
            current_dic[last_key] = value
    
    
    def dic_get_subkeys_value(self, key):
        """Get the value of the key in the dictionary. Parse the key to find sub dictionnaries"""
        current_dic = self.dic
        sub_keys = key.split('.')
        for k in sub_keys[:-1]:
            current_dic = current_dic[k]
        return current_dic[sub_keys[-1]]
    
    
    def fill_meta(self):
        """Append meta informations to self.dic. Meta informations
        should starts with two underscores"""
        self.dic['__format'] = '.pl'
        self.dic['__rel_path'] = self.path_parsed_file
        self.dic['__comment'] = ''
        self.dic['__files'] = dict()
        self.dic['__dependencies'] = [self.path_parsed_file]
        self.dic['__extends'] = list()
    
    
    def extends_line_match(self, match, line):
        """ Appends file, line and lineno to self.dic['__extends'] so that it can be later processed
            by loader.parser.

            Raise from loader.exceptions
                - SyntaxErrorPL if no group 'file' was found.
                - DirectoryNotFound if the directory indicated by the pl couldn't be found"""
        
        try:
            directory, path = get_location(self.directory, match.group('file'),
                                           current=dirname(self.path), parser=self)
        except SyntaxError as e:
            raise SyntaxErrorPL(self.path_parsed_file, line, self.lineno, str(e))
        except FileNotFoundError as e:
            raise FileNotFound(self.path_parsed_file, line, match.group('file'), self.lineno,
                               str(e))
        
        self.dic['__extends'].append({
            'path':           path,
            'line':           line,
            'lineno':         self.lineno,
            'directory_name': directory
        })
    
    
    def from_file_line_match(self, match, line):
        """ Map (or append) the content if the file corresponding to file)
            to the key

            Raise from loader.exceptions:
                - SyntaxErrorPL if no group 'file' or 'key' was found
                - SemanticError if trying to append a nonexistent key
                - DirectoryNotFound if trying to load from a nonexistent directory
                - FileNotFound if the given file do not exists."""
        
        key = match.group('key')
        op = match.group('operator')
        
        try:
            directory, path = get_location(self.directory, match.group('file'),
                                           current=dirname(self.path), parser=self)
            
            with open(join(settings.FILEBROWSER_ROOT, directory, path)) as f:
                if '+' in op:
                    self.dic_add_key(key, f.read(), append=True)
                elif '-' in op:
                    self.dic_add_key(key, f.read(), prepend=True)
                else:
                    self.dic_add_key(key, f.read())
        except FileNotFoundError as e:
            raise FileNotFound(self.path_parsed_file, line, match.group('file'), self.lineno,
                               str(e))
        except SyntaxError as e:
            raise SyntaxErrorPL(self.path_parsed_file, line, self.lineno, str(e))
    
    
    def one_line_match(self, match, line):
        """ Map value to key if operator is '=',
            Map json.loads(value) if operator is '%'

            Raise from loader.exceptions:
                - SyntaxErrorPL if no group 'value', 'key' or 'operator' was found
                              if operator is '%' and value isn't a well formated json"""
        
        value = match.group('value')
        key = match.group('key')
        op = match.group('operator')
        
        if op == '=':
            self.dic_add_key(key, value)
        elif op == '%':
            try:
                self.dic_add_key(key, json.loads(value))
            except json.decoder.JSONDecodeError:
                raise SyntaxErrorPL(join(self.directory.root, self.path),
                                    line,
                                    self.lineno,
                                    message="Invalid JSON syntax starting ")
        elif op == '+':
            self.dic_add_key(key, value, append=True)
        elif op == '-':
            self.dic_add_key(key, value, prepend=True)


    def multi_line_match(self, match, line):
        """ Set self._multiline_key and self._multiline_opened_lineno.
            Also set self._multiline_json if operator is '=%'"""
        
        key = match.group('key')
        op = match.group('operator')
        
        self._multiline_key = key
        self._multiline_op = op
        self._multiline_value = ''
        self._multiline_opened_lineno = self.lineno
        if op == '%=':
            self._multiline_json = True
        
        if op != '+=' and op != '-=':  # Allow next lines to be concatenated
            self.dic_add_key(key, '')


    def while_multi_line(self, line):
        """ Append line to self.dic[self._multiline_key] if line does
            not match END_MULTI_LINE.

            Raise from loader.exceptions:
                - SyntaxErrorPL if self._multiline_json is True, line match END_MULTI_LINE
                  and string consisting of all readed line is not a well formated json."""
        if self.END_MULTI_LINE.match(line):
            # [:-1] will remove last \n in a multiline value
            if self._multiline_op == '-=':
                self.dic_add_key(self._multiline_key, self._multiline_value[:-1], prepend=True)
            else:
                self.dic_add_key(self._multiline_key, self._multiline_value[:-1], append=True)

            if self._multiline_json:
                try:
                    self.dic_add_key(self._multiline_key, json.loads(self.dic[self._multiline_key]),
                                     replace=True)
                except json.decoder.JSONDecodeError:
                    raise SyntaxErrorPL(join(self.directory.root, self.path),
                                        self.lines[self._multiline_opened_lineno - 1],
                                        self._multiline_opened_lineno,
                                        message="Invalid JSON syntax starting ")

            self._multiline_key = None
            self._multiline_op = None
            self._multiline_value = None
            self._multiline_json = False
        else:
            self._multiline_value += line

    def sandbox_file_line_match(self, match, line):
        """ Map content of file to self.dic['__files'][name].

            Raise from loader.exceptions:
                - SyntaxErrorPL if no group 'file' was found
                - DirectoryNotFound if trying to load from a nonexistent directory
                - FileNotFound if the given file do not exists."""
        
        try:
            directory, path = get_location(self.directory, match.group('file'),
                                           current=dirname(self.path), parser=self)
            name = basename(path) if not match.group('alias') else match.group('alias')
            
            self.dic['__dependencies'].append(path)
            with open(join(settings.FILEBROWSER_ROOT, directory, path)) as f:
                self.dic['__files'][name] = f.read()
        
        except FileNotFoundError as e:
            raise FileNotFound(self.path_parsed_file, line, match.group('file'), self.lineno,
                               str(e))
        except SyntaxError as e:
            raise SyntaxErrorPL(self.path_parsed_file, line, self.lineno, str(e))


    def url_line_match(self, match, line):
        """ Map value to a download url of a resource.

            Raise from loader.exceptions:
                - SyntaxErrorPL if no group 'file' was found
                - DirectoryNotFound if trying to load from a nonexistent directory
                - FileNotFound if the given file do not exists."""

        key = match.group('key')
    
        try:
            directory, path = get_location(self.directory, match.group('file'),
                                            current=dirname(self.path), parser=self)
            url = to_download_url(os.path.join(directory, path))
            self.dic_add_key(key, url)
        except FileNotFoundError as e:
            raise FileNotFound(self.path_parsed_file, line, match.group('file'), self.lineno, str(e))
        except SyntaxError as e:
            raise SyntaxErrorPL(self.path_parsed_file, line, self.lineno, str(e))


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
        
        elif self.SANDBOX_FILE_LINE.match(line):
            self.sandbox_file_line_match(self.SANDBOX_FILE_LINE.match(line), line)
        
        elif self.MULTI_LINE.match(line):
            self.multi_line_match(self.MULTI_LINE.match(line), line)
        
        elif self.COMMENT_LINE.match(line):
            self.dic['__comment'] += '\n' + self.COMMENT_LINE.match(line).group('comment')
        
        elif self.URL_LINE.match(line):
            self.url_line_match(self.URL_LINE.match(line), line)
        
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
            try:
                self.parse_line(line)
            except UnicodeDecodeError:
                raise SyntaxErrorPL(join(self.directory.root, self.path),
                                    self.lines[self.lineno - 1],
                                    self.lineno,
                                    message="Cannot reference a binary file")
            self.lineno += 1
        
        if self._multiline_key:  # If a multiline value is still open at the end of the parsing
            raise SyntaxErrorPL(join(self.directory.root, self.path),
                                self.lines[self._multiline_opened_lineno - 1],
                                self._multiline_opened_lineno,
                                message="Multiline value never closed, start ")
        
        return self.dic, self.warning



def get_parser():
    """ Used to dynamicaly add parser to the loader.
        Should return dictionnary containing :
            - a list of extension using this parser,
            - the class object
            - the type parsed ('pl' or 'pltp')."""
    
    return {
        'ext':    ['.pl'],
        'parser': Parser,
        'type':   'pl'
    }
