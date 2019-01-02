import unittest

from django.conf import settings
from django.contrib.auth.models import User
from django.test import TestCase, Client
from django.urls import resolve, reverse

from qa import views as qaviews
from qa.models import (QAQuestion, QAAnswer, QAQuestionComment, QAAnswerComment, QAQuestionVote,
                       QAAnswerVote)


reputation = settings.QA_SETTINGS['reputation']



class IndexViewTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='user', password='12345')
        cls.c = Client()
        cls.c.force_login(cls.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        cls.c2 = Client()
    
    
    def test_get_index(self):
        response = self.c.get(
                reverse("ask:index"),
                {
                    "tag"   : "tag",
                    "page"  : "page",
                    "query" : "query",
                    "active": "active",
                },
                follow=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed("qa/index.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.IndexView.as_view().__name__)
        self.assertEqual(response.context["query"], "query")
        self.assertEqual(response.context["tag_q"], "tag")
        self.assertEqual(response.context["active"], "active")
    
    
    def test_get_index_anonymous(self):
        response = self.c2.get(
                reverse("ask:index"),
                {
                    "tag"   : "tag",
                    "page"  : "page",
                    "query" : "query",
                    "active": "active",
                },
                follow=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed("qa/index.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.IndexView.as_view().__name__)
        self.assertEqual(response.context["query"], "query")
        self.assertEqual(response.context["tag_q"], "tag")
        self.assertEqual(response.context["active"], "active")



class QuestionViewTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='user', password='12345')
        cls.c = Client()
        cls.c.force_login(cls.user, backend=settings.AUTHENTICATION_BACKENDS[0])
        cls.c2 = Client()
    
    
    def test_post_question(self):
        response = self.c.post(
                reverse("ask:create_question"),
                {
                    "title"      : "title",
                    "description": "desc",
                    "tags"       : "tags",
                },
                follow=True
        )
        self.assertEqual(response.status_code, 200)
        
        pk = resolve(response.redirect_chain[-1][0]).kwargs['pk']
        
        self.assertNotEqual(list(QAQuestion.objects.filter(pk=pk)), list())
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
    
    
    def test_post_question_400(self):
        response = self.c.post(
                reverse("ask:create_question"),
                {
                    "title"      : "title",
                    "description": "desc",
                },
                follow=True
        )
        self.assertEqual(response.status_code, 400)
    
    
    def test_delete_question(self):
        q = QAQuestion.objects.create(title="title", description="desc", tags="tag", user=self.user)
        self.assertNotEqual(list(QAQuestion.objects.filter(pk=q.pk)), list())
        
        response = self.c.delete(
                reverse("ask:question", args=[q.pk]),
                follow=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(list(QAQuestion.objects.filter(pk=q.pk)), list())
        self.assertTemplateUsed("qa/index.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.IndexView.as_view().__name__)
    
    
    def test_delete_question_404(self):
        response = self.c.delete(
                reverse("ask:question", args=[999]),
                follow=True
        )
        self.assertEqual(response.status_code, 404)
    
    
    def test_patch_question(self):
        q = QAQuestion.objects.create(title="title", description="desc", tags="tag", user=self.user)
        
        self.assertEqual(q.title, "title")
        self.assertEqual(q.description, "desc")
        
        response = self.c.patch(
                reverse("ask:question", args=[q.pk]),
                {
                    "csrfmiddlewaretoken": 1,
                    "title"              : "Modified Title",
                    "tags": "tags,new",
                },
                follow=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
        q.refresh_from_db()
        self.assertEqual(q.title, "Modified Title")
        self.assertEqual(q.description, "desc")
    
    
    def test_patch_question_404(self):
        response = self.c.patch(
                reverse("ask:question", args=[999]),
                follow=True
        )
        
        self.assertContains(response, "Question with ID &#39;999&#39; does not exists",
                            status_code=404)
    
    
    def test_get_question(self):
        q = QAQuestion.objects.create(title="title", description="desc", tags="tag", user=self.user)
        response = self.c.get(
                reverse("ask:question", args=[q.pk]),
                follow=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
        self.assertEqual(response.context["question"], q)
    
    
    def test_get_question_404(self):
        response = self.c.get(
                reverse("ask:question", args=[999]),
                follow=True
        )
        self.assertEqual(response.status_code, 404)



class AnswerViewTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='user', password='12345')
        cls.c = Client()
        cls.c.force_login(cls.user, backend=settings.AUTHENTICATION_BACKENDS[0])
    
    
    def test_post_answer(self):
        q = QAQuestion.objects.create(title="title", description="desc", tags="tag", user=self.user)
        self.assertEqual(list(q.qaanswer_set.all()), list())
        
        response = self.c.post(
                reverse("ask:answer", args=[q.pk]),
                {"answer_text": "answer"},
                follow=True
        )
        self.assertEqual(response.status_code, 200)
        
        q.refresh_from_db()
        self.assertNotEqual(list(q.qaanswer_set.all()), list())
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
    
    
    def test_post_answer_400(self):
        q = QAQuestion.objects.create(title="title", description="desc", tags="tag", user=self.user)
        response = self.c.post(
                reverse("ask:answer", args=[q.pk]),
                {},
                follow=True
        )
        self.assertEqual(response.status_code, 400)
    
    
    def test_post_answer_404(self):
        response = self.c.post(
                reverse("ask:answer", args=[9999]),
                {},
                follow=True
        )
        self.assertEqual(response.status_code, 404)
    
    
    def test_delete_answer(self):
        q = QAQuestion.objects.create(title="title", description="desc", tags="tag", user=self.user)
        a = QAAnswer.objects.create(answer_text="answer", question=q, user=self.user)
        self.assertNotEqual(list(q.qaanswer_set.all()), list())
        
        response = self.c.delete(
                reverse("ask:answer", args=[a.pk]),
                follow=True
        )
        self.assertEqual(response.status_code, 200)
        q.refresh_from_db()
        self.assertEqual(list(q.qaanswer_set.all()), list())
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
    
    
    def test_delete_answer_404(self):
        response = self.c.delete(
                reverse("ask:answer", args=[999]),
                follow=True
        )
        self.assertEqual(response.status_code, 404)
    
    
    def test_patch_answer(self):
        q = QAQuestion.objects.create(title="title", description="desc", tags="tag", user=self.user)
        a = QAAnswer.objects.create(answer_text="answer", question=q, user=self.user)
        point = a.user.profile.rep
        
        self.assertEqual(a.answer_text, "answer")
        self.assertEqual(a.answer, False)
        
        response = self.c.patch(
                reverse("ask:answer", args=[a.pk]),
                {
                    "answer"             : 1,
                    "answer_text"        : "Modified answer",
                    "csrfmiddlewaretoken": 1,
                },
                follow=True
        )
        
        a.refresh_from_db()
        self.assertEqual(a.answer_text, "Modified answer")
        self.assertEqual(a.answer, True)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(a.user.profile.rep,
                         point + reputation["ANSWER_ACCEPTED"] // 2 + reputation["ANSWER_ACCEPTED"])
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
        
        response = self.c.patch(
                reverse("ask:answer", args=[a.pk]),
                {
                    "answer"             : 0,
                    "csrfmiddlewaretoken": 1,
                },
                follow=True
        )
        a.refresh_from_db()
        self.assertEqual(a.answer, False)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(a.user.profile.rep, point)
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
    
    
    def test_patch_answer_404(self):
        response = self.c.patch(
                '/ask/answer/' + str(999) + '/',
                follow=True
        )
        
        self.assertEqual(response.status_code, 404)
        self.assertContains(response, "Answer with ID &#39;999&#39; does not exists",
                            status_code=404)



class CommentViewTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='user', password='12345')
        cls.c = Client()
        cls.c.force_login(cls.user, backend=settings.AUTHENTICATION_BACKENDS[0])
    
    
    def test_post_comment(self):
        q = QAQuestion.objects.create(title="title", description="desc", tags="tag", user=self.user)
        a = QAAnswer.objects.create(answer_text="answer", question=q, user=self.user)
        
        response = self.c.post(
                reverse("ask:question_comment", args=[q.pk, q.pk]),
                {"comment_text": "A comment"},
                follow=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertNotEqual(list(q.qaquestioncomment_set.all()), list())
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
        
        response = self.c.post(
                reverse("ask:answer_comment", args=[q.pk, a.pk]),
                {"comment_text": "A comment"},
                follow=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertNotEqual(list(a.qaanswercomment_set.all()), list())
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
    
    
    def test_post_comment_404(self):
        response = self.c.post(
                reverse("ask:question_comment", args=[999, 999]),
                {"comment_text": "A comment"},
                follow=True
        )
        self.assertEqual(response.status_code, 404)
        
        response = self.c.post(
                reverse("ask:answer_comment", args=[999, 999]),
                {"comment_text": "A comment"},
                follow=True
        )
        self.assertEqual(response.status_code, 404)
    
    
    def test_post_comment_400(self):
        q = QAQuestion.objects.create(title="title", description="desc", tags="tag", user=self.user)
        a = QAAnswer.objects.create(answer_text="answer", question=q, user=self.user)
        
        response = self.c.post(
                reverse("ask:question_comment", args=[q.pk, q.pk]),
                {},
                follow=True
        )
        self.assertEqual(response.status_code, 400)
        
        response = self.c.post(
                reverse("ask:answer_comment", args=[q.pk, a.pk]),
                {},
                follow=True
        )
        self.assertEqual(response.status_code, 400)
    
    
    def test_patch_comment(self):
        q = QAQuestion.objects.create(title="title", description="desc", tags="tag", user=self.user)
        a = QAAnswer.objects.create(answer_text="answer", question=q, user=self.user)
        cq = QAQuestionComment.objects.create(user=self.user, comment_text="A comment", question=q)
        ca = QAAnswerComment.objects.create(user=self.user, comment_text="A comment", answer=a)
        
        response = self.c.patch(
                reverse("ask:question_comment", args=[q.pk, cq.pk]),
                {"comment_text": "A modified comment", "csrfmiddlewaretoken": 1, },
                follow=True
        )
        cq.refresh_from_db()
        self.assertEqual(response.status_code, 200)
        self.assertEqual(cq.comment_text, "A modified comment")
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
        
        response = self.c.patch(
                reverse("ask:answer_comment", args=[q.pk, ca.pk]),
                {"comment_text": "A modified comment", "csrfmiddlewaretoken": 1, },
                follow=True
        )
        ca.refresh_from_db()
        self.assertEqual(response.status_code, 200)
        self.assertEqual(ca.comment_text, "A modified comment")
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
    
    
    def test_patch_comment_404(self):
        q = QAQuestion.objects.create(title="title", description="desc", tags="tag", user=self.user)
        
        response = self.c.patch(
                reverse("ask:question_comment", args=[q.pk, 999]),
                {"comment_text": "A modified comment"},
                follow=True
        )
        self.assertEqual(response.status_code, 404)
        
        response = self.c.patch(
                reverse("ask:answer_comment", args=[q.pk, 999]),
                {"comment_text": "A modified comment"},
                follow=True
        )
        self.assertEqual(response.status_code, 404)
    
    
    def test_delete_comment(self):
        q = QAQuestion.objects.create(title="title", description="desc", tags="tag", user=self.user)
        a = QAAnswer.objects.create(answer_text="answer", question=q, user=self.user)
        cq = QAQuestionComment.objects.create(user=self.user, comment_text="A comment", question=q)
        ca = QAAnswerComment.objects.create(user=self.user, comment_text="A comment", answer=a)
        
        response = self.c.delete(
                reverse("ask:question_comment", args=[q.pk, cq.pk]),
                follow=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(list(QAQuestionComment.objects.filter(pk=cq.pk)), list())
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
        
        response = self.c.delete(
                reverse("ask:answer_comment", args=[q.pk, ca.pk]),
                follow=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(list(QAQuestionComment.objects.filter(pk=ca.pk)), list())
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
    
    
    def test_delete_comment_404(self):
        q = QAQuestion.objects.create(title="title", description="desc", tags="tag", user=self.user)
        
        response = self.c.delete(
                reverse("ask:question_comment", args=[q.pk, 999]),
                follow=True
        )
        self.assertEqual(response.status_code, 404)
        
        response = self.c.delete(
                reverse("ask:answer_comment", args=[q.pk, 999]),
                follow=True
        )
        self.assertEqual(response.status_code, 404)



class VoteViewTestCase(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.CBV = None
        cls.user = User.objects.create_user(username='user', password='12345')
        cls.c = Client()
        cls.c.force_login(cls.user, backend=settings.AUTHENTICATION_BACKENDS[0])
    
    
    def test_get_vote(self):
        q = QAQuestion.objects.create(title="title", description="desc", tags="tag", user=self.user)
        a = QAAnswer.objects.create(answer_text="answer", question=q, user=self.user)
        
        response = self.c.get(
                reverse("ask:question_vote", args=[q.pk]),
                {"vote": "up"},
                follow=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertNotEqual(q.qaquestionvote_set, list())
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
        
        response = self.c.get(
                reverse("ask:answer_vote", args=[q.pk, a.pk]),
                {"vote": "up"},
                follow=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertNotEqual(a.qaanswervote_set, list())
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
    
    
    def test_get_vote_change(self):
        q = QAQuestion.objects.create(title="title", description="desc", tags="tag", user=self.user)
        a = QAAnswer.objects.create(answer_text="answer", question=q, user=self.user)
        vq = QAQuestionVote.objects.create(user=self.user, value=True, question=q)
        va = QAAnswerVote.objects.create(user=self.user, value=True, answer=a)
        
        self.assertEqual(vq.value, True)
        self.assertEqual(va.value, True)
        
        response = self.c.get(
                reverse("ask:question_vote", args=[q.pk]),
                {"vote": "down"},
                follow=True
        )
        vq.refresh_from_db()
        self.assertEqual(response.status_code, 200)
        self.assertEqual(vq.value, False)
        self.assertNotEqual(list(q.qaquestionvote_set.all()), list())
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
        
        response = self.c.get(
                reverse("ask:answer_vote", args=[q.pk, a.pk]),
                {"vote": "down"},
                follow=True
        )
        va.refresh_from_db()
        self.assertEqual(response.status_code, 200)
        self.assertEqual(va.value, False)
        self.assertNotEqual(list(a.qaanswervote_set.all()), list())
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
    
    
    def test_get_vote_remove(self):
        q = QAQuestion.objects.create(title="title", description="desc", tags="tag", user=self.user)
        a = QAAnswer.objects.create(answer_text="answer", question=q, user=self.user)
        QAQuestionVote.objects.create(user=self.user, value=True, question=q)
        QAAnswerVote.objects.create(user=self.user, value=True, answer=a)
        
        response = self.c.get(
                reverse("ask:question_vote", args=[q.pk]),
                {"vote": "up"},
                follow=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(list(q.qaquestionvote_set.all()), list())
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
        
        response = self.c.get(
                reverse("ask:answer_vote", args=[q.pk, a.pk]),
                {"vote": "up"},
                follow=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(list(a.qaanswervote_set.all()), list())
        self.assertTemplateUsed("qa/detail_question.html")
        self.assertEqual(response.resolver_match.func.__name__,
                         qaviews.QuestionView.as_view().__name__)
    
    
    def test_get_vote_404(self):
        response = self.c.get(
                reverse("ask:question_vote", args=[999]),
                {"vote": "up"},
                follow=True
        )
        self.assertEqual(response.status_code, 404)
        
        response = self.c.get(
                reverse("ask:answer_vote", args=[999, 999]),
                {"vote": "up"},
                follow=True
        )
        self.assertEqual(response.status_code, 404)
    
    
    def test_get_vote_400(self):
        q = QAQuestion.objects.create(title="title", description="desc", tags="tag", user=self.user)
        a = QAAnswer.objects.create(answer_text="answer", question=q, user=self.user)
        
        response = self.c.get(
                reverse("ask:question_vote", args=[q.pk]),
                {},
                follow=True
        )
        self.assertEqual(response.status_code, 400)
        
        response = self.c.get(
                reverse("ask:answer_vote", args=[q.pk, a.pk]),
                {},
                follow=True
        )
        self.assertEqual(response.status_code, 400)
