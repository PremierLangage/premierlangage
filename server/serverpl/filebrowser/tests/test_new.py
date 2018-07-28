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
        self.user = User.objects.create_user(username='user', password='12345', id=100)
        self.c = Client()
        self.c.force_login(self.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        rel = join(settings.FILEBROWSER_ROOT, '100/')
        if isdir(rel):
            shutil.rmtree(join(rel))
        self.folder = Directory.objects.get(name='100', owner=self.user)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder.root)


    def test_new_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/home/opt/?option=directory-options-new&target=.',
            follow=True
        )
        self.assertEqual(response.status_code, 405)


    def test_new(self):
        try :
            response = self.c.post(
                '/filebrowser/home/TPE/opt/',
                {
                    'name': 'essai.pl',
                    'option': 'directory-options-new',
                    'target':'.',
                },
                follow=True
            )
           
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT, '100/TPE')
            self.assertTrue(isfile(join(rel, 'essai.pl')))
            self.assertContains(response, "File 'essai.pl' successfully created !")
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_new_existing_already(self):
        try :
            response = self.c.post(
                '/filebrowser/home/TPE/opt/',
                {
                    'name': 'essai.pl',
                    'option': 'directory-options-new',
                    'target':'.',
                },
                follow=True
            )
           
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "Can't create file 'essai.pl': this name is already used.")
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise

    def test_new_empty_name(self):
        try :
            response = self.c.post(
                '/filebrowser/home/TPE/opt/',
                {
                    
                    'option': 'directory-options-new',
                    'target':'.',
                },
                follow=True
            )
           
            self.assertEqual(response.status_code, 400)
            self.assertContains(response, "Missing 'name' parameter", status_code=400)
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_new_invalid_name(self):
        try :
            response = self.c.post(
                '/filebrowser/home/TPE/opt/',
                {
                    'name': 'essa/i.pl',
                    'option': 'directory-options-new',
                    'target':'.',
                },
                follow=True
            )
           
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "Can't create file 'essa/i.pl': name should not contain any of")
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_new_invalid_name2(self):
        try :
            response = self.c.post(
                '/filebrowser/home/TPE/opt/',
                {
                    'name': 'essa i.pl',
                    'option': 'directory-options-new',
                    'target':'.',
                },
                follow=True
            )
           
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "Can't create file 'essa i.pl': name should not contain any of")
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
