# Copyright 2016 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Macro à paramètre pour calculer un carré

author=Nicolas Borie
title=Macro pour calculer un carré
tag=macro
template=/template/stdsandboxC.pl

text==
Écrire une macro **SQUARE** qui prend en argument un seul paramètre
(jamais typé comme c'est toujours le cas pour les macros) qui remplace
son argument par le carré de son paramètre. Le paramètre de la macro
sera toujours une expression C qui s'évalue dans un type numérique.

==

editor.code==
#define SQUARE....

==

solution==
#define SQUARE(a) ((a)*(a))

==

codeafter==
 
#include <stdio.h>

int main(int argc, char* argv[]){

  printf("Le carré de %d est %d\n", 0, SQUARE(0));
  printf("Le carré de %d est %d\n", 1, SQUARE(1));
  printf("Le carré de %d est %d\n", 12, SQUARE(12));
  printf("Le carré de %s est %d\n", "1+2", SQUARE(1+2));
  printf("Le carré de %s est %d\n", "2-1", SQUARE(2-1));
  printf("Le carré de %f est %f\n", 3.14, SQUARE(3.14));
  return 0;
}

==

tests==
[["expressions classiques", "",""]] 
==

