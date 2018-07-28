 # coding: utf-8
 
from django.conf.urls import url

from . import views

app_name = 'playexo'

urlpatterns = [
    url(r'^not_authenticated/.*$', views.not_authenticated, name="not_authenticated"),
    url(r'^activity/lti/(\w+)/(\w+)/$', views.lti_receiver, name="lti_receiver"),
    url(r'^activity/test/(\w+)/(\w+)/$', views.test_receiver, name="test_receiver"),
    url(r'^activity/$', views.activity_receiver, name="activity_receiver"),
]


