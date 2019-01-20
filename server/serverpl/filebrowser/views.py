import json
import os
import shutil

import gitcmd
import htmlprint
import requests
from django.conf import settings
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.http import (HttpResponse, HttpResponseBadRequest, HttpResponseNotFound, JsonResponse)
from django.shortcuts import render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET, require_POST

from filebrowser.filter import is_root
from filebrowser.gitcmd_extensions import show_last_revision
from filebrowser.models import Directory
from filebrowser.utils import fa_icon, join_fb_root, walkdir
from loader.loader import load_file, reload_pltp as rp
from playexo.models import Activity, SessionTest



@login_required
def index(request):
    """ Used by the editor module to navigate """
    return render(request, 'filebrowser/index.html')



@require_GET
def get_resource(request):
    """Return the content of <path>."""
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest('"path" parameter is missing')
    
    try:
        with open(join_fb_root(path)) as f:
            content = f.read()
        return JsonResponse({'content': content})
    except Exception as e:  # pragma: no cover
        msg = "Impossible to open '" + path + "' : " + htmlprint.code(str(type(e)) + ' - ' + str(e))
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
        return HttpResponseNotFound(msg)



def get_resources(request):
    """Returns home + lib directory structure."""
    try:
        lib = walkdir(join_fb_root('lib'), request.user)
        home = walkdir(join_fb_root(str(request.user.id)), request.user)
        home["name"] = 'home'
        return HttpResponse(json.dumps([home, lib]), content_type='application/json')
    except Exception as e:
        return HttpResponseNotFound(str(e))



@require_POST
def update_resource(request):
    """ View used to update a resource (file). """
    post = json.loads(request.body.decode())
    
    path = post.get("path")
    if path is None:
        return HttpResponseBadRequest('"path" parameter is missing')
    
    try:
        with open(join_fb_root(path), 'w') as f:
            print(post.get('content', ''), file=f)
        return JsonResponse({'success': True})
    except Exception as e:
        return HttpResponseNotFound(str(e))



@require_POST
def create_resource(request):
    """Create a new file or folder """
    post = json.loads(request.body.decode())
    path = post.get('path')
    if not path:
        return HttpResponseBadRequest('"path" parameter is missing')

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
            return JsonResponse({'icon': fa_icon(path), 'path': path})
        
        else:
            os.mkdir(path)
            return JsonResponse({'icon': fa_icon(path), 'path': path})
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
        return HttpResponseBadRequest('"path" parameter is missing')
    if is_root(path):
        return HttpResponseBadRequest('cannot delete a root folder')
    
    try:
        path = join_fb_root(path)
        shutil.rmtree(path, ignore_errors=True) if os.path.isdir(path) else os.remove(path)
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
        return HttpResponseBadRequest('"path" parameter is missing')
    if not target:
        return HttpResponseBadRequest('"target" parameter is missing')

    path = join_fb_root(path)
    name = path.split('/')[-1]
    new_path = path[:-len(name)] + target
    
    try:
        if any(c in target for c in settings.FILEBROWSER_DISALLOWED_CHAR):
            msg = "Can't rename '{0}' to {1}: name should not contain any of {2}." \
                .format(name, target, settings.FILEBROWSER_DISALLOWED_CHAR)
            return HttpResponseBadRequest(msg)
        if os.path.exists(new_path):
            msg = "Can't rename '{0}' to '{1}': this name is already used.".format(name, target)
            return HttpResponseBadRequest(msg)
        
        os.rename(path, new_path)
        return JsonResponse({'icon': fa_icon(new_path), 'path': new_path, 'status': 200})
    except Exception as e:  # pragma: no cover
        msg = "Impossible to rename '{0}' to '{1}': {2}".format(name, target, htmlprint.code(
                str(type(e)) + ' - ' + str(e)))
        if settings.DEBUG:
            msg += ("DEBUG set to True: " + htmlprint.html_exc())
        return HttpResponseNotFound(msg)



@require_POST
def move_resource(request):
    """ Move POST['path'] to POST['dst']."""
    post = json.loads(request.body.decode())
    src = post.get('path')
    if not src:
        return HttpResponseBadRequest('"path" parameter is missing')
    
    # TODO check write rights in dst
    dst = post.get('dst')
    if not dst:
        return HttpResponseBadRequest('"dst" parameter is missing')
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
                os.rename(src_path, destination)
                return JsonResponse({'path': os.path.join(dst, os.path.basename(src))})
    
    except Exception as e:  # pragma: no cover
        msg = "Impossible to copy '" + os.path.basename(src) + "' : " + htmlprint.code(
                str(type(e)) + ' - ' + str(e))
        return HttpResponseNotFound(msg)



@require_POST
def git_clone(request):
    """Execute a git clone on the targeted entry with the informations of POST."""
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
        path = join_fb_root(path)
        ret, out, err = gitcmd.clone(path, url, destination, username, password)
        if ret:
            return HttpResponseNotFound(htmlprint.code(err + out))
        else:
            path = (
                os.path.join(path, destination) if destination
                else os.path.basename(os.path.splitext(url)[0])
            )
            ret, out, err = gitcmd.set_url(path, url)
            if not ret:
                return get_resources(request)
            else:
                shutil.rmtree(path, ignore_errors=True)
                return HttpResponseNotFound(htmlprint.code(err + out))
    
    return HttpResponseNotFound()



@require_POST
def git_pull(request):
    """ Execute a git pull on the targeted entry with the informations of POST."""
    post = json.loads(request.body.decode())
    username = post['username']
    password = post['password']
    path = post['path']
    ret, out, err = gitcmd.pull(join_fb_root(path), username=username, password=password)
    
    if not ret:
        return get_resources(request)
    else:
        return HttpResponseNotFound(htmlprint.code(err + out))



@require_POST
def git_push(request):
    """ Execute a git push on the targeted entry with the informations of POST."""
    post = json.loads(request.body.decode())
    
    username = post.get('username', None)
    password = post.get('password', None)
    path = post.get('path', None)
    if not path:
        return HttpResponseBadRequest("parameter 'path' is missing")
    
    ret, out, err = gitcmd.push(join_fb_root(path), username=username, password=password)
    if not ret:
        return HttpResponse(htmlprint.code(out + err))
    else:
        return HttpResponseNotFound(htmlprint.code(err + out))



@require_GET
def git_status(request):
    """ Execute a git status on the targeted entry."""
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest("parameter 'path' is missing")
    ret, out, err = gitcmd.status(join_fb_root(path))
    
    if not ret:
        return HttpResponse(htmlprint.code(out + err))
    else:  # pragma: no cover
        return HttpResponseNotFound(htmlprint.code(out + err))



@require_GET
def git_show(request):
    """ Execute a git show on the targeted entry."""
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest("parameter 'path' is missing")
    try:
        ret, out, err = show_last_revision(join_fb_root(path))
        if not ret:
            return HttpResponse(out)
        else:  # pragma: no cover
            return HttpResponseNotFound(htmlprint.code(out + err))
    except Exception as e:  # pragma: no cover
        msg = htmlprint.code(str(type(e)) + ' - ' + str(e))
        return HttpResponseNotFound(msg)



@require_GET
def git_add(request):
    """ Execute a git add on the targeted entry."""
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest("parameter 'path' is missing")
    ret, out, err = gitcmd.add(join_fb_root(path))
    if not ret:
        return HttpResponse("Entry successfully added to the index.")
    else:  # pragma: no cover
        return HttpResponseNotFound("Nothing to add." if not err else htmlprint.code(err + out))



@require_POST
def git_commit(request):
    """ Execute an add and commit of the targeted entry with the informations of POST. """
    
    post = json.loads(request.body.decode())
    path = post.get('path')
    if not path:
        return HttpResponseBadRequest("parameter 'path' is missing")
    commit = post.get('commit')
    if not commit:
        return HttpResponseBadRequest("Missing 'commit' parameter")
    
    ret, out, err = gitcmd.commit(join_fb_root(path), commit)
    if not ret:
        return HttpResponse(htmlprint.code(out + err))
    else:  # pragma: no cover
        return HttpResponseNotFound(htmlprint.code(err + out))



@login_required
@csrf_exempt
def preview_pl(request):
    """ Used by the PL editor to preview a PL and test the preview's answers"""
    if request.method != 'POST':
        return HttpResponse('405 Method Not Allowed', status=405)
    post = json.loads(request.body.decode())
    if post.get('requested_action', '') == 'preview':  # Asking for preview
        path = post.get('path')
        if not path:
            return HttpResponseBadRequest("Missing parameter 'path'")
        
        path_components = path.split('/')
        directory = path_components[0]
        try:
            path = os.path.join(settings.FILEBROWSER_ROOT, path)
            shutil.copyfile(path, path + ".bk")
            with open(path, 'w+') as f:  # Writting editor content into the file
                print(post.get('content', ''), file=f)
            
            directory = Directory.objects.get(name=directory)
            file_path = os.path.join(*(path_components[1:]))
            pl, warnings = load_file(directory, file_path)
            if not pl:
                preview = '<div class="alert alert-danger" role="alert"> Failed to load \'' \
                          + os.path.basename(file_path) + "': \n" + warnings + "</div>"
            else:
                if warnings:
                    [messages.warning(request, warning) for warning in warnings]
                pl.save()
                exercise = SessionTest.objects.create(pl=pl, user=request.user)
                preview = exercise.get_exercise(request)
        
        except Exception as e:  # pragma: no cover
            preview = ('<div class="alert alert-danger" role="alert"> Failed to load \''
                       + os.path.basename(file_path) + "': \n\n"
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
    
    elif post.get('requested_action', '') == 'submit':  # Answer from the preview
        data = post.get('data', {})
        if 'session_id' not in data or not data['session_id']:
            HttpResponseBadRequest(content="Couldn't resolve ajax request")
        
        exercise = SessionTest.objects.get(pk=data['session_id'])
        answer, feedback, context = exercise.evaluate(request, data['answers'], test=True)
        
        return HttpResponse(
                json.dumps({
                    "navigation": None,
                    "exercise"  : exercise.get_exercise(request, answer=answer, context=context),
                    "feedback"  : feedback,  # render_feedback(feedback),
                }),
                content_type='application/json'
        )
    
    return HttpResponseBadRequest(content="Couldn't resolve ajax request")



@login_required
@require_GET
def load_pltp(request):
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest('"path" parameter is missing')
    
    try:
        path_components = path.split('/')
        directory = Directory.objects.get(name=path_components[0])
        file_path = os.path.join(*(path_components[1:]))
        pltp, warnings = load_file(directory, file_path)
        
        if not pltp and not warnings:  # pragma: no cover
            return HttpResponseBadRequest("This PLTP is already loaded")
        elif not pltp:  # pragma: no cover
            return HttpResponseBadRequest("Failed to load '" + path + "': \n" + warnings)
        else:
            msg = ''
            if warnings:  # pragma: no cover
                for warning in warnings:
                    msg += str(warning)
            activity = Activity.objects.create(name=pltp.name, pltp=pltp)
            url_lti = request.build_absolute_uri(reverse("playexo:activity", args=[activity.pk]))
            
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
        return HttpResponseBadRequest("parameter 'path' is missing")
    activity_id = post.get('activity_id')
    if not activity_id:
        return HttpResponseBadRequest("Missing 'activity_id' parameter")
    try:
        activity = Activity.objects.get(id=activity_id)
        path_components = path.split('/')
        directory = Directory.objects.get(name=path_components[0])
        file_path = os.path.join(*(path_components[1:]))
        pltp, warnings = rp(directory, file_path, activity.pltp)
        
        if not pltp and not warnings:  # pragma: no cover
            return HttpResponse("This PLTP is already loaded")
        elif not pltp:  # pragma: no cover
            return HttpResponseNotFound("Failed to load '%s': \n%s"
                                        % (os.path.basename(path), warnings.join("\n")))
        else:
            activity.reload()
            msg = ''
            if warnings:  # pragma: no cover
                for warning in warnings:
                    msg += str(warning)
            return HttpResponse(msg + "L'activité <b>'" + pltp.name + "'</b> a bien été rechargé.")
    except Exception as e:  # pragma: no cover
        msg = "Impossible to load '" + os.path.basename(path) + "' : " + htmlprint.code(
                str(type(e)) + ' - ' + str(e))
        if settings.DEBUG:
            msg += ("DEBUG set to True: " + htmlprint.html_exc())
        return HttpResponseNotFound(msg)



@login_required
@require_GET
def test_pl(request):
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest('"path" parameter is missing')
    
    try:
        path_components = path.split('/')
        directory = Directory.objects.get(name=path_components[0])
        file_path = os.path.join(*(path_components[1:]))
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
        msg = ("Impossible to test '" + os.path.basename(path) + "' : " + htmlprint.code(
                str(type(e)) + ' - ' + str(e)))
        return HttpResponseBadRequest(msg.replace(settings.FILEBROWSER_ROOT, ""))



@login_required
def download_env(request, envid):
    r = requests.get(os.path.join(settings.SANDBOX, "env", envid, ""))
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
        return HttpResponseBadRequest("'name' parameter is missing")
    
    try:
        return globals()[opt](request)
    except Exception as e:
        return HttpResponseBadRequest("Cannot use apply option %s: %s" % (opt, str(e)))
