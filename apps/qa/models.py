import math

from django.conf import settings
from django.db import models
from django.db.models import F
from django.db.models.signals import pre_delete
from django.dispatch import receiver
from django.utils.text import slugify
from django_markdown.models import MarkdownField
from hitcount.models import HitCountMixin
from taggit.managers import TaggableManager

from qa.mixins import DateMixin
from qa.utils import epoch_seconds


REPUTATION = settings.QA_SETTINGS['reputation']



class QAQuestion(models.Model, HitCountMixin, DateMixin):
    """Model class to contain every question in the forum"""
    slug = models.SlugField(max_length=255)
    title = models.CharField(max_length=255, blank=False)
    description = MarkdownField()
    pub_date = models.DateTimeField('date published', auto_now_add=True)
    update_date = models.DateTimeField('date updated', null=True)
    update_user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL,
                                    related_name="updated_question")
    tags = TaggableManager()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
    closed = models.BooleanField(default=False)
    points = models.IntegerField(default=0)
    popularity = models.FloatField(default=0)
    
    
    def mod_points(self, points):
        p = self.points + points
        self.points = F('points') + points
        
        order = math.log(max(abs(p), 1), 10)
        sign = 1 if p > 0 else -1 if p < 0 else 0
        seconds = epoch_seconds(self.pub_date) - 1134028003
        self.popularity = round(sign * order + seconds / 45000, 7)
        self.save()
        self.refresh_from_db()
    
    
    def has_accepted_answer(self):
        return bool(self.qaanswer_set.filter(answer=True))
    
    
    def save(self, *args, **kwargs):
        if not self.pk:
            self.slug = slugify(self.title)
            self.user.profile.mod_rep(REPUTATION['CREATE_QUESTION'])
        super(QAQuestion, self).save(*args, **kwargs)
    
    
    def delete(self, *args, **kwargs):
        self.user.profile.mod_rep(-REPUTATION['CREATE_QUESTION'])
        super(QAQuestion, self).delete(*args, **kwargs)
    
    
    def __str__(self):
        return self.title



class QAAnswer(models.Model, DateMixin):
    """Model class to contain every answer in the forum and to link it
    to the proper question."""
    question = models.ForeignKey(QAQuestion, on_delete=models.CASCADE)
    answer_text = MarkdownField()
    pub_date = models.DateTimeField('date published', auto_now_add=True)
    update_date = models.DateTimeField('date updated', null=True)
    update_user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL,
                                    related_name="updated_answer")
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
    answer = models.BooleanField(default=False)
    points = models.IntegerField(default=0)
    
    
    def save(self, *args, **kwargs):
        if self.pk is None:
            self.user.profile.mod_rep(REPUTATION['CREATE_ANSWER'])
        super(QAAnswer, self).save(*args, **kwargs)
    
    
    def mod_points(self, points):
        self.points = F('points') + points
        self.save()
        self.refresh_from_db()
    
    
    def delete(self, *args, **kwargs):
        self.user.profile.mod_rep(-REPUTATION['CREATE_ANSWER'])
        if self.answer:
            self.question.user.profile.mod_rep(-REPUTATION['ANSWER_ACCEPTED'] // 2)
            self.user.profile.mod_rep(-REPUTATION['ANSWER_ACCEPTED'])
        super(QAAnswer, self).delete(*args, **kwargs)
    
    
    def __str__(self):  # pragma: no cover
        return self.answer_text
    
    class Meta:
        ordering = ['-answer', '-pub_date']



class VoteParent(models.Model):
    """Abstract model to define the basic elements to every single vote."""
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
    value = models.BooleanField(default=True)
    
    class Meta:
        abstract = True



class QAAnswerVote(VoteParent):
    """Model class to contain the votes for the answers."""
    answer = models.ForeignKey(QAAnswer, on_delete=models.CASCADE)
    
    class Meta:
        unique_together = (('user', 'answer'),)
    
    def save(self, *args, **kwargs):
        if self.pk is None:  # New vote
            if self.value:
                self.answer.user.profile.mod_rep(REPUTATION['UPVOTE_ANSWER'])
                self.answer.mod_points(1)
            else:
                self.answer.user.profile.mod_rep(REPUTATION['DOWNVOTE_ANSWER'])
                self.answer.mod_points(-1)
        else:  # Changed vote
            if self.value:
                self.answer.user.profile.mod_rep(REPUTATION['UPVOTE_ANSWER']
                                                 - REPUTATION['DOWNVOTE_ANSWER'])
                self.answer.mod_points(2)
            else:
                self.answer.user.profile.mod_rep(REPUTATION['DOWNVOTE_ANSWER']
                                                 - REPUTATION['UPVOTE_ANSWER'])
                self.answer.mod_points(-2)
        super(QAAnswerVote, self).save(*args, **kwargs)
    
    
    @receiver(pre_delete, sender='qa.QAAnswerVote')
    def on_delete(sender, instance, using, **kwargs):
        if instance.value:
            instance.answer.user.profile.mod_rep(-REPUTATION['UPVOTE_ANSWER'])
            instance.answer.points -= 1
        else:
            instance.answer.user.profile.mod_rep(-REPUTATION['DOWNVOTE_ANSWER'])
            instance.answer.points += 1
        instance.answer.save()



class QAQuestionVote(VoteParent):
    """Model class to contain the votes for the questions."""
    question = models.ForeignKey(QAQuestion, on_delete=models.CASCADE)
    
    class Meta:
        unique_together = (('user', 'question'),)
    
    def save(self, *args, **kwargs):
        if self.pk is None:  # New vote
            if self.value:
                self.question.user.profile.mod_rep(REPUTATION['UPVOTE_QUESTION'])
                self.question.mod_points(1)
            else:
                self.question.user.profile.mod_rep(REPUTATION['DOWNVOTE_QUESTION'])
                self.question.mod_points(-1)
        else:  # Changed vote
            if self.value:
                self.question.user.profile.mod_rep(REPUTATION['UPVOTE_QUESTION']
                                                   - REPUTATION['DOWNVOTE_QUESTION'])
                self.question.mod_points(2)
            else:
                self.question.user.profile.mod_rep(REPUTATION['DOWNVOTE_QUESTION']
                                                   - REPUTATION['UPVOTE_QUESTION'])
                self.question.mod_points(-2)
        self.question.save()
        super(QAQuestionVote, self).save(*args, **kwargs)
    
    
    @receiver(pre_delete, sender='qa.QAQuestionVote')
    def on_delete(sender, instance, using, **kwargs):
        if instance.value:
            instance.question.user.profile.mod_rep(-REPUTATION['UPVOTE_ANSWER'])
            instance.question.points -= 1
        else:
            instance.question.user.profile.mod_rep(-REPUTATION['DOWNVOTE_ANSWER'])
            instance.question.points += 1
        instance.question.save()



class BaseComment(models.Model, DateMixin):
    """Abstract model to define the basic elements to every single comment."""
    pub_date = models.DateTimeField('date published', auto_now_add=True)
    update_date = models.DateTimeField('date updated', null=True)
    update_user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL,
                                    related_name="updated_comment")
    comment_text = models.TextField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
    
    class Meta:
        abstract = True
    
    def __str__(self):  # pragma: no cover
        return self.comment_text



class QAAnswerComment(BaseComment):
    """Model class to contain the comments for the answers."""
    answer = models.ForeignKey(QAAnswer, on_delete=models.CASCADE)
    update_user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL,
                                    related_name="updated_answer_comment")
    
    
    def save(self, *args, **kwargs):
        if self.pk is None:
            self.user.profile.mod_rep(REPUTATION['CREATE_ANSWER_COMMENT'])
            self.answer.user.profile.mod_rep(REPUTATION['RECEIVE_ANSWER_COMMENT'])
        super(QAAnswerComment, self).save(*args, **kwargs)
    
    
    def delete(self, *args, **kwargs):
        self.user.profile.mod_rep(-REPUTATION['CREATE_ANSWER_COMMENT'])
        self.answer.user.profile.mod_rep(-REPUTATION['RECEIVE_ANSWER_COMMENT'])
        super(QAAnswerComment, self).delete(*args, **kwargs)



class QAQuestionComment(BaseComment):
    """Model class to contain the comments for the questions."""
    question = models.ForeignKey(QAQuestion, on_delete=models.CASCADE)
    update_user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL,
                                    related_name="updated_question_comment")
    
    
    def save(self, *args, **kwargs):
        if self.pk is None:
            self.user.profile.mod_rep(REPUTATION['CREATE_QUESTION_COMMENT'])
            self.question.user.profile.mod_rep(REPUTATION['RECEIVE_QUESTION_COMMENT'])
        super(QAQuestionComment, self).save(*args, **kwargs)
    
    
    def delete(self, *args, **kwargs):
        self.user.profile.mod_rep(-REPUTATION['CREATE_QUESTION_COMMENT'])
        self.question.user.profile.mod_rep(-REPUTATION['RECEIVE_QUESTION_COMMENT'])
        super(QAQuestionComment, self).delete(*args, **kwargs)
