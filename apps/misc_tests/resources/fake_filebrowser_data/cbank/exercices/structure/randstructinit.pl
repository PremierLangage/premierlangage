# Copyright 2017 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Déclaration d'une structure C pour une personne

author=Nicolas Borie

title=Initialisation de Structure C 
tag=structure
template=/template/autograderC



code==

Truc t = ... ;


==

codebefore==
typedef struct _truc {

} Truc;

==
codeafter==
 
#include <stdio.h>
#include <stdlib.h>    
#include <string.h>
    
int main(int argc, char* argv[]){
  
}

==

grader==
from graderC import graderII
 
tests = [["Déclaration et utilisation 1", "John Doe 42",""],
         ["Déclaration et utilisation 2", "Master Yoda 913",""]] 
graderII(tests)
==
