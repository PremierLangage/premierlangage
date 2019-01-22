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
    
    
    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def test_move_resource(self):
        response = self.c.post(reverse("filebrowser:option"), {
                'name': 'move_resource',
                'path': 'Yggdrasil/TPE/function001.pl',
                'dst' : 'Yggdrasil/TPE/Dir_test/',
        }, content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertFalse(os.path.isfile(os.path.join(self.dir, 'TPE/function001.pl')))
        self.assertTrue(os.path.isfile(os.path.join(self.dir, 'TPE/Dir_test/function001.pl')))
    
    
    def test_move_resource_no_path(self):
        response = self.c.post(reverse("filebrowser:option"), {
                'name': 'move_resource',
                'dst' : 'Yggdrasil/TPE/Dir_test/',
        }, content_type='application/json')
        self.assertContains(response, '"path" parameter is missing', status_code=400)
    
    
    def test_move_resource_no_dst(self):
        response = self.c.post(reverse("filebrowser:option"), {
                'name': 'move_resource',
                'path': 'Yggdrasil/TPE/function001.pl',
        }, content_type='application/json')
        self.assertContains(response, '"dst" parameter is missing', status_code=400)
    
    
    def test_move_resource_path_is_dst(self):
        response = self.c.post(reverse("filebrowser:option"), {
                'name': 'move_resource',
                'path': 'Yggdrasil/TPE/Dir_test/',
                'dst' : 'Yggdrasil/TPE/Dir_test/',
        }, content_type='application/json')
        self.assertContains(response, "Can't move a directory inside itself", status_code=404)
    
    
    def test_move_resource_dst_is_not_dir(self):
        response = self.c.post(reverse("filebrowser:option"), {
                'name': 'move_resource',
                'path': 'Yggdrasil/TPE/function001.pl',
                'dst' : 'Yggdrasil/TPE/Dir_test/fail',
        }, content_type='application/json')
        self.assertContains(response, 'is not a directory', status_code=404)
    
    
    def test_move_resource_dst_startswith(self):
        response = self.c.post(reverse("filebrowser:option"), {
                'name': 'move_resource',
                'path': '100/TPE/',
                'dst' : '100/TPE/Dir_test/',
        }, content_type='application/json')
        self.assertContains(response, "Can't move", status_code=404)
    
    
    def test_move_already_in(self):
        content = {
                'name': 'move_resource',
                'path': '100/carre.pl',
                'dst' : '100/TPE/Dir_test/',
        }
        response = self.c.post(reverse("filebrowser:option"), content,
                               content_type='application/json')
        self.assertEqual(response.status_code, 200)
        self.assertFalse(os.path.isfile(os.path.join(self.dir, 'carre.pl')))
        self.assertTrue(os.path.isfile(os.path.join(self.dir, 'TPE/Dir_test/carre.pl')))
        
        response = self.c.post(reverse("filebrowser:option"), content,
                               content_type='application/json')
        
        self.assertContains(response, 'already exists inside', status_code=404)
