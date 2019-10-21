import os
import shutil
import uuid

from django.conf import settings
from django.contrib.auth.models import User
from django.test import Client, TestCase, override_settings
from django.urls import reverse

from apps.filebrowser.tests.test_utils import command
from filebrowser.models import Directory
from shared.utils import missing_parameter


FAKE_FB_ROOT = os.path.join("/tmp", str(uuid.uuid4()))

RES_DIR = os.path.join(settings.APPS_DIR, "filebrowser/tests/ressources/fake_filebrowser_data/")



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class MoveTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        if os.path.isdir(FAKE_FB_ROOT):
            shutil.rmtree(FAKE_FB_ROOT)
        
        cls.user = User.objects.create_user(username='user', password='12345', id=100)
        cls.c = Client()
        cls.c.force_login(cls.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        cls.dir = Directory.objects.create(name='Yggdrasil', owner=cls.user).root
        
        shutil.rmtree(os.path.join(cls.dir))
        shutil.copytree(RES_DIR, cls.dir)
        command('git init --bare ' + FAKE_FB_ROOT)
    
    
    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def test_delete(self):
        response = self.c.post(reverse("filebrowser:option"), {
            'name': 'delete_resource',
            'path': 'Yggdrasil/TPE/function001.pl',
        }, content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertFalse(os.path.isfile(os.path.join(self.dir, 'TPE/function001.pl')))
    
    
    def test_delete_no_path(self):
        response = self.c.post(reverse("filebrowser:option"), {
            'name': 'delete_resource',
        }, content_type='application/json')
        self.assertContains(response, missing_parameter('path'), status_code=400)
    
    
    def test_delete_path_root(self):
        response = self.c.post(reverse("filebrowser:option"), {
            'name': 'delete_resource',
            'path': 'Yggdrasil',
        }, content_type='application/json')
        self.assertContains(response, 'cannot delete a root folder', status_code=400)
