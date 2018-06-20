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
class NewDirTestCase(TestCase):
    
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345')
        self.c = Client()
        self.c.force_login(self.user,backend=settings.AUTHENTICATION_BACKENDS[0])
        
        if isdir(join(FAKE_FB_ROOT, 'host')):
            shutil.rmtree(join(FAKE_FB_ROOT, 'host'))
        if isdir(join(FAKE_FB_ROOT, 'filler')):
            shutil.rmtree(join(FAKE_FB_ROOT, 'filler'))
        if isdir(join(FAKE_FB_ROOT, 'local')):
            shutil.rmtree(join(FAKE_FB_ROOT, 'local'))
        if isdir(join(FAKE_FB_ROOT, 'remote')):
            shutil.rmtree(join(FAKE_FB_ROOT, 'remote'))
        if isdir(join(FAKE_FB_ROOT, 'same')):
            shutil.rmtree(join(FAKE_FB_ROOT, 'same'))
    
    
    def test_new_directory(self):
        response = self.c.get(
            '/filebrowser/new_directory/',
            {
                'name' : 'local',
                },
            follow=True
        )
        self.assertEqual(response.status_code, 405)

    
    def test_new_directory(self):
        try:
            response = self.c.post(
                '/filebrowser/new_directory/',
                {
                    'name' : 'local',
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertTrue(Directory.objects.filter(name='local'))
            self.assertTrue(isdir(join(FAKE_FB_ROOT, 'local')))
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_same_directory(self):
        try:
            response = self.c.post(
                '/filebrowser/new_directory/',
                {
                    'name' : 'same',
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            m = list(response.context['messages'])
            self.assertEqual(m[0].level, 25)
            
            response = self.c.post(
                '/filebrowser/new_directory/',
                {
                    'name' : 'same',
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            m = list(response.context['messages'])
            self.assertEqual(m[0].level, 40)
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_new_directory_remote(self):
        try:
            command('git init --bare ' + join(FAKE_FB_ROOT, 'host'))
            command('git init ' + join(FAKE_FB_ROOT, 'filler'))
            cwd = os.getcwd()
            os.chdir(join(FAKE_FB_ROOT, 'filler'))
            command('git remote add host ../host/ ')
            command('touch to_be_push')
            command('git add .')
            command('git commit -m "Initial commit"')
            command('git push --set-upstream host master')
            os.chdir(cwd)
            
            response = self.c.post(
                '/filebrowser/new_directory/',
                {
                    'name' : 'remote',
                    'url' : "file://"+join(FAKE_FB_ROOT, 'host'),
                    },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertTrue(Directory.objects.filter(name='remote'))
            self.assertTrue(isfile(join(FAKE_FB_ROOT, 'remote/to_be_push')))
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
