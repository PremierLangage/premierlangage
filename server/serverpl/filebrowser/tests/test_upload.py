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
class UploadTestCase(TestCase):
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
            '/filebrowser/home/TPE/opt/?option=directory-options-upload&target=function001.pl',

                follow=True
            )
        self.assertEqual(response.status_code, 405)


    def test_upload_file_without_name(self):
        try:
            with open(join(settings.FILEBROWSER_ROOT, '100/TPE/function001.pl'), 'rb') as f:
                response = self.c.post(
                    '/filebrowser/home/opt/',
                    {
                        
                        'option': 'directory-options-upload',
                        'target':'.',
                        'file': f,
                    },
                    follow=True
                    )
            self.assertEqual(response.status_code, 200)
            
            rel = join(settings.FILEBROWSER_ROOT, '100/')
            self.assertTrue(isfile(join(rel, 'function001.pl')))
            self.assertContains(response, "File 'function001.pl' successfully uploaded")
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_upload_file_with_name(self):
        try:
            with open(join(settings.FILEBROWSER_ROOT, '100/TPE/function001.pl'), 'rb') as f:
                response = self.c.post(
                    '/filebrowser/home/opt/',
                    {
                        'rename':'text.pl',
                        'option': 'directory-options-upload',
                        'target':'.',
                        'file': f,
                    },
                    follow=True
                    )
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "File 'text.pl' successfully uploaded")
            rel = join(settings.FILEBROWSER_ROOT, '100/')
            self.assertTrue(isfile(join(rel, 'text.pl')))
           
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_upload_no_file(self):
        try:
            with open(join(settings.FILEBROWSER_ROOT, '100/TPE/function001.pl'), 'rb') as f:
                response = self.c.post(
                    '/filebrowser/home/opt/',
                    {
                        'rename':'text.pl',
                        'option': 'directory-options-upload',
                        'target':'.',
                        
                    },
                    follow=True
                    )
            self.assertEqual(response.status_code, 400)
            self.assertContains(response, "File is missing", status_code=400)
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    

    def test_upload_file_exist_already(self):
        try:
            with open(join(settings.FILEBROWSER_ROOT, '100/TPE/function001.pl'), 'rb') as f:
                response = self.c.post(
                    '/filebrowser/home/TPE/opt/',
                    {
                        
                        'option': 'directory-options-upload',
                        'target':'.',
                        'file': f,
                    },
                    follow=True
                    )
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "This file's name is already used")
        
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise








