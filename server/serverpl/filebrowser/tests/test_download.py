#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_parsers.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import os, shutil

from os.path import join, isdir, isfile

from django.test import TestCase, Client, override_settings
from django.conf import settings
from django.contrib.auth.models import User

from filebrowser.models import Directory


FAKE_FB_ROOT = join(settings.BASE_DIR,'filebrowser/tests/ressources')

@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class DownloadTestCase(TestCase):
    
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

    
    def test_download_method_not_allowed_entry(self):
        response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                'option':'entry-options-download',
                'target':'function001.pl',
                   
            },
            follow=True
        )
        self.assertEqual(response.status_code, 405)
    
    
    def test_download_method_not_allowed_directory(self):
        response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                'option':'directory-options-download',
                'target':'.',
                   
            },
            follow=True
        )
        self.assertEqual(response.status_code, 405)

    
    def test_download_file(self):
        try:
            response = self.c.get(
                '/filebrowser/home/TPE/opt/?option=entry-options-download&target=function001.pl',
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            path = join(FAKE_FB_ROOT, '100/TPE/function001.pl')
            with open(path, 'rb') as f:
                self.assertEqual(f.read(), response.content)
            self.assertTrue(isfile(path))
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_download_folder(self):
        try:
            response = self.c.get(
                '/filebrowser/home/TPE/opt/?option=entry-options-download&target=Dir_test',
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            path = join(FAKE_FB_ROOT, '100/TPE/Dir_test')
            archive = path + '.zip'
            self.assertFalse(isfile(archive))
            shutil.make_archive(path, 'zip', root_dir=path)
            
            with open(archive, 'rb') as f:
                self.assertEqual(f.read(), response.content)
            self.assertTrue(isdir(path))
            
            os.remove(archive)
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    def test_download_folder_directory(self):
        try:
            response = self.c.get(
                '/filebrowser/home/TPE/opt/?option=directory-options-download&target=Dir_test',
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            path = join(FAKE_FB_ROOT, '100/TPE/Dir_test')
            archive = path + '.zip'
            self.assertFalse(isfile(archive))
            shutil.make_archive(path, 'zip', root_dir=path)
            
            with open(archive, 'rb') as f:
                self.assertEqual(f.read(), response.content)
            self.assertTrue(isdir(path))
            
            os.remove(archive)
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
   
