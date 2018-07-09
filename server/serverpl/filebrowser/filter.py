#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  filter.py
#  
#  Copyright 2018 Coumes Quentin


########################
#       FILTERS        #
########################
#
# Filters are function which, given an absolute path to an entry, should return whether an option should
# be displayed (True) or not (False).
#
# These function should be keep simple and fast as they may be called many times
#



import magic, os, gitcmd

from os.path import isdir, isfile, basename, splitext

from django.conf import settings

from loader.parser import get_parsers

from filebrowser.models import Directory


is_directory = isdir
is_file = isfile

def is_not_directory(path):
    return not is_directory(path)

def in_repository(path):
    return gitcmd.in_repository(path, False)


def is_directory_object(path):
    if len(path.replace(settings.FILEBROWSER_ROOT, "").split('/')) < 3 and Directory.objects.filter(name=basename(path)):
        return True
    return False


def is_not_directory_object(path):
    return not is_directory_object(path)


def is_remote(path):
    path = path if settings.FILEBROWSER_ROOT not in path else path.replace(settings.FILEBROWSER_ROOT+'/', '')
    parts = path.split('/')

    directory = None
    try:
        directory = Directory.objects.get(name=parts[1])
    except:
        pass
    return True if directory and directory.remote else False


def is_image(path):
    if is_directory(path):
        return False
    return magic.from_file(path, mime=True).split('/')[0] == 'image'


def is_text(path):
    if is_directory(path):
        return False
    return (magic.from_file(path, mime=True).split('/')[0] == 'text' 
         or not os.stat(path).st_size)


def is_audio(path):
    if is_directory(path):
        return False
    return magic.from_file(path, mime=True).split('/')[0] == 'audio'


def is_video(path):
    if is_directory(path):
        return False
    return magic.from_file(path, mime=True).split('/')[0] == 'video'


def is_application(path):
    if is_directory(path):
        return False
    return magic.from_file(path, mime=True).split('/')[0] == 'application'


def is_pl(path): 
    parsers = get_parsers()
    ext = splitext(path)[1]
    return ext in parsers and parsers[ext]['type'] == 'pl'


def is_not_pl(path): 
    return not is_pl(path)


def is_pltp(path): 
    parsers = get_parsers()
    ext = splitext(path)[1]
    return ext in parsers and parsers[ext]['type'] == 'pltp'


def is_archive(path):
    if is_directory(path):
        return False
    return magic.from_file(path, mime=True).split('/')[1] in ['zip', 'x-xz', 'gzip']
