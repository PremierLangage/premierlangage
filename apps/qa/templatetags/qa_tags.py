#!/usr/bin/env python
# -*- coding: utf-8 -*-
from urllib.parse import quote

from django import template
from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist

from qa.models import QAAnswerVote, QAQuestionVote


RIGHTS = settings.QA_SETTINGS['right']

register = template.Library()



@register.filter
def urlencode_q(s):
    return quote(s).replace('%20', '+')



@register.filter
def voted_up_question(user, question):
    if user.is_anonymous:
        return False
    try:
        vote = QAQuestionVote.objects.get(user=user, question=question)
        return vote.value
    except ObjectDoesNotExist:
        return False



@register.filter
def voted_down_question(user, question):
    if user.is_anonymous:
        return False
    try:
        vote = QAQuestionVote.objects.get(user=user, question=question)
        return not vote.value
    except ObjectDoesNotExist:
        return False



@register.filter
def voted_up_answer(user, answer):
    if user.is_anonymous:
        return False
    try:
        vote = QAAnswerVote.objects.get(user=user, answer=answer)
        return vote.value
    except ObjectDoesNotExist:
        return False



@register.filter
def voted_down_answer(user, answer):
    if user.is_anonymous:
        return False
    try:
        vote = QAAnswerVote.objects.get(user=user, answer=answer)
        return not vote.value
    except ObjectDoesNotExist:
        return False



@register.filter
def can_edit_question(user, question):
    if user.is_anonymous:
        return False
    return (question.user == user
            or user.profile.is_admin
            or (0 <= RIGHTS['EDIT_QUESTION'] <= max(user.profile.rep, 0)))



@register.filter
def can_edit_answer(user, answer):
    if user.is_anonymous:
        return False
    return (answer.user == user
            or user.profile.is_admin
            or (0 <= RIGHTS['EDIT_ANSWER'] <= max(user.profile.rep, 0)))



@register.filter
def can_edit_comment(user, comment):
    if user.is_anonymous:
        return False
    return (comment.user == user
            or user.profile.is_admin or (0 <= RIGHTS['EDIT_COMMENT'] <= max(user.profile.rep, 0)))



@register.filter
def can_post_question(user):
    if user.is_anonymous:
        return False
    return user.profile.is_admin or (0 <= RIGHTS['POST_QUESTION'] <= max(user.profile.rep, 0))



@register.filter
def can_post_answer(user):
    if user.is_anonymous:
        return False
    return user.profile.is_admin or (0 <= RIGHTS['POST_ANSWER'] <= max(user.profile.rep, 0))



@register.filter
def can_post_comment(user):
    if user.is_anonymous:
        return False
    return user.profile.is_admin or (0 <= RIGHTS['POST_COMMENT'] <= max(user.profile.rep, 0))



@register.filter
def can_delete_question(user, question):
    if user.is_anonymous:
        return False
    return (question.user == user
            or user.profile.is_admin
            or (0 <= RIGHTS['DELETE_QUESTION'] <= max(user.profile.rep, 0)))



@register.filter
def can_delete_answer(user, answer):
    if user.is_anonymous:
        return False
    return (answer.user == user
            or user.profile.is_admin
            or (0 <= RIGHTS['DELETE_ANSWER'] <= max(user.profile.rep, 0)))



@register.filter
def can_delete_comment(user, comment):
    if user.is_anonymous:
        return False
    return (comment.user == user
            or user.profile.is_admin
            or (0 <= RIGHTS['DELETE_COMMENT'] <= max(user.profile.rep, 0)))
