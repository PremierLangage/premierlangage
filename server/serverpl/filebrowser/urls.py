#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  urls.py
#


from django.urls import path
from filebrowser import views
from filebrowser import api
app_name = 'filebrowser'

urlpatterns = [
    path(r'', views.index, name='index'),
    path(r'preview_pl/', views.preview_pl, name='preview_pl'),
    path(r'api/directories', api.directories, name='directories'),
    path(r'api/document/', api.save_document, name='save_document'),
    path(r'api/document/<path:path>', api.get_document, name='get_document'),
]
