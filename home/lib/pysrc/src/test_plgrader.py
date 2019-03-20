import pytest
import plgrader
import json


def mysetup(content,pld):
    with open("student.py","w") as s:
        print(content,file=s)
    json.dump(pld,open("pl.json","w"))
    if "soluce" in pld:
        with open("soluce.py","w") as sol:
            print(pld["soluce"],file=sol)
    if "inputgenerator" in pld :
        with open("inputgenerator.py","w") as sol:
            print(pld["inputgenerator"],file=sol)
    
testtemplate="""
{% if feedback.success %}success{% else %}echec{% endif %}
{%- if  feedback.compile %}{{ feedback.compilationError }}{%- else %}
{% if feedback.asio %}
    {%- for type,text in feedback.executionhistory %}
    {%- if type=="input" %}E:{{text}}
    {%- elif type=="output" %}S:{{text}}<hr/>
    {%- elif type=="expected" %}A:{{text}}
    {%- elif type=="optained" %}O:{{text}}
    {%- endif %}
    {%- endfor %}
{%- else %}
{%- for type,text in feedback.executionhistory %}
    {%- if feedback.showinput and type=="input" %}{{text}}{% endif %}
    {%- if type=="output" %}{{text}}{% endif %}
{%- endfor %}
{%- endif %}
{%- endif %}
{%- if feedback.success %}{{ feedback.feedbacktext }}{%- endif %}
"""

import feedback

def test_feedback():
    f=feedback.Feedback()
    f.addFeedback("texte")
    print(f.feedback())
    assert f.feedback() == """
<html><body>
<style>
    h3 {color: powderblue;}
    div.feedback  {background-color:Chartreuse ;}
</style>
<div class="feedback">

<h3> Executions </h3>
<H3> Bravo ! </H3>
texte

</div>
<!-- feedback -->
</body></html>"""

def test_feedback2():
    f=feedback.Feedback()
    f.addCompilationError("beurk ca compile pas ")
    print(f.feedback())
    assert f.success == False
    assert f.feedback() == """
<html><body>
<style>
    h3 {color: red;}
    div.feedback  {color: pink;}
    div.feedback  {background-color: blue;}
    
</style>
<div class="feedback">
    <h3> Erreur de Compilation</h3>beurk ca compile pas 


</div>
<!-- feedback -->
</body></html>"""


def test_plgrader_compile():
    mysetup(" print()\nsdlkjfhqkfjdshf",{})
    g= plgrader.Grader()
    g.fb.buildTemplate(testtemplate)
    x=json.loads(g.grade())
    assert x["success"]==False
    print(x["feedback"])
    assert x["feedback"] =="\nechecSorry: IndentationError: unexpected indent (student.py, line 1)"

def test_plgrader_good_expectedOutput():
    mysetup("print(1)\nprint(2)\n",{"expectedoutput":"1\n2\n"})
    g = plgrader.Grader()
    g.fb.buildTemplate(testtemplate)
    x = json.loads(g.grade())
    assert x["success"]==True
    print(x["feedback"])
    assert x["feedback"] =="""\nsuccess\n1<br/>2<br/>"""

def test_plgrader_good_expectedOutputi_withinput():
    mysetup("print(input())\n",{"expectedoutput":"1\n","input0":"1\n"})
    g = plgrader.Grader()
    g.fb.buildTemplate(testtemplate)
    x = json.loads(g.grade())
    assert x["success"]==True
    print(x["feedback"])
    assert x["feedback"] =="""\nsuccess\n1<br/>"""



def test_plgrader_no_grading_rules():
    mysetup("print(1)\nprint(2)\n",{"author":"LE roi de la bug"})
    g = plgrader.Grader()
    g.fb.buildTemplate(testtemplate)
    x = json.loads(g.grade())
    
    assert x["success"]==True # ne pas pénaliser les élèves
    assert x["feedback"] == """\nsuccess\n<H1> Problème exercice mal défini </H1> Contacter l'auteur: LE roi de la bug<br/> Passez à l'exercice suivant."""



def test_plgrader_inputoutput_one_ok():
    mysetup("print(input())\nprint(input())\n",{"author":"LE roi de la bug",
    "input0":"1\n2\n","output0":"1\n2\n"})
    g = plgrader.Grader()
    g.fb.buildTemplate(testtemplate)
    x = json.loads(g.grade())
    assert x["success"]==True
    print(x["feedback"])
    assert x["feedback"] == """
success
E:1<br/>2<br/>S:1<br/>2<br/><hr/>"""

def test_plgrader_inputoutput_oneok_showinput():
    mysetup("print(input())\nprint(input())\n",{"author":"LE roi de la bug",
    "input0":"1\n2\n","output0":"1\n2\n","showinput":"True"})
    g = plgrader.Grader()
    g.fb.buildTemplate(testtemplate)
    x = json.loads(g.grade())
    assert x["success"]==True

    assert x["feedback"] == """
success
E:1<br/>2<br/>S:1<br/>2<br/><hr/>"""


def test_plgrader_inputoutput_oneok_twonotok_hideinput():
    mysetup("print(input())\nprint(input())\n",{"author":"LE roi de la bug",
    "input0":"1\n2\n","output0":"1\n2\n","input1":"6\n7\n","output1":"1\n2\n",})
    g = plgrader.Grader()
    g.fb.buildTemplate(testtemplate)
    x = json.loads(g.grade())
    assert x["success"]== False
    print(x["feedback"])
    assert x["feedback"] == """
echec
E:1<br/>2<br/>S:1<br/>2<br/><hr/>E:6<br/>7<br/>A:1<br/>2<br/>O:6<br/>7<br/>"""

def test_plgrader_inputsoluce_oneok_twonotok_hideinput():
    mysetup("print(input())\nprint(input())\n",{"author":"LE roi de la bug",
    "input0":"1\n2\n","input1":"6\n7\n","soluce":"print(input())\nprint(input())\n"})
    g = plgrader.Grader()
    g.fb.buildTemplate(testtemplate)
    x = json.loads(g.grade())
    assert x["success"]==True
    print(x["feedback"])
    assert x["feedback"] == """
success
E:1<br/>2<br/>S:1<br/>2<br/><hr/>E:6<br/>7<br/>S:6<br/>7<br/><hr/>"""


def test_plgrader_generatosoluce_ok():
    mysetup("print(input())\nprint(input())\n",{"author":"LE roi de la bug",
    "inputgenerator":"from random import randint \nprint(randint(3,7))\nprint(randint(3,7))\n" ,"soluce":"print(input())\nprint(input())\n"})
    g = plgrader.Grader()
    g.fb.buildTemplate(testtemplate)
    x = json.loads(g.grade())
    assert x["success"]==True


def test_plgrader_bad_soluce():
    mysetup("print(input())\nprint(input())\n",{"author":"LE roi de la bug",
    "inputgenerator":"from random import randint \nprint(randint(3,7))\nprint(randint(3,7))\n" ,"soluce":"raise Error()\npri nt(input())\nprint(input())\n"})
    g = plgrader.Grader()
    g.fb.buildTemplate(testtemplate)
    x = json.loads(g.grade())
    assert x["success"]==True #  en cas d'erreur plateforme c'est bon
    print(x["feedback"])
    assert x["feedback"] == """
success
Problemes with the soluce  File "soluce.py", line 2<br/>    pri nt(input())<br/>         ^<br/>SyntaxError: invalid syntax<br/>"""

def test_plgrader_bad_generator():
    mysetup("print(input())\nprint(input())\n",{"author":"LE roi de la bug",
    "inputgenerator":"from ran dom import randint \nprint(randint(3,7))\nprint(randint(3,7))\n" ,"soluce":"print(input())\n"})
    g = plgrader.Grader()
    g.fb.buildTemplate(testtemplate)
    x = json.loads(g.grade())
    print( x["feedback"])
    assert x["success"]==True #  en cas d'erreur plateforme c'est bon
    assert x["feedback"] == """
success
Problemes with the input generator   File "inputgenerator.py", line 1<br/>    from ran dom import randint <br/>               ^<br/>SyntaxError: invalid syntax<br/>"""


def testPltestOk():
    mysetup("def f():\n    print(3)",{"pltest":">>> f()\n3\n"})
    g = plgrader.Grader()
    g.fb.buildTemplate(testtemplate)
    x = json.loads(g.grade())
    assert x["success"]==True



def testPltestPasOk():
    mysetup("def f():\n    print(3)",{"pltest":">>> f()\n4\n"})
    g = plgrader.Grader()
    g.fb.buildTemplate(testtemplate)
    x = json.loads(g.grade())
    print(x["feedback"])
    assert x["success"]==False
    assert x["feedback"] == """
echec
# Echec de tests<br/>Trying:<br/>    f()<br/>Expecting:<br/>    4<br/>**********************************************************************<br/>File "/Users/dr/DJANGO/plbank/pltest.py", line 3, in pltest<br/>Failed example:<br/>    f()<br/>Expected:<br/>    4<br/>Got:<br/>    3<br/>1 items had no tests:<br/>    pltest.f<br/>**********************************************************************<br/>1 items had failures:<br/>   1 of   1 in pltest<br/>1 tests in 2 items.<br/>0 passed and 1 failed.<br/>***Test Failed*** 1 failures.<br/>"""
