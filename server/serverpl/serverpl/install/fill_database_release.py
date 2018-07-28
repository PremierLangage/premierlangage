import django, random
from django.contrib.auth.models import User
from filebrowser.models import Directory

try :
    passwd = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(10))
    user = User.objects.create_user(username='PremierLangage', password='OnjrxK7#kg')
    user.save()
except django.db.utils.IntegrityError:
    user = User.objects.get(username='PremierLangage')

# Add plbank
try:
    Directory.objects.create(name="lib", owner=user, public=True)
except django.db.utils.IntegrityError:
    print("Directory 'lib' already created")
