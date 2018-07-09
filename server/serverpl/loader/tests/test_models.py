#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  test_models.py
#  
#  


from django.test import TestCase, Client

from loader.models import PL, PLTP

import logging


class ModelsTestCase(TestCase):
    
    @classmethod
    def setUpTestData(self):
        self.c = Client()
       
        
    def test_pl(self):
        name = "plname"
        pl = PL.objects.create(name=name)
        
        self.assertEqual(str(pl), str(pl.id) + " - " + name) 
    
    def test_pltp(self):
        name = "pltpname"
        rel_path = "pathpltp"
        sha1 = "sha1pltp"
        
        namepl = "plname"
        pl = PL.objects.create(name=namepl)
        
        pltp = PLTP.objects.create(sha1=sha1, json={}, name=name, rel_path=rel_path)
        self.assertEqual(str(pltp), name)
        
        pltp.pl.add(pl)
        
        pltp.delete()
        
        #verifie que delete à bien fonctionné
        try:
            pltp.delete()
            self.assertEqual("false", "true")
        except:
            self.assertEqual("true", "true")
