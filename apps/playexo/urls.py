from django.urls import path

from playexo import views


app_name = 'playexo'

urlpatterns = [
    path(r'test_pl/<int:pl_id>/', views.test_pl, name="test_pl"),
    path(r'download_answers/', views.download_answers, name="download_answers"),
]
