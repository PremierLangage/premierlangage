#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Python 3.5.4
#
#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-07-05
#  Last Modified: 2017-11-16

import json, traceback, logging

from sympy import evaluate

from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.urls import reverse
from django.contrib import messages

from gitload.models import PLTP, PL

from playexo.exercise import Exercise, ExerciseTest
from playexo.builder import PythonBuilder, PythonBuilderTest
from playexo.models import Activity, ActivityTest, Answer
from playexo.strategy import strategy as default_strategy

from classmanagement.models import Course


logger = logging.getLogger(__name__)


@csrf_exempt
@login_required
def activity_view(request):
    activity_id = request.session.get("current_activity", None)
    if activity_id == None:
        return HttpResponse("No activity found in the session", status=409)
    
    if request.session.get("testing", False):
        activity = get_object_or_404(ActivityTest, id=activity_id)
    else:
        activity = get_object_or_404(Activity, id=activity_id)
    
    dic = json.loads(activity.pltp.json)
    if "strategy" in dic:
        request.session["test_strategy"] = True
        try:
            exec(dic["strategy"], globals())
            strategy = globals()['strategy']
        except Exception as e:
            return render(request, 'playexo/strategy_failed.html', {'exc_type': str(type(e)), 'exc_msg': str(e), 'exc_trace': traceback.format_exc().replace('\n', '<br>')})
    else:
        strategy = default_strategy
    
    try:
        return strategy(request, activity)
    except Exception as e:
        return render(request, 'playexo/strategy_failed.html', {'exc_type': str(type(e)), 'exc_msg': str(e), 'exc_trace': traceback.format_exc().replace('\n', '<br>')})
    


@login_required
@csrf_exempt
def lti_receiver(request, activity_name, pltp_sha1):
    activity_id = request.session.pop("activity", None)
    course_id = request.session.pop("course_id", None)
    if not activity_id or not course_id:
        raise Http404("Impossible d'accéder à la page, la requête LTI doit contenir une ID d'activité ainsi que d'une ID de classe.")
    
    try:
        activity = Activity.objects.get(id=activity_id)
    except:
        try:
            pltp = PLTP.objects.get(sha1=pltp_sha1)
        except:
            raise Http404("Impossible de charger le TP associé à cette activité, celle-ci n'existe peut être plus sur la plateforme, merci de contacter votre professeur")
        activity = Activity(name=activity_name, pltp=pltp, id=activity_id)
        activity.save()
        logger.info("New activity created: '"+activity_name+" ("+str(activity_id)+")' and added to course of id "+str(course_id))
    Course.objects.get(id=course_id).activity.add(activity)
    
    request.session['current_activity'] = activity_id
    request.session['current_pl'] = None
    request.session['testing'] = False
    request.session['strategy_session'] = dict()
    return HttpResponseRedirect(reverse(activity_view))



@login_required
@csrf_exempt
def test_receiver(request, activity_name, pltp_sha1):
    pltp = get_object_or_404(PLTP, sha1=pltp_sha1);
    activity = ActivityTest(pltp=pltp, name=activity_name)
    activity.save();
    
    request.session['current_activity'] = activity.id
    request.session['current_pl'] = None
    request.session['testing'] = True
    request.session['strategy_session'] = dict()
    return HttpResponseRedirect(reverse(activity_view))



@login_required
@csrf_exempt
def try_pl(request, pl=None, warning=None):
    with evaluate(False):
        exercise = request.session.get('exercise', None)
    success = None
    feedback = None
    
    if pl:
        messages.success(request, "Le PL <b>"+pl.name+"</b> a bien été chargé.")
        messages.warning(request, warning)
        messages.error(request, "Attention, ceci est une session de test, les réponses ne seront pas enregistrer après la fermeture de la fenêtre (Pensez à copier/coller).")
    
    if not exercise:
        pl_dic = pl.json
        exercise = PythonBuilderTest(pl_dic).get_exercise()
    else:
        exercise = ExerciseTest(exercise)
    
    if request.method == 'GET' or request.method == 'POST':
        status = None
        try:
            status = json.loads(request.body.decode())
        except:
            pass
        if status and status['requested_action'] == 'submit' :
            success, feedback = exercise.evaluate(status['inputs'])
            if (success):
                feedback_type = "success"
            else:
                feedback_type = "failed"
            return HttpResponse(json.dumps({'feedback_type': feedback_type, 'feedback': feedback}), content_type='application/json')
            
    request.session['exercise'] = exercise.dic
    return HttpResponse(exercise.render(request, feedback, success))



def not_authenticated(request):
    logout(request)
    return render(request, 'playexo/not_authenticated.html', {})
