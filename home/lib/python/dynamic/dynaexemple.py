

import jinja2


from random import randint

def randomcode():
	code="""\na=%d\nb=%d\n""" % (randint(-1,1),randint(-1,1))
	l=["a=b","b=a","a=a+b","a=a-b","a=a*b","b=a*b","b=a-b","b=b-a"]
	last="r=a+b\n"
	
	for i in range(randint(1,5)):
		dice=randint(0,len(l)-1)
		code += l[dice]
		del l[dice]
		code += "\n"
	code += last
	return code


patron="""
# Références 

Saisissez la valeur de la variable {{ resultname }} une fois les instructions suivantes exécutées :

{{ instructions }}

"""


templ = jinja2.Template(patron)
code = randomcode()
instructions= "\n\t".join(code.split("\n"))
name="r"
try:
	exec(code)
except Exception as e:
	print(" Exercice mal concu")
	sys.exit(1)
result=eval(name)
x= templ.render(resultname=name,instructions=instructions,resultat=result)

tampl = jinja2.Template("""
author=Dominique Revuz
tag=ref
name=Dynamic generated
template=direct.pl
text==
{{ text }}
==
expectedoutput={{ result }}

# Not using 0PLG grader
""")

print(tampl.render(text=x,result=result))
