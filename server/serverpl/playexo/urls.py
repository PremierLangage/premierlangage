 # coding: utf-8
 
from django.conf.urls import url

from . import views

app_name = 'playexo'

urlpatterns = [
    url(r'^activity/(\d+)/$', views.activity, name="activity"),
]


