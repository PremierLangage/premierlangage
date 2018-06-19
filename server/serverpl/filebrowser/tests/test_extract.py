#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_extract.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import os, shutil, sys, json, time, zipfile, tarfile

from os.path import join, isdir, isfile
from zipfile import is_zipfile, ZipFile
from tarfile import is_tarfile

from mock import patch

from django.test import TestCase, Client, override_settings
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.messages import constants as messages

from filebrowser.models import Directory


FAKE_FB_ROOT = join(settings.BASE_DIR,'filebrowser/tests/ressources')

@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class ExtractTestCase(TestCase):
    
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345')
        self.c = Client()
        self.c.force_login(self.user,backend=settings.AUTHENTICATION_BACKENDS[0])
        if isdir(join(FAKE_FB_ROOT,'dir')):
            shutil.rmtree(join(FAKE_FB_ROOT,'dir'))
        self.folder = Directory.objects.create(name='dir', owner=self.user)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder.root)
    

    def test_extract_method_not_allowed(self):
        response = self.c.post(
            '/filebrowser/apply_option/',
            follow=True
        )
        self.assertEqual(response.status_code, 405)
        
        
    def test_is_zipfile(self):
        rel = join(settings.FILEBROWSER_ROOT,'./dir/extract_test')
        self.assertTrue(is_zipfile(join(rel, 'application.zip')))
        
    
    def test_zipfile(self):
        rel = join(settings.FILEBROWSER_ROOT,'./dir/extract_test')
        zfile = ZipFile(join(rel, 'application.zip'))
        self.assertEqual(zfile.testzip(), None)
        zfile.close()
        

    def test_open_zipfile(self):
        try:
            rel = join(settings.FILEBROWSER_ROOT,'./dir/extract_test')
            zfile = ZipFile(join(rel, 'application2.zip'))
            tab = list(zfile.namelist())

            response = self.c.get(
                '/filebrowser/apply_option/',
                {
                        'option_h' : 'extract',
                        'name_h' : 'application2.zip',
                        'relative_h' : './dir/extract_test',
                        'type_h' : 'entry',
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            
            rel = join(rel, 'application2')
            for i in range(0, len(tab)):
                if(tab[i][-1] == '/'):
                    self.assertTrue(isdir(join(rel, tab[i][:-1])))
                else:
                    self.assertTrue(isfile(join(rel, tab[i])))
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
        
    def test_is_tarfile(self):
        response = self.c.get(
            '/filebrowser/apply_option/',
            {
                    'option_h' : 'extract',
                    'name_h' : 'function001.pl',
                    'relative_h' : './dir/TPE',
                    'type_h' : 'entry',
                },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT,'./filter/extract_test')
        self.assertTrue(is_tarfile(join(rel, 'application.tar')))
      
      
    def test_open_tarfile(self):
        response = self.c.get(
            '/filebrowser/apply_option/',
            {
                    'option_h' : 'extract',
                    'name_h' : 'function001.pl',
                    'relative_h' : './dir/TPE',
                    'type_h' : 'entry',
                },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT,'./filter/extract_test')
        tar = tarfile.open(join(rel, "application.tar"))
        tab = tar.getnames()

        tar.extractall(rel)
        tar.close()
        
        for i in range(0, len(tab)):
            if(isdir(tab[i])):
                self.assertTrue(isdir(join(rel, tab[i])))
            elif(isfile(tab[i])):
                self.assertTrue(isfile(join(rel, tab[i])))
        

    def test_is_targzfile(self):
        response = self.c.get(
            '/filebrowser/apply_option/',
            {
                    'option_h' : 'extract',
                    'name_h' : 'function001.pl',
                    'relative_h' : './dir/TPE',
                    'type_h' : 'entry',
                },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT,'./filter/extract_test')
        self.assertTrue(is_tarfile(join(rel, 'application.tar.gz')))
        
        
    def test_is_tarxzfile(self):
        response = self.c.get(
            '/filebrowser/apply_option/',
            {
                    'option_h' : 'extract',
                    'name_h' : 'function001.pl',
                    'relative_h' : './dir/TPE',
                    'type_h' : 'entry',
                },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT,'./filter/extract_test')
        self.assertTrue(is_tarfile(join(rel, 'application.tar.xz')))
        
        
    def test_open_targzfile(self):
        response = self.c.get(
            '/filebrowser/apply_option/',
            {
                    'option_h' : 'extract',
                    'name_h' : 'function001.pl',
                    'relative_h' : './dir/TPE',
                    'type_h' : 'entry',
                },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT,'./filter/extract_test')
        tar = tarfile.open(join(rel, "application.tar.gz"))
        tab = tar.getnames()

        tar.extractall(rel)
        tar.close()
        
        for i in range(0, len(tab)):
            if(isdir(tab[i])):
                self.assertTrue(isdir(join(rel, tab[i])))
            elif(isfile(tab[i])):
                self.assertTrue(isfile(join(rel, tab[i])))
                
                
    def test_open_tarxzfile(self):
        response = self.c.get(
            '/filebrowser/apply_option/',
            {
                    'option_h' : 'extract',
                    'name_h' : 'function001.pl',
                    'relative_h' : './dir/TPE',
                    'type_h' : 'entry',
                },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        rel = join(settings.FILEBROWSER_ROOT,'./filter/extract_test')
        tar = tarfile.open(join(rel, "application.tar.xz"))
        tab = tar.getnames()

        tar.extractall(rel)
        tar.close()
        
        for i in range(0, len(tab)):
            if(isdir(tab[i])):
                self.assertTrue(isdir(join(rel, tab[i])))
            elif(isfile(tab[i])):
                self.assertTrue(isfile(join(rel, tab[i])))
