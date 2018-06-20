#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_filter.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

from os.path import join

from django.test import TestCase
from django.contrib.auth.models import User

from filebrowser import filter
from filebrowser.models import Directory
from filebrowser.templatetags.filebrowser_filter import icon

from django.conf import settings



RES_DIR = join(settings.BASE_DIR, "filebrowser/tests/ressources/filter/")

class TemplateTagTestCase(TestCase):
    """Tests filters defined in filebrowser.filter"""
    
    def test_pdf(self):
        self.assertEqual(icon('path/file.pdf'), "fas fa-file-pdf")
    
    
    def test_excel(self):
        self.assertEqual(icon('path/file.xls'), "fas fa-file-excel")
    
    
    def test_powerpoint(self):
        self.assertEqual(icon('path/file.pptx'), "fas fa-file-powerpoint")
    
    
    def test_word(self):
        self.assertEqual(icon('path/file.docx'), "fas fa-file-word")
    
    
    def test_archive(self):
        self.assertEqual(icon('path/file.zip'), "fas fa-file-archive")
    
    
    def test_code(self):
        self.assertEqual(icon('path/file.py'), "fas fa-file-code")
    
    
    def test_directory(self):
        self.assertEqual(icon(RES_DIR), "fas fa-folder")
    
    
    def test_text(self):
        self.assertEqual(icon(RES_DIR+"text.txt"), "fas fa-file-alt")
    
    
    def test_audio(self):
        self.assertEqual(icon(RES_DIR+"audio.mp3"), "fas fa-file-audio")
    
    
    def test_video(self):
        self.assertEqual(icon(RES_DIR+"video.mp4"), "fas fa-file-video")
    
    
    def test_image(self):
        self.assertEqual(icon(RES_DIR+"image.png"), "fas fa-file-image")
    
