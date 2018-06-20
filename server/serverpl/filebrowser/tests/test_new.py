#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_parsers.py
#
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#

import shutil

from os.path import join, isdir, isfile


from django.test import TestCase, Client, override_settings
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.messages import constants as messages

from filebrowser.models import Directory

FAKE_FB_ROOT = join(settings.BASE_DIR, 'filebrowser/tests/ressources')


@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class NewTestCase(TestCase):

    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345')
        self.c = Client()
        self.c.force_login(self.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        if isdir(join(FAKE_FB_ROOT, 'dir')):
            shutil.rmtree(join(FAKE_FB_ROOT, 'dir'))
        self.folder = Directory.objects.create(name='dir', owner=self.user)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder.root)


    def test_new_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/apply_option/post',
            follow=True
        )
        self.assertEqual(response.status_code, 405)


    def test_new_file(self):
        try :
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                    'option_h': 'new',
                    'name_h': 'dir',
                    'relative_h': './dir/TPE',
                    'type_h': 'directory',
                    'name': 'file',
                },
                follow=True
            )
            self.assertContains(
                response,
                "var editorPL = ace.edit(\'editorPL\')",
                status_code=200
            )
            self.assertNotContains(
                response,
                "Preview",
                status_code=200
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE')
            self.assertTrue(isfile(join(rel, 'file')))
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_new_pl(self):
        try :
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                    'option_h': 'new',
                    'name_h': 'dir',
                    'relative_h': './dir/TPE',
                    'type_h': 'directory',
                    'name': 'file.pl',
                },
                follow=True
            )
            self.assertContains(
                response,
                "var editorPL = ace.edit(\'editorPL\')",
                status_code=200
            )
            self.assertContains(
                response,
                "Preview",
                status_code=200
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE')
            self.assertTrue(isfile(join(rel, 'file.pl')))
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise

    def test_new_pl_not_in_directory(self):
        try :
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                    'option_h': 'new',
                    'name_h': 'dir',
                    'relative_h': './dir/TPE',
                    'type_h': 'directory',
                    'name': '../../../../file1.pl',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE')
            self.assertFalse(isfile(join(rel, '../../../../file1.pl')))
            m = list(response.context['messages'])
            self.assertEqual(len(m), 1)
            self.assertEqual(m[0].level, messages.ERROR)
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_new_file_with_used_file_name(self):
        try :
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                    'option_h': 'new',
                    'name_h': 'dir',
                    'relative_h': './dir/TPE',
                    'type_h': 'directory',
                    'name': 'function001.pl',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            m = list(response.context['messages'])
            self.assertEqual(len(m), 1)
            self.assertEqual(m[0].level, messages.ERROR)
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_new_file_with_used_dir_name(self):
        try :
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                    'option_h': 'new',
                    'name_h': 'dir',
                    'relative_h': './dir/TPE',
                    'type_h': 'directory',
                    'name': 'Dir_test',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE')
            self.assertFalse(isfile(join(rel, 'Dir_test')))
            m = list(response.context['messages'])
            self.assertEqual(len(m), 1)
            self.assertEqual(m[0].level, messages.ERROR)
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_new_file_with_no_name(self):
        try :
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                    'option_h': 'new',
                    'name_h': 'dir',
                    'relative_h': './dir/TPE',
                    'type_h': 'directory',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 400)
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise

    def test_new_file_with_no_relative(self):
        try :
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                    'option_h': 'new',
                    'name_h': 'dir',
                    'type_h': 'directory',
                    'name': 'Dir_test',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 400)
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise

    def test_new_file_with_space_name(self):
        try :
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                    'option_h': 'new',
                    'name_h': 'dir',
                    'relative_h': './dir/TPE',
                    'type_h': 'directory',
                    'name': ' ',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE')
            self.assertFalse(isfile(join(rel, ' ')))
            m = list(response.context['messages'])
            self.assertEqual(len(m), 1)
            self.assertEqual(m[0].level, messages.ERROR)
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
