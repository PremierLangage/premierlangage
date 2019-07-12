from django.conf.urls import url, include
from notifs.api import NotificationsResource
from . import views


notifs_resource = NotificationsResource()
app_name = "notifs"
urlpatterns = [
    url(r'^$', views.index, name='index')
]
