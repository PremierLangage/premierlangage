import os, shutil

from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from django.test import override_settings
from splinter import Browser

from filebrowser.models import Directory


FAKE_FB_ROOT = os.path.join(settings.BASE_DIR, 'tests/tmp')

RES_DIR = os.path.join(settings.BASE_DIR, "tests/resources/fake_filebrowser_data/")



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class SplinterTestCase(StaticLiveServerTestCase):
    
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.u = User.objects.create_superuser("login", password="secret", email="test@test.test")
        cls.b = Browser()
        
        cls.dir = Directory.objects.create(name='Yggdrasil', owner=cls.u).root
        cls.lib = Directory.objects.create(name='lib', owner=cls.u).root
        shutil.rmtree(os.path.join(cls.dir))
        shutil.copytree(RES_DIR, cls.dir)
    
    
    @classmethod
    def tearDownClass(cls):
        cls.b.quit()
        shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def setUp(self):
        super().setUp()
        self.visit("filebrowser")
        self.b.fill("username", "login")
        self.b.fill("password", "secret")
        self.b.find_by_text("Log-in").click()
    
    
    def tearDown(self):
        self.b.click_link_by_href("/courses/logout/")
        super().tearDown()
    
    
    def visit(self, url):
        self.b.visit(os.path.join(self.live_server_url, url))
    
    
    def test_filebrowser(self):
        self.visit("filebrowser")
        self.assertTrue(self.b.is_text_present("home", wait_time=10))
        self.b.find_by_text("home").click()
        self.assertTrue(self.b.is_text_present("lib", wait_time=10))
        self.b.find_by_text("lib").click()
