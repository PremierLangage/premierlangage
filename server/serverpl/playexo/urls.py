 # coding: utf-8
 
from django.conf.urls import include
from django.urls import path
from playexo import views

app_name = 'playexo'

urlpatterns = [
    path(r'activity/<int:activity_id>/', views.activity, name="activity"),
    path(r'evaluate/<int:activity_id>/<int:pl_id>', views.evaluate, name="evaluate"),
]
