# -*- coding: utf-8 -*-

import os
import shutil
import uuid

from django.conf import settings
from django.contrib.auth.models import User
from django.test import TestCase, override_settings

from filebrowser.models import Directory
from loader.exceptions import FileNotFound, SyntaxErrorPL
from loader.parsers import pltp


FAKE_FB_ROOT = os.path.join("/tmp", str(uuid.uuid4()))
FAKE_PLTP = os.path.join(settings.APPS_DIR, 'loader/tests/fake_pltp')



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class PlParserTestCase(TestCase):
    """ Test functions of parsers/pl.py """
    
    
    @classmethod
    def setUpTestData(cls):
        if os.path.isdir(FAKE_FB_ROOT):
            shutil.rmtree(FAKE_FB_ROOT)
        cls.user = User.objects.create_user(username='user', password='12345')
        cls.dir = Directory.objects.create(name='dir1', owner=cls.user)
        cls.dir2 = Directory.objects.create(name='dir2', owner=cls.user)
        shutil.rmtree(cls.dir.root)
        shutil.copytree(FAKE_PLTP, cls.dir.root)
        
        with open(os.path.join(FAKE_FB_ROOT, 'dir2', 'fake.pl'), "w") as f:
            f.write("a=a")
    
    
    @classmethod
    def tearDownClass(cls):
        if os.path.isdir(FAKE_FB_ROOT):
            shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def test_get_parser(self):
        self.assertEqual({
            'ext':    ['.pltp'],
            'parser': pltp.Parser,
            'type':   'pltp'
        }, pltp.get_parser())
    
    
    def test_parse(self):
        dic, _ = pltp.Parser(self.dir, "full.pltp").parse()
        self.assertIn(
            {'id':'pl0', 'line': '@ /fake.pl\n', 'directory_name': 'dir2', 'lineno': 33, 'path': 'fake.pl'},
            dic["__pl"])
    
    
    def test_parse_errors(self):
        with self.assertRaises(SyntaxErrorPL):
            pltp.Parser(self.dir, "syntax_error.pltp").parse()
        with self.assertRaises(FileNotFound):
            pltp.Parser(self.dir, "no_file.pltp").parse()
        with self.assertRaises(SyntaxErrorPL):
            pltp.Parser(self.dir, "invalid_file.pltp").parse()
