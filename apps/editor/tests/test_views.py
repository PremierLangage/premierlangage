from django.contrib.auth.models import User
from django.core.exceptions import PermissionDenied
from django.test import RequestFactory, TestCase
from django.urls import reverse

from user_profile.enums import Role
from ..views import index



class EditorViewTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.teacher = User.objects.create_user(
            username='teacher', password='12345', id=100)
        cls.teacher.profile.role = Role.INSTRUCTOR
        cls.student = User.objects.create_user(
            username='student', password='12345', id=100)
        cls.student.profile.role = Role.LEARNER
        cls.factory = RequestFactory()
    
    
    def test_index(self):
        request = self.factory.post(reverse("editor:index"), {}, content_type='application/json')
        request.user = self.teacher
        
        self.assertContains(index(request), 'UPEM - PL', status_code=200)
    
    
    def test_index_403(self):
        request = self.factory.post(reverse("editor:index"), {}, content_type='application/json')
        request.user = self.student
        with self.assertRaises(PermissionDenied):
            index(request)
