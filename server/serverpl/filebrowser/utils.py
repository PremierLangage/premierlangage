#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  utils.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  


from django.shortcuts import redirect, reverse

from filebrowser import views

from serverpl.settings import FILEBROWSER_ROOT



def redirect_fb(path='.'):
    response = redirect(reverse(views.index))
    response['Location'] += '?cd='+path.replace(FILEBROWSER_ROOT+'/', '')
    return response
