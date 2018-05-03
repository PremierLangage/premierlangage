#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  tests.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import os, tempfile, time

from os.path import basename

from django.test import SimpleTestCase, Client
from serverpl.settings import PROJECT_DIR



DOC_DIR = PROJECT_DIR + "/../documentation/templates/documentation/doc"


class DocumentationTestCase(SimpleTestCase):
    
    def test_view(self):
        self.assertTrue(os.path.isdir(DOC_DIR))
        
        c = Client()
        # Check if index can be loaded
        with self.assertTemplateUsed("documentation/doc/index.html"):
            response = c.get('/documentation/', {})
        self.assertEqual(response.status_code, 200)
        
        # Check if any other page can be loaded
        with tempfile.TemporaryDirectory(prefix=DOC_DIR+'/') as tmp_dir:
            with open(tmp_dir+'/index.html', 'w+') as f:
                print("<html> </html>", file=f)
            
            with self.assertTemplateUsed('documentation/doc/'+basename(tmp_dir)+'/index.html'):
                response = c.get('/documentation/'+basename(tmp_dir)+'/')
            
            self.assertEqual(response.status_code, 200)
