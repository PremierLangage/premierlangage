#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Python 3.5.4
#
#  Author: Coumes Quentin


import json, timeout_decorator, time

from django.template import Template, RequestContext

from loader.models import PLTP

from playexo.models import Answer
from playexo.request import SandboxSession
from classmanagement.models import PLUser


lang = ['abap', 'abc', 'actionscript', 'ada', 'apache_conf', 'applescript', 'asciidoc', 'assembly_x86', 'autohotkey', 'batchfile', 'bro', 'c9search', 'c_cpp', 'cirru', 'clojure', 'cobol', 'coffee', 'coldfusion', 'csharp', 'csound_document', 'csound_orchestra', 'csound_score', 'css', 'curly', 'd', 'dart', 'diff', 'django', 'dockerfile', 'dot', 'drools', 'eiffel', 'ejs', 'elixir', 'elm', 'erlang', 'forth', 'fortran', 'ftl', 'gcode', 'gherkin', 'gitignore', 'glsl', 'gobstones', 'golang', 'graphqlschema', 'groovy', 'haml', 'handlebars', 'haskell', 'haskell_cabal', 'haxe', 'hjson', 'html', 'html_elixir', 'html_ruby', 'ini', 'io', 'jack', 'jade', 'java', 'javascript', 'json', 'jsoniq', 'jsp', 'jssm', 'jsx', 'julia', 'kotlin', 'latex', 'lean', 'less', 'liquid', 'lisp', 'live_script', 'livescript', 'logiql', 'lsl', 'lua', 'luapage', 'lucene', 'makefile', 'markdown', 'mask', 'matlab', 'maze', 'mel', 'mips_assembler', 'mipsassembler', 'mushcode', 'mysql', 'nix', 'nsis', 'objectivec', 'ocaml', 'pascal', 'perl', 'pgsql', 'php', 'pig', 'plain_text', 'powershell', 'praat', 'prolog', 'properties', 'protobuf', 'python', 'r', 'razor', 'rdoc', 'red', 'rhtml', 'rst', 'ruby', 'rust', 'sass', 'scad', 'scala', 'scheme', 'scss', 'sh', 'sjs', 'smarty', 'snippets', 'soy_template', 'space', 'sparql', 'sql', 'sqlserver', 'stylus', 'svg', 'swift', 'swig', 'tcl', 'tex', 'text', 'textile', 'toml', 'tsx', 'turtle', 'twig', 'typescript', 'vala', 'vbscript', 'velocity', 'verilog', 'vhdl', 'wollok', 'xml', 'xquery', 'yaml']
default_load = '{% load static %}{% load markdown_deux_tags %}{% load input_fields_ajax %}{% load json_filter %}'
pls_known = [
    ('form', 'form'), ('css', 'css'), ('pl', 'exo'),
    ('pltp', 'exo'), ('navigation', 'navigation'),
    ('load', 'load'), ('state', 'state'), ('end_script', 'end_script'),
    ('header_script', 'header_script')
]




class Exercise:
    def __init__(self, pl_dic):
        self.dic = pl_dic
    
    
    def evaluate(self, response):
        if 'evaluator' not in self.dic:
            try:
                if 'timeout' in locals():
                    sandbox_session = SandboxSession(self.dic, response['answer'], timeout=timeout)
                sandbox_session = SandboxSession(self.dic, response['answer'])
                feedback = json.loads(sandbox_session.call())
                if feedback['grade']['success'] == "info":
                    return (None, feedback['grade']['feedback'])
                elif feedback['grade']['success']:
                    return (True, feedback['grade']['feedback'])
                return (False, feedback['grade']['feedback'])
            except ValueError as e:
                return (None, "La réponse reçu part la sandbox n'est pas au bon format.")
            except Exception as e:
                return None, ("/!\ ATTENTION: La fonction d'évaluation de cet exercice est incorrecte, \
        merci de prévenir votre professeur:<br>Error - "+str(type(e)).replace("<", "[").replace(">", "]")+": "+str(e))
        else:
            try:
                _var= dict(self.dic)
                _var['response']=response
                exec(_var['before'],_var)
                exec(_var['evaluator'],_var)
                if not 'grade' in _var \
                 or (not isinstance(_var['grade'][0], bool) \
                and _var['grade'][0] != None) or (not isinstance(_var['grade'][1], str)):
                    return None, ("/!\ ATTENTION: La fonction d'évaluation de cet exercice est incorrecte, merci de prévenir votre professeur:\n"
                                  "Evaluator should declare a tuple called 'grade' (bool, str).")
                return _var['grade']
            except Exception as e:
                return None, ("/!\ ATTENTION: La fonction d'évaluation de cet exercice est incorrecte, merci de prévenir votre professeur:<br>Error - "+str(type(e)).replace("<", "[").replace(">", "]")+": "+str(e))

    #@timeout_decorator.timeout(5, use_signals=False)
    def intern_build(self):
        if 'build' in self.dic:
            exec(self.dic['build'], globals())
            self.dic = build(self.dic)
        elif 'before' in self.dic:
            print("Bande de mules")
            exec(self.dic['before'],self.dic)
        return self.dic
    
    
    def __get_context(self, request, feedback=None, success=None):
        #Bootstrap class corresponding to every state.
        color = { 
            Answer.SUCCEEDED: "1",
            Answer.FAILED: "2",
            Answer.STARTED: "3",
            Answer.NOT_STARTED: "4",
        }
        
        #Give the right state number for the css class according to user color blindness
        blindness = {
            PLUser.NONE: "",
            PLUser.DEUTERANOPIA: "-deuteranopia",
            PLUser.PROTANOPIA: "-protanopia",
            PLUser.TRITANOPIA: "-tritanopia",
        }

        
        pltp = PLTP.objects.get(sha1=self.dic['pltp_sha1'])
        pltp_json = pltp.json
        pl_list = list()
        for item in pltp.pl.all():
            state = Answer.pl_state(item, request.user)

            is_pl=False
            if 'pl_id' in self.dic and item.id == self.dic['pl_id']:
                if state != Answer.NOT_STARTED:
                    self.dic['student_answer'] = Answer.objects.filter(user=request.user, pl=item).order_by('-date')[0].value
                is_pl = True
            content = item.json
            pl_list.append((item, color[state]+blindness[request.user.pluser.color_blindness], content["title"]))
                
        context = RequestContext(request)
        dic = self.intern_build()
        context.update(dic)
        context['is_pl'] = is_pl
        context['pl_list'] = pl_list
        if 'custom_nav' in pltp_json:
            context['custom_nav'] = Template(pltp_json['custom_nav'])
        else:
            context['custom_nav'] = 'playexo/default_nav.html'
        
        if success:
            context['success'] = success
        if feedback:
            context['feedback']= feedback
        
        return context
    
    def __get_template(self):
        
        if 'pl_id' in self.dic:
            raw = '{% extends "playexo/default_pl_exo.html" %}'+default_load
            for key, block_name in pls_known:
                if key in self.dic:
                    raw += "{% block "+block_name+" %}"+self.dic[key]+"{% endblock %}"
        else:
            raw = '{% extends "playexo/default_pltp_exo.html" %}'+default_load
        return raw
        
    def render(self, request, feedback=None, success=None):  
        """ Return the rendered template for this PL """
        context = self.__get_context(request, feedback, success)
        template = self.__get_template()
        return Template(template).render(context)
    
    
    
class ExerciseTest(Exercise):
    def __init__(self, pl_dic):
        super().__init__(pl_dic)
    
    # @timeout_decorator.timeout(5, use_signals=False)
    def intern_build(self):
        if 'build' in self.dic:
            exec(self.dic['build'], globals())
            return build(self.dic)
        
        if 'before' in self.dic:
            for _key in self.dic: 
                exec(_key+'=self.dic["'+_key+'"]')
            exec(self.dic['before'])
            _var = locals()
            del _var['self']
            if '_key' in _var:
                del _var['_key']
            return _var
            
        return self.dic
    
    def __get_template(self): 
        raw = '{% extends "playexo/default_pl_test.html" %}'+default_load
        for key, block_name in pls_known:
            if key in self.dic:
                raw += "{% block "+block_name+" %}"+self.dic[key]+"{% endblock %}"
        return raw
    
    def __get_context(self, request, feedback=None, success=None):
        context = RequestContext(request)
        dic = self.intern_build()
        context.update(dic)
        if success:
            context['success'] = success
        if feedback:
            context['feedback']= feedback
        return context
        
    def render(self, request, feedback=None, success=None):  
        """ Return the rendered template for this PL """
        context = self.__get_context(request, feedback, success)
        template = self.__get_template()
        return Template(template).render(context)
