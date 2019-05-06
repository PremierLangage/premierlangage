# Copyright 2017 DR
#
# Maximum de trois entiers

author=NB&DR

title=Maximum de trois entiers
tag=function|string|whitch
template=/template/autograderC

text==

Écrire une fonction *asdigit* qui prend une chaine en parametre et qui retourne la première voyelle trouvée dans la chaine.

Utilisez un switch pour tester la présence d'un digit (chiffre). 

taboos: str,string,if,else,==(test d'égalité)
==

code==
const char *voyelle="aeiouy";

int asvoyelle(...){
  ...
}
==

solution==
int asdigit(char *p){
  for(;*p;p++)
    switch(*p){
      case '0' ... '9':
        return *p;
      }
  return 0;
}
==

taboo=string|str|if|egalegal|else

codeafter==
#include <stdlib.h>
#include <stdio.h>


int main(int argc, char* argv[]){

  int a=asdigit(argv[1]);
  if (a)
  printf("la chaine  %s contient le chiffre %c\n",argv[1],a);
  else
  printf("la chaine  %s ne contient pas de chiffres\n",argv[1]); 
  return 0;
}
==

sandbox=@/template/inspector.py

grader==
from graderC import graderII
from inspector import Inspector
import random

tests = [["Basique", "labell0evoyelle", ""],
    ["Y a pas de digit", "bcdfghjklmnpqrstvwxz", ""],
    ["Y a un 5", "aaaa5", ""],
   ]

IIII=Inspector()
x,y = IIII.test()
if x,
graderII(tests)
==

