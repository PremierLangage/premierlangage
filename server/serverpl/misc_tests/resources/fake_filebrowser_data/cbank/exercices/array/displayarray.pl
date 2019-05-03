# Copyright 2017 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Affichage d'un tableau d'entiers

author=Nicolas Borie
name=Afficher le contenu d'un tableau
title=Afficher le contenu d'un tableau
tag=output|array
template=/template/stdsandboxC.pl

text==
Écrire une fonction qui affiche le contenu d'un tableau C. Cette
fonction prendra en paramèrtre un tableau d'entiers ainsi que le
nombre d'éléments contenu dans ce tableau. Tester votre fonction en
l'appelant correctement avec le tableau défini comme varible locale de
la fonction *main*. On commencera l'affichage avec un crochet ouvrant,
puis les entiers séparé par une virgule et enfin un crochet fermant en
fin de tableau.
==

editor.code==
#include ...

void display_array(int* array, int nb_term){
  /* votre code ici... */
}

int main(int argc, char* argv[]){
  int tab[] = {6, 2, 3, 7, 7, 9, 2};

  /* votre code ici... */
}
==

solution==
#include <stdio.h>

void display_array(int* array, int nb_term){
  int i;

  printf("[");
  for (i=0 ; i<nb_term-1 ; i++)
    printf("%d, ", array[i]);
  printf("%d]\n", array[nb_term-1]);
}

int main(int argc, char* argv[]){
  int tab[] = {6, 2, 3, 7, 7, 9, 2};

  display_array(tab, 7);
  return 0;
}
==

tests==
[["Exécution simple", "", "", "[6, 2, 3, 7, 7, 9, 2]\n"]]
==

