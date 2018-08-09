#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_filter.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import shutil
from os.path import join, isdir

from django.conf import settings
from django.test import TestCase, override_settings
from django.contrib.auth.models import User

from filebrowser.models import Directory
from filebrowser.templatetags import filebrowser_filter as ff
from filebrowser.filebrowser_option import FilebrowserOption, OptionsGroup



RES_DIR = join(settings.BASE_DIR, "filebrowser/tests/ressources/filter/")
FAKE_FB_ROOT = join(settings.BASE_DIR,'filebrowser/tests/ressources')


@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class TemplateTagTestCase(TestCase):
    """Tests filters defined in filebrowser.filter"""
    
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345', id=100)
        self.user2 = User.objects.create_user(username='user2', password='12345', id=200)
        self.user3 = User.objects.create_user(username='user3', password='12345', id=300)
        self.user4 = User.objects.create_user(username='user4', password='12345', id=400)
        
        dir_path = join(FAKE_FB_ROOT, '100/')
        if isdir(dir_path):
            shutil.rmtree(dir_path)
        self.d = Directory.objects.get(name='100', owner=self.user)
        self.d.add_write_auth(self.user2)
        self.d.add_read_auth(self.user3)
    
    
    def test_pdf(self):
        self.assertEqual(ff.icon('path/file.pdf'), "fas fa-file-pdf")
    
    
    def test_excel(self):
        self.assertEqual(ff.icon('path/file.xls'), "fas fa-file-excel")
    
    
    def test_powerpoint(self):
        self.assertEqual(ff.icon('path/file.pptx'), "fas fa-file-powerpoint")
    
    
    def test_word(self):
        self.assertEqual(ff.icon('path/file.docx'), "fas fa-file-word")
    
    
    def test_archive(self):
        self.assertEqual(ff.icon('path/file.zip'), "fas fa-file-archive")
    
    
    def test_code(self):
        self.assertEqual(ff.icon('path/file.py'), "fas fa-file-code")
    
    
    def test_directory(self):
        self.assertEqual(ff.icon(RES_DIR), "fas fa-folder")
    
    
    def test_text(self):
        self.assertEqual(ff.icon(RES_DIR+"text.txt"), "fas fa-file-alt")
    
    
    def test_audio(self):
        self.assertEqual(ff.icon(RES_DIR+"audio.mp3"), "fas fa-file-audio")
    
    
    def test_video(self):
        self.assertEqual(ff.icon(RES_DIR+"video.mp4"), "fas fa-file-video")
    
    
    def test_image(self):
        self.assertEqual(ff.icon(RES_DIR+"image.png"), "fas fa-file-image")
    
    
    def test_basename_dirname(self):
        path = 'truc/exo.pl'
       
        self.assertEqual(ff.basename_filter(path), "exo.pl")
        self.assertEqual(ff.dirname_filter(path), "truc")
    
    
    def test_opt_filter(self):
        group1 = FilebrowserOption("t",  "t", lambda i:None)
        group2 = FilebrowserOption("t",  "t", lambda i:None, filter=lambda i:True)
        group3 = FilebrowserOption("t",  "t", lambda i:None, filter=[lambda i:True,lambda i:True])
        group4 = FilebrowserOption("t",  "t", lambda i:None, filter=lambda i:False)
        group5 = FilebrowserOption("t",  "t", lambda i:None, filter=[lambda i:True,lambda i:False])
        
        self.assertTrue(ff.opt_filter(group1, 'path'))
        self.assertTrue(ff.opt_filter(group2, 'path'))
        self.assertTrue(ff.opt_filter(group3, 'path'))
        self.assertFalse(ff.opt_filter(group4, 'path'))
        self.assertFalse(ff.opt_filter(group5, 'path'))
    
    
    def test_group_filter(self):
        group1 = OptionsGroup('test', {}, dropdown=False)
        group2 = OptionsGroup('test', {}, dropdown=False, filter=lambda i:True)
        group3 = OptionsGroup('test', {}, dropdown=False, filter=[lambda i:True,lambda i:True])
        group4 = OptionsGroup('test', {}, dropdown=False, filter=lambda i:False)
        group5 = OptionsGroup('test', {}, dropdown=False, filter=[lambda i:True,lambda i:False])
        
        self.assertTrue(ff.group_filter(group1, 'path'))
        self.assertTrue(ff.group_filter(group2, 'path'))
        self.assertTrue(ff.group_filter(group3, 'path'))
        self.assertFalse(ff.group_filter(group4, 'path'))
        self.assertFalse(ff.group_filter(group5, 'path'))
    
    
    def test_can_read(self):
        self.assertTrue(ff.can_read(self.d, self.user))
        self.assertTrue(ff.can_read(self.d, self.user2))
        self.assertTrue(ff.can_read(self.d, self.user3))
        self.assertFalse(ff.can_read(self.d, self.user4))
        self.assertFalse(ff.can_read(self.d.name, self.user4))
    
    
    def test_can_write(self):
        self.assertTrue(ff.can_write(self.d, self.user))
        self.assertTrue(ff.can_write(self.d, self.user2))
        self.assertFalse(ff.can_write(self.d, self.user3))
        self.assertFalse(ff.can_write(self.d, self.user4))
        self.assertFalse(ff.can_write(self.d.name, self.user4))
    
    
    def test_is_owner(self):
        self.assertTrue(ff.is_owner(self.d, self.user))
        self.assertFalse(ff.is_owner(self.d, self.user2))
        self.assertFalse(ff.is_owner(self.d, self.user3))
        self.assertFalse(ff.is_owner(self.d, self.user4))
        self.assertFalse(ff.is_owner(self.d.name, self.user4))
