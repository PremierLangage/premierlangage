#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  views.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

import os, json, shutil, htmlprint

from os.path import basename, join, dirname


from django.shortcuts import render, redirect, reverse
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseBadRequest, HttpResponseNotAllowed, HttpResponse, Http404

from filebrowser.filebrowser import Filebrowser
from filebrowser.models import Directory
from filebrowser.filebrowser_option import ENTRY_OPTIONS, DIRECTORY_OPTIONS
from filebrowser.utils import redirect_fb

from loader.loader import load_file

from playexo.exercise import PLInstance

from django.conf import settings



@login_required
def index(request, path="home"):
    """ Used by the filebrowser module to navigate """
    path = path.split('/')
    if path[0].isdigit(): # pragma: no cover
        raise Http404()
    
    fb = Filebrowser(request, path=join(*path))
    fb.load_options(request)
    
    return render(request, 'filebrowser/filebrowser.html', {'fb': fb})


@login_required
def apply_option(request, path="home"):
    real = (path).split('/')
    if real[0] == "home":
        real[0] = str(request.user.id)
   
    if request.method == 'GET':
        option = request.GET.get('option')
        target = request.GET.get('target')
    elif request.method == 'POST':
        option = request.POST.get('option')
        target = request.POST.get('target')
    
    if not option:
        return HttpResponseBadRequest("'option' parameter is missing")
    if not target:
        return HttpResponseBadRequest("'target' parameter is missing")
    
    try:
        category, group, option = option.split('-')
        fb = Filebrowser(request, path=path)
        if category == "entry":
            return ENTRY_OPTIONS.get_option(group, option)(request, fb, target)
        else:
            return DIRECTORY_OPTIONS.get_option(group, option)(request, fb, target)
    
    except Exception as e:
        messages.error(
            request, 
            ("Impossible to apply the option " 
                + option + " : " 
                + (htmlprint.code(str(type(e)) + " - " + str(e))
                   if not settings.DEBUG 
                   else htmlprint.html_exc()))
        )
    
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
           
            path = join(settings.FILEBROWSER_ROOT, post['path'])
            shutil.copyfile(path, path+".bk")
            with open(path, 'w+') as f: # Writting editor content into the file
                print(post['content'], file=f)
                
            directory = Directory.objects.get(name=post['directory'])
            rel_path = post['path'].replace(directory.name, "")
            pl, warnings = load_file(directory, rel_path)
            if not pl:
                preview = '<div class="alert alert-danger" role="alert"> Failed to load \''+basename(rel_path)+"': \n"+warnings+"</div>"
            else:
                if warnings:
                    [messages.warning(request, warning) for warning in warnings]
                exercise = PLInstance(pl.json)
                request.session['exercise'] = dict(exercise.dic)
                preview = exercise.render(request)
        
        except Exception as e: # pragma: no cover
            preview = '<div class="alert alert-danger" role="alert"> Failed to load \'' \
                + basename(rel_path) + "': \n\n" \
                + htmlprint.code(str(e)) + "</div>"
        finally:
            shutil.move(path+".bk", path)
            return HttpResponse(
                json.dumps({'preview': preview}),
                content_type='application/json',
                status=200
            )
    
    elif post['requested_action'] == 'submit' : # Answer from the preview
        
        exercise = request.session.get('exercise', None)
        if exercise:
            
            exercise = PLInstance(exercise)
            success, feedback = exercise.evaluate(post['inputs'])
            if (success == None):
                feedback_type = "info"
            elif success:
                feedback_type = "success"
            else:
                feedback_type = "failed"
            return HttpResponse(
                json.dumps({
                    'feedback_type': feedback_type,
                    'feedback': feedback
                }),
                content_type='application/json',
                status=200
            )
    
    
    return HttpResponseBadRequest(content="Couldn't resolve ajax request")



@login_required
@csrf_exempt
def save_edit_receiver(request):
    """ View used to saved a newly edited file. """
    if not request.method == 'POST':
        return HttpResponseNotAllowed(['POST'])
    post = json.loads(request.body.decode())
    content = post['editor_input']
    path = post['path']
    try:
        if content:
            with open(join(settings.FILEBROWSER_ROOT, path), 'w') as f:
                print(content, file=f)
        return HttpResponse(
            json.dumps({
                'feedback': '<div id="success" class="alert alert-success feedback">'
                          + '<i class="fas fa-check"></i> &nbsp Sauvegarde effectuée'
                          + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
                          + '<span aria-hidden="true">&times;</span>'
                          + '</button></div>'}),
            content_type='application/json'
        )
    except Exception as e:
        return HttpResponse(
            json.dumps({
                'feedback': '<div id="success" class="alert alert-success feedback">'
                          + '<i class="fas fa-fire"></i> &nbsp Sauvegarde échouée'
                          + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
                          + '<span aria-hidden="true">&times;</span>'
                          + '</button></div>'}),
            content_type='application/json'
        )


@login_required
def edit_receiver(request):
    """ View used to saved a newly edited file. """
    if not request.method == 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    content = request.POST.get('editor_input', '')
    path = request.POST.get('path', '')
    relative = request.POST.get('relative', '')
    
    try:
        if content:
            with open(join(settings.FILEBROWSER_ROOT, path), 'w+') as f:
                print(content, file=f)
        messages.success(request, "File '"+basename(path)+"' successfully modified")
    except Exception as e: # pragma: no cover
        msg = "Impossible to modify '"+basename(path)+"' : "+ htmlprint.code(str(type(e)) + " - " + str(e))
        messages.error(request, msg)
    return redirect_fb(relative)
