import random
import string

import django
from django.contrib.auth.models import User

from activity.models import Activity
from filebrowser.models import Directory


globals().update(locals())

# Create anonymous and premierlangage
try:
    passwd = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(10))
    user = User.objects.create_user(username='PremierLangage', password=passwd)
    user.save()
    passwd = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(10))
    user = User.objects.create_user(username='Anonymous', password=passwd)
    user.save()
except django.db.utils.IntegrityError:
    user = User.objects.get(username='PremierLangage')

# Add lib
try:
    Directory.objects.create(name="lib", owner=user, read_only=True)
except django.db.utils.IntegrityError:
    print("Directory 'lib' already created")

try:
    Directory.objects.create(name="Yggdrasil", owner=user, public=True)
except django.db.utils.IntegrityError:
    print("Directory 'Yggdrasil' already created")

# Create Base activity
try:
    Activity.objects.create(id=0, name="Base", activity_type="base", activity_data={})
except django.db.utils.IntegrityError:
    print("Base activity already created")
