#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Python 3.5.4
#
#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-07-05
#  Last Modified: 2017-11-16

import json, logging

from django.http import HttpResponse, Http404, HttpResponseRedirect, HttpResponseBadRequest
from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied
from django.urls import reverse

from loader.models import PLTP, PL

from playexo.exercise import PLInstance, ActivityInstance
from playexo.models import Activity, ActivityTest, Answer

from classmanagement.models import Course


logger = logging.getLogger(__name__)


@login_required
@csrf_exempt
def activity_ajax(request):
    exercise = request.session.get('exercise', None)
    if not exercise:
        return HttpResponse("No exercise found in the session", status=409)
    
    exercise = PLInstance(exercise)
    status = json.loads(request.body.decode())
    
    if status['requested_action'] == 'save':
        feedback_type = "info"
        feedback = "Réponse enregistré avec succès"
        Answer(
            value=status['inputs'],
            user=request.user,
            pl=PL.objects.get(id=exercise.dic['pl_id__']),
            seed=exercise.dic['seed'],
            grade=-1
        ).save()
        return HttpResponse(json.dumps({'feedback_type': feedback_type, 'feedback': feedback}), content_type='application/json')
    
    elif status['requested_action'] == 'submit': # Validate
        success, feedback = exercise.evaluate(status['inputs']) 
       
        if success == None:
            feedback_type = "info"
            Answer(value=status['inputs'], user=request.user, pl=PL.objects.get(id=exercise.dic['pl_id__']), seed=exercise.dic['seed'], grade=-1).save()
        elif success:
            feedback_type = "success"
            Answer(value=status['inputs'], user=request.user, pl=PL.objects.get(id=exercise.dic['pl_id__']), seed=exercise.dic['seed'], grade=100).save()
        else:
            feedback_type = "fail"
            Answer(value=status['inputs'], user=request.user, pl=PL.objects.get(id=exercise.dic['pl_id__']), seed=exercise.dic['seed'], grade=0).save()
        return HttpResponse(json.dumps({'feedback_type': feedback_type, 'feedback': feedback}), content_type='application/json')
    return HttpResponseBadRequest("Missing action in status")



@csrf_exempt
@login_required
def activity_receiver(request, activity_id, test=False):
    if request.method == "POST": # Received ajax request
        return activity_ajax(request)
    
    if test:
        activity = get_object_or_404(ActivityTest, id=activity_id)
    else:
        activity = get_object_or_404(Activity, id=activity_id)
    
    current_pl = request.session.get("current_pl", None)
    current_pl = None if current_pl == None else PL.objects.get(id=current_pl)
    exercise = ActivityInstance(request, activity, current_pl)
    
    if request.method == 'GET' and request.GET.get("action", None):
        action = request.GET.get("action", None)
        if action == "pl":
            request.session["current_pl"] = request.GET.get("pl_id", None)
        
        elif action == "pltp":
            request.session["current_pl"] = None
        
        elif current_pl and action == "reset":
            value = "" if 'code' not in exercise.dic else exercise.dic["code"]
            Answer(value=value, user=request.user, pl=current_pl, seed=exercise.dic['seed'], grade=-1).save()
        
        elif current_pl and action == "next":
            for current, next in zip(activity.pltp.pl.all(), list(activity.pltp.pl.all())[1:]+[None]):
                if current_pl.id == current.id:
                    request.session["current_pl"] = None if next == None else next.id
                    break
            else:
                request.session["current_pl"] = None
        
        return HttpResponseRedirect(reverse("playexo:activity_receiver",args=[activity_id]))
    
    request.session['exercise'] = exercise.dic
    if current_pl:
        Answer(value={}, user=request.user, pl=PL.objects.get(id=current_pl.id), seed=exercise.dic['seed'], grade=-1).save()
    return HttpResponse(exercise.render(request))


@login_required
def test_receiver(request, activity_name, pltp_sha1):
    pltp = get_object_or_404(PLTP, sha1=pltp_sha1);
    activity = ActivityTest(pltp=pltp, name=activity_name)
    activity.save();
    
    request.session['current_activity'] = activity.id
    request.session['current_pl'] = None
    request.session['testing'] = True
    return HttpResponseRedirect(reverse("playexo:activity_receiver"))
