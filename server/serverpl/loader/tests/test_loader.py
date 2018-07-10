#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  test_loader.py
#  
#  

import json, shutil
from os.path import join, isdir, isfile
from django.test import TestCase, SimpleTestCase, Client, override_settings

from django.conf import settings
from django.contrib.auth.models import User

from sandbox.models import Sandbox
from loader.loader import load_file, load_PLTP
from filebrowser.models import Directory


from serverpl.settings import AUTHENTICATION_BACKENDS
FAKE_FB_ROOT = join(settings.BASE_DIR,'filebrowser/tests/ressources')

@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class ExoTestCase(TestCase):
    
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345', id=100)
        self.c = Client()
        self.c.force_login(self.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        rel = join(settings.FILEBROWSER_ROOT, '100/')
        if isdir(rel):
            shutil.rmtree(join(rel))
        self.folder = Directory.objects.get(name='100', owner=self.user)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder.root)

    

    def test_load_PLTP(self):
        c = Client()
        c.force_login(self.user,backend=AUTHENTICATION_BACKENDS[0])        
        res, html = load_PLTP(self.folder, 'plgrader2.pltp',force=None)
        res, html = load_PLTP(self.folder, 'plgrader2.pltp',force=None)

        self.assertEqual(res, None)
        self.assertEqual(html, None)
        
    
  
        
        
