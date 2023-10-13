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
from django_cas_ng import views as cas_views



app_name = 'cas_app'

urlpatterns = [
    path('login', cas_views.LoginView.as_view(), name='cas_ng_login'),
    path('logout', cas_views.LogoutView.as_view(), name='cas_ng_logout'),
    path('callback', cas_views.CallbackView.as_view(), name='cas_ng_proxy_callback'),
]
