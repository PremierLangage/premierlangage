# Copyright 2017 Elise Hardy <ehardy@etud.u-pem.fr>
# Copyright 2018 Dominique Revuz
#
# Ecrire une fonction qui renvoie le maximum dans un intervalle d'un tableau d'entiers

author=Elise Hardy et DR
title=Maximum dans une sous-partie d'un tableau d'entiers
tag=function
template=/template/stdsandboxC.pl

text==

Ecrire une fonction **max_section_array** qui renvoie l'indice du maximum 
apparaissant dans une sous-fraction d'un tableau d'entiers **tab**

Si les indices de l'intervalle (variable **a** et **b**) ne sont pas corrects 
la fonction retourne **-1**, sinon elle retournera bien l'indice du maximum.

==

editor.code==
/*
 * tab : pointer to the array
 * a : included inferior index 
 * b : included superior index
 * n : number of elements in the array 
 * r : pointer to the answer index
 */
int max_section_array(int *tab, int n, int a, int b, int *r){
  /* Votre code ici... */
} 
  

==

solution==
int max_section_array(int *tab, int taille, int a, int b, int *r){
	if(a < 0 || b <0 || b<a || b > taille || a>taille || taille <= 0)
		{
		return -1;
		}
	int max = tab[a];
	int indice=a;
	int i;
	for(i = a; i<= b; i++){
		if(max < tab[i]){
			max = tab[i];
			indice=i;
		}
	}
	*r = indice;
	return indice;
}


==

codeafter==

#include <stdio.h>
#include <stdlib.h>    
#include <time.h>

int* initialiseTableau(int n){
 int *tab;
	if (n<1) return NULL;
	tab= malloc(sizeof(int)*n);
	int i;
	for (i = 0; i < n; i++) { tab[i] = i; }
	return tab;
}
    
int *randomtab(int n){
 int *t= calloc(n,sizeof(int));
 int i;
  for(i=0;i<n;i++)
	t[i]=rand();
return t;
}

int main(int argc, char* argv[]){
  int a = atoi(argv[1]);
  int b = atoi(argv[2]);
  int n = atoi(argv[3]);
  int r;
  int *tab;
  srand(a*b*n);
	if (n<15) {tab=initialiseTableau(n);}
	else { tab=randomtab(n);}
  if ( max_section_array(tab,n,a,b,&r)==-1) 
	printf("indices incorrectes taille %d , a=%d, b=%d ", n, a, b);
  else 
	printf("le max est égal à %d",tab[r]);
  return 0;
}
==

tests==

[["Basique", "2 5 10", ""],
 ["Indice négatif", "8 -4 16", ""],
 ["Indice trop grand","35 77 20",""],
 ["Bornes dans le mauvais sens", "16 4 20",""],
 ["Aléatoire", " ".join([str(random.randint(-2, 12)),str(random.randint(10, 22)),"20"]), ""],
 ["Aléatoire", " ".join([str(random.randint(-2, 12)),str(random.randint(10, 22)),"20"]), ""],
 ["Aléatoire", " ".join([str(random.randint(-2, 12)),str(random.randint(10, 22)),"20"]), ""],
 ["Aléatoire", " ".join([str(random.randint(-2, 12)),str(random.randint(10, 22)),"20"]), ""],
 ["Aléatoire", " ".join([str(random.randint(-2, 12)),str(random.randint(10, 22)),"20"]), ""]
 ]

==

