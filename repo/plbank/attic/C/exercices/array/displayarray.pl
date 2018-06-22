# Copyright 2016 Nicolas Borie <nicolas.borie@u-pem.fr>
author=Nicolas Borie
name=Afficher le contenu d'un tableau
title=Afficher le contenu d'un tableau
tag=output|array
template=/C/template/autograderC

text==
Écrire une fonction qui affiche le contenu d'un tableau C. Cette
fonction prendra en paramèrtre un tableau d'entiers ainsi que le
nombre d'éléments contenu dans ce tableau. Tester votre fonction en
l'appelant correctement avec le tableau défini comme varible locale de
la fonction *main*. On commencera l'affichage avec un crochet ouvrant,
puis les entiers séparé par une virgule et enfin un crochet fermant en
fin de tableau.
==

code==
#include ...

void diaplay_array(int* array, int nb_term){
  /* votre code ici... */
}

int main(int argc, char* argv[]){
  int tab[] = {6, 2, 3, 7, 7, 9, 2};

  /* votre code ici... */
}
==

soluce==
#include <stdio.h>

void diaplay_array(int* array, int nb_term){
  int i;

  printf("[");
  for (i=0 ; i<nb_term-1 ; i++)
    printf("%d, ", array[i]);
  printf("%d]\n", array[nb_term-1]);
}

int main(int argc, char* argv[]){
  int tab[] = {6, 2, 3, 7, 7, 9, 2};

  diaplay_array(tab, 7);
  return 0;
}
==

expectedoutput==
[6, 2, 3, 7, 7, 9, 2]
==

# chargement des fichiers utiles 
sandbox=@/C/template/basic.c
sandbox=@/C/template/graderC.py

grader==
from graderC import grade
grade()
==
