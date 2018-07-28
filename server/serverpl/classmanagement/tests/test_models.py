#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_models.py
#  
# 

from os.path import join

from django.test import TestCase, override_settings
from django.conf import settings
from django.contrib.auth.models import User

from classmanagement.models import Course

FAKE_FB_ROOT = join(settings.BASE_DIR,'classmanagement/tests/ressources')

@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class ModelsTestCase(TestCase):
    """ Test functions of classmanagement.models modules. """
    
    def test_profile(self):
        teacher1 = User.objects.create_user(username='user', password='12345')
        teacher2 = User.objects.create_user(username='user2', password='12345')

        
        course = Course.objects.create(id="id",name="coursename", label="courselabel")
        course.teacher.add(teacher1)
        course.teacher.add(teacher2)
        self.assertEqual(str(course), "id" + ": [" + "courselabel] coursename")
        
        self.assertEqual(True, course.is_member(teacher1))
