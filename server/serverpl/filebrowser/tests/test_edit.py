#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_parsers.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import os, shutil, sys, json, time

from os.path import join, isdir, isfile

from mock import patch

from django.test import TestCase, Client, override_settings
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.messages import constants as messages

from filebrowser.models import Directory


FAKE_FB_ROOT = join(settings.BASE_DIR,'filebrowser/tests/ressources')

@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class RenameTestCase(TestCase):
    
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345')
        self.c = Client()
        self.c.force_login(self.user,backend=settings.AUTHENTICATION_BACKENDS[0])
        if isdir(join(FAKE_FB_ROOT,'dir')):
            shutil.rmtree(join(FAKE_FB_ROOT,'dir'))
        self.folder = Directory.objects.create(name='dir', owner=self.user)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder.root)
    
    
    def test_rename_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/apply_option/post',
            follow=True
        )
        self.assertEqual(response.status_code, 405)
    
    
    def test_edit_file(self):
        try:
            response = self.c.get(
                '/filebrowser/apply_option/',
                {
                        'option_h' : 'edit',
                        'name_h' : 'function001.pl',
                        'relative_h' : './dir/TPE',
                        'type_h' : 'entry',
                    },
                follow=True
            )
            self.assertContains(
                response,
                "var editorPL = ace.edit(\'editorPL\')",
                status_code=200
            )
            response2 = self.c.post(
                '/filebrowser/apply_option',
                {
                    'path': './dir/TPE/function001.pl'
                    'editor_input': 'New content'
                    }
            
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
