#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Python [3.6]
#
#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-07-30
#  Last Modified: 2017-09-30

from os.path import isdir

from django.shortcuts import render
from django.http import Http404

from serverpl.settings import PROJECT_DIR

def documentation(request, target=None):
    if not isdir(PROJECT_DIR+'/../documentation/templates/documentation/doc/'):
        raise Http404("Impossible de charger la documentation, merci de contacter l'administrateur.")
    
    template = 'documentation/doc/index.html' if not target else 'documentation/doc/'+target+'index.html'
    
    return render(request, template, {})
    
