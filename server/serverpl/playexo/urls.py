 # coding: utf-8
 
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^not_authenticated/.*$', views.not_authenticated),
    url(r'^activity/lti/(\w+)/(\w+)/$', views.lti_receiver),
    url(r'^activity/test/(\w+)/(\w+)/$', views.test_receiver),
    url(r'^activity/$', views.activity_receiver),
]


