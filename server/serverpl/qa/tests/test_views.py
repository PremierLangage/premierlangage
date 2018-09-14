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
    
    
    def test_get_index(self):
        tag = "tag"
        page = "page"
        query = "query"
        active = "active", "question"
        
        response = self.c.get(
            '/ask/',
            {
                "tag" : tag,
                "page" : page,
                "query": query,
                "active":active
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed("qa/index.html")
        self.assertContains(response, "query")
    
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
        
        
    def test_bad_post_answer(self):
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
        response = self.c.post(
            '/ask/answer/' + str(pk) + '/',
            {
                
                
            },
            follow=True
        )
        self.assertEqual(response.status_code, 400)
    
    
    def test_post_answer(self):
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
        response = self.c.post(
            '/ask/answer/' + str(pk) + '/',
            {
                "answer_text":"answer"
                
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertTrue(bool(QAAnswer.objects.filter(pk=pk)))

    
    def test_delete_answer(self):
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
        response = self.c.post(
            '/ask/answer/' + str(pk) + '/',
            {
                "answer_text":"answer"
                
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        
        response = self.c.delete(
            '/ask/answer/'+ str(pk) + '/',
            follow=True
        )
        
        self.assertFalse(bool(QAAnswer.objects.filter(pk=pk)))


    def test_bad_patch_answer(self):
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
        pk = 14585
        response = self.c.patch(
            '/ask/answer/'+ str(pk) + '/',
            follow=True
        )
        
        self.assertEqual(response.status_code, 404)
        self.assertContains(response, "Answer with ID &#39;14585&#39; does not exists", status_code = 404)
    
    
    def test_patch_answer(self):
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
        response = self.c.post(
            '/ask/answer/' + str(pk) + '/',
            {
                "answer_text":"answer"
                
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        
        #~ response = self.c.patch(
            #~ '/ask/answer/'+ str(pk) + '/',
            #~ {
                #~ "answer":True
            #~ },
            #~ follow=True
        #~ )
        
        #~ self.assertEqual(response.status_code, 200)
        
        
    def test_post_question_comment(self):
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
        response = self.c.post(
            '/ask/comment-question/' + str(pk),
            {
                "title" : title,
                
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)

