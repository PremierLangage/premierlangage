from django.test import TestCase
from django.test.client import RequestFactory

from django.contrib.auth.models import User

from playexo.views import evaluate, activity_view


class ViewsTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.factory = RequestFactory()
        cls.user = User.objects.create_user(username='user', password='12345')
        
    def test_evaluate(self):
        pass
