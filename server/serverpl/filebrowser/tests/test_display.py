#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_display.py
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
class DisplayTestCase(TestCase):
    
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345')
        self.c = Client()
        self.c.force_login(self.user,backend=settings.AUTHENTICATION_BACKENDS[0])
        if isdir(join(FAKE_FB_ROOT,'dir')):
            shutil.rmtree(join(FAKE_FB_ROOT,'dir'))
        self.folder = Directory.objects.create(name='dir', owner=self.user)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder.root)
       
    
    def test_display_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/apply_option/post',
            follow=True
        )
        self.assertEqual(response.status_code, 405)
    
    
    def test_dislay_file(self):
        try:
            response = self.c.get(
                '/filebrowser/apply_option/',
                {
                        'option_h' : 'display',
                        'name_h' : 'function001.pl',
                        'relative_h' : './dir/TPE',
                        'type_h' : 'entry'
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT,'./dir/TPE')
            self.assertTrue(isfile(join(rel, 'function001.pl')))
            
            self.assertContains(response,"name= Une fonction bob\n")
            self.assertContains(response,"Ecrire une fonction **bob** qui retourne la valeur")
            self.assertContains(response,"&gt;&gt;&gt; bob()==1238\n")
            self.assertContains(response,"def bob():\n")
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
