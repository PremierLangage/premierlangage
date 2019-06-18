from django.urls import path

from playexo import views


app_name = 'playexo'

urlpatterns = [
    path(r'playjson', views.play_json, name="play_json"),
]
