import json, zipfile, os, shutil
from os.path import join, isfile

from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseBadRequest

from django.conf import settings
from publisher.models import Publisher
from filebrowser.utils import redirect_fb


@login_required
def publish_receiver(request):

    destination = request.POST.get('destination', None)
    path_zip = request.POST.get('path_zip', None)
    commit = request.POST.get('commit', None)
    date = request.POST.get('date', None)
    author = request.POST.get('author', None)
    tag = request.POST.getlist('tag', None)
    git = request.POST.get('git', None)
    try:
        if not (destination and path_zip and commit and date and author and tag and git):
            return HttpResponseBadRequest()
        if not zipfile.is_zipfile(settings.FILEBROWSER_ROOT + "/" + path_zip):
            raise Exception()
        with zipfile.ZipFile(settings.FILEBROWSER_ROOT+"/"+path_zip) as arc:
            extract_destination = join(settings.FILEBROWSER_ROOT+"/"+destination,
                                       path_zip.split("/")[-1].split(".")[0])
            destination = join(settings.FILEBROWSER_ROOT, destination)
            arc.extractall(extract_destination)
            tab = list(arc.namelist())
            size_tab = len(tab)
            if size_tab <= 2 and size_tab != 0:
                if size_tab == 2:
                    name = 'meta.json'
                    if isfile(join(extract_destination, name)):
                        with open(join(extract_destination, name), "r+") as metadata_publish:
                            dic = json.loads(metadata_publish.read())
                            key = dic['key']
                        with open(join(join(destination, str(key)), "meta.json"), "r") \
                                as meta_source:
                            dic_source = json.loads(meta_source.read())
                            dic_source['commit'].append(commit)
                            dic_source['last_update'] = date
                            last_version = dic_source['version'][len(dic_source['version']) - 1]
                            dic_source['version'].append((last_version[0] + 1, git))
                            json1 = json.dumps(dic_source)
                        with open(join(join(destination, str(key)), "meta.json"), "w") \
                                as meta_source:
                            meta_source.write(json1)
                    else:
                        msg = "Impossible to publish this file no metadata"
                        shutil.rmtree(extract_destination)
                        messages.error(request, msg)

                    name = [name for name in tab if name != 'meta.json'][0]

                    if isfile(join(extract_destination, name)):
                            with open(join(extract_destination, name), "rb+") as publish:
                                with open(join(join(destination, str(key)), name), "wb") as source:
                                    source.write(publish.read())
                    else:
                        msg = "Impossible to publish this file is not a file"
                        shutil.rmtree(extract_destination)
                        messages.error(request, msg)

                    shutil.rmtree(extract_destination)
                    messages.success(request, "File successfully publish update.")

                elif size_tab == 1:
                    p = Publisher(name=join(destination, tab[0]))
                    p.save()
                    dic = {'commit': [commit],
                           'last_update': date,
                           'creation': date,
                           'author': author,
                           'tag': tag,
                           'key': p.key,
                           'version': [(0, git)],
                           }

                    with open(join(extract_destination, 'meta.json'), "w+") as metadata_source:
                        json1 = json.dumps(dic)
                        metadata_source.write(json1)
                    os.rename(extract_destination, join(destination, str(p.key)))
                    messages.success(request, "File successfully publish.")
            else:
                msg = "Impossible to publish this  nb file"
                shutil.rmtree(extract_destination)
                messages.error(request, msg)

    except Exception as e:
        msg = "Impossible to publish this file exception"
        messages.error(request, msg)
    return redirect_fb(request.GET.get('relative_h', '.'))


