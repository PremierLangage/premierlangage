# Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz
title=Variabletypes
name=Variable et Constantes
tag=ref
template=python/dynamic/direct.pl
text==

# Références 

Saisissez la valeur de la variable r une fois les instructions suivantes exécutées :


    a=-1
    b=0
    a,b=b,a
    b,a=a,b
    b=b-a
    b=a-b
    a=a*b
    r=a+b


==
expectedoutput=0

# Not using 0PLG grader
