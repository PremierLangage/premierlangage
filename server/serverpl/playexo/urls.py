 # coding: utf-8
 
from django.conf.urls import url

from . import views

app_name = 'playexo'

urlpatterns = [
    url(r'^activity/test/(\w+)/(\w+)/$', views.test_receiver, name="test_receiver"),
    url(r'^activity/(\d+)/$', views.activity_receiver, name="activity_receiver"),
]


