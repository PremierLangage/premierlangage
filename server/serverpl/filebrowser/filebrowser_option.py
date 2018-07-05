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

#####
# Bootstrap button classes
    # Color
GREY = "-secondary"
DARK_BLUE = "-primary"
LIGHT_BLUE = "-info"
GREEN = "-success"
RED = "-danger"
YELLOW = "-warning"
WHITE = "-light"
BLACK = "-dark"

    # Outline
OUTLINE = "-outline"

    # Size
SMALL = "small"
BIG = "big" 

#####
# Methods
POST = 'POST'
GET = 'GET'


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
        class (lst): List of css class to be added to the button
        color (str): boostrap class for the color of the button, see above constant for choices.
        size (size): boostrap class for the size of the button (BIG or SMALL, default SMALL). Big buttons
                     are displayed first together then small buttons next.
        outline (bool): Whether outline bootstrap class is used or not (default True)
        balise (str): Any extra balise which should be add inside the <button [balise]> element.
    """
    
    def __init__(self, fa_icon, name, option, form=None, filter=None,
                 require_confirmation=False, color=GREY, outline=True,
                 method=POST, balise=None, size=SMALL, classes=[]):
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
        self.size = size
        self.classes = classes
        
        if form and method == GET:
            raise ValueError("An option can't have a form while using GET method")
        if require_confirmation and method == POST:
            raise ValueError("require_confirmation can't be True with a POST method")



class OptionsGroup():
    
    def __init__(self, name, options, icon=None, dropdown=True, filter=None):
        if (not icon and dropdown):
            raise ValueError('A FA5 icon must be provided if dropdown is True (default)')
        for k in options.keys():
            if '-' in k:
                raise ValueError("Dashes '-' are not allowed inside options key.")
        
        self.name = name
        self.icon = icon
        self.options = options
        self.dropdown = dropdown
        self.filter = filter



class OptionsCategory():
    
    def __init__(self, groups):
        for k in groups.keys():
            if '-' in k:
                raise ValueError("Dashes '-' are not allowed inside groups key.")
        
        self.groups = groups
    
    def get_option(self, group, option):
        """Get the option corresponding to <option> in <group>."""
        return self.groups[group].options[option].option



####################################################################################################
# Filebrowser entries options.
ENTRY_OPTIONS = OptionsCategory({
    "direct": OptionsGroup('Direct', {
            "edit_pl": FilebrowserOption("fas fa-edit",  "Edit", edit_pl_option,   size=BIG, method=GET, filter=is_pl),
            "edit":    FilebrowserOption("fas fa-edit",  "Edit", edit_option,      size=BIG, method=GET, filter=[is_text, is_not_pl]),
            "test":    FilebrowserOption("fas fa-check", "Test", test_pl_option,   size=BIG, method=GET, filter=is_pl),
            "load":    FilebrowserOption("fas fa-play",  "Load", load_pltp_option, size=BIG, method=GET, filter=is_pltp),
        }, dropdown=False),
    "options": OptionsGroup('Options', {
            "rename":   FilebrowserOption("fas fa-pencil-alt",  "Rename",   rename_option, form=RenameForm),
            "move":     FilebrowserOption("fas fa-arrow-right", "Move",     move_option, form=MoveForm, filter=is_not_directory_object),
            "copy":     FilebrowserOption("fas fa-copy",        "Copy",     copy_option, form=CopyForm, filter=is_not_directory_object),
            "extract":  FilebrowserOption("fas fa-share-square","Extract",  extract_option, filter=is_archive, method=GET),
            "download": FilebrowserOption("fas fa-download",    "Download", download_option, method=GET),
            "display":  FilebrowserOption("fas fa-eye",         "Display",  display_option, filter=is_text, method=GET, balise=['target=_blank']),
            "delete":   FilebrowserOption("fas fa-times",       "Delete",   delete_option, require_confirmation=True, method=GET, color=RED, filter=is_not_directory_object),
        }, icon="fas fa-cog"),
    "git": OptionsGroup('Git', {
            "add":      FilebrowserOption("fas fa-plus",   "Git Add",      add_option, method=GET),
            "commit":   FilebrowserOption("fas fa-edit",   "Git Commit",   commit_option, form=CommitForm),
            "reset":    FilebrowserOption("fas fa-undo",   "Git Reset",    reset_option, color=YELLOW, require_confirmation=True, method=GET),
            "checkout": FilebrowserOption("fas fa-eraser", "Git Checkout", checkout_option, color=RED, require_confirmation=True, method=GET),
        }, icon="fab fa-git-square fa-lg", filter=in_repository),
})



####################################################################################################
# Filebrowser Directory options, can be displayed with the upper-right dropdown in the filebrowser
DIRECTORY_OPTIONS = OptionsCategory({
    "options": OptionsGroup('Options', {
            "mkdir":    FilebrowserOption("fas fa-folder",   "New directory", mkdir_option, form=RenameForm),
            "new":      FilebrowserOption("fas fa-edit",     "New File",      new_file_option, form=RenameForm),
            "upload":   FilebrowserOption("fas fa-upload",   "Upload File ",  upload_option, form=UploadForm),
            "download": FilebrowserOption("fas fa-download", "Download",      download_option, method=GET),
            "clone":    FilebrowserOption("fas fa-cloud-download-alt", "Git Clone", clone_option, form=LoginForm),
        }, icon='fas fa-cog'),
    "git": OptionsGroup('Git', {
            "push":     FilebrowserOption("fas fa-cloud-upload-alt",   "Git Push",        push_option, form=LoginForm),
            "pull":     FilebrowserOption("fas fa-cloud-download-alt", "Git Pull",        pull_option, form=LoginForm),
            "status":   FilebrowserOption("fas fa-info-circle",        "Git Status",      status_option, method=GET),
            "branch":   FilebrowserOption("fas fa-list-ul",            "List Branch",     branch_option, method=GET),
            "chbranch": FilebrowserOption("fas fa-code-branch",        "Change Branch",   change_branch_option, method=POST, form=ChangeBranchForm),
            "add":      FilebrowserOption("fas fa-plus",               "Git Add",         add_option, method=GET),
            "commit":   FilebrowserOption("fas fa-edit",               "Git Commit",      commit_option, form=CommitForm),
            "reset":    FilebrowserOption("fas fa-undo",               "Git Reset",       reset_option, color=YELLOW, form=ResetForm, method=POST),
            "checkout": FilebrowserOption("fas fa-eraser",             "Git Checkout",    checkout_option, color=RED, require_confirmation=True, method=GET),
        }, icon='fab fa-git-square fa-lg', filter=in_repository),
})


        

