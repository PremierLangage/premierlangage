#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  feedback.py
#  
#  Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
#  



from jinja2 import Template


def subnlbybr(str):
    """
>>> subnlbybr("\\n")
'<br/>'
    """
    return "<br/>".join(str.split("\n"))

class Feedback:
    """
	Classe de stockage et de production des sorties d'un exercie pl
    """
    def __init__(self):
        self.compilation = False # No error yet
        self.success = True
        self.showinput= False
        self.executionhistory = []
        self.feedbacktext=""
        self.asio=False
        self.template = Template('''
<html><body>
<div class>
{%- if  feedback.compile %}
    <h3> Erreur de Compilation</h3>{{- feedback.compilationError }}
{{ feedback.feedbacktext }}
{%- else %}
{% if feedback.asio %}
<h3> Executions </h3>
{%- for type,text in feedback.executionhistory %}
    {%- if feedback.showinput and type=="input" %}
    <span>
        <p>{{text}}</p>
    </span>
    {%- endif %}
    {%- if  type== "output" %}
    <span><p>{{text}}</p></span>
    {%- elif type=="optained" %}
    <span>
        <p>Obtenu:<br/>{{text}}</p>
    </span>
    {%- elif type=="expected" %}
        <span>
        <p>Attendu:<br/>{{text}}</p>
    </span>
    {%- endif %}
    {%- endfor %}
{%- else %}
<h3> Executions </h3>
{%- for type,text in feedback.executionhistory %}
    {%- if feedback.showinput and type=="input" %}
    <span>
        <p>{{text}}</p>
    </span>
    {%- endif %}
    {%- if type=="output" %}
    <span>
        <p><br/>{{text}}</p>
    </span>
    {%- endif %}
    {%- endfor %}
{%- endif %}
{%- endif %}
{%- if feedback.success %}
<H3> Bravo ! </H3>
{{ feedback.feedbacktext }}
{%- endif %}

</div>
<!-- feedback -->
</body></html>
''')

    def addInput(self,newinput):
        self.executionhistory.append(("input",subnlbybr(newinput)))
    def addOutput(self,newoutput):
        self.executionhistory.append(("output",subnlbybr(newoutput)))
    def addExpected(self,newoutput):
        self.executionhistory.append(("expected",subnlbybr(newoutput)))
    def addOptained(self,newoutput):
        self.executionhistory.append(("optained",subnlbybr(newoutput)))
    def addExpectedOptained(self,newoutput,expected):
        self.addExpected(expected)
        self.asio =True	
        self.addOptained(newoutput)
        self.success=False
    def addCompilationError(self,text):
        self.compilationError=subnlbybr(text)
        self.compile = True
        self.success = False
    def addFeedback(self,text):
        self.feedbacktext += subnlbybr(text)
    def feedback(self):
        return self.template.render(feedback=self)
    def setsuccess(value):
        self.success = value

    def buildTemplate(self,newtemplatestring):
        self.template = Template(newtemplatestring)
        
