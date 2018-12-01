#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_utils.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import subprocess, os, shutil
from os.path import join, isdir

from django.test import TestCase, override_settings

from django.conf import settings
from django.contrib.auth.models import User

from filebrowser.models import Directory

from loader.utils import get_location, extends_dict, displayed_path


def command(cmd):
    p = subprocess.Popen(
        cmd,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        shell=True
    )
    out, err = p.communicate()
    if p.returncode:
        raise RuntimeError("Return code : " + str(p.returncode) + " - "
                           + err.decode() + out.decode())


FAKE_FB_ROOT = join(settings.APPS_DIR, 'loader/tests/tmp')


@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class UtilsTestCase(TestCase):
    """ Test functions of loader.utils modules. """
    
    @classmethod
    def setUpTestData(cls):
        if not isdir(FAKE_FB_ROOT):
            os.makedirs(FAKE_FB_ROOT)
        
        cls.user = User.objects.create_user(username='user', password='12345', id=100)
        cls.dir = Directory.objects.get(name='100')
        command('git init ' + join(cls.dir.root, 'repo1'))
        
        if isdir(join(cls.dir.root, 'repo1/first1/')):
            shutil.rmtree(join(cls.dir.root, 'repo1/first1/'), ignore_errors=True)
        os.makedirs(join(cls.dir.root, 'repo1/first1/second1/'))
        if isdir(join(cls.dir.root, 'first1/')):
            shutil.rmtree(join(cls.dir.root, 'first1/'), ignore_errors=True)
        os.makedirs(join(cls.dir.root, 'first1/second1/'))
    
    
    def test_get_location(self):
        current_path = 'first1/second1/'
        current_repo = 'repo1/first1/second1/'
        
        absolute = '/first1/second1/third1/file.py'
        relative = '../second2/file.py'
        ref_home = 'home:/first1/second1/file.py'
        ref_other = 'directory:/first1/second1/file.py'
        exception = 'ref:relative/path/file.py'
        
        # Absolute outside of repo
        self.assertEqual('first1/second1/third1/file.py', get_location(self.dir, absolute,
                                                                       current_path))
        self.assertEqual('first1/second1/third1/file.py', get_location(self.dir, absolute))
        # Absolute in a repo
        self.assertEqual('repo1/first1/second1/third1/file.py', get_location(self.dir, absolute,
                                                                             current_repo))
        # Relative outside of repo
        self.assertEqual('first1/second2/file.py', get_location(self.dir, relative, current_path))
        # Relative in a repo
        self.assertEqual('repo1/first1/second2/file.py', get_location(self.dir, relative,
                                                                      current_repo))
        # Reference to home
        self.assertEqual('first1/second1/file.py', get_location(self.dir, ref_home))
        self.assertEqual('first1/second1/file.py', get_location(self.dir, ref_home, current_path))
        self.assertEqual('first1/second1/file.py', get_location(self.dir, ref_home, current_repo))
        # Reference to another directory
        self.assertEqual('directory/first1/second1/file.py', get_location(self.dir, ref_other))
        self.assertEqual('directory/first1/second1/file.py', get_location(self.dir, ref_other,
                                                                          current_path))
        self.assertEqual('directory/first1/second1/file.py', get_location(self.dir, ref_other,
                                                                          current_repo))
        
        with self.assertRaises(SyntaxError):
            get_location(self.dir, exception)
    
    
    def test_extends_dic(self):
        target = {
            'in_both': 'test',
            'in_target': 'test',
            'list_both': [1],
            'list_target': [1],
            'dic_target': {"1": 1},
        }
        source = {
            'in_both': 'test2',
            'in_source': 'test2',
            'list_both': [2],
            'list_source': [2],
            'dic_source': {"2": 2},
        }
        result = {
            'in_both': 'test',
            'in_target': 'test',
            'in_source': 'test2',
            'list_both': [1, 2],
            'list_target': [1],     
            'list_source': [2],
            'dic_target': {"1": 1},
            'dic_source': {"2": 2},
        }
        
        self.assertEqual(extends_dict(target, source), result)
    
    
    def test_displayed_path(self):
        path1 = join(settings.FILEBROWSER_ROOT, '1/a/path')
        path2 = join(settings.FILEBROWSER_ROOT, 'not_int/a/path')
        path3 = 'not_int/a/path'
        path4 = '1/a/path'
        
        self.assertEqual(displayed_path(path1), 'home/a/path')
        self.assertEqual(displayed_path(path2), 'not_int/a/path')
        self.assertEqual(displayed_path(path3), 'not_int/a/path')
        self.assertEqual(displayed_path(path4), 'home/a/path')
