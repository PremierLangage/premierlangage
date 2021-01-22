from django.urls import path

from progress import views

app_name = 'progress'

urlpatterns = [
    path(r'student_list/', views.student_list, name="student_list"),
    path(r'progress/<int:user_id>/', views.progress_user, name="progress"),
    path(r'index/', views.index, name='index'),
    path('', views.index, name='index'),
]
