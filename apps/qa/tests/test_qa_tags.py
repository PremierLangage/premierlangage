#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_qa_tags.py
#
#

from django.contrib.auth.models import AnonymousUser, User
from django.test import TestCase

from qa.models import QAAnswer, QAAnswerComment, QAAnswerVote, QAQuestion, QAQuestionVote
from qa.templatetags.qa_tags import (can_delete_answer, can_delete_comment, can_delete_question,
                                     can_edit_answer, can_edit_comment, can_edit_question,
                                     can_post_answer, can_post_comment, can_post_question,
                                     urlencode_q, voted_down_answer, voted_down_question,
                                     voted_up_answer, voted_up_question)



class ModelTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='user', password='12345', id=100)
        cls.user2 = AnonymousUser()
        cls.qaq = QAQuestion.objects.create(title="tests_qaq", user=cls.user,
                                            points=10, popularity=1)
        cls.qaa = QAAnswer.objects.create(user=cls.user, points=10, question=cls.qaq, answer=True)
        cls.qaacomment = QAAnswerComment.objects.create(answer=cls.qaa, user=cls.user)
        cls.usertmp = User.objects.create_user(username='user', password='12345', id=100)
        cls.usertmp.profile.is_admin = True
    
    
    def test_urlencode_q(self):
        url = "urltest%20"
        self.assertEqual(urlencode_q(url), "urltest%2520")
    
    
    def test_voted_up_question(self):
        self.assertEqual(voted_up_question(self.user2, self.qaq), False)
        self.assertEqual(voted_up_question(self.user, self.qaq), False)
        QAQuestionVote.objects.create(question=self.qaq, user=self.user)
        self.assertEqual(voted_up_question(self.user, self.qaq), True)
    
    
    def test_voted_down_question(self):
        self.assertEqual(voted_down_question(self.user2, self.qaq), False)
        self.assertEqual(voted_down_question(self.user, self.qaq), False)
        QAQuestionVote.objects.create(question=self.qaq, user=self.user)
        self.assertEqual(voted_down_question(self.user, self.qaq), False)
    
    
    def test_voted_up_answer(self):
        self.assertEqual(voted_up_answer(self.user2, self.qaa), False)
        self.assertEqual(voted_up_answer(self.user, self.qaa), False)
        QAAnswerVote.objects.create(answer=self.qaa, user=self.user)
        self.assertEqual(voted_up_answer(self.user, self.qaa), True)
    
    
    def test_voted_down_answer(self):
        self.assertEqual(voted_down_answer(self.user2, self.qaa), False)
        self.assertEqual(voted_down_answer(self.user, self.qaa), False)
        QAAnswerVote.objects.create(answer=self.qaa, user=self.user)
        self.assertEqual(voted_down_answer(self.user, self.qaa), False)
    
    
    def test_can_edit_question(self):
        self.assertEqual(can_edit_question(self.user2, self.qaq), False)
        self.assertEqual(can_edit_question(self.user, self.qaq), True)
    
    
    def test_can_edit_answer(self):
        self.assertEqual(can_edit_answer(self.user2, self.qaa), False)
        self.assertEqual(can_edit_answer(self.user, self.qaa), True)
    
    
    def test_can_edit_comment(self):
        self.assertEqual(can_edit_comment(self.user2, self.qaacomment), False)
        self.assertEqual(can_edit_comment(self.user, self.qaacomment), True)
    
    
    def test_can_post_question(self):
        self.assertEqual(can_post_question(self.user2), False)
        self.assertEqual(can_post_question(self.usertmp), True)
    
    
    def test_can_post_answer(self):
        self.assertEqual(can_post_answer(self.user2), False)
        self.assertEqual(can_post_answer(self.usertmp), True)
    
    
    def test_can_post_comment(self):
        self.assertEqual(can_post_comment(self.user2), False)
        self.assertEqual(can_post_comment(self.usertmp), True)
    
    
    def test_can_delete_question(self):
        self.assertEqual(can_delete_question(self.user2, self.qaq), False)
        self.assertEqual(can_delete_question(self.user, self.qaq), True)
    
    
    def test_can_delete_answer(self):
        self.assertEqual(can_delete_answer(self.user2, self.qaa), False)
        self.assertEqual(can_delete_answer(self.user, self.qaa), True)
    
    
    def test_can_delete_comment(self):
        self.assertEqual(can_delete_comment(self.user2, self.qaacomment), False)
        self.assertEqual(can_delete_comment(self.user, self.qaacomment), True)
