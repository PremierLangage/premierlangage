#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  urls.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

 
from django.conf.urls import url

from user_profile import views

app_name = 'publisher'

urlpatterns = [
    url(r'^$', views.edit_profile),
    url(r'^editor_preview/$', views.editor_preview),
]

