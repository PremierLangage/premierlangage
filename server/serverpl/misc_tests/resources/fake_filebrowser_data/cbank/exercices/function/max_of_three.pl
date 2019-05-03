# Copyright 2017 DR
#
# Maximum de trois entiers

author=NB&DR

title=Maximum de trois entiers
tag=function
template=/template/stdsandboxC.pl

text==

Écrire une fonction **max_of_three** qui prend trois entiers en
paramètres et retourne le maximum de ces trois entiers.

==

editor.code==
... max_of_three(...){
  ...
}
==

solution==
int max_of_three(int a, int b, int c){
  if (a>=b) { 
      if (c>=a) return c;
      else return a;
      }
    else {
        if (c>=b) return c;
        else 
        return b;
    }
}
==

codeafter==
#include <stdlib.h>
#include <stdio.h>


int main(int argc, char* argv[]){
  int a = atoi(argv[1]);
  int b = atoi(argv[2]);
  int c = atoi(argv[3]);

  printf("Le maximum entre %d, %d et %d est : %d\n", a, b, c, max_of_three(a, b, c));
  
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

