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


class NewFileForm(forms.Form):
    name = forms.CharField(max_length=1024, help_text="Use '.pl' extension to start a new PL.")


class CopyForm(forms.Form):
    destination = forms.CharField(max_length=4096, help_text=" * Path may be absolute or relative.")


class MoveForm(forms.Form):
    destination = forms.CharField(max_length=4096, help_text=" * Path may be absolute or relative. Must point to a directory.")


class CommitForm(forms.Form):
    commit = forms.CharField(max_length=4096)


class LoginForm(forms.Form):
    username = forms.CharField(max_length=4096, required=False, help_text=" * Optionnal")
    password = forms.CharField(max_length=4096, required=False, help_text=" * Optionnal", widget=forms.PasswordInput)


class CloneForm(forms.Form):
    url = forms.CharField(max_length=4096)
    destination = forms.CharField(max_length=4096, required=False, help_text=" * Optionnal, default to repository's name")
    username = forms.CharField(max_length=4096, required=False, help_text=" * Optionnal")
    password = forms.CharField(max_length=4096, required=False, help_text=" * Optionnal", widget=forms.PasswordInput)


class UploadForm(forms.Form):
    rename = forms.CharField(max_length=1024, help_text=" * Optionnal", required=False)
    file = forms.FileField(help_text=" * Only .tar.gz, .tar.xz and .zip archive can be extracted directly on the plateform")


class ResetForm(forms.Form):
    MODE = (
        ('mixed', 'mixed'),
        ('soft',  'soft'),
        ('hard',  'hard'),
        ('merge', 'merge'),
        ('keep',  'keep'),
    )

    mode = forms.ChoiceField(choices=MODE, initial="mixed", help_text=' * See <a href="https://git-scm.com/docs/git-reset"> the documentation</a> for more information')
    commit = forms.CharField(max_length=256, initial="HEAD")


class ChangeBranchForm(forms.Form):
    name = forms.CharField(max_length=256)
    new = forms.BooleanField(initial=False, required=False, label="Create a new branch ?")
