#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_models.py
#
#

from django.test import TestCase
from django.contrib.auth.models import User

from user_profile.enums import Role



class ModelsTestCase(TestCase):
    """ Test functions of user_profile.models modules. """
    
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='user', password='12345', id=100)
    
    
    def test_profile_str(self):
        self.assertEqual(str(self.user.profile), "user's Profile")
    
    
    def test_profile_mod_rep(self):
        self.assertEqual(self.user.profile.rep, 0)
        self.user.profile.mod_rep(-5)
        self.assertEqual(self.user.profile.rep, -5)
        self.user.profile.mod_rep(10)
        self.assertEqual(self.user.profile.rep, 5)
    
    
    def test_set_role_lti(self):
        self.user.profile.set_role_lti({"roles": ["Administrator"]})
        self.assertEqual(self.user.profile.role, Role.ADMINISTRATOR)
        self.user.profile.set_role_lti({"roles": ["Observer"]})
        self.assertEqual(self.user.profile.role, Role.OBSERVER)
        self.user.profile.set_role_lti({"roles": ["Learner"]})
        self.assertEqual(self.user.profile.role, Role.LEARNER)
        self.user.profile.set_role_lti({"roles": ["Instructor"]})
        self.assertEqual(self.user.profile.role, Role.INSTRUCTOR)
        self.user.profile.set_role_lti({"roles": ["ContentDeveloper"]})
        self.assertEqual(self.user.profile.role, Role.CONTENT_DEVELOPER)
    
    
    def test_can_load(self):
        self.user.is_staff = False
        self.user.is_superuser = False
        self.user.profile.role = Role.LEARNER
        self.assertFalse(self.user.profile.can_load())
        
        self.user.profile.role = Role.INSTRUCTOR
        self.assertTrue(self.user.profile.can_load())
        
        self.user.profile.role = Role.CONTENT_DEVELOPER
        self.assertTrue(self.user.profile.can_load())
        
        self.user.profile.role = Role.ADMINISTRATOR
        self.assertTrue(self.user.profile.can_load())
        
        self.user.is_staff = True
        self.user.profile.role = Role.LEARNER
        self.assertTrue(self.user.profile.can_load())
        
        self.user.is_staff = False
        self.user.is_superuser = True
        self.assertTrue(self.user.profile.can_load())
    
    
    def test_is_admin(self):
        self.user.is_staff = False
        self.user.is_superuser = False
        self.user.profile.role = Role.LEARNER
        self.assertFalse(self.user.profile.is_admin())
        
        self.user.profile.role = Role.ADMINISTRATOR
        self.assertTrue(self.user.profile.is_admin())
        
        self.user.profile.role = Role.LEARNER
        self.user.is_superuser = True
        self.assertTrue(self.user.profile.is_admin())
        
        self.user.is_superuser = False
        self.user.is_staff = True
        self.assertTrue(self.user.profile.is_admin())
