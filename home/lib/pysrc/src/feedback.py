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
    if str :
       return "<br/>".join(str.split("\n"))
    return None



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
        self.div=[]
        self.asio=False
        with open("template.html", "r") as f:
            self.template = Template(f.read())
       

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
        
    def adddiv(self, text, indice):
        self.div.append((indice,subnlbybr(text)))
    
    def addsymbole(self, out, i, success):
        subnlbybr(out)
        if success:
            self.adddiv('v'+str(i),out[6:])
        else:
            self.adddiv('f'+str(i),out[19:])
        return 0
         
    def feedback(self):
        return self.template.render(feedback=self)


     
    def buttoncollapse(self, success, i, code ):
        if success:
            return Feedback.boite2(self,"debut\n"+code) 
        return Feedback.boite2(self,"debut False\n"+code) 
           
    def resultat(self, code):
        return '<div style ="border:1px solid black;padding:1%;margin:1%;background-color:Black;">'+code+'</div><br>'

 
       
    def boite2(self,html_code):
        
        return subnlbybr(html_code)
         
        

            
    
