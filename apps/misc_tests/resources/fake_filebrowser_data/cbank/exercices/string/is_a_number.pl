# Copyright 2017 Nicolas Borie <nicolas.borie@u-pem.fr>
author=Nicolas Borie
name=Reconnaître un nombre
title=Reconnaître un nombre
tag=string
template=/template/autograderC

text==
Écrire une fonction *is_a_number* qui prend en argument une chaîne de caractères C
en ascii et retourne 1 si la chaine forme un nombre valide en base
10. La fonction retournera 0 sinon.

On considéra comme valide tout entier positif ou negatif. Voici des
entrées valides :
    
    0, 1, 324, -1, -0, -5243134, ...

Voici des entrées non valides :

    a12, 23d, -e1, 023, +23, 12a0, -0123, ...
   
==

code==
int is_a_number(char* s){
  /* votre code ici... */
}
==

solution==
int is_a_number(char* s){
  int i=0;

  if (s[i] == '-')
    i++;
  if (s[i] == '0')
    return s[i+1] == '\0';
  while (s[i] != '\0'){
    if (s[i] < '0' || s[i] > '9')
      return 0;
    i++;
  }
  return 1;
}
==

codeafter==
#include <stdio.h>

int main(int argc, char* argv[]){
  if (is_a_number(argv[1])){
    printf("%s est un nombre valide.\n", argv[1]);
  }
  else{
    printf("%s n'est pas un nombre valide.\n", argv[1]);
  }
  return 0;
}
==

grader==
from graderC import graderII
import random


tests = []

for i in range(10):
    c = str(random.randint(-1000, 1000))
    if (random.randint(0, 1) == 0):
        if (random.randint(0, 2) == 0):
            c = c + chr(random.randint(97, 97+25))
        elif (random.randint(0, 1) == 0):
            c = chr(random.randint(97, 97+25)) + c
        else:
            c = c + str(random.randint(-1000, 1000))
    tests.append(["Aléatoire", c, ""])

graderII(tests)
==
