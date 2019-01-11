
from django.urls import path

from . import views

app_name = 'statistics'

urlpatterns = [
    path('', views.user),
    path('date', views.datestats),
    path('tags', views.tags),
    path('grid', views.grid),
    path('plstats/<int:plid>/', views.plstats),

]

