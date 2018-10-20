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
    """ Used by the filebrowser module to navigate """
    print(settings.FILEBROWSER_ROOT)
    return render(request, 'filebrowser/filebrowser.html', {})

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
