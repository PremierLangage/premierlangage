"""serverpl URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""

from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin

from classmanagement.views import index

urlpatterns = [
    url(r'^$', index),
    url(r'^courses/',       include('classmanagement.urls', namespace='classmanagement')),
    url(r'^playexo/',       include('playexo.urls',         namespace="playexo")),
    url(r'^documentation/', include('documentation.urls',   namespace="documentation")),
    url(r'^filebrowser/',   include('filebrowser.urls',     namespace='filebrowser')),
    url(r'^profile/',       include('user_profile.urls',    namespace="profile")),
    url(r'^ask/',           include('qa.urls',              namespace='ask')),
    url(r'^stats/', include('stats.urls', namespace='stats')),
    url(r'^admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
