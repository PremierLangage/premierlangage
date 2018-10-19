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
    path(r'directories', views.directories, name='directories'),
    path(r'save_file/', views.save_file, name='save_file'),
    path(r'open_file/<path:path>', views.open_file, name='open_file'),
    path(r'preview_pl/', views.preview_pl, name='preview_pl'),
]
