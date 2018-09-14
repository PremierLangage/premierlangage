#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Python [3.6]
#
#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-07-30
#  Last Modified: 2017-09-30

from os.path import isdir, join

from django.shortcuts import render
from django.http import Http404

from serverpl.settings import BASE_DIR


def documentation(request, target=None):
    if not isdir(join(BASE_DIR, 'documentation/templates/documentation/doc/')): # pragma: no cover
        raise Http404("Impossible de charger la documentation, merci de contacter l'administrateur.")

    template = ('documentation/doc/index.html'
                if not target
                else 'documentation/doc/' + target +'index.html')

    link_github = ('https://github.com/plgitlogin/premierlangage/edit/master/' +
                  'server/serverpl/documentation/mkdocs/docs/index.md'
                  if not target
                  else 'https://github.com/plgitlogin/premierlangage/edit/master/' +
                  'server/serverpl/documentation/mkdocs/docs/' + target[:-1] +'.md')
    return render(request, template, {'link': link_github})

