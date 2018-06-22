#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_delete.py
#  
#  

import shutil

from os.path import join, isdir, isfile

from django.test import TestCase, Client, override_settings
from django.conf import settings
from django.contrib.auth.models import User

from filebrowser.models import Directory


FAKE_FB_ROOT = join(settings.BASE_DIR,'filebrowser/tests/ressources')

@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class DeleteTestCase(TestCase):
    
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345')
        self.c = Client()
        self.c.force_login(self.user,backend=settings.AUTHENTICATION_BACKENDS[0])
        if isdir(join(FAKE_FB_ROOT,'dir')):
            shutil.rmtree(join(FAKE_FB_ROOT,'dir'))
        self.folder = Directory.objects.create(name='dir', owner=self.user)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder.root)
    
    
    def test_delete_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/apply_option/post',
            follow=True
        )
        self.assertEqual(response.status_code, 405)
    
    
    def test_delete_file(self):
        try:
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                        'option_h' : 'delete',
                        'name_h' : 'function001.pl',
                        'relative_h' : './dir/TPE',
                        'type_h' : 'entry'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT,'./dir/TPE')
            self.assertFalse(isfile(join(rel, 'function001.pl')))
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                        'option_h' : 'delete',
                        'name_h' : 'function001.pl',
                        'relative_h' : './dir/TPE',
                        'type_h' : 'entry'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertFalse(isfile(join(rel, 'function001.pl')))
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_delete_folder(self):
        try:
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                        'option_h' : 'delete',
                        'name_h' : 'TPE',
                        'relative_h' : './dir',
                        'type_h' : 'entry'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT,'./dir')
            self.assertFalse(isdir(join(rel, 'TPE')))
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                        'option_h' : 'delete',
                        'name_h' : 'TPE',
                        'relative_h' : './dir',
                        'type_h' : 'entry'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT,'./dir')
            self.assertFalse(isdir(join(rel, 'TPE')))
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_delete_directory_entry(self):
        try:
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                        'option_h' : 'delete',
                        'name_h' : 'dir',
                        'relative_h' : '.',
                        'type_h' : 'entry'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertFalse(isdir(join(settings.FILEBROWSER_ROOT, 'dir')))
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                        'option_h' : 'delete',
                        'name_h' : 'dir',
                        'relative_h' : '.',
                        'type_h' : 'entry'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertFalse(isdir(join(settings.FILEBROWSER_ROOT, 'dir')))
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    
    def test_dirdelete_directory_entry(self):
        try:
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                        'option_h' : 'dirdelete',
                        'name_h' : 'dir',
                        'relative_h' : '.',
                        'type_h' : 'entry'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertFalse(isdir(join(settings.FILEBROWSER_ROOT, 'dir')))
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                        'option_h' : 'delete',
                        'name_h' : 'directory',
                        'relative_h' : '.',
                        'type_h' : 'entry'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertFalse(isdir(join(settings.FILEBROWSER_ROOT, 'dir')))
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
  
    
   
