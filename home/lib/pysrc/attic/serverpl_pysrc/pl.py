#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  pl.py
#  
#  Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
#  


class ErrorPL(Exception):
    """
    Class d'exception du projet pour la séparée des exception standard
    """	
    pass

import collections

class PlSyntaxError(Exception):
    """ Raised if an error occured during parsing a PL """

    def __init__(self, line, number_line, message="Syntax error"):
        self.line = line
        self.message = message
        self.number_line = number_line
        
    def __str__(self):
        return self.message+' (l.'+self.number_line+"): '"+self.line+"'"

class PlMultilineError(Exception):
    """ Raised if a multiline value is never closed """
    
    def __init__(self, key, number_line, message="Value on multiple line is never closed (Can't find '==')"):
        self.message = message
        self.key = key
        self.number_line = number_line
        
    def __str__(self):
        return 'Key: '+self.key+' - '+self.message+" - line "+self.number_line
        
class InvalidExtensionError(Exception):
    """ Raised when trying to parse a file with an unknown extension """
    
    def __init__(self, filename):
        self.filename = filename
            
    def __str__(self):
        return "The file '"+filename+"' has an invalide extension, should be .pl, .pls or .pltp"

def dicfusion(dst,src):
    """
    >>> dst={'A':'A','a':'a','b':{'f1':'ff1','f2':'pas bo'},'c':'c',}
    >>> src={'a':'not a','b':{'f2':'ff2','f3':'ff3'},'d':'d',}
    >>> dicfusion(dst,src)
    {'d': 'd', 'a': 'not a', 'b': {'f1': 'ff1', 'f3': 'ff3', 'f2': 'ff2'}, 'A': 'A', 'c': 'c'}
    """
    dres=dict()

    for k,v in src.items():
        if not k in dst or type(v)==str :
            dst[k]=v
        elif type(v) != type(dst[k]):
            raise ErrorPL("Erreur de fusion")
        elif type(v) == list:
            dst[k].extend(v)
        else:
            dst[k].update(v)
    return dst


if __name__ == '__main__':
    raise ErrorPL("Not CLI")

