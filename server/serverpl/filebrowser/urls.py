#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  urls.py
#  
#  Copyright 2018 Coumes Quentin
#  
#  This program is free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 2 of the License, or
#  (at your option) any later version.
#  
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#  
#  You should have received a copy of the GNU General Public License
#  along with this program; if not, write to the Free Software
#  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
#  MA 02110-1301, USA.
#  
#


from django.conf.urls import url
from filebrowser import views

app_name = 'filebrowser'

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^new_directory/$', views.new_directory, name='new_directory'),
    url(r'^apply_option/post$', views.apply_option_post, name='apply_option_post'),
    url(r'^apply_option/$', views.apply_option_get, name='apply_option_get'),
    url(r'^edit_file/$', views.edit_receiver, name='edit_receiver'),
    url(r'^edit_rights/$', views.right_edit, name='right_edit'),
    url(r'^preview_pl/$', views.preview_pl, name='preview_pl'),
]
