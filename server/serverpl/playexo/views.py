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

from playexo.models import SessionActivity, Activity

from classmanagement.models import Course


logger = logging.getLogger(__name__)


@login_required
@csrf_exempt
def evaluate(request, activity_id, pl_id):
    pass
    #~ exercise = PLInstance(exercise)
    #~ status = json.loads(request.body.decode())
    
    #~ if status['requested_action'] == 'save':
        #~ feedback_type = "info"
        #~ feedback = "Réponse enregistré avec succès"
        #~ Answer(
            #~ value=status['inputs'],
            #~ user=request.user,
            #~ pl=PL.objects.get(id=exercise.dic['pl_id__']),
            #~ seed=exercise.dic['seed'],
            #~ grade=-1
        #~ ).save()
        #~ return HttpResponse(json.dumps({'feedback_type': feedback_type, 'feedback': feedback}), content_type='application/json')
    
    #~ elif status['requested_action'] == 'submit': # Validate
        #~ success, feedback = exercise.evaluate(status['inputs']) 
       
        #~ if success == None:
            #~ feedback_type = "info"
            #~ Answer(value=status['inputs'], user=request.user, pl=PL.objects.get(id=exercise.dic['pl_id__']), seed=exercise.dic['seed'], grade=-1).save()
        #~ elif success:
            #~ feedback_type = "success"
            #~ #  i  wanted to delete the seed in the Answer but we need it for the statistics
            #~ Answer(value=status['inputs'], user=request.user, pl=PL.objects.get(id=exercise.dic['pl_id__']), seed=exercise.dic['seed'], grade=100).save()
        #~ else:
            #~ feedback_type = "fail"
            #~ Answer(value=status['inputs'], user=request.user, pl=PL.objects.get(id=exercise.dic['pl_id__']), seed=exercise.dic['seed'], grade=0).save()
        #~ return HttpResponse(json.dumps({'feedback_type': feedback_type, 'feedback': feedback}), content_type='application/json')
    #~ return HttpResponseBadRequest("Missing action in status")



@csrf_exempt
@login_required
def activity(request, activity_id):
    activity = get_object_or_404(Activity, id=activity_id)
    session, _ = SessionActivity.objects.get_or_create(user=request.user, activity=activity)
    
    if request.method == 'GET':
        action = request.GET.get("action")
        if action == "pl":
            pl_id = request.GET.get("pl_id")
            if not pl_id or not pl_id.isdigit():
                return HttpResponseBadRequest("Missing/invalid parameter 'pl_id'")
            session.current_pl = get_object_or_404(PL, id=pl_id)
            session.save()
            
        elif action == "pltp":
            session.current_pl = None
            session.save()
        
        elif session.current_pl and action == "reset":
            Answer.objects.create(user=request.user, pl=current_pl)
        
        elif session.current_pl and action == "next":
            for previous, next in zip(activity.pltp.pl.all(), list(activity.pltp.pl.all())[1:]+[None]):
                if current_pl == previous:
                    session.current_pl = next
                    session.save()
            else:
                session.current_pl = None
                session.save()
        
        if action:
            return HttpResponseRedirect(reverse("playexo:activity", args=[activity_id]))  # Remove get arguments from URL
    
    if session.current_pl:
        Answer.objects.create(user=request.user, pl=current_pl)
    return render(request, 'playexo/exercise.html', session.exercise().get_context())
