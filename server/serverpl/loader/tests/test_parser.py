# -*- coding: utf-8 -*-

import os
import shutil

from django.conf import settings
from django.contrib.auth.models import User
from django.test import TestCase, override_settings
from mock import patch

from filebrowser.models import Directory
from loader import parser
from loader.exceptions import DirectoryNotFound, FileNotFound, MissingKey, UnknownExtension
from .utils import copy_parser


FAKE_FB_ROOT = os.path.join(settings.BASE_DIR, 'loader/tests/tmp')
FAKE_PL = os.path.join(settings.BASE_DIR, 'loader/tests/fake_pl')
FAKE_PARSER = os.path.join(settings.BASE_DIR, 'loader/tests/fake_parsers/')



@patch('loader.parser.logger')
@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
@override_settings(PARSERS_ROOT=FAKE_PARSER)
@override_settings(PARSERS_MODULE="loader.tests.fake_parsers")
class ParserTestCase(TestCase):
    """ Test functions of loader.parser """
    
    
    @classmethod
    @override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
    def setUpTestData(cls):
        if os.path.isdir(FAKE_FB_ROOT):
            shutil.rmtree(FAKE_FB_ROOT)
        
        copy_parser()
        cls.user = User.objects.create_user(username='user', password='12345')
        cls.dir = Directory.objects.create(name='dir1', owner=cls.user)
        shutil.rmtree(cls.dir.root)
        shutil.copytree(FAKE_PL, cls.dir.root)
    
    
    @classmethod
    def tearDownClass(cls):
        if os.path.isdir(FAKE_FB_ROOT):
            shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def test_get_parsers(self, mock_logger):
        parsers = parser.get_parsers()
        
        self.assertTrue('.pltp' in parsers)
        self.assertTrue('.pl' in parsers)
        
        self.assertEqual(len(mock_logger.error.call_args_list), 5)
        # Check for no duplicate
        self.assertNotEqual(mock_logger.error.call_args_list[0],
                            mock_logger.error.call_args_list[1])
        self.assertNotEqual(mock_logger.error.call_args_list[0],
                            mock_logger.error.call_args_list[2])
        self.assertNotEqual(mock_logger.error.call_args_list[1],
                            mock_logger.error.call_args_list[2])
    
    
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
    
    
    def test_parse_file(self, mock_logger):
        parser.parse_file(self.dir, "working.pl")
        parser.parse_file(self.dir, "extend.pl")
        with self.assertRaises(TypeError):
            parser.parse_file(self.dir, "test_not_string_key.pl")
        with self.assertRaises(MissingKey):
            parser.parse_file(self.dir, "test_missing_key.pltp")
        with self.assertRaises(MissingKey):
            parser.parse_file(self.dir, "test_no_grader.pl")
        with self.assertRaises(MissingKey):
            parser.parse_file(self.dir, "test_no_builder.pl")
        # testing .pl concatenation
        with self.assertRaises(MissingKey):
            parser.parse_file(self.dir, "test_missing_key")
        with self.assertRaises(UnknownExtension):
            parser.parse_file(self.dir, "pl.unknown")
    
    
    def test_process_extends(self, mock_logger):
        parser.parse_file(self.dir, "extend.pl")
        with self.assertRaises(UnknownExtension):
            parser.parse_file(self.dir, "extend_unknown.pl")
        
        dic = {
            '__rel_path': "unknown.pl",
            '__extends' : [{
                'path'          : 'unknown.pl',
                'line'          : "0",
                'lineno'        : 0,
                'directory_name': self.dir.name
            }]
        }
        with self.assertRaises(FileNotFound):
            parser.process_extends(dic)
        
        dir_name = os.path.join(FAKE_FB_ROOT, "dir2")
        if os.path.isdir(dir_name):
            shutil.rmtree(dir_name)
        dir2 = Directory.objects.create(name='dir2', owner=self.user)
        shutil.rmtree(dir2.root)
        shutil.copytree(FAKE_PL, dir2.root)
        dir2.delete()
        
        with self.assertRaises(DirectoryNotFound):
            parser.parse_file(dir2, "extend_no_dir.pl")
