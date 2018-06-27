#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_parsers.py
#
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#

import shutil

from os.path import join, isdir


from django.test import TestCase, Client, override_settings
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.messages import constants as messages

from filebrowser.models import Directory

FAKE_FB_ROOT = join(settings.BASE_DIR, 'filebrowser/tests/ressources')


@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class RightTestCase(TestCase):

    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345')
        self.user2 = User.objects.create_user(username='bob', password='12345')
        self.user3 = User.objects.create_user(username='alice', password='12345')
        self.c = Client()
        self.c.force_login(self.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        if isdir(join(FAKE_FB_ROOT, 'dir')):
            shutil.rmtree(join(FAKE_FB_ROOT, 'dir'))
        self.folder = Directory.objects.create(name='dir', owner=self.user)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder.root)


    def test_new_method_not_allowed(self):
        response = self.c.post(
            '/filebrowser/apply_option/post',
            {
                'option_h': 'rights',
                'name_h': 'dir',
                'relative_h': './dir/TPE',
                'type_h': 'entry',
                },
            follow=True
        )
        self.assertEqual(response.status_code, 405)
    
    
    def test_right_entry(self):
        try :
            response = self.c.get(
                '/filebrowser/apply_option/',
                {
                    'option_h': 'rights',
                    'name_h': 'dir',
                    'relative_h': '.',
                    'type_h': 'entry',
                },
                follow=True
            )
            self.assertContains(response,
                "Editing dir's rights",
                status_code=200
            )
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_right_directory(self):
        try :
            response = self.c.get(
                '/filebrowser/apply_option/',
                {
                    'option_h': 'rights',
                    'name_h': 'dir',
                    'relative_h': '.',
                    'type_h': 'directory',
                },
                follow=True
            )
            self.assertContains(response,
                "Editing dir's rights",
                status_code=200
            )
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    def test_right_page_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/edit_rights',
            {
                'directory': 'dir',
                'write': [self.user2.id],
                'read': [self.user3.id],
            },
            follow=True
        )
        self.assertEqual(response.status_code, 405)


    def test_right_page(self):
        try:
            response = self.c.post(
                '/filebrowser/edit_rights/',
                {
                    'directory': 'dir',
                    'write': [self.user2.id],
                    'read': [self.user3.id],
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            m = list(response.context['messages'])
            self.assertEqual(messages.SUCCESS, m[0].level)
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
