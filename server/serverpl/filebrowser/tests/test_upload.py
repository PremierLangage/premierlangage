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

FAKE_FB_ROOT = join(settings.BASE_DIR, 'filebrowser/tests/ressources')


@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class UploadTestCase(TestCase):
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345')
        self.c = Client()
        self.c.force_login(self.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        if isdir(join(FAKE_FB_ROOT, 'dir')):
            shutil.rmtree(join(FAKE_FB_ROOT, 'dir'))
        self.folder = Directory.objects.create(name='dir', owner=self.user)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder.root)


    def test_create_dir_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/apply_option/post',
            follow=True
        )
        self.assertEqual(response.status_code, 405)


    def test_upload_file_with_name(self):
        with open('./filebrowser/tests/ressources/filter/text.txt', 'r') as fd:
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                    'option_h': 'upload',
                    'name_h': 'dir',
                    'relative_h': './dir/TPE',
                    'type_h': 'directory',
                    'file' : fd,
                    'relative' : './dir/TPE',
                    'name' : 'salut.txt',
                },
                follow=True
            )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT, './dir/TPE')
        self.assertTrue(isfile(join(rel, 'salut.txt')))
        m = list(response.context['messages'])
        self.assertEqual(m[0].level, messages.SUCCESS)
        response = self.c.post(
            '/filebrowser/apply_option/post',
            {
                'option_h': 'delete',
                'name_h': 'salut.txt',
                'relative_h': './dir/TPE',
                'type_h': 'entry'
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)


    def test_upload_file_without_name(self):
        with open('./filebrowser/tests/ressources/filter/text.txt', 'r') as fd:
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                    'option_h': 'upload',
                    'name_h': 'dir',
                    'relative_h': './dir/TPE',
                    'type_h': 'directory',
                    'file' : fd,
                    'relative' : './dir/TPE',
                    'name' : '',
                },
                follow=True
            )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT, './dir/TPE')
        self.assertTrue(isfile(join(rel, 'text.txt')))
        m = list(response.context['messages'])
        self.assertEqual(m[0].level, messages.SUCCESS)
        response = self.c.post(
            '/filebrowser/apply_option/post',
            {
                'option_h': 'delete',
                'name_h': 'text.txt',
                'relative_h': './dir/TPE',
                'type_h': 'entry'
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)

        
    def test_upload_in_bad_directory(self):
        with open('./filebrowser/tests/ressources/filter/text.txt', 'r') as fd:
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                    'option_h': 'upload',
                    'name_h': 'dir',
                    'relative_h': './dir/TPE',
                    'type_h': 'directory',
                    'file': fd,
                    'relative': './dir/TPE',
                    'name': '../../../../../text.txt',
                },
                follow=True
            )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT, './dir/TPE')
        self.assertFalse(isfile(join(rel, '../../../../../text.txt')))
        m = list(response.context['messages'])
        self.assertEqual(m[0].level, messages.ERROR)


    def test_upload_existing_file(self):
        with open('./filebrowser/tests/ressources/filter/text.txt', 'r') as fd:
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                    'option_h': 'upload',
                    'name_h': 'dir',
                    'relative_h': './dir/TPE',
                    'type_h': 'directory',
                    'file' : fd,
                    'relative' : './dir/TPE',
                    'name' : 'salut.txt',
                },
                follow=True
            )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT, './dir/TPE')
        self.assertTrue(isfile(join(rel, 'salut.txt')))
        m = list(response.context['messages'])
        self.assertEqual(m[0].level, messages.SUCCESS)

        with open('./filebrowser/tests/ressources/filter/text.txt', 'r') as fd:
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                    'option_h': 'upload',
                    'name_h': 'dir',
                    'relative_h': './dir/TPE',
                    'type_h': 'directory',
                    'file' : fd,
                    'relative' : './dir/TPE',
                    'name' : 'salut.txt',
                },
                follow=True
            )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT, './dir/TPE')
        self.assertTrue(isfile(join(rel, 'salut.txt')))
        m = list(response.context['messages'])
        self.assertEqual(m[0].level, messages.ERROR)

        response = self.c.post(
            '/filebrowser/apply_option/post',
            {
                'option_h': 'delete',
                'name_h': 'salut.txt',
                'relative_h': './dir/TPE',
                'type_h': 'entry'
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)


    def test_upload_existing_dir(self):
        with open('./filebrowser/tests/ressources/filter/text.txt', 'r') as fd:
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                    'option_h': 'upload',
                    'name_h': 'dir',
                    'relative_h': './dir/TPE',
                    'type_h': 'directory',
                    'file' : fd,
                    'relative' : './dir/TPE',
                    'name' : 'Dir_test',
                },
                follow=True
            )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT, './dir/TPE')
        self.assertTrue(isdir(join(rel, 'Dir_test')))
        m = list(response.context['messages'])
        self.assertEqual(m[0].level, messages.ERROR)











