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
    path(r'pl_tuto', views.pl_tuto, name='pl_tuto'),
    path(r'upload_resource', views.upload_resource, name='upload_resource'),
    path(r'download/env/<str:envid>/', views.download_env, name='dlenv'),
]
