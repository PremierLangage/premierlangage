# Copyright 2017 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Déclaration d'une strcture C pour des points 2 dimensions entiers

author=Nicolas Borie
name=Structure pour points entiers en dimension 2
title=Structure pour points entiers en dimension 2
tag=structure
template=/template/autograderC

text==
Déclarer et définir une *structure* C nommé **Point2d**. Cette structure
devra contenir deux champs entiers nommé **abs** pour abcisse et **ord**
pour ordonné.

==

code==
typedef


Point2d;
==

solution==
typedef struct point2d{
  int abs;
  int ord; 
}Point2d;

==

codeafter==
 
#include <stdio.h>

int main(int argc, char* argv[]){
  Point2d G = {12, -3};

  printf("Le point G est bien declare et a pour abcisse 12==%d et ordonne -3==%d.\n", G.abs, G.ord);
  return 0;
}

==

grader==
from graderC import graderII
 
tests = [["Déclaration et utilisation", "",""]] 
graderII(tests)
==
