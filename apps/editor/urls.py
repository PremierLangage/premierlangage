#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  urls.py
#


from django.urls import path

from editor import views

app_name = 'editor'


urlpatterns = [
    path(r'', views.index, name='index'),
]
