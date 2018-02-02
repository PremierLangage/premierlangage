#!/usr/bin/env python3
# coding: utf-8

import shutil
from os.path import basename, splitext

from django.shortcuts import render, redirect
from django.db import IntegrityError
from django.contrib.auth.decorators import login_required
from django.contrib import messages

from gitload.browser import Browser
from gitload.models import PLTP, Repository, PL
from gitload.utils import create_breadcrumb

from playexo.models import Activity
from playexo.views import try_pl

from serverpl.settings import DIRREPO
from serverpl.decorator import can_gitload


@login_required
@can_gitload
def home(request):
    return render(request, 'gitload/home.html', {
    })

@login_required
@can_gitload
def index(request):
    """ View for /gitload/ -- template: index.html """
    Repository.add_missing_repository_in_bd()
    error_url = False
    
    if (request.method == 'POST'):
        repo_url = request.POST.get('repo_url', "")
        repo_name = request.POST.get('repo_name', "")
        repo_delete = request.POST.get('repo_delete', "")
        
        if (repo_delete != ""):
            try:
                Repository.objects.get(name=repo_delete).delete()
                messages.warning(request, "Le dépot <b>"+repo_delete+"</b> a bien été supprimé !")
            except:
                messages.error(request, "Erreur lors de la suppression du dépot <b>"+repo_delete+"</b>...")
            
        elif (repo_url != ""): #If new repository
            repo_name = splitext(basename(repo_url))[0]
            try:
                repo, created = Repository.objects.get_or_create(name=repo_name, url=repo_url, owner=request.user.get_username())
                browser = Browser(repo)
                if (not browser.get_repo()):
                    shutil.rmtree(browser.root)
                    error_url = True
                    messages.error(request, "Dépot <b>" + browser.url + "</b> introuvable. Merci de vérifier l'adresse ou votre connexion internet.")
                    repo.delete()
                else:
                    messages.success(request, "Dépot <b>" + browser.url + "</b> ajouté avec succès !")
            except IntegrityError:
                messages.error(request, 'Un dépot avec pour nom "' + repo_name + '" existe déjà. Si ce n\'est pas celui que vous souhaitez ajouter, merci de changer le nom de votre dépot.')
                
        elif (repo_name != ""): #If default
            repo = Repository.objects.get(name=repo_name)
            browser = Browser(repo)
        
        if (repo_name != "" and repo_url == "" and repo_delete == ""):
            request.session["browser"] = browser.__dict__
            return redirect(browse)
    
    repo_list = Repository.objects.all()
    return render(request, "gitload/index.html", {
        "default": repo_list,
        "error_url": error_url,
    })

@login_required
@can_gitload
def browse(request):
    """ View for [...]/gitload/browse -- template: browse.html """
    if (not "browser" in request.session):
        return redirect(index)
    
    browser = Browser(None, dic=request.session["browser"])
    ask_force = False
    plx_path = ""
    
    if (request.method == 'POST'):
        git_path = request.POST.get('git_path', "")
        plx_path = request.POST.get('exported', "")

        if git_path: # Changing directory
            browser.cd(git_path)
        
        elif plx_path: # Loading a PLTP / Testing PL
            repo_object = Repository.objects.get(name=browser.name)
            force = (request.POST.get('force', "False") == "True")
                
            if plx_path.endswith(".pltp"):
                plx, msg = browser.load_pltp(plx_path, repo_object, force)
                filetype = "PLTP"
            elif plx_path.endswith(".pl"):
                plx, msg = browser.load_pl(plx_path, repo_object)
                filetype = "PL"
                
            if (not plx): # Loading or testing failed
                if (msg):
                    msg = "<br>".join(msg.split("\n"))
                    messages.error(request, msg)
                else:
                    ask_force = True
            elif plx and filetype == "PL": # Testing PL
                msg = "<br>".join(msg.split("\n"))
                request.session['exercise'] = None
                return try_pl(request, plx, msg)
                
            else: # Loading PLTP
                if msg: # Show warnings
                    msg = "<br>".join(msg.split("\n"))
                    messages.warning(request, msg)
                    
                if filetype == "PLTP":
                    url_lti = request.scheme + "://" + request.get_host()+"/playexo/lti/"+plx.name+"/"+plx.sha1+"/"
                    url_test = "/playexo/activity/test/"+plx.name+"/"+plx.sha1+"/"
                    messages.success(request, "L'activité <b>'"+plx.name+"'</b> a bien été créée et a pour URL LTI: <br>&emsp;&emsp;&emsp;'"+url_lti+"' <p id=\"url\" hidden>"+url_lti+"</p><button style=\"height: 25px;padding: 0 5px;\" class=\"btn btn-success\" onclick=\"copyToClipboard('#url')\"><span class=\"glyphicon glyphicon-edit\"></span> Copier</button><br>Elle apparaitra dans la liste ci-dessous lorsqu'une personne cliquera sur le lien depuis un client LTI. Pour la tester en local, cliquez <a target=\"_blank\" href=\""+url_test+"\">ici</a>.""")
            
        
        elif (request.POST.get('refresh', False)):
            browser.get_repo()
    
    browser.parse_content()
    request.session["browser"] = browser.__dict__
    
    path = browser.current_path[browser.current_path.find(browser.name):]
    if (path[-1] != "/"):
        path += "/"
    rel_path = path[len(browser.name)+1:]
    breadcrumb, breadcrumb_value = create_breadcrumb(path)
    
    return render(request, 'gitload/browse.html', {
        'path': path,
        'rel_path': rel_path,
        'browser': browser,
        'breadcrumb': breadcrumb,
        'breadcrumb_value': breadcrumb_value,
        'ask_force': ask_force,
        'exported': plx_path,
    })

@login_required
@can_gitload
def view_file(request):
    """ View for [...]/gitload/edit -- template: edit_file.html"""
    if (request.method == 'POST'):
        file_path = request.POST.get('file_path', "")
        if (file_path != ""):
            readed_file = open(DIRREPO+file_path, "r")
            lines = list()
            for line in readed_file:
                lines.append(line)
            readed_file.close()
            
            request.current_app = 'gitload'
            return render(request,  'gitload/view_file.html', {
                'lines': lines,
                'filename': basename(file_path),
            })
    
    return redirect(browse)

@login_required
@can_gitload
def edit_file(request):
    """ View for [...]/gitload/view_file -- template: view_file.html"""
    if (request.method == 'POST'):
        file_path = request.POST.get('file_path', None)
        code = request.POST.get('code', None)
        file_content2 = request.POST.get('file_content', None)
        remotely_changed = False
        browser = Browser(None, dic=request.session["browser"])
        
        if browser.name == "plbank":
            messages.warning(request, "Vous sur plbank, ce dépot ne peut être actualisé par la plateforme. Vos changements ne pourront par conséquent pas être enregistre si la copie local est en retard par rapport à la copie distante.")
        
        if (code):
            try:
                browser.get_repo() 
                with open(DIRREPO+file_path, 'r') as f:
                    file_content = f.read()
                
                file_content = file_content.replace('\r', "")
                file_content2 = file_content2.replace('\r', "")
                
                if file_content.rstrip() != file_content2.rstrip():
                    remotely_changed = True
                    messages.error(request, "Le fichier a déjà été modifié par une autre personne/un autre programme, le fichier à donc été recharger.")
                    messages.warning(request, "Vos changements sont toujours disponibles sous le bouton 'Sauvegarder'.")
                
                else:
                    with open(DIRREPO+file_path, "w") as f:
                            print(code, file=f)
                    error_msg = browser.push_file(DIRREPO+file_path, request.POST['commit'], request.POST['username'], request.POST['password'])
                    if not error_msg:
                        messages.info(request, "Fichier sauvegardé avec succès")
                    else: #Push failed, cancel changes
                        with open(DIRREPO+file_path, "w") as f:
                            print(file_content, file=f)
                        remotely_changed = True
                        messages.error(request, "Impossible de pousser les changements:<br><i>"+error_msg+"</i><br><br>les modifications ont été annulées.")
                        messages.warning(request, "Vos changements sont toujours disponibles sous le bouton 'Sauvegarder'.")
                
                return render(request,  'gitload/edit_file.html', {
                    'file_content': code,
                    'remotely_changed': remotely_changed,
                    'filename': basename(file_path),
                    'filepath': file_path,
                    'changed_content': file_content,
                })
            except Exception as e:
                messages.error(request, "Impossible d'accéder au fichier'"+file_path+"': ("+str(type(e)).replace('<', '[').replace('>', ']')+" - " +str(e) + ").")
            
        elif (file_path):
            try:
                with open(DIRREPO+file_path, 'r') as f:
                    file_content = f.read()
                return render(request,  'gitload/edit_file.html', {
                    'file_content': file_content,
                    'filename': basename(file_path),
                    'filepath': file_path,
                })
            except:
                messages.error(request, "Impossible d'accéder au fichier'"+file_path+"'");
    
    return redirect(browse)



@login_required
@can_gitload
def loaded_pltp(request):
    """ View for [...]/gitload/loaded_pltp -- template: loaded_pltp.html"""
    allpltp = PLTP.objects.all();
    
    if (request.method == 'POST'):
        pltp_delete = request.POST.get('pltp_delete', "")
        rel_path = request.POST.get('rel_path', "")
        repo_name = request.POST.get('repo', "")
        if (pltp_delete != ""):
            try:
                to_del = PLTP.objects.get(sha1=pltp_delete)
                name_del = to_del.name
                to_del.delete()
                messages.warning(request, "Le PLTP <b>"+name_del+"</b> a bien été supprimé !")
            except Exception as e:
                messages.error(request, "Erreur lors de la suppression du PLTP <b>"+name_del+"</b>:<br>"+str(type(e)).replace("<", "[").replace(">", "]")+": "+str(e)).replace("<", "[").replace(">", "]")
        
        elif repo_name == "N/A":
            messages.error(request, "<b>Erreur:</b> Impossible de recharger l'activité <b>"+rel_path+"</b> car le dépot asssocié à été supprimé")
        elif (rel_path != "" and repo_name != ""):
            repo = Repository.objects.get(name=repo_name)
            browser = Browser(None, dic=request.session["browser"])
            pltp, msg = browser.reload_pltp(rel_path, repo)
            if (not pltp):
                except_msg = msg
                messages.error(request, "La mise à jour du pltp à échoué: "+except_msg.replace("<", "[").replace(">", "]"))
            else:
                activity = Activity(id=0, pltp=pltp, name=pltp.name)
                activity.save()
                url_lti = request.get_host()+"/playexo/activity/lti/"+activity.name+"/"+activity.pltp.sha1+"/"
                url_test = "/playexo/activity/test/"+activity.name+"/"+activity.pltp.sha1+"/"
                if (msg):
                    messages.warning(request, msg)
                messages.success(request, "Le PLTP <b>"+pltp.name+"</b> a été rechargé avec succès !")
                messages.success(request, "L'activité <b>'"+activity.name+"'</b> a bien été créée et a pour URL LTI: <a>"+url_lti+"</a>.<br>&emsp; &emsp; Elle apparaitra dans la liste ci-dessous lorsqu'une personne cliquera sur le lien depuis un client LTI. Pour la tester en local, cliquez <a target=\"_blank\" href=\""+url_test+"\">ici</a>.")
            
    
    return render(request, 'gitload/loaded_pltp.html', {
        'pltp': allpltp,
        'domain': "http://"+request.get_host(),
    })

@login_required
@can_gitload
def loaded_pl(request):
    """ View for [...]/gitload/loaded_pl -- template: loaded_pl.html"""
    allpl = PL.objects.all();
    
    return render(request, 'gitload/loaded_pl.html', {
        'pl': allpl,
    })
    
@login_required
@can_gitload
def activity(request):
    activities = Activity.objects.all()
    pltps = PLTP.objects.all()
    activity = None
    
    if (request.method == 'POST'):
        activity_delete = request.POST.get('activity_delete', "")
        
        if (activity_delete != ""):
            try:
                to_del = Activity.objects.get(name=activity_delete)
                name_del = to_del.name
                to_del.delete()
                messages.warning(request, "L'Activité <b>"+name_del+"</b> a bien été supprimée !")
            except Exception as e:
                messages.error(request, "Erreur lors de la suppression de l'Activité <b>ID: "+activity_delete+"</b>: "+str(type(e)).replace("<", "[").replace(">", "]") +": " +str(e).replace("<", "[").replace(">", "]"))

        
    return render(request, 'gitload/activity.html', {
        'activities': activities,
        'pltps': pltps,
        'activity': activity,
        'domain': "http://"+request.get_host(),
    })
