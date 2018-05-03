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


import os

from serverpl.settings import FILEBROWSER_ROOT

from filebrowser.filebrowser_option import ENTRY_OPTIONS, DIRECTORY_OPTIONS
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
    
    def __init__(self, root=FILEBROWSER_ROOT, path='.'):
        self.root = root
        self.relative = path if path else '.'
        self.entry_options = ENTRY_OPTIONS
        self.directory_options = DIRECTORY_OPTIONS
        
        try:
            dir_name = path.split('/')
            dir_name = dir_name[0] if dir_name[0] != '.' else None if len(dir_name) == 1 else dir_name[1]
            self.directory = None if path == '.' else Directory.objects.get(name=dir_name)
        except:
            self.directory = None
            self.relative = '.'
    
    
    def full_path(self):
        """Return the absolute path of the current position of the filebrowser."""
        return os.path.join(self.root, self.relative)
    
    
    def breadcrumb(self):
        """Return the breadcrumb corresponding to the current position o the filebrowser"""
        bc = list()
        path = ""
        for elem in self.relative.split('/'):
            bc.append({'name': elem, 'link': path+elem})
            path += elem + '/'
        
        return bc
    
    
    def list(self):
        """Return a list of tuple (name, path) corresponding to every entry at the current possition of the filebrowser."""
        if not self.directory:
            return sorted(Directory.objects.all(), key=lambda k: k.name)
        
        entries = []
        for rootdir, dirs, files in os.walk(self.full_path()):
            entries += sorted([{'name': elem, 'path': rootdir+'/'+elem} for elem in dirs ], key=lambda k: k['name'])
            entries += sorted([{'name': elem, 'path': rootdir+'/'+elem} for elem in files], key=lambda k: k['name'])
            break
        
        return entries
    
    
    
    


