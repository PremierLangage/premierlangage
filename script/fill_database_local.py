import random
import string

import django
from django.contrib.auth.models import User

from activity.models import Activity
from filebrowser.models import Directory


globals().update(locals())

# Create admin
try:
    user = User.objects.create_user(username='admin', password='adminadmin')
    user.is_staff = True
    user.is_admin = True
    user.is_superuser = True
    user.save()
    print("Create 'admin' user")
except django.db.utils.IntegrityError:
    print("User 'admin' already created")
    user = User.objects.get(username='admin')


# Create some users
try:
    user = User.objects.create_user(username='test_user_1', password='password')
    user.is_staff = True
    user.is_admin = True
    user.is_superuser = True
    user.save()
    print("Create test_user_1")
except django.db.utils.IntegrityError:
    print("User 'test_user_1' already created")
    user = User.objects.get(username='test_user_1')

# Create admin
try:
    user = User.objects.create_user(username='test_user_2', password='password')
    user.is_staff = True
    user.is_admin = True
    user.is_superuser = False
    user.save()
    print("Create test_user_2")
except django.db.utils.IntegrityError:
    print("User 'test_user_2' already created")
    user = User.objects.get(username='test_user_2')

# Create admin
try:
    user = User.objects.create_user(username='test_user_3', password='password')
    user.is_staff = False
    user.is_admin = False
    user.is_superuser = False
    user.save()
    print("Create test_user_3")
except django.db.utils.IntegrityError:
    print("User 'test_user_3' already created")
    user = User.objects.get(username='test_user_3')


try:
    user = User.objects.create_user(username='test_user_4', password='password')
    user.is_staff = False
    user.is_admin = False
    user.is_superuser = False
    user.save()
    print("Create test_user_4")
except django.db.utils.IntegrityError:
    print("User 'test_user_4' already created")
    user = User.objects.get(username='test_user_4')

# Create admin
try:
    user = User.objects.create_user(username='test_user_5', password='password')
    user.is_staff = False
    user.is_admin = False
    user.is_superuser = False
    user.save()
    print("Create test_user_5")
except django.db.utils.IntegrityError:
    print("User 'test_user_5' already created")
    user = User.objects.get(username='test_user_5')

# Create admin
try:
    user = User.objects.create_user(username='test_user_6', password='password')
    user.is_staff = False
    user.is_admin = False
    user.is_superuser = False
    user.save()
    print("Create test_user_6")
except django.db.utils.IntegrityError:
    print("User 'test_user_6' already created")
    user = User.objects.get(username='test_user_6')

try:
    user = User.objects.create_user(username='test_user_7', password='password')
    user.is_staff = False
    user.is_admin = False
    user.is_superuser = False
    user.save()
    print("Create test_user_7")
except django.db.utils.IntegrityError:
    print("User 'test_user_7' already created")
    user = User.objects.get(username='test_user_7')

# Create admin
try:
    user = User.objects.create_user(username='test_user_8', password='password')
    user.is_staff = False
    user.is_admin = False
    user.is_superuser = False
    user.save()
    print("Create test_user_8")
except django.db.utils.IntegrityError:
    print("User 'test_user_8' already created")
    user = User.objects.get(username='test_user_8')

# Create admin
try:
    user = User.objects.create_user(username='test_user_9', password='password')
    user.is_staff = False
    user.is_admin = False
    user.is_superuser = False
    user.save()
    print("Create test_user_9")
except django.db.utils.IntegrityError:
    print("User 'test_user_9' already created")
    user = User.objects.get(username='test_user_9')


# Create anonymous
try:
    passwd = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(10))
    user = User.objects.create_user(username='Anonymous', password=passwd)
    user.save()
    print("Create 'Anonymous' user")
except django.db.utils.IntegrityError:
    # user = User.objects.get(username='PremierLangage')
    user = User.objects.get(username='Anonymous')

# Add lib and Yggdrasil
try:
    Directory.objects.create(name="lib", owner=user, read_only=True)
    print("Create 'lib' directory")
except django.db.utils.IntegrityError:
    print("Directory 'lib' already created")

try:
    Directory.objects.create(name="Yggdrasil", owner=user, public=True)
    print("Create 'Yggdrasil' directory")
except django.db.utils.IntegrityError:
    print("Directory 'Yggdrasil' already created")

# Create Base activity
try:
    base = Activity.objects.create(id=0, name="Base", activity_type="base", activity_data={})
    print("Create 'Base Activity'")
except django.db.utils.IntegrityError:
    print("Base activity already created")

# Create Some Course 
try:
    Activity.objects.create(id=0, name="Python", activity_type="course", activity_data={}).add_parent(base)
    print("Create 'Python' course")
except django.db.utils.IntegrityError:
    print("Python course already created")
    
try:
    Activity.objects.create(id=0, name="Java", activity_type="course", activity_data={}).add_parent(base)
    print("Create 'Java' course")
except django.db.utils.IntegrityError:
    print("Java course already created")
    
try:
    Activity.objects.create(id=0, name="Javascript", activity_type="course", activity_data={}).add_parent(base)
    print("Create 'Javascript' course")
except django.db.utils.IntegrityError:
    print("Javascript course already created")
    
try:
    Activity.objects.create(id=0, name="C", activity_type="course", activity_data={}).add_parent(base)
    print("Create 'C' course")
except django.db.utils.IntegrityError:
    print("C course already created")
    
