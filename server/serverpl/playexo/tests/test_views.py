import json
import os
import shutil

from django.conf import settings
from django.contrib.auth.models import User
from django.test import Client, override_settings, TestCase
from django.urls import reverse

from filebrowser.models import Directory
from loader.loader import load_file
from loader.models import Index
from playexo.models import Activity, SessionActivity, SessionExercise


FAKE_FB_ROOT = os.path.join(settings.BASE_DIR, 'playexo/tests/tmp')



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class ViewsTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='user', password='12345')
        cls.c = Client()
        cls.c.force_login(cls.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        dir_name = os.path.join(FAKE_FB_ROOT, "dir1")
        if os.path.isdir(dir_name):
            shutil.rmtree(dir_name)
        cls.dir = Directory.objects.create(name='dir1', owner=cls.user)
        shutil.copytree(os.path.join(FAKE_FB_ROOT, '../fake_pl'), cls.dir.root)
        cls.pl = load_file(cls.dir, "random_add.pl")[0]
        cls.pl.json['seed'] = 2
        cls.pl.save()
        cls.pltp = load_file(cls.dir, "random_all.pltp")[0]
        cls.pltp.save()
        cls.activity = Activity.objects.create(name="test", pltp=cls.pltp, id=1)
    
    
    def test_evaluate_missing_action(self):
        s_activity = SessionActivity.objects.create(user=self.user, activity=self.activity)
        SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        response = self.c.post(
                reverse("playexo:evaluate", args=[self.activity.id, self.pl.id]),
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
                reverse("playexo:evaluate", args=[self.activity.id, self.pl.id]),
                json.dumps({
                        "requested_action": "save",
                        "inputs"          : ""
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
                reverse("playexo:evaluate", args=[self.activity.id, self.pl.id]),
                json.dumps({
                        "requested_action": "submit",
                        "inputs"          : ""
                }),
                "json",
                HTTP_X_REQUESTED_WITH='XMLHttpRequest',
                follow=True
        )
        self.assertEquals(response.status_code, 200)
        self.assertIn("Quentin Coumes", response.content.decode())
    
    
    def test_evaluate_unknown_action(self):
        s_activity = SessionActivity.objects.create(user=self.user, activity=self.activity)
        SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        response = self.c.post(
                reverse("playexo:evaluate", args=[self.activity.id, self.pl.id]),
                json.dumps({
                        "requested_action": "unknown",
                        "inputs"          : ""
                }),
                "json",
                HTTP_X_REQUESTED_WITH='XMLHttpRequest',
                follow=True
        )
        self.assertContains(response, "Unknown action", status_code=400)
    
    
    def test_activity_view_redirect(self):
        response = self.c.get(
                reverse("playexo:activity", args=[self.activity.id]),
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
                reverse("playexo:activity", args=[self.activity.id]),
                {
                        "action": "pl",
                        "pl_id" : str(self.pl.id),
                },
                follow=True
        )
        self.assertIn("UPEM - PL", response.content.decode())
    
    
    def test_activity_view_pltp(self):
        response = self.c.get(
                reverse("playexo:activity", args=[self.activity.id]),
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
                reverse("playexo:activity", args=[self.activity.id]),
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
                reverse("playexo:activity", args=[self.activity.id]),
                {
                        "action": "reroll",
                },
                follow=True
        )
        self.assertIn("UPEM - PL", response.content.decode())


    def test_activity_view_next(self):
        s_activity = SessionActivity.objects.create(user=self.user, activity=self.activity)
        Index.objects.create(pl=self.pl, pltp=self.pltp)
        s_activity.current_pl = self.pl
        s_activity.save()
        SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        response = self.c.get(
                reverse("playexo:activity", args=[self.activity.id]),
                {
                        "action": "next",
                },
                follow=True
        )
        self.assertIn("UPEM - PL", response.content.decode())
        
    def test_activity_view_no_next(self):
        s_activity = SessionActivity.objects.create(user=self.user, activity=self.activity)
        s_activity.current_pl = self.pl
        s_activity.save()
        SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        response = self.c.get(
                reverse("playexo:activity", args=[self.activity.id]),
                {
                        "action": "next",
                },
                follow=True
        )
        self.assertIn("UPEM - PL", response.content.decode())
    
    
    def test_activity_400(self):
        s_activity = SessionActivity.objects.create(user=self.user, activity=self.activity)
        s_activity.current_pl = self.pl
        s_activity.save()
        SessionExercise.objects.create(session_activity=s_activity, pl=self.pl)
        response = self.c.get(
                reverse("playexo:activity", args=[self.activity.id]),
                {
                        "action": "pl",
                },
                follow=True
        )
        self.assertEquals(response.status_code, 400)
