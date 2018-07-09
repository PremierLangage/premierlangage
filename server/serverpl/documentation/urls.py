#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.conf.urls import url

from documentation import views

app_name = 'publisher'

urlpatterns = [
    url(r'^(\w*/?)$', views.documentation),
]
