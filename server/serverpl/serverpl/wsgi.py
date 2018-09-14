"""
WSGI config for serverpl project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/
"""

import os, sys

from django.core.wsgi import get_wsgi_application


path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

if not path in sys.path:
    sys.path.append(path)


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "settings")

application = get_wsgi_application()


