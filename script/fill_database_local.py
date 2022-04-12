from email.mime import base
import random
import string

import django
from django.contrib.auth.models import User

from activity.models import Activity
from filebrowser.models import Directory
from user_profile.enums import Role


globals().update(locals())

# Create admin
try:
    admin = User.objects.create_user(username='admin', password='adminadmin')
    admin.is_staff = True
    admin.is_admin = True
    admin.is_superuser = True
    admin.save()
    print("Create 'admin' user")
except django.db.utils.IntegrityError:
    print("User 'admin' already created")
    admin = User.objects.get(username='admin')


# Create some users
try:
    user_1 = User.objects.create_user(username='test_user_1', password='password')
    user_1.is_staff = True
    user_1.is_admin = True
    user_1.is_superuser = True
    user_1.profile.role = Role.INSTRUCTOR
    user_1.save()
    print("Create test_user_1")
except django.db.utils.IntegrityError:
    print("User 'test_user_1' already created")
    user_1 = User.objects.get(username='test_user_1')

# Create admin
try:
    user_2 = User.objects.create_user(username='test_user_2', password='password')
    user_2.is_staff = True
    user_2.is_admin = True
    user_2.is_superuser = False
    user_2.profile.role = Role.INSTRUCTOR
    user_2.save()
    print("Create test_user_2")
except django.db.utils.IntegrityError:
    print("User 'test_user_2' already created")
    user_2 = User.objects.get(username='test_user_2')

# Create admin
try:
    user_3 = User.objects.create_user(username='test_user_3', password='password')
    user_3.is_staff = False
    user_3.is_admin = False
    user_3.is_superuser = False
    user_3.profile.role = Role.INSTRUCTOR
    user_3.save()
    print("Create test_user_3")
except django.db.utils.IntegrityError:
    print("User 'test_user_3' already created")
    user_3 = User.objects.get(username='test_user_3')


try:
    user_4 = User.objects.create_user(username='test_user_4', password='password')
    user_4.is_staff = False
    user_4.is_admin = False
    user_4.is_superuser = False
    user_4.profile.role = Role.INSTRUCTOR
    user_4.save()
    print("Create test_user_4")
except django.db.utils.IntegrityError:
    print("User 'test_user_4' already created")
    user_4 = User.objects.get(username='test_user_4')

# Create admin
try:
    user_5 = User.objects.create_user(username='test_user_5', password='password')
    user_5.is_staff = False
    user_5.is_admin = False
    user_5.is_superuser = False
    user_5.profile.role = Role.LEARNER
    user_5.save()
    print("Create test_user_5")
except django.db.utils.IntegrityError:
    print("User 'test_user_5' already created")
    user_5 = User.objects.get(username='test_user_5')

# Create admin
try:
    user_6 = User.objects.create_user(username='test_user_6', password='password')
    user_6.is_staff = False
    user_6.is_admin = False
    user_6.is_superuser = False
    user_6.profile.role = Role.LEARNER    
    user_6.save()
    print("Create test_user_6")
except django.db.utils.IntegrityError:
    print("User 'test_user_6' already created")
    user_6 = User.objects.get(username='test_user_6')

try:
    user_7 = User.objects.create_user(username='test_user_7', password='password')
    user_7.is_staff = False
    user_7.is_admin = False
    user_7.is_superuser = False
    user_7.profile.role = Role.LEARNER
    user_7.save()
    print("Create test_user_7")
except django.db.utils.IntegrityError:
    print("User 'test_user_7' already created")
    user_7 = User.objects.get(username='test_user_7')

# Create admin
try:
    user_8 = User.objects.create_user(username='test_user_8', password='password')
    user_8.is_staff = False
    user_8.is_admin = False
    user_8.is_superuser = False
    user_8.profile.role = Role.LEARNER
    user_8.save()
    print("Create test_user_8")
except django.db.utils.IntegrityError:
    print("User 'test_user_8' already created")
    user_8 = User.objects.get(username='test_user_8')

# Create admin
try:
    user_9 = User.objects.create_user(username='test_user_9', password='password')
    user_9.is_staff = False
    user_9.is_admin = False
    user_9.is_superuser = False
    user_9.profile.role = Role.LEARNER
    user_9.save()
    print("Create test_user_9")
except django.db.utils.IntegrityError:
    print("User 'test_user_9' already created")
    user_9 = User.objects.get(username='test_user_9')


# Create anonymous
try:
    passwd = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(10))
    anonyme_user = User.objects.create_user(username='Anonymous', password=passwd)
    anonyme_user.save()
    print("Create 'Anonymous' user")
except django.db.utils.IntegrityError:
    # user = User.objects.get(username='PremierLangage')
    anonyme_user = User.objects.get(username='Anonymous')

# Add lib and Yggdrasil
try:
    Directory.objects.create(name="lib", owner=admin, read_only=True)
    print("Create 'lib' directory")
except django.db.utils.IntegrityError:
    print("Directory 'lib' already created")

try:
    Directory.objects.create(name="Yggdrasil", owner=admin, public=True)
    print("Create 'Yggdrasil' directory")
except django.db.utils.IntegrityError:
    print("Directory 'Yggdrasil' already created")

# Create Base activity
try:
    base_course = Activity.objects.create(id=0, name="Base", activity_type="base", activity_data={})
    print("Create 'Base Activity'")
except django.db.utils.IntegrityError:
    print("Base activity already created")

# Create Some Course 
try:
    python_course = Activity.objects.create(name="Python", activity_type="course", activity_data={})
    python_course.add_parent(base_course)
    print("Create 'Python' course")
except django.db.utils.IntegrityError:
    print("Python course already created")
    
try:
    java_course = Activity.objects.create(name="Java", activity_type="course", activity_data={})
    java_course.add_parent(base_course)
    print("Create 'Java' course")
except django.db.utils.IntegrityError:
    print("Java course already created")
    
try:
    js_course = Activity.objects.create(name="Javascript", activity_type="course", activity_data={})
    js_course.add_parent(base_course)
    print("Create 'Javascript' course")
except django.db.utils.IntegrityError:
    print("Javascript course already created")
    
try:
    c_course = Activity.objects.create(name="C", activity_type="course", activity_data={})
    c_course.add_parent(base_course)
    print("Create 'C' course")
except django.db.utils.IntegrityError:
    print("C course already created")
    
# Add teacher and students in course
print("Fill course with teachers and students")
#base_course.add_teacher_to_all(admin)

# Python Course
python_course.add_teacher_to_all(admin)
python_course.add_teacher_to_all(user_2)
python_course.add_student_to_all(user_5)
python_course.add_student_to_all(user_6)
python_course.add_student_to_all(user_7)

# Java Course
java_course.add_teacher_to_all(admin)
java_course.add_teacher_to_all(user_3)
java_course.add_student_to_all(user_6)
java_course.add_student_to_all(user_7)
java_course.add_student_to_all(user_8)

# Javascript Course
js_course.add_teacher_to_all(admin)
js_course.add_teacher_to_all(user_4)
js_course.add_student_to_all(user_5)
js_course.add_student_to_all(user_7)
js_course.add_student_to_all(user_9)

# C Course
c_course.add_teacher_to_all(admin)
c_course.add_teacher_to_all(user_3)
c_course.add_student_to_all(user_5)
c_course.add_student_to_all(user_8)
c_course.add_student_to_all(user_9)

base_course.save()
python_course.save()
java_course.save()
js_course.save()
c_course.save()

print("local database has been successfully filled")
