#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_utils.py
#
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#

import os
import shutil
import subprocess

from django.conf import settings
from django.contrib.auth.models import User
from django.test import TestCase, override_settings

from filebrowser.models import Directory
from loader.utils import displayed_path, extends_dict, get_location



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
                           + err.decode() + " - " + out.decode())



FAKE_FB_ROOT = os.path.join(settings.BASE_DIR, 'loader/tests/tmp')



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class UtilsTestCase(TestCase):
    """ Test functions of loader.utils modules. """
    
    
    @classmethod
    def setUpTestData(cls):
        if os.path.isdir(FAKE_FB_ROOT):
            shutil.rmtree(FAKE_FB_ROOT)
        
        cls.user = User.objects.create_user(username='user', password='12345', id=100)
        cls.dir = Directory.objects.get(name='100')
        cls.lib = Directory.objects.create(name='lib', owner=cls.user)
        command('git init ' + os.path.join(cls.dir.root, 'repo1'))
        
        # FAKE_FB_ROOT/
        # ├── 100/
        # │   ├── repo1/
        # |   | ├──file1.pl
        # |   | └──file2.pl
        # │   ├── dir1/
        # |   | ├──file3.pl
        # ├── lib/
        # │   ├── dir2/
        # |   | └──file4.pl
        file1 = os.path.join(cls.dir.root, 'repo1/file1.pl')
        file2 = os.path.join(cls.dir.root, 'repo1/file2.pl')
        file3 = os.path.join(cls.dir.root, 'dir1/file3.pl')
        file4 = os.path.join(cls.lib.root, 'dir2/file4.pl')
        # os.path.dirname(file[1,2]) created by the git init above
        open(file1, "w+").close()
        open(file2, "w+").close()
        os.makedirs(os.path.dirname(file3))
        open(file3, "w+").close()
        os.makedirs(os.path.dirname(file4))
        open(file4, "w+").close()
    
    
    @classmethod
    def tearDownClass(cls):
        if os.path.isdir(FAKE_FB_ROOT):
            shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def test_get_location(self):
        current_repo = 'repo1/'
        current_dir = 'dir1/'
        
        absolute = '~/repo1/file1.pl'
        rel_repo = '/file2.pl'
        relative = '../dir1/file3.pl'
        ref_lib = 'lib:/dir2/file4.pl'
        
        # Absolute outside of repo
        self.assertEqual((self.dir.name, 'repo1/file1.pl'),
                         get_location(self.dir, absolute, current_dir))
        # Absolute in a repo
        self.assertEqual((self.dir.name, 'repo1/file1.pl'),
                         get_location(self.dir, absolute, current_repo))
        
        # Relative to repo
        self.assertEqual((self.dir.name, 'repo1/file2.pl'),
                         get_location(self.dir, rel_repo, current_repo))
        
        # Relative outside of repo
        self.assertEqual((self.dir.name, 'dir1/file3.pl'),
                         get_location(self.dir, relative, current_dir))
        # Relative in a repo
        self.assertEqual((self.dir.name, 'dir1/file3.pl'),
                         get_location(self.dir, relative, current_repo))
        
        # Reference to a lib outside of repo
        self.assertEqual((self.lib.name, 'dir2/file4.pl'),
                         get_location(self.dir, ref_lib, current_dir))
        # Reference to a lib in a repo
        self.assertEqual((self.lib.name, 'dir2/file4.pl'),
                         get_location(self.dir, ref_lib, current_repo))
        
        with self.assertRaises(SyntaxError):
            get_location(self.dir, "lib:without/stating/slash", "")
        
        with self.assertRaises(SyntaxError):
            get_location(self.dir, "1234:lib/digit", "")
        
        with self.assertRaises(SyntaxError):
            get_location(self.dir, "/lib/digit", "")
        
        with self.assertRaises(FileNotFoundError):
            get_location(self.dir, "unknown:/file.pl", "")
        
        with self.assertRaises(FileNotFoundError):
            get_location(self.dir, "lib:/unknown.pl", "")
        
        with self.assertRaises(FileNotFoundError):
            get_location(self.dir, "~/unknown.pl", "")
        
        with self.assertRaises(FileNotFoundError):
            get_location(self.dir, "/unknown.pl", "repo1/")
        
        with self.assertRaises(FileNotFoundError):
            get_location(self.dir, "unknown.pl", "dir1/")
    
    
    def test_extends_dic(self):
        target = {
            'in_both'    : 'test',
            'in_target'  : 'test',
            'list_both'  : [1],
            'list_target': [1],
            'dic_target' : {"1": 1},
            'dic_both'   : {"1": 1},
        }
        source = {
            'in_both'    : 'test2',
            'in_source'  : 'test2',
            'list_both'  : [2],
            'list_source': [2],
            'dic_source' : {"2": 2},
            'dic_both'   : {"2": 2},
        }
        result = {
            'in_both'    : 'test',
            'in_target'  : 'test',
            'in_source'  : 'test2',
            'list_both'  : [1, 2],
            'list_target': [1],
            'list_source': [2],
            'dic_target' : {"1": 1},
            'dic_source' : {"2": 2},
            'dic_both'   : {"1": 1, "2": 2}
        }
        
        self.assertEqual(extends_dict(target, source), result)
    
    
    def test_displayed_path(self):
        path1 = os.path.join(settings.FILEBROWSER_ROOT, '1/a/path')
        path2 = os.path.join(settings.FILEBROWSER_ROOT, 'not_int/a/path')
        path3 = 'not_int/a/path'
        path4 = '1/a/path'
        
        self.assertEqual(displayed_path(path1), 'home/a/path')
        self.assertEqual(displayed_path(path2), 'not_int/a/path')
        self.assertEqual(displayed_path(path3), 'not_int/a/path')
        self.assertEqual(displayed_path(path4), 'home/a/path')
