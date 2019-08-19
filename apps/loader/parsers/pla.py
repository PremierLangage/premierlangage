from loader.parsers.pl import Parser as ParserPL



class Parser(ParserPL):
    pass



def get_parser():
    """ Used to dynamicaly add parser to the loader.
        Should return dictionnary containing :
            - a list of extension using this parser,
            - the class object
            - the type parsed ('pl' or 'pltp')."""
    
    return {
        'ext':    ['.pla'],
        'parser': Parser,
        'type':   'pla'
    }
