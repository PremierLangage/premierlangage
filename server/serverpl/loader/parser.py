#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  parser.py
#  
#  Copyright 2018 Coumes Quentin



import os, importlib, traceback, logging

from os.path import basename, splitext, join

from django.core.exceptions import ObjectDoesNotExist

from serverpl.settings import PARSERS_ROOT, PARSERS_MODULE
from loader.utils import get_location, extends_dict
from loader.exceptions import UnknownExtension, UnknownType, DirectoryNotFound, FileNotFound, MissingKey

from filebrowser.models import Directory


logger = logging.getLogger(__name__)



PL_MANDATORY_KEY = ['title', 'form']
PLTP_MANDATORY_KEY = ['title', '__pl', 'introduction']
MUST_BE_STRING = ['text', 'texth', 'introductionh', 'introduction', 'form', 'evaluator', 'before', 'author', 'title']


def get_parsers():
    """ Return a dict containing extension:(type, parser) key:value pair for every parser.
    
        Try importing every .py file in 'parsers' as module directory
        and run module.get_parser() to get the file extensions it parses,
        the parser, and the type of file parsed ('pl' or 'pltp').
        
        Add error to the logger if the importation of a .py failed or
        two parsers parse the same extension."""
    
    parsers = dict()
    for f in os.listdir(PARSERS_ROOT):
        if f.endswith(".py") and "__" not in f:
            try:
                module = importlib.import_module(PARSERS_MODULE+"."+splitext(f)[0])
                parser = module.get_parser()
                if type(parser) != dict or set(parser.keys()) != {'ext', 'type', 'parser'} or parser['type'] not in ['pl', 'pltp']:
                    raise ValueError
                for ext in parser['ext']:
                    if ext not in parsers:
                        parsers[ext] = {'type': parser['type'], 'parser': parser['parser']}
                    else :
                        logger.error("Two parsers trying to parse the same extension ('"+str(parsers[ext])+"' and '"+str(parser['parser'])+"')")
            except NameError:
                logger.error("Function 'get_parser()' not defined in '"+f+"'")
            except ValueError:
                if type(parser) != dict:
                    logger.error("Function 'get_parser()' of file '"+f+"' must return a dictionnary (currently return '"+str(type(parser))+").")
                elif set(parser.keys()) != {'ext', 'type', 'parser'}:
                    logger.error("Function 'get_parser()' of file '"+f+"' must return a dictionnary containing 3 keys: 'type', 'ext' and 'parser' (return dictionnary contains "+str(set(parser.keys()))+").")
                else:
                    logger.error("Function 'get_parser()' of file '"+f+"' must return a dictionnary where dictionnary['type'] is either 'pl' or 'pltp' (currently is '"+parser['type']+"').")
            #except:
                #logger.error("Could not import parser '"+f+"'\n"+traceback.format_exc())
    return parsers



def get_type(directory, path):
    """Return whether the given file is a 'pltp' of a 'pl'."""
    
    parsers = get_parsers()
    ext = splitext(basename(path))[1]
    
    ext = '.pl' if not ext else ext
    
    if ext in parsers:
        if parsers[ext]['type'] in ['pl', 'pltp']:
            return parsers[ext]['type']
        else:
            logger.warning("Unknown type : '"+ parsers[ext]['type'] + "' of parser '" + str(parsers[ext]['parser']) + "'")
            raise UnknownType(parsers[ext]['type'], parsers[ext]['parser'])
    
    raise UnknownExtension(path, join(directory.name, path))



def process_extends(dic):
    """ Extends dic with file in dic['__extends'].
        
        Return newly extended dic.
        
        Raise from loader.exceptions:
            - DirectoryNotFound if trying to load from a nonexistent directory
            - FileNotFound if the file do not exists."""
    
    warnings = []
    for item in dic['__extends']:
        try:
            directory = Directory.objects.get(name=item['directory_name'])
            ext_dic, warnings_ext = parse_file(directory, item['path'], extending=True)
            warnings += warnings_ext
            dic = extends_dict(dic, ext_dic)
        except ObjectDoesNotExist:
            raise DirectoryNotFound(dic['__rel_path'], item['line'], item['path'], item['lineno'])
        except UnknownExtension as e:
            raise UnknownExtension(e.path, e.name, message="extending from " + dic['__rel_path'] + " -- unknow extension  ")
        except FileNotFoundError:
            raise FileNotFound(dic['__rel_path'], item['line'], item['path'], lineno=item['lineno'])
        except ValueError:
            raise FileNotFound(self.path_parsed_file, line, match.group('file'), lineno=self.lineno, message="Path from another directory must be absolute")
    
    return dic, warnings



def parse_file(directory, path, extending=False):
    """Parse the given file with the parser class corresponding to its extension.
       
       Return a tuple (dic, warning) where:
           - dic is a dictionnary containing every key of the parse file.
           - warning is a list (may be empty) containing every warning
        
       Raise UnknownExtension if the extension is unknown.
       Propagate any exception raise by the called parser."""
    
    path = path if path[0] != '/' else path[1:]
    
    parsers = get_parsers()
    ext = splitext(basename(path))[1]
    
    if not ext:
        ext = '.pl'
        path += '.pl'
    
    if ext in parsers:
        dic, warnings = parsers[ext]['parser'](directory, path).parse()
        dic, ext_warnings = process_extends(dic)
        warnings += ext_warnings
        
        if not extending:
            #~ for key in dic:
                #~ print(key+": "+ str(dic[key]))
            if parsers[ext]['type'] == 'pltp':
                for key in PLTP_MANDATORY_KEY:
                    if key not in dic:
                        raise MissingKey(join(directory.root, path), key)
            else:
                for key in PL_MANDATORY_KEY:
                    if key not in dic:
                        raise MissingKey(join(directory.root, path), key)
        
        for key in MUST_BE_STRING:
            if key in dic and type(dic[key]) != str:
                raise TypeError("Key : '"+key+"' is '"+str(type(dic[key]))+"' but must be a string.")
        
        return dic, warnings
    
    raise UnknownExtension(path, join(directory.name, path))
