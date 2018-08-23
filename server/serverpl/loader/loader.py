#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  loader.py
#  
#  Copyright 2018 Coumes Quentin


import logging, hashlib, htmlprint
from os.path import splitext, basename, join, abspath, dirname

from django.core.exceptions import ObjectDoesNotExist
from django.conf import settings

from loader.parser import parse_file, get_type
from loader.models import PL, PLTP
from filebrowser.models import Directory

logger = logging.getLogger(__name__)



def load_file(directory, rel_path, force=False):
    """ Load the file using the right function according to the type map to its extension.
        
        Process every exception raised by the corresponding loading function or the parser.
        
        Return:
            - (PLTP/PL, []) if the PLTP/PL was loaded successfully
            - (PLTP/PL, warning_list) if the PLTP/PL was loaded with warnings
            - (None, error_msg) if PLTP/PL couldn't be loaded
            - (None, None) if PLTP/PL is already loaded
    """
    
    try:
        typ = get_type(directory, rel_path)
        if typ == 'pltp':
            return load_PLTP(directory, rel_path, force)
        elif typ == 'pl':
            return load_PL(directory, rel_path)
        else:
            raise Exception("Type '" + typ + "' is not yet implemented")
    except Exception as e: # pragma: no cover 
        if not settings.DEBUG:
            return (None, htmlprint.code(str(e))) 
        return (None, (htmlprint.code(str(e))
                       + '<br>DEBUG set to True - Showing Traceback :<br>'
                       + htmlprint.html_exc()))



def load_PLTP(directory, rel_path, force=False):
    """ Load the given file as a PLTP. Save it and its PL in the database.
        
        Return:
            - (PLTP, []) if the PLTP was loaded successfully
            - (PLTP, warning_list) if the PLTP was loaded with warnings
            - (None, None) if PLTP is already loaded
    """
    
    name = splitext(basename(rel_path))[0]
    
    sha1 = hashlib.sha1()
    sha1.update((directory.name+':'+rel_path).encode('utf-8'))
    sha1 = sha1.hexdigest()
    
    try:
        existing = PLTP.objects.get(sha1=sha1)
        if not force:
            return None, None
        existing.delete() # Delete the current PLTP entry if force is False
    except: # If the PLTP does not exist, keep going
        pass
    

    path = dirname(abspath(join(directory.root, rel_path[1:])))+"/dir"+splitext(basename(rel_path))[0]
    dic, warnings = parse_file(directory, rel_path, path)
    
    pl_list = list()
    for item in dic['__pl']:
        try:
            pl_directory = Directory.objects.get(name=item['directory_name'])
        except ObjectDoesNotExist:
            raise DirectoryNotFound(dic['__rel_path'], item['line'], item['path'], item['lineno'])
        pl, pl_warnings = load_PL(pl_directory, item['path'])
        warnings += pl_warnings
        pl_list.append(pl)
    
    for pl in pl_list:
        pl.save()
        logger.info("PL '"+str(pl.id)+" ("+pl.name+")' has been added to the database")
    
    pltp = PLTP(name=name, sha1=sha1, json=dic, directory=directory, rel_path=rel_path)
    pltp.save()
    logger.info("PLTP '"+sha1+" ("+name+")' has been added to the database")
    
    for pl in pl_list:
        pltp.pl.add(pl)
    
    return pltp, [htmlprint.code(warning) for warning in warnings]



def load_PL(directory, rel_path):
    """ Load the given path as a PL.
    
        Return:
            - (PL, []) if the PL was loaded successfully
            - (PL, warning_list) if the PL was loaded with warnings
        
        This function return a PL object but does not save it in the database
    """
    dic, warnings = parse_file(directory, rel_path)
    
    name = splitext(basename(rel_path))[0]
    pl = PL(name=name, json=dic, directory=directory, rel_path=rel_path)
    return pl, [htmlprint.code(warning) for warning in warnings]
