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


FAKE_FB_ROOT = join(settings.BASE_DIR,'filebrowser/tests/ressources')

@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class RenameTestCase(TestCase):
    
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

    
    def tearDown(self):
        if isdir(join(FAKE_FB_ROOT,'directory')):
            shutil.rmtree(join(FAKE_FB_ROOT,'directory'))
    
    
    def test_rename_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/home/opt/?option=entry-options-rename&target=.',
            follow=True
        )
        self.assertEqual(response.status_code, 405)

    
    def test_rename(self):
        try:
            response = self.c.post(
            '/filebrowser/home/opt/',
            {
                'name' : 'dir_test',
                'option': 'entry-options-rename',
                'target':'TPE',
                   
            },
            follow=True
            )
      
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT, '100')
            self.assertTrue(isdir(join(rel, 'dir_test')))
            self.assertContains(response, "'TPE' successfully renamed to 'dir_test' !")

            response = self.c.post(
            '/filebrowser/home/opt/',
            {
                'name' : 'TPE',
                'option': 'entry-options-rename',
                'target':'dir_test',
                   
            },
            follow=True
            )
      
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT, '100')
            self.assertTrue(isdir(join(rel, 'TPE')))
            self.assertContains(response, "'dir_test' successfully renamed to 'TPE' !")
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_rename_empty_name(self):
        try:
            response = self.c.post(
            '/filebrowser/home/opt/',
            {
                'option': 'entry-options-rename',
                'target':'TPE',
                   
            },
            follow=True
            )
      
            self.assertEqual(response.status_code, 400)
            self.assertContains(response, "Missing 'name' parameter", status_code=400)

        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_rename_existing_already(self):
        try:
            response = self.c.post(
            '/filebrowser/home/opt/',
            {
                'name' : 'TPE',
                'option': 'entry-options-rename',
                'target':'TPE',
                   
            },
            follow=True
            )
      
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "Can't rename ")
            self.assertContains(response, "this name is already used")
        
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise

    def test_rename_invalid_name(self):
        try:
            response = self.c.post(
            '/filebrowser/home/opt/',
            {
                'name' : 'TPE/z',
                'option': 'entry-options-rename',
                'target':'TPE',
                   
            },
            follow=True
            )
      
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "Can't rename ")
            self.assertContains(response, "name should not contain any of")
            rel = join(settings.FILEBROWSER_ROOT, '100')
            self.assertFalse(isdir(join(rel, 'TPE/z')))
        
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise

    def test_rename_invalid_name2(self):
        try:
            response = self.c.post(
            '/filebrowser/home/opt/',
            {
                'name' : 'TPE z',
                'option': 'entry-options-rename',
                'target':'TPE',
                   
            },
            follow=True
            )
      
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "Can't rename ")
            self.assertContains(response, "name should not contain any of")
            rel = join(settings.FILEBROWSER_ROOT, '100')
            self.assertFalse(isdir(join(rel, 'TPE z')))
        
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
