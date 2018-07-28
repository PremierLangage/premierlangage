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

from django.conf import settings



RES_DIR = join(settings.BASE_DIR, "filebrowser/tests/ressources/filter/")

class FilterTestCase(TestCase):
    """Tests filters defined in filebrowser.filter"""
    
    @classmethod
    def setUpTestData(self):
        user = User.objects.create_user(username='user', password='12345')
        user.save()
        Directory.objects.create(name='dir1', owner=user).save()
        Directory.objects.create(name='remote', owner=user, remote="dummy_url").save()
    
    
    def test_is_text(self):
        self.assertTrue(filter.is_text(RES_DIR+"text.txt"))
        self.assertFalse(filter.is_text(RES_DIR+"image.png"))
    
    def test_is_image(self):
        self.assertTrue(filter.is_image(RES_DIR+"image.png"))
        self.assertFalse(filter.is_image(RES_DIR+"text.txt"))
        self.assertFalse(filter.is_image(RES_DIR))
        
    
    def test_is_audio(self):
        self.assertTrue(filter.is_audio(RES_DIR+"audio.mp3"))
        self.assertFalse(filter.is_audio(RES_DIR+"text.txt"))
        self.assertFalse(filter.is_audio(RES_DIR))
    
    def test_is_video(self):
        self.assertTrue(filter.is_video(RES_DIR+"video.mp4"))
        self.assertFalse(filter.is_video(RES_DIR+"text.txt"))
        self.assertFalse(filter.is_video(RES_DIR))
    
    def test_is_application(self):
        self.assertTrue(filter.is_application(RES_DIR+"application.zip"))
        self.assertFalse(filter.is_application(RES_DIR+"text.txt"))
        self.assertFalse(filter.is_application(RES_DIR))
    
    def test_is_pl(self):
        self.assertTrue(filter.is_pl(RES_DIR+"pl.pl"))
        self.assertFalse(filter.is_pl(RES_DIR+"text.txt"))
    
    def test_is_not_pl(self):
        self.assertTrue(filter.is_not_pl(RES_DIR+"text.txt"))
        self.assertFalse(filter.is_not_pl(RES_DIR+"pl.pl"))
    
    def test_is_pltp(self):
        self.assertTrue(filter.is_pltp(RES_DIR+"pltp.pltp"))
        self.assertFalse(filter.is_pltp(RES_DIR+"text.txt"))
    
    def test_is_archive(self):
        self.assertTrue(filter.is_archive(RES_DIR+"application.zip"))
        self.assertFalse(filter.is_archive(RES_DIR+"text.txt"))
    
    def test_is_directory_object(self):
        self.assertTrue(filter.is_directory_object('./dir1'))
        self.assertFalse(filter.is_directory_object('./dir1/inside'))
        self.assertFalse(filter.is_directory_object('./missing_dir'))
        self.assertFalse(filter.is_directory_object('.'))
        self.assertFalse(filter.is_directory_object('./'))
    
    def test_is_not_directory_object(self):
        self.assertFalse(filter.is_not_directory_object('./dir1'))
        self.assertTrue(filter.is_not_directory_object('./dir1/inside'))
        self.assertTrue(filter.is_not_directory_object('./missing_dir'))
        self.assertTrue(filter.is_not_directory_object('.'))
        self.assertTrue(filter.is_not_directory_object('./'))
    
    def test_is_remote(self):
        self.assertTrue(filter.is_remote('./remote/random/path'))
        self.assertFalse(filter.is_remote('./dir1'))
        self.assertFalse(filter.is_remote('./dir1/inside'))
        self.assertFalse(filter.is_remote('./missing_dir'))
        self.assertFalse(filter.is_remote('.'))
        self.assertFalse(filter.is_remote('./'))

    def test_is_not_directory(self):
        self.assertTrue(filter.is_not_directory('text.txt'))
      
