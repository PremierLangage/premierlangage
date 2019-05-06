# Copyright 2017 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Allocation d'une structure Couleur avec 3 entiers

author=Dominique Revuz
name=Allocation d'une structure Couleur avec 3 entiers
title=Allocation d'une structure Couleur avec 3 entiers
tag=structure|malloc|function
template=/template/autograderC

text==
Déclarer et définir un nouveau type structuré C nommé **Color**. 
Cette structure devra contenir trois champs entiers nommés 
**red** pour rouge, **green** pour vert et **blue** pour bleu.

Écrire ensuite une fonction **allocate_color** qui prend trois 
entiers en paramètres **R, G, B** et qui retourne l'adresse d'une 
nouvelle variable **Color** fraichement allouée avec **malloc** et
initialisé avec les trois entiers.


Bien entendu R pour red, G pour green, et B pour blue.
==

code==
typedef ...
...
... Color;

... allocate_color(... R, ... G, ... B){
  ... malloc ...
}

==

solution==
typedef struct coco{
  int red;
  int green;
  int blue;
}Color;

Color* allocate_color(int R, int G, int B){
    
    Color *p=(Color *)malloc(sizeof(struct coco));
    p->red = R ;
    p->green = G;
    p->blue = B;
    return p;
}

==

codebefore==

#include <stdio.h>
#include <stdlib.h>
==


codeafter== 
int main(int argc, char* argv[]){
Color *s;

  s = allocate_color(atoi(argv[2]), atoi(argv[3]), atoi(argv[4]));

  printf("%s", argv[1]);

  printf(" : (%d, %d, %d)\n", s->red, s->green, s->blue);

  return 0;
}

==

grader==
from graderC import graderII
from random import randint 

tests = [["Simple", "Rouge 255 0 0", ""],
	 ["Simple", "Bleu 0 0 255", ""],
         ["Simple", "Violet 255 0 255", ""],
	 ["Simple", "Noir 0 0 0", ""]]

for i in range(3):
    tests.append(["Couleur aléatoire", "'Couleur aléatoire' " + str(randint(0,255)) + " " + str(randint(0,255)) + " " + str(randint(0,255)), "" ])

graderII(tests)
==
