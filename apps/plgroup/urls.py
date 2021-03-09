from django.urls import path

from . import views

app_name = 'plgroup'

urlpatterns = [
    path('', views.index, name='index'),
]