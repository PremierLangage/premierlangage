#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  utils.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import os

from os.path import dirname, join, isdir, abspath

from django.utils.encoding import iri_to_uri
from django.shortcuts import redirect, reverse
from django.conf import settings

from filebrowser.models import Directory


def redirect_fb(path='.'):
    response = redirect(reverse('filebrowser:index'))
    response['Location'] += '?cd='+iri_to_uri(path.replace(settings.FILEBROWSER_ROOT+'/', ''))
    return response


def mk_missing_dirs(root, current, path):
    if path[0] == '/':
        path = path[1:]
    dirs = [d for d in join(current, dirname(path)).split('/') if d]
    pos = 0
    for d in dirs:
        if d == '..':
            pos -= 1
        elif d != '.':
            pos += 1
        if pos < 0:
            raise ValueError('Given path move outside of its repository')
    os.makedirs(join(join(root, current), dirname(path)))


def stay_in_directory(current, path):
    if path[0] == '/':
        path = path[1:]
    dirs = [d for d in join(current, path).split('/') if d]
    pos = 0
    for d in dirs:
        if d == '..':
            pos -= 1
        elif d != '.':
            pos += 1
        if pos < 0:
            return False
    return True


def in_repository(path, end):
    """Check if entry pointed by path is inside a repository by recursively moving up
    the path until <end>"""
    path, end = abspath(path), abspath(end)
    if end not in path:
        raise ValueError("'Path' is not a sub-path of 'end'")
    if not isdir(path):
        path = dirname(path)
        
    if '.git' in os.listdir(path):
        return path if not path.endswith('/') else path[:-1]
    while path != end and end in path and dirname(path):
        path = dirname(path)
        if '.git' in os.listdir(path):
            return path if not path.endswith('/') else path[:-1]
    
    return None
    
    
        
