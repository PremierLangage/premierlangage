# Copyright 2016 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Hello world en C
#
# Exercice simple pour tester PL avec le langage C.


author=Nicolas Borie
name=Premier programme en C
title=Premier programme en C
tag=program
template=/C/template/autograderC

text==

Faites votre premier programme C, ce programme devra écrire 
*Hello World!* sur la sortie standard et retourner à la ligne. 
Le retour à la ligne est encodé par le caractère '\n' en C.
Pour faire de l'affichage, on utilise la fonction *printf*
dont l'existance est déclaré dans les headers de la 
bibliothèque standard. C'est ainsi grace à la commande
*#include <stdio.h>* que l'on a le droit d'appeler cette
fonction par la suite.


Un programme C contient toujours une et une seule fonction
dont le nom est *main*. Cette fonction sera le point d'entrée
du programme. Un programme C fait exactement tout se qui se
trouve dans sa fonction *main*, ni plus, ni moins. Ici, il
vous faut juste faire de l'affichage. Un bon appel à la
fonction *printf* doit suffire.

==

code==
#include <stdio.h>

int main(int argc, char* argv[]){
  /* votre code ici... */
}

==

# LOAD IMPORTANT FILES FOR GRADING
files=@/C/template/basic.c
files=@/C/template/graderC.py

grader==
from graderC import graderI

tests = [ ["simple éxécution", "","", "Hello World!\n"] ]
graderI(tests)
==
