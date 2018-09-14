#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  test_views.py
#  
#  


import json, shutil

from django.test import TestCase, Client, override_settings
from django.conf import settings
from django.contrib.auth.models import User, AnonymousUser
from django.contrib.messages import constants as messages
from django.shortcuts import render, redirect, get_object_or_404

from qa.models import QAQuestion, QAAnswer, QAQuestionComment,\
                        QAQuestionVote

reputation = settings.QA_SETTINGS['reputation']

class ExoTestCase(TestCase):
    
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345')
        self.c = Client()
        self.c.force_login(self.user,backend=settings.AUTHENTICATION_BACKENDS[0])
        self.c2 = Client()
    
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
        self.assertEqual(response.context["query"], "query")
        self.assertEqual(response.context["tag_q"], "tag")
        self.assertEqual(response.context["active"], "question")
    
    def test_get_index_no_authentif(self):
        tag = "tag"
        page = "page"
        query = "query"
        active = "active", "question"
        
        response = self.c2.get(
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
        
        self.assertEqual(response.context["query"], "query")
        self.assertEqual(response.context["tag_q"], "tag")
        self.assertEqual(response.context["active"], "question")
       


        
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
    
    
    def test_patch_question_param(self):
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
        
        response = self.c.patch(
            '/ask/question/'+ str(pk) + '/',
            {
                "csrfmiddlewaretoken":1,
                "tags":"tag"
            },
            follow=True
        )
        
        self.assertEqual(response.status_code, 200)
        
        
    def test_bad_patch_question(self):
        
        pk = 14585
        response = self.c.patch(
            '/ask/question/'+ str(pk) + '/',
            follow=True
        )
        
        self.assertEqual(response.status_code, 404)
        self.assertContains(response, "Question with ID &#39;14585&#39; does not exists", status_code = 404)
    
        
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
    
    
    def test_patch_answer_param(self):
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
        a = QAAnswer.objects.get(answer_text="answer")
        pka = a.pk
        point = a.user.profile.rep
        response = self.c.patch(
            '/ask/answer/'+ str(pk) + '/',
            {
                "answer":1,
                "csrfmiddlewaretoken":1
            },
            follow=True
        )
        
        a.refresh_from_db()
        
        self.assertEqual(response.status_code, 200)
        self.assertEqual(a.user.profile.rep, point + reputation["ANSWER_ACCEPTED"]//2 + reputation["ANSWER_ACCEPTED"] )
    
    def test_patch_answer_no_params(self):
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
        a = QAAnswer.objects.get(answer_text="answer")
        pka = a.pk
        point = a.user.profile.rep
        response = self.c.patch(
            '/ask/answer/'+ str(pk) + '/',
            {

                "csrfmiddlewaretoken":1
            },
            follow=True
        )
        
        a.refresh_from_db()
        
        self.assertEqual(response.status_code, 200)
    
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
        a = QAAnswer.objects.get(answer_text="answer")
        pka = a.pk
        point = a.user.profile.rep
        response = self.c.patch(
            '/ask/answer/'+ str(pk) + '/',
            {
                "answer":0,
                "csrfmiddlewaretoken":1
            },
            follow=True
        )
        
        a.refresh_from_db()
        
        self.assertEqual(response.status_code, 200)
        self.assertEqual(a.user.profile.rep, point - reputation["ANSWER_ACCEPTED"]//2 - reputation["ANSWER_ACCEPTED"] )

    
    def test_bad_post_question_comment(self):
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
            '/ask/comment-question/' + str(pk) + '/' + str(pk) + '/',
            {
                
            },
            follow=True
        )
        self.assertEqual(response.status_code, 400)

        
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
            '/ask/comment-question/' + str(pk) + '/' + str(pk) + '/',
            {
                "comment_text":"comment"
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)


    def test_patch_question_comment(self):
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
            '/ask/comment-question/' + str(pk) + '/' + str(pk) + '/',
            {
                "comment_text":"comment"
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        c = QAQuestionComment.objects.get(comment_text="comment")
        pkc = q.pk
        
        response = self.c.patch(
            '/ask/comment-question/' + str(pk) + '/' + str(pk) + '/',
            {
                "csrfmiddlewaretoken":1
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)

    def test_bad_patch_question_comment(self):
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
            '/ask/comment-question/' + str(pk) + '/' + str(pk) + '/',
            follow=True
        )
        
        self.assertEqual(response.status_code, 404)
        self.assertContains(response, "Comment with ID &#39;14585&#39; does not exists", status_code = 404)
    
    def test_delete_question_comment(self):
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
            '/ask/comment-question/' + str(pk) + '/' + str(pk) + '/',
            {
                "comment_text":"comment"
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        response = self.c.delete(
            '/ask/comment-question/' + str(pk) + '/' + str(pk) + '/',
            follow=True
        )
        
        self.assertFalse(bool(QAQuestionComment.objects.filter(pk=pk)))


    def test_bad_get_question_vote(self):
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
        response = self.c.get(
            '/ask/vote/question/' + str(pk) + '/',
            {
                    
            },
            follow=True
        )
        self.assertEqual(response.status_code, 400)

    
    def test_get_question_vote(self):
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
        response = self.c.get(
            '/ask/vote/question/' + str(pk) + '/',
            {
                "vote":"down"    
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertTrue(bool(QAQuestionVote.objects.filter(value=False)))
        
        
        v = QAQuestionVote.objects.get(value="False")
        pkv = q.pk
        response = self.c.get(
            '/ask/vote/question/' + str(pkv) + '/',
            {
                "vote":"up"    
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertTrue(bool(QAQuestionVote.objects.filter(value=True)))
        
        response = self.c.get(
            '/ask/vote/question/' + str(pkv) + '/',
            {
                "vote":"up"    
            },
            follow=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertFalse(bool(QAQuestionVote.objects.filter(value=True)))
        
        
