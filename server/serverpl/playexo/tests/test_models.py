from django.contrib.auth.models import User
from django.db import IntegrityError
from django.http import Http404
from django.test import TestCase

from classmanagement.models import Course
from loader.models import PL, PLTP
from playexo.models import Activity, SessionActivity, SessionExercise



class R:
    
    def __init__(self, path="/"): self.path = path



class ModelTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='user', password='12345')
    
    
    def test_create_activity(self):
        course = Course.objects.create(name="test", label="bidon", consumer="bidon",
                                       consumer_id="bidon")
        params = {
            'resource_link_id'   : 1,
            'resource_link_title': "An Activity",
            'oauth_consumer_key' : course.consumer,
            'context_id'         : course.consumer_id,
        }
        with self.assertRaises(Http404):
            Activity.get_or_create_from_lti(R(), params)
        
        pltp = PLTP.objects.create(sha1="", name="pltp test")
        Activity.objects.create(name="test", pltp=pltp, id=1)
        activity = Activity.get_or_create_from_lti(R("/playexo/activity/1/"), params)
        self.assertEqual(activity, (Activity.objects.get(pk=activity[0].pk), True))
        
        activity = Activity.get_or_create_from_lti(R("/playexo/activity/1/"), params)
        self.assertEqual(activity, (Activity.objects.get(pk=activity[0].pk), False))
        
        params['context_id'] = None
        with self.assertRaises(Http404):
            Activity.get_or_create_from_lti(R(), params)
    
    
    def test_reload_activity(self):
        activity1 = Activity.objects.create(name="test", pltp=PLTP(sha1="", name="pltp test"))
        activity2 = Activity.objects.create(name="test", parent=activity1,
                                            pltp=PLTP(sha1="", name="pltp test"))
        sessionactivity1 = SessionActivity.objects.create(user=self.user, activity=activity1)
        sessionactivity2 = SessionActivity.objects.create(user=self.user, activity=activity2)
        activity1.reload()
        with self.assertRaises(SessionActivity.DoesNotExist):
            SessionActivity.objects.get(pk=sessionactivity1.pk)
        with self.assertRaises(SessionActivity.DoesNotExist):
            SessionActivity.objects.get(pk=sessionactivity2.pk)
    
    
    def test_sessionactivity_exercise(self):
        activity = Activity.objects.create(name="test", pltp=PLTP(sha1="", name="pltp test"))
        sessionactivity = SessionActivity.objects.create(user=self.user, activity=activity)
        self.assertIs(None, sessionactivity.exercise().pl)
        with self.assertRaises(IntegrityError):
            sessionactivity.exercise(pl=PL(name="test", rel_path="doesnotexist"))
    
    
    def test_sessionexercise_add_get_context(self):
        activity = Activity.objects.create(name="test", pltp=PLTP(sha1="", name="pltp test"))
        sessionactivity = SessionActivity.objects.create(user=self.user, activity=activity)
        sessionexercise = SessionExercise.objects.create(session_activity=sessionactivity)
        sessionexercise.add_to_context("a.b.c", 4)
        self.assertEqual(4, sessionexercise.get_from_context("a.b.c"))
        self.assertEqual(False, sessionexercise.get_from_context("b"))
        with self.assertRaises(KeyError):
            sessionexercise.add_to_context("a.", False)
    
    
    def test_sessionexercise_reroll(self):
        activity = Activity.objects.create(name="test", pltp=PLTP(sha1="", name="pltp test"))
        sessionactivity = SessionActivity.objects.create(user=self.user, activity=activity)
        sessionexercise = SessionExercise.objects.create(session_activity=sessionactivity)
        self.assertEqual(sessionexercise.reroll(None), True)
        self.assertEqual(sessionexercise.reroll(1.), False)
        
        sessionexercise.add_to_context("settings.oneshot_threshold", '80')
        sessionexercise.add_to_context("settings.oneshot", True)
        self.assertEqual(sessionexercise.reroll(1., 70), True)
        self.assertEqual(sessionexercise.reroll(1., 90), False)
    
    
    def test_sessionexercise_build(self):
        activity = Activity.objects.create(name="test", pltp=PLTP(sha1="", name="pltp test"))
        sessionactivity = SessionActivity.objects.create(user=self.user, activity=activity)
        sessionexercise = SessionExercise.objects.create(session_activity=sessionactivity)
        
        #sessionexercise.build(R())
