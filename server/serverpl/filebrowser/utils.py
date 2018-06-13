#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  utils.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  


from os.path import basename

from django.shortcuts import redirect, reverse

from filebrowser import views

from serverpl.settings import FILEBROWSER_ROOT



def redirect_fb(path='.'):
    response = redirect(reverse(views.index))
    response['Location'] += '?cd='+path.replace(FILEBROWSER_ROOT+'/', '')
    return response


def mk_missing_dirs(root, current, path):
    dirs = [d for d in join(current, basename(path)).split('/') if d]
    pos = 0
    for d in dirs:
        if d == '..':
            pos -= 1
        elif d != '.':
            pos += 1
        
        if pos < 0:
            raise ValueError('Given path move outside of its repository')
            
    os.makedirs(join(join(root, current), basename(path)))
