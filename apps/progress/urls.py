from django.contrib.auth import views as auth_views
from django.urls import path

from progress import views

app_name = 'progress'

urlpatterns = [
    path(r'index/', views.index, name='index'),
    path('', views.index, name='index'),
]
