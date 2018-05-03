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
    teacher = models.ManyToManyField(User, blank=True, related_name="teacher")
    name = models.CharField(max_length=200, null=False)
    label = models.CharField(max_length=20, null=False)
    student = models.ManyToManyField(User, blank=True)
    activity = models.ManyToManyField(Activity, blank=True)
    
    
    def is_member(self, user):
        return user in self.teacher.all() or user in self.student.all()
    
    
    def __str__(self):
        return str(self.id)+": ["+self.label+"] "+self.name
