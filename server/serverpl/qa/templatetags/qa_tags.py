#!/usr/bin/env python
# -*- coding: utf-8 -*-
from urllib.parse import quote

from django import template
from django.core.exceptions import ObjectDoesNotExist

from qa.models import QAAnswerVote, QAQuestionVote


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
            or (rights.EDIT_QUESTION >= 0 and user.profile.rep >= rights.EDIT_QUESTION))


@register.filter
def can_edit_answer(user, answer):
    if user.is_anonymous:
        return False
    return (answer.user == user 
            or user.profile.is_admin
            or (rights.EDIT_ANSWER >= 0 and user.profile.rep >= rights.EDIT_ANSWER))


@register.filter
def can_edit_comment(user, comment):
    if user.is_anonymous:
        return False
    return (comment.user == user 
            or user.profile.is_admin
            or (rights.EDIT_COMMENT >= 0 and user.profile.rep >= rights.EDIT_COMMENT))


@register.filter
def can_post_question(user):
    if user.is_anonymous:
        return False
    return user.profile.is_admin or (rights.POST_QUESTION >= 0 and user.profile.rep >= rights.POST_QUESTION)


@register.filter
def can_post_answer(user):
    if user.is_anonymous:
        return False
    return user.profile.is_admin or (rights.POST_ANSWER >= 0 and user.profile.rep >= rights.POST_ANSWER)


@register.filter
def can_post_comment(user):
    if user.is_anonymous:
        return False
    return user.profile.is_admin or (rights.POST_COMMENT >= 0 and user.profile.rep >= rights.POST_COMMENT)


@register.filter
def can_delete_question(user, question):
    if user.is_anonymous:
        return False
    return (question.user == user 
            or user.profile.is_admin
            or (rights.DELETE_QUESTION >= 0 and user.profile.rep >= rights.DELETE_QUESTION))


@register.filter
def can_delete_answer(user, answer):
    if user.is_anonymous:
        return False
    return (answer.user == user 
            or user.profile.is_admin
            or (rights.DELETE_ANSWER >= 0 and user.profile.rep >= rights.DELETE_ANSWER))


@register.filter
def can_delete_comment(user, comment):
    if user.is_anonymous:
        return False
    return (comment.user == user 
            or user.profile.is_admin
            or (rights.DELETE_COMMENT >= 0 and user.profile.rep >= rights.DELETE_COMMENT))
