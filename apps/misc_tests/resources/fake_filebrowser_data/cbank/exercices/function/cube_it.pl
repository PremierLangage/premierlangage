# Copyright 2017 Nicolas Borie <nicolas.borie@u-pem.fr>

author=Dominique Revuz
title= Passe le moi au Cube
tag=function|pointer
template=/template/stdsandboxC.pl

text==

Écrire une function **cube_it** qui prend l'adresse d'un entier et remplace la 
valeur pointée par son cube.

==

editor.code==
... cube_it(...){
  ...
}
==

solution==
void cube_it(int *p)
{
    *p = *p * *p * *p;
}

==

codeafter==

#include <stdio.h>
#include <stdlib.h>    
    
int main(int argc, char* argv[]){
  int a = atoi(argv[1]);
  cube_it(&a);
  printf("Cube --> %d\n",a);
  return 0;
}
==

    
tests==

[["Basique", "1", ""],
 ["Aléatoire", str(random.randint(1, 33)), ""],
 ["Aléatoire", str(random.randint(1, 33)), ""],
 ["Aléatoire", str(random.randint(1, 33)), ""]]

==

