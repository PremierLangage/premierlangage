import json
import os
import re
import shutil
import subprocess
from wsgiref.util import FileWrapper

import gitcmd
import htmlprint
import requests
from django.conf import settings
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.http import (HttpResponse, HttpResponseBadRequest, HttpResponseNotAllowed,
                         HttpResponseNotFound, JsonResponse)
from django.shortcuts import render
from django.template.loader import get_template
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET, require_POST

from filebrowser.filter import in_repository, is_root
from filebrowser.models import Directory
from filebrowser.utils import (HOME_DIR, LIB_DIR, exec_git_cmd, get_content, get_meta,
                               join_fb_root, missing_parameter, repository_branch, repository_url,
                               rm_fb_root, walkalldirs)
from loader.loader import load_file, reload_pltp as rp
from loader.utils import get_location
from playexo.models import Activity, SessionTest



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
        msg = "Impossible to open '" + rm_fb_root(path) + "' : " + htmlprint.code(
            str(type(e)) + ' - ' + str(e))
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
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
            print(post.get('content', ''), file=f)
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



@require_GET
def git_changes(request):
    error = ''
    response = {}
    
    
    def extract_changes(path):
        roots = os.listdir(join_fb_root(path))
        directory = Directory.objects.get(name=path)
        if not directory.can_write(request.user):
            return True
        
        for root in roots:
            full_path = join_fb_root(os.path.join(path, root))
            if not in_repository(full_path):
                continue
            
            
            def parse_change(change):
                tmp = change.strip().split(' ')
                ftype = tmp[0]
                fpath = os.path.join(path, root, tmp[-1])  # Yggdrasil + Repo + File
                isdir = fpath.endswith('/')
                name = fpath.split('/')[-2] if isdir else os.path.basename(fpath)
                return {'name': name, 'type': ftype, 'path': fpath, 'isdir': isdir}
            
            
            ret, out, err = exec_git_cmd(full_path, 'git status --short')
            
            if not ret:
                changes = out.split("\n")
                changes = [parse_change(x) for x in changes if
                           x and '..' not in x]  # only result in home/
                changes = [x for x in changes if x['type'] != 'A']  # remove added entries
                key = repository_url(full_path)
                value = response.get(key)
                if value:
                    value['changes'] = value['changes'] + changes if value.get(
                        'changes') else changes
                else:
                    value = {
                        'path':   os.path.join(path, root),
                        'branch': repository_branch(full_path), 'changes': changes
                    }
                response[key] = value
            else:  # pragma: no cover
                return False
        return True
    
    
    for e in ['Yggdrasil', 'lib']:
        if not extract_changes(e):
            return HttpResponseNotFound(error)
    
    return HttpResponse(json.dumps(response), content_type='application/json')



@require_POST
def git_clone(request):
    """Execute a git clone on the targeted entry with the informations of POST."""
    post = json.loads(request.body.decode())
    username = post.get('username')
    password = post.get('password')
    destination = post.get('destination')
    path = post.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    
    url = post.get('url')
    if not url:
        return HttpResponseBadRequest(missing_parameter('url'))
    
    if '@' in url:
        return HttpResponseNotFound("SSH link is not supported, please use HTTPS")
    
    path = join_fb_root(path)
    try:
        ret, out, err = gitcmd.clone(path, url, destination, username, password)
        if ret:  # pragma: no cover
            raise Exception(err + out)
        else:
            path = (
                os.path.join(path, destination) if destination
                else os.path.join(path, os.path.basename(os.path.splitext(url)[0]))
            )
            message = htmlprint.code(out + err)
            ret, out, err = gitcmd.set_url(path, url)
            if not ret:
                return HttpResponse(message + htmlprint.code(out + err))
            else:  # pragma: no cover
                shutil.rmtree(path, ignore_errors=True)
                raise Exception(err + out)
    except Exception as e:  # pragma: no cover
        return HttpResponseNotFound(str(e))



@require_POST
def git_pull(request):
    """ Execute a git pull on the targeted entry with the informations of POST."""
    post = json.loads(request.body.decode())
    username = post.get('username')
    password = post.get('password')
    url = post.get('url')
    path = post.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    
    ret, out, err = gitcmd.pull(join_fb_root(path), username=username, password=password, url=url)
    
    if not ret:
        return HttpResponse(htmlprint.code(out + err))
    else:  # pragma: no cover
        return HttpResponseNotFound(htmlprint.code(err + out))



@require_POST
def git_push(request):
    """ Execute a git push on the targeted entry with the informations of POST."""
    post = json.loads(request.body.decode())
    
    username = post.get('username', None)
    password = post.get('password', None)
    path = post.get('path', None)
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    
    ret, out, err = gitcmd.push(join_fb_root(path), username=username, password=password)
    if not ret:
        return HttpResponse(htmlprint.code(out + err))
    else:  # pragma: no cover
        return HttpResponseNotFound(htmlprint.code(err + out))



@require_GET
def git_status(request):
    """ Execute a git status on the targeted entry."""
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    ret, out, err = gitcmd.status(join_fb_root(path))
    
    if not ret:
        return HttpResponse(htmlprint.code(out + err))
    else:  # pragma: no cover
        return HttpResponseNotFound(htmlprint.code(out + err))



@require_GET
def git_blame(request):
    """ Execute a git blame on the targeted entry."""
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    
    path = join_fb_root(path)
    base = os.path.basename(path)
    command = 'git blame {0} --root -w --show-email --contents {1}'.format(base, path)
    
    ret, out, err = exec_git_cmd(path, command)
    response = []
    if not ret:
        regex = r'(?P<sha1>[^\s]+)\s+(?P<filename>[^\s]+)\s+\(<(?P<email>[^>]+)>\s+(?P<day>[' \
                r'^\s]+)\s+(?P<hour>[^\s]+)\s+(?P<gmt>[^\s]+)\s+(?P<line>[^\)]+)\)(?P<text>[^\n]+)'
        matches = re.findall(regex, out)
        for match in matches:
            sha1 = match[1]
            command = 'git show --no-patch --oneline {0}'.format(sha1)
            ret, out, err = exec_git_cmd(path, command)
            if not ret:
                commit = ' '.join(out.split()[1:])
            else:
                commit = ''
            response.append({
                "sha1":   sha1,
                "email":  match[2],
                "day":    match[3],
                "hour":   match[4],
                "gmt":    match[5],
                "line":   int(match[6]),
                "commit": commit,
                "text":   match[0]
            })
        return HttpResponse(json.dumps(response), content_type='application/json')
    else:  # pragma: no cover
        if "fatal: no such path" in err:
            return HttpResponse(json.dumps([]), content_type='application/json')
        return HttpResponseNotFound(htmlprint.code(out + err))



@require_GET
def git_show(request):
    """ Execute a git show on the targeted entry."""
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    try:
        ret, out, err = gitcmd.show_last_revision(join_fb_root(path))
        if not ret:
            return HttpResponse(out)
        else:  # pragma: no cover
            return HttpResponseNotFound(htmlprint.code(out + err))
    except Exception as e:  # pragma: no cover
        error = htmlprint.code(str(type(e)) + ' - ' + str(e))
        return HttpResponseNotFound(error)



@require_GET
def git_checkout(request):
    """ Execute a checkout of the targeted entry with the informations of POST. """
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    
    ret, out, err = gitcmd.checkout(join_fb_root(path))
    
    if not ret:
        return HttpResponse("Entry successfully checked out.")
    else:  # pragma: no cover
        return HttpResponseNotFound(
            "Nothing to checked out." if not err else htmlprint.code(err + out))



@require_GET
def git_add(request):
    """ Execute a git add on the targeted entry."""
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
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
        return HttpResponseBadRequest(missing_parameter('path'))
    commit = post.get('commit')
    if not commit:
        return HttpResponseBadRequest(missing_parameter('commit'))
    user = request.user
    if not user.email:
        return HttpResponseBadRequest("User must have an email")
    if user.first_name and user.last_name:
        name = user.get_full_name()
    else:
        name = user.get_username()
    ret, out, err = gitcmd.commit(join_fb_root(path), commit, name=name, mail=request.user.email)
    if not ret:
        return HttpResponse(htmlprint.code(out + err))
    else:  # pragma: no cover
        return HttpResponseNotFound(htmlprint.code(err + out))



@login_required
@require_GET
def load_pltp(request):
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    
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
        return HttpResponseBadRequest(missing_parameter('path'))
    activity_id = post.get('activity_id')
    if not activity_id:
        return HttpResponseBadRequest(missing_parameter('activity_id'))
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



# TODO TO REMOVE
@csrf_exempt
@require_POST
def compile_pl(request):
    """ Used by the PL editor to compile a PL"""
    post = json.loads(request.body.decode())
    path = post.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    
    path_components = path.split('/')
    directory = path_components[0]
    response = {'compiled': True}
    try:
        path = join_fb_root(path)
        with open(path, 'r') as f:
            content = f.read()
        shutil.copyfile(path, path + ".bk")
        with open(path, 'w+') as f:  # Writting editor content into the file
            print(content, file=f)
        
        directory = Directory.objects.get(name=directory)
        file_path = os.path.join(*(path_components[1:]))
        pl, warnings = load_file(directory, file_path)
        if not pl:
            response['compiled'] = False
        else:
            response['json'] = pl.json
            response['warnings'] = warnings
    except Exception:  # pragma: no cover
        response['compiled'] = False
    finally:
        shutil.move(path + ".bk", path)
        return HttpResponse(
            json.dumps(response),
            content_type='application/json',
            status=200
        )



# TODO TO REMOVE
@csrf_exempt
@require_POST
def pl_tuto(request):
    post = json.loads(request.body.decode())
    content = post.get('student')
    if not content:
        return HttpResponseBadRequest(missing_parameter('student'))
    
    path = post.get("path")
    if not path:
        path = 'Yggdrasil/conceptexo/pltuto.pl'
    path_components = path.split('/')
    directory = path_components[0]
    try:
        path = join_fb_root(path)
        with open(path, 'w') as f:
            print(content, file=f)
        
        directory = Directory.objects.get(name=directory)
        file_path = os.path.join(*(path_components[1:]))
        pl, warnings = load_file(directory, file_path)
        response = {'compiled': True}
        if not pl:
            response['compiled'] = False
            response['warnings'] = warnings
        else:
            response['json'] = pl.json
            response['warnings'] = warnings
    except Exception:  # pragma: no cover
        response['compiled'] = False
    finally:
        os.remove(path)
        return HttpResponse(
            json.dumps(response),
            content_type='application/json',
            status=200
        )
    
    return HttpResponseBadRequest(content="Couldn't resolve ajax request")



@login_required
@require_GET
def test_pl(request):
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    
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
        
        return render(request, 'filebrowser/test.html', {
            'preview': preview,
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
    path = post.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    content = post.get('content', '')
    
    path_components = path.split('/')
    directory = path_components[0]
    try:
        path = os.path.join(settings.FILEBROWSER_ROOT, path)
        shutil.copyfile(path, path + ".bk")
        with open(path, 'w+') as f:  # Writting editor content into the file
            print(content, file=f)
        
        directory = Directory.objects.get(name=directory)
        file_path = os.path.join(*(path_components[1:]))
        pl, warnings = load_file(directory, file_path)
        if not pl:
            preview = '<div class="alert alert-danger" role="alert"> 1 Failed to load \'' \
                      + os.path.basename(file_path) + "': \n" + warnings + "</div>"
        else:
            if warnings:
                [messages.warning(request, warning) for warning in warnings]
            pl.save()
            exercise = SessionTest.objects.create(pl=pl, user=request.user)
            preview = exercise.get_exercise(request)
    except Exception as e:  # pragma: no cover
        preview = ('<div class="alert alert-danger" role="alert"> 3 Failed to load \''
                   + os.path.basename(file_path) + "': \n\n"
                   + htmlprint.code(str(e)))
        if settings.DEBUG:
            preview += "\n\nDEBUG set to True:\n" + htmlprint.html_exc()
        preview += "</div>"
    finally:
        shutil.move(path + ".bk", path)
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
            "components": exercise.get_components()
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
        print(e)
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
        return HttpResponseBadRequest(missing_parameter('name'))
    
    try:
        return globals()[opt](request)
    except Exception as e:
        return HttpResponseBadRequest("Cannot use option %s: %s" % (opt, str(e)))
