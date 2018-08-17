#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  filebrowser.py
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


import os, copy

from os.path import abspath, join, basename

from django.conf import settings

from filebrowser.filebrowser_option import ENTRY_OPTIONS, DIRECTORY_OPTIONS, READ, WRITE
from filebrowser.models import Directory



class Filebrowser():
    """Filebrowser allowing to browse through a file tree.
    
    Attributes:
        root (str): Absolute path to the root of the filebrowser.
        relative (str): relative path from self.root of the current position of the filebrowser
        directory (Directory): The current directory, None if current position is self.root
        entry_options (FilebrowserOption): List of every options applicable to entries
        directory_options (FilebrowserOption): List of every options applicable to self.directory
    """
    
    def __init__(self, request, path='home', root=None):
        real = path.split('/')
        if real[0] == "home":
            real[0] = str(request.user.id)
        
        self.root = settings.FILEBROWSER_ROOT if not root else root
        self.relative = path
        self._real_relative = join(*real)
        self.home = path.split('/')[0]
        self.real_home = real[0]
        self.entry_options = copy.deepcopy(ENTRY_OPTIONS)
        self.directory_options = copy.deepcopy(DIRECTORY_OPTIONS)
        self.directory = Directory.objects.get(name=self._real_relative.split('/')[0])
        self.entries, self.length_max = self.list()
    
    
    def _filter_category_options(self, category, request):
        
        for group_key, group in category.groups.items():
            filtered_options = {}
            
            for option_key, option in group.options.items():
                if option.right == READ and self.directory.can_read(request.user):
                    filtered_options[option_key] = option
                elif option.right == WRITE and self.directory.can_write(request.user):
                    filtered_options[option_key] = option
            
            category.groups[group_key].options = filtered_options
        
        cleaned = {}
        for group_key, group in  category.groups.items(): # removing empty group
            if group.options:
                cleaned[group_key] = group
        category.groups = cleaned
        
        return category
    
    
    def load_options(self, request):
        self.entry_options = self._filter_category_options(self.entry_options, request)
        self.directory_options = self._filter_category_options(self.directory_options, request)
    
    
    def full_path(self):
        """Return the absolute path of the current position of the filebrowser."""
        return abspath(os.path.join(self.root, self._real_relative))
    
    
    def breadcrumb(self):
        """Return the breadcrumb corresponding to the current position o the filebrowser"""
        path = self.home
        bc = [{'name': path, 'link': path}]
        for elem in [i for i in self._real_relative.split('/') if i][1:]:
            bc.append({'name': elem, 'link': join(path, elem)})
            path = join(path, elem)
        
        return bc
    
    
    def list_root(self):
        """ Return the list of every entry of FILEBROWSER_ROOT."""
        return ['home'] + [r for r in os.listdir(settings.FILEBROWSER_ROOT) if not r.isdigit()]
    
    
    def list(self):
        """Return a list of tuple (name, path) corresponding to every entry at the current possition of the filebrowser."""
        entries = []
        for rootdir, dirs, files in os.walk(self.full_path()):
            entries += sorted(
                [{'name': elem, 'path': rootdir+'/'+elem} for elem in dirs ],
                key=lambda k: k['name']
            )
            entries += sorted(
                [{'name': elem, 'path': rootdir+'/'+elem} for elem in files],
                key=lambda k: k['name']
            )
            break
        
        return entries, (0 if not entries 
                        else len(max(entries, key=lambda i:len(i['name']))['name']) + 12)  # 12 for the icon and padding
    
    
    
    


