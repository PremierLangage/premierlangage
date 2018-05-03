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

from django.conf.urls import include, url
from django.contrib import admin
from classmanagement.views import index

urlpatterns = [
    url(r'^$', index ),
    url(r'^courses/', include('classmanagement.urls')),
    url(r'^playexo/', include('playexo.urls')),
    url(r'^sandbox/',include('sandbox.urls')),
    url(r'^documentation/',include('documentation.urls')),
    url(r'^filebrowser/',include('filebrowser.urls')),
    url(r'^profile/',include('user_profile.urls')),
    url(r'^admin/', admin.site.urls),
]
