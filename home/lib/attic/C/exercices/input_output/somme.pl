# Copyright 2016 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Afficher la somme de deux entiers saisis au clavier

author=Nicolas Borie
name=Somme de deux entiers données au clavier
title=Somme de deux entiers données au clavier
tag=input_output
template=/C/template/autograderC

text==

Compléter le programme suivant pour qu'il récupère deux entiers
entrés au clavier. Ces deux entiers seront stockés dans les
variables de type entier (*int*) **a** et **b**.

Imaginons que l'utilisateur qui va tester votre programme donne les
deux entiers 12 et 3. Une fois ces deux entiers collectés, afficher la
phrase **La somme de 12 et 3 est 15.**. N'oubliez pas de retourner à
la ligne à la fin de la phrase. Votre programme devra fonctionner
quelque soit les entiers données par le testeur et pas seulement 12 et
3.
    
==

code==
#include ...

int main(int argc, char* argv[]){
  int a, b;
	
  /** votre code ici... **/
}

==

soluce==
#include <stdio.h>

int main(int argc, char* argv[]){
  int a, b;

  scanf("%d %d", &a, &b);
  printf("La somme de %d et %d est %d.\n", a, b, a+b);
  return 0;
}

==


# LOAD IMPORTANT FILES FOR GRADING
sandbox=@/C/template/basic.c
sandbox=@/C/template/graderC.py

grader==
from graderC import grade
grade( {"simple éxécution": ["", "", True]} , "-Wall -ansi")
==
