import os
import shutil

from django.conf import settings
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.http import Http404
from django.test import TestCase, override_settings

from classmanagement.models import Course
from filebrowser.models import Directory
from loader.loader import load_file
from loader.models import PL, PLTP
from playexo.models import Activity, SessionActivity, SessionExercise
from playexo.exception import SandboxError, BeforeScriptError
from user_profile.enums import Role


FAKE_FB_ROOT = os.path.join(settings.BASE_DIR, 'playexo/tests/tmp')



class R:
    
    def __init__(self, path="/", user=None):
        self.path = path
        self.user = user



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class ModelTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='user', password='12345')
        cls.user.profile.role = Role.ADMINISTRATOR
        dir_name = os.path.join(FAKE_FB_ROOT, "dir1")
        if os.path.isdir(dir_name):
            shutil.rmtree(dir_name)
        cls.dir = Directory.objects.create(name='dir1', owner=cls.user)
        shutil.copytree(os.path.join(FAKE_FB_ROOT, '../fake_pl'), cls.dir.root)
        cls.pl = load_file(cls.dir, "working.pl")[0]
        cls.pl.json['seed'] = 2
        cls.pl.save()
    
    
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
        s_activity = SessionActivity.objects.create(user=self.user, activity=activity)
        
        s_exercise = SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        s_exercise.build(R())
        self.assertIn('op1', s_exercise.context.keys())
        self.assertIn('op2', s_exercise.context.keys())
        
        broken_pl = load_file(self.dir, "notworking.pl")[0]
        broken_pl.save()
        s_exercise = SessionExercise.objects.create(session_activity=s_activity, pl=broken_pl)
        with self.assertRaises(BeforeScriptError):
            s_exercise.build(R(user=self.user))
        
        broken_pl = load_file(self.dir, "no_context.pl")[0]
        broken_pl.save()
        s_exercise = SessionExercise.objects.create(session_activity=s_activity, pl=broken_pl)
        with self.assertRaises(SandboxError):
            s_exercise.build(R(user=self.user))
    
    
    def test_sessionexercise_eval(self):
        activity = Activity.objects.create(name="test", pltp=PLTP(sha1="", name="pltp test"))
        s_activity = SessionActivity.objects.create(user=self.user, activity=activity)
        
        s_exercise = SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        e = s_exercise.evaluate(R(user=self.user),
                                {'answer': ""})
        self.assertIn('grade', e[0])
        self.assertIn('op1', s_exercise.context)
        self.assertIn('op2', s_exercise.context)
        
        broken_pl = load_file(self.dir, "invalid_value_grader.pl")[0]
        broken_pl.save()
        s_exercise = SessionExercise.objects.create(session_activity=s_activity, pl=broken_pl)
        s_exercise.build(R())
        e = s_exercise.evaluate(R(user=self.user),
                                {'answer': s_exercise.context['op1'] + s_exercise.context['op2']})
        self.assertTrue("Sandbox error:" in e[1])

        broken_pl = load_file(self.dir, "broken_grader.pl")[0]
        broken_pl.save()
        s_exercise = SessionExercise.objects.create(session_activity=s_activity, pl=broken_pl)
        s_exercise.build(R())
        e = s_exercise.evaluate(R(user=self.user),
                                {'answer': s_exercise.context['op1'] + s_exercise.context['op2']})
        self.assertTrue("Une erreur s'est produite lors de l'exécution du grader ", e[1])