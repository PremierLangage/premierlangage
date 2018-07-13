#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_parsers.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import os, shutil, subprocess

from os.path import join, isdir

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
        self.user = User.objects.create_user(username='user', password='12345', id=100)
        self.user2 = User.objects.create_user(username='user2', password='12345', id=200)
        self.user3 = User.objects.create_user(username='user3', password='12345', id=300)
        self.c = Client()
        self.c.force_login(self.user,backend=settings.AUTHENTICATION_BACKENDS[0])
        
        self.folder = Directory.objects.get(name='100')
        self.folder2 = Directory.objects.get(name='200')
        self.host = Directory.objects.get(name='300')
        
        shutil.rmtree(self.folder.root)
        shutil.rmtree(self.folder2.root)
        shutil.rmtree(self.host.root)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder.root)
        shutil.copytree(join(FAKE_FB_ROOT, 'fake_filebrowser_data'), self.folder2.root)
        
        command('git init --bare ' + self.host.root)
        command('git init ' + self.folder.root)
        command('git init ' + self.folder2.root)
        cwd = os.getcwd()
        os.chdir(self.folder2.root)
        command('git remote add origin ' + self.host.root)
        command('git add .')
        command('git commit -m "Initial commit"')
        command('git push --set-upstream origin master')
        os.chdir(self.folder.root)
        command('git remote add origin ' + self.host.root)
        command('touch to_be_pull')
        command('git add .')
        command('git commit -m "Initial commit"')
        command('git pull origin master --allow-unrelated-histories')
        command('git push --set-upstream origin master')
        os.chdir(cwd)


    def test_commit_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/home/TPE/opt/?option=entry-git-commit&target=function001.pl',
            follow=True
            )
        self.assertEqual(response.status_code, 405)


    def test_status_method_not_allowed(self):
        response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                'option': 'directory-git-status',
                'target':'.',
                },
            follow=True
        )
        self.assertEqual(response.status_code, 405)
    
    
    def test_add_method_not_allowed(self):
        response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                'option': 'directory-git-add',
                'target':'.',
                },
            follow=True
        )
        self.assertEqual(response.status_code, 405)

    
    def test_checkout_method_not_allowed(self):
        response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                'option': 'entry-git-checkout',
                'target':'.',
                },
            follow=True
        )
        self.assertEqual(response.status_code, 405)


    def test_reset_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/home/TPE/opt/?option=entry-git-reset&target=function001.pl',
            follow=True
            )
        self.assertEqual(response.status_code, 405)


    def test_chang_branch_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/home/TPE/opt/?option=directory-git-chbranch&target=function001.pl',
            follow=True
            )
        self.assertEqual(response.status_code, 405)


    def test_branch_method_not_allowed(self):
        response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                'option': 'directory-git-branch',
                'target':'.',
                },
            follow=True
        )
        self.assertEqual(response.status_code, 405)


    def test_clone_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/home/TPE/opt/?option=directory-options-clone&target=function001.pl',
            follow=True
            )
        self.assertEqual(response.status_code, 405)


    def test_push_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/home/TPE/opt/?option=directory-git-push&target=function001.pl',
            follow=True
            )
        self.assertEqual(response.status_code, 405)


    def test_pull_method_not_allowed(self):
        response = self.c.get(
            '/filebrowser/home/TPE/opt/?option=directory-git-pull&target=function001.pl',
            follow=True
            )
        self.assertEqual(response.status_code, 405)
    
    
    def test_commit(self):
        with open(join(FAKE_FB_ROOT, '100/TPE/function001.pl'), 'w') as f:
            print("test", file=f)
        try:
            response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                'commit':'mycommit',
                'option': 'entry-git-commit',
                'target':'function001.pl',
            },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            m = list(response.context['messages'])
            self.assertEqual(messages.SUCCESS, m[0].level)
            self.assertTrue("TPE&sol;function001&period;pl" in m[0].message)
            self.assertTrue("mycommit" in m[0].message)
            f.close()
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_commit_directory(self):
        with open(join(FAKE_FB_ROOT, '100/TPE/operator001.pl'), 'w+') as f1, \
             open(join(FAKE_FB_ROOT, '100/TPE/function001.pl'), 'w+') as f2:
            print("test1", file=f1)
            print("test2", file=f2)
        try:
            response = self.c.post(
            '/filebrowser/home/opt/',
            {
                'commit':'mycommit2',
                'option': 'directory-git-commit',
                'target':'TPE',
            },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            m = list(response.context['messages'])
            self.assertEqual(messages.SUCCESS, m[0].level)
            self.assertTrue("2 files changed" in m[0].message)
            self.assertTrue("TPE&sol;operator001&period;pl" in m[0].message)
            f1.close()
            f2.close()
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_commit_without_message(self):
        try:
            response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                'option': 'entry-git-commit',
                'target':'function001.pl',
            },
                follow=True
            )
            self.assertEqual(response.status_code, 400)
            self.assertContains(response, "Missing 'commit' parameter", status_code=400)
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    def test_push(self):
        open(join(FAKE_FB_ROOT, '100/TPE/function001.pl'), 'w+').close()
        try:
            response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {  
                'option': 'directory-git-push',
                'target': '.',
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
    
            
    def test_checkout(self):
        with open(join(FAKE_FB_ROOT, '100/TPE/function001.pl'), 'w+') as f:
            print("abcdefghijklmnopqrstuvwxyz", file=f)
        
        try:
            response = self.c.get(
            '/filebrowser/home/opt/?option=entry-git-checkout&target=.',
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "Entry successfully checked out.")
            m = list(response.context['messages'])
            self.assertEqual(messages.SUCCESS, m[0].level)
            
            
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    
    def test_checkout_directory(self):
        with open(join(FAKE_FB_ROOT, '100/TPE/operator001.pl'), 'w+') as f1, \
             open(join(FAKE_FB_ROOT, '100/TPE/function001.pl'), 'w+') as f2:
            print("abcdefghijklmnopqrstuvwxyz", file=f1)
            print("abcdefghijklmnopqrstuvwxyz", file=f2)
        
        try:
            response = self.c.get(
            '/filebrowser/home/opt/?option=directory-git-checkout&target=.',
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "Entry successfully checked out.")
            m = list(response.context['messages'])
            self.assertEqual(messages.SUCCESS, m[0].level)
            
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    def test_status(self):
        with open(join(FAKE_FB_ROOT, '100/TPE/function001.pl'), 'w+') as f:
            print("abcdefghijklmnopqrstuvwxyz", file=f)
        
        try:
            response = self.c.get(
            '/filebrowser/home/opt/?option=directory-git-status&target=.',
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
    
    
    def test_branch(self):
        with open(join(FAKE_FB_ROOT, '100/TPE/function001.pl'), 'w+') as f:
            print("abcdefghijklmnopqrstuvwxyz", file=f)
        
        try:
            response = self.c.get(
            '/filebrowser/home/opt/?option=directory-git-branch&target=.',
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
    
    
    def test_add(self):
        with open(join(FAKE_FB_ROOT, '100/TPE/function001.pl'), 'w+') as f:
            print("abcdefghijklmnopqrstuvwxyz", file=f)
        
        try:
            response = self.c.get(
            '/filebrowser/home/TPE/opt/?option=entry-git-add&target=function001.pl',
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "Entry successfully added to the index.")
            m = list(response.context['messages'])
            self.assertEqual(messages.SUCCESS, m[0].level)
            
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
    
    def test_change_branch(self):
        with open(join(FAKE_FB_ROOT, '100/TPE/function001.pl'), 'w+') as f:
            print("abcdefghijklmnopqrstuvwxyz", file=f)
        
        try:
            response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                'name': 'test',
                'new':True,
                'option': 'directory-git-chbranch',
                'target':'function001.pl',
            },
                follow=True
            )
            self.assertEqual(response.status_code, 200)
            m = list(response.context['messages'])
            self.assertEqual(messages.SUCCESS, m[0].level)
            
            response = self.c.post(
            '/filebrowser/home/opt/',
            {
                'name': "master",
                'option': 'directory-git-chbranch',
                'target':'.',
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
            
            
    def test_change_branch_not_branch(self):
        with open(join(FAKE_FB_ROOT, '100/TPE/function001.pl'), 'w+') as f:
            print("abcdefghijklmnopqrstuvwxyz", file=f)
        
        try:
            response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                'new':'password',
                'option': 'directory-git-chbranch',
                'target':'function001.pl',
            },
                follow=True
            )
            self.assertEqual(response.status_code, 400)
            self.assertContains(response, "Missing 'branch' parameter", status_code=400)
            
        except AssertionError:
            m = list(response.context['messages'])
            if m:
                print("\nFound messages:")
                [print(i.level,':',i.message) for i in m]
            raise
            
                    
    def test_pull(self):
        try:
            response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                'username':'user3',
                'password':'12345',
                'url': "file://" + self.host.root,  
                'option': 'directory-git-pull',
                'target':'.',
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
            
            
    def test_clone(self):
        try:
            response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                'username':'user3',
                'password':'12345',
                'url': "file://" + self.host.root, 
                'destination':'essai', 
                'option': 'directory-options-clone',
                'target':'.',
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


    def test_reset(self):
        try:
            response = self.c.post(
            '/filebrowser/home/TPE/opt/',
            {
                'option': 'entry-git-reset',
                'target':'function001.pl',
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


    
