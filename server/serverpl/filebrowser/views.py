#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  views.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import os, json, shutil

from os.path import basename, join, dirname

from django.shortcuts import render, redirect, reverse
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseBadRequest, HttpResponseNotAllowed, HttpResponse

from filebrowser.filebrowser import Filebrowser
from filebrowser.models import Directory
from filebrowser.filebrowser_option import ENTRY_OPTIONS, DIRECTORY_OPTIONS
from filebrowser.utils import redirect_fb

from loader.loader import load_file
from loader.utils import exception_to_html

from playexo.exercise import PLInstance

from serverpl.settings import FILEBROWSER_ROOT



@login_required
def index(request):
    """ Used by the filebrowser module to navigate """
    if request.method == 'GET':
        path = request.GET.get('cd', '.')
    
    return render(request, 'filebrowser/filebrowser.html', {'fb': Filebrowser(path=path)})


@login_required
def apply_option_get(request):
    """ Apply an option using the GET method """
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


@login_required
def apply_option_post(request):
    """ Apply an option using the POST method """
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


@login_required
@csrf_exempt
def preview_pl(request):
    """ Used by the PL editor to preview a PL and test the preview's answers"""
    if request.method != 'POST':
        return HttpResponse('405 Method Not Allowed', status=405)
    

    post = json.loads(request.body.decode())
    
    if post['requested_action'] == 'preview': # Asking for preview
        try:
            path = FILEBROWSER_ROOT+'/'+post['path']
            shutil.copyfile(path, path+".bk")
            with open(path, 'w+') as f: # Writting editor content into the file
                print(post['content'], file=f)
                
            directory = Directory.objects.get(name=post['directory'])
            rel_path = post['path'].replace('./'+directory.name, "")
            pl, warnings = load_file(directory, rel_path)
            if not pl:
                preview = '<div class="alert alert-danger" role="alert"> Failed to load \''+basename(rel_path)+"': \n"+warnings+"</div>"
            else:
                if warnings:
                    [messages.warning(request, warning) for warning in warnings]
                exercise = PLInstance(pl.json)
                request.session['exercise'] = dict(exercise.dic)
                preview = exercise.render(request)
        
        except Exception as e:
            preview = '<div class="alert alert-danger" role="alert"> Failed to load \'' \
                + basename(rel_path) + "': \n\n" \
                + exception_to_html(str(e)) + "</div>"
        finally:
            shutil.move(path+".bk", path)
            return HttpResponse(json.dumps({
                'preview': preview
            }), content_type='application/json')
    
    elif post['requested_action'] == 'submit' : # Answer from the preview
        exercise = request.session.get('exercise', None)
        exercise = PLInstance(exercise)
        success, feedback = exercise.evaluate(post['inputs'])
        if (success == None):
            feedback_type = "info"
        elif success:
            feedback_type = "success"
        else:
            feedback_type = "failed"
        return HttpResponse(json.dumps({
                'feedback_type': feedback_type,
                'feedback': feedback
            }), content_type='application/json')
    
    
    return HttpResponseBadRequest(content="Couldn't resolve ajax request")


@login_required
def new_directory(request):
    """ Use to created a new Directory. """
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


@login_required
def edit_receiver(request):
    """ View used to saved a newly edited file. """
    if not request.method == 'POST':
        return HttpResponseNotAllowed(['POST'])
        
    content = request.POST.get('editor_input', '')
    path = request.POST.get('path', '')
    
    try:
        if content:
            with open(FILEBROWSER_ROOT+'/'+path, 'w') as f:
                print(content, file=f)
        messages.success(request, "File '"+basename(path)+"' successfully modified")
    except Exception as e:
        msg = "Impossible to modify '"+basename(path)+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT, "")
        messages.error(request, msg)
    
    return redirect_fb(dirname(path))


@login_required
def new_file_receiver(request):
    """ View used to saved a newly created file. """
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


@login_required
def right_edit(request):
    """ View used to add the new right of a Directory. """
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
