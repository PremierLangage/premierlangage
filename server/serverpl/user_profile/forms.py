#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  forms.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

from enumfields import EnumIntegerField

from django import forms

from user_profile.enums import EditorTheme, ColorBlindness, Role



class ProfileForm(forms.Form):
    mail = forms.CharField(disabled=True, label='Mail ', required=False)
    student_id = forms.CharField(disabled=True, label='Numéro Étudiant ', required=False)
    consumer_id = forms.CharField(disabled=True, label='ID Moodle', required=False)
    role = forms.CharField(disabled=True, required=False)
    
    color_blindness = EnumIntegerField(ColorBlindness).formfield(
        label='Daltonisme ', 
        help_text='<a target="_blank" href="/profile/color_blindness_preview/">prévisualisation</a>'
    )
    
    
    editor_theme = EnumIntegerField(EditorTheme).formfield(
        label='Thème de l\'éditeur ', 
        help_text='<a target="_blank" href="/profile/editor_preview/">prévisualisation</a>'
    )
    
