# Copyright 2018 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Somme des chiffres d'un nombre

author=Nicolas Borie
title=Somme des chiffres d'un nombre
tag=function|recursion|array
template=/template/stdsandboxC.pl

text==

Écrire une fonction récursive qui calculer la somme des chiffres
apparaissant dans un nombre donné en base $% 10 %$.

Pourquoi récursive ?  
Parce que pour calculer la somme des chiffres d'un grand nombre, il
suffit de calculer la somme des chiffres donnant le nombre de dizaines
dans ce nombre (appel récursif) et ensuite d'ajouter le nombre
d'unité.

    somme total         = somme du nombre des dizaines + chiffre des unités
    sum_number(726352)  =     sum_number(72635)        +        2   
    sum_number(72635)   =     sum_number(7263)         +        5   
    sum_number(7263)    =     sum_number(726)          +        3
    sum_number(726)     =     sum_number(72)           +        6
    sum_number(72)      =     sum_number(7)            +        2
    sum_number(7)       =     7  (appel terminal)

Il faut quand même un cas d'arrêt pour ne pas faire de récursion
inifinie. On remarque rapidement que pour tout nombre positif
strictement plus petit que 10, la somme de ces chiffre (forcément un
seul chiffre), c'est lui même.

==

editor.code==
int sum_number(int n){
  ...
}
==

solution==

int sum_number(int n){
  if (n<10)
    return n;
  return sum_number(n/10) + (n%10);
}
==

codeafter==

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]){
  int n = atoi(argv[1]);

  printf("La somme des chiffres de %d est %d.\n", n, sum_number(n));
  return 0;
}

==


tests==

[["Basique", "0", ""],
 ["Petit", "7", ""],
 ["PLein", "1234567", ""],
 ["Aléatoire", str(random.randint(1, 2000000000)), ""],
 ["Aléatoire", str(random.randint(1, 2000000000)), ""],
 ["Aléatoire", str(random.randint(1, 2000000000)), ""],
 ["Aléatoire", str(random.randint(1, 2000000000)), ""],
 ["Aléatoire", str(random.randint(1, 2000000000)), ""]]

==

