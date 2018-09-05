#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Python 3.5.4
#
#  Author: Coumes Quentin


import json, time, traceback, htmlprint

from django.template import Template, RequestContext, Context
from django.template.loader import get_template
from loader.models import PLTP

from playexo.models import Answer
from playexo.request import SandboxBuild, SandboxEval



class ActivityRenderer():
    """Used to run a PLTP and its PL."""
    def __init__(self, request, session):
        self.request = request
        self.session = session
        self.exercise = session.exercise()
        
    
    def build(self):
        response = SandboxBuild(dict(self.exercise.context)).call()
        
        if response['status'] < 0:
            msg = ("An error occured on the sandbox (exit code: %d, env: %s). Merci de prévenir"
                   + " votre professeur.") % (response['status'], response['id'])
            if self.request.user.profile.can_load():
                msg += "\n\n" + response['sandboxerr']
            raise Exception(msg)
        
        if response['status'] > 0:
            msg = (("An error occured during the execution of the build/before script (exit code:"
                    + "%d, env: %s). Merci de prévenir votre professeur")
                   % (response['status'], response['id']))
            if self.request.user.profile.can_load() and response['stderr']:
                msg += "\n\nReceived on stderr:\n" + response['stderr']
            raise Exception(msg)
        
        context = dict(response['context'])
        keys = list(response.keys())
        for key in keys:
            response[key+"__"] = response[key]
        for key in keys:
            del response[key]
        del response['context__']
        
        self.exercise.context.update(response)
    
    
    def evaluate(self, uuid, sandbox_url, answers):
        context = {}
        answer = {}
        evaluator = SandboxEval(uuid, sandbox_url, answers)
        if not evaluator.check():
            context = self.intern_build()
            evaluator = SandboxEval(context['id__'], context['sandbox_url__'], answers)
        
        response = evaluator.call()
        if response['status'] < 0: # Sandbox Error
            feedback = response['feedback']
            if self.request.user.profile.can_load():
                feedback += "\n\n" + response['sandboxerr']
        
        elif response['status'] > 0:  # Evaluator Error
            feedback = response['feedback']
            if self.request.user.profile.can_load():
                feedback += "\n\nReceived on stderr:\n" + response['stderr']
        
        else: # Success
            context = dict(response['context'])
            feedback = response['feedback']
            answer = {
                "value": answers,
                "user": self.request.user,
                "pl": self.pl,
                "seed": context['seed'],
                "grade": response['grade'],
            }
            
            keys = list(response.keys())
            for key in keys:
                response[key+"__"] = response[key]
            for key in keys:
                del response[key]
            del response['context__']
            context.update(response)
            context['feedback__'] = feedback
        
        return context, answer
    
    
    def get_navigation(self):
        context = {}
        context.append({
                'id'   : None,
                'state': None,
                'title': self.session.activity.pltp.json['title'],
        })
        for pl in self.session.activity.pltp.pl.all():
            context.append({
                'id'   : item.id,
                'state': Answer.pl_state(item, request.user),
                'title': item.json['title'],
            })
        return get_template("playexo/navigation.html").render(context, self.request)
    
    
    def get_exercise(self):
        pl = self.exercice.pl
        c = Context(self.exercise.context)
        c['user_settings__'] = request.user.profile
        
        if pl:
            c.update(self.build())
            c['pl_id__'] = pl.id
            answer = Answer.last_answer(pl, request.user)
            if answer:
                c['answer__'] = answer.answers
            for key in c:
                c[key] = Template(dic[key]).render(c)
            return get_template("playexo/pl.html").render(context, self.request)
        
        else:
            for key in c:
                c[key] = Template(dic[key]).render(c)
            return get_template("playexo/pltp.html").render(context, self.request)
    
    
    
    def context(self):
        return {
            "navigation": self.get_navigation(),
            "exercise": self.exercise(),
        }

    
    
class PLInstance(ActivityRenderer):
    """Used to test a PL alone."""
    def __init__(self, pl_dic, request):
        self.request = request
        self.dic = pl_dic
        if not 'seed' in pl_dic:
             self.dic['seed'] = time.time()
    
    
    def get_template(self): 
        raw = '{% extends "playexo/preview.html" %}' + default_load
        for key, block_name in context_key:
            if key in self.dic:
                raw  += "{% block " + block_name + " %}{{ " + key + " }}{% endblock %}"
        return raw
    
    
    def get_context(self, request):
        context = RequestContext(request)
        dic = self.intern_build()
        c = Context(dic)
        c['user'] = request.user.profile
        for key in ['text', 'texth', 'introduction', 'introductionh', "form", "title"]:
            if key in dic:
                dic[key] = Template(dic[key]).render(c)
        
        context.update(dic)
        return context
