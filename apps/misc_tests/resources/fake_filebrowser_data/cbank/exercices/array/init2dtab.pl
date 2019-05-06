# Copyright 2017 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Initialisation d'un tableau à 2 dimensions

author=Nicolas Borie
title=Initialisation d'un tableau à 2 dimensions
tag=function|recursion
template=/template/stdsandboxC.pl

text==

Écrire une fonction **init_tab_2d** qui prend en paramètre un tableau de
caractère à deux dimensions **tab** ainsi que deux entiers **n** et
**m**. Le tableau comporte ainsi **n** lignes et **m** colonnes. Vous devrez
initialiser ce tableau avec des lettres minuscules, en commançant par
'a' et de manière croissante en ligne et en colonne. Quand on arrive
au 'z', on boucle en revenant sur la lettre 'a'.

Voici un exemple du contenu de la variable *tab* pour 11 lignes et 19 colonnes.

    a b c d e f g h i j k l m n o p q r s
    b c d e f g h i j k l m n o p q r s t
    c d e f g h i j k l m n o p q r s t u
    d e f g h i j k l m n o p q r s t u v
    e f g h i j k l m n o p q r s t u v w
    f g h i j k l m n o p q r s t u v w x
    g h i j k l m n o p q r s t u v w x y
    h i j k l m n o p q r s t u v w x y z
    i j k l m n o p q r s t u v w x y z a
    j k l m n o p q r s t u v w x y z a b
    k l m n o p q r s t u v w x y z a b c

==

editor.code==
... init_tab_2d(char** tab, int n, int m){
  ...
}
==

solution==

void init_tab_2d(char** tab, int n, int m){
  int i, j;

  for(i=0 ; i<n ; i++){
    for(j=0 ; j<m ; j++){
      tab[i][j] = 'a' + ((i+j) % 26);
    }
  }
}


==

codeafter==

#include <stdlib.h>
#include <stdio.h>

void print_tab_2d(char** tab, int n, int m){
  int i, j;

  for(i=0 ; i<n ; i++){
    for(j=0 ; j<m ; j++){
      printf("%c ", tab[i][j]);
    }
    printf("\n");
  }
}

int main(int argc, char* argv[]){
  int n = atoi(argv[1]);
  int m = atoi(argv[2]);
  int i;

  char** tab = malloc(n*sizeof(char*));
  for (i=0 ; i<n ; i++)
    tab[i] = malloc(m*sizeof(char));

  init_tab_2d(tab, n, m);
  print_tab_2d(tab, n, m);

  for (i=0 ; i<n ; i++)
    free(tab[i]);
  free(tab);

  return 0;
}
==


tests==
[["Basique", "1 1", ""],
 ["Vide", "0 0", ""],
 ["Ligne", "1 6", ""],
 ["Colonne", "7 1", ""],
 ["Grand", "19 31", ""],
 ["Aléatoire", ' '.join([str(random.randint(1, 20)), str(random.randint(1, 40))]), ""],
 ["Aléatoire", ' '.join([str(random.randint(1, 20)), str(random.randint(1, 40))]), ""]]
==

