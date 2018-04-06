#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_parsers.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import unittest, os, shutil, sys

from mock import patch

from loader import parser
from serverpl.settings import PROJECT_DIR


@patch('loader.parser.PARSERS_ROOT', os.path.join(PROJECT_DIR,'../loader/tests/fake_parsers/'))
@patch('loader.parser.PARSERS_MODULE', "loader.tests.fake_parsers")
@patch('loader.parser.logger')
class ParsersTestCase(unittest.TestCase):
    """ Test functions of loader.parser modules. """
    
    def test_get_parsers(self, mock_logger):
        parsers = parser.get_parsers()
        
        self.assertTrue('.pltp' in parsers)
        self.assertTrue('.pl' in parsers)

        self.assertEqual(len(mock_logger.error.call_args_list), 3)
        # Check for no duplicate
        self.assertNotEqual(mock_logger.error.call_args_list[0], mock_logger.error.call_args_list[1])
        self.assertNotEqual(mock_logger.error.call_args_list[0], mock_logger.error.call_args_list[2])
        self.assertNotEqual(mock_logger.error.call_args_list[1], mock_logger.error.call_args_list[2])
            
