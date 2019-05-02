import os, shutil, time

from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from django.test import override_settings
from splinter import Browser

from filebrowser.models import Directory


FAKE_FB_ROOT = os.path.join(settings.BASE_DIR, 'tests/tmp')

HOME_DIR = os.path.join(settings.BASE_DIR, "misc_tests/resources/fake_filebrowser_data/")
LIB_DIR = os.path.join(settings.BASE_DIR, "misc_tests/resources/lib/")



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class SplinterTestCase(StaticLiveServerTestCase):
    
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.b = Browser()
        cls.u = User.objects.create_superuser("login", password="secret", email="test@test.test")
        cls.dir = Directory.objects.create(name='Yggdrasil', owner=cls.u).root
        cls.lib = Directory.objects.create(name='lib', owner=cls.u).root
        shutil.rmtree(os.path.join(cls.dir))
        shutil.copytree(HOME_DIR, cls.dir)
        shutil.rmtree(os.path.join(cls.lib))
        shutil.copytree(LIB_DIR, cls.lib)
    
    
    @classmethod
    def tearDownClass(cls):
        cls.b.quit()
        shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def setUp(self):
        super().setUp()
        if not self.b.is_text_present("login"):
            self.visit("filebrowser")
            self.b.fill("username", "login")
            self.b.fill("password", "secret")
            self.b.find_by_text("Log-in").click()
    
    
    def visit(self, url):
        self.b.visit(os.path.join(self.live_server_url, url))
    
    
    def answer_preview(self, web_driver, answer):
        self.assertTrue(web_driver.is_element_present_by_name("answer", wait_time=10))
        web_driver.fill("answer", answer)
        self.assertTrue(web_driver.is_element_present_by_text("Valider", wait_time=10))
        web_driver.find_by_text("Valider").click()
        time.sleep(0.5)
    
    
    def answer_pl(self, answer):
        self.assertTrue(self.b.is_element_present_by_name("answer", wait_time=10))
        self.b.fill("answer", answer)
        self.assertTrue(self.b.is_element_present_by_text("Valider", wait_time=10))
        self.b.find_by_text("Valider").click()
        time.sleep(1)
    
    
    def test_file_browser_preview(self):
        self.assertTrue(self.b.is_text_present("home", wait_time=10))
        self.b.find_by_text("home").click()
        self.assertTrue(self.b.is_text_present("lib", wait_time=10))
        self.b.find_by_text("lib").click()
        self.assertTrue(self.b.is_text_present("demo", wait_time=10))
        self.b.find_by_text("demo").click()
        self.assertTrue(self.b.is_text_present("static_add.pl", wait_time=10))
        self.b.find_by_text("static_add.pl").click()
        self.assertTrue(self.b.is_element_present_by_css('div[class="tab-item ng-star-inserted"]',
                                                         wait_time=10))
        self.b.find_by_css('div[class="tab-item ng-star-inserted"]').click()
        
        self.assertTrue(self.b.is_element_present_by_tag("iframe", wait_time=10))
        self.b.is_element_present_by_text("Valider", wait_time=2)
        with self.b.get_iframe(0) as iframe:
            self.answer_preview(iframe, "1")
            self.assertTrue(iframe.is_text_present("Mauvaise réponse"))
            self.answer_preview(iframe, "2")
            self.assertTrue(iframe.is_text_present("Mauvaise réponse"))
            self.answer_preview(iframe, "7")
            self.assertTrue(iframe.is_text_present("Bonne réponse"))
            self.answer_preview(iframe, "3")
            self.assertTrue(iframe.is_text_present("Mauvaise réponse"))
            self.answer_preview(iframe, "4")
            self.assertTrue(iframe.is_text_present("Mauvaise réponse"))
            self.answer_preview(iframe, "7")
            self.assertTrue(iframe.is_text_present("Bonne réponse"))
            self.answer_preview(iframe, "5")
            self.assertTrue(iframe.is_text_present("Mauvaise réponse"))
    
    
    def ph_test_filebrowser_pl(self):
        self.assertTrue(self.b.is_text_present("home", wait_time=10))
        self.b.find_by_text("home").click()
        self.assertTrue(self.b.is_text_present("lib", wait_time=10))
        self.b.find_by_text("lib").click()
        self.assertTrue(self.b.is_text_present("demo", wait_time=10))
        self.b.find_by_text("demo").click()
        self.assertTrue(self.b.is_text_present("static_add.pl", wait_time=10))
        self.b.find_by_text("static_add.pl").click()
        self.b.find_by_id("lib/demo/static_add.pl").mouse_over()
        time.sleep(1)
        self.b.find_by_css('aria-describedby="cdk-describedby-message-67"')[6].click()
        
        self.answer_pl("1")
        self.assertTrue(self.b.is_text_present("Mauvaise réponse"))
        self.answer_pl("2")
        self.assertTrue(self.b.is_text_present("Mauvaise réponse"))
        self.answer_pl("7")
        self.assertTrue(self.b.is_text_present("Bonne réponse"))
        self.answer_pl("3")
        self.assertTrue(self.b.is_text_present("Mauvaise réponse"))
        self.answer_pl("4")
        self.assertTrue(self.b.is_text_present("Mauvaise réponse"))
        self.answer_pl("7")
        self.assertTrue(self.b.is_text_present("Bonne réponse"))
        self.answer_pl("5")
        self.assertTrue(self.b.is_text_present("Mauvaise réponse"))
