# -*- coding: utf-8 -*-

import os
import shutil

from django.conf import settings
from django.contrib.auth.models import User
from django.test import TestCase, override_settings

from filebrowser.models import Directory
from loader.parsers import pl


FAKE_FB_ROOT = os.path.join(settings.BASE_DIR, 'loader/tests/tmp')



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class PlParserTestCase(TestCase):
    """ Test functions of parsers/pl.py """
    
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='user', password='12345')
        dir_name = os.path.join(FAKE_FB_ROOT, "dir1")
        if os.path.isdir(dir_name):
            shutil.rmtree(dir_name)
        cls.dir = Directory.objects.create(name='dir1', owner=cls.user)
        shutil.copytree(os.path.join(FAKE_FB_ROOT, '../fake_pl'), cls.dir.root)
    
    
    def test_init_parser(self):
        pl.Parser(self.dir, "working.pl")
        with self.assertRaises(FileNotFoundError):
            pl.Parser(self.dir, "unknown.pl")
    
    
    def test_get_parser(self):
        self.assertEqual({
            'ext'   : ['.pl'],
            'parser': pl.Parser,
            'type'  : 'pl'
        }, pl.get_parser())
    
    
    def test_parse(self):
        dic, war = pl.Parser(self.dir, "full.pl").parse()
        # warning
        self.assertIn("Key 'e.f.h' overwritten at line", war[0])
        # = += +
        self.assertEqual(dic['title'], 'testtesttest')
        # ==
        self.assertEqual(dic['text'], 'tests')
        # extends
        self.assertIn({
            'directory_name': 'dir1', 'lineno': 10, 'line': 'extends=working.pl\n',
            'path'          : 'working.pl'
        }, dic["__extends"])
        # =@ +=@
        with open(os.path.join(FAKE_FB_ROOT, "dir1/working.pl")) as f:
            self.assertEqual(len(dic['test']), 2*len(f.read()))
        # sub keys
        self.assertEqual('12', dic['e']['f']['g'])
        # % %=
        self.assertEqual({'a': 1, 'b' : 2}, dic['e']['f']['i'])
        self.assertEqual({'a': 1, 'b' : 2}, dic['a'])
        self.assertEqual({'a': 1, 'b' : 2}, dic['b'])
