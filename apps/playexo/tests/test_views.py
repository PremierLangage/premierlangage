import json
import os
import shutil
import uuid

from django.conf import settings
from django.contrib.auth.models import User
from django.test import Client, override_settings
from django.urls import reverse

from activity.models import SessionActivity
from filebrowser.models import Directory
from loader.loader import load_file
from misc_tests.activity_base_test_mixin import ActivityBaseTestMixin
from playexo.models import SessionExercise
from user_profile.enums import Role
from activity.mixins import PLPosition


FAKE_FB_ROOT = os.path.join("/tmp", str(uuid.uuid4()))
FAKE_PL = os.path.join(settings.APPS_DIR, 'playexo/tests/fake_pl')



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class ViewsTestCase(ActivityBaseTestMixin):
    
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()
        if os.path.isdir(FAKE_FB_ROOT):
            shutil.rmtree(FAKE_FB_ROOT)
        
        cls.user = User.objects.create_user(username='user', password='12345')
        cls.user.profile.role = Role.INSTRUCTOR
        cls.c = Client()
        cls.c.force_login(cls.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        cls.dir = Directory.objects.create(name='dir1', owner=cls.user)
        shutil.rmtree(cls.dir.root)
        shutil.copytree(FAKE_PL, cls.dir.root)
        cls.pl = load_file(cls.dir, "random_add.pl")[0]
        cls.pl.json['seed'] = 2
        cls.pl.save()
        cls.activity = load_file(cls.dir, "random_all.pltp")[0]
        cls.activity.student.add(cls.user)
    
    
    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def test_evaluate_missing_action(self):
        s_activity = SessionActivity.objects.create(user=self.user, activity=self.activity)
        SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        response = self.c.post(
            reverse("activity:evaluate", args=[self.activity.id, self.pl.id]),
            json.dumps("{}"),
            "json",
            HTTP_X_REQUESTED_WITH='XMLHttpRequest',
            follow=True
        )
        self.assertContains(response, "Missing action", status_code=400)
    
    
    def test_evaluate_save(self):
        s_activity = SessionActivity.objects.create(user=self.user, activity=self.activity)
        SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        response = self.c.post(
            reverse("activity:evaluate", args=[self.activity.id, self.pl.id]),
            json.dumps({
                "requested_action": "save",
                "inputs":           ""
            }),
            "json",
            HTTP_X_REQUESTED_WITH='XMLHttpRequest',
            follow=True
        )
        self.assertEquals(response.status_code, 200)
        self.assertIn("R\\u00e9ponse(s) sauvegard\\u00e9", response.content.decode())
    
    
    def test_evaluate_submit(self):
        s_activity = SessionActivity.objects.create(user=self.user, activity=self.activity)
        SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        response = self.c.post(
            reverse("activity:evaluate", args=[self.activity.id, self.pl.id]),
            json.dumps({
                "requested_action": "submit",
                "inputs":           ""
            }),
            "json",
            HTTP_X_REQUESTED_WITH='XMLHttpRequest',
            follow=True
        )
        self.assertEquals(response.status_code, 200)
        self.assertIn("Merci de rentrer un entier", response.content.decode())
    
    
    def test_evaluate_unknown_action(self):
        s_activity = SessionActivity.objects.create(user=self.user, activity=self.activity)
        SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        response = self.c.post(
            reverse("activity:evaluate", args=[self.activity.id, self.pl.id]),
            json.dumps({
                "requested_action": "unknown",
                "inputs":           ""
            }),
            "json",
            HTTP_X_REQUESTED_WITH='XMLHttpRequest',
            follow=True
        )
        self.assertContains(response, "Unknown action", status_code=400)
    
    
    def test_activity_view_redirect(self):
        response = self.c.get(
            reverse("activity:play", args=[self.activity.id]),
            {
                "action": "test",
            },
            follow=True
        )
        self.assertIn("UPEM - PL", response.content.decode())
    
    
    def test_activity_view_pl(self):
        s_activity = SessionActivity.objects.create(user=self.user, activity=self.activity)
        s_activity.current_pl = self.pl
        s_activity.save()
        SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        response = self.c.get(
            reverse("activity:play", args=[self.activity.id]),
            {
                "action": "pl",
                "pl_id":  str(self.pl.id),
            },
            follow=True
        )
        self.assertIn("UPEM - PL", response.content.decode())
    
    
    def test_activity_view_pltp(self):
        response = self.c.get(
            reverse("activity:play", args=[self.activity.id]),
            {
                "action": "pltp",
            },
            follow=True
        )
        self.assertIn("UPEM - PL", response.content.decode())
    
    
    def test_activity_view_reset(self):
        s_activity = SessionActivity.objects.create(user=self.user, activity=self.activity)
        s_activity.current_pl = self.pl
        s_activity.save()
        SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        response = self.c.get(
            reverse("activity:play", args=[self.activity.id]),
            {
                "action": "reset",
            },
            follow=True
        )
        self.assertIn("UPEM - PL", response.content.decode())
    
    
    def test_activity_view_reroll(self):
        s_activity = SessionActivity.objects.create(user=self.user, activity=self.activity)
        s_activity.current_pl = self.pl
        s_activity.save()
        SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        response = self.c.get(
            reverse("activity:play", args=[self.activity.id]),
            {
                "action": "reroll",
            },
            follow=True
        )
        self.assertIn("UPEM - PL", response.content.decode())
    
    
    def test_activity_view_next(self):
        s_activity = SessionActivity.objects.create(user=self.user, activity=self.activity)
        PLPosition  .objects.create(pl=self.pl, parent=self.activity)
        s_activity.current_pl = self.pl
        s_activity.save()
        SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        response = self.c.get(
            reverse("activity:play", args=[self.activity.id]),
            {
                "action": "next",
            },
            follow=True
        )
    
    
    def test_activity_view_no_next(self):
        s_activity = SessionActivity.objects.create(user=self.user, activity=self.activity)
        s_activity.current_pl = self.pl
        s_activity.save()
        SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        response = self.c.get(
            reverse("activity:play", args=[self.activity.id]),
            {
                "action": "next",
            },
            follow=True
        )
    
    
    def test_activity_400(self):
        s_activity = SessionActivity.objects.create(user=self.user, activity=self.activity,
                                                    current_pl=self.pl)
        SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        response = self.c.get(
            reverse("activity:play", args=[self.activity.id]),
            {
                "action": "pl",
            },
            follow=True
        )
        self.assertEquals(response.status_code, 400)
    
    
    def test_test_pl(self):
        pl = load_file(self.dir, "static_add.pl")[0]
        pl.save()
        response = self.c.get(reverse("playexo:test_pl", args=[pl.id]))
        self.assertEquals(response.status_code, 200)
    
    
    def test_test_pl_not_allowed(self):
        user = User.objects.create_user(username='user_learner', password='12345')
        client = Client()
        client.force_login(user, backend=settings.AUTHENTICATION_BACKENDS[0])
        pl = load_file(self.dir, "static_add.pl")[0]
        pl.save()
        response = client.get(reverse("playexo:test_pl", args=[pl.id]))
        self.assertEquals(response.status_code, 403)
    
    
    def test_test_pl_no_tests(self):
        pl = load_file(self.dir, "working.pl")[0]
        pl.save()
        response = self.c.get(reverse("playexo:test_pl", args=[pl.id]))
        self.assertEquals(response.status_code, 200)
        self.assertIn("Error during testing", response.content.decode())
    
    
    def test_test_pl_failing_tests(self):
        pl = load_file(self.dir, "failing_tests.pl")[0]
        pl.save()
        response = self.c.get(reverse("playexo:test_pl", args=[pl.id]))
        self.assertEquals(response.status_code, 200)
        self.assertIn("Builder failed:", response.content.decode())
        self.assertIn("Une erreur", response.content.decode())
        self.assertIn("Invalid test format", response.content.decode())
