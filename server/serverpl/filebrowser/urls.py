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
    path(r'save_edit/', views.save_edit_receiver, name='save_edit_receiver'),
    path(r'edit_file/', views.edit_receiver, name='edit_receiver'),
    path(r'preview_pl/', views.preview_pl, name='preview_pl'),
    path(r'<path:path>/opt/', views.apply_option, name='apply_option'),
    path(r'<path:path>/', views.index, name='index'),
]
