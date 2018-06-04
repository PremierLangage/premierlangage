from django.contrib.auth.models import User
from filebrowser.models import Directory


# Create admin
user = User.objects.create_user(username='admin', password='adminadmin')
user.is_staff = True
user.is_admin = True
user.is_superuser = True
user.save()

# Add plbank
Directory.objects.create(name="plbank", owner=user.id, public=True)
