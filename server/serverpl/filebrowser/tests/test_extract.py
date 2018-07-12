#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_extract.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import shutil, tarfile

from os.path import join, isdir, isfile
from zipfile import is_zipfile, ZipFile
from tarfile import is_tarfile

from django.test import TestCase, Client, override_settings
from django.conf import settings
from django.contrib.auth.models import User

from filebrowser.models import Directory


FAKE_FB_ROOT = join(settings.BASE_DIR,'filebrowser/tests/ressources')

@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class ExtractTestCase(TestCase):
    
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


    def test_extract_method_not_allowed(self):
        response = self.c.post(
                '/filebrowser/home/opt/',
                {
                    'option': 'entry-direct-extract',
                    'target':'.dirtmp.zip',
                },
                follow=True
            )
        self.assertEqual(response.status_code, 405)
    
        
    def test_is_zipfile(self):
        rel = join(settings.FILEBROWSER_ROOT,'100/extract_test')
        self.assertTrue(is_zipfile(join(rel, 'application.zip')))
        
    
    def test_zipfile(self):
        rel = join(settings.FILEBROWSER_ROOT,'100/extract_test')
        zfile = ZipFile(join(rel, 'application.zip'))
        self.assertEqual(zfile.testzip(), None)
        zfile.close()
        

    def test_open_zipfile(self):
        try:
            rel = join(settings.FILEBROWSER_ROOT,'100/extract_test')
            zfile = ZipFile(join(rel, 'application2.zip'))
            tab = list(zfile.namelist())

            response = self.c.get(
                '/filebrowser/home/extract_test/opt/',
                {'option': 'entry-direct-extract', 'target': 'application2.zip'},
                follow=True
            )
            
            self.assertEqual(response.status_code, 200)
            zfile.close()
            
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
        rel = join(settings.FILEBROWSER_ROOT,'100/extract_test')
        self.assertTrue(is_tarfile(join(rel, 'application.tar')))
      
      
    def test_open_tarfile(self):
        try:
            rel = join(settings.FILEBROWSER_ROOT,'100/extract_test')
            tar = tarfile.open(join(rel, "application.tar"))
            tab = tar.getnames()
            
            response = self.c.get(
                '/filebrowser/home/extract_test/opt/',
                {'option': 'entry-direct-extract', 'target': 'application.tar'},
                follow=True
            )
        
            self.assertEqual(response.status_code, 200)
            tar.close()
            
            rel = join(rel, 'application')
            for i in range(0, len(tab)):
                if(isdir(tab[i])):
                    self.assertTrue(isdir(join(rel, tab[i])))
                elif(isfile(tab[i])):
                    self.assertTrue(isfile(join(rel, tab[i])))
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:") 
                [print(i.level,':',i.message) for i in m]
            raise
        

    def test_is_targzfile(self):
        rel = join(settings.FILEBROWSER_ROOT,'100/extract_test')
        self.assertTrue(is_tarfile(join(rel, 'application.tar.gz')))
        
        
    def test_is_tarxzfile(self):
        rel = join(settings.FILEBROWSER_ROOT,'100/extract_test')
        self.assertTrue(is_tarfile(join(rel, 'application.tar.xz')))
        
        
    def test_open_targzfile(self):
        try:
            rel = join(settings.FILEBROWSER_ROOT,'100/extract_test')
            tar = tarfile.open(join(rel, "application.tar.gz"))
            tab = tar.getnames()
            
            response = self.c.get(
                '/filebrowser/home/extract_test/opt/',
                {'option': 'entry-direct-extract', 'target': 'application.tar.gz'},
                follow=True
            )
           
            self.assertEqual(response.status_code, 200)
            tar.close()
            
            rel = join(rel, 'application')
            for i in range(0, len(tab)):
                if(isdir(tab[i])):
                    self.assertTrue(isdir(join(rel, tab[i])))
                elif(isfile(tab[i])):
                    self.assertTrue(isfile(join(rel, tab[i])))
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:") 
                [print(i.level,':',i.message) for i in m]
            raise
                
                
    def test_open_tarxzfile(self):
        try:
            rel = join(settings.FILEBROWSER_ROOT,'100/extract_test')
            tar = tarfile.open(join(rel, "application.tar.xz"))
            tab = tar.getnames()
            
            response = self.c.get(
                '/filebrowser/home/extract_test/opt/',
                {'option': 'entry-direct-extract', 'target': 'application.tar.xz'},
                follow=True
            )
           
            self.assertEqual(response.status_code, 200)
            tar.close()
            
            rel = join(rel, 'application')
            for i in range(0, len(tab)):
                if(isdir(tab[i])):
                    self.assertTrue(isdir(join(rel, tab[i])))
                elif(isfile(tab[i])):
                    self.assertTrue(isfile(join(rel, tab[i])))
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:") 
                [print(i.level,':',i.message) for i in m]
            raise
