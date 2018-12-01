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
from loader.loader import load_file
from playexo.models import SessionTest
from playexo.utils import render_feedback


@login_required
def index(request):
    """ Used by the editor module to navigate """
    print(settings.FILEBROWSER_ROOT)
    return render(request, 'filebrowser/index.html', {})

@login_required
@csrf_exempt
def preview_pl(request):
    """ Used by the PL editor to preview a PL and test the preview's answers"""
    if request.method != 'POST':
        return HttpResponse('405 Method Not Allowed', status=405)
    
    post = json.loads(request.body.decode())
    if post['requested_action'] == 'preview':  # Asking for preview
        path = post.get('path')
        directory = post.get('directory')
        if not (path and directory):
            return HttpResponseBadRequest("Missing parameter 'path' or 'directory'")
        try:
            path = join(settings.FILEBROWSER_ROOT, path)
            shutil.copyfile(path, path + ".bk")
            with open(path, 'w+') as f:  # Writting editor content into the file
                print(post['content'], file=f)
            
            directory = Directory.objects.get(name=post['directory'])
            rel_path = "/" + join(*post['path'].split("/")[1:])
            pl, warnings = load_file(directory, rel_path)
            if not pl:
                preview = '<div class="alert alert-danger" role="alert"> Failed to load \'' \
                          + basename(rel_path) + "': \n" + warnings + "</div>"
            else:
                if warnings:
                    [messages.warning(request, warning) for warning in warnings]
                pl.save()
                exercise = SessionTest.objects.create(pl=pl, user=request.user)
                preview = exercise.get_exercise(request)
        
        except Exception as e:  # pragma: no cover
            preview = ('<div class="alert alert-danger" role="alert"> Failed to load \''
                       + basename(rel_path) + "': \n\n"
                       + htmlprint.code(str(e)))
            if settings.DEBUG:
                preview += "\n\nDEBUG set to True:\n" + htmlprint.html_exc()
            preview += "</div>"
        finally:
            shutil.move(path + ".bk", path)
            return HttpResponse(
                json.dumps({'preview': preview}),
                content_type='application/json',
                status=200
            )
    
    elif post['requested_action'] == 'submit':  # Answer from the preview
        if 'session_id' not in post['data'] or not post['data']['session_id']:
            HttpResponseBadRequest(content="Couldn't resolve ajax request")
        
        exercise = SessionTest.objects.get(pk=post['data']['session_id'])
        answer, feedback, context = exercise.evaluate(request, post['data']['answers'], test=True)
        
        return HttpResponse(
            json.dumps({
                "navigation": None,
                "exercise"  : exercise.get_exercise(request, answer=answer, context=context),
                "feedback"  : render_feedback(feedback),
            }),
            content_type='application/json'
        )
    
    return HttpResponseBadRequest(content="Couldn't resolve ajax request")

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

    def build_tree(path, parent=''):
        hierarchy = {
            'parent': parent,
            'type': 'folder',
            'name': basename(path),
            'path': path[root_len + 1:],
            'icon': icon(path),
        }
        try:
            hierarchy['children'] = [
                build_tree(join(path, contents), hierarchy['path']) 
                for contents in os.listdir(path) 
                if not hidden(join(path, contents))
            ]
            hierarchy['children'].sort(key=lambda e: e['type'], reverse=True)
        except OSError as e:
            if e.errno != errno.ENOTDIR:
                raise
            hierarchy['type'] = 'file'
        
        if hierarchy['type'] == 'folder':
            path_components = hierarchy['path'].split('/')
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

    lib = build_tree(to_abs_path('lib'))
    home = build_tree(to_abs_path(userId))
    home["name"] = 'home'
    return HttpResponse(json.dumps([home, lib]), content_type='application/json')

@login_required
def get_document(request, path):
    if request.method == 'GET':
        try:
            with open(to_abs_path(path)) as f:
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
            with open(to_abs_path(path), 'w') as f:
                print(content, file=f)
            return JsonResponse({'success': True})
    except Exception as e:
        return HttpResponseNotFound(str(e))

def load_pltp(request, path):
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
    
    try:
        path_components = path.split('/')
        directory = Directory.objects.get(name=path_components[0])
        file_path = join(*(path_components[1:]))
        pltp, warnings = load_file(directory, file_path, True)

        if not pltp and not warnings:  # pragma: no cover
            HttpResponseBadRequest("This PLTP is already loaded")
        elif not pltp:  # pragma: no cover
            HttpResponseBadRequest("Failed to load '"+path+"': \n"+warnings)
        else:
            if warnings:  # pragma: no cover
                for warning in warnings:
                    messages.warning(request, warning)
            activity = Activity.objects.create(name=pltp.name, pltp=pltp)
            url_lti = request.build_absolute_uri(reverse("playexo:activity", args=[activity.pk]))
            HttpResponse("L'activité <b>'"+pltp.name+"'</b> a bien été créée et a pour URL LTI: \
                                      <br>&emsp;&emsp;&emsp; <input id=\"copy\" style=\"width: 700px;\" value=\""+url_lti+"\" readonly>  \
                                      <button class=\"btn\" data-clipboard-action=\"copy\" data-clipboard-target=\"#copy\"><i class=\"far fa-copy\"></i> Copier\
                                      </button>")
    except Exception as e:  # pragma: no cover
        msg = "Impossible to load '"+path+"' : " + htmlprint.code(str(type(e)) + ' - ' + str(e))
        return HttpResponseBadRequest(msg.replace(settings.FILEBROWSER_ROOT, ""))

def test_pl(request, path):
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])

    try:
        path_components = path.split('/')
        directory = Directory.objects.get(name=path_components[0])
        file_path = join(*(path_components[1:]))
        pl, warnings = load_file(directory, file_path)

        if not pl:
            return HttpResponseBadRequest(warnings.replace(settings.FILEBROWSER_ROOT, ""))
        
        pl.save()
        exercise = SessionTest.objects.create(pl=pl, user=request.user)
        preview = exercise.get_exercise(request)

        return render(request, 'filebrowser/test_pl.html', {
            'preview': preview,
        })
    except Exception as e:  # pragma: no cover
        msg = ("Impossible to test '" + target + "' : " + htmlprint.code(str(type(e)) + ' - ' + str(e)))
        return HttpResponseBadRequest(msg.replace(settings.FILEBROWSER_ROOT, ""))

@login_required
def download_env(request, envid):
    r = requests.get(join(settings.SANDBOX, "env", envid, ""))
    response = HttpResponse(r)
    response['Content-Type'] = "application/gzip"
    response['Content-Disposition'] = r.headers['Content-Disposition']
    return response
