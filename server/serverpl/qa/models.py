from annoying.fields import AutoOneToOneField

from django.conf import settings
from django.db import models
from django.db.models import F
from django.utils.encoding import python_2_unicode_compatible
from django.utils.text import slugify

from django_markdown.models import MarkdownField

from hitcount.models import HitCountMixin

from taggit.managers import TaggableManager

from qa.mixins import DateMixin
from user_profile.models import Profile



class QAQuestion(models.Model, HitCountMixin, DateMixin):
    """Model class to contain every question in the forum"""
    slug = models.SlugField(max_length=200)
    title = models.CharField(max_length=200, blank=False)
    description = MarkdownField()
    pub_date = models.DateTimeField('date published', auto_now_add=True)
    tags = TaggableManager()
    reward = models.IntegerField(default=0)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    closed = models.BooleanField(default=False)
    positive_votes = models.IntegerField(default=0)
    negative_votes = models.IntegerField(default=0)
    total_points = models.IntegerField(default=0)
    
    
    def has_accepted_answer(self):
        return bool(self.qaanswer_set.filter(answer=True))
    
    
    def save(self, *args, **kwargs):
        if not self.id:
            self.slug = slugify(self.title)
            try:
                points = settings.QA_SETTINGS['reputation']['CREATE_QUESTION']

            except KeyError:
                points = 0

            self.user.profile.mod_rep(points)

        self.total_points = self.positive_votes - self.negative_votes
        super(QAQuestion, self).save(*args, **kwargs)
    
    def __str__(self):
        return self.title



class QAAnswer(models.Model, DateMixin):
    """Model class to contain every answer in the forum and to link it
    to the proper question."""
    question = models.ForeignKey(QAQuestion, on_delete=models.CASCADE)
    answer_text = MarkdownField()
    pub_date = models.DateTimeField('date published', auto_now_add=True)
    updated = models.DateTimeField('date updated', auto_now=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    answer = models.BooleanField(default=False)
    positive_votes = models.IntegerField(default=0)
    negative_votes = models.IntegerField(default=0)
    total_points = models.IntegerField(default=0)

    def save(self, *args, **kwargs):
        try:
            points = settings.QA_SETTINGS['reputation']['CREATE_ANSWER']
    
        except KeyError:
            points = 0
    
        self.user.profile.mod_rep(points)
        self.total_points = self.positive_votes - self.negative_votes
        super(QAAnswer, self).save(*args, **kwargs)
    
    
    def __str__(self):  # pragma: no cover
        return self.answer_text
    
    class Meta:
        ordering = ['-answer', '-pub_date']


class VoteParent(models.Model):
    """Abstract model to define the basic elements to every single vote."""
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    value = models.BooleanField(default=True)

    class Meta:
        abstract = True


class QAAnswerVote(VoteParent):
    """Model class to contain the votes for the answers."""
    answer = models.ForeignKey(QAAnswer, on_delete=models.CASCADE)

    class Meta:
        unique_together = (('user', 'answer'),)


class QAQuestionVote(VoteParent):
    """Model class to contain the votes for the questions."""
    question = models.ForeignKey(QAQuestion, on_delete=models.CASCADE)

    class Meta:
        unique_together = (('user', 'question'),)



class BaseComment(models.Model, DateMixin):
    """Abstract model to define the basic elements to every single comment."""
    pub_date = models.DateTimeField('date published', auto_now_add=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    class Meta:
        abstract = True
    
    def __str__(self):  # pragma: no cover
        return self.comment_text


class QAAnswerComment(BaseComment):
    """Model class to contain the comments for the answers."""
    comment_text = MarkdownField()
    answer = models.ForeignKey(QAAnswer, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        try:
            points = settings.QA_SETTINGS['reputation']['CREATE_ANSWER_COMMENT']

        except KeyError:
            points = 0

        self.user.profile.mod_rep(points)
        super(QAAnswerComment, self).save(*args, **kwargs)


class QAQuestionComment(BaseComment):
    """Model class to contain the comments for the questions."""
    comment_text = models.CharField(max_length=250)
    question = models.ForeignKey(QAQuestion, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        try:
            points = settings.QA_SETTINGS['reputation']['CREATE_QUESTION_COMMENT']

        except KeyError:
            points = 0

        self.user.profile.mod_rep(points)
        super(QAQuestionComment, self).save(*args, **kwargs)
