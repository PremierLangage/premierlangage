# Copyright 2017 Elise Hardy <ehardy@etud.u-pem.fr>
#
# Déclaration d'un tableau de structure

author=Elise Hardy
name=Tableau de structure
title=Tableau de structure
tag=structure
template=/template/autograderC

text==
Déclarer une énumaration *Fruit* contenant les fruits *pomme, poire, banane, cerise*.
Puis déclarer une structure *Panier* contenant un tableau de fruit de taille 4. 

==

code==
typedef ...

==

solution==
    typedef enum {pomme, poire,banane,cerise}Fruit;

typedef struct {
  Fruit tab[4];
}Panier;

==

codeafter==
 
#include <stdio.h>
#include <stdlib.h>    
#include <string.h>
    
int main(int argc, char* argv[]){
  Panier p;
  
  p.tab[0]=p.tab[2]=pomme;
  p.tab[1]=poire;
  p.tab[3]=cerise;
  
  printf("panier: %d %d %d %d",p.tab[0],p.tab[1],p.tab[2],p.tab[3]);
  return 0;
}

==

grader==
from graderC import graderII
 
tests = [["Déclaration et utilisation 1", "",""]] 
graderII(tests)
==
