import os
import shutil
import uuid

from django.conf import settings
from django.contrib.auth.models import User
from django.test import Client, TestCase, override_settings
from django.urls import reverse


FAKE_FB_ROOT = os.path.join("/tmp", str(uuid.uuid4()))

RES_DIR = os.path.join(settings.APPS_DIR, "filebrowser/tests/ressources/fake_filebrowser_data/")



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class MiscViewTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='user', password='12345', id=100)
        cls.c = Client()
        cls.c.force_login(cls.user, backend=settings.AUTHENTICATION_BACKENDS[0])
    
    
    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def test_index(self):
        response = self.c.post(reverse("editor:index"), {}, content_type='application/json')
        self.assertContains(response, 'UPEM - PL', status_code=200)
