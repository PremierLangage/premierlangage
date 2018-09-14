import os, sys
sys.path.append(os.path.realpath(os.path.join(__file__, '../../../')))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "serverpl.settings")

import django
django.setup()

from django.contrib.auth.models import User
from filebrowser.models import Directory


# Create admin
try :
    user = User.objects.create_user(username='admin', password='adminadmin')
    user.is_staff = True
    user.is_admin = True
    user.is_superuser = True
    user.save()
except django.db.utils.IntegrityError:
    print("User 'admin' already created")
    user = User.objects.get(username='admin')


# Add plbank
try:
    Directory.objects.create(name="lib", owner=user, public=True)
except django.db.utils.IntegrityError:
    print("Directory 'lib' already created")
