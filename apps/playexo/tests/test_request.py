import os
import shutil
import uuid

from django.contrib.auth.models import User
from django.test import TestCase, override_settings

from filebrowser.models import Directory
from loader.loader import load_file
from playexo.exception import SandboxUnavailable
from playexo.request import SandboxBuild, SandboxEval


FAKE_FB_ROOT = os.path.join("/tmp", str(uuid.uuid4()))



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class RequestTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        if os.path.isdir(FAKE_FB_ROOT):
            shutil.rmtree(FAKE_FB_ROOT)
        
        cls.user = User.objects.create_user(username='user', password='12345')
        dir_name = os.path.join(FAKE_FB_ROOT, "dir1")
        if os.path.isdir(dir_name):
            shutil.rmtree(dir_name)
        cls.dir = Directory.objects.create(name='dir1', owner=cls.user)
        shutil.rmtree(cls.dir.root)
        shutil.copytree(os.path.join(FAKE_FB_ROOT, '../fake_pl'), cls.dir.root)
        cls.pl = load_file(cls.dir, "working.pl")[0]
        cls.pl.json['seed'] = 2
    
    
    @classmethod
    def tearDownClass(cls):
        if os.path.isdir(FAKE_FB_ROOT):
            shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def test_sandboxbuild_call(self):
        resp = SandboxBuild(self.pl.json).call()
        self.assertEqual(resp['context']['op1'], 1)
        self.assertEqual(resp['context']['op2'], 2)
    
    
    @override_settings(SANDBOX="")
    def test_build_end_no_sandbox(self):
        with self.assertRaises(SandboxUnavailable):
            SandboxBuild(self.pl.json).call()
    
    
    def test_sandboxeval_check(self):
        seval = SandboxEval(SandboxBuild(self.pl.json).call()['id'], {})
        self.assertTrue(seval.check())
        seval = SandboxEval(uuid.uuid4(), {})
        self.assertFalse(seval.check())
    
    
    @override_settings(SANDBOX="")
    def test_sandboxeval_check_no_sandbox(self):
        with self.assertRaises(SandboxUnavailable):
            SandboxEval(uuid.uuid4(), {}).check()
    
    
    def test_sandboxeval_call(self):
        resp = SandboxEval(SandboxBuild(self.pl.json).call()['id'], {}).call()
    
    
    @override_settings(SANDBOX="")
    def test_sandboxeval_call_no_sandbox(self):
        with self.assertRaises(SandboxUnavailable):
            SandboxEval(uuid.uuid4(), {}).call()
