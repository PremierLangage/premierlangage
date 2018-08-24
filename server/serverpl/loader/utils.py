#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  utils.py
#  
#  Copyright 2018 Coumes Quentin
#  

from os.path import join, dirname, normpath, isfile, basename

import gitcmd
from django.conf import settings

from filebrowser.models import Directory


def get_location(directory, path, current=""):
    """Return a tuple (directory, path)
       
       params:
           - directory: [Directory] Directory containing the currently parsed file
           - path:      [str]       Path to the file needed
           - current:   [str]       Current position relative to directory
        
       return:
           A path to the file relative to directory
        
       raise:
           - SyntaxError if a directory is given but the path after ':' isn't absolute
    """
    if ':' in path: # Contains a reference
        directory_name, path = path.split(':')
        if not path.startswith('/'):
            raise SyntaxError("Syntax Error (path after ':' must be absolute)")
        if directory_name != 'home':
            path = join(directory_name, path[1:])
        else:
            path = path[1:]
        
    elif path.startswith('/'): # Absolute path
        abs_curr = join(directory.root, current)
        if gitcmd.in_repository(abs_curr):
            top = gitcmd.top_level(abs_curr)[1]
            if settings.FILEBROWSER_ROOT in top: # Check if the repo is inside FILEBROWSER_ROOT
                path = join(basename(top), path[1:])
            else:
                path = path[1:]
        else:
            path = path[1:]
            
    else: # Relative path 
        path = join(current, path)
    
    return normpath(path)


def extends_dict(target, source):
    """ Will copy every key and value of source in target if key is not present in target """
    
    for key, value in source.items():
        if key == '__dependencies':
            target[key] += value
        elif key not in target or not target[key]:
            target[key] = value
    
    return target


def displayed_path(path):
    path = path.replace(settings.FILEBROWSER_ROOT, '')
    p = [i for i in path.split('/') if i]
    if p[0].isdigit():
        p[0] = 'home'
    
    return join(*p)
