#!/usr/bin/env python3
import os, shutil, subprocess, git, hashlib

from os.path import basename

from serverpl.settings import DIRREPO

from jsonfield import JSONField

from django.db import models

from pathlib import Path





class Repository(models.Model):
    name = models.CharField(primary_key=True, max_length=50, null = False)
    owner = models.CharField(max_length=100, null = False)
    url = models.CharField(max_length=200, null=True)
    version = models.CharField(max_length=200, null=True)
    
    def delete(self, *args, **kwargs):
        """ Overriding delete() to also delete the local repository """
        if os.path.isdir(DIRREPO+'/'+self.name):
            shutil.rmtree(DIRREPO+'/'+self.name)
        super(Repository, self).delete(*args, **kwargs)
    
    def __str__(self):
        return self.name

    def getRootDir(self):
        if not self.is_repo_downloaded():
            raise Exception("Repo not downloaded")
        return str(Path(DIRREPO+'/'+self.name))
        
    @staticmethod
    def add_missing_repository_in_bd():
        """ Check if every directory in 'repo/' have a corresponding entry in the db """
        for (path, subdirs, files) in os.walk(DIRREPO):    
            for filename in subdirs:
                try:
                    Repository.objects.get(name=filename)
                except Repository.DoesNotExist:
                    repo = Repository(name=filename)
                    repo.save()
                    if (os.path.isdir(path+'/'+filename) or os.path.isfile(path+'/'+filename)):
                        current = os.getcwd()
                        os.chdir(path+'/'+filename)
                        try:
                            repo.url = subprocess.check_output(["git", "config", "--get", "remote.origin.url"])
                            repo.version = git.Repo(".").heads.master.commit.name_rev[:40]
                            repo.save()
                        except:
                            pass
                        os.chdir(current)
            break
    
    def is_repo_downloaded(self):
        return os.path.isdir(DIRREPO+'/'+self.name)
    
    @staticmethod
    def getRepoByName(fname):
        if type(fname) == Repository:
            return fname
        if type(fname) != str:
            raise TypeError("Given object is neither a Repository or a String")
        if '/' in fname:
            fname = basename(fname)
        return Repository.objects.get(name=fname)



class PL(models.Model):
    json = JSONField()
    name = models.CharField(max_length=100, null = False)
    sha1 = models.CharField(primary_key=True, max_length=160, null = False)
    repository = models.ForeignKey(Repository, on_delete=models.SET_NULL, null=True)
    rel_path = models.CharField(max_length=360, null = False)
    zipvalue = models.BinaryField(null = True)
    
    def __str__(self):
        return self.name



class PLTP(models.Model):
    json = JSONField()
    name = models.CharField(max_length=50, null = False)
    pl = models.ManyToManyField(PL)
    sha1 = models.CharField(primary_key=True, max_length=160, null = False)
    repository = models.ForeignKey(Repository, on_delete=models.SET_NULL, null=True)
    rel_path = models.CharField(max_length=360, null = False)
    
    def __str__(self):
        return self.name
        
    def delete(self, *args, **kwargs):
        """ Overriding delete() to also delete his PL if they're not with any other PLTP """
        pl_list = self.pl.all()
        for pl in pl_list:
            if len(pl.pltp_set.all()) == 1:
                pl.delete()
        super(PLTP, self).delete(*args, **kwargs)


