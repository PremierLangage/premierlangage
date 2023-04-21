#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  forms.py
#
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#

from django import forms
from shared.enumfields import EnumIntegerField

from user_profile.enums import ColorBlindness, EditorTheme



class ProfileForm(forms.Form):
    mail = forms.CharField(disabled=True, label='Mail ', required=False)
    student_id = forms.CharField(disabled=True, label='Numéro Étudiant ', required=False)
    consumer_id = forms.CharField(disabled=True, label='ID Moodle', required=False)
    role = forms.CharField(disabled=True, required=False)
    
    color_blindness = EnumIntegerField(ColorBlindness).formfield(
        label='Daltonisme ',
        help_text='<a target="_blank">prévisualisation</a>'
        # href="/profile/color_blindness_preview/"
    )
    
    editor_theme = EnumIntegerField(EditorTheme).formfield(
        label='Thème de l\'éditeur ',
        help_text='<a target="_blank" href="/profile/editor_preview/">prévisualisation</a>'
    )
    
    confirm = forms.BooleanField(required=False, label="Confirmation exercice :",
                                 help_text="Confirmer avant de quitter un exercice")
