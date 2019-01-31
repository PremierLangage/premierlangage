import os
import shutil
import subprocess
from os.path import join

import mock
from django.conf import settings
from django.contrib.auth.models import User
from django.test import Client, override_settings, TestCase
from django.urls import reverse

from filebrowser.models import Directory
import gitcmd


FAKE_FB_ROOT = join(settings.BASE_DIR, 'filebrowser/tests/tmp')

RES_DIR = os.path.join(settings.BASE_DIR, "filebrowser/tests/ressources/fake_filebrowser_data/")



def command(cmd, dir=None):
    if dir:
        cwd = os.getcwd()
        os.chdir(dir)
    p = subprocess.Popen(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            shell=True
    )
    out, err = p.communicate()
    if p.returncode:
        raise RuntimeError("CWD: " + os.getcwd() + "\nReturn code : " + str(p.returncode)
                           + " - " + err.decode() + out.decode()) + "\ncmd: " + cmd
    if dir:
        os.chdir(cwd)
    
    return out, err



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class GitTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='user', password='12345', id=100)
        cls.user2 = User.objects.create_user(username='user2', password='12345', id=200)
        cls.c = Client()
        cls.c.force_login(cls.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        
        cls.folder = Directory.objects.create(name='Yggdrasil', owner=cls.user)
        cls.lib = Directory.objects.create(name='lib', owner=cls.user)
        cls.host = Directory.objects.create(name='host', owner=cls.user2)
        
        shutil.rmtree(cls.folder.root)
        shutil.rmtree(cls.host.root)
        
        shutil.copytree(RES_DIR, os.path.join(cls.folder.root, "folder1"))
        shutil.copytree(RES_DIR, os.path.join(cls.folder.root, "folder2"))
        command('git init --bare ' + cls.host.root)
        command('git init ' + cls.folder.root + "/folder1")
        command('git init ' + cls.folder.root + "/folder2")
        
        cwd = os.getcwd()
        os.chdir(cls.folder.root + "/folder1")
        command('git remote add origin ' + cls.host.root)
        command('git add .')
        command('git commit -m "Initial commit"')
        command('git push --set-upstream origin master')
        os.chdir(cls.folder.root + "/folder2")
        command('git remote add origin ' + cls.host.root)
        command('touch to_be_pull')
        command('git add .')
        command('git commit -m "Initial commit"')
        command('git pull origin master --allow-unrelated-histories')
        command('git push --set-upstream origin master')
        os.chdir(cwd)
    
    
    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def test_commit_method_not_allowed(self):
        response = self.c.get(
                reverse("filebrowser:option"),
                {
                        'name': 'git_commit',
                }, content_type='application/json'
        )
        self.assertEqual(response.status_code, 405)
    
    
    def test_status_method_not_allowed(self):
        response = self.c.post(
                reverse("filebrowser:option"),
                {
                        'name': 'git_status',
                }, content_type='application/json'
        )
        self.assertEqual(response.status_code, 405)
    
    
    def test_add_method_not_allowed(self):
        response = self.c.post(
                reverse("filebrowser:option"),
                {
                        'name': 'git_add',
                }, content_type='application/json'
        )
        self.assertEqual(response.status_code, 405)
    
    
    def test_show_method_not_allowed(self):
        response = self.c.post(
                reverse("filebrowser:option"),
                {
                        'name': 'git_show',
                }, content_type='application/json'
        )
        self.assertEqual(response.status_code, 405)
    
    
    def test_clone_method_not_allowed(self):
        response = self.c.get(
                reverse("filebrowser:option"),
                {
                        'name': 'git_clone',
                }, content_type='application/json'
        )
        self.assertEqual(response.status_code, 405)
    
    
    def test_push_method_not_allowed(self):
        response = self.c.get(
                reverse("filebrowser:option"),
                {
                        'name': 'git_push',
                }, content_type='application/json'
        )
        self.assertEqual(response.status_code, 405)
    
    
    def test_pull_method_not_allowed(self):
        response = self.c.get(
                reverse("filebrowser:option"),
                {
                        'name': 'git_pull',
                }, content_type='application/json'
        )
        self.assertEqual(response.status_code, 405)
    
    
    def test_commit(self):
        with open(join(FAKE_FB_ROOT, 'Yggdrasil/folder1/TPE/function001.pl'), 'w') as f:
            print("test", file=f)
        response = self.c.post(
                reverse("filebrowser:option"),
                {
                        'name'  : 'git_commit',
                        'commit': 'mycommit',
                        'path'  : 'Yggdrasil/folder1/TPE/function001.pl',
                }, content_type='application/json'
        )
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"mycommit",
                      command("git log", dir=os.path.join(self.folder.root, "folder1"))[0])
    
    
    def test_commit_no_path(self):
        with open(join(FAKE_FB_ROOT, 'Yggdrasil/folder1/TPE/function001.pl'), 'w') as f:
            print("test", file=f)
        response = self.c.post(
                reverse("filebrowser:option"),
                {
                        'name'  : 'git_commit',
                        'commit': 'mycommit',
                }, content_type='application/json'
        )
        self.assertContains(response, "parameter 'path' is missing", status_code=400)
    
    
    def test_commit_directory(self):
        with open(join(FAKE_FB_ROOT, 'Yggdrasil/folder1/TPE/operator001.pl'), 'w+') as f1, \
                open(join(FAKE_FB_ROOT, 'Yggdrasil/folder1/TPE/function001.pl'), 'w+') as f2:
            print("test1", file=f1)
            print("test2", file=f2)
        response = self.c.post(
                reverse("filebrowser:option"),
                {
                        'name'  : 'git_commit',
                        'commit': 'mycommit2',
                        'path'  : 'Yggdrasil/folder1/TPE/',
                }, content_type='application/json'
        )
        self.assertContains(response, "", status_code=200)
        self.assertIn(b"mycommit2",
                      command("git log", dir=os.path.join(self.folder.root, "folder1"))[0])
    
    
    def test_commit_without_message(self):
        response = self.c.post(
                reverse("filebrowser:option"),
                {
                        'name': 'git_commit',
                        'path': 'Yggdrasil/folder1/TPE/',
                }, content_type='application/json'
        )
        self.assertContains(response, "Missing 'commit' parameter", status_code=400)
    
    
    def test_push(self):
        open(join(FAKE_FB_ROOT, 'Yggdrasil/folder1/TPE/function001.pl'), 'w+').close()
        response = self.c.post(
                reverse("filebrowser:option"),
                {
                        'name'    : 'git_push',
                        'username': '',
                        'password': '',
                        'path'    : 'Yggdrasil/folder1/TPE/',
                }, content_type='application/json'
        )
        self.assertContains(response, "master -> master", status_code=200)
    
    
    def test_push_no_path(self):
        open(join(FAKE_FB_ROOT, 'Yggdrasil/folder1/TPE/function001.pl'), 'w+').close()
        response = self.c.post(
                reverse("filebrowser:option"),
                {
                        'name'    : 'git_push',
                        'username': '',
                        'password': '',
                }, content_type='application/json'
        )
        self.assertContains(response, "parameter 'path' is missing", status_code=400)
    
    
    def test_status(self):
        gitcmd.GIT_LANG = "en-US.UTF-8"
        with open(join(FAKE_FB_ROOT, 'Yggdrasil/folder1/TPE/function001.pl'), 'w+') as f:
            print("abcdefghijklmnopqrstuvwxyz", file=f)
        response = self.c.get(
                reverse("filebrowser:option"),
                {
                        'name': 'git_status',
                        'path': 'Yggdrasil/folder1/',
                }, content_type='application/json'
        )
        self.assertContains(response, "modif", status_code=200)
    
    
    def test_status_no_path(self):
        with open(join(FAKE_FB_ROOT, 'Yggdrasil/folder1/TPE/function001.pl'), 'w+') as f:
            print("abcdefghijklmnopqrstuvwxyz", file=f)
        response = self.c.get(
                reverse("filebrowser:option"),
                {
                        'name': 'git_status',
                }, content_type='application/json'
        )
        self.assertContains(response, "parameter 'path' is missing", status_code=400)
    
    
    @mock.patch("gitcmd.GIT_LANG", "en-US.UTF-8")
    def test_add(self):
        with open(join(FAKE_FB_ROOT, 'Yggdrasil/folder1/TPE/function001.pl'), 'w+') as f:
            print("abcdefghijklmnopqrstuvwxyz", file=f)
        response = self.c.get(
                reverse("filebrowser:option"),
                {
                        'name': 'git_add',
                        'path': 'Yggdrasil/folder1/TPE/function001.pl',
                }, content_type='application/json'
        )
        self.assertContains(response, "Entry successfully added to the index.")
        self.assertIn(b"TPE/function001.pl",
                      command("git status", dir=os.path.join(self.folder.root, "folder1"))[0])
    
    
    def test_add_no_path(self):
        response = self.c.get(
                reverse("filebrowser:option"),
                {
                        'name': 'git_add',
                }, content_type='application/json'
        )
        self.assertContains(response, "parameter 'path' is missing", status_code=400)
    
    
    def test_pull(self):
        with open(os.path.join(self.folder.root, "folder2/test_pull.txt"), "w") as f:
            print("test", file=f)
        command('git add test_pull.txt', dir=os.path.join(self.folder.root, "folder2"))
        command('git commit -m "pull"', dir=os.path.join(self.folder.root, "folder2"))
        command("git push", dir=os.path.join(self.folder.root, "folder2"))
        response = self.c.post(
                reverse('filebrowser:option'), {
                        'path': 'Yggdrasil/folder1',
                        'name': 'git_pull',
                        'url' : 'file://' + self.host.root
                }, content_type='application/json'
        )
        self.assertEqual(response.status_code, 200)
        with open(os.path.join(self.folder.root, "folder1/test_pull.txt"), "r") as f:
            self.assertEqual("test\n", f.read())
    
    
    def test_clone(self):
        command("mkdir folder3", dir=self.folder.root)
        response = self.c.post(
                reverse('filebrowser:option'), {
                        'name': 'git_clone',
                        'path': 'Yggdrasil/folder3',
                        'url' : 'file://' + self.host.root,
                }, content_type='application/json'
        )
        self.assertEqual(response.status_code, 200)
        self.assertTrue(os.path.isfile(os.path.join(self.folder.root, "folder3/host/carre.pl")))
        command("rm -rf folder3", dir=self.folder.root)
    
    
    def test_clone_no_url(self):
        response = self.c.post(
                reverse('filebrowser:option'), {
                        'name': 'git_clone',
                        'path': 'Yggdrasil/folder1',
                }, content_type='application/json'
        )
        self.assertContains(response, "Missing 'url' parameter", status_code=400)
    
    
    def test_clone_at_url(self):
        response = self.c.post(
                reverse('filebrowser:option'), {
                        'name': 'git_clone',
                        'path': 'Yggdrasil/folder1',
                        'url' : 'me@pl',
                }, content_type='application/json'
        )
        self.assertContains(response, "SSH link is not supported, please use HTTPS",
                            status_code=404)
    
    
    def test_show(self):
        response = self.c.get(
                reverse('filebrowser:option'), {
                        'name': 'git_show',
                        'path': 'Yggdrasil/folder1/TPE/function001.pl',
                }, content_type='application/json'
        )
        self.assertContains(response, "test\ntest2", status_code=200)
    
    
    def test_show_no_path(self):
        response = self.c.get(
                reverse('filebrowser:option'), {
                        'name': 'git_show',
                }, content_type='application/json'
        )
        self.assertContains(response, "parameter 'path' is missing", status_code=400)
    
    
    def test_checkout(self):
        with open(join(FAKE_FB_ROOT, 'Yggdrasil/folder1/TPE/function001.pl'), 'w') as f:
            print("test_checkout", file=f)
        response = self.c.get(
                reverse('filebrowser:option'), {
                        'name': 'git_checkout',
                        'path': 'Yggdrasil/folder1/TPE/function001.pl',
                }, content_type='application/json'
        )
        self.assertContains(response, "success", status_code=200)
        with open(join(FAKE_FB_ROOT, 'Yggdrasil/folder1/TPE/function001.pl'), "r") as f:
            self.assertEqual(f.read(), "abcdefghijklmnopqrstuvwxyz\n")
    
    
    def test_checkout_no_path(self):
        response = self.c.get(
                reverse('filebrowser:option'), {
                        'name': 'git_checkout',
                }, content_type='application/json'
        )
        self.assertContains(response, "parameter 'path' is missing", status_code=400)
