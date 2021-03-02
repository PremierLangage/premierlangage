import json
import os
import shutil
import subprocess
import uuid
from wsgiref.util import FileWrapper

import htmlprint
import requests
from django.conf import settings
from django.contrib import messages
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import (HttpResponse, HttpResponseBadRequest, HttpResponseNotAllowed,
                         HttpResponseNotFound, JsonResponse)
from django.shortcuts import get_object_or_404, render, redirect
from django.template.loader import get_template
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET, require_POST

from activity.models import Activity
from filebrowser.filter import is_root
from filebrowser.models import Directory
from filebrowser.utils import (HOME_DIR, LIB_DIR, add_commit_path, get_content, get_meta,
                               join_fb_root, reload_activity, rm_fb_root, walkalldirs)
from loader.loader import load_file
from loader.models import PL
from loader.utils import get_location
from playexo.models import SessionTest
from shared.utils import missing_parameter



@login_required
@require_POST
@csrf_exempt
def upload_resource(request):  # TODO ADD TEST
    """ Allow the user to upload a file in the filebrowser """
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    f = request.FILES.get('file')
    if not f:
        return HttpResponseBadRequest(missing_parameter('file'))
    
    path = request.POST.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    name = f.name
    try:
        path = os.path.join(join_fb_root(path), name)
        if os.path.exists(path):
            return HttpResponseBadRequest("This file's name is already used : " + name)
        else:
            with open(path, 'wb+') as dest:
                for chunk in f.chunks():
                    dest.write(chunk)
            return HttpResponse()
    
    except Exception as e:  # pragma: no cover
        msg = "Impossible to upload '" + path + "' : " + htmlprint.code(
            str(type(e)) + ' - ' + str(e))
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
        return HttpResponseNotFound(msg)



@require_GET
def get_resource(request):
    """Return the content of <path>."""
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    
    try:
        path = join_fb_root(path)
        return JsonResponse({
            'content': get_content(path),
            'meta':    get_meta(path)
        })
    except Exception as e:  # pragma: no cover
        msg = f"Impossible to open '{rm_fb_root(path)}' : {htmlprint.code(str(e))}"
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
            msg += f"{request} : DEBUG set to True: {htmlprint.html_exc()}"
        return HttpResponseNotFound(msg)



@require_GET
def get_resources(request):
    """Returns home + lib directory structure."""
    try:
        return HttpResponse(json.dumps(walkalldirs(request)), content_type='application/json')
    except Exception as e:  # pragma: no cover
        return HttpResponseNotFound(str(e))



@require_POST
def update_resource(request):
    """ View used to update a resource (file). """
    post = json.loads(request.body.decode())
    
    path = post.get("path")
    if path is None:
        return HttpResponseBadRequest(missing_parameter('path'))
    
    try:
        with open(join_fb_root(path), 'w') as f:
            print(post.get('content', ''), file=f, end='')
        if not path.startswith("lib/"):
            add_commit_path(request, path, action="modified")
        return JsonResponse({'success': True})
    except Exception as e:  # pragma: no cover
        return HttpResponseNotFound(str(e))



@require_POST
def create_resource(request):
    """Create a new file or folder """
    post = json.loads(request.body.decode())
    path = post.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    
    path = join_fb_root(path)
    name = os.path.basename(path)
    
    try:
        if any(c in name for c in settings.FILEBROWSER_DISALLOWED_CHAR):
            msg = "Can't create '%s': name should not contain any of %s."
            return HttpResponseBadRequest(msg % (name, str(settings.FILEBROWSER_DISALLOWED_CHAR)))
        
        if os.path.exists(path):
            return HttpResponseBadRequest("Can't create '%s': this name is already used." % name)
        if post.get('type', '') == 'file':
            with open(path, "w") as f:
                print(post.get('content', ''), file=f)
            
            return JsonResponse({'path': rm_fb_root(path)})
        
        else:
            os.mkdir(path)
            return JsonResponse({'path': rm_fb_root(path)})
    except Exception as e:  # pragma: no cover
        msg = "Impossible to create '{0}' : {1}".format(name, htmlprint.code(
            str(type(e)) + ' - ' + str(e)))
        messages.error(request, msg)
        if settings.DEBUG:
            msg += ("DEBUG set to True: " + htmlprint.html_exc())
        return HttpResponseNotFound(msg)



@require_POST
def delete_resource(request):
    """Delete a file or folder """
    post = json.loads(request.body.decode())
    
    path = post.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    
    if is_root(path):
        return HttpResponseBadRequest('cannot delete a root folder')
    
    try:
        path = join_fb_root(path)
        shutil.rmtree(path, ignore_errors=True) if os.path.isdir(path) else os.remove(path)
        if not path.startswith("lib/"):
            add_commit_path(request, path, action="deleted")
        return JsonResponse({'success': True})
    except Exception as e:  # pragma: no cover
        path = path.replace(settings.FILEBROWSER_ROOT, '')
        error = htmlprint.code(str(e).replace(settings.FILEBROWSER_ROOT, ''))
        msg = "Impossible to delete '%s' : %s" % (path, error)
        if settings.DEBUG:
            msg += ("DEBUG: " + htmlprint.html_exc())
        return HttpResponseNotFound(msg)



@require_POST
def rename_resource(request):
    """Rename a  file or folder """
    post = json.loads(request.body.decode())
    
    path = post.get('path')
    target = post.get('target')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    if not target:
        return HttpResponseBadRequest(missing_parameter('target'))
    
    path = join_fb_root(path)
    name = os.path.basename(path)
    new_path = os.path.join(os.path.dirname(path), target)
    
    try:
        if any(c in target for c in settings.FILEBROWSER_DISALLOWED_CHAR):
            msg = "Can't rename '{0}' to '{1}': name should not contain any of {2}." \
                .format(name, target, settings.FILEBROWSER_DISALLOWED_CHAR)
            return HttpResponseBadRequest(msg)
        if os.path.exists(new_path):
            msg = "Can't rename '{0}' to '{1}': this name is already used.".format(name, target)
            return HttpResponseBadRequest(msg)
        
        os.rename(path, new_path)
        return JsonResponse(
            {'path': rm_fb_root(new_path), 'status': 200})
    except Exception as e:  # pragma: no cover
        msg = "Impossible to rename '{0}' to '{1}': {2}".format(name, target, htmlprint.code(
            str(type(e)) + ' - ' + str(e)))
        if settings.DEBUG:
            msg += ("DEBUG set to True: " + htmlprint.html_exc())
        return HttpResponseNotFound(msg)



@require_POST
def move_resource(request):
    """ Move post.get('path'] to POST['dst')."""
    post = json.loads(request.body.decode())
    src = post.get('path')
    if not src:
        return HttpResponseBadRequest(missing_parameter('path'))
    
    dst = post.get('dst')
    if not dst:
        return HttpResponseBadRequest(missing_parameter('dst'))
    try:
        src_path = join_fb_root(src)
        dst_path = join_fb_root(dst)
        
        if src == dst:
            return HttpResponseNotFound("Can't move a directory inside itself")
        elif not os.path.isdir(dst_path):
            return HttpResponseNotFound('"{0}" is not a directory'.format(dst))
        elif dst_path.startswith(src_path):
            return HttpResponseNotFound("Can't move {0} inside {1}".format(src, dst))
        else:
            destination = os.path.join(dst_path, os.path.basename(src))
            if os.path.exists(destination):
                return HttpResponseNotFound(
                    "{0} already exists inside {1}".format(os.path.basename(src), dst))
            else:
                if post.get('copy'):
                    if os.path.isdir(src_path):
                        shutil.copytree(src_path, destination)
                    else:
                        shutil.copyfile(src_path, destination)
                else:
                    os.rename(src_path, destination)
                return JsonResponse({'path': os.path.join(dst, os.path.basename(src))})
    
    except Exception as e:  # pragma: no cover
        msg = "Impossible to copy '" + os.path.basename(src) + "' : " + htmlprint.code(
            str(type(e)) + ' - ' + str(e))
        return HttpResponseNotFound(msg)



@require_GET
def download_resource(request):
    """Returns a download url to the resource at GET['path'] """
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    path = join_fb_root(path)
    filename = os.path.basename(path)
    if os.path.isdir(path):
        archive = shutil.make_archive(path, 'zip', path)
        response = HttpResponse(
            FileWrapper(open(archive, 'rb')),
            content_type='application/zip'
        )
        response['Content-Disposition'] = 'attachment; filename=%s.zip' % filename
    else:
        with open(path, 'rb') as fp:
            data = fp.read()
        response = HttpResponse(content_type="application/force-download")
        response[
            'Content-Disposition'] = 'attachment; filename=%s' % filename  # force browser to
        # download file
        response.write(data)
    return response



@login_required
@require_GET
def load_pltp(request):
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    
    try:
        path_components = path.split('/')
        directory = Directory.objects.get(name=path_components[0])
        relative = os.path.join(*(path_components[1:]))
        pltp, warnings = load_file(directory, relative)
        
        if not pltp and not warnings:  # pragma: no cover
            return HttpResponseBadRequest("This PLTP is already loaded")
        elif not pltp:  # pragma: no cover
            return HttpResponseBadRequest("Failed to load '" + path + "': \n" + warnings)
        else:
            msg = ''
            if warnings:  # pragma: no cover
                for warning in warnings:
                    msg += str(warning)
            pltp.teacher.add(request.user)
            url_lti = request.build_absolute_uri(reverse("activity:play", args=[pltp.pk]))
            
            msg += "L'activité <b>'" + pltp.name + "'</b> a bien été créée et a pour URL LTI: \
                    <br>&emsp;&emsp;&emsp; <input id=\"copy\" style=\"width: 700px;\" value=\"" + \
                   url_lti + "\" readonly>  \
                    <a target='_blank' rel='noopener noreferrer' class='btn btn-dark' href='" + \
                   url_lti + "'><i class='far fa-eye'></i> OPEN\
                    </a>"
            
            return HttpResponse(msg)
    except Exception as e:  # pragma: no cover
        msg = "Impossible to load '" + path + "' : " + htmlprint.code(str(type(e)) + ' - ' + str(e))
        if settings.DEBUG:
            msg += ("DEBUG set to True: " + htmlprint.html_exc())
        return HttpResponseBadRequest(msg)



@require_POST
def reload_pltp(request):
    """Reload a given activity with the targeted PLTP."""
    post = json.loads(request.body.decode())
    path = post.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    activity_id = post.get('activity_id')
    if not activity_id:
        return HttpResponseBadRequest(missing_parameter('activity_id'))
    activity = Activity.objects.get(id=activity_id)
    if not activity.is_teacher(request.user):
        return HttpResponse("Vous n'avez pas le droit de recharger cette activité")
    return reload_activity(path, activity)



@login_required
@require_GET
def test_pl(request):
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    
    try:
        path_components = path.split('/')
        directory = Directory.objects.get(name=path_components[0])
        relative = os.path.join(*(path_components[1:]))
        pl, warnings = load_file(directory, relative)
        
        if not pl:
            return HttpResponseBadRequest(warnings.replace(settings.FILEBROWSER_ROOT, ""))
        
        pl.save()
        exercise = SessionTest.objects.create(pl=pl, user=request.user)
        preview = exercise.get_exercise(request)
        
        return render(request, 'filebrowser/test.html', {
            'preview': preview,
            'id':      pl.id,
        })
    except Exception as e:  # pragma: no cover
        msg = ("Impossible to test '" + os.path.basename(path) + "' : " + htmlprint.code(
            str(type(e)) + ' - ' + str(e)))
        return HttpResponseBadRequest(msg.replace(settings.FILEBROWSER_ROOT, ""))



@login_required
@csrf_exempt
@require_POST
def preview_pl(request):
    """ Used by the PL editor to preview a PL"""
    
    post = json.loads(request.body.decode())
    exists = True
    path = post.get('path')
    if not path:
        exists = False
        path = os.path.join(HOME_DIR, str(uuid.uuid4()))
        path += '.pl'
    
    content = post.get('content', '')
    
    path_components = path.split('/')
    directory = path_components[0]
    try:
        path = os.path.join(settings.FILEBROWSER_ROOT, path)
        if exists:
            shutil.copyfile(path, path + ".bk")
        
        with open(path, 'w+') as f:  # Writting editor content into the file
            print(content, file=f)
        
        directory = Directory.objects.get(name=directory)
        relative = os.path.join(*(path_components[1:]))
        pl, warnings = load_file(directory, relative)
        if not pl:
            preview = '<div class="alert alert-danger" role="alert"> 1 Failed to load \'' \
                      + os.path.basename(relative) + "': \n" + warnings + "</div>"
        else:
            if warnings:
                [messages.warning(request, warning) for warning in warnings]
            pl.save()
            exercise = SessionTest.objects.create(pl=pl, user=request.user)
            preview = exercise.get_exercise(request)
    except Exception as e:  # pragma: no cover
        preview = ('<div class="alert alert-danger" role="alert"> 3 Failed to load \''
                   + os.path.basename(relative) + "': \n\n"
                   + htmlprint.code(str(e)))
        if settings.DEBUG:
            preview += "\n\nDEBUG set to True:\n" + htmlprint.html_exc()
        preview += "</div>"
    finally:
        if exists:
            shutil.move(path + ".bk", path)
        else:
            os.remove(path)
        
        preview = get_template("filebrowser/preview.html").render({'preview': preview}, request)
        return HttpResponse(
            json.dumps({'preview': preview}),
            content_type='application/json',
            status=200
        )



@login_required
@csrf_exempt
@require_POST
def evaluate_pl(request):
    """ Used by the PL editor to evaluate the answer from a previewed PL"""
    post = json.loads(request.body.decode())
    data = post.get('data', {})
    if 'session_id' not in data or not data['session_id']:
        return HttpResponseBadRequest(content="Couldn't resolve ajax request")
    
    exercise = SessionTest.objects.get(pk=data['session_id'])
    answer, feedback = exercise.evaluate(request, data['answers'], test=True)
    
    return HttpResponse(
        json.dumps({
            "navigation": None,
            "exercise":   exercise.get_exercise(request, answer=answer),
            "feedback":   feedback,
        }),
        content_type='application/json'
    )



@login_required
@require_GET
def resolve_path(request):  # TODO ADD TEST
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    target = request.GET.get('target')
    if not target:
        return HttpResponseBadRequest(missing_parameter('target'))
    
    try:
        path_components = path.split('/')
        directory = Directory.objects.get(name=path_components[0])
        current = path_components[1] if len(path_components) == 2 else \
            os.path.join(*path_components[1:-1])
        directory, path = get_location(directory, target, current=current)
        return HttpResponse(os.path.join(directory, path))
    
    except Exception as e:
        msg = "Impossible to resolve the path '" + request.GET.get(
            'target') + "' : " + htmlprint.code(str(type(e)) + ' - ' + str(e))
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
        return HttpResponseNotFound(msg)



@login_required
@require_GET
def search_in_files(request):  # TODO ADD TEST
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    query = request.GET.get('query')
    if not query:
        return HttpResponseBadRequest(missing_parameter('query'))
    
    cwd = os.getcwd()
    try:
        if (not path.startswith(HOME_DIR) and not path.startswith(LIB_DIR)):
            return HttpResponseBadRequest('cannot search outside of root directories')
        path = join_fb_root(path)
        if not os.path.isdir(path):
            return HttpResponseBadRequest('path should point to a directory')
        os.chdir(path)
        p = subprocess.Popen("grep -nr '{0}' .".format(query), stdout=subprocess.PIPE,
                             stderr=subprocess.PIPE, shell=True)
        out, err = p.communicate()
    finally:
        os.chdir(cwd)
    
    ret, out, err = p.returncode, out.decode().strip("\n"), err.decode()
    if not ret:
        return HttpResponse(out)
    else:  # pragma: no cover
        return HttpResponseNotFound(htmlprint.code(out + err))



@login_required
@require_GET
def download_env(request, envid):
    r = requests.get(os.path.join(settings.SANDBOX, "environments", envid, ""))
    response = HttpResponse(r)
    response['Content-Type'] = "application/gzip"
    response['Content-Disposition'] = r.headers['Content-Disposition']
    return response



@login_required
@csrf_exempt
def option(request):
    opt = request.GET.get('name')
    if request.method == 'POST':
        post = json.loads(request.body.decode())
        opt = post.get('name')
    
    if not opt:
        return HttpResponseBadRequest(missing_parameter('name'))
    
    try:
        return globals()[opt](request)
    except Exception as e:
        return HttpResponseBadRequest("Cannot use option %s: %s" % (opt, str(e)))



def demo(request, pl_id):
    if not request.user.is_authenticated:
        login(request, User.objects.get(username="Anonymous"),
              backend="django.contrib.auth.backends.ModelBackend")
        return redirect(reverse("filebrowser:demo", args=[pl_id]))
    
    pl = get_object_or_404(PL, id=pl_id)
    
    exercise = SessionTest.objects.create(pl=pl, user=request.user)
    preview = exercise.get_exercise(request)
    
    return render(request, 'filebrowser/test.html', {
        'preview': preview,
    })
