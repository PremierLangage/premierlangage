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
class MoveTestCase(TestCase):

    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345')
        self.c = Client()
        self.c.force_login(self.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        if isdir(join(FAKE_FB_ROOT, 'dir')):
            shutil.rmtree(join(FAKE_FB_ROOT, 'dir'))
        self.folder = Directory.objects.create(name='dir', owner=self.user)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder.root)


    def test_move_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/apply_option/post',
            follow=True
        )
        self.assertEqual(response.status_code, 405)


    def test_move_file(self):
        response = self.c.post(
            '/filebrowser/apply_option/post',
            {
                'option_h': 'move',
                'name_h': 'function001.pl',
                'relative_h': './dir/TPE',
                'type_h': 'entry',
                'destination': '..'
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT, 'dir/')
        self.assertTrue(isfile(join(rel, 'function001.pl')))
        rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE')
        self.assertFalse(isfile(join(rel, 'function001.pl')))


    def test_move_file_no_destination(self):
        response = self.c.post(
            '/filebrowser/apply_option/post',
            {
                'option_h': 'move',
                'name_h': 'function001.pl',
                'relative_h': './dir/TPE',
                'type_h': 'entry',
            },
            follow=True
        )
        self.assertEqual(response.status_code, 400)


    def test_move_not_existing_file(self):
        response = self.c.post(
            '/filebrowser/apply_option/post',
            {
                'option_h': 'move',
                'name_h': 'nofile',
                'relative_h': './dir/TPE',
                'type_h': 'entry',
                'destination': '..'
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        m = list(response.context['messages'])
        self.assertEqual(len(m), 1)
        self.assertEqual(m[0].level, messages.ERROR)


    def test_move_file_destination_error(self):
        response = self.c.post(
            '/filebrowser/apply_option/post',
            {
                'option_h': 'move',
                'name_h': 'function001.pl',
                'relative_h': './dir/TPE',
                'type_h': 'entry',
                'destination': 'error'
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        m = list(response.context['messages'])
        self.assertEqual(len(m), 1)
        self.assertEqual(m[0].level, messages.ERROR)
