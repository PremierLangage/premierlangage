# -*- coding: utf-8 -*-

import os
import shutil
import uuid

from django.conf import settings
from django.contrib.auth.models import User
from django.test import TestCase, override_settings

from filebrowser.models import Directory
from loader.parsers import gift


FAKE_FB_ROOT = os.path.join("/tmp", str(uuid.uuid4()))
FAKE_GIFT = os.path.join(settings.APPS_DIR, 'loader/tests/fake_gift')



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class GiftParserTestCase(TestCase):
    """ Test functions of parsers/pl.py """
    
    
    @classmethod
    def setUpTestData(cls):
        if os.path.isdir(FAKE_FB_ROOT):
            shutil.rmtree(FAKE_FB_ROOT)
        cls.user = User.objects.create_user(username='user', password='12345')
        cls.dir = Directory.objects.create(name='dir', owner=cls.user)
        shutil.rmtree(cls.dir.root)
        shutil.copytree(FAKE_GIFT, cls.dir.root)
    
    
    @classmethod
    def tearDownClass(cls):
        if os.path.isdir(FAKE_FB_ROOT):
            shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def test_get_parser(self):
        self.assertEqual({
            'ext':    ['.gift'],
            'parser': gift.Parser,
            'type':   'gift'
        }, gift.get_parser())
    
    
    def test_parse(self):
        dic, _ = gift.Parser(self.dir, "demo.gift").parse()
        self.assertEqual(8, len(dic["__pl"]))


    def test_parse_missing_title(self):
        dic, warn = gift.Parser(self.dir, "missing-title.gift").parse()
        self.assertEqual(2, len(dic["__pl"]))
        self.assertIn("You did not specify a question title", str(warn))


    def test_parse_syntax_error(self):
        dic, warn = gift.Parser(self.dir, "syntax-error.gift").parse()
        self.assertEqual(1, len(dic["__pl"]))
        self.assertIn("Syntax error", str(warn))
