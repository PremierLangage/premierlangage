#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  form.py
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


from django import forms
from django.contrib.auth.models import User

from classmanagement.models import Role


class RenameForm(forms.Form):
    name = forms.CharField(max_length=1024)


class CopyForm(forms.Form):
    destination = forms.CharField(max_length=4096, help_text="*Path relative to this entry (use '..' to move to te parent directory). I.E.: '../dir1/dir2/file.ext'")


class MoveForm(forms.Form):
    destination = forms.CharField(max_length=4096, help_text="*Path relative to this entry (use '..' to move to te parent directory). I.E.: '../dir1/dir2'")


class AddCommitForm(forms.Form):
    commit = forms.CharField(max_length=4096)


class LoginForm(forms.Form):
    password = forms.CharField(max_length=4096, required=False, help_text="*Optionnal", widget=forms.PasswordInput)
    username = forms.CharField(max_length=4096, required=False, help_text="*Optionnal")


class RightForm(forms.Form):
    USER = User.objects.filter(pluser__role__in=[Role.ADMINISTRATOR, Role.INSTRUCTOR, Role.CONTENT_DEVELOPER])
    write = forms.ModelMultipleChoiceField(USER, widget=forms.CheckboxSelectMultiple(), required=False, help_text="*User with writing right can do everything you can but delete, rename and change the rights of your directory")
    read =  forms.ModelMultipleChoiceField(USER, widget=forms.CheckboxSelectMultiple(), required=False, help_text="*User with reading right can do everything that do not modify your file (I.E. display, download...)")


class UploadForm(forms.Form):
    name = forms.CharField(max_length=1024, help_text="*Optionnal", required=False)
    file = forms.FileField(help_text="*Only .tar.gz, .tar.xz and .zip archive can be extracted on the browser")
