import traceback

from shared import htmlprint
from django.conf import settings
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied
from django.http import (HttpResponseNotFound, JsonResponse)
from django.shortcuts import render

from editor.compilers.pl.pl_parser import find_parser



@login_required
def index(request):
    """ Used by the editor module to navigate """
    if not (request.user.is_authenticated and request.user.profile.can_load()):
        raise PermissionDenied("You cannot access editor.")
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
