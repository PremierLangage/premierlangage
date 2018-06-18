from django.conf.urls import url
from publisher import views

app_name = 'publisher'

urlpatterns = [
    #url(r'^$', views.index, name='index'),
    url(r'^publish/$', views.publish_receiver, name='publish_receiver'),
]
