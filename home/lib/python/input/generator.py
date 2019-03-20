


def __gg__(l):
	for u in l:
			yield str(u)


import builtins
def mockinput(thelist):
	bob = __gg__(thelist)
	builtins.input = lambda prompt="toto":  str(next(bob))

from importlib import import_module, reload 
student=None

def doloadstudent():
	global student
	if student == None:
		student = import_module("student")
	else:
		reload(student)


def dostudent(l):
		mockinput(l)
		doloadstudent()




