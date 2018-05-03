#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  form.py
#  
#  Copyright 2018 Coumes Quentin
#  


from django import forms
from django.contrib.auth.models import User

from user_profile.enums import Role


class RenameForm(forms.Form):
    name = forms.CharField(max_length=1024)


class CopyForm(forms.Form):
    destination = forms.CharField(max_length=4096, help_text="*Path relative to this entry (use '..' to move to te parent directory). I.E.: '../dir1/dir2/file.ext'")


class MoveForm(forms.Form):
    destination = forms.CharField(max_length=4096, help_text="*Path relative to this entry (use '..' to move to te parent directory). I.E.: '../dir1/dir2'")


class AddCommitForm(forms.Form):
    commit = forms.CharField(max_length=4096)


class LoginForm(forms.Form):
    username = forms.CharField(max_length=4096, required=False, help_text="*Optionnal")
    password = forms.CharField(max_length=4096, required=False, help_text="*Optionnal", widget=forms.PasswordInput)


class RightForm(forms.Form):
    USER = User.objects.filter(profile__role__lte = Role.INSTRUCTOR)
    write = forms.ModelMultipleChoiceField(USER, widget=forms.CheckboxSelectMultiple(), required=False, help_text="*User with writing right can do everything you can but delete, rename and change the rights of your directory")
    read =  forms.ModelMultipleChoiceField(USER, widget=forms.CheckboxSelectMultiple(), required=False, help_text="*User with reading right can do everything that do not modify your file (I.E. display, download...)")


class UploadForm(forms.Form):
    name = forms.CharField(max_length=1024, help_text="*Optionnal", required=False)
    file = forms.FileField(help_text="*Only .tar.gz, .tar.xz and .zip archive can be extracted on the browser")
