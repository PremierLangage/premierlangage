#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  urls.py
#


from django.urls import path

from git import views


app_name = 'git'


urlpatterns = [
    path(r'add', views.add, name='add'),
    path(r'blame', views.blame, name='blame'),
    path(r'changes', views.changes, name='changes'),
    path(r'checkout', views.checkout, name='checkout'),
    path(r'clone', views.clone, name='clone'),
    path(r'commit', views.commit, name='commit'),
    path(r'pull', views.pull, name='pull'),
    path(r'push', views.push, name='push'),
    path(r'show', views.show, name='show'),
    path(r'status', views.status, name='status'),
]
