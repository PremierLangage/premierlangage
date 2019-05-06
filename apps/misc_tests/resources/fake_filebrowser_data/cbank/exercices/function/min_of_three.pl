# Copyright 2017 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Minimum de trois entiers

author=Nicolas Borie
title=Minimum de trois entiers
tag=function|recursion
template=/template/stdsandboxC.pl

text==

Écrire une fonction **min_of_three** qui prend trois entiers en
paramètres et retourne le minimum de ces trois entiers.

==

editor.code==
... min_of_three(...){
  ...
}
==

solution==

int min_of_three(int a, int b, int c){
  if (a <= b){
    if (a <= c)
      return a;
    return c;
  }
  if (b <= c)
    return b;
  return c;
}

==

codeafter==

#include <stdlib.h>
#include <stdio.h>


int main(int argc, char* argv[]){
  int a = atoi(argv[1]);
  int b = atoi(argv[2]);
  int c = atoi(argv[3]);

  printf("Le minimum entre %d, %d et %d est : %d\n", a, b, c, min_of_three(a, b, c));
  return 0;
}
==

tests==

[["Basique", "3 2 1", ""],
 ["Égaux", "10 10 10", ""],
 ["Négatif", "12 -6 3", ""],
 ["Aléatoire", ' '.join([str(random.randint(-1000, 1000)) for i in range(3)]), ""],
 ["Aléatoire", ' '.join([str(random.randint(-1000, 1000)) for i in range(3)]), ""],
 ["Aléatoire", ' '.join([str(random.randint(-1000, 1000)) for i in range(3)]), ""],
 ["Aléatoire", ' '.join([str(random.randint(-1000, 1000)) for i in range(3)]), ""]]

==

