#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  urls.py
#


from django.conf.urls import url
from components import views

app_name = 'components'


urlpatterns = [
    url(r'.*', views.index, name='index'),
]
