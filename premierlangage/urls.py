"""premierlangage URL Configuration

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

from activity.views import index

urlpatterns = [
    url(r'^$', index),
    url(r'^activity/', include('apps.activity.urls', namespace="activity")),
    url(r'^playexo/', include('apps.playexo.urls', namespace="playexo")),
    url(r'^editor/', include('apps.editor.urls', namespace="editor")),
    url(r'^components/', include('apps.components.urls', namespace="components")),
    url(r'^filebrowser/', include('apps.filebrowser.urls', namespace='filebrowser')),
    url(r'^profile/', include('apps.user_profile.urls', namespace="profile")),
    url(r'^ask/', include('apps.qa.urls', namespace='ask')),
    url(r'^api/git/', include("apps.git.urls", namespace='git')),
    url(r'^stats/', include('stats.urls')),
    url(r'^admin/', admin.site.urls),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
