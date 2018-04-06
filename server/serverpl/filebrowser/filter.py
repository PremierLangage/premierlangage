#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  filter.py
#  
#  Copyright 2018 Coumes Quentin


import magic

from os.path import isdir, isfile, basename, splitext

from serverpl.settings import FILEBROWSER_ROOT

from loader.parser import get_parsers

from filebrowser.models import Directory


is_directory = isdir
is_file = isfile


def is_directory_object(path):
    if len(path.replace(FILEBROWSER_ROOT, "").split('/')) < 3 and Directory.objects.filter(name=basename(path)):
        return True
    return False


def is_not_directory_object(path):
    return not is_directory_object(path)


def is_remote(path):
    if FILEBROWSER_ROOT in path:
        path = path.replace(FILEBROWSER_ROOT, '')
    parts = path.split('/')
    
    directory = None
    try:
        directory = Directory.objects.get(name=parts[2])
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
    return magic.from_file(path, mime=True).split('/')[0] == 'text'


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


def is_pltp(path): 
    parsers = get_parsers()
    ext = splitext(path)[1]
    return ext in parsers and parsers[ext]['type'] == 'pltp'


def is_archive(path):
    if is_directory(path):
        return False
    return magic.from_file(path, mime=True).split('/')[1] in ['zip', 'x-xz', 'gzip']
