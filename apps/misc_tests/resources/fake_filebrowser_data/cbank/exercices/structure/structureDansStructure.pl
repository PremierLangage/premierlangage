# Copyright 2017 Elise Hardy <ehardy@etud.u-pem.fr>
#
# Déclaration de deux structure dont une contenant l'autre

author=Elise Hardy
name=Structure contenant une autre structure
title=Structure contenant une autre structure
tag=structure
template=/template/autograderC

text==
    Déclarer une structure *Point* contenant deux entier *x* et *y*.
    Puis une autre structure *Couple* contenant deux points *p1* et *p2*.

==

code==
typedef ...

==

solution==
typedef struct {
    int x;
    int y;
}Point;

typedef struct {
    Point p1;
    Point p2;
}Couple;
==

codeafter==
 
#include <stdio.h>
#include <stdlib.h>    
#include <string.h>
    
int main(int argc, char* argv[]){
  Couple c;
  c.p1.x=atoi(argv[1]);
  c.p1.y=c.p2.x=atoi(argv[2]);
  c.p2.y=atoi(argv[3]);
  printf("Couple point 1 (%d %d) point 2 (%d %d)\n", c.p1.x, c.p1.y, c.p2.x, c.p2.y);
  return 0;
}

==

grader==
from graderC import graderII
 
tests = [["Déclaration et utilisation 1", "14 3 42",""],
         ["Déclaration et utilisation 2", "47 85 913",""]] 
graderII(tests)
==
