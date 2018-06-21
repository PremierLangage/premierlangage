#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_parsers.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import shutil, json

from os.path import join, isdir

from django.test import TestCase, Client, override_settings
from django.conf import settings
from django.contrib.auth.models import User

from filebrowser.models import Directory

from sandbox.models import Sandbox


FAKE_FB_ROOT = join(settings.BASE_DIR,'filebrowser/tests/ressources')

@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class EditPLTestCase(TestCase):
    
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345')
        self.c = Client()
        self.c.force_login(self.user,backend=settings.AUTHENTICATION_BACKENDS[0])
        if isdir(join(FAKE_FB_ROOT,'dir')):
            shutil.rmtree(join(FAKE_FB_ROOT,'dir'))
        self.folder = Directory.objects.create(name='dir', owner=self.user)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder.root)
        self.sandbox = Sandbox.objects.create(
            url="http://127.0.0.1:8000/sandbox/?action=execute", 
            name="sanbdboxlocal",
            priority=200
        )
    
    
    def test_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/edit_file/',
            {
                'path': './dir/TPE/function001.pl',
                'editor_input': 'New content',
                },
            follow=True,
        )
        self.assertEqual(response.status_code, 405)
    
    def test_preview_file(self):
        try:
            # Check preview is showing
            with open(join(FAKE_FB_ROOT, './dir/TPE/function001.pl'), 'r') as f:
                content = f.read()
            response = self.c.post(
                '/filebrowser/preview_pl/',
                content_type='application/json',
                data=json.dumps({
                    'content': content,
                    'path': "dir/TPE/function001.pl",
                    'directory': "dir",
                    'requested_action': "preview",
                })
            )
            self.assertContains(
                response,
                "Ecrire une fonction <strong>bob</strong> qui retourne la valeur enti\\u00e8re 1238",
                status_code=200
            )
            self.assertContains(
                response,
                "<i class=\\\"fas fa-check\\\"></i> Valider\\n",
                status_code=200
            )
            
            #Test if can validate
            response = self.c.post(
                '/filebrowser/preview_pl/',
                content_type='application/json',
                data=json.dumps({
                    'inputs': {'answer': "def bab(): return 1"},
                    'requested_action': 'submit',
                })
            )
            self.assertContains(
                response,
                '"feedback_type": "failed"',
                status_code=200
            )
            response = self.c.post(
                '/filebrowser/preview_pl/',
                content_type='application/json',
                data=json.dumps({
                    'inputs': {'answer': "def bob(): return 1238"},
                    'requested_action': 'submit',
                })
            )
            self.assertContains(
                response,
                '"feedback_type": "success"',
                status_code=200
            )
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
