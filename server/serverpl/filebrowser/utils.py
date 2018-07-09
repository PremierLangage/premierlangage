#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  utils.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import os, zipfile, datetime

from os.path import dirname, join, isdir, abspath

from django.utils.encoding import iri_to_uri
from django.shortcuts import redirect, reverse
from django.conf import settings

from filebrowser.models import Directory


def redirect_fb(path=''):
    response = redirect('/filebrowser/' + path)
    return response
