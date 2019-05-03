# Copyright 2017 DR
#
# Moyenne de trois entiers

author=NB&DR
title=La moyenne de trois entiers
tag=function
template=/template/stdsandboxC.pl

text==

Écrire une fonction **mean_of_3** qui prend trois entiers en
paramètres et retourne la moyenne (de type double) de ces trois entiers.

==

editor.code==
... mean_of_3(...){
  ...
}
==

solution==

double mean_of_3(int a, int b, int c)
{
  return (a+b+c)/3.0;
}

==

codeafter==

#include <stdlib.h>
#include <stdio.h>


int main(int argc, char* argv[]){
  int a = atoi(argv[1]);
  int b = atoi(argv[2]);
  int c = atoi(argv[3]);

  printf("La moyenne de %d, %d et %d est : %f\n", a, b, c, mean_of_3(a, b, c));
  
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

