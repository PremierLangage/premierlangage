#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_filter.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import os, shutil

from os.path import join, isdir

from django.test import TestCase
from django.conf import settings
from filebrowser.utils import mk_missing_dirs


TEST_DIR = join(settings.BASE_DIR, "filebrowser/tests/mk_missing_dirs")

class MKMissingDirsTestCase(TestCase):
    
    def setUp(self):
        if not isdir(TEST_DIR):
            os.mkdir(TEST_DIR)

    def tearDown(self):
        if isdir(TEST_DIR):
            shutil.rmtree(TEST_DIR)
    
    
    def test_mk_missing_dirs_file_rel(self):
        with self.assertRaises(FileExistsError):
            mk_missing_dirs(TEST_DIR, "", "file.pl")
        self.assertEqual(sum([len(d) for _, d, __ in os.walk(TEST_DIR)]), 0)
    
    
    def test_mk_missing_dirs_file_abs(self):
        with self.assertRaises(FileExistsError):
            mk_missing_dirs(TEST_DIR, "", "/file.pl")
        self.assertEqual(sum([len(d) for _, d, __ in os.walk(TEST_DIR)]), 0)
    
    
    def test_mk_missing_dirs_path_rel(self):
        mk_missing_dirs(TEST_DIR, "", "dir1/dir2/dir3/file.pl")
        self.assertEqual(sum([len(d) for _, d, __ in os.walk(TEST_DIR)]), 3)
    
    
    def test_mk_missing_dirs_path_part(self):
        os.makedirs(join(TEST_DIR, "dir1/dir2"))
        mk_missing_dirs(TEST_DIR, "", "dir1/dir2/dir3/file.pl")
        self.assertEqual(sum([len(d) for _, d, __ in os.walk(TEST_DIR)]), 3)
    
    
    def test_mk_missing_dirs_path_abs(self):
        mk_missing_dirs(TEST_DIR, "", "/dir1/dir2/dir3/file.pl")
        self.assertEqual(sum([len(d) for _, d, __ in os.walk(TEST_DIR)]), 3)
    
    
    def test_mk_missing_dirs_path_not_root(self):
        os.makedirs(join(TEST_DIR, "dir1/dir2"))
        mk_missing_dirs(TEST_DIR, "dir1/dir2", "../../dir3/file.pl")
        self.assertEqual(sum([len(d) for _, d, __ in os.walk(TEST_DIR)]), 3)
    
    
    def test_mk_missing_dirs_path_file_exists(self):
        open(join(TEST_DIR, 'dir1'), 'w+').close()
        with self.assertRaises(NotADirectoryError):
            mk_missing_dirs(TEST_DIR, "", "/dir1/dir3/file.pl")
    
    
    def test_mk_missing_dirs_path_outbound(self):
        with self.assertRaises(ValueError):
            mk_missing_dirs(TEST_DIR, "", "/dir1/../dir2/dir3/../../../")
    
    

    
    
