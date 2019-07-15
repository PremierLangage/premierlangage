from django.urls import path

from playexo import views


app_name = 'playexo'

urlpatterns = [
    path(r'activity/<int:activity_id>/', views.activity_view, name="activity"),
    path(r'evaluate/<int:activity_id>/<int:pl_id>', views.evaluate, name="evaluate"),
    path(r'test_pl/<int:pl_id>/', views.test_pl, name="test_pl"),
]
