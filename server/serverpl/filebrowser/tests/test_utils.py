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
from filebrowser.utils import mk_missing_dirs, in_repository


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
    


class InRepositoryTestCase(TestCase):
    
    def setUp(self):
        os.makedirs('/tmp/inrepo/.git/')
        os.makedirs('/tmp/inrepo/dir1/dir2/dir3')
    
    
    def tearDown(self):
        if isdir('/tmp/inrepo'):
            shutil.rmtree('/tmp/inrepo')
    
    
    def test_in_repository_same_dir(self):
        self.assertEqual('/tmp/inrepo', in_repository('/tmp/inrepo/', '/tmp/inrepo/'))
        self.assertEqual(None, in_repository('/tmp/inrepo/dir1/', '/tmp/inrepo/dir1/'))
    
    
    def test_in_repository_exists(self):
        self.assertEqual('/tmp/inrepo', in_repository('/tmp/inrepo/dir1/dir2/dir3/', '/tmp/inrepo/'))
        self.assertEqual('/tmp/inrepo', in_repository('/tmp/inrepo/dir1/../', '/tmp/inrepo/'))
        self.assertEqual('/tmp/inrepo', in_repository('/tmp/inrepo/dir1/.././dir1/.', '/tmp/inrepo/'))
    
    
    def test_in_repository_not_exists(self):
        self.assertEqual(None, in_repository('/tmp/inrepo/dir1/dir2/dir3/', '/tmp/inrepo/dir1/'))
        self.assertEqual(None, in_repository('/tmp/inrepo/dir1/dir2/.././dir2', '/tmp/inrepo/dir1'))
        self.assertEqual(None, in_repository('/tmp/inrepo/dir1/.././dir1/.', '/tmp/inrepo/dir1'))
    
    
    def test_in_repository_value_error(self):
        with self.assertRaises(ValueError):
            in_repository('/tmp/inrepo', '/tmp/inrepo/dir1/')
