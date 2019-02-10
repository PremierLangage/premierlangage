import os
import shutil

from django.conf import settings
from django.contrib.auth.models import User
from django.test import Client, override_settings, TestCase
from django.urls import reverse

from filebrowser.models import Directory
from filebrowser.utils import to_download_url
from filebrowser.utils import missing_parameter

FAKE_FB_ROOT = os.path.join(settings.BASE_DIR, 'filebrowser/tests/tmp')

RES_DIR = os.path.join(settings.BASE_DIR, "filebrowser/tests/ressources/fake_filebrowser_data/")



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class GetUpdateResourceTestCase(TestCase):
    
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
    
    
    def test_get_resource(self):
        response = self.c.get(reverse("filebrowser:option"), {
                'name': 'get_resource',
                'path': 'Yggdrasil/TPE/Dir_test/test.txt',
        }, content_type='application/json')
        self.assertContains(response, 'test', status_code=200)
    
    def test_get_resource_image(self):
        response = self.c.get(reverse("filebrowser:option"), {
                'name': 'get_resource',
                'path': 'Yggdrasil/image.png',
        }, content_type='application/json')
        self.assertContains(response, to_download_url('Yggdrasil/image.png'), status_code=200)
    
    def test_get_resource_no_path(self):
        response = self.c.get(reverse("filebrowser:option"), {
                'name': 'get_resource',
        }, content_type='application/json')
        self.assertContains(response, missing_parameter('path'), status_code=400)
    
    
    def test_get_resources(self):
        response = self.c.get(reverse("filebrowser:option"), {
                'name': 'get_resources',
        }, content_type='application/json')
        self.assertContains(response, b'Yggdrasil', status_code=200)
    
    
    def test_update(self):
        response = self.c.post(reverse("filebrowser:option"), {
                'name': 'update_resource',
                'path': 'Yggdrasil/TPE/Dir_test/test.txt',
        }, content_type='application/json')
        self.assertContains(response, "success", status_code=200)
    
    
    def test_update_no_path(self):
        response = self.c.post(reverse("filebrowser:option"), {
                'name': 'update_resource',
        }, content_type='application/json')
        self.assertContains(response, missing_parameter('path'), status_code=400)
