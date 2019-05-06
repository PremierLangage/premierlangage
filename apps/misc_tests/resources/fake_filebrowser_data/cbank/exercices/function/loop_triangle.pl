# Copyright 2017 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Un triangle avec des caractères ascii

author=Nicolas Borie
title=Un triangle avec des caractères ascii
tag=function
template=/template/stdsandboxC.pl

text==

Écrire une fonction **ascii_triangle** qui prend en argument un entier
et affiche un triangle avec des caractères étoile \* comme les
exemples qui suivent :

Pour n = 3, on devra voir

    *
    **
    ***    

Pour n = 5, on devra voir

    *
    **
    ***
    ****
    *****    
    
==

editor.code==
#include <stdio.h>
    
... ascii_triangle(...){
  ...
}
==

solution==

#include <stdio.h>
    
void ascii_triangle(int n){
  int i, j;

  for(i=1 ; i<=n ; i++){
    for(j=0 ; j<i ; j++)
      printf("*");
    printf("\n");
  }  
}

==

codeafter==

#include <stdlib.h>
    
int main(int argc, char* argv[]){
  int a = atoi(argv[1]);

  ascii_triangle(a);
  return 0;
}
==

    
tests==

[["Basique", "3", ""],
 ["Moyen", "6", ""],
 ["Vide", "0", ""],
 ["Aléatoire", str(random.randint(5, 10)), ""],
 ["Aléatoire", str(random.randint(11, 15)), ""]]
    
==

