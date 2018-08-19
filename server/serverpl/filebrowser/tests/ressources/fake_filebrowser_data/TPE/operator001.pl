# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz 
name= Boites d'oeufs (Operateurs)
title= Modulo et Diviser
tag= print|input|operator.mod|operator.floordiv
template=../soluce.pl
text==

# Operator  // et % 

**Joelle** a des poules, tous les matins elle ramasse les oeufs et souhaite les mettre dans des boites.

Quand elle a fini de ramasser les oeufs elle appelle son fils **Emile** en lui donnant le nombre d'oeufs. Il doit calculer le nombre de boites de 6 oeufs et le nombre d'oeufs restants.

Aidons **Emile** avec // qui est la division entière et % (opérateur modulo) qui calcule le reste de la division entière. 


==

code==
nbroeufs = int( input("saisissez le nombre d'oeufs :") )

b=  # votre opération 
r=  # votre opération
print("\nPour ",nbroeufs," il faut:")
print( b , "boites,")
print("et il restera ", r , "oeufs.") 

# Fin du code, n'écrivez pas de code après cette ligne s'il vous plait !
# L'équipe PL
==

inputgenerator==
from random import randint

print(randint(10,100)*6+randint(1,6))
==

soluce==
nbroeufs = int( input("saisissez le nombre d'oeufs :") )

b= nbroeufs // 6
r= nbroeufs % 6

print("\nPour ",nbroeufs," il faut:")
print( b , "boites,")
print("et il restera ", r , "oeufs.") 

==


