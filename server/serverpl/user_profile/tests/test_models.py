#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_models.py
#  
#  


from django.test import TestCase
from django.contrib.auth.models import User

from user_profile.models import Profile






class ModelsTestCase(TestCase):
    """ Test functions of user_profile.models modules. """
    
    def test_profile(self):
        profile = Profile(user=User.objects.create_user(username='user', password='12345'))
        self.assertEqual(str(profile), "user" + "'s Profile")
