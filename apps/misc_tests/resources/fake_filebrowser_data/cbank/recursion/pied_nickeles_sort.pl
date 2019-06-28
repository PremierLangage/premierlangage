# Copyright 2018 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Tri des pieds nickelés

author=Nicolas Borie
title=Tri des pieds nickelés
tag=function|recursion|array
template=/template/stdsandboxC.pl

text==

Croquignol, Filochard et Ribouldingue font les constations suivantes :

* Un tableau vide ou un tableau à un seul élément est toujours
  trié. Il suffit de ne rien faire.

* Pour trier un tableau à deux éléments, il suffit de faire une
  conparaison et de réordonner ces deux éléments si besoin.

* Comme nous somme trois, pour trier les tableaux plus grands,
  Croquignol commencera par trier les deux premiers tiers du tableaux,
  Filochard triera ensuite les deux derniers tier et enfin
  Ribouldingue retriera encore une fois les deux premiers tiers. On
  fera cela récursivement.


Attention, cette stratégie est fonctionnelle mais ce n'est pas un tri
considéré comme rapide. Pour que le tri soit correct, il faut être sûr
que les appels récursifs soient opérés sur des morceaux de tableaux de
plus en plus petit d'une part et il faut être sûr que le chevauchement
des tiers est correct (tous les nombres ne sont pas des multiples de
trois).


Voici une trace des appels récursifs de cet algorithme sur un
tableau de taille 4 :

                                 [3 7 4 1]
    appel sur indices (0 <--> 3) [3 7 4 1] (appel originel)
    appel sur indices (0 <--> 2) [3 7 4  ]     (2 permiers tiers de 0 <--> 3)
    appel sur indices (0 <--> 1) [3 7    ]         (2 permiers tiers de 0 <--> 2)
    appel sur indices (1 <--> 2) [  7 4  ]         (2 derniers tiers de 0 <--> 2)
    appel sur indices (0 <--> 1) [3 4    ]         (2 permiers tiers de 0 <--> 2)
    appel sur indices (1 <--> 3) [  4 7 1]     (2 derniers tiers de 0 <--> 3)
    appel sur indices (1 <--> 2) [  4 7  ]         (2 permiers tiers de 1 <--> 3)
    appel sur indices (2 <--> 3) [    7 1]         (2 derniers tiers de 1 <--> 3)
    appel sur indices (1 <--> 2) [  4 1  ]         (2 permiers tiers de 1 <--> 3)
    appel sur indices (0 <--> 2) [3 1 4  ]     (2 permiers tiers de 0 <--> 3)
    appel sur indices (0 <--> 1) [3 1    ]         (2 permiers tiers de 0 <--> 2)
    appel sur indices (1 <--> 2) [  3 4  ]         (2 derniers tiers de 0 <--> 2)
    appel sur indices (0 <--> 1) [1 3    ]         (2 permiers tiers de 0 <--> 2)
                                 [1 3 4 7]

Voici maintenant une trace des échanges lors des appels sur
sous-tableaux de taille 2:

                                 [3 7 4 1] [3 7 4 1]
    appel sur indices (0 <--> 3) [3 7 4 1] [3 7 4 1]
    appel sur indices (0 <--> 2) [3 7 4  ] [3 7 4 1]
    appel sur indices (0 <--> 1) [3 7    ] [3 7 4 1] (pas d'échange 3 et 7)
    appel sur indices (1 <--> 2) [  7 4  ] [3 4 7 1] (échange de 7 et 4)
    appel sur indices (0 <--> 1) [3 4    ] [3 4 7 1] (pas d'échange 3 et 4)
    appel sur indices (1 <--> 3) [  4 7 1] [3 4 7 1]
    appel sur indices (1 <--> 2) [  4 7  ] [3 4 7 1] (pas d'échange 4 et 7)
    appel sur indices (2 <--> 3) [    7 1] [3 4 1 7] (échange de 7 et 1)
    appel sur indices (1 <--> 2) [  4 1  ] [3 1 4 7] (échange de 4 et 1)
    appel sur indices (0 <--> 2) [3 1 4  ] [3 1 4 7]
    appel sur indices (0 <--> 1) [3 1    ] [1 3 4 7] (échange de 3 et 1)
    appel sur indices (1 <--> 2) [  3 4  ] [1 3 4 7] (pas d'échange 3 et 4)
    appel sur indices (0 <--> 1) [1 3    ] [1 3 4 7] (pas d'échange 1 et 3)
                                 [1 3 4 7]


Complèter la fonction récurive *pieds_sort* qui opère un tri à la
manière des pieds nickelés.

La fonction prendra en argument l'adresse d'un tableau et devra trier
tous les éléments situé entre les indices *begin_index* et *end_index*
tout deux inclus. Outre les appels récursifs, la dificulté de cet
exercice se situe dans le calcul des bornes à un tier et deux
tiers. Le tiers du milieu doit toujours être le plus grand lorsque le
nombre total d'éléments à trier n'est pas un multiple de $% 3 %$.
==

editor.code==
void pieds_sort(int* array, int begin_index, int end_index){
  ...
}
==

solution==

void pieds_sort(int* array, int deb, int fin){
int tmp, tier1, tier2;

  if (fin == deb+1){
    if (array[deb] > array[fin]){
      tmp = array[deb];
      array[deb] = array[fin];
      array[fin] = tmp;
    }
  }
  else{
    if (fin > deb+1){
        tier1 = deb + ((fin-deb+1) / 3);
        tier2 = fin - ((fin-deb+1) / 3);
        pieds_sort(array, deb, tier2);
        pieds_sort(array, tier1, fin);
        pieds_sort(array, deb, tier2);
    }
  }
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

  pieds_sort(tab, 0, nb_term-1);
  display_array(tab, nb_term);
  free(tab);
  return 0;
}

==


tests==

[["Basique", "1", ""],
 ["Petit", "3 2 1", ""],
 ["Moyen", "8 1 5 2 7 3 6 9 4 0", ""],
 ["Aléatoire", ' '.join([str(random.randint(1, 30)) for i in range(random.randint(15,30))]), ""],
 ["Aléatoire", ' '.join([str(random.randint(1, 10)) for i in range(random.randint(15,30))]), ""],
 ["Aléatoire", ' '.join([str(random.randint(-100, 100)) for i in range(random.randint(30,40))]), ""]]

==

