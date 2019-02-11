import os
import shutil

from django.conf import settings
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.http import Http404
from django.test import TestCase, override_settings
from django.test.client import RequestFactory

from classmanagement.models import Course
from filebrowser.models import Directory
from loader.loader import load_file
from loader.models import PL, PLTP
from playexo.enums import State
from playexo.exception import BuildScriptError, SandboxError
from playexo.models import Activity, Answer, SessionActivity, SessionExercise, SessionTest
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
        shutil.rmtree(cls.dir.root)
        shutil.copytree(os.path.join(FAKE_FB_ROOT, '../fake_pl'), cls.dir.root)
        cls.pl = load_file(cls.dir, "random_add.pl")[0]
        cls.pl.json['seed'] = 2
        cls.pl.save()
        cls.pl2 = load_file(cls.dir, "random_add_eval_func.pl")[0]
        cls.pl2.json['seed'] = 2
        cls.pl2.save()
        cls.pltp = load_file(cls.dir, "random_all.pltp")[0]
        cls.pltp.save()
        cls.factory = RequestFactory()
    
    
    # Test Activity
    
    def test_create_activity(self):
        course = Course.objects.create(name="test", label="bidon", consumer="bidon",
                                       consumer_id="bidon")
        params = {
                'resource_link_id': 1,
                'resource_link_title': "An Activity",
                'oauth_consumer_key': course.consumer,
                'context_id': course.consumer_id,
        }
        with self.assertRaises(Http404):
            Activity.get_or_create_from_lti(R(), params)
        
        Activity.objects.create(name="test", pltp=self.pltp, id=1)
        activity = Activity.get_or_create_from_lti(R("/playexo/activity/1/"), params)
        self.assertEqual(activity, (Activity.objects.get(pk=activity[0].pk), True))
        
        activity = Activity.get_or_create_from_lti(R("/playexo/activity/1/"), params)
        self.assertEqual(activity, (Activity.objects.get(pk=activity[0].pk), False))
        
        params['context_id'] = None
        with self.assertRaises(Http404):
            Activity.get_or_create_from_lti(R(), params)
    
    
    def test_reload_activity(self):
        activity1 = Activity.objects.create(name="test", pltp=self.pltp)
        activity2 = Activity.objects.create(name="test", parent=activity1,
                                            pltp=PLTP.objects.create(sha1="", name="pltp test"))
        sessionactivity1 = SessionActivity.objects.create(user=self.user, activity=activity1)
        sessionactivity2 = SessionActivity.objects.create(user=self.user, activity=activity2)
        activity1.reload()
        with self.assertRaises(SessionActivity.DoesNotExist):
            SessionActivity.objects.get(pk=sessionactivity1.pk)
        with self.assertRaises(SessionActivity.DoesNotExist):
            SessionActivity.objects.get(pk=sessionactivity2.pk)
    
    
    # Test SessionActivity
    
    def test_sessionactivity_exercise(self):
        activity = Activity.objects.create(name="test", pltp=self.pltp)
        sessionactivity = SessionActivity.objects.create(user=self.user, activity=activity)
        self.assertIs(None, sessionactivity.exercise().pl)
        with self.assertRaises(IntegrityError):
            sessionactivity.exercise(pl=PL(name="test", rel_path="doesnotexist"))
    
    
    def test_sessionexercise_add_get_context(self):
        activity = Activity.objects.create(name="test", pltp=self.pltp)
        sessionactivity = SessionActivity.objects.create(user=self.user, activity=activity)
        sessionexercise = SessionExercise.objects.create(session_activity=sessionactivity)
        sessionexercise.add_to_context("a.b.c", 4)
        self.assertEqual(4, sessionexercise.get_from_context("a.b.c"))
        self.assertEqual(False, sessionexercise.get_from_context("b"))
        with self.assertRaises(KeyError):
            sessionexercise.add_to_context("a.", False)
    
    
    # Test SessionExercise
    
    def test_sessionexercise_reroll(self):
        activity = Activity.objects.create(name="test", pltp=self.pltp)
        sessionactivity = SessionActivity.objects.create(user=self.user, activity=activity)
        sessionexercise = SessionExercise.objects.create(session_activity=sessionactivity)
        self.assertEqual(sessionexercise.reroll(None), True)
        self.assertEqual(sessionexercise.reroll(1.), False)
        
        sessionexercise.add_to_context("settings.oneshot_threshold", '80')
        sessionexercise.add_to_context("settings.oneshot", True)
        self.assertEqual(sessionexercise.reroll(1., 70), True)
        self.assertEqual(sessionexercise.reroll(1., 90), False)
    
    
    def test_sessionexercise_build(self):
        activity = Activity.objects.create(name="test", pltp=self.pltp)
        s_activity = SessionActivity.objects.create(user=self.user, activity=activity)
        
        s_exercise = SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        s_exercise.build(R())
        self.assertIn('op1', s_exercise.context.keys())
        self.assertIn('op2', s_exercise.context.keys())
        
        broken_pl = load_file(self.dir, "notworking.pl")[0]
        broken_pl.save()
        s_exercise = SessionExercise.objects.create(session_activity=s_activity, pl=broken_pl)
        with self.assertRaises(BuildScriptError):
            s_exercise.build(R(user=self.user))
        
        broken_pl = load_file(self.dir, "no_context.pl")[0]
        broken_pl.save()
        s_exercise = SessionExercise.objects.create(session_activity=s_activity, pl=broken_pl)
        with self.assertRaises(SandboxError):
            s_exercise.build(R(user=self.user))
    
    
    def test_sessionexercise_eval(self):
        activity = Activity.objects.create(name="test", pltp=self.pltp)
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
    
    
    def test_sessionexercice_get_pl(self):
        activity = Activity.objects.create(name="test", pltp=self.pltp)
        s_activity = SessionActivity.objects.create(user=self.user, activity=activity)
        s_exercice = SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        Answer.objects.create(pl=self.pl, user=self.user, grade=10)

        res = s_exercice.get_pl(self.factory.get(""), {"test": "test"})
        self.assertIn("Quentin Coumes", res)
    
    
    def test_sessionexercice_get_exercise(self):
        activity = Activity.objects.create(name="test", pltp=self.pltp)
        s_activity = SessionActivity.objects.create(user=self.user, activity=activity)
        s_exercice = SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)

        res = s_exercice.get_exercise(self.factory.get(""))
        self.assertIn("Quentin Coumes", res)
        
        s_exercice = SessionExercise.objects.create(session_activity=s_activity)

        res = s_exercice.get_exercise(self.factory.get(""))
        self.assertIn("Random add", res)
    
    
    def test_sessionexercice_get_navigation(self):
        activity = Activity.objects.create(name="test", pltp=self.pltp)
        s_activity = SessionActivity.objects.create(user=self.user, activity=activity)
        s_exercice = SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        
        res = s_exercice.get_navigation(self.factory.get(""))
        self.assertIn("navigation", res)
    
    
    def test_sessionexercice_get_context(self):
        activity = Activity.objects.create(name="test", pltp=self.pltp)
        s_activity = SessionActivity.objects.create(user=self.user, activity=activity)
        s_exercice = SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)

        res = s_exercice.get_context(self.factory.get(""))
        self.assertIn("exercise", res)
        self.assertIs(type(res), dict)
    
    
    # Test Answer
    
    def test_highest_grade(self):
        self.assertIs(Answer.highest_grade(self.pl, self.user), None)
        Answer.objects.create(pl=self.pl, user=self.user, grade=10)
        Answer.objects.create(pl=self.pl, user=self.user, grade=20)
        self.assertEqual(Answer.highest_grade(self.pl, self.user).grade, 20)
    
    
    def test_last(self):
        self.assertIs(Answer.last(self.pl, self.user), None)
        Answer.objects.create(pl=self.pl, user=self.user, grade=20)
        Answer.objects.create(pl=self.pl, user=self.user, grade=10)
        self.assertEqual(Answer.last(self.pl, self.user).grade, 10)
    
    
    def test_pl_state(self):
        self.assertIs(Answer.pl_state(self.pl, self.user), State.NOT_STARTED)
        Answer.objects.create(pl=self.pl, user=self.user, grade=10)
        self.assertEqual(Answer.pl_state(self.pl, self.user), State.PART_SUCC)
    
    
    def test_pl_state(self):
        self.assertEqual(Answer.pltp_state(self.pltp, self.user),
                         [(self.pltp.indexed_pl()[0].id, State.NOT_STARTED),
                          (self.pltp.indexed_pl()[1].id, State.NOT_STARTED)])
        Answer.objects.create(pl=self.pltp.indexed_pl()[0], user=self.user, grade=10)
        self.assertEqual(Answer.pltp_state(self.pltp, self.user),
                         [(self.pltp.indexed_pl()[0].id, State.PART_SUCC),
                          (self.pltp.indexed_pl()[1].id, State.NOT_STARTED)])
    
    
    def test_pltp_summary(self):
        self.assertEqual(Answer.pltp_summary(self.pltp, self.user)[State.NOT_STARTED],
                         ['100.0', '2'])
        Answer.objects.create(pl=self.pltp.indexed_pl()[0], user=self.user, grade=10)
        self.assertEqual(Answer.pltp_summary(self.pltp, self.user)[State.PART_SUCC], ['50.0', '1'])
    
    
    def test_course_state(self):
        course = Course.objects.create(name="test", label="test")
        course.student.add(self.user)
        Activity.objects.create(name="test", pltp=self.pltp, course=course)
        self.assertEqual(Answer.course_state(course)[0]['user_id'], self.user.id)
    
    
    def test_user_course_summary(self):
        course = Course.objects.create(name="test", label="test")
        course.student.add(self.user)
        Activity.objects.create(name="test", pltp=self.pltp, course=course)
        self.assertEqual(Answer.user_course_summary(course, self.user)[State.NOT_STARTED],
                         ['100.0', '2'])
    
    # Test SessionTest
    
    def test_sessiontest_save(self):
        s_test = SessionTest.objects.create(user=self.user, pl=self.pl)
        for i in range(SessionTest.MAX_SESSION_PER_USER + 2):
            SessionTest.objects.create(user=self.user, pl=self.pl)
        self.assertEquals(len(SessionTest.objects.filter(user=self.user)),
                          SessionTest.MAX_SESSION_PER_USER)
        self.assertEquals(dict(self.pl.json), s_test.context)


    def test_sessiontest_get_pl(self):
        s_test = SessionTest.objects.create(user=self.user, pl=self.pl)
        res = s_test.get_pl(self.factory.get(""), answer={"grade": 50})
        self.assertIn("Quentin Coumes", res)
        
    def test_sessiontest_get_exercise(self):
        s_test = SessionTest.objects.create(user=self.user, pl=self.pl)
        res = s_test.get_exercise(self.factory.get(""))
        self.assertIn("Quentin Coumes", res)
