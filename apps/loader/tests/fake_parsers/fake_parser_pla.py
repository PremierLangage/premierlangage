from loader.parsers.pltp import Parser as ParserPLTP



class Parser(ParserPLTP):
    pass



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
