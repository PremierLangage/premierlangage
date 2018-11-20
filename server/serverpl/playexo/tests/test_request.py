
from django.test import TestCase
from playexo.request import SandboxBuild

class ModelTestCase(TestCase):
    
    def test_build_env(self):
        SandboxBuild()