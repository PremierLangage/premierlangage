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

from urllib.parse import urlparse

from django.db import models
from django.contrib.auth.models import User
from serverpl.settings import FILEBROWSER_ROOT



class Directory(models.Model):
    name = models.CharField(max_length=1024, unique=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    write_auth = models.ManyToManyField(User, blank=True, related_name="dir_write_auth")
    read_auth = models.ManyToManyField(User, blank=True, related_name="dir_read_auth")
    remote = models.CharField(max_length=1024, blank=True, default='')
    root = models.CharField(max_length=1024, blank=True)
    
    
    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        self.root = os.path.join(FILEBROWSER_ROOT, self.name)
        super(Directory, self).save(*args, **kwargs)
    
    
    def is_repository(self):
        """Return True if this Directory is associated with a repository, else False."""
        return True if self.remote else False
    
    
    def add_write_auth(self, user):
        """Add user to the writing authorization list."""
        if not user in self.write_auth:
            self.write_auth.add(user)
    
    
    def add_read_auth(self, user):
        """Add user to the reading authorization list."""
        if not user in self.read_auth:
            self.read_auth.add(user)
    
    
    def remove_write_auth(self, user):
        """Remove user to the writing authorization list."""
        if user in self.write_auth:
            self.write_auth.remove(user)
    
    
    def remove_read_auth(self, user):
        """Remove user to the reading authorization list."""
        if user in self.read_auth:
            self.read_auth.remove(user)
    
    
    def add_and_commit(self, commit, path=None):
        """Add and commit the file pointed by path, the whole repository if path is None.
        
        Return:
            (True, git_stdout) if everything worked
            (False, git_sterr+git_stdout) if a problem occurs
        """
        if not self.is_repository():
            return False, "This directory is not a repository"
        
        cwd = os.getcwd()
        
        try:
            os.chdir(self.root)
            if path:
                p = subprocess.Popen('git add '+path, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
            else:
                p = subprocess.Popen('git add .', stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
            out, err = p.communicate()
            
            out = out.decode("utf-8").replace('\n','<br>')
            err = err.decode("utf-8").replace('\n','<br>')
            if p.returncode:
                os.system("git reset HEAD~")
                return False, out + '<br>' + err
                
            p = subprocess.Popen('git commit -m "'+commit+'"', stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
            out, err = p.communicate()
            
            out = out.decode("utf-8").replace('\n','<br>')
            err = err.decode("utf-8").replace('\n','<br>')
            if p.returncode:
                os.system("git reset HEAD~")
                return False, out + '<br>' + err
        
        except Exception as e:
            return False, str(type(e)).replace('<', '[').replace('>', ']') + " : " + str(e)
        
        finally:
            os.chdir(cwd)
        
        return True, out
    
    
    def checkout(self, path=None):
        """Checkout the file pointed by path, the whole repository if path is None.
        
        Return:
            (True, git_stdout) if everything worked
            (False, git_sterr+git_stdout) if a problem occurs
        """
        if not self.is_repository():
            return False, "This directory is not a repository"
        
        cwd = os.getcwd()
        
        try:
            os.chdir(self.root)
            if path:
                p = subprocess.Popen('git checkout '+path, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
            else:
                p = subprocess.Popen('git checkout .', stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
            out, err = p.communicate()
            
            out = out.decode("utf-8").replace('\n','<br>')
            err = err.decode("utf-8").replace('\n','<br>')
            if p.returncode:
                os.system("git reset HEAD~")
                if "terminal prompts disabled" in err: # Repo is private and needs credentials
                    return False, "Repository is private, please provide username and password."
                return False, out + '<br>' + err
        
        except Exception as e:
            return False, str(type(e)).replace('<', '[').replace('>', ']') + " : " + str(e)
        
        finally:
            os.chdir(cwd)
        
        return True, out
    
    
    def pull(self, username=None, password=None):
        """Perform a git pull over the directory using username and password if given.
        
        Return:
            (True, git_stdout) if everything worked
            (False, git_sterr+git_stdout) if a problem occurs
        """
        if not self.is_repository():
            return False, "This directory is not a repository"
        
        cwd = os.getcwd()
        url = urlparse(self.remote)
        
        try:
            os.chdir(self.root)
            if username:
                p = subprocess.Popen('git pull '+url.scheme+'://'+username+":"+password+"@"+url.netloc+url.path, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
            else:
                p = subprocess.Popen('GIT_TERMINAL_PROMPT=0 git pull', stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
            out, err = p.communicate()
            
            out = out.decode("utf-8").replace('\n','<br>')
            err = err.decode("utf-8").replace('\n','<br>')
            if password:
                out = out.replace(password,'••••••••••')
                err = err.replace(password,'••••••••••')
            if p.returncode:
                if "terminal prompts disabled" in err: # Repo is private and needs credentials
                    return False, "Repository is private, please provide username and password."
                return False, out + '<br>' + err
        
        except Exception as e:
            return False, str(type(e)).replace('<', '[').replace('>', ']') + " : " + str(e)
        
        finally:
            os.chdir(cwd)
        
        return True, out
    
    
    def push(self, username=None, password=None):
        """Perform a git push over the directory using username and password if given.
        
        Return:
            (True, git_stdout) if everything worked
            (False, git_sterr+git_stdout) if a problem occurs
        """
        if not self.is_repository():
            return False, "This directory is not a repository"
        
        cwd = os.getcwd()
        url = urlparse(self.remote)
        
        try:
            os.chdir(self.root)
            if username:
                p = subprocess.Popen('git push '+url.scheme+'://'+username+":"+password+"@"+url.netloc+url.path, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
            else:
                p = subprocess.Popen('GIT_TERMINAL_PROMPT=0 git push', stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
            out, err = p.communicate()
            
            out = out.decode("utf-8").replace('\n','<br>')
            err = err.decode("utf-8").replace('\n','<br>')
            if password:
                out = out.replace(password,'••••••••••')
                err = err.replace(password,'••••••••••')
            if p.returncode:
                if "terminal prompts disabled" in err: # Repo is private and needs credentials
                    return False, "Repository is private, please provide username and password."
                return False, out + '<br>' + err
        
        except Exception as e:
            return False, str(type(e)).replace('<', '[').replace('>', ']') + " : " + str(e)
        
        finally:
            os.chdir(cwd)
        
        return True, out
    
    
    def status(self):
        """Perform a git status over the directory.
        
        Return:
            (True, git_stdout) if everything worked
            (False, git_sterr+git_stdout) if a problem occurs
        """
        if not self.is_repository():
            return False, "This directory is not a repository"
        
        cwd = os.getcwd()
        
        try:
            os.chdir(self.root)
            p = subprocess.Popen('git status', stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
            out, err = p.communicate()
            
            out = out.decode("utf-8").replace('\n','<br>')
            err = err.decode("utf-8").replace('\n','<br>')
            if p.returncode:
                return False, out + '<br>' + err
        
        except Exception as e:
            return False, str(type(e)).replace('<', '[').replace('>', ']') + " : " + str(e)
        
        finally:
            os.chdir(cwd)
        
        return True, out
    
    
    def clone(self, username=None, password=None):
        """Perform a git clone over the directory using username and password if given.
        
        Return:
            (True, git_stdout) if everything worked
            (False, git_sterr+git_stdout) if a problem occurs
        """
        if not self.is_repository():
            return False, "This directory is not a repository"
        
        cwd = os.getcwd()
        url = urlparse(self.remote)
        
        try:
            os.chdir(FILEBROWSER_ROOT)
            if username:
                p = subprocess.Popen('git clone '+url.scheme+'://'+username+":"+password+"@"+url.netloc+url.path+" "+self.name, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
            else:
                p = subprocess.Popen('GIT_TERMINAL_PROMPT=0 git clone '+self.remote+" "+self.name, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
            out, err = p.communicate()
            
            out = out.decode("utf-8").replace('\n','<br>')
            err = err.decode("utf-8").replace('\n','<br>')
            if password:
                out = out.replace(password,'••••••••••')
                err = err.replace(password,'••••••••••')
            if p.returncode:
                if "terminal prompts disabled" in err: # Repo is private and needs credentials
                    return False, "Repository is private, please provide username and password."
                
                return False, out + '<br>' + err
        
        except Exception as e:
            return False, str(type(e)).replace('<', '[').replace('>', ']') + " : " + str(e)
        
        finally:
            os.chdir(cwd)
        
        return True, out
