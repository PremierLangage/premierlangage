#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  pythonbuildertest.py
#  
#  Copyright 2017 RB,QC,DR
#  

import random

default_load = '{% load bootstrap3 %}{% load static %}{% load markdown_deux_tags %}'

pls_known = [
    ('form', 'form'), ('css', 'css'), ('pl', 'exo'),
    ('pltp', 'exo'), ('navigation', 'navigation'),
    ('tag', 'tag'), ('state', 'state'), ('end_script', 'end_script'),
    ('header_script', 'header_script'),
]

class PythonBuilderTest:
    """ Used to test directly a PL """
    
    def __init__(self, pl_dic):
        self.pl_dic = pl_dic
        random.random()
        self.pl_dic['seed'] = random.seed()
        if 'build' in self.pl_dic:
            exec(self.pl_dic['build'], globals())
            self.pl_dic = build(self.pl_dic)
            
        self.template = self.__create_template()
    
    def __create_template(self): 
        raw = '{% extends "playexo/default_pl_test.html" %}'+default_load
        for key, block_name in pls_known:
            if key in self.pl_dic:
                raw += "{% block "+block_name+" %}"+self.pl_dic[key]+"{% endblock %}"
        return raw
    
    def get_dico(self):
        return self.pl_dic

