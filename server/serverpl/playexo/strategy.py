#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Python 3.5.4
#
#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-07-03
#  Last Modified: 2017-07-03

import json

from sympy import evaluate

from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.shortcuts import render, redirect, get_object_or_404

from playexo.builder import PythonBuilder
from playexo.exercise import Exercise, ExerciseTest
from playexo.builder import PythonBuilder, PythonBuilderTest
from playexo.models import Activity, ActivityTest, Answer

from loader.models import PLTP, PL
from playexo.models import Answer



class StrategyAPI():
    def __init__(self, activity):
        self.activity = activity
    
    
    def get_pltp_dic(self):
        """ Return the PLTP dictionnary """
        return self.activity.pltp.json
    
    def get_pl_list(self):
        """ Return the list of the PLs object sorted in the same order as in the PLTP """
        return list(self.activity.pltp.pl.all())
    
    
    def get_pl_index(self, index):
        """ Return PL object corresponding to its index in the PLTP """
        return self.activity.pltp.pl.all()[index]
    
    
    def get_pl_id(self, pl_id):
        """ Return PL object corresponding to pl_id """
        for item in self.activity.pltp.pl.all():
            if int(pl_id) == item.id:
                return item;
        raise ValueError(str(pl_id) + " does not correspond to any PL's id of this PLTP")
    
    
    def add_to_session(self, request, key, value):
        """ Add an value to the session so that it can be retrieve between each exercise """
        request.session["strategy_session"][key] = value
    
    
    def add_db_entry(self, exercise, request):
        Answer(value='', user=request.user, pl=PL.objects.get(id=exercise.dic['pl_id']), seed=exercise.dic['seed'], grade=-1).save()
    
    
    def get_from_session(self, request, key):
        """ Return the element assign to key in the session """
        if key in request.session["strategy_session"]:
            return request.session["strategy_session"][key]
        else:
            return None
    
    def get_current_pl(self, request):
        """ Return the user's current PL, None if the user is on the PLTP introduction """
        pl_id = request.session.get("current_pl", None)
        if pl_id:
            return self.get_pl_id(pl_id)
        return None
    
    
    def get_previous_pl(self, request):
        """ Return the PL preceding current PL. None if current PL is None or the first one """
        pl_id = request.session.get("current_pl", None)
        
        pls = self.get_pl_list()
        if not pl_id:
            return None
        previous = pls[0]
        for pl in pls[1:]:
            if pl.id == pl_id:
                return previous
            previous = pl
        return None
        
    def get_next_pl(self, request):
        """ Return a PL object corresponding to the next PL in the PLTP order, the first PL if current one is None, None if current PL is the last one or current PL couldn't be find. """
        pl_id = request.session.get("current_pl", None)
        pls = self.get_pl_list()
        if not pl_id:
            return pls[0]
        current = False
        for pl in pls:
            if current:
                return pl
            if pl.id == pl_id:
                current = True
        return None
    
    
    def get_pl_dic(self, pl):
        """ Return the dictionnary of the PL corresponding to pl. None if pl = None """
        if not pl:
            return None
        for item in self.activity.pltp.pl.all():
            if pl.id == item.id:
                return item.json;
    
    
    def get_pl_dic_by_index(self, index):
        """ Return the dictionnary of the PL corresponding to its index in the PLTP. """
        return self.activity.pltp.pl.all()[index].json
    
    
    def get_answers(self, pl, request):
        """ Return a list of every answer sorted from the most recent to the older """
        return list(Answer.objects.filter(pl=pl, user=request.user).order_by("-date"))
    
    
    def get_last_good_answer(self, pl, request):
        """ Return the most recent good answer for this PL, None if none exists """
        for answer in self.get_answers(pl, request):
            if answer.state > 0:
                return answer
        return None
    
    
    def get_last_wrong_answer(self, pl, request):
        """ Return the most recent wrong answer for this PL, None if none exists """
        for answer in self.get_answers(pl, request):
            if answer.state == 0:
                return answer
        return None
    
    
    def get_last_answer(self, pl, request):
        """ Return the most recent answer for this PL, None if none exists """
        answers = self.get_answers(pl, request)
        return None if not answers else answers[0]
    
    
    def get_answer_value(self, answer):
        return "" if not answer else answer.value
    
    
    def get_seed_from_answer(self, answer):
        """ Return the seed contained in answer, None if answer is None """
        return None if not answer else answer.seed;
    
    
    def evaluate(self, exercise, request):
        """ 
            Return the evaluation of the user's answer in the form of a tuple:
                - 'success'/'fail'/'info': The user succeeded / The user failed / Save or An error occured
                - Feedback
            
            Return None, None if the request doesn't contain any AJAX request.
            
            Calling this function will also save the user's answer in the database.
        """
        status = json.loads(request.body.decode())
        if status['requested_action'] == 'submit': # Validate
            success, feedback = exercise.evaluate(status['inputs'])
            if 'answer' in status['inputs']:
                value = status['inputs']['answer']
            else:
                value = ""
            if success == None:
                feedback_type = "info"
                Answer(value=value, user=request.user, pl=PL.objects.get(id=exercise.dic['pl_id']), seed=exercise.dic['seed'], state=-1).save()
            elif success:
                feedback_type = "success"
                Answer(value=value, user=request.user, pl=PL.objects.get(id=exercise.dic['pl_id']), seed=exercise.dic['seed'], state=100).save()
            else:
                feedback_type = "fail"
                Answer(value=value, user=request.user, pl=PL.objects.get(id=exercise.dic['pl_id']), seed=exercise.dic['seed'], state=0).save()
            return feedback_type, feedback
                    
        elif status['requested_action'] == 'save': # Save
            if 'answer' in status['inputs']:
                value = status['inputs']['answer']
            else:
                value = ""
            Answer(value=value, user=request.user, pl=PL.objects.get(id=exercise.dic['pl_id']), seed=exercise.dic['seed'], state=-1).save()
            return 'info', "Votre réponse à bien été enregistrée."
        return None, None # Not an AJAX request
    
    
    def send_evaluate_feedback(self, feedback_type, feedback):
        """ This function create and return an HttpReponse corresponding to the response waited by the AJAX request """
        return HttpResponse(json.dumps({'feedback_type': feedback_type, 'feedback': feedback}), content_type='application/json')
        
    
    def set_pl(self, pl, request):
        """ Set the user current exercice to the given PL, can be set to None to load the PLTP. """
        request.session["current_pl"] = pl.id if pl else None
    
    
    def reset_pl(self, exercise, request):
        """ Reset the PL to the default code """
        value = "" if 'code' not in exercise.dic else exercise.dic["code"]
        Answer(value=value, user=request.user, pl=PL.objects.get(id=exercise.dic['pl_id']), seed=exercise.dic['seed'], state=-1).save()
    
    def load_exercise(self, request, seed=None):
        """ 
            Load and return the exercise currently set with the given seed. If none was set, load and return the PLTP presentation. 
            If seed is None, a random seed will be generated.
        """
        pl = None
        if request.session["current_pl"]:
            pl = PL.objects.get(id=request.session["current_pl"])
            dic = pl.json
        return PythonBuilder(request, self.activity, pl, seed).get_exercise()
    
    
    def add_to_context(self, exercice, key, value):
        """ An an element to the template's context. """
        exercice.dic[key] = value
    
    
    def render(self, exercise, request):
        return HttpResponse(exercise.render(request, None, None))






def strategy(request, activity):
    """ Process request to determine what do to. Should return an HttpResponse. """
    strat = StrategyAPI(activity)
    if request.method == 'GET': # Request change which exercise will be loaded
        action = request.GET.get("action", None)
        if action == "pl":
            strat.set_pl(strat.get_pl_id(request.GET.get("pl_id", None)), request)
            return HttpResponseRedirect("/playexo/activity/") # Remove get parameters from url
        elif action == "pltp":
            strat.set_pl(None, request)
    
    dic = strat.get_pl_dic(strat.get_current_pl(request))
    seed = None
    if dic and 'oneshot' in dic and dic['oneshot'] == 'True':
        seed = None
    else:
        seed = strat.get_seed_from_answer(strat.get_last_answer(strat.get_current_pl(request), request))
    exercise = strat.load_exercise(request, seed)
    
    if request.method == 'GET': # Request changing or interacting an exercise
        if action == "reset":
            strat.reset_pl(exercise, request)
        elif action == "next":
            strat.set_pl(strat.get_next_pl(request), request)
            exercise = strat.load_exercise(request, seed)
            return HttpResponseRedirect("/playexo/activity/") # Remove get parameters from url
    
    if request.method == 'POST':
        state, feedback = strat.evaluate(exercise, request)
        return strat.send_evaluate_feedback(state, feedback)
    
    if strat.get_current_pl(request):
        strat.add_db_entry(exercise, request)
    return strat.render(exercise, request)




