# Copyright 2017 DR
#

author=NB&DR

title= Présent dans une chaine
tag=function|string|strchr
template=/template/autograderC

text==

Écrire une fonction *in* qui prend un char **c** et une chaine **s** en parametre et qui retourne  1 si **c** apparait dans **s** 
et 0 sinon.
==

code==
int in(XXXX c, YYYY s ) {
/* hehe */
}
==

solution==
#include <string.h>
int in(char c,char *p){
  for(;*p;p++)  if (*p==c) return 1;
  return 0;
}
==

codeafter==
#include <stdlib.h>
#include <stdio.h>


int main(int argc, char* argv[]){

  if (in(argv[1][0],argv[2]))
    printf("la chaine  %s contient la lettre %c\n",argv[2],argv[1][0]);
  else
    printf("la chaine  %s contient pas la lettre %c\n",argv[2],argv[1][0]);
  return 0;
}
==


grader==
from graderC import graderII
import random

tests = [["Basique", "l unmotavecunl", ""],
    ["Pas present", "X bcdfghjklmnpqrstvwxz", ""],
   ]

for i in range(3):
    taille = random.randint(10, 30)
    mot = ""
    for j in range(taille):
        if random.randint(0,1) == 0:
            mot += chr(97+random.randint(0,25))
        else:
            mot += chr(68+random.randint(0,25))
    tests.append(["Aléatoire présent", mot[3]+" "+mot, ""])
    tests.append(["Aléatoire absent", "A "+mot, ""])


graderII(tests)
==

