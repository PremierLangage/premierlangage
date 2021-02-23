import os
import shutil
import uuid

from django.conf import settings
from django.contrib.auth.models import User
from django.test import override_settings
from django.test.client import RequestFactory

from activity.models import Activity, SessionActivity
from filebrowser.models import Directory
from loader.loader import load_file
from misc_tests.activity_base_test_mixin import ActivityBaseTestMixin
from playexo.enums import State
from playexo.exception import BuildScriptError, SandboxError
from playexo.models import Answer, SessionExercise, SessionTest
from user_profile.enums import Role


FAKE_FB_ROOT = os.path.join("/tmp", str(uuid.uuid4()))



class R:
    
    def __init__(self, path="/", user=None):
        self.path = path
        self.user = user



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class ModelTestCase(ActivityBaseTestMixin):
    
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()
        cls.user = User.objects.create_user(username='user', password='12345')
        cls.user.profile.role = Role.ADMINISTRATOR
        dir_name = os.path.join(FAKE_FB_ROOT, "dir1")
        if os.path.isdir(dir_name):
            shutil.rmtree(dir_name)
        cls.dir = Directory.objects.create(name='dir1', owner=cls.user)
        shutil.rmtree(cls.dir.root)
        shutil.copytree(os.path.join(settings.APPS_DIR, 'playexo/tests/fake_pl'), cls.dir.root)
        cls.pl = load_file(cls.dir, "random_add.pl")[0]
        cls.pl.json['seed'] = 2
        cls.pl.save()
        cls.pl2 = load_file(cls.dir, "random_add_eval_func.pl")[0]
        cls.pl2.json['seed'] = 2
        cls.pl2.save()
        cls.pltp = load_file(cls.dir, "random_all.pltp")[0]
        cls.factory = RequestFactory()
    
    
    # Test SessionExercise
    
    def test_sessionexercise_reroll(self):
        sessionactivity = SessionActivity.objects.create(user=self.user, activity=self.pltp)
        sessionexercise = SessionExercise.objects.create(session_activity=sessionactivity)
        self.assertEqual(sessionexercise.reroll(None), True)
        self.assertEqual(sessionexercise.reroll(1.), False)
        
        sessionexercise.add_to_context("settings.oneshot_threshold", '80')
        sessionexercise.add_to_context("settings.oneshot", True)
        self.assertEqual(sessionexercise.reroll(1., 70), True)
        self.assertEqual(sessionexercise.reroll(1., 90), False)
    
    
    def test_sessionexercise_build(self):
        s_activity = SessionActivity.objects.create(user=self.user, activity=self.pltp)
        
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
        s_activity = SessionActivity.objects.create(user=self.user, activity=self.pltp)
        
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
        self.assertTrue("Sandbox error:" not in e[1])
        
        broken_pl = load_file(self.dir, "broken_grader.pl")[0]
        broken_pl.save()
        s_exercise = SessionExercise.objects.create(session_activity=s_activity, pl=broken_pl)
        s_exercise.build(R())
        e = s_exercise.evaluate(R(user=self.user),
                                {'answer': s_exercise.context['op1'] + s_exercise.context['op2']})
        self.assertTrue("Une erreur s'est produite lors de l'exécution du grader ", e[1])
    
    
    def test_sessionexercice_get_pl(self):
        s_activity = SessionActivity.objects.create(user=self.user, activity=self.pltp)
        s_exercice = SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        Answer.objects.create(pl=self.pl, user=self.user, grade=10)
        
        res = s_exercice.get_pl(self.factory.get(""), {"test": "test"})
        self.assertIn("Quentin Coumes", res)
    
    
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
        self.assertEqual(Answer.activity_state(self.pltp, self.user),
                         [(self.pltp.indexed_pl()[0].id, State.NOT_STARTED),
                          (self.pltp.indexed_pl()[1].id, State.NOT_STARTED)])
        Answer.objects.create(pl=self.pltp.indexed_pl()[0], user=self.user, grade=10)
        self.assertEqual(Answer.activity_state(self.pltp, self.user),
                         [(self.pltp.indexed_pl()[0].id, State.PART_SUCC),
                          (self.pltp.indexed_pl()[1].id, State.NOT_STARTED)])
    
    
    def test_activity_summary(self):
        self.assertEqual(Answer.activity_summary(self.pltp, self.user)[State.NOT_STARTED],
                         ['100.0', '2'])
        Answer.objects.create(pl=self.pltp.indexed_pl()[0], user=self.user, grade=10)
        self.assertEqual(Answer.activity_summary(self.pltp, self.user)[State.PART_SUCC],
                         ['50.0', '1'])
    
    
    def test_course_state(self):
        course = Activity.objects.create(name="test", activity_data={"label": "test"},
                                         activity_type="course")
        course.student.add(self.user)
        Activity.objects.create(name="test", activity_type="pltp", parent=course)
        self.assertEqual(Answer.course_state(course)[0]['user_id'], self.user.id)
    
    
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
