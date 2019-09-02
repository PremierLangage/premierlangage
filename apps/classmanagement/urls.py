from django.contrib.auth import views as auth_views
from django.urls import path

from classmanagement import views


app_name = 'classmanagement'

urlpatterns = [
    path(r'course/<int:pk>/', views.course, name="course"),
    path(r'course/<int:course_id>/student/<int:student_id>/summary/', views.student_summary),
    path(r'course/<int:pk>/<int:activity_pk>/summary/', views.activity_summary),
    path(r'course/<int:pk>/summary/', views.course_summary),
    path(r'course/<int:course_id>/<int:activity_id>/notes/', views.notes),
    path(r'redirect/<int:activity_id>/', views.redirect_activity),
    path(r'logout/', views.disconnect, name="logout"),
    path('login/', auth_views.LoginView.as_view(template_name='playexo/not_authenticated.html',
                                                redirect_authenticated_user=True), name="login"),
]
