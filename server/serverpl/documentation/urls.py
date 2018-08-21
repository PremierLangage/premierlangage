#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.conf.urls import url

from documentation import views

app_name = 'documentation'

urlpatterns = [
    url(r'^(\w*/?)$', views.documentation, name='documentation'),
]
