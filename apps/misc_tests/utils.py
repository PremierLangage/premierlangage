# utils.py
#
# Authors:
#   - Coumes Quentin <coumes.quentin@gmail.com>
#   - Calle Christophe <ccalle@etud.u-pem.fr>


import os
import time

from django.conf import settings
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from django.test import override_settings
from selenium import webdriver


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
class BaseSeleniumTestCase(StaticLiveServerTestCase):
    
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.b = webdriver.Firefox()
        cls.b.implicitly_wait(10)


    def get_e_by_text(self, text):
        e = self.b.find_elements_by_xpath("//*[contains(text(), '" + text + "')]")
        return e[0] if len(e) > 0 else None
    
    
    def connect(self, login, passwd):
        e = self.get_e_by_text("Se connecter")
        if e is not None:
            e = self.b.find_element_by_name("username")
            e.send_keys(login)
            e = self.b.find_element_by_name("password")
            e.send_keys(passwd)
            self.get_e_by_text('Log-in').click()
            sleep(3 * WAIT_TIME)
    
    
    def visit(self, url):
        self.b.get(self.live_server_url + url)
    
    
    def answer_pl(self, answer):
        sleep(WAIT_TIME)
        self.b.find_element_by_css_selector('input[name="answer"]').send_keys(answer)
        self.b.find_element_by_xpath("//*[contains(text(), 'Valider')]").click()
        sleep(WAIT_TIME)
