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
class CreateDirectoryTestCase(TestCase):
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345')
        self.c = Client()
        self.c.force_login(self.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        rel = join(settings.FILEBROWSER_ROOT, './dir/')
        if isdir(rel):
            shutil.rmtree(join(rel))
        self.folder = Directory.objects.create(name='dir', owner=self.user)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder.root)


    def test_create_dir_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/apply_option/post',
            follow=True
        )
        self.assertEqual(response.status_code, 405)


    def test_mkdir(self):
        response = self.c.post(
            '/filebrowser/apply_option/post',
            {
                'option_h' : 'mkdir',
                'name_h' : 'dir',
                'relative_h' : './dir/TPE',
                'type_h' : 'directory',
                'relative': './dir/TPE',
                'name' : 'dir_test2',
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT, './dir/TPE')
        self.assertTrue(isdir(join(rel, 'dir_test2')))
        m = list(response.context['messages'])
        self.assertEqual(m[0].level, messages.SUCCESS)


    def test_mkdir_existing_dir(self):
        response = self.c.post(
            '/filebrowser/apply_option/post',
            {
                'option_h': 'mkdir',
                'name_h': 'dir',
                'relative_h': './dir/TPE',
                'type_h': 'directory',
                'relative': './dir/TPE',
                'name': 'Dir_test',
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT, './dir/TPE')
        self.assertTrue(isdir(join(rel, 'Dir_test')))
        m = list(response.context['messages'])
        self.assertEqual(m[0].level, messages.ERROR)


    def test_mkdir_empty_relative(self):
        response = self.c.post(
            '/filebrowser/apply_option/post',
            {
                'option_h' : 'mkdir',
                'name_h' : 'dir',
                'relative_h' : './dir/TPE',
                'type_h' : 'directory',
                'name' : 'dir_test2',
            },
            follow=True
        )
        self.assertEqual(response.status_code, 400)


    def test_mkdir_empty_name(self):
        response = self.c.post(
        '/filebrowser/apply_option/post',
        {
            'option_h' : 'mkdir',
            'name_h' : 'dir',
            'relative_h' : './dir/TPE',
            'type_h' : 'directory',
            'relative': './dir/TPE',
        },
        follow=True
        )
        self.assertEqual(response.status_code, 400)


    def test_mkdir_existing_file(self):
        response = self.c.post(
            '/filebrowser/apply_option/post',
            {
                'option_h': 'mkdir',
                'name_h': 'dir',
                'relative_h': './dir/TPE',
                'type_h': 'directory',
                'relative': './dir/TPE',
                'name': 'function001.pl',
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT, './dir/TPE')
        self.assertTrue(isfile(join(rel, 'function001.pl')))
        m = list(response.context['messages'])
        self.assertEqual(m[0].level, messages.ERROR)


    def test_invalid_name1(self):
        response = self.c.post(
            '/filebrowser/apply_option/post',
            {
                'option_h': 'mkdir',
                'name_h': 'dir',
                'relative_h': './dir/TPE',
                'type_h': 'directory',
                'relative': './dir/TPE',
                'name': '/test',
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT, './dir/TPE')
        self.assertFalse(isfile(join(rel, '/test')))
        m = list(response.context['messages'])
        self.assertEqual(m[0].level, messages.ERROR)


    def test_invalid_name2(self):
        response = self.c.post(
            '/filebrowser/apply_option/post',
            {
                'option_h': 'mkdir',
                'name_h': 'dir',
                'relative_h': './dir/TPE',
                'type_h': 'directory',
                'relative': './dir/TPE',
                'name': 'test/',
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT, './dir/TPE')
        self.assertFalse(isfile(join(rel, 'test/')))
        m = list(response.context['messages'])
        self.assertEqual(m[0].level, messages.ERROR)


    def test_invalid_name3(self):
        response = self.c.post(
            '/filebrowser/apply_option/post',
            {
                'option_h': 'mkdir',
                'name_h': 'dir',
                'relative_h': './dir/TPE',
                'type_h': 'directory',
                'relative': './dir/TPE',
                'name': 'test/test',
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT, './dir/TPE')
        self.assertFalse(isfile(join(rel, 'test/test')))
        m = list(response.context['messages'])
        self.assertEqual(m[0].level, messages.ERROR)








