from django.conf.urls import url
from publisher import views

app_name = 'publisher'

urlpatterns = [
    url(r'^publish/$', views.publish_receiver, name="publish_receiver"),
]
