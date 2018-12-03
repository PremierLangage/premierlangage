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
    return render(request, 'filebrowser/index.html')

def option_get_document(request):
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])

    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest('"path" parameter is missing')
    try:
        with open(to_abs_path(path)) as f:
            content = f.read()
        return JsonResponse({'content': content })
    except Exception as e:  # pragma: no cover
        msg = "Impossible to open '" + path + "' : " + htmlprint.code(str(type(e)) + ' - ' + str(e))
        messages.error(request, msg)
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
        return HttpResponseNotFound(msg)

def option_get_documents(request):
    userId = str(request.user.id)
    root = abspath(join(settings.FILEBROWSER_ROOT, userId))
    root_path_length = len(settings.FILEBROWSER_ROOT)

    repos = {}
    directories = {}

    def find_directory(path_components):
        if path_components[0] in directories:
            return directories[path_components[0]]
        directories[path_components[0]] = Directory.objects.get(name=path_components[0])
        return directories[path_components[0]]
    
    def find_repo(path):
        for k in repos.keys():
            if path.startswith(k):
                return repos[k]
        return None
    
    def walk_path(path, parent='', deep=0):
        node = {
            'parent': parent,
            'type': 'folder' if isdir(path) else 'file',
            'name': basename(path),
            'path': path[root_path_length + 1:],
            'icon': icon(path),
        }
        if node['type'] == 'folder':
            path_components = node['path'].split('/')
            directory = find_directory(path_components)

            node['read'] = directory.can_read(request.user)
            node['write'] = directory.can_write(request.user)

            repo = find_repo(path)
            if repo:
                node['repo'] = repo
            elif in_repository(path):
                repos[path] = node['repo'] = {
                    'url': repository_url(path),
                    'branch': repository_branch(path),
                    'host': repository_host(path),
                }
        try:
            node['children'] = [
                walk_path(join(path, contents), node['path'], deep + 1) 
                for contents in os.listdir(path) 
                if not hidden(join(path, contents))
            ]
            node['children'].sort(key=lambda e: e['type'], reverse=True)
            for child in node['children']:
                child['read'] = node['read']
                child['write'] = node['write']
                if 'repo' in node:
                    child['repo'] = node['repo']
        except OSError as e:
            if e.errno != errno.ENOTDIR:
                raise
        return node

    try:
        lib = walk_path(to_abs_path('lib'))
        home = walk_path(to_abs_path(userId))
        home["name"] = 'home'
        return HttpResponse(json.dumps([home, lib]), content_type='application/json')
    except Exception as e:
        return HttpResponseNotFound(str(e))

def option_update_document(request):
    """ View used to update a document (file). """
    if not request.method == 'POST':
        return HttpResponseNotAllowed(['POST'])
        
    post = json.loads(request.body.decode())
    
    path = post['path']
    if not path:
        return HttpResponseBadRequest('"path" parameter is missing')
    content = post['content']
    if not content:
        content = ''
    try:
        with open(to_abs_path(path), 'w') as f:
            print(content, file=f)
        return JsonResponse({'success': True})
    except Exception as e:
        return HttpResponseNotFound(str(e))

def option_create_document(request):
    """Create a new file or folder """
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    post = json.loads(request.body.decode())
    path = post['path']
    if not path:
        return HttpResponseBadRequest('"path" parameter is missing') 
    try:
        path = to_abs_path(path)
        name = path.split('/')[-1]
        
        def create_file():
            f = open(path, "w")
            content = post['content']
            if content:
                f.write(content)
            f.close()
            return JsonResponse({ 'icon': icon(path), 'status': 200})
        
        def create_folder():
            if isdir(path) or isfile(path):
                msg = "Can't create directory '{0}': this name is already used.".format(name)
                messages.error(request, msg)
                return HttpResponseBadRequest(msg)
            else:
                os.mkdir(path)
                return JsonResponse({ 'icon': icon(path), 'status': 200})

        if any(c in name for c in settings.FILEBROWSER_DISALLOWED_CHAR):
            msg = "Can't create file '{0}': name should not contain any of {1}.".format(name, settings.FILEBROWSER_DISALLOWED_CHAR)
            messages.error(request, msg)
            return HttpResponseBadRequest(msg)
        elif isdir(path) or isfile(path):
            msg = "Can't create file '" + name + "': this name is already used."
            messages.error(request, msg)
            return HttpResponseBadRequest(msg)
        elif post['type'] == 'file':
                return create_file()
        return create_folder()
    except Exception as e:  # pragma: no cover
        msg = "Impossible to create '{0}' : {1}".format(name, htmlprint.code(str(type(e)) + ' - ' + str(e)))
        messages.error(request, msg)
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
        return HttpResponseNotFound(msg)

def option_delete_document(request):
    """Delete a file or folder """
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    post = json.loads(request.body.decode())
    path = post['path']
    if not path:
        return HttpResponseBadRequest('"path" parameter is missing') 
    try:
        path = to_abs_path(path)
        if isdir(path):
            shutil.rmtree(path, ignore_errors=True)
        else:
            os.remove(path)
        return JsonResponse({ 'success': True })
    except Exception as e:  # pragma: no cover
        msg = "Impossible to delete '"+post['path']+"' : " + htmlprint.code(str(type(e)) + ' - ' + str(e))
        messages.error(request, msg)
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
        return HttpResponseNotFound(msg)

def option_rename_document(request):
    """Rename a  file or folder """
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    post = json.loads(request.body.decode())
    path = post['path']
    if not path:
        return HttpResponseBadRequest('"path" parameter is missing')
    target = post['target']
    if not target:
        return HttpResponseBadRequest('"target" parameter is missing')

    try:
        path = to_abs_path(path)
        name = path.split('/')[-1]
        new_path = path[:-len(name)] + target
     
        if any(c in target for c in settings.FILEBROWSER_DISALLOWED_CHAR):
            msg = "Can't rename '{0}' to {1}: name should not contain any of {2}."\
                  .format(name, target, settings.FILEBROWSER_DISALLOWED_CHAR)
            messages.error(request, msg)
            return HttpResponseBadRequest(msg)
        elif isdir(new_path) or isfile(new_path):
            msg = "Can't rename '{0}' to '{1}': this name is already used.".format(name, target)
            messages.error(request, msg)
            return HttpResponseBadRequest(msg)
        os.rename(path, new_path)
        return JsonResponse({'icon': icon(new_path), 'path': new_path, 'status': 200})
    except Exception as e:  # pragma: no cover
        msg = "Impossible to rename '{0}' to '{1}': {2}".format(name, target, htmlprint.code(str(type(e)) + ' - ' + str(e)))
        messages.error(request, msg)
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
        return HttpResponseNotFound(msg)


def option_clone(request):
    """Execute a git clone on the targeted entry with the informations of POST."""
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    post = json.loads(request.body.decode())
    username = post['username']
    password = post['password']
    destination = post['destination']
    path = post['path']
    url = post['url']
    if not url:
        return HttpResponseBadRequest("Missing 'url' parameter")
    
    if '@' in url:
        messages.error(request, "SSH link is not supported, please use HTTPS")
        
    else:
        path = to_abs_path(path)
        ret, out, err = gitcmd.clone(path, url, destination, username, password)
        if ret:
            msg = htmlprint.code(err + out)
            messages.error(request, msg)
            return HttpResponseNotFound(msg)
        else:
            msg = htmlprint.code(out + err)
            path = join(path, destination if destination else basename(splitext(url)[0]))
            ret, out, err = gitcmd.set_url(path, url)
            if not ret:
                return option_get_documents(request)
            else:
                messages.error(request, htmlprint.code(err + out))
                shutil.rmtree(path, ignore_errors=True)

    return HttpResponseNotFound()


def option_pull(request):
    """ Execute a git pull on the targeted entry with the informations of POST."""
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    post = json.loads(request.body.decode())
    username = post['username']
    password = post['password']
    path = post['path']
    ret, out, err = gitcmd.pull(to_abs_path(path), username=username, password=password)
    
    if not ret:
        return option_get_documents(request)
    else:
        return HttpResponseNotFound(htmlprint.code(err + out))

def option_push(request):
    """ Execute a git push on the targeted entry with the informations of POST."""
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    post = json.loads(request.body.decode())
    username = post['username']
    password = post['password']
    path = post['path']

    ret, out, err = gitcmd.push(to_abs_path(path), username=username, password=password)
    if not ret:
        return HttpResponse(htmlprint.code(out + err))
    else:
        return HttpResponseNotFound(htmlprint.code(err + out))

@login_required
@csrf_exempt
def option_preview_pl(request):
    """ Used by the PL editor to preview a PL and test the preview's answers"""
    if request.method != 'POST':
        return HttpResponse('405 Method Not Allowed', status=405)
    post = json.loads(request.body.decode())
    if post['requested_action'] == 'preview':  # Asking for preview
        path = post.get('path')
        if not path:
            return HttpResponseBadRequest("Missing parameter 'path'")
        
        path_components = path.split('/')
        directory = path_components[0]
        try:
            path = join(settings.FILEBROWSER_ROOT, path)
            shutil.copyfile(path, path + ".bk")
            with open(path, 'w+') as f:  # Writting editor content into the file
                print(post['content'], file=f)
            
            directory = Directory.objects.get(name=directory)
            file_path = join(*(path_components[1:]))
            pl, warnings = load_file(directory, file_path)
            if not pl:
                preview = '<div class="alert alert-danger" role="alert"> Failed to load \'' \
                          + basename(file_path) + "': \n" + warnings + "</div>"
            else:
                if warnings:
                    [messages.warning(request, warning) for warning in warnings]
                pl.save()
                exercise = SessionTest.objects.create(pl=pl, user=request.user)
                preview = exercise.get_exercise(request)
        
        except Exception as e:  # pragma: no cover
            preview = ('<div class="alert alert-danger" role="alert"> Failed to load \''
                       + basename(file_path) + "': \n\n"
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
                "feedback"  : feedback,#render_feedback(feedback),
            }),
            content_type='application/json'
        )
    
    return HttpResponseBadRequest(content="Couldn't resolve ajax request")

@login_required
def option_load_pltp(request):
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])

    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest('"path" parameter is missing')

    try:
        path_components = path.split('/')
        directory = Directory.objects.get(name=path_components[0])
        file_path = join(*(path_components[1:]))
        pltp, warnings = load_file(directory, file_path, True)

        if not pltp and not warnings:  # pragma: no cover
            return HttpResponseBadRequest("This PLTP is already loaded")
        elif not pltp:  # pragma: no cover
            messages.error("Failed to load '"+path+"': \n"+warnings)
            return HttpResponseBadRequest("Failed to load '"+path+"': \n"+warnings)
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
        messages.error(msg)
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())

    return HttpResponseBadRequest()

@login_required
def option_test_pl(request):
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])

    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest('"path" parameter is missing')
    
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




OPTIONS = {
    'get_document':         option_get_document,
    'get_documents':        option_get_documents,
    'update_document':      option_update_document,
    'create_document':      option_create_document,
    'delete_document':      option_delete_document,
    'rename_document':      option_rename_document,
    'git_clone':            option_clone,
    'git_pull':             option_pull,
    'git_push':             option_push,
    'test_pl':              option_test_pl,
    'load_pltp':            option_load_pltp,
    'preview_pl':           option_preview_pl,
}

@login_required
#@csrf_exempt
def option(request):
    option = request.GET.get('name')
    if request.method == 'POST':
        post = json.loads(request.body.decode())
        option = post.get('name')

    if not option:
        return HttpResponseBadRequest("'name' parameter is missing")
    try:
        return OPTIONS[option](request)
    except Exception as e:
        return HttpResponseBadRequest()
    return HttpResponseBadRequest()