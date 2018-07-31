import operator
from functools import reduce

from django.conf import settings
from django.contrib import messages
from django.contrib.auth import get_user_model
from django.contrib.contenttypes.models import ContentType
from django.core.exceptions import ValidationError
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from django.urls import reverse
from django.db.models import Count, Q
from django.shortcuts import get_object_or_404, redirect, render
from django.utils.translation import ugettext as _
from django.views.generic import CreateView, ListView, UpdateView, View

from hitcount.views import HitCountDetailView

from taggit.models import Tag, TaggedItem

from qa.models import QAAnswer, QAAnswerComment, QAAnswerVote, QAQuestion, QAQuestionComment, QAQuestionVote
from qa.forms import QAQuestionForm
from qa.mixins import AuthorRequiredMixin, LoginRequired
from qa.utils import question_score

from user_profile.models import Profile



try:
    qa_messages = 'django.contrib.messages' in settings.INSTALLED_APPS and\
        settings.QA_SETTINGS['qa_messages']

except AttributeError:  # pragma: no cover
    qa_messages = False

if qa_messages:
    from django.contrib import messages


"""Dear maintainer:

Once you are done trying to 'optimize' this routine, and have realized what a
terrible mistake that was, please increment the following counter as a warning
to the next guy:

total_hours_wasted_here = 2
"""


class QAAnswerQAQuestionView(LoginRequired, View):
    """
    View to select an answer as the satisfying answer to the question,
    The user who created the question is the only one allowed to make those changes.
    """
    model = QAAnswer

    def post(self, request, answer_id):
        answer = get_object_or_404(self.model, pk=answer_id)
        if answer.question.user != request.user:
            raise ValidationError("Sorry, you're not allowed to accept an answer on this question.")

        else:
            answer.question.qaanswer_set.update(answer=False)
            answer.answer = not answer.answer
            answer.save()

            try:
                points = settings.QA_SETTINGS['reputation']['ACCEPT_ANSWER']
            except KeyError:
                points = 0

            qa_user = Profile.objects.get(user=answer.user)
            qa_user.mod_rep(points if answer.answer else -points)

        next_url = request.POST.get('next', '')
        if next_url is not '':
            return redirect(next_url)
        else:
            return redirect(reverse('ask:qa_index'))


class CloseQAQuestionView(LoginRequired, View):
    """View to
    mark the question as closed, validating than the user who created que
    question is the only one allowed to make those changes.
    """
    model = QAQuestion

    def post(self, request, question_id):
        question = get_object_or_404(self.model, pk=question_id)
        if question.user != request.user:
            raise ValidationError(
                "Sorry, you're not allowed to close this question.")
        else:
            if not question.closed:
                question.closed = True

            else:
                raise ValidationError("Sorry, this question is already closed")

            question.save()

        next_url = request.POST.get('next', '')
        if next_url is not '':
            return redirect(next_url)

        else:
            return redirect(reverse('ask:qa_index'))


class QAQuestionIndexView(ListView):
    """CBV to render the index view."""
    model = QAQuestion
    paginate_by = 30
    context_object_name = 'questions'
    template_name = 'qa/index.html'
    ordering = '-pub_date'

    def get_context_data(self, *args, **kwargs):
        context = super(
            QAQuestionIndexView, self).get_context_data(*args, **kwargs)
        noans = QAQuestion.objects.order_by('-pub_date').filter(
            qaanswer__isnull=True).select_related('user')\
            .annotate(num_answers=Count('qaanswer', distinct=True),
                      num_question_comments=Count('qaquestioncomment',
                      distinct=True))
        context['totalcount'] = QAQuestion.objects.count()
        context['anscount'] = QAAnswer.objects.count()
        paginator = Paginator(noans, 30)
        page = self.request.GET.get('noans_page')
        context['active_tab'] = self.request.GET.get('active_tab', 'latest')
        tabs = ['latest', 'unans', 'reward']
        context['active_tab'] = 'latest' if context['active_tab'] not in\
            tabs else context['active_tab']
        try:
            noans = paginator.page(page)

        except PageNotAnInteger:
            noans = paginator.page(1)

        except EmptyPage:  # pragma: no cover
            noans = paginator.page(paginator.num_pages)

        context['totalnoans'] = paginator.count
        context['noans'] = noans
        context['reward'] = QAQuestion.objects.order_by('-reward').filter(
            reward__gte=1)[:10]
        question_contenttype = ContentType.objects.get_for_model(QAQuestion)
        items = TaggedItem.objects.filter(content_type=question_contenttype)
        context['tags'] = Tag.objects.filter(
            taggit_taggeditem_items__in=items).order_by('-id').distinct()[:10]

        return context

    def get_queryset(self):
        queryset = super(QAQuestionIndexView, self).get_queryset()\
            .select_related('user')\
            .annotate(num_answers=Count('qaanswer', distinct=True),
                      num_question_comments=Count('qaquestioncomment',
                      distinct=True))
        return queryset


class QAQuestionsSearchView(QAQuestionIndexView):
    """
    Display a ListView page inherithed from the QAQuestionIndexView filtered by
    the search query and sorted by the different elements aggregated.
    """

    def get_queryset(self):
        result = super(QAQuestionsSearchView, self).get_queryset()
        query = self.request.GET.get('word', '')
        if query:
            query_list = query.split()
            result = result.filter(
                reduce(operator.and_,
                       (Q(title__icontains=q) for q in query_list)) |
                reduce(operator.and_,
                       (Q(description__icontains=q) for q in query_list)))

        return result

    def get_context_data(self, *args, **kwargs):
        context = super(
            QAQuestionsSearchView, self).get_context_data(*args, **kwargs)
        context['totalcount'] = QAQuestion.objects.count
        context['anscount'] = QAAnswer.objects.count
        context['noans'] = QAQuestion.objects.order_by('-pub_date').filter(
            qaanswer__isnull=True)[:10]
        context['reward'] = QAQuestion.objects.order_by('-reward').filter(
            reward__gte=1)[:10]
        return context


class QAQuestionsByTagView(ListView):
    """View to call all the questions clasiffied under one specific tag.
    """
    model = QAQuestion
    paginate_by = 10
    context_object_name = 'questions'
    template_name = 'qa/index.html'

    def get_queryset(self, **kwargs):
        return QAQuestion.objects.filter(tags__slug=self.kwargs['tag'])

    def get_context_data(self, *args, **kwargs):
        context = super(
            QAQuestionsByTagView, self).get_context_data(*args, **kwargs)
        context['active_tab'] = self.request.GET.get('active_tab', 'latest')
        tabs = ['latest', 'unans', 'reward']
        context['active_tab'] = 'latest' if context['active_tab'] not in\
            tabs else context['active_tab']
        context['totalcount'] = QAQuestion.objects.count
        context['anscount'] = QAAnswer.objects.count
        context['noans'] = QAQuestion.objects.order_by('-pub_date').filter(
            tags__name__contains=self.kwargs['tag'], qaanswer__isnull=True)[:10]\
            .annotate(num_answers=Count('qaanswer', distinct=True),
                      num_question_comments=Count('qaquestioncomment',
                      distinct=True))
        context['reward'] = QAQuestion.objects.order_by('-reward').filter(
            tags__name__contains=self.kwargs['tag'],
            reward__gte=1)[:10]
        context['totalnoans'] = len(context['noans'])
        return context


class CreateQAQuestionView(LoginRequired, CreateView):
    """
    View to handle the creation of a new question
    """
    template_name = 'qa/create_question.html'
    message = _('Thank you! your question has been created.')
    form_class = QAQuestionForm

    def form_valid(self, form):
        """
        Create the required relation
        """
        form.instance.user = self.request.user
        return super(CreateQAQuestionView, self).form_valid(form)

    def get_success_url(self):
        if qa_messages:
            messages.success(self.request, self.message)

        return reverse('ask:qa_index')


class UpdateQAQuestionView(LoginRequired, AuthorRequiredMixin, UpdateView):
    """
    Updates the question
    """
    template_name = 'qa/update_question.html'
    model = QAQuestion
    pk_url_kwarg = 'question_id'
    fields = ['title', 'description', 'tags']

    def get_success_url(self):
        question = self.get_object()
        return reverse('ask:qa_detail', kwargs={'pk': question.pk})


class CreateQAAnswerView(LoginRequired, CreateView):
    """
    View to create new answers for a given question
    """
    template_name = 'qa/create_answer.html'
    model = QAAnswer
    fields = ['answer_text']
    message = _('Thank you! your answer has been posted.')

    def form_valid(self, form):
        """
        Creates the required relationship between answer
        and user/question
        """
        form.instance.user = self.request.user
        form.instance.question_id = self.kwargs['question_id']
        return super(CreateQAAnswerView, self).form_valid(form)

    def get_success_url(self):
        if qa_messages:
            messages.success(self.request, self.message)

        return reverse('ask:qa_detail', kwargs={'pk': self.kwargs['question_id']})


class UpdateQAAnswerView(LoginRequired, AuthorRequiredMixin, UpdateView):
    """
    Updates the question answer
    """
    template_name = 'qa/update_answer.html'
    model = QAAnswer
    pk_url_kwarg = 'answer_id'
    fields = ['answer_text']

    def get_success_url(self):
        answer = self.get_object()
        return reverse('ask:qa_detail', kwargs={'pk': answer.question.pk})


class CreateQAAnswerCommentView(LoginRequired, CreateView):
    """
    View to create new comments for a given answer
    """
    template_name = 'qa/create_comment.html'
    model = QAAnswerComment
    fields = ['comment_text']
    message = _('Thank you! your comment has been posted.')

    def form_valid(self, form):
        """
        Creates the required relationship between answer
        and user/comment
        """
        form.instance.user = self.request.user
        form.instance.answer_id = self.kwargs['answer_id']
        return super(CreateQAAnswerCommentView, self).form_valid(form)

    def get_success_url(self):
        if qa_messages:
            messages.success(self.request, self.message)

        question_pk = QAAnswer.objects.get(
            id=self.kwargs['answer_id']).question.pk
        return reverse('ask:qa_detail', kwargs={'pk': question_pk})


class CreateQAQuestionCommentView(LoginRequired, CreateView):
    """
    View to create new comments for a given question
    """
    template_name = 'qa/create_comment.html'
    model = QAQuestionComment
    fields = ['comment_text']
    message = _('Thank you! your comment has been posted.')

    def form_valid(self, form):
        """
        Creates the required relationship between question
        and user/comment
        """
        form.instance.user = self.request.user
        form.instance.question_id = self.kwargs['question_id']
        return super(CreateQAQuestionCommentView, self).form_valid(form)

    def get_success_url(self):
        if qa_messages:
            messages.success(self.request, self.message)

        return reverse('ask:qa_detail', kwargs={'pk': self.kwargs['question_id']})


class UpdateQAQuestionCommentView(LoginRequired,
                                AuthorRequiredMixin, UpdateView):
    """
    Updates the comment question
    """
    template_name = 'qa/create_comment.html'
    model = QAQuestionComment
    pk_url_kwarg = 'comment_id'
    fields = ['comment_text']

    def get_success_url(self):
        question_comment = self.get_object()
        return reverse('ask:qa_detail',
                       kwargs={'pk': question_comment.question.pk})


class UpdateQAAnswerCommentView(UpdateQAQuestionCommentView):
    """
    Updates the comment answer
    """
    model = QAAnswerComment

    def get_success_url(self):
        answer_comment = self.get_object()
        return reverse('ask:qa_detail',
                       kwargs={'pk': answer_comment.answer.question.pk})


class QAQuestionDetailView(HitCountDetailView):
    """
    View to call a question and to render all the details about that question.
    """
    model = QAQuestion
    template_name = 'qa/detail_question.html'
    context_object_name = 'question'
    slug_field = 'slug'
    try:
        count_hit = settings.QA_SETTINGS['count_hits']

    except KeyError:
        count_hit = True

    def get_context_data(self, **kwargs):
        answers = self.object.qaanswer_set.all().order_by('-total_points')
        context = super(QAQuestionDetailView, self).get_context_data(**kwargs)
        context['answers'] = answers
        context['num_answers'] = len(answers)
        return context

    def get(self, request, **kwargs):
        my_object = self.get_object()
        slug = kwargs.get('slug', '')
        if slug != my_object.slug:
            kwargs['slug'] = my_object.slug
            return redirect(reverse('ask:qa_detail', kwargs=kwargs))

        else:
            return super(QAQuestionDetailView, self).get(request, **kwargs)

    def get_object(self):
        question = super(QAQuestionDetailView, self).get_object()
        return question
    
    def form_valid(self, form):
        """
        Creates the required relationship between answer
        and user/question
        """
        form.instance.user = self.request.user
        form.instance.question_id = self.kwargs['question_id']
        return super(QAQuestionDetailView, self).form_valid(form)
    
    def post(self, request, **kwargs):
        question = self.get_object()
        answer_text = request.POST.get('answer')
        if not answer_text or len(answer_text) < 50:
            messages.warning(request, "Your answer must be at least 50 characters long.")
        else:
            answer = QAAnswer(user=request.user, question=question, answer_text=answer_text)
            answer.save()
        answers = question.qaanswer_set.all().order_by('-total_points')
        return render(request, self.template_name, {
            'question': question,
            'answers': answers,
            'num_answers': len(answers),
            'answer_text': answer_text if not answer_text or len(answer_text) < 100 else ''
        })
            
    
    def get_success_url(self):
        if qa_messages:
            messages.success(self.request, self.message)

        return reverse('ask:qa_detail', kwargs={'pk': self.kwargs['question_id']})


class ParentVoteView(View):
    """Base class to create a vote for a given model (question/answer)
    """
    model = None
    vote_model = None

    def get_vote_kwargs(self, user, vote_target):
        """
        This takes the user and the vote and adjusts the kwargs
        depending on the used model.
        """
        object_kwargs = {'user': user}
        if self.model == QAQuestion:
            target_key = 'question'

        elif self.model == QAAnswer:
            target_key = 'answer'

        else:
            raise ValidationError('Not a valid model for votes')

        object_kwargs[target_key] = vote_target
        return object_kwargs

    def post(self, request, object_id):
        vote_target = get_object_or_404(self.model, pk=object_id)
        upvote = request.POST.get('upvote', None) is not None
        object_kwargs = self.get_vote_kwargs(request.user, vote_target)
        vote, created = self.vote_model.objects.get_or_create(
            defaults={'value': upvote},
            **object_kwargs)
        if created:
            vote_target.user.profile.rep += 1 if upvote else -1
            if upvote:
                vote_target.positive_votes += 1

            else:
                vote_target.negative_votes += 1

        else:
            if vote.value == upvote:
                vote.delete()
                vote_target.user.profile.rep += -1 if upvote else 1
                if upvote:
                    vote_target.positive_votes -= 1

                else:
                    vote_target.negative_votes -= 1

            else:
                vote_target.user.profile.rep += 2 if upvote else -2
                vote.value = upvote
                vote.save()
                if upvote:
                    vote_target.positive_votes += 1
                    vote_target.negative_votes -= 1

                else:
                    vote_target.negative_votes += 1
                    vote_target.positive_votes -= 1

        vote_target.user.profile.save()
        if self.model == QAQuestion:
            vote_target.reward = question_score(vote_target)

        if self.model == QAAnswer:
            vote_target.question.reward = question_score(
                vote_target.question)
            vote_target.question.save()

        vote_target.save()

        next_url = request.POST.get('next', '')
        if next_url is not '':
            return redirect(next_url)

        else:
            return redirect(reverse('ask:qa_index'))


class QAAnswerVoteView(ParentVoteView):
    """
    Class to upvote answers
    """
    model = QAAnswer
    vote_model = QAAnswerVote


class QAQuestionVoteView(ParentVoteView):
    """
    Class to upvote questions
    """
    model = QAQuestion
    vote_model = QAQuestionVote


def profile(request, user_id):
    user_ob = get_user_model().objects.get(id=user_id)
    user = Profile.objects.get(user=user_ob)
    context = {'user': user}
    return render(request, 'qa/profile.html', context)
