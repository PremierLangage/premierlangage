import errno
import json
import shutil
from os.path import abspath, basename, join

from django.conf import settings
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.core import serializers
from django.http import (Http404, HttpResponse, HttpResponseBadRequest,
                         HttpResponseNotAllowed, HttpResponseNotFound,
                         JsonResponse)
from django.shortcuts import render
from django.template.loader import render_to_string
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie

import htmlprint
from filebrowser.models import Directory
from filebrowser.utils import *

@login_required
def directories(request):
    userId = str(request.user.id)
    root = abspath(join(settings.FILEBROWSER_ROOT, userId))
    root_len = len(settings.FILEBROWSER_ROOT)

    repos = {}
    directories = {}

    def get_cached_directory(path_components):
        if path_components[0] in directories:
            return directories[path_components[0]]
        directories[path_components[0]] = Directory.objects.get(name=path_components[0])
        return directories[path_components[0]]

    def build_tree(path):
        hierarchy = {
            'type': 'folder',
            'name': basename(path),
            'path': path,
            'relative': path[root_len + 1:],
            'icon': icon(path),
        }
        try:
            hierarchy['children'] = [
                build_tree(join(path, contents)) 
                for contents in os.listdir(path) 
                if not hidden(join(path, contents))
            ]
            hierarchy['children'].sort(key=lambda e: e['type'], reverse=True)
        except OSError as e:
            if e.errno != errno.ENOTDIR:
                raise
            hierarchy['type'] = 'file'
        
        if hierarchy['type'] == 'folder':
            path_components = hierarchy['relative'].split('/')
            directory = get_cached_directory(path_components)

            hierarchy['read'] = directory.can_read(request.user)
            hierarchy['write'] = directory.can_write(request.user)

            # CHECK REPO ONLY FOR THE ROOT AND CACHE THE RESULT
            if path_components[0] in repos:
                if repos[path_components[0]] is not None:
                    hierarchy['repo'] = repos[path_components[0]]
            elif in_repository(path):
                repos[path_components[0]] = hierarchy['repo'] = {
                    'url': repository_url(path),
                    'branch': repository_branch(path),
                    'host': repository_host(path),
                }
            else:
                repos[path_components[0]] = None
            
            for child in hierarchy['children']:
                child['read'] = hierarchy['read']
                child['write'] = hierarchy['write']
                if 'repo' in hierarchy:
                    child['repo'] = hierarchy['repo']
        return hierarchy

    lib = build_tree(abspath(join(settings.FILEBROWSER_ROOT, 'lib')))
    home = build_tree(abspath(join(settings.FILEBROWSER_ROOT, userId)))
    home["name"] = 'home'
    return HttpResponse(json.dumps([home, lib]), content_type='application/json')

@login_required
def get_document(request, path):
    if request.method == 'GET':
        try:
            with open(path) as f:
                content = f.read()
            return JsonResponse({'content': content })
        except Exception as e:  # pragma: no cover
            msg = ("Impossible to open '" + path + "' : " + htmlprint.code(str(type(e)) + ' - ' + str(e)))
            messages.error(request, msg.replace(settings.FILEBROWSER_ROOT, ""))
            if settings.DEBUG:
                messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
            return HttpResponseNotFound(msg)

@login_required
def save_document(request):
    """ View used to saved a newly edited file. """
    if not request.method == 'POST':
        return HttpResponseNotAllowed(['POST'])
        
    post = json.loads(request.body.decode())
    path = post['path']
    content = post['content']
    try:
        if content:
            with open(join(settings.FILEBROWSER_ROOT, path), 'w') as f:
                print(content, file=f)
            return JsonResponse({'success': True})
    except Exception as e:
        return HttpResponseNotFound(str(e))
