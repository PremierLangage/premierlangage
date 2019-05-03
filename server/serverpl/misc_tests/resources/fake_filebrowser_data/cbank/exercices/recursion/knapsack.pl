# Copyright 2018 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Problème du sac à dos

author=Nicolas Borie
title=Problème du sac à dos
tag=function|recursion|array
template=/template/stdsandboxC.pl

text==

Le problème du sac à dos consiste à déterminer si un sac à dos ayant
une capacité connue finie peut être rempli totalement avec quelques
objets selectionnés parmis une liste finie d'objet dont on connaît les
tailles respectives.

Pour un sac ayant une capacité de 18 kilos et les objets suivants :  
sac de couchage : 8 kilos  
casserole : 2 kilos  
réchaud à gaz : 5 kilos  
tente : 12 kilos  
lampe pétrole : 4 kilos  
piquets de marche : 5 kilos  

Ici, le problème du sac à dos est soluble. On remarque que les combinaisons :  

* sac de couchage + réchaud à gaz + piquets de marche remplissent complètement le sac  
(car 8 + 5 + 5 = 18)  

* casserole + tente + lampe pétrole remplissent complètement le sac  
(car 2 + 12 + 4 = 18)  

Le problème du sac à dos ne consiste pas ici à determiner toutes les
solutions possibles mais juste à dire si oui ou non il est possible de
remplir complètement le sac (On veut juste savoir s'il existe au moins
une solution).

Pour les mêmes objets, si le sac avait été de capacité 33 kilos, le
problème du sac à dos était alors insoluble. En effet, aucune
conbinaison d'objets ne pèse au total exactement 33 kilos (et pourtant
36 kilos d'objets au total est disponible...).


Pour résoudre ce problème, on procède de manière récursive. On démarre
avec un sac vide de capacité complète (18 dans l'exemple) et avec la
liste complète des objets disponibles ([8, 2, 5, 12, 4, 5] dans
l'exemple). Comme nous somme en C et que la liste d'objet ne doit ni
être copiée ni être détruite ; on utilisera deux entiers pour savoir
où l'on se trouve dans la liste d'objets. L'entier *index* (initialisé
à zéro par le programme), désignera la position de l'objet
courrant. L'entier *nb_object* (initialisé par le programme au nombre
d'objets total) n'a pas vocation à être modifié, c'est la borne qui
nous informera qu'il n'y a plus d'objet disponible pour résoudre le
problème.

La fonction devra retourner *1* si le problème du sac à dos est
soluble et *0* sinon.

Idée de l'algorithme :

* Remplir un sac à dos de taille 0 est toujours possible (il suffit de
  ne rien prendre), le problème est alors soluble.

* S'il n'y a plus aucun objet disponible et que le sac n'est pas
  rempli, alors le problème n'est pas soluble.

* Si l'objet courrant a une taille trop grande pour la place restante
  dans le sac, alors on ne peut pas prendre l'objet, il faut continuer
  d'essayer de remplir avec les objets suivants.

* Enfin, si l'objet courrant peut effectivement rentrer dans le sac,
  alors deux stratégies sont possibles :
    
   * Soit on prend l'objet et on doit résoudre le problème du sac à
     dos avec un sac plus petit en utilisant les objets suivants.

   * Soit on ne prend pas l'objet et alors on garde la même taille de
     sac et on continue d'essayer de le remplir avec les objets
     suivants.

  Attention, le problème du sac à dos devient soluble si au moins une
  des deux options est soluble.
==

editor.code==
int knapsack(int capacity, int* objects, int index, int nb_object){
  ...
}
==

solution==
int knapsack(int capacity, int* objects, int index, int nb_object){
  if (capacity == 0)
    return 1;
  if (index == nb_object)
    return 0;
  if (objects[index] > capacity)
    return knapsack(capacity, objects, index+1, nb_object);
  return knapsack(capacity-objects[index], objects, index+1, nb_object) || knapsack(capacity, objects, index+1, nb_object);
}


==

codeafter==

#include <stdio.h>
#include <stdlib.h>

void display_array(int* array, int nb_term){
  int i;

  printf("[");
  for (i=0 ; i<nb_term-1 ; i++)
    printf("%d, ", array[i]);
  printf("%d]\n", array[nb_term-1]);
}

int main(int argc, char* argv[]){
  int nb_term = argc-1;
  int* tab = (int*)malloc(nb_term*sizeof(int));
  int i;

  for (i=0 ; i<nb_term ; i++){
    tab[i] = atoi(argv[i+1]);
  }

  for (i=0 ; i<=tab[0] ; i++){
    if (knapsack(i, tab+1, 0, nb_term-1) == 0){
      printf("%d est impossible à obtenir avec ", i);
      display_array(tab+1, nb_term-1);
    }
  }

  free(tab);
  return 0;
}

==


tests==

[["Basique", "5 1 3", ""],
 ["Puissances de 2", "31 1 2 4 8 16", ""],
 ["Scores au rugby", "12 3 3 3 3 5 5 7 ", ""],
 ["Aléatoire", " ".join([str(random.randint(50, 100))]+[str(random.randint(1, 20)) for i in range(5+random.randint(1, 5))]), ""],
 ["Aléatoire", " ".join([str(random.randint(50, 100))]+[str(random.randint(1, 20)) for i in range(5+random.randint(1, 5))]), ""],
 ["Aléatoire", " ".join([str(random.randint(50, 100))]+[str(random.randint(1, 20)) for i in range(5+random.randint(1, 5))]), ""],
 ["Aléatoire", " ".join([str(random.randint(50, 100))]+[str(random.randint(1, 20)) for i in range(5+random.randint(1, 5))]), ""],
 ["Aléatoire", " ".join([str(random.randint(50, 100))]+[str(random.randint(1, 20)) for i in range(5+random.randint(1, 5))]), ""]]

==

