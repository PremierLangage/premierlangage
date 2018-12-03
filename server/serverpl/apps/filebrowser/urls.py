#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  urls.py
#


from django.urls import path
from filebrowser import views
app_name = 'filebrowser'

urlpatterns = [
    path(r'', views.index, name='index'),
    path(r'option', views.option, name='option'),
    path(r'download/env/<str:envid>/', views.download_env, name='dlenv'),
]

'''path(r'preview_pl/', views.preview_pl, name='preview_pl'),
path(r'api/directories', views.directories, name='directories'),
path(r'api/document/', views.save_document, name='save_document'),
path(r'api/document/<path:path>', views.get_document, name='get_document'),
path(r'api/load_pltp/<path:path>', views.load_pltp, name='load_pltp'),
path(r'api/test_pl/<path:path>', views.test_pl, name='test_pl'),
path(r'download/env/<str:envid>/', views.download_env, name='dlenv'),
'''