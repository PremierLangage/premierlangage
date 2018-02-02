# coding: utf-8

# DJANGO IMPORTS
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^browse/$', views.browse),
    url(r'^view_file/$', views.view_file),
    url(r'^loaded_pltp/$', views.loaded_pltp),
    url(r'^loaded_pl/$', views.loaded_pl),
    url(r'^activity/$', views.activity),
    url(r'^edit_file/$', views.edit_file),
]
