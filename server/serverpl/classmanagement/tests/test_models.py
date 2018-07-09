#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_models.py
#  
# 
from django.test import TestCase

from django.contrib.auth.models import User

from classmanagement.models import Course


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
