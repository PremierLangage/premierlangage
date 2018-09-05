#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Python 3.5.4
#
#  Author: Coumes Quentin


import json, time, traceback, htmlprint

from django.template import Template, RequestContext, Context

from loader.models import PLTP

from playexo.models import Answer
from playexo.request import SandboxBuild, SandboxEval


lang = ['abap', 'abc', 'actionscript', 'ada', 'apache_conf', 'applescript', 'asciidoc', 'assembly_x86', 'autohotkey', 'batchfile', 'bro', 'c9search', 'c_cpp', 'cirru', 'clojure', 'cobol', 'coffee', 'coldfusion', 'csharp', 'csound_document', 'csound_orchestra', 'csound_score', 'css', 'curly', 'd', 'dart', 'diff', 'django', 'dockerfile', 'dot', 'drools', 'eiffel', 'ejs', 'elixir', 'elm', 'erlang', 'forth', 'fortran', 'ftl', 'gcode', 'gherkin', 'gitignore', 'glsl', 'gobstones', 'golang', 'graphqlschema', 'groovy', 'haml', 'handlebars', 'haskell', 'haskell_cabal', 'haxe', 'hjson', 'html', 'html_elixir', 'html_ruby', 'ini', 'io', 'jack', 'jade', 'java', 'javascript', 'json', 'jsoniq', 'jsp', 'jssm', 'jsx', 'julia', 'kotlin', 'latex', 'lean', 'less', 'liquid', 'lisp', 'live_script', 'livescript', 'logiql', 'lsl', 'lua', 'luapage', 'lucene', 'makefile', 'markdown', 'mask', 'matlab', 'maze', 'mel', 'mips_assembler', 'mipsassembler', 'mushcode', 'mysql', 'nix', 'nsis', 'objectivec', 'ocaml', 'pascal', 'perl', 'pgsql', 'php', 'pig', 'plain_text', 'powershell', 'praat', 'prolog', 'properties', 'protobuf', 'python', 'r', 'razor', 'rdoc', 'red', 'rhtml', 'rst', 'ruby', 'rust', 'sass', 'scad', 'scala', 'scheme', 'scss', 'sh', 'sjs', 'smarty', 'snippets', 'soy_template', 'space', 'sparql', 'sql', 'sqlserver', 'stylus', 'svg', 'swift', 'swig', 'tcl', 'tex', 'text', 'textile', 'toml', 'tsx', 'turtle', 'twig', 'typescript', 'vala', 'vbscript', 'velocity', 'verilog', 'vhdl', 'wollok', 'xml', 'xquery', 'yaml']
default_load = '{% load static %}{% load django_markdown %}{% load input_fields_ajax %}{% load json_filter %}'

# List of tuple (pl_key, block_name) to replace every block 'block_name' of the template with the
# content of 'pl_key'
context_key = [
    ('form', 'form'), ('css', 'css'), ('pl', 'exo'),
    ('pltp', 'exo'), ('navigation', 'navigation'),
    ('load', 'load'), ('state', 'state'), ('end_script', 'end_script'),
    ('header_script', 'header_script'), ('buttons', 'buttons'),
]




class ActivityInstance:
    """Used to run a PLTP and its PL. """
    def __init__(self, request, activity, pl=None):
        self.request = request
        self.dic = {
            'activity_name__': activity.name,
            'activity_id__'  : activity.id,
            'pltp_name__'    : activity.pltp.name,
            'pltp_title__'   : activity.pltp.json["title"],
            'pltp_sha1__'    : activity.pltp.sha1,
        }
        if pl:
            self.pl = pl
            seed = Answer.last_seed(pl, request.user)
            if 'oneshot' in pl.json or not seed or Answer.last_success(pl,request.user) == True :
                seed = time.time()

            self.dic.update({
                'pl_id__'   : pl.id,
                'pl_name__' : pl.name,
                'seed'      : float(seed),
            })
            self.dic.update(pl.json)
        else:
            self.dic.update(activity.pltp.json)
    
    
    def intern_build(self):
        response = SandboxBuild(self.dic).call()
        
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
        
        context.update(response)
        return context
    
    
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
    
    
    def get_context(self, request):
        pltp = PLTP.objects.get(sha1=self.dic['pltp_sha1__'])
        pl_list = list()
        is_pltp = True
        for item in pltp.pl.all():
            if 'pl_id__' in self.dic and item.id == self.dic['pl_id__']:
                is_pltp = False
                dic = self.intern_build()
                answer = Answer.last_answer(item, request.user)
                if answer:
                    dic['student_answer'] = answer
                c = Context(dic)
                c['user'] = request.user.profile
                for key in ['text', 'texth', 'form', 'title']:
                    if key in dic:
                        dic[key] = Template(dic[key]).render(c)
                            
            state = Answer.pl_state(item, request.user)
            pl_list.append({
                'id'   : item.id,
                'state': state,
                'title': item.json['title'],
            })
        
        if is_pltp:
            dic = dict(self.dic)
            c = Context(dic)
            c['user'] = request.user.profile
            for key in ['introduction', 'introductionh']:
                if key in dic:
                    dic[key] = Template(dic[key]).render(c)
        
        context = RequestContext(request, dic)
        context['pl_list__'] = pl_list
        
        return context
    
    
    def get_template(self):
        raw = '{% extends "playexo/default_pltp_exo.html" %}' + default_load
        if 'pl_id__' in self.dic:
            raw = '{% extends "playexo/default_pl_exo.html" %}' + default_load
            for key, block_name in context_key:
                if key in self.dic:
                    raw  += "{% block " + block_name + " %}{{ " + key + " }}{% endblock %}"
            
        return raw
    
    
    def render(self, request):  
        """ Return the rendered template for this PL """
        context = self.get_context(request)
        template = self.get_template()
        return Template(template).render(context)

    
    
class PLInstance(ActivityInstance):
    """Used to run/evaluate a PL alone, uses evaluate() and intern_build() of ActivityInstance."""
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
