from django.test import TestCase
import os, shutil, sys, json, time

from os.path import join, isdir, isfile

from django.test import TestCase, Client, override_settings
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.messages import constants as messages

from filebrowser.models import Directory

FAKE_FB_ROOT = join(settings.BASE_DIR, 'filebrowser/tests/ressources')

@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class PublishTestCase(TestCase):

    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345')
        self.c = Client()
        self.c.force_login(self.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        if isdir(join(FAKE_FB_ROOT, 'dir')):
            shutil.rmtree(join(FAKE_FB_ROOT, 'dir'))
        self.folder = Directory.objects.create(name='dir', owner=self.user)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder.root)


    def test_publish_file(self):
        try :
            response = self.c.post(
                '/publisher/publish/',
                {
                    'destination': './dir/TPE',
                    'path_zip': './dir/extract_test/applicationpublish.zip',
                    'commit': 'test1',
                    'date': '21/06/18',
                    'author': 'Jordan',
                    'tag' : ['tag','tag1'],
                    'git' : 'lknnjn',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE/1/application.json')
            self.assertTrue(isfile(rel))
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE/1/meta.json')
            self.assertTrue(isfile(rel))
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE/applicationpublish')
            self.assertFalse(isdir(rel))
            m = list(response.context['messages'])
            self.assertEqual(len(m), 1)
            self.assertEqual(m[0].level, messages.SUCCESS)
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_publish_file_meta(self):
        try :
            response = self.c.post(
                '/publisher/publish/',
                {
                    'destination': './dir/TPE',
                    'path_zip': './dir/extract_test/applicationmeta.zip',
                    'commit': 'test2',
                    'date': '21/06/18',
                    'author': 'Jordan',
                    'tag' : ['tag','tag1'],
                    'git' : 'lknnjn1',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE/1/application.json')
            self.assertTrue(isfile(rel))
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE/1/meta.json')
            self.assertTrue(isfile(rel))
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE/applicationmeta')
            self.assertFalse(isdir(rel))
            m = list(response.context['messages'])
            self.assertEqual(len(m), 1)
            self.assertEqual(m[0].level, messages.SUCCESS)
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_publish_file_no_destination(self):
        try :
            response = self.c.post(
                '/publisher/publish/',
                {
                    'path_zip': './dir/extract_test/applicationmeta.zip',
                    'commit': 'test2',
                    'date': '21/06/18',
                    'author': 'Jordan',
                    'tag' : ['tag','tag1'],
                    'git' : 'lknnjn1',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 400)
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE/applicationmeta')
            self.assertFalse(isdir(rel))
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_publish_file_no_path_zip(self):
        try :
            response = self.c.post(
                '/publisher/publish/',
                {
                    'destination': './dir/TPE',
                    'commit': 'test2',
                    'date': '21/06/18',
                    'author': 'Jordan',
                    'tag' : ['tag','tag1'],
                    'git' : 'lknnjn1',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 400)
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_publish_file_no_commit(self):
        try :
            response = self.c.post(
                '/publisher/publish/',
                {
                    'destination': './dir/TPE',
                    'path_zip': './dir/extract_test/applicationmeta.zip',
                    'date': '21/06/18',
                    'author': 'Jordan',
                    'tag' : ['tag','tag1'],
                    'git' : 'lknnjn1',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 400)
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE/applicationmeta')
            self.assertFalse(isdir(rel))
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_publish_file_no_date(self):
        try :
            response = self.c.post(
                '/publisher/publish/',
                {
                    'destination': './dir/TPE',
                    'path_zip': './dir/extract_test/applicationmeta.zip',
                    'commit': 'test2',
                    'author': 'Jordan',
                    'tag' : ['tag','tag1'],
                    'git' : 'lknnjn1',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 400)
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE/applicationmeta')
            self.assertFalse(isdir(rel))
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_publish_file_no_author(self):
        try :
            response = self.c.post(
                '/publisher/publish/',
                {
                    'destination': './dir/TPE',
                    'path_zip': './dir/extract_test/applicationmeta.zip',
                    'commit': 'test2',
                    'date': '21/06/18',
                    'tag' : ['tag','tag1'],
                    'git' : 'lknnjn1',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 400)
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE/applicationmeta')
            self.assertFalse(isdir(rel))
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise

    def test_publish_file_no_tag(self):
        try :
            response = self.c.post(
                '/publisher/publish/',
                {
                    'destination': './dir/TPE',
                    'path_zip': './dir/extract_test/applicationmeta.zip',
                    'commit': 'test2',
                    'date': '21/06/18',
                    'author': 'Jordan',
                    'git' : 'lknnjn1',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 400)
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE/applicationmeta')
            self.assertFalse(isdir(rel))
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_publish_file_no_git(self):
        try :
            response = self.c.post(
                '/publisher/publish/',
                {
                    'destination': './dir/TPE',
                    'path_zip': './dir/extract_test/applicationmeta.zip',
                    'commit': 'test2',
                    'date': '21/06/18',
                    'author': 'Jordan',
                    'tag' : ['tag','tag1'],
                },
                follow=True
            )
            self.assertEqual(response.status_code, 400)
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE/applicationmeta')
            self.assertFalse(isdir(rel))
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_publish_file_no_zip(self):
        try :
            response = self.c.post(
                '/publisher/publish/',
                {
                    'destination': './dir/TPE',
                    'path_zip': './dir/extract_test/nozip.zip',
                    'commit': 'test1',
                    'date': '21/06/18',
                    'author': 'Jordan',
                    'tag' : ['tag','tag1'],
                    'git' : 'lknnjn',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE/nozip')
            self.assertFalse(isdir(rel))
            m = list(response.context['messages'])
            self.assertEqual(len(m), 1)
            self.assertEqual(m[0].level, messages.ERROR)
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_publish_file_not_a_zip(self):
        try :
            response = self.c.post(
                '/publisher/publish/',
                {
                    'destination': './dir/TPE',
                    'path_zip': './dir/extract_test/application.tar',
                    'commit': 'test1',
                    'date': '21/06/18',
                    'author': 'Jordan',
                    'tag' : ['tag','tag1'],
                    'git' : 'lknnjn',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE/application')
            self.assertFalse(isdir(rel))
            m = list(response.context['messages'])
            self.assertEqual(len(m), 1)
            self.assertEqual(m[0].level, messages.ERROR)
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_publish_file_not_a_file(self):
        try :
            response = self.c.post(
                '/publisher/publish/',
                {
                    'destination': './dir/TPE',
                    'path_zip': './dir/extract_test/application2.zip',
                    'commit': 'test1',
                    'date': '21/06/18',
                    'author': 'Jordan',
                    'tag' : ['tag','tag1'],
                    'git' : 'lknnjn',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE/application2')
            self.assertFalse(isdir(rel))
            m = list(response.context['messages'])
            self.assertEqual(len(m), 1)
            self.assertEqual(m[0].level, messages.ERROR)
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise


    def test_publish_file_invalid_number_of_elements(self):
        try :
            response = self.c.post(
                '/publisher/publish/',
                {
                    'destination': './dir/TPE',
                    'path_zip': './dir/extract_test/application3.zip',
                    'commit': 'test1',
                    'date': '21/06/18',
                    'author': 'Jordan',
                    'tag' : ['tag','tag1'],
                    'git' : 'lknnjn',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT, 'dir/TPE/application3')
            self.assertFalse(isdir(rel))
            m = list(response.context['messages'])
            self.assertEqual(len(m), 1)
            self.assertEqual(m[0].level, messages.ERROR)
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
