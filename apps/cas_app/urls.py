# -*- coding: utf-8 -*-
#
#  urls.py
#

from django.urls import path
from cas_app import views 
from django_cas_ng import views as cas_views

app_name = 'cas_app'

urlpatterns = [
    path('login', views.login, name='cas_ng_login'),
    path('logout', views.logout, name='cas_ng_logout'),
    path('callback', cas_views.CallbackView.as_view(), name='cas_ng_proxy_callback'),
]
