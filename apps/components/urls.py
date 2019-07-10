#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  urls.py
#


from django.urls import path

from components import views

app_name = 'components'


urlpatterns = [
    path(r'', views.index, name='index'),
]
