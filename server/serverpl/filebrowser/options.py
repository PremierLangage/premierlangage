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
# FILEBROWSER_ROOT should be removed of every path displayed by any feedback of the options
#



import os, shutil, magic, zipfile, tarfile, traceback

from os.path import basename, splitext, isdir, join, isfile

from django.shortcuts import redirect, reverse, render
from django.contrib import messages
from django.http import HttpResponseNotAllowed, HttpResponse, HttpResponseBadRequest
from django.db.utils import IntegrityError

from serverpl.settings import FILEBROWSER_ROOT, DEBUG

from filebrowser import views
from filebrowser.models import Directory
from filebrowser.form import RightForm
from filebrowser.utils import redirect_fb
from filebrowser.filter import is_pl

from loader.loader import load_file
from loader.utils import exception_to_html

from playexo.exercise import PLInstance



def mkdir_option(request, filebrowser, target):
    """Create a new folder named target at filebrowser.full_path()"""
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    name = request.POST.get('name', None)
    relative = request.POST.get('relative', None)
    if not name or not relative:
        return HttpResponseBadRequest
    
    try:
        path = join(filebrowser.full_path(), name)
        if isdir(path):
            messages.error(request, "A folder with that name ('"+name+"') already exists")
        elif isfile(path):
            messages.error(request, "A file with that name ('"+name+"') already exists")
        else:
            os.mkdir(path)
            messages.success(request, "Folder '"+name+"' successfully created !")
    except Exception as e:
        msg = "Impossible to create '"+name+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    
    return redirect_fb(request.POST.get('relative_h', '.'))


def display_option(request, filebrowser, target):
    """ Display targeted entry """
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
    
    try:
        path = join(filebrowser.full_path(), target)
        with open(path, 'r') as f:
            lines = f.readlines()
        return render(request, 'filebrowser/file.html', {'file': lines, 'filename': basename(path)})
        
    except Exception as e:
        msg = "Impossible to display '"+target+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    
    return redirect_fb(request.GET.get('relative_h', '.'))


def rename_option(request, filebrowser, target):
    """ Rename targeted entry with POST['name'] """
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    name = request.POST.get('name', None)
    if not name:
        return HttpResponse(status=200)
    
    try:
        if not filebrowser.directory:
            d = Directory.objects.get(name=target)
            d.name = name
            d.save()
        
        path = join(filebrowser.full_path(), target)
        os.rename(path, join(filebrowser.full_path(),name))
        
        messages.success(request, "'"+target+"' successfully renamed to '"+name+"' !")
    except IntegrityError:
        messages.error(request, "Can't rename '"+target+"' to '"+name+"' : this name is already used.")
    except Exception as e:
        msg = "Impossible to rename '"+target+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    
    return redirect_fb(request.POST.get('relative_h', '.'))



def copy_option(request, filebrowser, target):
    """ Copy targeted entry to POST['destination'] """
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    destination = request.POST.get('destination', None)
    if not destination:
        HttpResponseBadRequest()
        
    try:
        path = join(filebrowser.full_path(), target)
        if isdir(path):
            shutil.copytree(path, join(filebrowser.full_path(), destination))
        else:
            shutil.copyfile(path, join(filebrowser.full_path(), destination))
        messages.success(request, "'"+target+"' successfully copied !")
    except Exception as e:
        msg = "Impossible to copy '"+target+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    
    return redirect_fb(request.POST.get('relative_h', '.'))



def add_commit_option(request, filebrowser, target):
    """ Execute an add and commit of the targeted entry with the informations of POST. """
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    commit = request.POST.get('commit', None)
    if not commit:
        HttpResponseBadRequest()
    
    if not filebrowser.directory:
        d = Directory.objects.get(name=target)
        done, msg = d.add_and_commit(commit)
    else:
        done, msg = filebrowser.directory.add_and_commit(commit, path=filebrowser.full_path() + '/' + target)
    
    if done:
        messages.success(request, "Add and commit done.\n" + msg)
    else:
        messages.error(request, "Couldn't add and commit :\n" + msg)
    
    return redirect_fb(request.POST.get('relative_h', '.'))



def checkout_option(request, filebrowser, target):
    """ Execute a checkout of the targeted entry with the informations of POST. """
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])

    if not filebrowser.directory:
        d = Directory.objects.get(name=target)
        done, msg = d.checkout()
    else:
        done, msg = filebrowser.directory.checkout(path=filebrowser.full_path() + '/' + target)
    
    if done:
        messages.success(request, "Checkout done.\n" + msg)
    else:
        messages.error(request, "Couldn't checkout:\n" + msg)
    return redirect_fb(request.POST.get('relative_h', '.'))



def status_option(request, filebrowser, target):
    """ Execute a git status on the targeted entry."""
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
    
    if not filebrowser.directory:
        d = Directory.objects.get(name=target)
        done, msg = d.status()
    else:
        done, msg = filebrowser.directory.status()
    
    if done:
        messages.success(request, "Status done.\n" + msg)
    else:
        messages.error(request, "Couldn't status:\n" + msg)
    return redirect_fb(request.GET.get('relative_h', '.'))



def pull_option(request, filebrowser, target):
    """ Execute a git pull on the targeted entry with the informations of POST."""
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    username = request.POST.get('username', None)
    password = request.POST.get('password', None)
    if not filebrowser.directory:
        d = Directory.objects.get(name=target)
        done, msg = d.pull(username=username, password=password)
    else:
        done, msg = filebrowser.directory.pull(username=username, password=password)
    
    if done:
        messages.success(request, "Pull done.\n" + msg)
    else:
        messages.error(request, "Couldn't pull:\n" + msg)
    return redirect_fb(request.POST.get('relative_h', '.'))



def push_option(request, filebrowser, target):
    """ Execute a git push on the targeted entry with the informations of POST."""
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    username = request.POST.get('username', None)
    password = request.POST.get('password', None)
    if not filebrowser.directory:
        d = Directory.objects.get(name=target)
        done, msg = d.push(username=username, password=password)
    else:
        done, msg = filebrowser.directory.push(username=username, password=password)
    
    if done:
        messages.success(request, "Push done.\n" + msg)
    else:
        messages.error(request, "Couldn't push:\n" + msg)
    return redirect_fb(request.POST.get('relative_h', '.'))



def download_option(request, filebrowser, target):
    """ Allow the user to download target"""
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
        
    try:
        path = join(filebrowser.full_path(), target)
        filename = target
        
        if isdir(path):
            shutil.make_archive(path, 'zip', root_dir=path)
            filename = filename+".zip"
            path += ".zip"
        
        with open(path, 'rb')as f:
            response = HttpResponse(f.read())
            response['Content-Type']=magic.from_file(path, mime=True)
            response['Content-Disposition'] = "attachment; filename="+filename
        return response
        
    except Exception as e:
        msg = "Impossible to download '"+target+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    return redirect_fb(request.GET.get('relative_h', '.'))


def new_pl_option(request, filebrowser, target):
    """Create a new file and launch the PL editor"""
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    name = request.POST.get('name', None)
    if not name:
        return HttpResponseBadRequest
    
    try:
        path = join(filebrowser.full_path(), name)
        if not is_pl(name):
            ext = splitext(path)[1]
            messages.error(request, "Unknown PL's extension: '" + ext + "', please use a known extension.")
        elif isdir(path):
            messages.error(request, "A folder with that name ('"+name+"') already exists")
        elif isfile(path):
            messages.error(request, "A file with that name ('"+name+"') already exists")
        else:
            open(path, 'w+').close()
            return edit_option(request, filebrowser, target)
    except Exception as e:
        msg = "Impossible to create '"+target+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    return redirect_fb(request.POST.get('relative_h', '.'))


def load_pltp_option(request, filebrowser, target):
    """ Load the target"""
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
        
    try:
        rel_path = join(filebrowser.relative, target).replace('./'+filebrowser.directory.name, "")
        pltp, warnings = load_file(filebrowser.directory, rel_path, True)
        
        if not pltp and not warnings:
            messages.info(request, "This PLTP is already loaded")
        elif not pltp:
            messages.error(request, "Failed to load '"+target+"': \n"+warnings)
        else:
            if warnings:
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
    except Exception as e:
        msg = "Impossible to load '"+target+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        msg = msg if not DEBUG else msg + ':\n' + traceback.format_exc()
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    return redirect_fb(request.GET.get('relative_h', '.'))


def move_option(request, filebrowser, target):
    """ Move target to POST['destination']."""
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    destination = request.POST.get('destination', None)
    if not destination:
        HttpResponseBadRequest()
        
    try:
        os.rename(join(filebrowser.full_path(), target), join(join(filebrowser.full_path(), destination), target))
        messages.success(request, "'"+target+"' successfully moved !")
    except Exception as e:
        msg = "Impossible to move '"+target+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    return redirect_fb(request.POST.get('relative_h', '.'))



def delete_option(request, filebrowser, target):
    """ Delete target"""
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    try:
        path = join(filebrowser.full_path(), target)
        if isdir(path):
            shutil.rmtree(path, ignore_errors=True)
        else:
            os.remove(path)
        
        if not filebrowser.directory:
            Directory.objects.get(name=target).delete()
        
        messages.success(request, "'"+target+"' successfully deleted !")
    except Exception as e:
        msg = "Impossible to delete '"+target+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    return redirect_fb(request.POST.get('relative_h', '.'))



def edit_option(request, filebrowser, target):
    """ Start an editor to edit target."""
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
    
    try:
        path = join(filebrowser.full_path(), target)
        with open(path, 'r') as f:
            content = f.read()
        
        return render(request, 'filebrowser/editor.html', {
            'file_content': content,
            'filename': basename(path),
            'filepath': path.replace(FILEBROWSER_ROOT+'/', ''),
            'dir_name': filebrowser.directory.name,
        })
        
    except Exception as e:
        msg = "Impossible to edit '"+target+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    return redirect_fb(request.GET.get('relative_h', '.'))



def edit_pl_option(request, filebrowser, target):
    """ Start the editor with preview to edit a PL."""
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
    
    try:
        path = join(filebrowser.full_path(), target)
        with open(path, 'r') as f:
            content = f.read()
        
        rel_path = join(filebrowser.relative, target).replace('./'+filebrowser.directory.name, "")
        pl, warnings = load_file(filebrowser.directory, rel_path)
        if not pl:
            preview = '<div class="alert alert-danger" role="alert"> Failed to load \''+target+"': \n"+warnings+"</div>"
        else:
            if warnings:
                [messages.warning(request, warning) for warning in warnings]
            try:
                exercise = PLInstance(pl.json)
                request.session['exercise'] = dict(exercise.dic)
                preview = exercise.render(request)
            except Exception as e:
                preview = '<div class="alert alert-danger" role="alert"> Failed to load \'' \
                    + basename(rel_path) + "': \n\n" \
                    + exception_to_html(str(e)) + "</div>"
        return render(request, 'filebrowser/editor_pl.html', {
            'file_content': content,
            'filename': basename(path),
            'filepath': path.replace(FILEBROWSER_ROOT+'/', ''),
            'dir_name': filebrowser.directory.name,
            'preview': preview,
        })
        
    except Exception as e:
        msg = "Impossible to display '"+target+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    return redirect_fb(request.GET.get('relative_h', '.'))



def test_pl_option(request, filebrowser, target):
    """ Allwo to test a PL."""
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
    
    try:
        path = join(filebrowser.full_path(), target)

        rel_path = join(filebrowser.relative, target).replace('./'+filebrowser.directory.name, "")
        pl, warnings = load_file(filebrowser.directory, rel_path)
        
        if not pl:
            messages.error(request, warnings)
            return redirect_fb(request.GET.get('relative_h', '.'))
        
        exercise = PLInstance(pl.json)
        request.session['exercise'] = dict(exercise.dic)
        preview = exercise.render(request)
            
        return render(request, 'filebrowser/test_pl.html', {
            'preview': preview,
        })
        
    except Exception as e:
        msg = "Impossible to display '"+target+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    return redirect_fb(request.GET.get('relative_h', '.'))



def rights_option(request, filebrowser, target):
    """ Open a page allowing the user to edit the rights of his targeted Directory."""
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
    
    try:
        if not filebrowser.directory:
            d = Directory.objects.get(name=target)
        else:
            d = filebrowser.directory
        
        form = RightForm()
        form.initial['write'] = [user.id for user in d.write_auth.all()]
        form.initial['read'] =  [user.id for user in d.read_auth.all()]
        
        return render(request, 'filebrowser/edit_rights.html', {
            'form': form,
            'directory': d.name,
        })
        
    except Exception as e:
        msg = "Impossible to display '"+target+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    return redirect_fb(request.GET.get('relative_h', '.'))


def upload_option(request, filebrowser, target):
    """ Allow the user to upload a file in the filebrowser """
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    try:
        f = request.FILES['file']
        name = request.POST.get('name', None)
        if not name:
            name = f.name
        relative = request.POST.get('relative', None)
        path = filebrowser.root+'/'+relative+'/'+name
        with open(path, 'wb+') as dest:
            for chunk in f.chunks():
                dest.write(chunk)
        messages.success(request, "File '"+name+"' successfully uploaded.")
        
    except Exception as e:
        msg = "Impossible to upload '"+name+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    return redirect_fb(request.POST.get('relative_h', '.'))



def extract_option(request, filebrowser, target):
    """ Extract the given archive """
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
    
    try:
        path = join(filebrowser.full_path(), target)
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
    except Exception as e:
        msg = "Impossible to extract '"+target+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    return redirect_fb(request.GET.get('relative_h', '.'))
