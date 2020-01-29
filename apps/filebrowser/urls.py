#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  urls.py
#

from django.urls import path

from filebrowser import views


app_name = 'filebrowser'

urlpatterns = [
    path(r'option', views.option, name='option'),
    path(r'upload_resource', views.upload_resource, name='upload_resource'),
    path(r'download/env/<str:envid>/', views.download_env, name='dlenv'),
    path(r'demo/<int:pl_id>/', views.demo, name='demo'),
]
