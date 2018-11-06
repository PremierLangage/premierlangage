from django.conf.urls import url

from stats import views

app_name = 'statistics'

urlpatterns = [
    url(r'^$', views.user),
    url(r'^date$', views.datestats),
    url(r'^tags$', views.tags),
    url(r'^grid$', views.grid),

]

