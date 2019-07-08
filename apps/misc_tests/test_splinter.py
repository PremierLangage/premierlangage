import os
import shutil
import time

from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from django.test import override_settings
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains

from filebrowser.models import Directory


FAKE_FB_ROOT = os.path.join(settings.APPS_DIR, 'tests/tmp')

HOME_DIR = os.path.join(settings.APPS_DIR, "misc_tests/resources/fake_filebrowser_data/")
LIB_DIR = os.path.join(settings.APPS_DIR, "misc_tests/resources/lib/")

WAIT_TIME = 1



def sleep(n):
    if "TRAVIS" in os.environ:
        time.sleep(n * 10)
    else:
        time.sleep(n)



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class SeleniumTestCase(StaticLiveServerTestCase):
    
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.b = webdriver.Firefox()
        cls.b.implicitly_wait(10)
    
    
    @classmethod
    def tearDownClass(cls):
        cls.b.quit()
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
    
    
    def get_e_by_text(self, text):
        e = self.b.find_elements_by_xpath("//*[contains(text(), '" + text + "')]")
        return e[0] if len(e) > 0 else None
    
    
    def connect_to_filebrowser(self):
        self.b.refresh()
        self.visit("editor")
        e = self.get_e_by_text("Se connecter")
        if e is not None:
            e = self.b.find_element_by_name("username")
            e.send_keys("login")
            e = self.b.find_element_by_name("password")
            e.send_keys("secret")
            self.get_e_by_text('Log-in').click()
            sleep(2*WAIT_TIME)
    
    
    def visit(self, url):
        self.b.get(os.path.join(self.live_server_url, url))
    
    
    def answer_pl(self, answer):
        sleep(WAIT_TIME)
        self.b.find_element_by_css_selector('input[name="answer"]').send_keys(answer)
        self.b.find_element_by_xpath("//*[contains(text(), 'Valider')]").click()
        sleep(WAIT_TIME)
    
    
    def test_filebrowser_preview(self):
        self.connect_to_filebrowser()
        self.get_e_by_text("lib").click()
        self.get_e_by_text("demo").click()
        self.get_e_by_text("static_add.pl").click()
        
        self.b.find_element_by_css_selector('div[class="tab-item ng-star-inserted"]').click()
        self.b.switch_to.frame(self.b.find_element_by_tag_name("iframe"))
        sleep(WAIT_TIME)
        self.answer_pl("1")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.answer_pl("2")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.answer_pl("7")
        self.assertTrue(self.get_e_by_text("Bonne réponse") is not None)
        self.answer_pl("3")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.answer_pl("4")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.answer_pl("7")
        self.assertTrue(self.get_e_by_text("Bonne réponse") is not None)
        self.answer_pl("5")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.b.switch_to.default_content()
    
    
    def test_filebrowser_pl(self):
        self.connect_to_filebrowser()
        self.get_e_by_text("lib").click()
        self.get_e_by_text("demo").click()
        e = self.get_e_by_text("static_add.pl")
        ActionChains(self.b).move_to_element(e).perform()
        
        sleep(WAIT_TIME)
        self.b.find_element_by_id("node-option-1-lib/demo/static_add.pl").click()
        window_before = self.b.window_handles[0]
        window_after = self.b.window_handles[1]
        self.b.switch_to.window(window_after)
        
        self.answer_pl("1")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.answer_pl("2")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.answer_pl("7")
        self.assertTrue(self.get_e_by_text("Bonne réponse") is not None)
        self.answer_pl("3")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.answer_pl("4")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.answer_pl("7")
        self.assertTrue(self.get_e_by_text("Bonne réponse") is not None)
        self.answer_pl("5")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.b.close()
        self.b.switch_to.window(window_before)
    
    
    def test_filebrowser_activity(self):
        self.connect_to_filebrowser()
        self.get_e_by_text("lib").click()
        self.get_e_by_text("demo").click()
        self.get_e_by_text("static_add.pl").click()
        
        e = self.get_e_by_text("random_all.pltp")
        ActionChains(self.b).move_to_element(e).perform()
        
        sleep(WAIT_TIME)
        self.b.find_element_by_id("node-option-2-lib/demo/random_all.pltp").click()
        self.get_e_by_text(" OPEN                    ").click()
        
        sleep(WAIT_TIME)
        
        window_before = self.b.window_handles[0]
        window_after = self.b.window_handles[1]
        self.b.switch_to.window(window_after)
        
        self.get_e_by_text("Commencer").click()
        self.answer_pl("7")
        self.assertTrue(self.get_e_by_text("Bonne réponse") is not None)
        self.get_e_by_text("Suivant").click()
        
        self.assertTrue(self.b.find_element_by_css_selector(
            'a[class="btn btn-secondary btn-type state-succeded btn-lg"]') is not None)
        self.assertTrue(self.b.find_element_by_css_selector(
            'a[class="btn btn-secondary btn-type state-started btn-lg active"]') is not None)
        self.assertTrue(self.b.find_element_by_css_selector(
            'a[class="btn btn-secondary btn-type state-unstarted btn-lg"]') is not None)
        
        self.get_e_by_text("Addition Aléatoire (using eval_func)").click()
        sleep(WAIT_TIME)
        self.answer_pl("-1")
        sleep(WAIT_TIME)
        self.get_e_by_text("Random add").click()
        self.assertTrue(self.b.find_element_by_css_selector(
            'a[class="btn btn-secondary btn-type state-failed btn-lg"]') is not None)
        self.b.close()
        self.b.switch_to.window(window_before)
    
    
    def test_filebrowser_markdown_mathjax(self):
        self.connect_to_filebrowser()
        self.get_e_by_text("home").click()
        self.get_e_by_text("cbank").click()
        self.get_e_by_text("recursion").click()
        
        e = self.get_e_by_text("ackermann.pl")
        ActionChains(self.b).move_to_element(e).perform()
        
        sleep(WAIT_TIME)
        element = self.b.find_element_by_id("node-option-1-Yggdrasil/cbank/recursion/ackermann.pl")
        self.b.execute_script("arguments[0].click();", element)
        sleep(WAIT_TIME)
        
        window_before = self.b.window_handles[0]
        window_after = self.b.window_handles[1]
        self.b.switch_to.window(window_after)
        self.b.switch_to.window(window_after)
        
        self.assertTrue(
            self.b.find_element_by_css_selector("span[class='MathJax_Preview']") is not None)
        self.b.close()
        self.b.switch_to.window(window_before)


    def test_filebrowser_theme(self):
        self.connect_to_filebrowser()
        e = self.b.find_elements_by_css_selector(".navigation-icon")[-2]
        self.assertTrue(self.b.find_element_by_css_selector(".light-theme"))
        self.assertFalse(self.b.find_elements_by_css_selector(".dark-theme"))
        e.click()
        self.assertFalse(self.b.find_elements_by_css_selector(".light-theme"))
        self.assertTrue(self.b.find_element_by_css_selector(".dark-theme"))
