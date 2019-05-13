# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
title=Fonctions
author=Dominique Revuz 
name= Une fonction bob
tag=function 
template=/python/0PLG/template.pl


before==

min=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z']
maj=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z']
digit=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
all=min+maj+digit+['_']


def generate(len=0):
    """
    :param len:
    :return: a string of length len that is a good python identifier
    """
    if len<0:
        len=random.randint(0,5)
    if random.randint(1,10) <6 :
        firstletter = chr(random.randint(ord('a'),ord('z')))
    else:
        firstletter = chr(random.randint(ord('A'),ord('Z')))
    name=str(firstletter)
    for x in range(0,len):
        name += random.choice(all)
    return name


import random

name = generate(5)

valeur = random.randint(1, 5000)

text = """


Ecrire une fonction **{name}** qui retourne la valeur entière {valeur}.

    >>> {name}()
    {valeur}
""".format(name=name,valeur=valeur)

pltest = '''
>>> {name}() # Affiche
{valeur}
>>> {name}() == {valeur} # Retourne
True
'''.format(name=name,valeur=valeur)
code="""
def {name}():
    ...  # ecrire votre code ici
""".format(name=name,valeur=valeur)
==




code==

==




