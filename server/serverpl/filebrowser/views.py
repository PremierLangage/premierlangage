#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  views.py
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

import os

from os.path import basename, join, dirname

from django.shortcuts import render, redirect, reverse
from django.contrib import messages
from django.contrib.auth.models import User
from django.http import HttpResponseBadRequest, HttpResponseNotAllowed

from filebrowser.filebrowser import Filebrowser
from filebrowser.models import Directory
from filebrowser.filebrowser_option import ENTRY_OPTIONS, DIRECTORY_OPTIONS
from filebrowser.utils import redirect_fb

from serverpl.settings import FILEBROWSER_ROOT



def index(request):
    if request.method == 'GET':
        path = request.GET.get('cd', '.')
    
    return render(request, 'filebrowser/filebrowser.html', {'fb': Filebrowser(path=path)})



def apply_option_get(request):
    if not request.method == 'GET':
        return HttpResponseNotAllowed(['GET'])
    
    path = request.GET.get('relative_h', None)
    name = request.GET.get('name_h', None)
    option = request.GET.get('option_h', None)
    typ = request.GET.get('type_h', None)
    
    if not (name and path and option and typ):
        return HttpResponseBadRequest()
    
    if typ == 'directory':
        path = '.'
    fb = Filebrowser(path=path)
    
    try:
        option = int(option)
        if typ == "entry":
            return ENTRY_OPTIONS[option].process_option(request, fb, name)
        else:
            return DIRECTORY_OPTIONS[option].process_option(request, fb, name)
    except Exception as e:
        messages.error(request, "Impossible to apply the option "+str(option)+" : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e))
    
    return redirect_fb(path)



def apply_option_post(request):
    if not request.method == 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    path = request.POST.get('relative_h', None)
    name = request.POST.get('name_h', None)
    option = request.POST.get('option_h', None)
    typ = request.POST.get('type_h', None)

    if not (name and path and option and typ):
        return HttpResponseBadRequest()
    
    if typ == 'directory':
        path = '.'
    fb = Filebrowser(path=path)
    
    try:
        if typ == "entry":
            return ENTRY_OPTIONS[int(option)].process_option(request, fb, name, )
        else:
            return DIRECTORY_OPTIONS[int(option)].process_option(request, fb, name)
    except Exception as e:
        messages.error(request, "Impossible to apply the option "+option+" : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e))
    
    return redirect_fb(path)



def new_directory(request):
    if not request.method == 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    name = request.POST.get('name', None)
    url = request.POST.get('url', None)
    username = request.POST.get('username', None)
    password = request.POST.get('password', None)
    
    if not name:
        return HttpResponseBadRequest()
    name = name.replace(' ', '_')
    
    if Directory.objects.filter(name=name):
        messages.error(request, "A directory with this name ('" + name + "') already exists. Please choose another name")
        return redirect(reverse(index))
    
    if url:
        directory = Directory(name=name, owner=request.user, remote=url)
        cloned, feedback = directory.clone(username, password)
        if cloned:
            directory.save()
            messages.success(request, "Repository successfully cloned in " + name + ".")
        else:
            messages.error(request, "Couldn't clone repository :\n" + feedback)
    else:
        os.mkdir(join(FILEBROWSER_ROOT,name))
        Directory(name=name, owner=request.user).save()
        messages.success(request, "Directory '" + name + "' successfully created.")
    
    return redirect_fb()



def edit_receiver(request):
    if not request.method == 'POST':
        return HttpResponseNotAllowed(['POST'])
        
    content = request.POST.get('content', '')
    path = request.POST.get('path', '')
    
    try:
        if content:
            with open(path, 'w') as f:
                print(content, file=f)
        messages.success(request, "File '"+basename(path)+"' successfully modified")
    except Exception as e:
        msg = "Impossible to modify '"+basename(path)+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT, "")
        messages.error(request, msg)
    
    return redirect_fb(dirname(path))



def new_file_receiver(request):
    if not request.method == 'POST':
        return HttpResponseNotAllowed(['POST'])
        
    content = request.POST.get('content', '')
    path = request.POST.get('path', '')
    
    try:
        if content:
            with open(path, 'w+') as f:
                print(content, file=f)
        messages.success(request, "File '"+basename(path)+"' successfully created")
    except Exception as e:
        msg = "Impossible to modify '"+basename(path)+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT, "")
        messages.error(request, msg)
    
    return redirect_fb(dirname(path))



def right_edit(request):
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    name = request.POST.get('directory', None)
    write = request.POST.getlist('write')
    read =  request.POST.getlist('read')
    
    try:
        d = Directory.objects.get(name=name)
        d.write_auth.clear()
        d.read_auth.clear()
        
        for item in write:
            d.write_auth.add(User.objects.get(id=item))
        for item in read:
            d.read_auth.add(User.objects.get(id=item))
        
        messages.success(request, "Rights of '"+name+"' successfully edited.")
    except Exception as e:
        raise e
        msg = "Impossible to edit rights of '"+name+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT, "")
        messages.error(request, msg)

    return redirect(reverse(index))
