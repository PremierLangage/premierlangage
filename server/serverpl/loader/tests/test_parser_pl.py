# -*- coding: utf-8 -*-

import os
import shutil

from django.conf import settings
from django.contrib.auth.models import User
from django.test import TestCase, override_settings

from filebrowser.models import Directory
from loader.exceptions import FileNotFound, SemanticError, SyntaxErrorPL
from loader.parsers import pl


FAKE_FB_ROOT = os.path.join(settings.BASE_DIR, 'loader/tests/tmp')



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
        shutil.copytree(os.path.join(FAKE_FB_ROOT, '../fake_pl'), cls.dir.root)
        os.makedirs(cls.dir2.root)
        
        with open(os.path.join(FAKE_FB_ROOT, 'dir2', 'fake.pl'), "w") as f:
            f.write("a=a")
    
    
    @classmethod
    def tearDownClass(cls):
        if os.path.isdir(FAKE_FB_ROOT):
            shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
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
        self.assertIn("Key 'e.f.h' overwritten at line", str(war))
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
            self.assertEqual(len(dic['test']), 2 * len(f.read()))
        # sub keys
        self.assertEqual('12', dic['e']['f']['g'])
        # % %=
        self.assertEqual({'a': 1, 'b': 2}, dic['e']['f']['i'])
        self.assertEqual({'a': 1, 'b': 2}, dic['b'])
        # Override % with a.a
        self.assertEqual({'a': '3', 'b': 2}, dic['a'])
    
    
    def test_parse_errors(self):
        with self.assertRaises(SyntaxErrorPL):
            pl.Parser(self.dir, "no_string_in_sub_key.pl").parse()
        with self.assertRaises(SyntaxErrorPL):
            pl.Parser(self.dir, "syntax_extends.pl").parse()
        with self.assertRaises(SyntaxErrorPL):
            pl.Parser(self.dir, "syntax_file.pl").parse()
        with self.assertRaises(SyntaxErrorPL):
            pl.Parser(self.dir, "syntax_error.pl").parse()
        with self.assertRaises(FileNotFound):
            pl.Parser(self.dir, "extends_no_lib.pl").parse()
        with self.assertRaises(SyntaxErrorPL):
            pl.Parser(self.dir, "open_multiline.pl").parse()
        with self.assertRaises(SemanticError):
            pl.Parser(self.dir, "append_no_key.pl").parse()
        with self.assertRaises(FileNotFound):
            pl.Parser(self.dir, "no_file_from.pl").parse()
        with self.assertRaises(SyntaxErrorPL):
            pl.Parser(self.dir, "invalid_one_line_json.pl").parse()
        with self.assertRaises(SyntaxErrorPL):
            pl.Parser(self.dir, "invalid_multiline_json.pl").parse()
        with self.assertRaises(FileNotFound):
            pl.Parser(self.dir, "no_file_sandbox.pl").parse()
        with self.assertRaises(SyntaxErrorPL):
            pl.Parser(self.dir, "syntax_sandbox.pl").parse()
