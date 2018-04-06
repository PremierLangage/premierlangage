#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  filebrowser_option.py
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

from django.contrib import messages
from django.shortcuts import redirect, reverse

from filebrowser import views

from filebrowser.form import *
from filebrowser.options import *
from filebrowser.filter import *
from filebrowser.models import Directory


GREY = "secondary"
DARK_BLUE = "primary"
LIGHT_BLUE = "info"
GREEN = "success"
RED = "danger"
YELLOW = "warning"
WHITE = "light"
BLACK = "dark"

OUTLINE = "outline-"

POST = 'POST'
GET = 'GET'

READ = "read"
WRITE = "write"
OWNER = "owner"

SMALL = "small"
BIG = "big"

class FilebrowserOption():
    
    def __init__(self, fa_icon, name, func, form=None, filter=None,
                 require_confirmation=False, color=GREY, outline=True,
                 method=POST, balise=None, authorization=WRITE, size=SMALL):
        self.fa_icon = fa_icon
        self.text = name
        self.form = form
        self.require_confirmation = require_confirmation
        self._option = func
        self.filter = filter;
        self.color = color;
        self.outline = OUTLINE if outline else ""
        self.method = method
        self.type = 'button' if method == POST else 'a'
        self.balise = balise
        self.authorization = authorization
        self.size = size
        
        if form and method == GET:
            raise ValueError("An option can't have a form while using GET method")
        if require_confirmation and method == GET:
            raise ValueError("require_confirmation can't be True with a GET method")
    
    
    def process_option(self, request, filebrowser, target):
        owner = Directory.objects.get(name=target).owner if not filebrowser.directory else filebrowser.directory.owner
        write = Directory.objects.get(name=target).write_auth.all() if not filebrowser.directory else filebrowser.directory.write_auth.all()
        read = Directory.objects.get(name=target).read_auth.all() if not filebrowser.directory else filebrowser.directory.read_auth.all()
        
        if owner == request.user:
            return self._option(request, filebrowser, target)
        
        if (self.authorization == OWNER and owner != request.user) or \
           (self.authorization == WRITE and request.user not in write) or \
           (self.authorization == READ and (request.user not in write and request.user not in read)):
            messages.warning(request, "You dont have the rights to use '"+self.text+"' option.")
            return redirect(reverse(views.index))
        
        return self._option(request, filebrowser, target)





ENTRY_OPTIONS = [
    FilebrowserOption("fas fa-cog",        "Tester",    test_pl_option,    color=DARK_BLUE, authorization=READ,  filter=is_pl,   size=BIG, outline=False, method=GET),
    FilebrowserOption("fas fa-play",       "Charger",   load_pltp_option,  color=DARK_BLUE, authorization=READ,  filter=is_pltp, size=BIG, outline=False, method=GET),
    FilebrowserOption("fas fa-pencil-alt",  "Rename",   rename_option,     form=RenameForm, authorization=OWNER, filter=is_directory_object),
    FilebrowserOption("fas fa-pencil-alt",  "Rename",   rename_option,     form=RenameForm, authorization=WRITE, filter=is_not_directory_object),
    FilebrowserOption("fas fa-unlock-alt",  "Edit access rights",          rights_option,   method=GET, filter=is_directory_object, authorization=OWNER),
    FilebrowserOption("fas fa-arrow-right", "Move",     move_option,       form=MoveForm,   filter=is_not_directory_object),
    FilebrowserOption("fas fa-copy",        "Copy",     copy_option,       form=CopyForm,   filter=is_not_directory_object),
    FilebrowserOption("fas fa-share-square","Extract",  extract_option,    filter=is_archive, method=GET),
    FilebrowserOption("fas fa-download",    "Download", download_option,   method=GET,      authorization=READ),
    FilebrowserOption("fas fa-edit",        "Edit",     edit_option,       filter=is_text,  method=GET),
    FilebrowserOption("fas fa-eye",         "Display",  display_option,    filter=is_text,  method=GET, balise=['target=_blank'], authorization=READ),
    FilebrowserOption("fas fa-plus",        "Add & Commit",  add_commit_option, form=AddCommitForm, color=GREEN, filter=[is_remote, is_not_directory_object]),
    FilebrowserOption("fas fa-eraser",      "Checkout", checkout_option,   color=YELLOW,    filter=[is_remote,   is_not_directory_object], require_confirmation=True),
    FilebrowserOption("fas fa-times",       "Delete",   delete_option,     require_confirmation=True, color=RED, authorization=OWNER, filter=is_directory_object),
    FilebrowserOption("fas fa-times",       "Delete",   delete_option,     require_confirmation=True, color=RED, authorization=WRITE, filter=is_not_directory_object),
]


DIRECTORY_OPTIONS = [
    FilebrowserOption("fas fa-pencil-alt",  "Rename",        rename_option,   form=RenameForm, authorization=OWNER),
    FilebrowserOption("fas fa-unlock-alt",  "Edit access rights", rights_option, method=GET, authorization=OWNER),
    FilebrowserOption("fas fa-folder",      "New directory", mkdir_option,    form=RenameForm),
    FilebrowserOption("fas fa-upload",      "Upload File  ", upload_option,    form=UploadForm),
    FilebrowserOption("fas fa-download",    "Download",      download_option, method=GET, authorization=READ),
    FilebrowserOption("fas fa-plus",        "Add & Commit",  add_commit_option, form=AddCommitForm, color=GREEN, filter=is_remote),
    FilebrowserOption("fas fa-info-circle", "Status",        status_option, color=LIGHT_BLUE, filter=is_remote, method=GET),
    FilebrowserOption("fas fa-eraser",      "Checkout",      checkout_option, color=YELLOW, filter=is_remote, require_confirmation=True),
    FilebrowserOption("fas fa-cloud-upload-alt",   "Push",   push_option, form=LoginForm, color=YELLOW, filter=is_remote),
    FilebrowserOption("fas fa-cloud-download-alt", "Pull",   pull_option, form=LoginForm, color=YELLOW, filter=is_remote),
]
