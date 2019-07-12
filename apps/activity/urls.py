#!/usr/bin/env python3#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  urls.py
#


# -*- coding: utf-8 -*-
#
#  urls.py
#

from django.urls import path

from activity import views


app_name = 'activity'

urlpatterns = [
    path(r'play/<int:activity_id>/', views.play, name="play"),
    path(r'next/<int:activity_id>/', views.next, name="next"),
    path(r'evaluate/<int:activity_id>/<int:pl_id>', views.evaluate, name="evaluate"),
    path(r'dashboard/<int:activity_id>/', views.dashboard, name="dashboard"),
]
