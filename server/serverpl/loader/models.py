#!/usr/bin/env python3



import logging

from jsonfield import JSONField

from django.db import models

from filebrowser.models import Directory

logger = logging.getLogger(__name__)


class PL(models.Model):
    json = JSONField()
    name = models.CharField(max_length=100, null=False)
    directory = models.ForeignKey(Directory, on_delete=models.SET_NULL, null=True)
    rel_path = models.CharField(max_length=360, null=False)
    
    def __str__(self):
        return str(self.id) + " - " +self.name


class PLTP(models.Model):
    sha1 = models.CharField(primary_key=True, max_length=160)
    json = JSONField()
    name = models.CharField(max_length=50, null=False)
    pl = models.ManyToManyField(PL)
    directory = models.ForeignKey(Directory, on_delete=models.SET_NULL, null=True)
    rel_path = models.CharField(max_length=360, null=False)
    
    def __str__(self):
        return self.name
    
    def delete(self, *args, **kwargs):
        """ Overriding delete() to also delete his PL if they're not in relation with any other PLTP """
        pl_list = self.pl.all()
        logger.info("PLTP '"+self.sha1+" ("+self.name+")' has been deleted")
        for pl in pl_list:
            if len(pl.pltp_set.all()) <= 1:
                logger.info("PL '"+str(pl.id)+" ("+pl.name+")' has been deleted since it wasn't link to any PLTPs")
                pl.delete()
        super(PLTP, self).delete(*args, **kwargs)
