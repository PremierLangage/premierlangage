#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_parsers.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import os, shutil, sys, json, time, subprocess

from os.path import join, isdir, isfile

from mock import patch

from django.test import TestCase, Client, override_settings
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.messages import constants as messages

from filebrowser.models import Directory


FAKE_FB_ROOT = join(settings.BASE_DIR,'filebrowser/tests/ressources')


@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class ModelTestCase(TestCase):
    
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345')
        self.user2 = User.objects.create_user(username='user2', password='12345')
        self.user3 = User.objects.create_user(username='user3', password='12345')
        
        dir_path = join(FAKE_FB_ROOT, 'dir')
        if isdir(dir_path):
            shutil.rmtree(dir_path)
        self.d = Directory.objects.create(name='dir', owner=self.user)
    
    
    def test_add_remove_write(self):
        self.assertTrue(self.user2 not in self.d.write_auth.all())
        self.d.add_write_auth(self.user2)
        self.assertTrue(self.user2 in self.d.write_auth.all())
        self.d.remove_write_auth(self.user2)
        self.assertTrue(self.user2 not in self.d.write_auth.all())
    
    
    def test_add_remove_read(self):
        self.assertTrue(self.user2 not in self.d.read_auth.all())
        self.d.add_read_auth(self.user2)
        self.assertTrue(self.user2 in self.d.read_auth.all())
        self.d.remove_read_auth(self.user2)
        self.assertTrue(self.user2 not in self.d.read_auth.all())
    
    
    def test_public_repo(self):
        d = Directory.objects.create(name='dir2', owner=self.user, public=True)
        self.assertTrue(self.user2 in d.read_auth.all())
        self.assertTrue(self.user3 in d.read_auth.all())
        self.assertTrue(self.user2 not in d.write_auth.all())
        self.assertTrue(self.user3 not in d.write_auth.all())
        user4 = User.objects.create_user(username='user4', password='12345')
        self.assertTrue(user4 in d.read_auth.all())
        self.assertTrue(user4 not in d.write_auth.all())
