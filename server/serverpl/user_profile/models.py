#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  models.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#

from enumfields import EnumIntegerField

from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

from user_profile.enums import Role, EditorTheme, ColorBlindness

from playexo.models import Activity



class Profile(models.Model):
    """Extends User to save more informations about an user."""
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    student_id = models.PositiveIntegerField(unique=True, null=True, blank=True)
    consumer_id = models.PositiveIntegerField(unique=True, null=True, blank=True)
    editor_theme = EnumIntegerField(EditorTheme, default=EditorTheme.MONOKAI)
    role = EnumIntegerField(Role, default=Role.LEARNER)
    color_blindness = EnumIntegerField(ColorBlindness, default=ColorBlindness.NONE)
    activity = models.ManyToManyField(Activity, blank=True)
    
    
    def __str__(self):
        return self.user.username + "'s Profile"
    
    def is_admin(self):
        return (self.role == Role.ADMINISTRATOR or self.user.is_staff or self.user.is_superuser)
    
    def can_load(self):
        return self.role <= Role.INSTRUCTOR or self.is_admin()
    
     
    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            profile = Profile.objects.create(user=instance)
            if instance.is_staff or instance.is_superuser:
                profile.role = Role.ADMINISTRATOR
    
    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.profile.save()
