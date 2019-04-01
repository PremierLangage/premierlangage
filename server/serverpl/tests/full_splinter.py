import os

from django.contrib.auth.models import User
from django.test.testcases import LiveServerTestCase
from splinter import Browser



class SplinterTestCase(LiveServerTestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.u = User.objects.create_superuser("login", password="secret", email="test@test.test")
        cls.b = Browser()
        cls.visit("filebrowser")
        cls.b.fill("username", "login")
        cls.b.fill("password", "secret")
        cls.b.find_by_text("Log-in").click()
    
    @classmethod
    def tearDownClass(cls):
        cls.b.quit()
        super().tearDownClass()
    
    
    def visit(self, url):
        self.b.visit(os.path.join(self.live_server_url, url))
    
    
    def test_login(self):
        self.visit("filebrowser")
