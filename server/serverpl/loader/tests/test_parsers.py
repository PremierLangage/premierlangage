#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_parsers.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import os

from mock import patch
from loader import parser

from django.test import TestCase
from django.contrib.auth.models import User
from filebrowser.models import Directory
from loader.exceptions import UnknownExtension
from serverpl.settings import BASE_DIR


@patch('loader.parser.PARSERS_ROOT', os.path.join(BASE_DIR,'loader/tests/fake_parsers/'))
@patch('loader.parser.PARSERS_MODULE', "loader.tests.fake_parsers")
@patch('loader.parser.logger')
class ParsersTestCase(TestCase):
    """ Test functions of loader.parser modules but parse_file() and process_extends(). """
    
    @classmethod
    def setUpTestData(self):
        user = User.objects.create_user(username='user', password='12345')
        self.dir = Directory.objects.create(name='dir1', owner=user)
    
    
    def test_get_parsers(self, mock_logger):
        parsers = parser.get_parsers()
        
        self.assertTrue('.pltp' in parsers)
        self.assertTrue('.pl' in parsers)

        self.assertEqual(len(mock_logger.error.call_args_list), 3)
        # Check for no duplicate
        self.assertNotEqual(mock_logger.error.call_args_list[0], mock_logger.error.call_args_list[1])
        self.assertNotEqual(mock_logger.error.call_args_list[0], mock_logger.error.call_args_list[2])
        self.assertNotEqual(mock_logger.error.call_args_list[1], mock_logger.error.call_args_list[2])
    
    
    def test_get_type(self, mock_logger):
        
        # Correct paths
        path1 = "relative/to/pl.pl"
        path2 = "/absolute/to/pl.pl"
        path3 = "to/pltp.pltp"
        path4 = "to/pl_default_ext"
        # Raise UnknownExtension
        path5 = "to/test.unknown"
       
        self.assertEqual(parser.get_type(self.dir, path1), "pl")
        self.assertEqual(parser.get_type(self.dir, path2), "pl")
        self.assertEqual(parser.get_type(self.dir, path3), "pltp")
        self.assertEqual(parser.get_type(self.dir, path4), "pl")
        with self.assertRaises(UnknownExtension):
            parser.get_type(self.dir, path5)

