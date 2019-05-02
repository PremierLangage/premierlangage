#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_model.py
#  
#

import datetime, mock

import pytz
from django.test import TestCase
from django.conf import settings
from django.contrib.auth.models import User

from qa.models import QAQuestion, QAQuestionVote, QAAnswer, \
    QAAnswerVote, QAAnswerComment, QAQuestionComment

reputation = settings.QA_SETTINGS['reputation']


# This is the function that replaces django.utils.timezone.now()
def mocked_now():
    return pytz.timezone(settings.TIME_ZONE).localize(datetime.datetime(2002, 1, 1))


class ModelTestCase(TestCase):

    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='user', password='12345')
        cls.user2 = User.objects.create_user(username='user1', password='12345')
        cls.user3 = User.objects.create_user(username='user2', password='12345')
        cls.user4 = User.objects.create_user(username='user3', password='12345')
        cls.user5 = User.objects.create_user(username='user4', password='12345')
        cls.user6 = User.objects.create_user(username='user5', password='12345')

    @mock.patch('django.utils.timezone.now', side_effect=mocked_now)
    def test_QAQuestion(self, now):
        # datetime
        qaq = QAQuestion.objects.create(title="tests_qaq", user=self.user, points=10, popularity=1)
        qaq.pub_date = pytz.timezone(settings.TIME_ZONE).localize(datetime.datetime(2000, 1, 1))
        qaq.update_date = pytz.timezone(settings.TIME_ZONE).localize(datetime.datetime(2001, 1, 1))
        qaq.save()
        self.assertEqual("2000/01/01", qaq.pub_date_verbose())
        self.assertEqual("2001/01/01", qaq.update_date_verbose())
        # mod_points
        qaq.mod_points(5)
        self.assertEqual(qaq.points, 15)
        # str
        self.assertEqual(str(qaq), "tests_qaq")
        # save
        qaq.save()
        self.assertTrue(qaq.slug == "tests_qaq")
        # delete
        point = self.user.profile.rep
        qaq.delete()
        self.assertEqual(qaq.user.profile.rep, point - reputation["CREATE_QUESTION"])

        self.assertEqual(qaq.has_accepted_answer(), False)

    def test_QAAnswer(self):
        usertmp = User.objects.create_user(username='usert', password='12345')
        qaq = QAQuestion.objects.create(title="tests_qaq", user=usertmp, points=10, popularity=1)

        qaa = QAAnswer.objects.create(user=self.user2, points=10, question=qaq, answer=True)

        qaa.mod_points(5)
        self.assertEqual(qaa.points, 15)
        # delete
        qaa.refresh_from_db()
        point = self.user2.profile.rep
        point2 = usertmp.profile.rep

        qaa.delete()
        qaq.refresh_from_db()
        self.assertEqual(qaq.user.profile.rep, point2 - reputation["ANSWER_ACCEPTED"] // 2)
        self.assertEqual(qaa.user.profile.rep,
                         point - (reputation["ANSWER_ACCEPTED"] + reputation["CREATE_ANSWER"]))

    def test_QAAnswerVote(self):
        usertmp = User.objects.create_user(username='usert', password='12345')

        qaq = QAQuestion.objects.create(title="tests_qaq", user=self.user3, points=10, popularity=1)

        qaa = QAAnswer.objects.create(user=self.user3, points=10, question=qaq)
        qaa2 = QAAnswer.objects.create(user=usertmp, points=10, question=qaq)

        qaavote = QAAnswerVote(answer=qaa)
        qaavote2 = QAAnswerVote(answer=qaa2)

        # save
        qaavote.save()
        self.assertEqual(qaavote.answer.points, 11)
        qaavote.value = False
        qaavote.save()
        self.assertEqual(qaavote.answer.points, 9)

        qaavote2.value = False
        qaavote2.save()

        self.assertEqual(qaavote2.answer.points, 9)
        qaavote2.value = True
        qaavote2.save()
        self.assertEqual(qaavote2.answer.points, 11)
        # delete
        point = self.user3.profile.rep
        point2 = usertmp.profile.rep
        qaavote.delete()
        qaq.refresh_from_db()
        self.assertEqual(qaa.user.profile.rep, point + reputation["DOWNVOTE_ANSWER"])
        qaavote2.delete()
        self.assertEqual(qaa2.user.profile.rep, point2 + reputation["UPVOTE_ANSWER"])

    def test_QAQuestionVote(self):
        qaq = QAQuestion.objects.create(title="tests_qaq", user=self.user4, points=10, popularity=1)
        qaq2 = QAQuestion.objects.create(title="tests_qaq", user=self.user4, points=10,
                                         popularity=1)

        qaqvote = QAQuestionVote(question=qaq)
        qaqvote2 = QAQuestionVote(question=qaq2)

        # save
        qaqvote.save()
        self.assertEqual(qaqvote.question.points, 11)
        qaqvote.value = False
        qaqvote.save()
        self.assertEqual(qaqvote.question.points, 9)

        qaqvote2.value = False
        qaqvote2.save()
        self.assertEqual(qaqvote2.question.points, 9)
        qaqvote2.value = True
        qaqvote2.save()
        self.assertEqual(qaqvote2.question.points, 11)
        # delete

        qaqvote.delete()
        self.assertEqual(qaqvote.question.points, 10)
        qaqvote2.delete()
        self.assertEqual(qaqvote2.question.points, 10)

    def test_QAAnswerComment(self):
        usertmp = User.objects.create_user(username='usert', password='12345')

        qaq = QAQuestion.objects.create(title="tests_qaq", user=self.user5, points=10, popularity=1)

        qaa = QAAnswer.objects.create(user=usertmp, points=10, question=qaq)

        qaacomment = QAAnswerComment(answer=qaa, user=self.user5)

        # save
        point = self.user5.profile.rep
        point2 = usertmp.profile.rep
        qaacomment.save()
        self.assertEqual(qaa.user.profile.rep, point2 + reputation["RECEIVE_ANSWER_COMMENT"])
        self.assertEqual(qaq.user.profile.rep, point + reputation["CREATE_ANSWER_COMMENT"])
        # delete
        point = self.user5.profile.rep
        point2 = usertmp.profile.rep
        qaacomment.delete()
        self.assertEqual(qaa.user.profile.rep, point2 - reputation["RECEIVE_ANSWER_COMMENT"])
        self.assertEqual(qaq.user.profile.rep, point - reputation["CREATE_ANSWER_COMMENT"])

    def test_QAQuestionComment(self):
        usertmp = User.objects.create_user(username='usert', password='12345')

        qaq = QAQuestion.objects.create(title="tests_qaq", user=self.user6, points=10, popularity=1)

        qaqcomment = QAQuestionComment(question=qaq, user=usertmp)

        # save
        point = self.user6.profile.rep
        point2 = usertmp.profile.rep
        qaqcomment.save()
        self.assertEqual(qaqcomment.user.profile.rep, point2
                         + reputation["CREATE_QUESTION_COMMENT"])
        self.assertEqual(qaq.user.profile.rep, point + reputation["RECEIVE_QUESTION_COMMENT"])
        # delete
        point = self.user6.profile.rep
        point2 = usertmp.profile.rep
        qaqcomment.delete()
        self.assertEqual(qaqcomment.user.profile.rep, point2
                         - reputation["CREATE_QUESTION_COMMENT"])
        self.assertEqual(qaq.user.profile.rep, point - reputation["RECEIVE_QUESTION_COMMENT"])
