import os
import shutil
import subprocess

import gitcmd
from django.conf import settings
from django.contrib.auth.models import User
from django.test import TestCase, override_settings

from filebrowser import utils
from filebrowser.models import Directory


RES_DIR = os.path.join(settings.BASE_DIR, "filebrowser/tests/ressources/filter/")
WALK_DIR = os.path.join(settings.BASE_DIR, "filebrowser/tests/ressources/walkdir/")

FAKE_FB_ROOT = os.path.join(settings.BASE_DIR, 'filebrowser/tests/tmp')



def command(cmd):
    p = subprocess.Popen(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            shell=True
    )
    out, err = p.communicate()
    if p.returncode:
        raise RuntimeError("Return code : " + str(p.returncode)
                           + " - " + err.decode() + out.decode())



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class UtilsTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        if os.path.isdir(FAKE_FB_ROOT):
            shutil.rmtree(FAKE_FB_ROOT)
        
        cls.github = os.path.join(FAKE_FB_ROOT, "github")
        cls.bitbucket = os.path.join(FAKE_FB_ROOT, "bitbucket")
        cls.gitlab = os.path.join(FAKE_FB_ROOT, "gitlab")
        cls.git = os.path.join(FAKE_FB_ROOT, "git")
        
        command('git init --bare ' + cls.github)
        command('git init --bare ' + cls.bitbucket)
        command('git init --bare ' + cls.gitlab)
        command('git init --bare ' + cls.git)
        
        current = os.getcwd()
        try:
            os.chdir(cls.github)
            command('git remote add origin www.github.com')
            os.chdir(cls.bitbucket)
            command('git remote add origin www.bitbucket.org')
            os.chdir(cls.gitlab)
            command('git remote add origin www.gitlab.com')
            os.chdir(cls.git)
            command('git remote add origin www.unknown.com')
        finally:
            os.chdir(current)
    
    
    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def test_join_fb_root(self):
        self.assertEqual(utils.join_fb_root("file.txt"),
                         os.path.abspath(os.path.join(settings.FILEBROWSER_ROOT, "file.txt")))
        self.assertEqual(utils.join_fb_root("dir/file.txt"),
                         os.path.abspath(os.path.join(settings.FILEBROWSER_ROOT, "dir/file.txt")))
    
    
    def test_rm_fb_root(self):
        path1 = os.path.join(settings.FILEBROWSER_ROOT, "dir/file.txt")
        path2 = "/path/to/file.txt"
        self.assertEqual(utils.rm_fb_root(path1), "dir/file.txt")
        self.assertEqual(utils.rm_fb_root(path2), path2)
    
    
    def test_repository_url(self):
        self.assertIn("premierlangage", utils.repository_url("."))
        self.assertIn("github", utils.repository_url("."))
        with self.assertRaises(gitcmd.gitcmd.NotInRepositoryError):
            utils.repository_url("/")
    
    
    def test_repository_branch(self):
        self.assertEqual(utils.repository_branch(self.github), "HEAD")
        with self.assertRaises(gitcmd.gitcmd.NotInRepositoryError):
            utils.repository_branch("/")
    
    
    def test_fa_icon(self):
        self.assertEqual(utils.fa_icon(RES_DIR + "text.txt"), "fas fa-file-alt")
        self.assertEqual(utils.fa_icon(RES_DIR + "application.zip"), "fas fa-file-archive")
        self.assertEqual(utils.fa_icon(RES_DIR + "audio.mp3"), "fas fa-file-audio")
        self.assertEqual(utils.fa_icon(RES_DIR + "image.png"), "fas fa-file-image")
        self.assertEqual(utils.fa_icon(RES_DIR + "video.mp4"), "fas fa-file-video")
        self.assertEqual(utils.fa_icon(RES_DIR + "pl.pl"), "fas fa-file-code")
        self.assertEqual(utils.fa_icon(RES_DIR + "file.xls"), "fas fa-file-excel")
        self.assertEqual(utils.fa_icon(RES_DIR + "file.docx"), "fas fa-file-word")
        self.assertEqual(utils.fa_icon(RES_DIR + "file.pptx"), "fas fa-file-powerpoint")
        self.assertEqual(utils.fa_icon(RES_DIR + "file.pdf"), "fas fa-file-pdf")
        self.assertEqual(utils.fa_icon(RES_DIR + "directory/file"), "fas fa-file")
        self.assertEqual(utils.fa_icon(RES_DIR + "directory"), "fas fa-folder")
    
    
    def test_fa_repository_host(self):
        self.assertEqual(utils.fa_repository_host(self.github), 'fab fa-github')
        self.assertEqual(utils.fa_repository_host(self.gitlab), 'fab fa-gitlab')
        self.assertEqual(utils.fa_repository_host(self.bitbucket), 'fab fa-bitbucket')
        self.assertEqual(utils.fa_repository_host(self.git), 'fab fa-git')
    
    
    def test_walkdir(self):
        user = User.objects.create_user(username='user', password='12345', id=100)
        d = Directory.objects.get(name="100").root
        shutil.rmtree(d)
        shutil.copytree(WALK_DIR, d)
        command('git init ' + os.path.join(d, "repo"))
        self.maxDiff = None
        expected = {
            'parent'  : '',
            'type'    : 'folder',
            'name'    : '100',
            'path'    : '100',
            'icon'    : 'fas fa-folder',
            'write'   : True,
            'read'    : True,
            'repo'    : None,
            'children': [{
                'parent': '100',
                'type'  : 'file',
                'name'  : 'text.txt',
                'path'  : '100/text.txt',
                'icon'  : 'fas '
                          'fa-file-alt',
                'write' : True,
                'read'  : True,
                'repo'  : None
            }, {
                'parent'  : '100',
                'type'    : 'folder',
                'name'    : 'repo',
                'path'    : '100/repo',
                'icon'    : 'fas fa-folder',
                'write'   : True,
                'read'    : True,
                'repo'    : {
                    'url'   : '',
                    'branch': 'HEAD',
                    'host'  : 'fab fa-git'
                },
                'children': []
            }, {
                'parent'  : '100',
                'type'    : 'folder',
                'name'    : 'directory',
                'path'    : '100/directory',
                'icon'    : 'fas fa-folder',
                'write'   : True,
                'read'    : True, 'repo': None,
                'children': [{
                    'parent': '100/directory',
                    'type'  : 'file',
                    'name'  : 'file',
                    'path'  : '100/directory/file',
                    'icon'  : 'fas fa-file-alt',
                    'write' : True,
                    'read'  : True,
                    'repo'  : None
                }]
            }]
        }
        try:
            self.assertEqual(utils.walkdir(d, user), expected)
        except AssertionError:
            print("Expected: \n", expected)
            print("Got: \n", utils.walkdir(d, user))
            raise
