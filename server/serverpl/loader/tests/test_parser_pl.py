# -*- coding: utf-8 -*-

import os
import shutil

from django.conf import settings
from django.contrib.auth.models import User
from django.test import TestCase, override_settings
from mock import patch

from filebrowser.models import Directory
from serverpl.settings import BASE_DIR


FAKE_FB_ROOT = os.path.join(settings.BASE_DIR, 'loader/tests/tmp')



@patch('loader.parser.logger')
@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
@override_settings(PARSERS_ROOT=os.path.join(BASE_DIR, 'loader/tests/fake_parsers/'))
@override_settings(PARSERS_MODULE="loader.tests.fake_parsers")
class PlParserTestCase(TestCase):
    """ Test functions of loader.parser modules but parse_file() and process_extends(). """
    
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='user', password='12345')
        dir_name = os.path.join(FAKE_FB_ROOT, "dir1")
        if os.path.isdir(dir_name):
            shutil.rmtree(dir_name)
        cls.dir = Directory.objects.create(name='dir1', owner=cls.user)
        shutil.copytree(os.path.join(FAKE_FB_ROOT, '../fake_pl'), cls.dir.root)
        
        #TODO