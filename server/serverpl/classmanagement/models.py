#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  models.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#


from django.db import models
from django.contrib.auth.models import User

from playexo.models import Activity


class Course(models.Model):
    id = models.CharField(max_length=30, primary_key=True, null=False)
    teacher = models.ManyToManyField(User, related_name="teacher")
    name = models.CharField(max_length=200, null=False)
    label = models.CharField(max_length=20, null=False)
    student = models.ManyToManyField(User, blank=True)
    activity = models.ManyToManyField(Activity, blank=True)
    
    
    def is_member(self, user):
        """Return True if the user is a member of the course (student or teacher), False if not."""
        return user in self.teacher.all() or user in self.student.all()
    
    
    def is_teacher(self, user):
         """Return True if the user is a teacher of the course."""
        return user in self.teacher.all() or user.profile.is_admin()
    
    
    def __str__(self):
        return str(self.id) + ": [" + self.label + "] " + self.name
