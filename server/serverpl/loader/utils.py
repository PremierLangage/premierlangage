#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  utils.py
#  
#  Copyright 2018 Coumes Quentin
#  

from os.path import join, dirname, normpath
from filebrowser.models import Directory
from serverpl.settings import REPO_ROOT

def get_location(directory, path, current=""):
    """Return a tuple (directory, path)
       
       params:
           - directory: [Directory] Directory containing the currently parsed file
           - path:      [str]       Path to the file needed
        
       return:
           - (directory, path) if by spliting path at ':' if present
           - (directory, path) the argument if ':' is not inside path
        
       raise:
           - django.core.exceptions.ObjectDoesNotExist if no Directory with name=other_directory_name could be found
           - ValueError if a directory is given but the path after ':' isn't absolute
    """
    
    if ':' in path:
        directory, path = path.split(':')
        directory = Directory.objects.get(name = directory)
        if path[0] != '/':
            raise ValueError
    
    if path[0] == '/':
        return directory, normpath(path[1:])
    
    if current and current[0] == '/':
        current = current[1:]
    
    return directory, normpath(join(dirname(current), path))
    
    
    
    


def extends_dict(target, source):
    """ Will copy every key and value of source in target if key is not present in target """
    
    for key, value in source.items():
        if key not in target or not target[key]:
            target[key] = value
    
    return target



def exception_to_html(string):
    return string.replace('<', '[')\
                 .replace('>', ']')\
                 .replace('\n', '<br>')\
                 .replace(REPO_ROOT, '')\
