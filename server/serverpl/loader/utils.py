#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  utils.py
#  
#  Copyright 2018 Coumes Quentin
#  

from os.path import join, dirname, normpath, isfile

from django.conf import settings

from filebrowser.models import Directory


def get_location(directory, path, current=""):
    """Return a tuple (directory, path)
       
       params:
           - directory: [Directory] Directory containing the currently parsed file
           - path:      [str]       Path to the file needed
        
       return:
           (directory, path)
        
       raise:
           - django.core.exceptions.ObjectDoesNotExist if no Directory with name=other_directory_name could be found
           - ValueError if a directory is given but the path after ':' isn't absolute
    """
    if ':' in path:
        directory, path = path.split(':')
        directory = Directory.objects.get(name = directory)
        if path[0] != '/':
            raise ValueError
        print("LIB",path)
        return directory, normpath(path[1:])
    
    if path[0] == '/':
        return directory, normpath(path[1:])
    
    return directory, normpath(join(dirname(current), path))


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
