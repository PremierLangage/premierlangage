#!/usr/bin/env python3#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  urls.py
#


# -*- coding: utf-8 -*-
#
#  urls.py
#

from django.contrib.auth import views as auth_views
from django.urls import path

from activity import views


app_name = 'activity'

urlpatterns = [
    path(r'add/<int:activity_id>/', views.add_activity, name="add"),
    path(r'reload/<int:activity_id>/', views.reload, name="reload"),
    path(r'remove/<int:activity_id>/', views.remove, name="remove"),
    path(r'play/<int:activity_id>/', views.play, name="play"),
    path(r'moveprev/<int:activity_id>/', views.moveprev, name="moveprev"),
    path(r'movenext/<int:activity_id>/', views.movenext, name="movenext"),
    path(r'next/<int:activity_id>/', views.next, name="next"),
    path(r'evaluate/<int:activity_id>/<int:pl_id>', views.evaluate, name="evaluate"),
    path(r'dashboard/<int:activity_id>/', views.dashboard, name="dashboard"),
    path(r'notes/<int:activity_id>/', views.notes, name="notes"),
    path('login/', auth_views.LoginView.as_view(template_name='playexo/not_authenticated.html',
                                                redirect_authenticated_user=True), name="login"),
    path(r'logout/', views.disconnect, name="logout"),
]
()
