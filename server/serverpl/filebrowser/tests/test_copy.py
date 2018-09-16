import shutil
from os.path import join, isdir

from django.test import TestCase, Client, override_settings
from django.conf import settings
from django.contrib.auth.models import User

from filebrowser.models import Directory


FAKE_FB_ROOT = join(settings.BASE_DIR, 'filebrowser/tests/ressources')


@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class CopyTestCase(TestCase):

    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='user', password='12345', id=100)
        cls.c = Client()
        cls.c.force_login(cls.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        rel = join(settings.FILEBROWSER_ROOT, '100/')
        if isdir(rel):
            shutil.rmtree(join(rel))
        cls.folder = Directory.objects.get(name='100', owner=cls.user)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), cls.folder.root)


    def test_copy_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/home/opt/?option=entry-options-copy&target=.',
            follow=True
        )
        self.assertEqual(response.status_code, 405)


    def test_copy_no_destination(self):
        try:
            response = self.c.post(
                '/filebrowser/home/TPE/opt/',
                {
                    'option': 'entry-options-copy',
                    'target': 'dir_test',

                },
                follow=True
            )
      
            self.assertEqual(response.status_code, 400)
            self.assertContains(response, "Missing argument 'destination'", status_code=400)

        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i. level, ': ', i.message) for i in m]
            raise
    

    def test_copy_directory(self):
        try :
            response = self.c.post(
                '/filebrowser/home/TPE/opt/', {
                    'destination': '/truc/TPE',
                    'option': 'entry-options-copy',
                    'target': '.',

                },
                follow=True
            )
      
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT, '100/truc')
            self.assertTrue(isdir(join(rel, 'TPE')))
            self.assertContains(response, "'.' successfully copied to '/truc/TPE' !")
            
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level, ': ', i.message) for i in m]
            raise

    def test_copy_directory2(self):
        try :
            response = self.c.post(
                '/filebrowser/home/TPE/opt/', {
                    'destination': 'truc2/TPE',
                    'option': 'entry-options-copy',
                    'target': '.',
                },
                follow=True
            )
      
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT, '100/truc')
            self.assertTrue(isdir(join(rel, 'TPE')))
            self.assertContains(response, "'.' successfully copied to 'truc2/TPE' !")
            
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level, ': ', i.message) for i in m]
            raise


    def test_copy_file(self):
        try :
            response = self.c.post(
                '/filebrowser/home/truc/TPE/opt/', {
                    'destination': '../function001.pl',
                    'option': 'entry-options-copy',
                    'target': 'function001.pl',
                },
                follow=True
            )
      
            self.assertEqual(response.status_code, 200)
            rel = join(settings.FILEBROWSER_ROOT, '100/truc')
            self.assertTrue(isdir(join(rel, 'TPE')))
            self.assertContains(response,
                                "'function001.pl' successfully copied to '../function001.pl' !")
            
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level, ': ', i.message) for i in m]
            raise

    def test_copy_already_exist(self):
        try :
            response = self.c.post(
                '/filebrowser/home/opt/', {
                    'destination': 'TPE',
                    'option': 'entry-options-copy',
                    'target': 'TPE',

                },
                follow=True
            )
      
            self.assertEqual(response.status_code, 200)
            self.assertContains(response,
                                "Impossible to copy 'TPE' in 'TPE': name is already used.")
            
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level, ': ', i.message) for i in m]
            raise


    def test_copy_directory_no_exist(self):
        try :
            response = self.c.post(
                '/filebrowser/home/opt/', {
                    'destination': '../../',
                    'option': 'entry-options-copy',
                    'target': 'TPE',

                },
                follow=True
            )
      
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, ("Impossible to copy 'TPE' in '../../':"
                                           + "this directory does not exists."))
            
        except AssertionError :
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level, ': ', i.message) for i in m]
            raise








    


