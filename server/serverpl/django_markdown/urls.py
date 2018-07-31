""" Define preview URL. """

from django.urls import path

from .views import preview

app_name = 'markdown'

urlpatterns = [
    path('preview/', preview, name='django_markdown_preview')
]
