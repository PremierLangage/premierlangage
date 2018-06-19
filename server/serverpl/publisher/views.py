import os, json, shutil, htmlprint, urllib

from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseNotAllowed

from django.conf import settings
from publisher.models import Publisher


@login_required
def publish_receiver(request):
    """ Apply an option using the POST method """
    if not request.method == 'POST':
        return HttpResponseNotAllowed(['POST'])
    destination = request.POST.get('destination',None)
    file = request.FILES['file']
    commit = request.POST.get('commit', None)
    date = request.POST.get('date', None)
    auteur = request.POST.get('auteur', None)
    tag = request.POST.get('tag', None)
    git = request.POST.get('git', None)

    if isfile(join(destination,key)+"meta") :
        strjson = str.split(settings.DELIMITER)[1]
        dico1 = json.loads(strjson)
        dico1['commit'].append(commit)
        dico1['last_update'] = date
        last_version = dico1['version'][len(dico1['version']) - 1]
        dico1['version'].append((last_version[1] + 1, git))
        json1 = json.dumps(dico1)
        key = dico1['key']
        with open(join(destination, key), "wb+") as source :
            source.write(str.split(settings.DELIMITER)[0].encode('ascii'))
            source.write(settings.DELIMITER.encode('ascii'))
            source.write(json1.encode('ascii'))
        messages.success(request, "File '" + file.name + "' successfully publish update.")
    else :
        p = Publisher(name=file.name)
        p.save()
        dico = {'commit': [commit], 'last_update': date, 'creation': date, 'author': auteur,
                'tag': [tag], 'key': p.key, 'version': [(0, git)]}
        with open(join(destination, p.key), "wb+") as dest :
            for chunk in file.chunks() :
                dest.write(chunk)
            dest.write(settings.DELIMITER.encode('ascii'))
            json1 = json.dumps(dico)
            dest.write(json1.encode('ascii'))
        messages.success(request, "File '" + file.name + "' successfully publish.")
