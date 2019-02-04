#!/usr/bin/env python3


import logging

from jsonfield import JSONField
from django.db import models
from django.db.models import F

from filebrowser.models import Directory


logger = logging.getLogger(__name__)



class PL(models.Model):
    json = JSONField(default={})
    name = models.CharField(max_length=100, null=False)
    directory = models.ForeignKey(Directory, on_delete=models.SET_NULL, null=True)
    rel_path = models.CharField(max_length=360, null=False)
    
    
    def __str__(self):  # pragma: no cover
        return str(self.id) + " : " + str(self.name)



class PLTP(models.Model):
    sha1 = models.CharField(primary_key=True, max_length=160)
    json = JSONField(default={})
    name = models.CharField(max_length=50)
    pl = models.ManyToManyField(PL, through='Index')
    directory = models.ForeignKey(Directory, on_delete=models.SET_NULL, null=True)
    rel_path = models.CharField(max_length=360, null=True)
    
    
    def __str__(self):  # pragma: no cover
        return str(self.sha1) + " : " + str(self.name)
    
    
    def delete(self, *args, **kwargs):
        """ Overriding delete() to also delete his PL if they're not in
        relation with any other PLTP """
        pl_list = self.pl.all()
        logger.info("PLTP '" + self.sha1 + " (" + self.name + ")' has been deleted")
        for pl in pl_list:
            if len(pl.pltp_set.all()) <= 1:
                logger.info("PL '" + str(pl.id) + " (" + pl.name
                            + ")' has been deleted since it wasn't link to any PLTPs")
                pl.delete()
        super(PLTP, self).delete(*args, **kwargs)
    
    
    def indexed_pl(self):
        return [i.pl for i in sorted(self.index_set.all(), key=lambda i: i.index)]



class Index(models.Model):
    pltp = models.ForeignKey(PLTP, on_delete=models.CASCADE)
    pl = models.ForeignKey(PL, on_delete=models.CASCADE)
    index = models.PositiveSmallIntegerField(blank=True)
    
    class Meta:
        unique_together = ('pltp', 'index')
        ordering = ['index']
        verbose_name_plural = "Indexes"
    
    def __str__(self):  # pragma: no cover
        return "PLTP - (" + str(self.pltp) + ") | PL - (" + str(self.pl) + ") | Pos - " + str(
                self.index)
    
    
    def save(self, *args, **kwargs):
        if self.pk is None:
            self.index = len(Index.objects.filter(pltp=self.pltp))
        super(Index, self).save(*args, **kwargs)
    
    
    def move_end(self):
        index = self.index
        self.index = len(Index.objects.filter(pltp=self.pltp))
        self.save()
        for i in Index.objects.filter(pltp=self.pltp, index__gt=index):
            i.index = F('index') - 1
            i.save()
    
    
    def move_start(self):
        index = self.index
        self.index = 32766  # Max for PositiveSmallInteger
        self.save()
        for i in Index.objects.filter(pltp=self.pltp, index__lt=index).reverse():
            i.index = F('index') + 1
            i.save()
        self.index = 0
        self.save()
