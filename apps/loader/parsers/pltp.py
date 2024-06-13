import hashlib
import re
from os.path import dirname

from loader.exceptions import FileNotFound, SyntaxErrorPL
from loader.parsers.pl import Parser as ParserPL
from loader.utils import get_location



class Parser(ParserPL):
    PL_FILE_LINE = re.compile(r'@\s*' + ParserPL.FILE + ParserPL.COMMENT + r'?$')
    PL_MODEL_FILE_LINE = re.compile(r'@\s*(?P<files>(?:' + ParserPL.FILE + r')+)' + ParserPL.COMMENT + r'?$')
    
    
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
            directory, path = get_location(self.directory, match.group('file'),
                                           current=dirname(self.path), parser=self)
        except SyntaxError as e:
            raise SyntaxErrorPL(self.path_parsed_file, line, self.lineno, str(e))
        except FileNotFoundError as e:
            raise FileNotFound(self.path_parsed_file, line, match.group('file'), self.lineno,
                               str(e))
        
        self.dic['__pl'].append({
            'type': 'direct',
            'path': path,
            'line': line,
            'lineno': self.lineno,
            'directory_name': directory
        })

    def pl_model_file_line_match(self, match, line):
        """ Appends a PL file to be dynamically generated based on given
            model and data

            Raise loader.exceptions.SyntaxErrorPL if no group 'files' was found."""
        
        model = {
            'type': 'model',
            'files': [],
            'line': line,
            'lineno': self.lineno,
        }

        for file_match in re.finditer(ParserPL.FILE, match['files']):
            model['files'].append(file_match['file'])
        
        self.dic['__pl'].append(model)
    
    
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

        elif self.PL_MODEL_FILE_LINE.match(line):
            self.pl_model_file_line_match(self.PL_MODEL_FILE_LINE.match(line), line)
        
        elif self.MULTI_LINE.match(line):
            self.multi_line_match(self.MULTI_LINE.match(line), line)
        
        elif self.COMMENT_LINE.match(line):
            self.dic['__comment'] += '\n' + self.COMMENT_LINE.match(line).group('comment')

        elif self.URL_LINE.match(line):
            self.url_line_match(self.URL_LINE.match(line), line)
                
        elif not self.EMPTY_LINE.match(line):
            raise SyntaxErrorPL(self.path_parsed_file, line, self.lineno)



def get_parser():
    """ Used to dynamicaly add parser to the loader.
        Should return dictionnary containing :
            - a list of extension using this parser,
            - the class object
            - the type parsed ('pl' or 'pltp')."""
    
    return {
        'ext':    ['.pltp'],
        'parser': Parser,
        'type':   'pltp'
    }
