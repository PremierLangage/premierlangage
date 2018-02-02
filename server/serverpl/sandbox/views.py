#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Python [3.6]
#
#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-07-30
#  Last Modified: 2017-09-30

from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, Http404

from sandbox.executor import Executor



@csrf_exempt
def execute(request):
    if request.META["REQUEST_METHOD"] == "HEAD":
        return HttpResponse('OK !', status=200)
    if request.META["REQUEST_METHOD"] != "POST":
        mth=request.META["REQUEST_METHOD"]
        return HttpResponse('405 Method ' +mth+ ' Not Allowed', status=405)
    
    return HttpResponse(Executor(request).execute())


@csrf_exempt
def action(request):
    if "action" in request.GET:
        l = request.GET["action"]
    elif "action" in request.POST:
        l = request.POST["action"]
    else:
        return Http404("Aucune action définie.")
    if l == "languages":
        return HttpResponse('{"languages":["c","python"]}')
    if l == "version":
        return HttpResponse('{"version":"pysandbox-0.1"}')
    if l != "execute":
        return Http404("Erreur - Action inconnue: "+ l)
    
    return execute(request)
