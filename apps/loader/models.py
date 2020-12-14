#!/usr/bin/env python3


import logging

from django.db import models
from jsonfield import JSONField

from filebrowser.models import Directory


logger = logging.getLogger(__name__)



class PL(models.Model):
    json = JSONField(default={})
    name = models.CharField(max_length=100, null=False)
    directory = models.ForeignKey(Directory, on_delete=models.SET_NULL, null=True)
    rel_path = models.CharField(max_length=360, null=False)
    
    def __str__(self):  # pragma: no cover
        return str(self.id) + " : " + str(self.name)
    
    
    def duplicate(self):
        return PL.objects.create(json=self.json, name=self.name, directory=self.directory,
                                 rel_path=self.rel_path)
