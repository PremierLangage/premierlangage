from django.contrib.auth.models import User

user = User.objects.create_user(username='admin',
                                 email='',
                                 password='adminadmin')

user.is_staff = True
user.is_admin = True
user.is_superuser = True
user.save()