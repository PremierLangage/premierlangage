#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_parsers.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import os, shutil, sys, json, time, subprocess

from os.path import join, isdir, isfile

from mock import patch

from django.test import TestCase, Client, override_settings
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.messages import constants as messages

from filebrowser.models import Directory


FAKE_FB_ROOT = join(settings.BASE_DIR,'filebrowser/tests/ressources')



def command(cmd):
    p = subprocess.Popen(
        cmd,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        shell=True
    )
    out, err = p.communicate()
    if p.returncode:
        raise RuntimeError("Return code : " + str(p.returncode) + " - " + err.decode() + out.decode())



@override_settings(FILEBROWSER_ROOT=FAKE_FB_ROOT)
class GitTestCase(TestCase):
    
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345')
        self.c = Client()
        self.c.force_login(self.user,backend=settings.AUTHENTICATION_BACKENDS[0])
        
        dir_path = join(FAKE_FB_ROOT, 'dir')
        if isdir(dir_path):
            shutil.rmtree(join(FAKE_FB_ROOT,'dir'))
        if isdir(join(FAKE_FB_ROOT,'host')):
            shutil.rmtree(join(FAKE_FB_ROOT,'host'))
        self.folder = Directory.objects.create(
            name='dir',
            owner=self.user,
            remote=join(FAKE_FB_ROOT, 'host')
        )
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder.root)
        
        command('git init --bare ' + join(FAKE_FB_ROOT, 'host'))
        command('git init ' + dir_path)
        cwd = os.getcwd()
        os.chdir(dir_path)
        command('git remote add host ../host/ ')
        command('git add .')
        command('git commit -m "Initial commit"')
        command('git push --set-upstream host master')
        os.chdir(cwd)


    def test_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/apply_option/post',
            {
                'option_h': 'commit',
                'name_h': 'function001.pl',
                'relative_h': './dir/TPE',
                'type_h': 'directory',
                'commit': 'my commt'
                },
            follow=True
        )
        self.assertEqual(response.status_code, 405)
    
    
    def test_commit(self):
        open(join(FAKE_FB_ROOT, 'dir/TPE/function001.pl'), 'w+').close()
        try:
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                    'option_h' : 'commit',
                    'name_h' : 'function001.pl',
                    'relative_h' : './dir/TPE',
                    'type_h' : 'entry',
                    'commit' : 'My commit'
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            m = list(response.context['messages'])
            self.assertEqual(messages.SUCCESS, m[0].level)
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_push(self):
        open(join(FAKE_FB_ROOT, 'dir/TPE/function001.pl'), 'w+').close()
        try:
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                    'option_h' : 'push',
                    'name_h' : 'dir',
                    'relative_h' : './dir/TPE',
                    'type_h' : 'directory',
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            m = list(response.context['messages'])
            self.assertEqual(messages.SUCCESS, m[0].level)
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_push_password(self):
        open(join(FAKE_FB_ROOT, 'dir/TPE/function001.pl'), 'w+').close()
        try:
            response = self.c.post(
                '/filebrowser/apply_option/post',
                {
                    'option_h' : 'push',
                    'name_h' : 'dir',
                    'relative_h' : './dir/TPE',
                    'type_h' : 'directory',
                    'username': 'test',
                    'password': 'password'
                },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            m = list(response.context['messages'])
            self.assertEqual(messages.SUCCESS, m[0].level)
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
