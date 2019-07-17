# Copyright 2017 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Égrener des nombres récursivements

author=Nicolas Borie
title=Égrener des nombres récursivements
tag=function|recursion
template=/template/stdsandboxC.pl

text==

Écrire une fonction récurssive **bas_haut** qui prend en argument un
entier *n* et qui affiche sur une seule ligne sans retour à la ligne
tout les entiers de *n* à *1* puis remonte à *n*. Chaque monbre sera
séparé par un espace.

Pour *n* qui vaut *7*, cela donnera

    7 6 5 4 3 2 1 2 3 4 5 6 7 
    
==

editor.code==
#include <stdio.h>

... bas_haut(...){
  ...
}
==

solution==

#include <stdio.h>
    
void bas_haut(int n){
  if (n < 1)
    return ;	
  if (n == 1)
    printf("1");
  else{
    printf("%d ", n);
    bas_haut(n - 1);
    printf(" %d", n);
  }	
}

==
    
codeafter==

#include <stdlib.h>    
    
int main(int argc, char* argv[]){
  int a = atoi(argv[1]);

  bas_haut(a);
  return 0;
}
==

    
tests==

[["Basique", "1", ""], 
 ["Moyen", "5", ""],
 ["Erreur", "-2", ""],
 ["Aléatoire", str(random.randint(6, 15)), ""],
 ["Aléatoire", str(random.randint(6, 15)), ""]]

==

