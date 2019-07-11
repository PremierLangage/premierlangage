#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  urls.py
#


from django.conf.urls import url
from editor import views

app_name = 'editor'


urlpatterns = [
    url(r'.*', views.index, name='index'),
]
