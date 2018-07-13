#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  options.py
#
#  Copyright 2018 Coumes Quentin
#



########################
#       OPTIONS        #
########################
#
# Options are function that can be used by a filebrowser so execute an action over an entry or a whole
# Directory.
#
# All these function received 3 arguments:
#    - Django request
#    - The instance of filebrowser corresponding to the path where the option was chosen
#    - The name of the entry / of the directory
#
# They all should return an HttpResponse, redirecing (if possible) the user to the same position in the filebrowser
# where he was when he chose the option. If such redirection can't be done (after a deletion for instance),
# the user should be redirected to the filebrowser root.
#
# Some option can open another page than the filebrowser, such page or corresponding view should
# redirect the user.
#
# settings.FILEBROWSER_ROOT should be removed of every path displayed by any feedback of the options
#



import os, shutil, magic, zipfile, tarfile, traceback, htmlprint, datetime, gitcmd

from os.path import basename, splitext, isdir, join, isfile, abspath, normpath, dirname

from django.shortcuts import redirect, reverse, render
from django.contrib import messages
from django.http import HttpResponseNotAllowed, HttpResponse, HttpResponseBadRequest
from django.db.utils import IntegrityError

from django.conf import settings

from filebrowser.models import Directory
from filebrowser.utils import redirect_fb
from filebrowser.filter import is_pl

from loader.loader import load_file

from playexo.exercise import PLInstance


BAD_CHAR = ['/', ' ',  ';', '#', '+', '&']

def mkdir_option(request, filebrowser, target):
    """Create a new folder named target at filebrowser.full_path()"""
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    name = request.POST.get('name')
    
    if not name:
        return HttpResponseBadRequest("Missing 'name' or parameter")

    try:
        path = normpath(join(filebrowser.full_path(), name))
        
        if any(c in name for c in BAD_CHAR):
            messages.error(request, "Can't create directory '" + name
                                  + "': name should not contain any of " + str(BAD_CHAR) + ".")
        elif isdir(path) or isfile(path):
            messages.error(request, "Can't create directory '" + name
                                  + "': this name is already used.")
        else:
            os.mkdir(path)
            messages.success(request, "Folder '" + name + "' successfully created !")
    
    except Exception as e: # pragma: no cover
        msg = "Impossible to create '"+name+"' : "+ htmlprint.code(str(type(e)) + ' - ' + str(e))
        messages.error(request, msg.replace(settings.FILEBROWSER_ROOT, ""))
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())

    return redirect_fb(filebrowser.relative)


def display_option(request, filebrowser, target):
    """ Display targeted entry's content"""
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])

    try:
        path = normpath(join(filebrowser.full_path(), target))
        with open(path, 'r') as f:
            lines = f.readlines()
        return render(request, 'filebrowser/file.html', {'file': lines, 'filename': basename(path)})

    except Exception as e: # pragma: no cover
        msg = "Impossible to display '"+target+"' : "+ htmlprint.code(str(type(e)) + ' - ' + str(e))
        messages.error(request, msg.replace(settings.FILEBROWSER_ROOT, ""))
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())

    return redirect_fb(filebrowser.relative)  # pragma: no cover 


def rename_option(request, filebrowser, target):
    """ Rename targeted entry with POST['name'] """
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    name = request.POST.get('name')
    if not name:
        return HttpResponseBadRequest("Missing 'name' parameter.")

    try:
        path = normpath(join(filebrowser.full_path(), target))
        target_path = join(filebrowser.full_path(), name)
        if any(c in name for c in BAD_CHAR):
            messages.error(request, "Can't rename '" + target + "' to '" + name
                                  + "': name should not contain any of " + str(BAD_CHAR) + ".")
        elif isfile(target_path) or isdir(target_path):
            messages.error(request, "Can't rename '" + target + "' to '" + name
                                  + "': this name is already used.")
        else:
            os.rename(path, target_path)
            messages.success(request, "'" + target + "' successfully renamed to '" + name + "' !")
    
    except Exception as e: # pragma: no cover
        msg = "Impossible to rename '" + target + "' : " + htmlprint.code(str(type(e)) + ' - ' + str(e))
        messages.error(request, msg.replace(settings.FILEBROWSER_ROOT, ""))
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())

    return redirect_fb(filebrowser.relative)



def copy_option(request, filebrowser, target):
    """ Copy targeted entry to POST['destination'] """
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])

    destination = request.POST.get('destination')
    if not destination:
        return HttpResponseBadRequest("Missing argument 'destination'")

    try:
        if destination[0] == '/':
            ndestination = join(filebrowser.root, filebrowser.real_home, destination[1:])
        else:
            ndestination = normpath(join(filebrowser.full_path(), destination))
        path = normpath(join(filebrowser.full_path(), target))
        
        if join(filebrowser.root, filebrowser.real_home) not in ndestination:
            messages.error(request, "Impossible to copy '" + target + "' in '" + destination
                                   + "': this directory does not exists.")
        
        elif isdir(ndestination) or isfile(ndestination):
            messages.error(request, "Impossible to copy '" + target + "' in '" + destination
                                   + "': name is already used.")
        
        elif isdir(path):
            shutil.copytree(path, ndestination)
            messages.success(request, "'" + target + "' successfully copied to '" + destination +"' !")
        
        else :
            shutil.copyfile(path, ndestination)
            messages.success(request, "'" + target + "' successfully copied to '" + destination +"' !")
    
    except Exception as e: # pragma: no cover
        msg = "Impossible to copy '"+target+"' : "+ htmlprint.code(str(type(e)) + ' - ' + str(e))
        messages.error(request, msg.replace(settings.FILEBROWSER_ROOT, ""))
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
        
    return redirect_fb(filebrowser.relative)



def add_option(request, filebrowser, target):
    """ Execute a git add on the targeted entry."""
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
    
    ret, out, err = gitcmd.add(normpath(join(filebrowser.full_path(), target)))
    
    if not ret:
        messages.success(request, "Entry successfully added to the index.")
    else:  # pragma: no cover 
        messages.error(request, "Nothing to add." if not err else htmlprint.code(err + out))
    
    return redirect_fb(filebrowser.relative)



def reset_option(request, filebrowser, target):
    """ Execute a git reset on the targeted entry."""
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    commit = request.POST.get('commit')
    mode = request.POST.get('mode')
    
    ret, out, err = gitcmd.reset(normpath(join(filebrowser.full_path(), target)),
                                 mode if mode else 'mixed',
                                 commit if commit else 'HEAD')
    
    if not ret:
        messages.success(request, htmlprint.code(out + err))
    else:  # pragma: no cover 
        messages.error(request, htmlprint.code(err + out))
    
    return redirect_fb(filebrowser.relative)



def commit_option(request, filebrowser, target):
    """ Execute an add and commit of the targeted entry with the informations of POST. """
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    commit = request.POST.get('commit')
    if not commit:
        return HttpResponseBadRequest("Missing 'commit' parameter")
    
    ret, out, err = gitcmd.commit(normpath(join(filebrowser.full_path(), target)), commit)

    if not ret:
        messages.success(request, htmlprint.code(out + err))
    else:  # pragma: no cover 
        messages.error(request, htmlprint.code(err + out))

    return redirect_fb(filebrowser.relative)



def change_branch_option(request, filebrowser, target):
    """ Execute a checkout to change current branch with the informations of POST. """
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    branch = request.POST.get('name')
    new = request.POST.get('new')
    if not branch:
        return HttpResponseBadRequest("Missing 'branch' parameter")
    
    ret, out, err = gitcmd.checkout(normpath(join(filebrowser.full_path(), target)), branch, new)
    
    if not ret:
        messages.success(request, htmlprint.code(out + err))
    else:  # pragma: no cover 
        messages.error(request, htmlprint.code(err + out))

    return redirect_fb(filebrowser.relative)



def checkout_option(request, filebrowser, target):
    """ Execute a checkout of the targeted entry with the informations of POST. """
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
    
    ret, out, err = gitcmd.checkout(normpath(join(filebrowser.full_path(), target)))
    
    if not ret:
        messages.success(request, "Entry successfully checked out.")
    else:  # pragma: no cover 
        messages.error(request, "Nothing to checked out." if not err else htmlprint.code(err + out))

    return redirect_fb(filebrowser.relative)



def status_option(request, filebrowser, target):
    """ Execute a git status on the targeted entry."""
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
    
    ret, out, err = gitcmd.status(normpath(join(filebrowser.full_path(), target)))
    
    if not ret:
        messages.success(request, htmlprint.code(out + err))
    else: # pragma: no cover 
        messages.error(request, htmlprint.code(err + out))

    return redirect_fb(filebrowser.relative)



def branch_option(request, filebrowser, target):
    """ Execute a git branch on the targeted entry."""
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
    
    ret, out, err = gitcmd.branch(normpath(join(filebrowser.full_path(), target)))
    
    if not ret:
        messages.success(request, htmlprint.code(out + err))
    else: # pragma: no cover 
        messages.error(request, htmlprint.code(err + out))

    return redirect_fb(filebrowser.relative)



def clone_option(request, filebrowser, target):
    """ Execute a git clone on the targeted entry with the informations of POST."""
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    username = request.POST.get('username')
    password = request.POST.get('password')
    url = request.POST.get('url')
    destination = request.POST.get('destination')
    if not url:
       return HttpResponseBadRequest("Missing 'url' parameter")
    
    if '@' in url:
        messages.error(request, "SSH link is not supported, please use HTTPS")
        
    else:
        ret, out, err = gitcmd.clone(normpath(join(filebrowser.full_path(), target)),
                                     url, destination, username, password)
        
        if not ret:
            messages.success(request, htmlprint.code(out + err))
        else:
            messages.error(request, htmlprint.code(err + out))

    return redirect_fb(filebrowser.relative)



def pull_option(request, filebrowser, target):
    """ Execute a git pull on the targeted entry with the informations of POST."""
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    username = request.POST.get('username')
    password = request.POST.get('password')
    
    ret, out, err = gitcmd.pull(normpath(join(filebrowser.full_path(), target))
                                ,username=username, password=password)
    
    if not ret:
        messages.success(request, htmlprint.code(out + err))
    else:
        messages.error(request, htmlprint.code(err + out))

    return redirect_fb(filebrowser.relative)



def push_option(request, filebrowser, target):
    """ Execute a git push on the targeted entry with the informations of POST."""
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    username = request.POST.get('username')
    password = request.POST.get('password')
    
    ret, out, err = gitcmd.push(normpath(join(filebrowser.full_path(), target)),
                                  username=username, password=password)
    
    if not ret:
        messages.success(request, htmlprint.code(out + err))
    else:
        messages.error(request, htmlprint.code(err + out))

    return redirect_fb(filebrowser.relative)



def download_option(request, filebrowser, target):
    """ Allow the user to download target"""
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])

    try:
        path = normpath(normpath(join(filebrowser.full_path(), target)))
        filename = basename(path) + datetime.datetime.now().strftime("_%dd-%mm-%yy-%Hh-%Mm-%Ss")

        if isdir(path):
            
            npath = path + datetime.datetime.now().strftime("_%dd-%mm-%yy-%Hh-%Mm-%Ss")
            
            shutil.make_archive(npath, 'zip', root_dir=path)
            filename += ".zip"
            npath += ".zip"
        else:
            npath = path

        with open(npath, 'rb')as f:
            response = HttpResponse(f.read())
            response['Content-Type'] = magic.from_file(npath, mime=True)
            response['Content-Disposition'] = "attachment; filename=" + filename

        return response

    except Exception as e: # pragma: no cover
        msg = "Impossible to download '" + target + "' : " + htmlprint.code(str(type(e)) + ' - ' + str(e))
        messages.error(request, msg.replace(settings.FILEBROWSER_ROOT, ""))
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
    
    finally:
        if isdir(path):
            os.remove(npath)
    
    return redirect_fb(filebrowser.relative)  # pragma: no cover 



def new_file_option(request, filebrowser, target):
    """Create a new file and launch the PL editor"""
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    name = request.POST.get('name')
    if not name :
        return HttpResponseBadRequest("Missing 'name' parameter")
        
    try:
        path = normpath(join(filebrowser.full_path(), name))
        
        if any(c in name for c in BAD_CHAR): 
            messages.error(request, "Can't create file '" + name 
                                  + "': name should not contain any of " + str(BAD_CHAR) + ".") 
        
        elif isdir(path) or isfile(path): 
            messages.error(request, "Can't create file '" + name 
                                  + "': this name is already used.") 
        else: 
            f = open(path, "w")
            f.close()
            messages.success(request, "File '" + name + "' successfully created !") 
 
    except Exception as e: # pragma: no cover 
        msg = "Impossible to create '"+name+"' : "+ htmlprint.code(str(type(e)) + ' - ' + str(e)) 
        messages.error(request, msg.replace(settings.FILEBROWSER_ROOT, "")) 
        if settings.DEBUG: 
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc()) 
 
    return redirect_fb(filebrowser.relative) 



def load_pltp_option(request, filebrowser, target):
    """ Load the target"""
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])

    try:
        rel_path = join(*(filebrowser.relative.split('/')[1:] + [target]))
        pltp, warnings = load_file(filebrowser.directory, rel_path, True)

        if not pltp and not warnings: # pragma: no cover 
            messages.info(request, "This PLTP is already loaded")
        elif not pltp:  # pragma: no cover 
            messages.error(request, "Failed to load '"+target+"': \n"+warnings)
        else:
            if warnings:  # pragma: no cover 
                for warning in warnings:
                    messages.warning(request, warning)
            url_lti = request.scheme + "://" + request.get_host()+"/playexo/activity/lti/"+pltp.name+"/"+pltp.sha1+"/"
            url_test = "/playexo/activity/test/"+pltp.name+"/"+pltp.sha1+"/"
            messages.success(request, "L'activité <b>'"+pltp.name+"'</b> a bien été créée et a pour URL LTI: \
                                      <br>&emsp;&emsp;&emsp;'"+url_lti+"' <p id=\"url\" hidden>"+url_lti+"</p> \
                                      <button style=\"height: 25px;padding: 0 5px;\" class=\"btn btn-success\" \
                                      onclick=\"copyToClipboard('#url')\"><i class=\"far fa-copy\"></i> Copier\
                                      </button><br>L'activité sera créée lorsqu'une personne cliquera sur le lien \
                                      depuis un client LTI. Pour la tester en local, cliquez <a target=\"_blank\" \
                                      href=\""+url_test+"\">ici</a>.""")
    except Exception as e: # pragma: no cover
        msg = "Impossible to load '"+target+"' : "+ htmlprint.code(str(type(e)) + ' - ' + str(e))
        messages.error(request, msg.replace(settings.FILEBROWSER_ROOT, ""))
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
    return redirect_fb(filebrowser.relative)



def move_option(request, filebrowser, target):
    """ Move target to POST['destination']."""
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])

    destination = request.POST.get('destination')
    if not destination:
        return HttpResponseBadRequest("Missing argument 'destination'")

    try:
        path = normpath(join(filebrowser.full_path(), target))
        if destination[0] == '/':
            ndestination = join(filebrowser.root, filebrowser.real_home, destination[1:])
        else:
            ndestination = normpath(join(filebrowser.full_path(), destination))
        
        if join(filebrowser.root, filebrowser.real_home) not in ndestination:
            messages.error(request, "Impossible to move '" + target + "' inside '" + destination
                                  + "': this directory does not exists.")
        
        elif not isdir(ndestination):
            messages.error(request, "Impossible to move '" + target + "' inside '" + destination
                                   + "': destination isn't a directory.")
        
        elif path in ndestination:
            messages.error(request, "Impossible to move '" + target + "' inside '" + destination
                                   + "': Can't move a directory inside itself.")
        
        else:
            ndestination = join(ndestination, target)
            if isdir(ndestination) or isfile(ndestination):
                messages.error(request, "Impossible to move '" + target + "' inside '" + destination
                                      + "': name '" + target + "' already exists in destination.")
            
            else:
                os.rename(path, ndestination)
                messages.success(request, "'" + target + "' successfully moved to '" + destination +"' !")
    
    except Exception as e: # pragma: no cover
        msg = "Impossible to copy '"+target+"' : "+ htmlprint.code(str(type(e)) + ' - ' + str(e))
        messages.error(request, msg.replace(settings.FILEBROWSER_ROOT, ""))
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
        
    return redirect_fb(filebrowser.relative)



def delete_option(request, filebrowser, target):
    """ Delete target"""
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])

    try:
        path = normpath(join(filebrowser.full_path(), target))
        if isdir(path):
            shutil.rmtree(path, ignore_errors=True)
        else:
            os.remove(path)
        messages.success(request, "'"+target+"' successfully deleted !")
    except Exception as e: # pragma: no cover
        msg = "Impossible to delete '"+target+"' : "+ htmlprint.code(str(type(e)) + ' - ' + str(e))
        messages.error(request, msg.replace(settings.FILEBROWSER_ROOT, ""))
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
    return redirect_fb(filebrowser.relative)


def edit_option(request, filebrowser, target):
    """ Start an editor to edit target."""
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])

    try:
        path = normpath(join(filebrowser.full_path(), target))
        with open(path, 'r') as f:
            content = f.read()

        return render(request, 'filebrowser/editor.html', {
            'file_content': content,
            'relative': filebrowser.relative,
            'filename': basename(path),
            'filepath': path.replace(settings.FILEBROWSER_ROOT+'/', ''),
            'dir_name': filebrowser.directory.name,
        })

    except Exception as e: # pragma: no cover
        msg = "Impossible to edit '"+target+"' : "+ htmlprint.code(str(type(e)) + ' - ' + str(e))
        messages.error(request, msg.replace(settings.FILEBROWSER_ROOT, ""))
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
    
    return redirect_fb(filebrowser.relative)  # pragma: no cover 



def edit_pl_option(request, filebrowser, target):
    """ Start the editor with preview to edit a PL."""
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])

    try:
        path = normpath(join(filebrowser.full_path(), target))
        with open(path, 'r') as f:
            content = f.read()
        
        rel_path = join(*(filebrowser.relative.split('/')[1:] + [target]))
        pl, warnings = load_file(filebrowser.directory, rel_path)
        if not pl:
            preview = '<div class="alert alert-danger" role="alert"> Failed to load \''+target+"': \n"+warnings+"</div>"
        else:
            if warnings:  # pragma: no cover 
                [messages.warning(request, warning) for warning in warnings]
            
            try:
                exercise = PLInstance(pl.json)
                request.session['exercise'] = dict(exercise.dic)
                
                preview = exercise.render(request)
            except Exception as e:  # pragma: no cover 
                preview = '<div class="alert alert-danger" role="alert"> Failed to load \'' \
                    + basename(rel_path) + "': \n\n" \
                    + htmlprint.code(str(e)) + "</div>"
        return render(request, 'filebrowser/editor_pl.html', {
            'file_content': content,
            'filename': basename(path),
            'relative': filebrowser.relative,
            'filepath': path.replace(settings.FILEBROWSER_ROOT+'/', ''),
            'dir_name': filebrowser.directory.name,
            'preview': preview,
        })

    except Exception as e: # pragma: no cover
        msg = "Impossible to edit '"+target+"' : "+ htmlprint.code(str(type(e)) + ' - ' + str(e))
        messages.error(request, msg.replace(settings.FILEBROWSER_ROOT, ""))
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
    
    return redirect_fb(filebrowser.relative)  # pragma: no cover 



def test_pl_option(request, filebrowser, target):
    """ Allwo to test a PL."""
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])

    try:
        rel_path = join(*(filebrowser.relative.split('/')[1:] + [target]))
        pl, warnings = load_file(filebrowser.directory, rel_path)

        if not pl:
            messages.error(request, warnings)
            return redirect_fb(filebrowser.relative)

        exercise = PLInstance(pl.json)
        request.session['exercise'] = dict(exercise.dic)
        preview = exercise.render(request)

        return render(request, 'filebrowser/test_pl.html', {
            'preview': preview,
        })

    except Exception as e: # pragma: no cover
        messages.error(request, msg.replace(settings.FILEBROWSER_ROOT, ""))
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
    
    return redirect_fb(filebrowser.relative)  # pragma: no cover 



def upload_option(request, filebrowser, target):
    """ Allow the user to upload a file in the filebrowser """
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    relative = request.POST.get('relative')
    relative_h = request.POST.get('relative_h')
    f = request.FILES.get('file')
    name = request.POST.get('rename')
    name = name if name else f.name
    
    if not f:
        return HttpResponseBadRequest("File is missing")
    
    try:
        
        path = normpath(join(filebrowser.full_path(), name))
        if isfile(path) or isdir(path):
            messages.error(request, "This file's name is already used")
        
        else:
            with open(path, 'wb+') as dest:
                for chunk in f.chunks():
                    dest.write(chunk)
            messages.success(request, "File '" + name + "' successfully uploaded.")

    except Exception as e: # pragma: no cover
        msg = "Impossible to upload '"+name+"' : "+ htmlprint.code(str(type(e)) + ' - ' + str(e))
        messages.error(request, msg.replace(settings.FILEBROWSER_ROOT, ""))
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
    
    return redirect_fb(filebrowser.relative)



def extract_option(request, filebrowser, target):
    """ Extract the given archive """
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
    
    try:
        
        path = normpath(join(filebrowser.full_path(), target))
        mime = magic.from_file(path, mime=True).split('/')[1]
        if mime == 'zip':
            with zipfile.ZipFile(path) as arc:
                arc.extractall(join(filebrowser.full_path(), splitext(target)[0]))
        elif mime in ['x-xz', 'gzip']:
            with tarfile.open(path) as arc:
                arc.extractall(join(filebrowser.full_path(), splitext(target)[0]))
        else:
            raise ValueError("Can't extract '"+mime+"' files.")
        messages.success(request, "Archive '"+target+"' successfully extracted.")
    except Exception as e: # pragma: no cover
        msg = "Impossible to extract '"+target+"' : "+ htmlprint.code(str(type(e)) + ' - ' + str(e))
        messages.error(request, msg.replace(settings.FILEBROWSER_ROOT, ""))
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
    
    return redirect_fb(filebrowser.relative)
