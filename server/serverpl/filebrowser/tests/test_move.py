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
class MoveTestCase(TestCase):

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


    def test_move_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/home/opt/?option=entry-options-move&target=.',
            follow=True
        )
        self.assertEqual(response.status_code, 405)


    def test_move_no_destination(self):
        try :
            response = self.c.post(
            '/filebrowser/home/opt/',
                {
                    
                    'option': 'entry-options-move',
                    'target':'.',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 400)
            self.assertContains(response, "Missing argument 'destination'", status_code=400)
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_move_not_existing(self):
        try :
            response = self.c.post(
            '/filebrowser/home/TPE/Dir_test/opt/',
                {
                    'destination':'../../../',
                    'option': 'entry-options-move',
                    'target':'tests.txt',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "Impossible to move 'tests.txt' inside '../../../': this directory does not exists.")
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_move_already_exist(self):
        try :
            response = self.c.post(
            '/filebrowser/home/opt/',
                {
                    'destination':'/',
                    'option': 'entry-options-move',
                    'target':'extract_test',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "Impossible to move 'extract_test' inside '/': name 'extract_test' already exists in destination.")
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
            

    def test_move_not_in_directory(self):
        try :
            response = self.c.post(
            '/filebrowser/home/TPE/Dir_test/opt/',
                {
                    'destination':'/../truc',
                    'option': 'entry-options-move',
                    'target':'tests.txt',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "Impossible to move 'tests.txt' inside '/../truc': destination isn't a directory.")
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise

    def test_move_folder(self):
        try :
            response = self.c.post(
            '/filebrowser/home/TPE/opt/',
                {
                    'destination':'../',
                    'option': 'entry-options-move',
                    'target':'Dir_test',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "'Dir_test' successfully moved to '../' !")
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_move_file(self):
        try :
            response = self.c.post(
            '/filebrowser/home/TPE/opt/',
                {
                    'destination':'../',
                    'option': 'entry-options-move',
                    'target':'function001.pl',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "'function001.pl' successfully moved to '../' !")
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise

    def test_move_inside_itself(self):
        try :
            response = self.c.post(
            '/filebrowser/home/opt/',
                {
                    'destination':'extract_test',
                    'option': 'entry-options-move',
                    'target':'extract_test',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "Impossible to move 'extract_test' inside 'extract_test': Can't move a directory inside itself.")
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
