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
    
    archive = request.FILES.get('files.zip')
    title = request.POST.get('title')
    description = request.POST.get('description')
    modification = request.POST.get('modification')
    author = request.POST.get('author')
    tags = request.POST.getlist('tags')
    
    if not archive:
        return HttpResponseBadRequest("No archives named 'files.zip' found in the request.")
    if not (title and description and author and tags):
        return HttpResponseBadRequest("At least one of these parameters are missing: "
                                    + "<title>, <description>, <author> or <tags>.")
    if not zipfile.is_zipfile(archive):
        return HttpResponseBadRequest("Archive 'files.zip' is not a valid zip.")
    
    try:
        with zipfile.ZipFile(archive, compression=zipfile.ZIP_DEFLATED) as archive:
            print(archive.namelist())
        

    except Exception as e:
        out = "An unknown error occured while publishing'" + title + "'."
        err = "DEBUG set to True: <br>" + htmlprint.html_exc()
        return HttpResponse(
            json.dumps({'err': err, 'out': out}),
            content_type='application/json',
            status=501
        )
    return HttpResponse("CODE", status=200)


