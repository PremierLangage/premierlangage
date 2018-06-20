#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  test_utils.py
#  
#  

import json
from django.test import TestCase, SimpleTestCase, Client
from sandbox.models import Sandbox
from playexo.utils import sum_key_value
from loader.loader import load_file
from django.contrib.auth.models import User
from filebrowser.models import Directory


from serverpl.settings import AUTHENTICATION_BACKENDS

class ExoTestCase(TestCase):
    
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345')
        self.dir = Directory.objects.create(name='plbank', owner=self.user)
        self.pl = load_file(self.dir, 'plbank/python/function/carre.pl')[0]
        self.sandbox = Sandbox.objects.create(url="http://127.0.0.1:8000/sandbox/?action=execute", 
            name="sanbdboxlocal", priority=200)
        
    

    def test_load_exo_carre(self):
        c = Client()
        c.force_login(self.user,backend=AUTHENTICATION_BACKENDS[0])
        response = c.get('/filebrowser/apply_option/?option_h=edit_pl&name_h=carre.pl&relative_h=./plbank/python/function&type_h=entry',
            {}, follow=True
        )
        
        self.assertEqual(response.status_code,200)
    
    
    def test_reponse_carre_false(self):
        c = Client()
        response_eleve = "def carre(a):\n\treturn a"
        c.force_login(self.user, backend=AUTHENTICATION_BACKENDS[0])
        response = c.get('/filebrowser/apply_option/?option_h=edit_pl&name_h=carre.pl&relative_h=./plbank/python/function&type_h=entry',
            {}, follow=True
        )
        response2 = c.post(
            '/filebrowser/preview_pl/',
            json.dumps({"requested_action":"submit","inputs": {"answer":response_eleve}}),
            content_type='text/json',follow=True
        )
        
        print(response.content)
        

        self.assertContains(response,"Dominique Revuz")
        self.assertContains(response,"<h2>Une fonction carre</h2>\n\n<p>Ecrivez une fonction <strong>carre</strong> qui retourne le")
        
        self.assertContains(response2, "Test \\u00c9chou\\u00e9")
        self.assertContains(response2, "r\\u00e9ussi(s):" , count=1)
        self.assertContains(response2, "rat\\u00e9s:", count=1)
        self.assertContains(response2, "***Tests \\u00e9chou\\u00e9s***", count=1)

    def test_reponse_carre_error(self):
        c = Client()
        response_eleve = "df carre(a):\n\treturn a"
        c.force_login(self.user, backend=AUTHENTICATION_BACKENDS[0])
        response = c.get('/filebrowser/apply_option/?option_h=edit_pl&name_h=carre.pl&relative_h=./plbank/python/function&type_h=entry',
            {}, follow=True
        )
        response2 = c.post('/filebrowser/preview_pl/',
        json.dumps({"requested_action":"submit", "inputs": {"answer":response_eleve}}),
            content_type='text/json', follow=True
        )
        
        self.assertContains(response,"Dominique Revuz")
        self.assertContains(response,"<h2>Une fonction carre</h2>\n\n<p>Ecrivez une fonction <strong>carre</strong> qui retourne le")
        
        
        self.assertContains(response2, "Il y a des erreurs dans votre programme.", count=1)
        self.assertContains(response2, "Erreur dans votre programme:", count=1)

    def test_reponse_carre_true(self):
        c = Client()
        response_eleve = "def carre(a):\n\treturn a*a"
        c.force_login(self.user, backend=AUTHENTICATION_BACKENDS[0])
        response = c.get('/filebrowser/apply_option/?option_h=edit_pl&name_h=carre.pl&relative_h=./plbank/python/function&type_h=entry',
            {}, follow=True
        )
        response2 = c.post('/filebrowser/preview_pl/',
            json.dumps({"requested_action":"submit", "inputs": {"answer":response_eleve}}),
            content_type='text/json', follow=True
        )
        
        self.assertContains(response,"Dominique Revuz")
        self.assertContains(response,"<h2>Une fonction carre</h2>\n\n<p>Ecrivez une fonction <strong>carre</strong> qui retourne le")
        
        
        self.assertContains(response2, "Test R\\u00e9ussi")
        self.assertNotContains(response2, "Test \\u00c9chou\\u00e9")
        self.assertContains(response2, "r\\u00e9ussi(s) and ", count=1)
        self.assertContains(response2, "rat\\u00e9s sur ", count=1)
        self.assertContains(response2, "***Tests valid\\u00e9s***", count=1)

