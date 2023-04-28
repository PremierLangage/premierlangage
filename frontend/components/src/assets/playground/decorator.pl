# THIS FILE CANNOT BE TESTED INSIDE THIS EDITOR
# YOU HAVE TO USE IT INSIDE THE EDITOR OF PREMIER LANGAGE
# TO TEST IT AND CREATE A mycomponent.py file with the class describe above#

#from components import SortList
#class MyComponent(SortList):
#   def __init__(self, **kwargs):
#       super().__init__(**kwargs)
#
#   def my_method(self):
#       return str(self.items)

@ /utils/sandboxio.py
@ mycomponent.py # put the file of you component to

grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

component =: SortList
component.decorator = MyComponent
component.items ==
A
B
C
==
before==
component.parse_string('\n')
s = component.my_method()
==

title==
My Component
==

text==
my_method() return {{ s }}
==

form==
{{ component|component }}
==

evaluator==
grade = (100, 'Bonne réponse');
==

















