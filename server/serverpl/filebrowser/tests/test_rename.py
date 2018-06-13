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


FAKE_FB_ROOT = join(settings.BASE_DIR,'filebrowser/tests/ressources')

@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class RenameTestCase(TestCase):
    
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345')
        self.c = Client()
        self.c.force_login(self.user,backend=settings.AUTHENTICATION_BACKENDS[0])
        if isdir(join(FAKE_FB_ROOT,'dir')):
            shutil.rmtree(join(FAKE_FB_ROOT,'dir'))
        self.folder = Directory.objects.create(name='dir', owner=self.user)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder.root)
    
    
    def tearDown(self):
        if isdir(join(FAKE_FB_ROOT,'directory')):
            shutil.rmtree(join(FAKE_FB_ROOT,'directory'))
    
    
    def test_rename_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/apply_option/post',
            follow=True
        )
        self.assertEqual(response.status_code, 405)
    
    
    def test_rename_file(self):
        try:
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                        'option_h' : 'rename',
                        'name_h' : 'function001.pl',
                        'relative_h' : './dir/TPE',
                        'type_h' : 'entry',
                        'name' : 'name.pl'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT,'./dir/TPE')
            self.assertTrue(isfile(join(rel, 'name.pl')))
            self.assertFalse(isfile(join(rel, 'function001.pl')))
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                        'option_h' : 'rename',
                        'name_h' : 'name.pl',
                        'relative_h' : './dir/TPE',
                        'type_h' : 'entry',
                        'name' : 'function001.pl'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT,'./dir/TPE')
            self.assertTrue(isfile(join(rel, 'function001.pl')))
            self.assertFalse(isfile(join(rel, 'name.pl')))
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_rename_folder(self):
        try:
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                        'option_h' : 'rename',
                        'name_h' : 'TPE',
                        'relative_h' : './dir',
                        'type_h' : 'entry',
                        'name' : 'folder'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT,'./dir')
            self.assertTrue(isdir(join(rel, 'folder')))
            self.assertFalse(isdir(join(rel, 'TPE')))
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                        'option_h' : 'rename',
                        'name_h' : 'folder',
                        'relative_h' : './dir',
                        'type_h' : 'entry',
                        'name' : 'TPE'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT,'./dir')
            self.assertTrue(isdir(join(rel, 'TPE')))
            self.assertFalse(isdir(join(rel, 'folder')))
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_rename_directory_entry(self):
        try:
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                        'option_h' : 'rename',
                        'name_h' : 'dir',
                        'relative_h' : '.',
                        'type_h' : 'entry',
                        'name' : 'directory'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertTrue(isdir(join(settings.FILEBROWSER_ROOT, 'directory')))
            self.assertFalse(isdir(join(settings.FILEBROWSER_ROOT, 'dir')))
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                        'option_h' : 'rename',
                        'name_h' : 'directory',
                        'relative_h' : '.',
                        'type_h' : 'entry',
                        'name' : 'dir'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertTrue(isdir(join(settings.FILEBROWSER_ROOT, 'dir')))
            self.assertFalse(isdir(join(settings.FILEBROWSER_ROOT, 'directory')))
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
    
    
    def test_dirrename(self):
        try:
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                        'option_h' : 'dirrename',
                        'name_h' : 'dir',
                        'relative_h' : '.',
                        'type_h' : 'entry',
                        'name' : 'directory'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertTrue(isdir(join(settings.FILEBROWSER_ROOT, 'directory')))
            self.assertFalse(isdir(join(settings.FILEBROWSER_ROOT, 'dir')))
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                        'option_h' : 'dirrename',
                        'name_h' : 'directory',
                        'relative_h' : '.',
                        'type_h' : 'entry',
                        'name' : 'dir'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertTrue(isdir(join(settings.FILEBROWSER_ROOT, 'dir')))
            self.assertFalse(isdir(join(settings.FILEBROWSER_ROOT, 'directory')))
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_rename_directory_directory(self):
        try:
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                        'option_h' : 'rename',
                        'name_h' : 'dir',
                        'relative_h' : '.',
                        'type_h' : 'directory',
                        'name' : 'directory'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertTrue(isdir(join(settings.FILEBROWSER_ROOT, 'directory')))
            self.assertFalse(isdir(join(settings.FILEBROWSER_ROOT, 'dir')))
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                        'option_h' : 'rename',
                        'name_h' : 'directory',
                        'relative_h' : '.',
                        'type_h' : 'directory',
                        'name' : 'dir'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertTrue(isdir(join(settings.FILEBROWSER_ROOT, 'dir')))
            self.assertFalse(isdir(join(settings.FILEBROWSER_ROOT, 'directory')))
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_rename_value_error(self):
        response = self.c.post(
            '/filebrowser/apply_option/post',
            {
                    'option_h' : 'rename',
                    'name_h' : 'function001.pl',
                    'relative_h' : './dir/TPE',
                    'type_h' : 'entry',
                    'name' : 'na/me.pl'
                },
            follow=True
        )
        m = list(response.context['messages'])
        self.assertEqual(len(m), 1)
        self.assertEqual(m[0].level, messages.ERROR)
    
    
    def test_rename_os_error(self):
        response = self.c.post(
            '/filebrowser/apply_option/post',
            {
                    'option_h' : 'rename',
                    'name_h' : 'function001.pl',
                    'relative_h' : './dir/TPE',
                    'type_h' : 'entry',
                    'name' : 'operatorModulo.pl'
                },
            follow=True
        )
        m = list(response.context['messages'])
        self.assertEqual(len(m), 1)
        self.assertEqual(m[0].level, messages.ERROR)
