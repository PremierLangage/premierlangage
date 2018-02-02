# Copyright 2016 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Ordonner des appels de fonction dans un main

author=Nicolas Borie
name=Ordonner les appels de fonctions
title=Ordonner les appels de fonctions
tag=program
template=/C/template/autograderC

text==

Un programmeur a préparé trois fonctions pour ce programme. Pas besoin
de les toucher mais vous pouvez bien lire leurs définitions pour
comprendre ce quelles font.
 
Votre objectif est, pour ce second exercice, de fabriquer la fonction
*main* qui permettra d'obtenir un programme fonctionnel après
compilation. Pour cela, vous devrez appeler correctement les trois
fonctions disponibles dans le bon ordre.
   
Remarquez que les trois fonctions ne prennent aucun argument (on peut
lire *void* pour incister sur ce point). Il suffit donc de rajouter
*fonction_pouet();* dans la fonction *main* pour appeler la fonction
nommée *fonction_pouet* dans votre programme. Soyez logique pour
reconstituer l'histoire correctement.

==

code==
#include <stdio.h>

void display_1(void){
  printf("Trois personnes sont donc dans la file d'attente.\n");
}

void display_2(void){
  printf("La file d'attente est vide.\n");
}

void display_3(void){
  printf("Une personne arrive et s'insere dans la file d'attente.\n");
}

int main(int argc, char* argv[]){
  /** votre code ici... **/
}

==

solution==
#include <stdio.h>

void display_1(void){
  printf("Trois personnes sont donc dans la file d'attente.\n");
}

void display_2(void){
  printf("La file d'attente est vide.\n");
}

void display_3(void){
  printf("Une personne arrive et s'insere dans la file d'attente.\n");
}

int main(int argc, char* argv[]){
  display_2();
  display_3();
  display_3();
  display_3();
  display_1();

  return 0;
}

==


# LOAD IMPORTANT FILES FOR GRADING
files=@/C/template/basic.c
files=@/C/template/graderC.py

grader==
from graderC import graderII

tests = [ ["simple éxécution", "", ""] ]
graderII(tests)
==
