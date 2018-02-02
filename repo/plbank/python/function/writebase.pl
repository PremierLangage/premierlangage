# Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name=writebase.pl
title=Write In Base  # N'oubliez pas de remplir ce champs svp
tag=tag  # N'oubliez pas de remplir ce champs svp
template=/python/0PLG/template.pl
text==

# Write In Base

Convertion d'entier en string dans une base donnée.

la fonction writebase(entier,base) retourne une chaine representant l'entier dans la base.

Par exemples:

    >>> writeinbase(100,2)
    '1100100'
    >>> writeinbase(64,2)
    '200000'
    >>> writeinbase(64,20)
    '34'
    >>> writeinbase(64,27)
    '2A'

Les **chiffre** au dela de 9 dans les base supérieur à 10 sont les lettres majuscules dans l'ordre alphabétique. Donc A=10, B=11, etc ,...,Z=35.

Donc :

    >>> writeinbase(25,36)
    'P'
    >>> writeinbase(35,36)
    'Z'

==


pltest==
    >>> writeinbase(100,2)
    '1100100'
    >>> writeinbase(64,2)
    '200000'
    >>> writeinbase(64,20)
    '34'
    >>> writeinbase(64,27)
    '2A'
    >>> writeinbase(25,36)
    'P'
    >>> writeinbase(35,36)
    'Z'
    >>> writeinbase(35,3799)
    Erreur base hors de l'interval [2,36]
==

testcode==
def digit(value):
    if 0<= value <= 9 : 
        return chr(ord('0')+value)
    if 10<= value <=35 :
        return chr(ord('A')+(value-10))
    raise IndexError

def writeinbase(entier,base):
    if base <1 or base >36 :
        print("Erreur base hors de l'interval [2,36]")
        return None
    if entier >base :
        return writeinbase(entier//base,base)+digit(entier%base)
    else:
        return digit(entier)
==
