#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  options.py
#  
#  Copyright 2018 Coumes Quentin
#  
#  This program is free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 2 of the License, or
#  (at your option) any later version.
#  
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#  
#  You should have received a copy of the GNU General Public License
#  along with this program; if not, write to the Free Software
#  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
#  MA 02110-1301, USA.
#  
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

from playexo.views import try_pl






def mkdir_option(request, filebrowser, target):
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    name = request.POST.get('name', None)
    relative = request.POST.get('relative', None)
    if not name or not relative:
        return HttpResponseBadRequest
    
    try:
        path = join(join(filebrowser.root, relative), name)
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


def test_pl_option(request, filebrowser, target):
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
        
    try:
        rel_path = join(filebrowser.relative, target).replace('./'+filebrowser.directory.name, "")
        pl, warnings = load_file(filebrowser.directory, rel_path)
        if not pl:
            messages.error(request, "Failed to load '"+target+"': \n"+warnings)
        else:
            if warnings:
                for warning in warnings:
                    messages.warning(request, warning)
            request.session['exercise'] = None
            return try_pl(request, pl, warnings)
        
    except Exception as e:
        msg = "Impossible to test '"+target+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    return redirect_fb(request.GET.get('relative_h', '.'))


def new_pl_option(request, filebrowser, target):
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    
    name = request.POST.get('name', None)
    relative = request.POST.get('relative', None)
    if not name or not relative:
        return HttpResponseBadRequest
    
    try:
        path = join(join(filebrowser.root, relative), name)
        if not is_pl(name):
            ext = splitext(path)[1]
            messages.error(request, "Unknown PL's extension: '" + ext + "', please use a known extension.")
        elif isdir(path):
            messages.error(request, "A folder with that name ('"+name+"') already exists")
        elif isfile(path):
            messages.error(request, "A file with that name ('"+name+"') already exists")
        else:
            path = join(join(filebrowser.root, relative), name)
            return render(request, 'filebrowser/editor.html', {
                'action': "/filebrowser/new_file/",
                'filename': name,
                'filepath': path,
            })
    except Exception as e:
        msg = "Impossible to test '"+target+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    return redirect_fb(request.POST.get('relative_h', '.'))


def load_pltp_option(request, filebrowser, target):
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
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])
    
    try:
        path = join(filebrowser.full_path(), target)
        with open(path, 'r') as f:
            content = f.read()
        return render(request, 'filebrowser/editor.html', {
            'file_content': content,
            'action': "/filebrowser/edit_file/",
            'filename': basename(path),
            'filepath': path,
        })
        
    except Exception as e:
        msg = "Impossible to display '"+target+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    return redirect_fb(request.GET.get('relative_h', '.'))



def rights_option(request, filebrowser, target):
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
            return HttpResponseBadRequest
        messages.success(request, "Archive '"+target+"' successfully extracted.")
    except Exception as e:
        msg = "Impossible to extract '"+target+"' : "+ str(type(e)).replace('<', '[').replace('>', ']') + " - " + str(e)
        if FILEBROWSER_ROOT in msg:
            msg = msg.replace(FILEBROWSER_ROOT+"/", "")
        messages.error(request, msg)
    return redirect_fb(request.GET.get('relative_h', '.'))
