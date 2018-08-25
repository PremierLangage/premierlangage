#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Python 3.5.4
#
#  Author: Coumes Quentin


import json, time, traceback, htmlprint

from django.template import Template, RequestContext, Context

from loader.models import PLTP

from playexo.models import Answer
from playexo.request import SandboxSession


lang = ['abap', 'abc', 'actionscript', 'ada', 'apache_conf', 'applescript', 'asciidoc', 'assembly_x86', 'autohotkey', 'batchfile', 'bro', 'c9search', 'c_cpp', 'cirru', 'clojure', 'cobol', 'coffee', 'coldfusion', 'csharp', 'csound_document', 'csound_orchestra', 'csound_score', 'css', 'curly', 'd', 'dart', 'diff', 'django', 'dockerfile', 'dot', 'drools', 'eiffel', 'ejs', 'elixir', 'elm', 'erlang', 'forth', 'fortran', 'ftl', 'gcode', 'gherkin', 'gitignore', 'glsl', 'gobstones', 'golang', 'graphqlschema', 'groovy', 'haml', 'handlebars', 'haskell', 'haskell_cabal', 'haxe', 'hjson', 'html', 'html_elixir', 'html_ruby', 'ini', 'io', 'jack', 'jade', 'java', 'javascript', 'json', 'jsoniq', 'jsp', 'jssm', 'jsx', 'julia', 'kotlin', 'latex', 'lean', 'less', 'liquid', 'lisp', 'live_script', 'livescript', 'logiql', 'lsl', 'lua', 'luapage', 'lucene', 'makefile', 'markdown', 'mask', 'matlab', 'maze', 'mel', 'mips_assembler', 'mipsassembler', 'mushcode', 'mysql', 'nix', 'nsis', 'objectivec', 'ocaml', 'pascal', 'perl', 'pgsql', 'php', 'pig', 'plain_text', 'powershell', 'praat', 'prolog', 'properties', 'protobuf', 'python', 'r', 'razor', 'rdoc', 'red', 'rhtml', 'rst', 'ruby', 'rust', 'sass', 'scad', 'scala', 'scheme', 'scss', 'sh', 'sjs', 'smarty', 'snippets', 'soy_template', 'space', 'sparql', 'sql', 'sqlserver', 'stylus', 'svg', 'swift', 'swig', 'tcl', 'tex', 'text', 'textile', 'toml', 'tsx', 'turtle', 'twig', 'typescript', 'vala', 'vbscript', 'velocity', 'verilog', 'vhdl', 'wollok', 'xml', 'xquery', 'yaml']
default_load = '{% load static %}{% load django_markdown %}{% load input_fields_ajax %}{% load json_filter %}'

# FIXME add a comment to explain this list, maybe it should be defined elsewere
pls_known = [
    ('form', 'form'), ('css', 'css'), ('pl', 'exo'),
    ('pltp', 'exo'), ('navigation', 'navigation'),
    ('load', 'load'), ('state', 'state'), ('end_script', 'end_script'),
    ('header_script', 'header_script'), ('buttons', 'buttons'),
]




class ActivityInstance:
    """Used to run a PLTP and its PL. """
    def __init__(self, request, activity, pl=None):
        self.dic = {
            'activity_name__': activity.name,
            'activity_id__'  : activity.id,
            'pltp_name__'    : activity.pltp.name,
            'pltp_title__'   : activity.pltp.json["title"],
            'pltp_sha1__'    : activity.pltp.sha1,
        }
        
        if pl:
            seed = Answer.last_seed(pl, request.user)
            # FIXME  if last Answer is a success then reset seed.
            if 'oneshot' in pl.json or not seed or Answer.last_success(pl,request.user) == True : #
                seed = time.time()

            self.dic.update({
                'pl_id__'   : pl.id,
                'pl_name__' : pl.name,
                'seed'      : float(seed),
            })
            self.dic.update(pl.json)
        else:
            self.dic.update(activity.pltp.json)
    
    
    def evaluate(self, response):
        dic = self.intern_build()
        dic['response'] = response
        if 'evaluator' not in self.dic:
            try:
                answer = response.get('answer')
                if 'timeout' in locals():
                    sandbox_session = SandboxSession(self.dic, studentfile=answer, timeout=timeout)
                else:
                    sandbox_session = SandboxSession(self.dic, studentfile=answer)
                    
                response = json.loads(sandbox_session.call())
                state = response['grade']
                feedback = response['feedback']
                if 'error' in response:
                    feedback  += '\n\n' + htmlprint.code(response['error'])
                return (None if state == "info" else True if state else False, feedback)
            except KeyError as e:
                return (
                    None,
                   ( "La réponse reçu par la sandbox n'est pas au bon format :<br>"
                        + htmlprint.html_exc())
                )
            except Exception as e:
                s = ("/!\ ATTENTION: La fonction d'évaluation de cet exercice est incorrecte,"
                              + "merci de prévenir votre professeur:<br>"
                              + htmlprint.html_exc())
                return None, s
        else:
            try:
                exec(dic['evaluator'], dic)
                if not 'grade' in dic \
                        or type(dic['grade'][0]) not in [int, bool, type(None)] \
                        or type(dic['grade'][1]) != str:
                    return None, ("/!\ ATTENTION: La fonction d'évaluation de cet"
                        + " exercice est incorrecte, merci de prévenir votre professeur:<br>"
                        + " evaluator/before should declare a tuple called 'grade' (bool, str).")
                # FIXME ceci est redondant avec le code de reinitialisation de la seed
                # ecrit plus haut mais fonctionne en mode test
                del dic['seed']
                return dic['grade']
            except Exception as e:
                return None, ("/!\ ATTENTION: La fonction d'évaluation de cet exercice est incorrecte"
                    + "merci de prévenir votre professeur:<br>" + htmlprint.html_exc())
    
    
    #@timeout_decorator.timeout(5, use_signals=False)
    def intern_build(self):
        try:
            dic = dict(self.dic)
            if 'build' in self.dic:
                exec(self.dic['build'], globals())
                dic = build(self.dic)
            elif 'before' in self.dic:
                exec(self.dic['before'], dic)
        except Exception as e:
            raise Exception("Error while executing build or before:\n\n"
                + str(type(e)) + "\n" 
                + str(traceback.format_exc())
            )
        return dic
    
    
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
            for key, block_name in pls_known:
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
    def __init__(self, pl_dic):
        self.dic = pl_dic
        if not 'seed' in pl_dic:
             self.dic['seed'] = time.time()
    
    
    def get_template(self): 
        raw = '{% extends "playexo/preview.html" %}' + default_load
        for key, block_name in pls_known:
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
