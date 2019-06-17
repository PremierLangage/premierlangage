import os
import shutil
import uuid

from django.conf import settings
from django.contrib.auth.models import User
from django.test import Client, TestCase, override_settings
from django.urls import reverse

from filebrowser.models import Directory
from filebrowser.utils import missing_parameter


FAKE_FB_ROOT = os.path.join("/tmp", str(uuid.uuid4()))

RES_DIR = os.path.join(settings.APPS_DIR, "filebrowser/tests/ressources/fake_filebrowser_data/")



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class CreateTestCase(TestCase):
    
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
    
    
    def test_create_file(self):
        response = self.c.post(reverse("filebrowser:option"), {
            'name':    'create_resource',
            'path':    'Yggdrasil/TPE/Dir_test/test.pl',
            'type':    'file',
            'content': 'test',
        }, content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertTrue(os.path.isfile(os.path.join(self.dir, 'TPE/Dir_test/test.pl')))
        with open(os.path.join(self.dir, 'TPE/Dir_test/test.pl'), "r") as f:
            self.assertEqual(f.read(), "test\n")
    
    
    def test_create_dir(self):
        response = self.c.post(reverse("filebrowser:option"), {
            'name': 'create_resource',
            'path': 'Yggdrasil/TPE/Dir_test/test/',
        }, content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertTrue(os.path.isdir(os.path.join(self.dir, 'TPE/Dir_test/test/')))
    
    
    def test_create_no_path(self):
        response = self.c.post(reverse("filebrowser:option"), {
            'name': 'create_resource',
        }, content_type='application/json')
        self.assertContains(response, missing_parameter('path'), status_code=400)
    
    
    def test_create_disallowed_char(self):
        response = self.c.post(reverse("filebrowser:option"), {
            'name': 'create_resource',
            'path': 'Yggdrasil/TPE/Dir_test/+/',
        }, content_type='application/json')
        self.assertContains(response, 'contain', status_code=400)
    
    
    def test_create_already_exists(self):
        response = self.c.post(reverse("filebrowser:option"), {
            'name': 'create_resource',
            'path': 'Yggdrasil/TPE/Dir_test/already/',
        }, content_type='application/json')
        self.assertEqual(response.status_code, 200)
        
        response = self.c.post(reverse("filebrowser:option"), {
            'name': 'create_resource',
            'path': 'Yggdrasil/TPE/Dir_test/already/',
        }, content_type='application/json')
        self.assertContains(response, 'this name is already used.', status_code=400)
