#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  models.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

from datetime import datetime

from enumfields import EnumIntegerField

from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

from loader.models import PLTP, PL

from playexo.enums import State



class Activity(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=200, null=False)
    pltp = models.ForeignKey(PLTP, null=False, on_delete=models.CASCADE)
    open = models.BooleanField(null = False, default = True)
    
    def __str__(self):
        return str(self.id)+" "+self.name


class ActivityTest(models.Model):
    name = models.CharField(max_length=200, null=False)
    pltp = models.ForeignKey(PLTP, null=False,  on_delete=models.CASCADE)
    date = models.DateTimeField(null=False, default=timezone.now)
    
    
    @staticmethod
    def delete_outdated():
        now = datetime.utcnow()
        activities = ActivityTest.objects.get.all().sort_by("date")
        for activity in activities:
            if (datetime.utcnow() - activity.date) > timedelta(days=1):
                activity.delete()
            else:
                break
                
        
    def __str__(self):
        return self.name


class Answer(models.Model):
    STARTED = 'ST'
    FAILED = 'FA'
    SUCCEEDED = 'SU'
    NOT_STARTED = 'NS'
    STATE = (
        (STARTED, 'Commencé'),
        (FAILED, 'Echoué'),
        (SUCCEEDED, 'Réussi'),
    )
    
    value = models.TextField(max_length = 50000, null=False)
    user = models.ForeignKey(User, null=False, on_delete=models.CASCADE)
    pl = models.ForeignKey(PL, null=False, on_delete=models.CASCADE)
    seed = models.CharField(max_length=50, null=True)
    date = models.DateTimeField(null=False, default=timezone.now)
    grade = models.IntegerField(null=False)
    
    
    @staticmethod
    def last_seed(pl, user):
        answers = Answer.objects.filter(pl=pl, user=user).order_by("-date")
        return None if not answers else answers[0].seed
    
    
    @staticmethod
    def last_answer(pl, user):
        answers = Answer.objects.filter(pl=pl, user=user).order_by("-date")
        if not answers:
            return None
        for answer in [i.value for i in answers]:
            if answer:
                return answer
        return None
    
    
    @staticmethod
    def pl_state(pl, user):
        """Return the state of the answer with the highest grade."""
        answers = Answer.objects.filter(user=user, pl=pl).order_by("-grade")
        return State.by_grade(None if not answers else answers[0].grade)
    
    
    @staticmethod
    def pltp_state(pltp, user):
        """Return a list of tuples (pl_id, state) where state follow pl_state() rules."""
        return [(pl.id, Answer.pl_state(pl, user)) for pl in pltp.pl.all()] 
    
    
    @staticmethod
    def pltp_summary(pltp, user):
        """
            Give information about the PLTP's completion of this user as a dict of 5 lists:
            {
                'succeeded':   [ % succeeded, nbr succeeded],
                'part_succ':   [ % part_succ, nbr part_succ],
                'failed':      [ % failed, nbr failed],
                'started:      [ % started, nbr started],
                'not_started': [ % not started, nbr not started],
            }
        """
        
        state = {
            State.SUCCEEDED:   [0.0, 0],
            State.PART_SUCC:   [0.0, 0],
            State.FAILED:      [0.0, 0],
            State.STARTED:     [0.0, 0],
            State.NOT_STARTED: [0.0, 0],
        }
        
        for pl in pltp.pl.all():
            state[
                State.STARTED if Answer.pl_state(pl, user) in [State.TEACHER_EXC, State.SANDBOX_EXC] else Answer.pl_state(pl, user)
                ][1] += 1
            
        nb_pl = sum([state[k][1] for k in state]) 
        nb_pl = 1 if not nb_pl else nb_pl
        
        for k, v in state.items():
            state[k] = [str(state[k][1]*100/nb_pl), str(state[k][1])]
        
        return state
    
    
    @staticmethod
    def course_state(course):
        """ 
            Return every pltp state of every user of this course as a list of dicts:
            {
                'user_id': id,
                'pltp_sha1' sha1,
                'pl': list(pl_id, state)
            }
            where 'state' follow pl_state() rules.
        """
        
        lst = list()
        for user in course.user:
            dct = dict()
            dct['user_id'] = user.id
            for activity in course:
                dct['pltp_sha1'] = activity.pltp.sha1
                dct['pl'] = Answer.pltp_state(activity.pltp, user)
            lst.append(dct)
        
        return lst
    
    
    @staticmethod
    def user_course_summary(course, user):
        """
            Give information about the completion of every PL of this user in course as a dict of 5 tuples:
            {
                'succeeded':   [ % succeeded, nbr succeeded],
                'part_succ':   [ % part_succ, nbr part_succ],
                'failed':      [ % failed, nbr failed],
                'started:      [ % started, nbr started],
                'not_started': [ % not started, nbr not started],
            }
        """
    
        state = {
            State.SUCCEEDED:   [0.0, 0],
            State.PART_SUCC:   [0.0, 0],
            State.FAILED:      [0.0, 0],
            State.STARTED:     [0.0, 0],
            State.NOT_STARTED: [0.0, 0],
        }
        
        for activity in course.activity.all():
            summary = Answer.pltp_summary(activity.pltp, user)
            for k in summary:
                state[k][1] += int(summary[k][1])
        
        nb_pl = sum([state[k][1] for k in state]) 
        nb_pl = 1 if not nb_pl else nb_pl
        
        for k, v in state.items():
            state[k] = [str(state[k][1]*100/nb_pl), str(state[k][1])]
        
        return state
