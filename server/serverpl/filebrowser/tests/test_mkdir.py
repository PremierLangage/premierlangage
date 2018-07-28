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
class CreateDirectoryTestCase(TestCase):
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


    def test_create_dir_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/home/opt/?option=directory-options-mkdir&target=.',
            follow=True
        )
        self.assertEqual(response.status_code, 405)


    def test_mkdir(self):
        response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                'name' : 'dir_test2',
                'option': 'directory-options-mkdir',
                'target':'.',
                   
            },
            follow=True
        )
      
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT, '100/TPE')
        self.assertTrue(isdir(join(rel, 'dir_test2')))
        m = list(response.context['messages'])
        self.assertEqual(m[0].level, messages.SUCCESS)
        self.assertContains(response, "Folder 'dir_test2' successfully created !")


    def test_mkdir_existing_dir(self):
        response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                'name' : 'dir_test2',
                'option': 'directory-options-mkdir',
                'target':'.',
                   
            },
            follow=True
        )
      
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Can't create directory")
        self.assertContains(response, "this name is already used")
        

    def test_mkdir_empty_name(self):
        response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                
                'option': 'directory-options-mkdir',
                'target':'.',
                   
            },
            follow=True
        )
      
        self.assertEqual(response.status_code, 400)
        self.assertContains(response, "Missing 'name' or parameter", status_code=400)


    def test_invalid_name(self):
        response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                'name' : 'dir/2',
                'option': 'directory-options-mkdir',
                'target':'.',
                   
            },
            follow=True
        )
      
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Can't create directory")
        self.assertContains(response, "name should not contain any of")
        rel = join(settings.FILEBROWSER_ROOT, '100/TPE')
        self.assertFalse(isdir(join(rel, 'dir/2')))

    def test_invalid_name2(self):
        response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                'name' : 'dir 2',
                'option': 'directory-options-mkdir',
                'target':'.',
                   
            },
            follow=True
        )
      
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Can't create directory")
        self.assertContains(response, "name should not contain any of")
        rel = join(settings.FILEBROWSER_ROOT, '100/TPE')
        self.assertFalse(isdir(join(rel, 'dir 2')))







