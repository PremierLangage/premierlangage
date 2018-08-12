import operator
from functools import reduce

from django.conf import settings
from django.http import HttpResponseBadRequest, Http404
from django.contrib import messages
from django.core.exceptions import ObjectDoesNotExist
from django.core.paginator import Paginator
from django.urls import reverse
from django.utils import timezone
from django.db import models
from django.db.models import Count, Q
from django.shortcuts import get_object_or_404, redirect, render
from django.views.generic import View

from hitcount.models import HitCount
from hitcount.views import HitCountMixin

from django_http_method import HttpMethodMixin

from qa.models import (QAAnswer, QAAnswerComment, QAAnswerVote, QAQuestion, QAQuestionComment,
                      QAQuestionVote)
from qa.utils import parse_query




class IndexView(View):
    """View corresponding to the index of QA."""
    
    template_name = 'qa/index.html'
    question_per_page = 20
    
    def get(self, request):
        tag = request.GET.get('tag')
        page = request.GET.get('page')
        query = request.GET.get('query')
        active = request.GET.get('active', 'questions')
        
        try: 
            int(page)
        except:
            page = None
        
        questions = QAQuestion.objects.order_by("-pub_date")
        noans = QAQuestion.objects.order_by('-pub_date').filter(qaanswer__isnull=True)
        popular = QAQuestion.objects.order_by('-popularity')
        if request.user.is_authenticated:
            usersq = QAQuestion.objects.order_by('-pub_date').filter(user=request.user)
        else:
            usersq = []
        
        if tag:
            questions = questions.filter(tags__name__contains=tag)
            noans = noans.filter(tags__name__contains=tag)
            popular = popular.filter(tags__name__contains=tag)
            if request.user.is_authenticated:
                usersq = usersq.filter(tags__name__contains=tag)
            
        if query:
            include, exclude = parse_query(query)
            include = (reduce(operator.or_, (Q(title__icontains=i) for i in include))
                     | reduce(operator.or_, (Q(description__icontains=i) for i in include))
                     | reduce(operator.or_, (Q(tags__name__icontains=i) for i in include))
                     if include else Q())
            exclude = (reduce(operator.or_, (~Q(title__icontains=i) for i in exclude))
                     | reduce(operator.or_, (~Q(description__icontains=i) for i in exclude))
                     | reduce(operator.or_, (~Q(tags__name__icontains=i) for i in exclude))
                     if exclude else Q())
            questions = questions.filter(include & exclude)
            noans = noans.filter(include & exclude)
            popular = popular.filter(include & exclude)
            if request.user.is_authenticated:
                usersq = usersq.filter(include & exclude)
        
        questions = questions.annotate(num_answers=Count('qaanswer'))
        noans = noans.annotate(num_answers=Count('qaanswer'))
        popular = popular.annotate(num_answers=Count('qaanswer'))
        if request.user.is_authenticated:
            usersq = usersq.annotate(num_answers=Count('qaanswer'))
        
        return render(request, self.template_name, {
            "questions": Paginator(questions, self.question_per_page).get_page(page if page else 1),
            "noans": Paginator(noans, self.question_per_page).get_page(page if page else 1),
            "usersq": Paginator(usersq, self.question_per_page).get_page(page if page else 1),
            "popular": Paginator(popular, self.question_per_page).get_page(page if page else 1),
            "query": query if query else "",
            'rights': settings.QA_SETTINGS['right'],
            'active': active,
            'tag_q': tag,
        })



class QuestionView(HttpMethodMixin, View):
    """Handle requests interacting with Question."""
    
    template_name = 'qa/detail_question.html'
    
    
    def post(self, request):
        """Create a question."""
        title = request.POST.get('title')
        description = request.POST.get('description')
        tags = request.POST.get('tags')
        
        if not (title and description and tags):
            return HttpResponseBadRequest()
        
        tags = tags.split(",")
        question = QAQuestion(title=title, description=description, user=request.user)
        question.save()
        question.tags.set(*tags)
        question.save()
        
        return redirect(reverse('ask:question', args=[question.pk]))
    
    
    def patch(self, request, pk):
        """Modify a question."""
        question = QAQuestion.objects.filter(pk=pk)
        if not question:
            raise Http404("Question with ID '" + str(pk) + "' does not exists")
        
        params = dict(request.PATCH.dict())
        del params['csrfmiddlewaretoken']
        if 'tags' in params:
            question[0].tags.set(*params['tags'].split(","), clear=True)
            question[0].save()
            del params['tags']
        
        params['update_date'] = timezone.now()
        params['update_user'] = request.user
        question.update(**params)
        
        return redirect(reverse('ask:question', args=[pk]))
    
    
    def delete(self, request, pk):
        """Delete a question"""
        question = get_object_or_404(QAQuestion, pk=pk)
        question.delete()
        return redirect(reverse('ask:index'))
    
    
    def get(self, request, pk):
        """Display a question details."""
        question = get_object_or_404(QAQuestion, pk=pk)
        HitCountMixin.hit_count(request, HitCount.objects.get_for_object(question))
        answers = question.qaanswer_set.all().order_by('-points')
        
        return render(request, self.template_name, {
            'question': question,
            'answers': answers,
            'num_answer': len(answers),
            'rights': settings.QA_SETTINGS['right'],
        })



class AnswerView(HttpMethodMixin, View):
    """Handle requests interacting with Answer."""
    
    template_name = 'qa/detail_question.html'
    
    
    def post(self, request, pk):
        """Create a Answer."""
        question = get_object_or_404(QAQuestion, pk=pk)
        answer_text = request.POST.get('answer_text')
        
        if not answer_text:
            return HttpResponseBadRequest()
        
        answer = QAAnswer(question=question, answer_text=answer_text, user=request.user)
        answer.save()
        
        return redirect(reverse('ask:question', args=[question.pk]))
    
    
    def patch(self, request, pk):
        """Modify an answer."""
        answer = QAAnswer.objects.filter(pk=pk)
        if not answer:
            raise Http404("Answer with ID '" + str(pk) + "' does not exists")
        
        params = dict(request.PATCH.dict())
        del params['csrfmiddlewaretoken']
        if 'answer' in params:
            params['answer'] = bool(int(params['answer']))
            answer[0].question.qaanswer_set.all().update(answer=False)
        
        params['update_date'] = timezone.now()
        params['update_user'] = request.user
        answer.update(**params)
        
        if 'answer' in params:
            if params['answer']:
                answer[0].question.user.profile.mod_rep(settings.QA_SETTINGS['reputation']['ANSWER_ACCEPTED']//2)
                answer[0].user.profile.mod_rep(settings.QA_SETTINGS['reputation']['ANSWER_ACCEPTED'])
            else:
                answer[0].question.user.profile.mod_rep(-settings.QA_SETTINGS['reputation']['ANSWER_ACCEPTED']//2)
                answer[0].user.profile.mod_rep(-settings.QA_SETTINGS['reputation']['ANSWER_ACCEPTED'])
        
        return redirect(reverse('ask:question', args=[answer[0].question.pk]))
    
    
    def delete(self, request, pk):
        """Delete a answer"""
        answer = get_object_or_404(QAAnswer, pk=pk)
        question_pk = answer.question.pk
        answer.delete()
        return redirect(reverse('ask:question', args=[question_pk]))



class AbstractCommentView(HttpMethodMixin):
    """Abstract view for handling requests interacting with Comment."""
    
    template_name = "template"
    model = models.Model
    foreign_model = models.Model
    foreign_rel_name = "foreign"
    
    # TODO: Use an ajax request instead of redirecting to ask:question. This would remove the
    # necessity for question_pk
    def post(self, request, question_pk, pk):
        """Create a comment.
        
        Parameters:
            question_pk - Primary Key of the question to which the request will be redirected.
            pk - Primary Key of the foreign model of this comment."""
        comment_text = request.POST.get('comment_text')
        foreign = get_object_or_404(self.foreign_model, pk=pk)
        
        if not comment_text:
            return HttpResponseBadRequest()
        
        self.model(**{
            'user': request.user,
            'comment_text': comment_text,
            self.foreign_rel_name: foreign,
        }).save()
        
        return redirect(reverse('ask:question', args=[question_pk]))
    
    # TODO: Use an ajax request instead of redirecting to ask:question. This would remove the
    # necessity for question_pk
    def patch(self, request, question_pk, pk):
        """Modify a comment.
        
        Parameters:
            question_pk - Primary Key of the question to which the request will be redirected.
            pk - Primary Key of the comment."""
        comment = self.model.objects.filter(pk=pk)
        if not comment:
            raise Http404("Comment with ID '" + str(pk) + "' does not exists")
        
        params = dict(request.PATCH.dict())
        del params['csrfmiddlewaretoken']
        params['update_date'] = timezone.now()
        params['update_user'] = request.user
        comment.update(**params)
        
        return redirect(reverse('ask:question', args=[question_pk]))
    
    
    def delete(self, request, question_pk, pk):
        """Delete a comment"""
        comment = get_object_or_404(self.model, pk=pk)
        comment.delete()
        return redirect(reverse('ask:question', args=[question_pk]))



class QuestionCommentView(AbstractCommentView, View):
    """View for handling requests interacting with QuestionComment."""
    
    model = QAQuestionComment
    foreign_model = QAQuestion
    foreign_rel_name = "question"



class AnswerCommentView(AbstractCommentView, View):
    """View for handling requests interacting with AnswerComment."""
    
    model = QAAnswerComment
    foreign_model = QAAnswer
    foreign_rel_name = "answer"



class AbstractVoteView:
    """Abstract view for handling requests interacting with Vote."""
    
    model = models.Model
    foreign_model = models.Model
    foreign_rel_name = "foreign"
    
    # TODO: Use an ajax request instead of redirecting to ask:question. This would remove the
    # necessity for question_pk and improve user experience.
    # TODO2: Use POST method instead of GET
    def get(self, request, question_pk, pk=None):
        """Create a vote.
        
        Parameters:
            question_pk - Primary Key of the question to which the request will be redirected.
            pk - Primary Key of the foreign model of this vote.
                 The question_pk will be used if none is provided"""
        vote = request.GET.get('vote')
        
        if not vote:
            HttpResponseBadRequest()
        
        foreign = get_object_or_404(self.foreign_model, pk=pk if pk else question_pk)
        value = vote == "up"
        try:
            vote = self.model.objects.get(**{'user': request.user, self.foreign_rel_name: foreign})
            if vote.value != value:
                vote.value = value
                vote.save()
            else:
                vote.delete()
        except ObjectDoesNotExist:
            self.model.objects.create(**{
                'user': request.user,
                self.foreign_rel_name: foreign,
                'value': value,
            })
        
        return redirect(reverse('ask:question', args=[question_pk]))



class QuestionVoteView(AbstractVoteView, View):
    """View for handling requests interacting with QuestionVote."""
    
    model = QAQuestionVote
    foreign_model = QAQuestion
    foreign_rel_name = "question"



class AnswerVoteView(AbstractVoteView, View):
    """View for handling requests interacting with AnswerVote."""
    
    model = QAAnswerVote
    foreign_model = QAAnswer
    foreign_rel_name = "answer"
