#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  urls.py
#


from django.conf.urls import url
from filebrowser import views

app_name = 'filebrowser'

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^save_edit/$', views.save_edit_receiver, name='save_edit_receiver'),
    url(r'^new_directory/$', views.new_directory, name='new_directory'),
    url(r'^apply_option/post$', views.apply_option_post, name='apply_option_post'),
    url(r'^apply_option/$', views.apply_option_get, name='apply_option_get'),
    url(r'^edit_file/$', views.edit_receiver, name='edit_receiver'),
    url(r'^preview_pl/$', views.preview_pl, name='preview_pl'),
]
