"""
WSGI config for serverpl project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.10/howto/deployment/wsgi/
"""

import os, sys

from django.core.wsgi import get_wsgi_application
#from whitenoise.django import DjangoWhiteNoise

path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

if not path in sys.path:
    sys.path.append(path)

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "settings")
#statcdir=os.path.join(os.path.dirname(os.path.abspath(__file__)),'static/')
#print("currentstatic",statcdir)

application = get_wsgi_application()
#application = DjangoWhiteNoise(application)
#application.add_files(root=statcdir)

