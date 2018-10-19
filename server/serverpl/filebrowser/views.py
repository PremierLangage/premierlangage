import json, shutil, htmlprint, errno 
from os.path import abspath, basename, join

from django.core import serializers
from django.shortcuts import render
from django.conf import settings
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from django.http import HttpResponseBadRequest, HttpResponseNotAllowed, HttpResponseNotFound, HttpResponse, JsonResponse, Http404
from django.template.loader import render_to_string
from filebrowser.filebrowser import Filebrowser
from filebrowser.models import Directory
from filebrowser.filebrowser_option import ENTRY_OPTIONS, DIRECTORY_OPTIONS
from filebrowser.utils import redirect_fb
from filebrowser.filter import *
from filebrowser.templatetags.filebrowser_filter import *
from loader.loader import load_file
from playexo.models import SessionTest
from playexo.utils import render_feedback


@login_required
def index(request):
    """ Used by the filebrowser module to navigate """
    return render(request, 'filebrowser/filebrowser.html', {})

@login_required
def directories(request):

    userId = str(request.user.id)
    root = abspath(os.path.join(settings.FILEBROWSER_ROOT, userId))
    root_len = len(root)
    def build_tree(path):
        hierarchy = {
            'type': 'folder',
            'name': os.path.basename(path),
            'path': path,
            'relative': path[:root_len],
            'icon': icon(path),
        }
        try:
            hierarchy['children'] = [
                build_tree(os.path.join(path, contents)) 
                for contents in os.listdir(path) 
                if not hidden(os.path.join(path, contents))
            ]
            hierarchy['children'].sort(key=lambda e: e['type'], reverse=True)
        except OSError as e:
            if e.errno != errno.ENOTDIR:
                raise
            hierarchy['type'] = 'file'
        return hierarchy

    lib = build_tree(abspath(os.path.join(settings.FILEBROWSER_ROOT, 'lib')))
    home = build_tree(abspath(os.path.join(settings.FILEBROWSER_ROOT, userId)))
    home["name"] = 'home'
    return HttpResponse(json.dumps([home, lib]), content_type='application/json')

@login_required
def open_file(request, path):
    """ Open the file at path."""
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
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
@csrf_exempt
def save_file(request):
    """ View used to saved a newly edited file. """
    if not request.method == 'POST':
        return HttpResponseNotAllowed(['POST'])
        
    post = json.loads(request.body)
    path = post['path']
    content = post['content']
    try:
        if content:
            with open(join(settings.FILEBROWSER_ROOT, path), 'w') as f:
                print(content, file=f)
            return JsonResponse({'success': True})
    except Exception as e:
        return HttpResponseNotFound(str(e))

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
            shutil.copyfile(path, path+".bk")
            with open(path, 'w+') as f:  # Writting editor content into the file
                print(post['content'], file=f)
                
            directory = Directory.objects.get(name=post['directory'])
            rel_path = post['path'].replace(directory.name+"/", "/")
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
            shutil.move(path+".bk", path)
            return HttpResponse(
                json.dumps({'preview': preview}),
                content_type='application/json',
                status=200
            )
    
    elif post['requested_action'] == 'submit' :  # Answer from the preview
        if 'session_id' not in post['data'] or not post['data']['session_id']:
            HttpResponseBadRequest(content="Couldn't resolve ajax request")
        
        exercise = SessionTest.objects.get(pk=post['data']['session_id'])
        answer, feedback, context = exercise.evaluate(request, post['data']['answers'], test=True)

        return HttpResponse(
            json.dumps({
                "navigation": None,
                "exercise": exercise.get_exercise(request, answer=answer, context=context),
                "feedback": render_feedback(feedback),
            }),
            content_type='application/json'
        )
    
    return HttpResponseBadRequest(content="Couldn't resolve ajax request")
