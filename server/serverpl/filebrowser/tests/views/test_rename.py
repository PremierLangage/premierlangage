import os
import shutil

from django.conf import settings
from django.contrib.auth.models import User
from django.test import Client, TestCase, override_settings
from django.urls import reverse

from filebrowser.models import Directory


RES_DIR = os.path.join(settings.BASE_DIR, "filebrowser/tests/ressources/fake_filebrowser_data/")

FAKE_FB_ROOT = os.path.join(settings.BASE_DIR, 'filebrowser/tests/tmp')


@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class RenameTestCase(TestCase):
    
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
    
    
    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def test_rename_resource_file(self):
        response = self.c.post(reverse("filebrowser:option"), {
            'name'  : 'rename_resource',
            'path'  : 'Yggdrasil/TPE/function001.pl',
            'target': 'function.pl',
        }, content_type='application/json')
        
        self.assertEqual(response.status_code, 200)
        self.assertFalse(os.path.isfile(os.path.join(self.dir, 'TPE/function001.pl')))
        self.assertTrue(os.path.isfile(os.path.join(self.dir, 'TPE/function.pl')))
    
    
    def test_rename_resource_dir(self):
        response = self.c.post(reverse("filebrowser:option"), {
            'name'  : 'rename_resource',
            'path'  : 'Yggdrasil/TPE/Dir_test',
            'target': 'directory',
        }, content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertFalse(os.path.isdir(os.path.join(self.dir, 'TPE/Dir_test')))
        self.assertTrue(os.path.isdir(os.path.join(self.dir, 'TPE/directory')))
    
    
    def test_rename__resource_method_not_allowed(self):
        response = self.c.get(reverse("filebrowser:option"), {
            'name': 'rename_resource',
        }, content_type='application/json')
        self.assertEqual(response.status_code, 405)
    
    
    def test_rename_resource_missing_target_path(self):
        response = self.c.post(reverse("filebrowser:option"), {
            'name'  : 'rename_resource',
            'target': 'function.pl',
        }, content_type='application/json')
        self.assertContains(response, '"path" parameter is missing', status_code=400)
    
    
    def test_rename_resource_missing_target(self):
        response = self.c.post(reverse("filebrowser:option"), {
            'name': 'rename_resource',
            'path': '100/TPE/function001.pl',
        }, content_type='application/json')
        self.assertContains(response, '"target" parameter is missing', status_code=400)
    
    
    def test_rename_resource_existing(self):
        response = self.c.post(reverse("filebrowser:option"), {
            'name'  : 'rename_resource',
            'path'  : 'Yggdrasil/TPE/function001.pl',
            'target': 'operator001.pl',
        }, content_type='application/json')
        
        msg = "Can't rename 'function001.pl' to 'operator001.pl': this name is already used."
        self.assertContains(response, msg, status_code=400)


    @override_settings(FILEBROWSER_DISALLOWED_CHAR=["a", "b"])
    def test_rename_resource_invalid_name(self):
        response = self.c.post(reverse("filebrowser:option"), {
            'name'  : 'rename_resource',
            'path'  : 'Yggdrasil/TPE/function001.pl',
            'target': 'function_with_a.pl',
        }, content_type='application/json')
        
        msg = ("Can't rename 'function001.pl' to 'function_with_a.pl': name should not contain any of %s."
               % str(["a", "b"]))
        self.assertContains(response, msg, status_code=400)
