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
    
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345', id=100)
    
    
    def test_profile_str(self):
        self.assertEqual(str(self.user.profile), "user's Profile")
    
    
    def test_profile_mod_rep(self):
        self.assertEqual(self.user.profile.rep, 0)
        self.user.profile.mod_rep(-5)
        self.assertEqual(self.user.profile.rep, -5)
        self.user.profile.mod_rep(10)
        self.assertEqual(self.user.profile.rep, 5)
