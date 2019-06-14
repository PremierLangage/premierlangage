"""
WSGI config for serverpl project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/
"""

import os
import sys

from django.conf import settings
from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "settings")

if settings.SETTINGS_DIR not in sys.path:
    sys.path.append(settings.SETTINGS_DIR)
if settings.APPS_DIR not in sys.path:
    sys.path.append(settings.APPS_DIR)


application = get_wsgi_application()
