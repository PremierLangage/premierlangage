# -*- coding: utf-8 -*-

import os
import shutil
from unittest.mock import patch

from django.conf import settings
from django.contrib.auth.models import User
from django.test import TestCase, override_settings

from filebrowser.models import Directory
from loader import loader, models
from serverpl.settings import BASE_DIR


FAKE_FB_ROOT = os.path.join(settings.BASE_DIR, 'loader/tests/tmp')



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
@override_settings(PARSERS_ROOT=os.path.join(BASE_DIR, 'loader/tests/fake_parsers/'))
@override_settings(PARSERS_MODULE="loader.tests.fake_parsers")
class LoaderTestCase(TestCase):
    """ Test functions of loader.parser modules but parse_file() and process_extends(). """
    
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='user', password='12345')
        dir_name = os.path.join(FAKE_FB_ROOT, "dir1")
        if os.path.isdir(dir_name):
            shutil.rmtree(dir_name)
        cls.dir = Directory.objects.create(name='dir1', owner=cls.user)
        shutil.copytree(os.path.join(FAKE_FB_ROOT, '../fake_pl'), cls.dir.root)


    def test_load_file(self):
        res = loader.load_file(self.dir, "working.pl")
        self.assertEqual(type(res[0]), models.PL)
        self.assertEqual(res[1], [])
    
        res = loader.load_file(self.dir, "working.pltp")
        self.assertEqual(type(res[0]), models.PLTP)
        self.assertEqual(res[1], [])
    
        res = loader.load_file(self.dir, "missing_pl.pltp")
        self.assertIs(res[0], None)
        self.assertEqual(type(res[1]), str)


    @override_settings(DEBUG=True)
    @patch('loader.parser.logger')
    def test_load_file_debug(self, mock_logger):
        res = loader.load_file(self.dir, "missing_pl.pltp")
        self.assertIs(res[0], None)
        self.assertEqual(type(res[1]), str)
        self.assertTrue("DEBUG set to True" in res[1])
    
    
    def test_load_pl(self):
        res = loader.load_pl(self.dir, "working.pl")
        self.assertEqual(type(res[0]), models.PL)
        self.assertEqual(res[1], [])
    
    
    def test_load_pltp(self):
        res = loader.load_pltp(self.dir, "working.pltp")
        self.assertEqual(type(res[0]), models.PLTP)
        self.assertEqual(res[1], [])
    
    
    def test_reload_pltp(self):
        pltp, _ = loader.load_pltp(self.dir, "working.pltp")
        self.assertTrue(pltp is not None)
        pltp, _ = loader.reload_pltp(self.dir, "working.pltp", pltp)
        self.assertTrue(pltp is not None)
        pltp, _ = loader.reload_pltp(self.dir, "working2.pltp", pltp)
        self.assertTrue(pltp is not None)