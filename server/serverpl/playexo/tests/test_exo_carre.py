#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  test_utils.py
#  
#  

import json, shutil
from os.path import join, isdir

from django.test import TestCase, Client, override_settings
from django.conf import settings
from sandbox.models import Sandbox
from loader.loader import load_file
from django.contrib.auth.models import User
from filebrowser.models import Directory 

from serverpl.settings import AUTHENTICATION_BACKENDS


FAKE_FB_ROOT = join(settings.BASE_DIR,'filebrowser/tests/ressources')

class ExoTestCase(TestCase):
    
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345', id=100)
        self.sandbox = Sandbox.objects.create(url="http://127.0.0.1:8000/sandbox/?action=execute", 
            name="sanbdboxlocal", priority=200)
        self.c = Client()
        self.c.force_login(self.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        rel = join(settings.FILEBROWSER_ROOT, '100/')
        if isdir(rel):
            shutil.rmtree(join(rel))
        self.folder = Directory.objects.get(name='100', owner=self.user)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder.root)
        
    

    def test_load_exo_carre(self):
        response = self.c.get(
            '/filebrowser/home/opt/?option=entry-direct-edit_pl&target=carre.pl',
                follow=True
            )
        
        self.assertEqual(response.status_code,200)
    
    
    def test_reponse_carre_false(self):
        response_eleve = "def carre(a):\n\treturn a"
       
        response = self.c.get(
            '/filebrowser/home/opt/?option=entry-direct-edit_pl&target=carre.pl',
                follow=True
            )
        
        self.assertEqual(response.status_code,200)
    
        response2 = self.c.post(
            '/filebrowser/preview_pl/',
            json.dumps({"requested_action":"submit","inputs": {"answer":response_eleve}}),
            content_type='text/json',follow=True
        )
        
        self.assertContains(response,"# Copyright 2016 Dominique Revuz")
        self.assertContains(response,"## Une fonction carre ##\nEcrivez une fonction **carre**")
        
        self.assertContains(response2, "Test \\u00c9chou\\u00e9")
        self.assertContains(response2, "r\\u00e9ussi(s):" , count=1)
        self.assertContains(response2, "rat\\u00e9s:", count=1)
        self.assertContains(response2, "***Tests \\u00e9chou\\u00e9s***", count=1)


    def test_reponse_carre_error(self):
        response_eleve = "df carre(a):\n\treturn a"
        response = self.c.get(
            '/filebrowser/home/opt/?option=entry-direct-edit_pl&target=carre.pl',
                follow=True
            )
        
        self.assertEqual(response.status_code,200)
        response2 = self.c.post('/filebrowser/preview_pl/',
        json.dumps({"requested_action":"submit", "inputs": {"answer":response_eleve}}),
            content_type='text/json', follow=True
        )
        
        self.assertContains(response,"Dominique Revuz")
        self.assertContains(response,"Ecrivez une fonction **carre** qui retourne le")
        
        
        self.assertContains(response2, "Il y a des erreurs dans votre programme.", count=1)
        self.assertContains(response2, "Erreur dans votre programme:", count=1)


    def test_reponse_carre_true(self):
        response_eleve = "def carre(a):\n\treturn a*a"
        
        response = self.c.get(
            '/filebrowser/home/opt/?option=entry-direct-edit_pl&target=carre.pl',
                follow=True
            )
        
        self.assertEqual(response.status_code,200)
        response2 = self.c.post('/filebrowser/preview_pl/',
            json.dumps({"requested_action":"submit", "inputs": {"answer":response_eleve}}),
            content_type='text/json', follow=True
        )
        
        self.assertContains(response,"Dominique Revuz")
        self.assertContains(response,"Ecrivez une fonction **carre** qui retourne le")
        
        
        self.assertContains(response2, "Test R\\u00e9ussi")
        self.assertNotContains(response2, "Test \\u00c9chou\\u00e9")
        self.assertContains(response2, "r\\u00e9ussi(s) and ", count=1)
        self.assertContains(response2, "rat\\u00e9s sur ", count=1)
        self.assertContains(response2, "***Tests valid\\u00e9s***", count=1)

