#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_filter.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import os, shutil

from os.path import join, isdir

from django.test import TestCase
from django.conf import settings


TEST_DIR = join(settings.BASE_DIR, "filebrowser/tests/ressources/mk_missing_dirs")

class UtilsTestCase(TestCase):
    
    def setUp(self):
        if not isdir(TEST_DIR):
            os.mkdir(TEST_DIR)

    def tearDown(self):
        if isdir(TEST_DIR):
            shutil.rmtree(TEST_DIR)
    
    
   
