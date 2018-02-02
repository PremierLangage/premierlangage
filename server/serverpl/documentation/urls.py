#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.conf.urls import url

from documentation import views

urlpatterns = [
    url(r'^(\w*/?)$', views.documentation),
]
