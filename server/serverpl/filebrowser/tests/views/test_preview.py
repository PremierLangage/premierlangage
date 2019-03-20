import os
import shutil

from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.messages import constants as messages
from django.test import Client, override_settings, TestCase
from django.urls import reverse

from filebrowser.models import Directory
from filebrowser.utils import missing_parameter

from loader.loader import load_file
from playexo.models import SessionTest


FAKE_FB_ROOT = os.path.join(settings.BASE_DIR, 'filebrowser/tests/tmp')

RES_DIR = os.path.join(settings.BASE_DIR, "filebrowser/tests/ressources/fake_filebrowser_data/")



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class PreviewTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        if os.path.isdir(FAKE_FB_ROOT):
            shutil.rmtree(FAKE_FB_ROOT)
        
        cls.user = User.objects.create_user(username='user', password='12345', id=100)
        cls.c = Client()
        cls.c.force_login(cls.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        cls.dir = Directory.objects.create(name='Yggdrasil', owner=cls.user)
        cls.lib = Directory.objects.create(name='lib', owner=cls.user)
        
        shutil.rmtree(os.path.join(cls.dir.root))
        shutil.copytree(RES_DIR, cls.dir.root)
    
    
    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def test_preview(self):
        with open(os.path.join(self.dir.root, "working.pl"), "r") as f:
            c = f.read()
        response = self.c.post(reverse("filebrowser:option"), {
                'name'            : 'preview_pl',
                'path'            : 'Yggdrasil/working.pl',
                'requested_action': 'preview',
                'content'         : c,
        }, content_type='application/json')
        self.assertContains(response, "Quentin Coumes", status_code=200)
    
    
    def test_preview_warnings(self):
        with open(os.path.join(self.dir.root, "warning.pl"), "r") as f:
            c = f.read()
        response = self.c.post(reverse("filebrowser:option"), {
                'name'            : 'preview_pl',
                'path'            : 'Yggdrasil/warning.pl',
                'requested_action': 'preview',
                'content'         : c,
        }, content_type='application/json')
        m = list(response.context['messages'])
        self.assertEqual(len(m), 1)
        self.assertEqual(m[0].level, messages.WARNING)
        self.assertContains(response, "Christophe Call", status_code=200)
    
    
    def test_preview_warning_no_content(self):
        response = self.c.post(reverse("filebrowser:option"), {
                'name'            : 'preview_pl',
                'path'            : 'Yggdrasil/working.pl',
                'requested_action': 'preview',
        }, content_type='application/json')
        self.assertContains(response, "Failed to load", status_code=200)
    
    
    def test_preview_no_path(self):
        response = self.c.post(reverse("filebrowser:option"), {
                'name'            : 'preview_pl',
                'requested_action': 'preview',
        }, content_type='application/json')
        self.assertContains(response, missing_parameter('path'), status_code=400)
    
    
    def test_evaluate_pl(self):
        pl = load_file(self.dir, "working.pl")[0]
        pl.save()
        s_test = SessionTest.objects.create(user=self.user, pl=pl)
        response = self.c.post(reverse("filebrowser:option"), {
                'name'            : 'evaluate_pl',
                'path'            : 'Yggdrasil/working.pl',
                'data'            : {
                        'session_id': s_test.id,
                        'answers'   : {},
                }
        }, content_type='application/json')
        self.assertContains(response, "navigation", status_code=200)
        self.assertContains(response, "Merci de rentrer un entier", status_code=200)
        self.assertContains(response, "Quentin Coumes<", status_code=200)
    
    
    def test_evaluate_pl_invalid_session_id(self):
        response = self.c.post(reverse("filebrowser:option"), {
                'name'            : 'evaluate_pl',
                'path'            : 'Yggdrasil/working.pl',
                'data'            : {
                        'session_id': 100
                }
        }, content_type='application/json')
        self.assertContains(response, "SessionTest matching query does not exist.", status_code=400)
    
    
    def test_evaluate_pl_empty_data(self):
        response = self.c.post(reverse("filebrowser:option"), {
                'name'            : 'evaluate_pl',
                'path'            : 'Yggdrasil/working.pl',
                'data'            : {}
        }, content_type='application/json')
        self.assertContains(response, "Couldn't resolve ajax request", status_code=400)
    
# not used anymore because preview_pl
"""     def test_preview_no_requested_action(self): 
        response = self.c.post(reverse("filebrowser:option"), {
                'name': 'preview_pl',
                'path': 'Yggdrasil/working.pl',
        }, content_type='application/json')
        self.assertContains(response, "Couldn't resolve ajax request", status_code=400)
 """