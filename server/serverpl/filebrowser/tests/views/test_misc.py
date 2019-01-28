import os
import shutil

from django.conf import settings
from django.contrib.auth.models import User
from django.test import Client, override_settings, TestCase
from django.urls import reverse

from filebrowser.models import Directory


FAKE_FB_ROOT = os.path.join(settings.BASE_DIR, 'filebrowser/tests/tmp')

RES_DIR = os.path.join(settings.BASE_DIR, "filebrowser/tests/ressources/fake_filebrowser_data/")



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class MiscViewTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        if os.path.isdir(FAKE_FB_ROOT):
            shutil.rmtree(FAKE_FB_ROOT)
        
        cls.user = User.objects.create_user(username='user', password='12345', id=100)
        cls.c = Client()
        cls.c.force_login(cls.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        cls.dir = Directory.objects.create(name='Yggdrasil', owner=cls.user).root
        cls.lib = Directory.objects.create(name='lib', owner=cls.user).root
        
        shutil.rmtree(os.path.join(cls.dir))
        shutil.copytree(RES_DIR, cls.dir)
    
    
    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def test_index(self):
        response = self.c.post(reverse("filebrowser:index"), {}, content_type='application/json')
        self.assertContains(response, 'UPEM - PL', status_code=200)
    
    
    def test_download_env(self):
        response = self.c.get(reverse("filebrowser:dlenv", args=["1"]), {},
                               content_type='application/json')
        print(response.content, response.status_code)
    
    
    def test_option_no_name(self):
        response = self.c.post(reverse("filebrowser:option"), {}, content_type='application/json')
        self.assertContains(response, "'name' parameter is missing", status_code=400)
