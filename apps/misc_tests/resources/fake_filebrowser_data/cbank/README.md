# Cbank

## Description

Cbank est une base de données d'exercice de programmation dans le
langage C. Ce projet est une sorte de bibliothèque pour le projet
Premier Langage de l'université Paris-Est à Marne la Vallée, porté par
Dominique Revuz.

Cbank propose une collection d'exercice dont certains sont statiques,
dynamiques, aléatoires ou encore demandant compilation et exécution.
Cbank est plus ou moins supervisé par Nicolas Borie.

Le classement des ressources pédagogiques est hiérarchisé via une
ontologie ordonnée des concepts du langage C.


## Philosophie

Premier langage fourni sandbox, docker, compilation et exécution
sécurisées des propositions des étudiants. Initialement désigné pour
Python mais conçu de manière parfaitement extensible, Cbank utilise
premier langage pour mettre en place des exercices simples en C en
cachant à l'utilisateur l'enrobage et l'encapsulation imposé par le
langage (compilation, fonction main, mise en place des arguments,
entrée standard, etc ...).

En suivant l'exemple de Python et de son doctesting ultra léger :
arguments et sorties attendu. Cbank propose des exercices où l'élève
n'a qu'a écrire une simple fonction C suivant un cahier des
charges. L'enseignant, lui, a fourni des listes d'arguments potentiels
et ensuite premier langage vérifie la proposition de l'élève pour voir
si sa fonction répond bien à l'exigible.

Toutes les parties intelligente/dynamique de Cbank sont donc écrites
en Python et l'on profite ainsi de la concision de Python pour mettre
en place des exercices rapides en C en ce focalisant sur une seule
notion et en s'abstenant des partie techniques, parfois démotivantes.


L'exemple prototype est le suivant, l'élève doit faire un tri à bulles
en C. Notons que cet exercice demande concentration pour ne pas se
tromper sur les indices dans les boucles, c'est le point
important. Pour tester la validité d'un tel tri, rien ne vaut une mise
en place de tests aléatoire avec comparaison avec un tri valide
(*qsort* de <stdlib.h> fait l'affaire).

En C, le prof doit fournir ou encore l'étudiant doit utiliser un code
similaire à ce qui suit pour mettre en place ces tests :

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void tri_a_bulle_eleve(int* tab, int taille){
  /* code de l'élève */
}

int tab_aleatoire(int* tab, int max_elem, int nb_elem){
  int i;

  tab = malloc(nb_elem*sizeof(int));
  if (!tab){
    fprintf(stderr, "Erreur d'allocation mémoire.\n");
    return 0;
  }
  for (i=0 ; i<nb_elem ; i++)
    tab[i] = rand() % max_elem;
  return 1;
}

void libere_tab(int* tab){
  free(tab);
}

void affiche_tab(int* tab, int taille){
  int i;

  for(i=0 ; i<taille ; i++)
    printf("%d ", tab[i]);
  printf("\n");
}

int cmp_int(const void* a, const void* b){
  int* n = (int*)a;
  int* m = (int*)b;

  return *n - *m;
}

int* copie_tab(int* tab, int taille){
  int i;
  int* copie;

  copie = malloc(taille*sizeof(int));
  if (!copie){
    fprintf(stderr, "Erreur d'allocation mémoire.\n");
    return NULL;
  }
  for (i=0 ; i<taille ; i++)
    copie[i] = tab[i];
  return copie;
}

int main(int argc, char* argv[]){
  int max_elem = atoi(argv[1]);
  int nb_elem = atoi(argv[2]);
  int* tab;
  int* copie;

  if (tab_alea(tab, max_elem, nb_elem)){
    qsort(tab, nb_elem, sizeof(int), cmp_int);
    affiche_tab(tab, nb_elem);

    if ((copie = copie_tab(tab, nb_elem))){
      tri_a_bulle_eleve(copie, nb_elem);
      affiche_tab(copie, nb_elem);
      libere_tab(copie);
    }

    libere_tab(tab);
    return 0;
  }
  return 1;
}
```

Alors qu'en python, ce qui suit ferait le même travail :

```python
import random

def tri_a_bulle_eleve(L):
    # code de l'élève

L = [random.randint(0, max_elem) for i in range(nb_elem)]
M = L.copy()
L.sort()
print(L)
tri_a_bulle_eleve(M)
print(M)
```

Premier langage avec Cbank a pour but de proposer des exercices en C
où l'on se focalise sur l'essentiel coté élève et où les enseignants
mette en place cahier des charges et tests avec Python.

