#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_model.py
#  
#  

import shutil

from os.path import join, isdir

from django.test import TestCase, override_settings
from django.conf import settings
from django.contrib.auth.models import User

from qa.models import QAQuestion, QAQuestionVote, QAAnswer, QAAnswerVote






class ModelTestCase(TestCase):
    
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create_user(username='user', password='12345', id=100)
        
    
    
    def test_QAQuestion(self):
        qaq = QAQuestion.objects.create( title="tests_qaq",user=self.user, points=10, popularity=1)

        #~ mod_points
        qaq.mod_points(5)
        self.assertTrue(qaq.points == 15)
        #~ str
        self.assertEqual(str(qaq), "tests_qaq")
        #~ save
        qaq.save()
        self.assertTrue(qaq.slug == "tests_qaq")
    
    
    def test_QAAnswer(self):
        qaq = QAQuestion.objects.create(title="tests_qaq",user=self.user, points=10, popularity=1)

        qaa = QAAnswer.objects.create(user=self.user, points=10, question=qaq)
        
        qaa.mod_points(5)
        self.assertTrue(qaa.points == 15)
    
    
    def test_QAAnswerVote(self):
        qaq = QAQuestion.objects.create(title="tests_qaq",user=self.user, points=10, popularity=1)

        qaa = QAAnswer.objects.create(user=self.user, points=10, question=qaq)
        qaa2 = QAAnswer.objects.create(user=self.user, points=10, question=qaq)

        qaavote =QAAnswerVote(answer=qaa)
        qaavote2 = QAAnswerVote(answer=qaa2)
        
        #~ save
        qaavote.save()
        self.assertEqual(qaavote.answer.points,  11)
        qaavote.value =False
        qaavote.save()
        self.assertEqual(qaavote.answer.points, 9)
       
        qaavote2.value=False
        qaavote2.save()
        self.assertEqual(qaavote2.answer.points, 9)
        qaavote2.value=True
        qaavote2.save()
        self.assertEqual(qaavote2.answer.points, 11)
       
        qaavote.delete()
        self.assertEqual(qaavote.answer.points, 10)
        qaavote2.delete()
        self.assertEqual(qaavote2.answer.points, 10)
        
    
            
    def test_QAQuestionVote(self):
        qaq = QAQuestion.objects.create( title="tests_qaq",user=self.user, points=10, popularity=1)
        qaq2 = QAQuestion.objects.create( title="tests_qaq",user=self.user, points=10, popularity=1)

        qaqvote =QAQuestionVote(question=qaq)
        qaqvote2 = QAQuestionVote(question=qaq2)
        
        #~ save
        qaqvote.save()
        self.assertEqual(qaqvote.question.points,  11)
        qaqvote.value =False
        qaqvote.save()
        self.assertEqual(qaqvote.question.points, 9)
       
        qaqvote2.value=False
        qaqvote2.save()
        self.assertEqual(qaqvote2.question.points, 9)
        qaqvote2.value=True
        qaqvote2.save()
        self.assertEqual(qaqvote2.question.points, 11)
       
        qaqvote.delete()
        self.assertEqual(qaqvote.question.points, 10)
        qaqvote2.delete()
        self.assertEqual(qaqvote2.question.points, 10)
        
        
