import os
import uuid

from django.conf import settings
from django.contrib.auth.models import User
from django.test import TestCase, override_settings

from filebrowser import filter
from filebrowser.models import Directory


RES_DIR = os.path.join(settings.APPS_DIR, "filebrowser/tests/ressources/filter/")

FAKE_FB_ROOT = os.path.join("/tmp", str(uuid.uuid4()))



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class FilterTestCase(TestCase):
    """Tests filters defined in filebrowser.filter"""
    
    
    @classmethod
    def setUpTestData(cls):
        user = User.objects.create_user(username='user', password='12345')
        user.save()
        Directory.objects.create(name='dir1', owner=user).save()
        Directory.objects.create(name='remote', owner=user, remote="dummy_url").save()
    
    
    def test_is_text(self):
        self.assertTrue(filter.is_text(RES_DIR + "text.txt"))
        self.assertFalse(filter.is_text(RES_DIR + "image.png"))
    
    
    def test_is_image(self):
        self.assertTrue(filter.is_image(RES_DIR + "image.png"))
        self.assertFalse(filter.is_image(RES_DIR + "text.txt"))
        self.assertFalse(filter.is_image(RES_DIR))
    
    
    def test_is_audio(self):
        self.assertTrue(filter.is_audio(RES_DIR + "audio.mp3"))
        self.assertFalse(filter.is_audio(RES_DIR + "text.txt"))
        self.assertFalse(filter.is_audio(RES_DIR))
    
    
    def test_is_video(self):
        self.assertTrue(filter.is_video(RES_DIR + "video.mp4"))
        self.assertFalse(filter.is_video(RES_DIR + "text.txt"))
        self.assertFalse(filter.is_video(RES_DIR))
    
    
    def test_is_application(self):
        self.assertTrue(filter.is_application(RES_DIR + "application.zip"))
        self.assertFalse(filter.is_application(RES_DIR + "text.txt"))
        self.assertFalse(filter.is_application(RES_DIR))
    
    
    def test_is_pl(self):
        self.assertTrue(filter.is_pl(RES_DIR + "pl.pl"))
        self.assertFalse(filter.is_pl(RES_DIR + "text.txt"))
    
    
    def test_is_pltp(self):
        self.assertTrue(filter.is_pltp(RES_DIR + "pltp.pltp"))
        self.assertFalse(filter.is_pltp(RES_DIR + "text.txt"))
    
    
    def test_is_archive(self):
        self.assertTrue(filter.is_archive(RES_DIR + "application.zip"))
        self.assertFalse(filter.is_archive(RES_DIR + "text.txt"))
    
    
    def test_is_code(self):
        self.assertTrue(filter.is_code(RES_DIR + "test.py"))
        self.assertFalse(filter.is_code(RES_DIR + "application.zip"))
    
    
    def test_is_excel(self):
        self.assertTrue(filter.is_excel(RES_DIR + "test.xls"))
        self.assertFalse(filter.is_excel(RES_DIR + "application.zip"))
    
    
    def test_is_word(self):
        self.assertTrue(filter.is_word(RES_DIR + "test.docx"))
        self.assertFalse(filter.is_word(RES_DIR + "application.zip"))
    
    
    def test_is_powerpoint(self):
        self.assertTrue(filter.is_powerpoint(RES_DIR + "test.pptx"))
        self.assertFalse(filter.is_powerpoint(RES_DIR + "application.zip"))
    
    
    def test_is_root(self):
        self.assertTrue(filter.is_root("/"))
        self.assertTrue(filter.is_root("root/"))
        self.assertFalse(filter.is_root(RES_DIR))
    
    
    def test_is_hidden(self):
        self.assertTrue(filter.is_hidden(RES_DIR + ".git"))
        self.assertFalse(filter.is_hidden(RES_DIR))
    
    
    def test_in_repository(self):
        self.assertTrue(filter.in_repository("."))
        self.assertFalse(filter.in_repository("/"))
