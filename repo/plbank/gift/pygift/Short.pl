title=Short
text=Deep Thought said "
type=direct
template=/gift/template/short_template.pl
feedback1=Correct!
css=@ /include/mathjax.pl

build==
from sympy import *

def py_wims(a):
# transforme une string en expression sympy, sans la simplifier, renvoie False si echec de conversion.
    with evaluate(False) :
        try: a = sympify(a)
        except (SympifyError, NameError, SyntaxError, IndexError):
            return False
        return a
        
def build(pl_dic):
    pl_dic['nombre'] = py_wims('atan(sqrt(3))') 
    pl_dic['correct1'] = atan(sqrt(3))
    return pl_dic
==

form==
{% load input_fields %}
<p> Que vaut ${{ nombre }}$? {% input_text 'reponse_nombre'  style='width : 5em' %}  </p>
==
