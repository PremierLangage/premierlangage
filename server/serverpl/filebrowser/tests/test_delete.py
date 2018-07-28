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
        self.user = User.objects.create_user(username='user', password='12345', id=100)
        self.c = Client()
        self.c.force_login(self.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        rel = join(settings.FILEBROWSER_ROOT, '100/')
        if isdir(rel):
            shutil.rmtree(join(rel))
        self.folder = Directory.objects.get(name='100', owner=self.user)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder.root)

    
    def test_delete_method_not_allowed(self):
        response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                'option': 'entry-options-delete',
                'target':'.',
                   
            },
            follow=True
        )
    
    def test_delete_file(self):
        try:
            response = self.c.get(
            '/filebrowser/home/TPE/opt/?option=entry-options-delete&target=function001.pl',

                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT,'100/TPE')
            self.assertFalse(isfile(join(rel, 'function001.pl')))
            self.assertContains(response, "'function001.pl' successfully deleted !")
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_delete_folder(self):
        try:
            response = self.c.get(
            '/filebrowser/home/TPE/opt/?option=entry-options-delete&target=Dir_test',

                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT,'100/TPE')
            self.assertFalse(isdir(join(rel, 'Dir_test')))
            self.assertContains(response, "'Dir_test' successfully deleted !")

        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
       
  
    
   
