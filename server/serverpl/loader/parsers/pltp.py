import hashlib
import os
import re
from os.path import dirname, isfile, join

from django.conf import settings

from loader.exceptions import FileNotFound, SyntaxErrorPL
from loader.parsers.pl import Parser as ParserPL
from loader.utils import get_location



class Parser(ParserPL):
    PL_FILE_LINE = re.compile(r'@\s*' + ParserPL.FILE + ParserPL.COMMENT + r'?$')


    def fill_meta(self):
        """Append meta informations to self.dic. Meta informations
        should starts with two underscores"""
    
        self.dic['__format'] = '.pltp'
        self.dic['__rel_path'] = self.path_parsed_file
        self.dic['__comment'] = ''
        self.dic['__pl'] = list()
        self.dic['__extends'] = list()
    
        sha1 = hashlib.sha1()
        sha1.update((self.directory.name + ':' + self.path).encode('utf-8'))
        self.dic['__sha1'] = sha1.hexdigest()
    
    
    def pl_file_line_match(self, match, line):
        """ Appends file, line and lineno to self.dic['__pl'] so that it can be later processed
            by loader.loader.

            Raise loader.exceptions.SyntaxErrorPL if no group 'file' was found."""
        
        try:
            path = get_location(self.directory, match.group('file'), current=dirname(self.path))
        except SyntaxError as e:
            raise SyntaxErrorPL(self.path_parsed_file, line, self.lineno, str(e))
        
        directory_name = self.directory.name
        if not isfile(join(self.directory.root, path)) and match.group('file').startswith('/'):
            for lib in [l for l in os.listdir(settings.FILEBROWSER_ROOT) if not l.isdigit()]:
                if isfile(join(settings.FILEBROWSER_ROOT, lib, match.group('file')[1:])):
                    directory_name = lib
                    path = match.group('file')[1:]
                    break
            else:
                raise FileNotFound(join(self.directory.root, self.path), line,
                                   join(self.directory.name, path), self.lineno, "PL not found")
        
        self.dic['__pl'].append({
            'path'          : path,
            'line'          : line,
            'lineno'        : self.lineno,
            'directory_name': directory_name
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



def get_parser():
    """ Used to dynamicaly add parser to the loader.
        Should return dictionnary containing :
            - a list of extension using this parser,
            - the class object
            - the type parsed ('pl' or 'pltp')."""
    
    return {
        'ext'   : ['.pltp'],
        'parser': Parser,
        'type'  : 'pltp'
    }
