from loader.parsers.pltp import Parser as ParserPLTP
from loader.parsers.pl import Parser as ParserPL
from loader.utils import get_location 
import re
from os.path import basename, dirname, join

from loader.exceptions import (ComponentNotFound, FileNotFound, SemanticError,
                               SyntaxErrorPL)




class Parser(ParserPLTP):
    MULTI_PL_LINE = re.compile(ParserPL.KEY+r'(?P<operator>@@)\s*' + ParserPL.COMMENT + r'?$')
    AAMULT = re.compile(r'\s*' + ParserPL.FILE + ParserPL.COMMENT + r'?$')
    AAEND = re.compile(r'\s*@@\s*?$')

    def __init__(self, directory, rel_path):
        super().__init__(directory, rel_path)
        self._aamultiline = False
        self._aamultiline_id = 0
        self._aamultiline_key = None
    
    def parse_line(self, line):
        """ Parse the given line by calling the appropriate function according to regex match.

            Raise loader.exceptions.SyntaxErrorPL if the line wasn't match by any regex."""
        
        if self._multiline_key:
            self.while_multi_line(line)

        elif self._aamultiline:
            self.while_aamultiline(line)

        elif self.MULTI_PL_LINE.match(line):
            self.multi_pl_line_match(self.MULTI_PL_LINE.match(line), line)

        elif self.EXTENDS_LINE.match(line):
            self.extends_line_match(self.EXTENDS_LINE.match(line), line)
        
        elif self.FROM_FILE_LINE.match(line):
            self.from_file_line_match(self.FROM_FILE_LINE.match(line), line)
        
        elif self.ONE_LINE.match(line):
            self.one_line_match(self.ONE_LINE.match(line), line)
        
        elif self.PL_FILE_LINE.match(line):
            # self.pl_file_line_match(self.PL_FILE_LINE.match(line), line)
            self.pl_file_line_match(self.PL_FILE_LINE.match(line), line)

        elif self.MULTI_LINE.match(line):
            self.multi_line_match(self.MULTI_LINE.match(line), line)
        
        elif self.COMMENT_LINE.match(line):
            self.dic['__comment'] += '\n' + self.COMMENT_LINE.match(line).group('comment')

        elif self.URL_LINE.match(line):
            self.url_line_match(self.URL_LINE.match(line), line)
                
        elif not self.EMPTY_LINE.match(line):
            raise SyntaxErrorPL(self.path_parsed_file, line, self.lineno)


    def multi_pl_line_match(self, match, line):
        """
        Start a multi-line Exercise block.
        With exercices n the block
        names key0, key1, ..., keyn are created.
        """
        key = match.group('key')
        self._aamultiline = True
        self._aamultiline_key = key
        self._aamultiline_id = 0


    def while_aamultiline(self, line):
        """
        While in a multi-line Exercise block,
        append the line to the Exercise block.
        """
        if self.END_MULTI_LINE.match(line) or self.AAEND.match(line):
            self._aamultiline = False
            self._aamultiline_key = None
        elif self.AAMULT.match(line):
            match= self.AAMULT.match(line)
            try:
                directory, path = get_location(self.directory, match.group('file'),
                                           current=dirname(self.path), parser=self)
            except SyntaxError as e:
                raise SyntaxErrorPL(self.path_parsed_file, line, self.lineno, str(e))
            except FileNotFoundError as e:
                raise FileNotFound(self.path_parsed_file, line, match.group('file'), self.lineno,
                                str(e))

            self.dic['__pa'].append({
            'id': self._aamultiline_key+str(self._aamultiline_id),
            'path':           path,
            'line':           line,
            'lineno':         self.lineno,
            'directory_name': directory
            })
            self._aamultiline_id += 1
        
        elif self.COMMENT_LINE.match(line):
            self.dic['__comment'] += '\n' + self.COMMENT_LINE.match(line).group('comment')

        elif not self.EMPTY_LINE.match(line):
            raise SyntaxErrorPL(self.path_parsed_file, line, self.lineno)
    
    
    def fill_meta(self):
        """Append meta informations to self.dic. Meta informations
        should starts with two underscores"""
        
        self.dic['__format'] = '.pla'
        self.dic['__rel_path'] = self.path_parsed_file
        self.dic['__comment'] = ''
        self.dic['__pl'] = list()
        self.dic['__pa'] = list()
        self.dic['__extends'] = list()
        

def get_parser():
    """ Used to dynamicaly add parser to the loader.
        Should return dictionnary containing :
            - a list of extension using this parser,
            - the class object
            - the type parsed ('pl', 'pltp', pla)."""
    
    return {
        'ext':    ['.pla'],
        'parser': Parser,
        'type':   'pla'
    }
