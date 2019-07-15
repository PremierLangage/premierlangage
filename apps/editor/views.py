
import htmlprint
import traceback
from django.conf import settings
from django.contrib import messages
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import (HttpResponse, HttpResponseBadRequest, HttpResponseNotAllowed,
                         HttpResponseNotFound, JsonResponse)
from filebrowser.utils import rm_fb_root, join_fb_root, missing_parameter


from editor.compilers.pl.pl_parser import find_parser

@login_required
def index(request):
    """ Used by the editor module to navigate """
    return render(request, 'editor/index.html')

@login_required
def compile(request):
    path = request.GET.get('path')
    try:
        parser = find_parser(path)
        ast = parser.parse(path)
        return JsonResponse({
            'ast': ast
        })
    except Exception as e:  # pragma: no cover
        traceback.print_exc()
        msg = "Impossible to open '" + path + "' : " + htmlprint.code(
            str(type(e)) + ' - ' + str(e))
        if settings.DEBUG:
            messages.error(request, "DEBUG set to True: " + htmlprint.html_exc())
        return HttpResponseNotFound(msg)

# 127.0.0.1:8000/editor/compile?path=Yggdrasil/pl-test/components/text.pl