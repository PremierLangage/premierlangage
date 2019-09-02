from django.contrib.auth import views as auth_views
from django.urls import path

from classmanagement import views


app_name = 'classmanagement'

urlpatterns = [
    path(r'course/<int:course_id>/student/<int:student_id>/summary/', views.student_summary),
    path(r'course/<int:pk>/<int:activity_pk>/summary/', views.activity_summary),
    path(r'course/<int:pk>/summary/', views.course_summary),
    path(r'redirect/<int:activity_id>/', views.redirect_activity),
    
    path('login/', auth_views.LoginView.as_view(template_name='playexo/not_authenticated.html',
                                                redirect_authenticated_user=True), name="login"),
]
