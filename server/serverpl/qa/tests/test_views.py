#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  test_views.py
#  
#  


import json, shutil

from django.test import TestCase, Client, override_settings
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.messages import constants as messages
from django.shortcuts import render, redirect, get_object_or_404

from qa.models import QAQuestion, QAAnswer

class ExoTestCase(TestCase):
    
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345')
        self.c = Client()
        self.c.force_login(self.user,backend=settings.AUTHENTICATION_BACKENDS[0])
    
    
    def test_post_question(self):
        title = "title"
        description = "desc"
        tags = "tag"
        
        response = self.c.post(
            '/ask/question/',
            {
                "title" : title,
                "description" : description,
                "tags": tags,
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        
        
    def test_bad_post_question(self):
        response = self.c.post(
            '/ask/question/',
            {
                "title" : "title",
                "description" : "desc",
            },
            follow=True
        )
        self.assertEqual(response.status_code, 400)
        
        
    def test_delete_question(self):
        title = "title"
        description = "desc"
        tags = "tag"
        
        response = self.c.post(
            '/ask/question/',
            {
                "title" : title,
                "description" : description,
                "tags": tags,
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        
        q = QAQuestion.objects.get(title=title, description=description)
        pk = q.pk
        response = self.c.delete(
            '/ask/question/'+ str(pk) + '/',
            follow=True
        )
        
        self.assertFalse(bool(QAQuestion.objects.filter(pk=pk)))
        



