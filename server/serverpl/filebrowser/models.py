#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  models.py
#  
#  Copyright 2018 Coumes Quentin
#  
#  This program is free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 2 of the License, or
#  (at your option) any later version.
#  
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#  
#  You should have received a copy of the GNU General Public License
#  along with this program; if not, write to the Free Software
#  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
#  MA 02110-1301, USA.
#  
#

import os, subprocess

from os.path import isdir, join

from urllib.parse import urlparse

from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save

from django.conf import settings



class Directory(models.Model):
    name = models.CharField(max_length=1024, unique=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    write_auth = models.ManyToManyField(User, blank=True, related_name="dir_write_auth")
    read_auth = models.ManyToManyField(User, blank=True, related_name="dir_read_auth")
    remote = models.CharField(max_length=1024, blank=True, default='')
    root = models.CharField(max_length=1024, blank=True)
    public = models.BooleanField(default=False, blank=True)
    
    def __str__(self):
        return self.name
    
    
    def save(self, *args, **kwargs):
        self.root = os.path.join(settings.FILEBROWSER_ROOT, self.name)
        super(Directory, self).save(*args, **kwargs)
    
    
    @receiver(post_save, sender=User)
    def add_user_read_public(sender, instance, created, **kwargs):
        if created:
            if not isdir(join(settings.FILEBROWSER_ROOT, str(instance.id))):
                os.mkdir(join(settings.FILEBROWSER_ROOT, str(instance.id)))
            Directory.objects.create(name=str(instance.id), owner=instance)
    
    
    def is_repository(self):
        """Return True if this Directory is associated with a repository, else False."""
        return True if self.remote else False
    
    
    def add_write_auth(self, user):
        """Add user to the writing authorization list."""
        if not user in self.write_auth.all():
            self.write_auth.add(user)
    
    
    def add_read_auth(self, user):
        """Add user to the reading authorization list."""
        if not user in self.read_auth.all():
            self.read_auth.add(user)
    
    
    def remove_write_auth(self, user):
        """Remove user to the writing authorization list."""
        if user in self.write_auth.all():
            self.write_auth.remove(user)
    
    
    def remove_read_auth(self, user):
        """Remove user to the reading authorization list."""
        if user in self.read_auth.all():
            self.read_auth.remove(user)
    
    
    def can_read(self, user):
        """Return True if user have read right on this directory, False if not."""
        return (self.owner == user
                or self.public
                or user.profile.is_admin()
                or user in self.read_auth.all() 
                or user in self.write_auth.all())
    
    
    def can_write(self, user):
        """Return True if user have write right on this directory, False if not."""
        return (self.owner == user 
                or user.profile.is_admin()
                or user in self.write_auth.all())
    
    
    def is_owner(self, user):
        """Return True if user is the owner of this directory, False if not."""
        return user == self.owner or user.profile.is_admin()
