import os
import shutil
import time

from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from django.test import override_settings
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from filebrowser.models import Directory


FAKE_FB_ROOT = os.path.join(settings.APPS_DIR, 'tests/tmp')

HOME_DIR = os.path.join(settings.APPS_DIR, "misc_tests/resources/fake_filebrowser_data/")
LIB_DIR = os.path.join(settings.APPS_DIR, "misc_tests/resources/lib/")

WAIT_TIME = 30



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class SeleniumTestCase(StaticLiveServerTestCase):
    
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.b = webdriver.Firefox()
        cls.b.implicitly_wait(5)
    
    
    @classmethod
    def tearDownClass(cls):
        cls.b.close()
        shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def setUp(self):
        super().setUp()
        self.u = User.objects.create_superuser("login", password="secret", email="test@test.test")
        self.dir = Directory.objects.create(name='Yggdrasil', owner=self.u).root
        self.lib = Directory.objects.create(name='lib', owner=self.u).root
        shutil.rmtree(os.path.join(self.dir))
        shutil.copytree(HOME_DIR, self.dir)
        shutil.rmtree(os.path.join(self.lib))
        shutil.copytree(LIB_DIR, self.lib)
    
    
    def connect_to_filebrowser(self):
        self.b.refresh()
        self.visit("filebrowser")
        e = self.b.find_elements_by_xpath("//*[contains(text(), 'login')]")
        if e is not None:
            e = self.b.find_element_by_name("username")
            e.send_keys("login")
            e = self.b.find_element_by_name("password")
            e.send_keys("secret")
            self.b.find_element_by_xpath("//*[contains(text(), 'Log-in')]").click()
    
    
    def visit(self, url):
        self.b.get(os.path.join(self.live_server_url, url))
    
    
    def answer_driver(self, web_driver, answer):
        time.sleep(1)
        self.assertTrue(web_driver.is_element_present_by_name("answer", wait_time=WAIT_TIME))
        web_driver.fill("answer", answer)
        self.assertTrue(web_driver.is_element_present_by_text("Valider", wait_time=WAIT_TIME))
        web_driver.find_by_text("Valider").click()
    
    
    def answer_pl(self, answer):
        time.sleep(1)
        e = self.b.find_element_by_id("form_answer")
        self.assertTrue(e is not None)
        e = self.b.find_element_by_name("answer")
        e.send_keys(answer)
        e = self.b.find_element_by_xpath("//*[contains(text(), 'Valider')]")
        e.click()
    
    
    def test_file_browser_preview(self):
        self.connect_to_filebrowser()
        self.b.find_element_by_xpath("//*[contains(text(), 'lib')]").click()
        self.b.find_element_by_xpath("//*[contains(text(), 'demo')]").click()
        self.b.find_element_by_xpath("//*[contains(text(), 'static_add.pl')]").click()
        self.b.find_element_by_css_selector('div[class="tab-item ng-star-inserted"]').click()
        
        self.assertTrue(self.b.is_element_present_by_tag("iframe", wait_time=WAIT_TIME))
        self.b.is_element_present_by_text("Valider", wait_time=WAIT_TIME)
        with self.b.get_iframe(0) as iframe:
            self.answer_driver(iframe, "1")
            self.assertTrue(iframe.is_text_present("Mauvaise réponse", wait_time=WAIT_TIME))
            self.answer_driver(iframe, "2")
            self.assertTrue(iframe.is_text_present("Mauvaise réponse", wait_time=WAIT_TIME))
            self.answer_driver(iframe, "7")
            self.assertTrue(iframe.is_text_present("Bonne réponse", wait_time=WAIT_TIME))
            self.answer_driver(iframe, "3")
            self.assertTrue(iframe.is_text_present("Mauvaise réponse", wait_time=WAIT_TIME))
            self.answer_driver(iframe, "4")
            self.assertTrue(iframe.is_text_present("Mauvaise réponse", wait_time=WAIT_TIME))
            self.answer_driver(iframe, "7")
            self.assertTrue(iframe.is_text_present("Bonne réponse", wait_time=WAIT_TIME))
            self.answer_driver(iframe, "5")
            self.assertTrue(iframe.is_text_present("Mauvaise réponse", wait_time=WAIT_TIME))
    
    
    def test_filebrowser_pl(self):
        self.connect_to_filebrowser()
        self.assertTrue(self.b.is_text_present("lib", wait_time=WAIT_TIME))
        self.b.find_by_text("lib").click()
        self.assertTrue(self.b.is_text_present("demo", wait_time=WAIT_TIME))
        self.b.find_by_text("demo").click()
        self.assertTrue(self.b.is_text_present("static_add.pl", wait_time=WAIT_TIME))
        self.b.find_by_text("static_add.pl").first.mouse_over()
        self.assertTrue(
            self.b.is_element_present_by_id("op-0-lib/demo/static_add.pl", wait_time=WAIT_TIME))
        self.b.find_by_id("op-0-lib/demo/static_add.pl").first.click()
        self.b.windows[0].close()
        
        self.answer_pl("1")
        self.assertTrue(self.b.is_text_present("Mauvaise réponse", wait_time=WAIT_TIME))
        self.answer_pl("2")
        self.assertTrue(self.b.is_text_present("Mauvaise réponse", wait_time=WAIT_TIME))
        self.answer_pl("7")
        self.assertTrue(self.b.is_text_present("Bonne réponse", wait_time=WAIT_TIME))
        self.answer_pl("3")
        self.assertTrue(self.b.is_text_present("Mauvaise réponse", wait_time=WAIT_TIME))
        self.answer_pl("4")
        self.assertTrue(self.b.is_text_present("Mauvaise réponse", wait_time=WAIT_TIME))
        self.answer_pl("7")
        self.assertTrue(self.b.is_text_present("Bonne réponse", wait_time=WAIT_TIME))
        self.answer_pl("5")
        self.assertTrue(self.b.is_text_present("Mauvaise réponse", wait_time=WAIT_TIME))
    
    
    def test_filebrowser_activity(self):
        self.connect_to_filebrowser()
        self.assertTrue(self.b.is_text_present("lib", wait_time=WAIT_TIME))
        self.b.find_by_text("lib").click()
        self.assertTrue(self.b.is_text_present("demo", wait_time=WAIT_TIME))
        self.b.find_by_text("demo").click()
        self.assertTrue(self.b.is_text_present("random_all.pl", wait_time=WAIT_TIME))
        self.b.find_by_text("random_all.pltp").first.mouse_over()
        self.assertTrue(
            self.b.is_element_present_by_id("op-1-lib/demo/random_all.pltp", wait_time=WAIT_TIME))
        self.b.find_by_id("op-1-lib/demo/random_all.pltp").first.click()
        self.assertTrue(
            self.b.is_element_present_by_text(
                " a bien été créée et a pour URL LTI:                     ", wait_time=WAIT_TIME))
        self.assertTrue(
            self.b.is_element_present_by_text(" OPEN                    ", wait_time=WAIT_TIME))
        time.sleep(1)
        self.b.find_by_text(" OPEN                    ").click()
        time.sleep(1)
        self.b.windows[0].close()
        
        self.b.click_link_by_partial_text("Commencer")
        self.b.fill("answer", "7")
        self.assertTrue(self.b.is_element_present_by_text("Valider", wait_time=WAIT_TIME))
        self.b.find_by_text("Valider").click()
        self.assertTrue(self.b.is_element_present_by_text("Bonne réponse", wait_time=WAIT_TIME))
        self.b.click_link_by_partial_text("Suivant")
        
        self.assertTrue(self.b.is_element_present_by_css(
            'a[class="btn btn-secondary btn-type state-succeded btn-lg"]', wait_time=WAIT_TIME))
        self.assertTrue(self.b.is_element_present_by_css(
            'a[class="btn btn-secondary btn-type state-started btn-lg active"]',
            wait_time=WAIT_TIME))
        
        self.assertTrue(self.b.is_element_present_by_css(
            'a[class="btn btn-secondary btn-type state-unstarted btn-lg"]', wait_time=WAIT_TIME))
        self.b.click_link_by_partial_text("Addition Aléatoire (using eval_func)")
        time.sleep(1)
        self.b.fill("answer", "-1")
        self.assertTrue(self.b.is_element_present_by_text("Valider", wait_time=WAIT_TIME))
        self.b.find_by_text("Valider").click()
        time.sleep(1)
        self.b.find_by_text("Random add").click()
        self.assertTrue(self.b.is_element_present_by_css(
            'a[class="btn btn-secondary btn-type state-failed btn-lg"]', wait_time=WAIT_TIME))
    
    
    def test_filebrowser_markdown_mathjax(self):
        self.connect_to_filebrowser()
        self.assertTrue(self.b.is_text_present("home", wait_time=WAIT_TIME))
        self.b.find_by_text("home").click()
        self.assertTrue(self.b.is_text_present("cbank", wait_time=WAIT_TIME))
        self.b.find_by_text("cbank").click()
        self.assertTrue(self.b.is_text_present("recursion", wait_time=WAIT_TIME))
        self.b.find_by_text("recursion").click()
        self.assertTrue(self.b.is_text_present("working_exercice.pltp", wait_time=WAIT_TIME))
        self.b.find_by_text("working_exercice.pltp").first.mouse_over()
        self.assertTrue(
            self.b.is_element_present_by_id(
                "op-1-Yggdrasil/cbank/recursion/working_exercice.pltp",
                wait_time=WAIT_TIME))
        self.b.find_by_id(
            "op-1-Yggdrasil/cbank/recursion/working_exercice.pltp").first.click()
        self.assertTrue(
            self.b.is_element_present_by_text(
                " a bien été créée et a pour URL LTI:                     ", wait_time=WAIT_TIME))
        self.assertTrue(
            self.b.is_element_present_by_text(" OPEN                    ", wait_time=WAIT_TIME))
        time.sleep(1)
        self.b.find_by_text(" OPEN                    ").click()
        time.sleep(1)
        self.b.windows[0].close()
        
        self.b.click_link_by_partial_text("Commencer")
        self.assertTrue(
            self.b.is_element_present_by_css("span[class='MathJax_Preview']", wait_time=WAIT_TIME))
