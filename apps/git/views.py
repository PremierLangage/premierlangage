import json
import os
import re
import shutil

import gitcmd
import htmlprint
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.http import (HttpResponse, HttpResponseBadRequest,
                         HttpResponseNotFound)
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET, require_POST

from filebrowser.filter import in_repository
from filebrowser.utils import join_fb_root, repository_branch, repository_url
from git.utils import exec_command
from shared.utils import missing_parameter


@require_GET
@login_required
@csrf_exempt
def add(request):
    """ Execute a git add on the targeted entry."""
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    ret, out, err = gitcmd.add(join_fb_root(path))
    if not ret:
        return HttpResponse("Entry successfully added to the index.")
    else:  # pragma: no cover
        return HttpResponseNotFound("Nothing to add." if not err else htmlprint.code(err + out))


@require_GET
@login_required
@csrf_exempt
def blame(request):
    """ Execute a git blame on the targeted entry."""
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))

    path = join_fb_root(path)
    base = os.path.basename(path)
    command = 'git blame {0} -w --show-email --contents {1}'.format(base, path)

    ret, out, err = exec_command(path, command)
    response = []
    if not ret:
        regex = r'(?P<sha1>[^\s]+)\s+(?P<filename>[^\s]+)\s+\(<(?P<email>[^>]+)>\s+(?P<day>[' \
                r'^\s]+)\s+(?P<hour>[^\s]+)\s+(?P<gmt>[^\s]+)\s+(?P<line>[^\)]+)\)(?P<text>[^\n]+)'
        matches = re.findall(regex, out)
        for match in matches:
            sha1 = match[1]
            command = 'git show --no-patch --oneline {0}'.format(sha1)
            ret, out, err = exec_command(path, command)
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
@login_required
@csrf_exempt
def changes(request):
    error = ''
    response = {}

    def changes_in_directory(directory):
        subdirs = os.listdir(join_fb_root(directory))

        for subdir in subdirs:
            abspath = join_fb_root(os.path.join(directory, subdir))
            if not in_repository(abspath):
                continue

            def parse_change(change):
                tmp = change.strip().split(' ')
                ftype = tmp[0]
                fpath = os.path.join(directory, subdir, tmp[-1])  # Yggdrasil + Repo + File
                isdir = fpath.endswith('/')
                name = fpath.split('/')[-2] if isdir else os.path.basename(fpath)
                return {'name': name, 'type': ftype, 'path': fpath, 'isdir': isdir}

            ret, out, err = exec_command(abspath, 'git status --short')

            if not ret:
                changes = out.split("\n")
                changes = [parse_change(x) for x in changes if
                           x and '..' not in x]  # only result in home/
                changes = [x for x in changes if x['type'] != 'A']  # remove added entries
                key = repository_url(abspath)
                value = response.get(key)
                if value:
                    value['changes'] = value['changes'] + changes if value.get(
                        'changes') else changes
                else:
                    value = {
                        'path':   os.path.join(directory, subdir),
                        'branch': repository_branch(abspath), 'changes': changes
                    }
                response[key] = value
            else:  # pragma: no cover
                return False
        return True

    for e in ['Yggdrasil', 'lib']:
        if not changes_in_directory(e):
            return HttpResponseNotFound(error)

    return HttpResponse(json.dumps(response), content_type='application/json')


@require_GET
@login_required
@csrf_exempt
def checkout(request):
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


@require_POST
@login_required
@csrf_exempt
def clone(request):
    """Execute a git clone on the targeted entry with the informations of POST."""
    post = json.loads(request.body.decode())
    username = post.get('username')
    password = post.get('password')
    destination = post.get('destination')
    path = post.get('path')
    if not path:
        return HttpResponseBadRequest(settings.missing_parameter('path'))

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
@login_required
@csrf_exempt
def commit(request):
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


@require_POST
@login_required
@csrf_exempt
def pull(request):
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
@login_required
@csrf_exempt
def push(request):
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
@login_required
@csrf_exempt
def show(request):
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
@login_required
@csrf_exempt
def status(request):
    """ Execute a git status on the targeted entry."""
    path = request.GET.get('path')
    if not path:
        return HttpResponseBadRequest(missing_parameter('path'))
    ret, out, err = gitcmd.status(join_fb_root(path))

    if not ret:
        return HttpResponse(htmlprint.code(out + err))
    else:  # pragma: no cover
        return HttpResponseNotFound(htmlprint.code(out + err))
