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

from collections import OrderedDict

from django.contrib import messages
from django.shortcuts import redirect, reverse

from filebrowser import views

from filebrowser.form import *
from filebrowser.options import *
from filebrowser.filter import *
from filebrowser.models import Directory


# Bootstrap button classes
    # Color
GREY = "secondary"
DARK_BLUE = "primary"
LIGHT_BLUE = "info"
GREEN = "success"
RED = "danger"
YELLOW = "warning"
WHITE = "light"
BLACK = "dark"

    # Outline
OUTLINE = "outline-"

    # Size
SMALL = "small"
BIG = "big" 


# Methods
POST = 'POST'
GET = 'GET'

# Rights
READ = "read"
WRITE = "write"
OWNER = "owner"



class FilebrowserOption():
    """ Class representing an option in the filebrowser.
    
    Mandatory Attributes:
        fa_icon (str): Font Awesome 5 class of the icon of the button
        text (str): Texte which will be displayed on big button or when hovering small button
        option (function): Function which will be called with request, filebrowser
                           and target as argument when the user use the option.
                           (see option.py for more informations)
    Optionnal Attributes:
        method (str): Method used by the option to send the request ('POST' or 'GET', default 'POST')
        form (django.forms): Form which will be used by the option (method must be PÖST, default None)
        require_confirmation (bool): Whether the option ask for confirmation or not
                                     (method should be POST, default False)
        filter (function/function list): function of list of function to filter to which entry
                                         this option is applied (default None, see filter.py for
                                         more informations)
        authorization (str): Which level of right is needed for the option to be displayed
                             (READ, WRITE or OWNER, default WRITE)
        color (str): boostrap class for the color of the button, see above constant for choices.
        size (size): boostrap class for the size of the button (BIG or SMALL, default SMALL). Big buttons
                     are displayed first together then small buttons next.
        outline (bool): Whether outline bootstrap class is used or not (default True)
        balise (str): Any extra balise which should be add inside the <button [balise]> element.
    """
    
    def __init__(self, fa_icon, name, option, form=None, filter=None,
                 require_confirmation=False, color=GREY, outline=True,
                 method=POST, balise=None, authorization=WRITE, size=SMALL):
        self.fa_icon = fa_icon
        self.text = name
        self.form = form
        self.require_confirmation = require_confirmation
        self.option = option
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
        """Check if the option can be used according to the current user and call self.option if yes."""
        owner = Directory.objects.get(name=target).owner if not filebrowser.directory else filebrowser.directory.owner
        write = Directory.objects.get(name=target).write_auth.all() if not filebrowser.directory else filebrowser.directory.write_auth.all()
        read = Directory.objects.get(name=target).read_auth.all() if not filebrowser.directory else filebrowser.directory.read_auth.all()
        
        if owner == request.user:
            return self.option(request, filebrowser, target)
        
        if (self.authorization == OWNER and owner != request.user) or \
           (self.authorization == WRITE and request.user not in write) or \
           (self.authorization == READ and (request.user not in write and request.user not in read)):
            messages.warning(request, "You dont have the rights to use '"+self.text+"' option.")
            return redirect(reverse(views.index))
        
        return self.option(request, filebrowser, target)




# Filebrowser entries options.
ENTRY_OPTIONS = OrderedDict()
ENTRY_OPTIONS['edit_pl'] = FilebrowserOption("fas fa-cog", "Edit", edit_pl_option, color=DARK_BLUE, authorization=WRITE, filter=is_pl, size=BIG, outline=False, method=GET)
ENTRY_OPTIONS['test'] = FilebrowserOption("fas fa-check", "Test", test_pl_option, color=DARK_BLUE, authorization=READ, filter=is_pl, size=BIG, method=GET)
ENTRY_OPTIONS['load'] = FilebrowserOption("fas fa-play", "Load", load_pltp_option, color=DARK_BLUE, authorization=READ, filter=is_pltp, size=BIG, outline=False, method=GET)
ENTRY_OPTIONS['dirrename'] = FilebrowserOption("fas fa-pencil-alt", "Rename", rename_option, form=RenameForm, authorization=OWNER, filter=is_directory_object)
ENTRY_OPTIONS['rename'] = FilebrowserOption("fas fa-pencil-alt", "Rename", rename_option, form=RenameForm, authorization=WRITE, filter=is_not_directory_object)
ENTRY_OPTIONS['rights'] = FilebrowserOption("fas fa-unlock-alt", "Edit access rights", rights_option, method=GET, filter=is_directory_object, authorization=OWNER)
ENTRY_OPTIONS['move'] = FilebrowserOption("fas fa-arrow-right", "Move", move_option, form=MoveForm, filter=is_not_directory_object)
ENTRY_OPTIONS['copy'] = FilebrowserOption("fas fa-copy", "Copy", copy_option, form=CopyForm, filter=is_not_directory_object)
ENTRY_OPTIONS['extract'] = FilebrowserOption("fas fa-share-square","Extract", extract_option, filter=is_archive, method=GET)
ENTRY_OPTIONS['download'] = FilebrowserOption("fas fa-download", "Download", download_option, method=GET, authorization=READ)
ENTRY_OPTIONS['edit'] = FilebrowserOption("fas fa-edit", "Edit", edit_option, filter=[is_text, is_not_pl], method=GET)
ENTRY_OPTIONS['display'] = FilebrowserOption("fas fa-eye", "Display", display_option, filter=is_text, method=GET, balise=['target=_blank'], authorization=READ)
ENTRY_OPTIONS['commit'] = FilebrowserOption("fas fa-plus", "Add & Commit", add_commit_option, form=AddCommitForm, color=GREEN, filter=[is_remote, is_not_directory_object])
ENTRY_OPTIONS['checkout'] = FilebrowserOption("fas fa-eraser", "Checkout", checkout_option, color=YELLOW, filter=[is_remote, is_not_directory_object], require_confirmation=True)
ENTRY_OPTIONS['dirdelete'] = FilebrowserOption("fas fa-times", "Delete", delete_option, require_confirmation=True, color=RED, authorization=OWNER, filter=is_directory_object)
ENTRY_OPTIONS['delete'] = FilebrowserOption("fas fa-times", "Delete", delete_option, require_confirmation=True, color=RED, authorization=WRITE, filter=is_not_directory_object)

#Filebrowser Directory options, can be displayed with the upper-right "+" in the filebrowser
DIRECTORY_OPTIONS = OrderedDict()
DIRECTORY_OPTIONS['rights'] = FilebrowserOption("fas fa-unlock-alt", "Edit access rights", rights_option, method=GET, filter=is_directory_object, authorization=OWNER)
DIRECTORY_OPTIONS['rename'] = FilebrowserOption("fas fa-pencil-alt", "Rename", rename_option, form=RenameForm, authorization=OWNER)
DIRECTORY_OPTIONS['mkdir'] = FilebrowserOption("fas fa-folder", "New directory", mkdir_option, form=RenameForm)
DIRECTORY_OPTIONS['new'] = FilebrowserOption("fas fa-edit", "New File", new_file_option, form=RenameForm)
DIRECTORY_OPTIONS['upload'] = FilebrowserOption("fas fa-upload", "Upload File ", upload_option, form=UploadForm)
DIRECTORY_OPTIONS['download'] = FilebrowserOption("fas fa-download", "Download", download_option, method=GET, authorization=READ)
DIRECTORY_OPTIONS['clone'] = FilebrowserOption("fas fa-cloud-download-alt", "Git Clone", clone_option, form=LoginForm, authorization=READ)
DIRECTORY_OPTIONS['commit'] = FilebrowserOption("fas fa-plus", "Git Add & Commit", add_commit_option, form=AddCommitForm, color=GREEN, filter=is_remote)
DIRECTORY_OPTIONS['status'] = FilebrowserOption("fas fa-info-circle", "Git Status", status_option, color=LIGHT_BLUE, filter=is_remote, method=GET)
DIRECTORY_OPTIONS['checkout'] = FilebrowserOption("fas fa-eraser", "Git Checkout", checkout_option, color=YELLOW, filter=is_remote, require_confirmation=True)
DIRECTORY_OPTIONS['push'] = FilebrowserOption("fas fa-cloud-upload-alt", "Git Push", push_option, form=LoginForm, color=YELLOW, filter=is_remote)
DIRECTORY_OPTIONS['pull'] = FilebrowserOption("fas fa-cloud-download-alt", "Git Pull", pull_option, form=LoginForm, color=YELLOW, filter=is_remote)
