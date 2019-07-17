import os
import shutil
import uuid

from django.contrib.auth.models import User
from django.test import TestCase, override_settings

from filebrowser.models import Directory


FAKE_FB_ROOT = os.path.join("/tmp", str(uuid.uuid4()))



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class ModelTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        if os.path.isdir(FAKE_FB_ROOT):
            shutil.rmtree(FAKE_FB_ROOT)
        
        cls.user = User.objects.create_user(username='user', password='12345', id=100)
        cls.user2 = User.objects.create_user(username='user2', password='12345', id=200)
        cls.user3 = User.objects.create_user(username='user3', password='12345', id=300)
        cls.user4 = User.objects.create_user(username='user4', password='12345', id=400)
        cls.user5 = User.objects.create_user(username='user5', password='12345', id=500)
        
        cls.d = Directory.objects.create(name="Yggdrasil", owner=cls.user)
        if os.path.isdir(cls.d.root):
            shutil.rmtree(cls.d.root)
        cls.d.add_write_auth(cls.user2)
        cls.d.add_read_auth(cls.user3)
    
    
    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def test_add_remove_write(self):
        self.assertTrue(self.user5 not in self.d.write_auth.all())
        self.d.add_write_auth(self.user5)
        self.assertTrue(self.user5 in self.d.write_auth.all())
        self.d.remove_write_auth(self.user5)
        self.assertTrue(self.user5 not in self.d.write_auth.all())
    
    
    def test_add_remove_read(self):
        self.assertTrue(self.user5 not in self.d.read_auth.all())
        self.d.add_read_auth(self.user5)
        self.assertTrue(self.user5 in self.d.read_auth.all())
        self.d.remove_read_auth(self.user5)
        self.assertTrue(self.user5 not in self.d.read_auth.all())
    
    
    def test_is_repository(self):
        self.d.remote = True
        self.assertTrue(self.d.is_repository())
        self.d.remote = False
        self.assertFalse(self.d.is_repository())
    
    
    def test_str(self):
        self.assertEqual(str(self.d), 'Yggdrasil')
    
    
    def test_can_read(self):
        self.assertTrue(self.d.can_read(self.user))
        self.assertTrue(self.d.can_read(self.user2))
        self.assertTrue(self.d.can_read(self.user3))
        self.assertFalse(self.d.can_read(self.user4))
    
    
    def test_can_write(self):
        self.assertTrue(self.d.can_write(self.user))
        self.assertTrue(self.d.can_write(self.user2))
        self.assertFalse(self.d.can_write(self.user3))
        self.assertFalse(self.d.can_write(self.user4))
    
    
    def test_is_owner(self):
        self.assertTrue(self.d.is_owner(self.user))
        self.assertFalse(self.d.is_owner(self.user2))
        self.assertFalse(self.d.is_owner(self.user3))
        self.assertFalse(self.d.is_owner(self.user4))
