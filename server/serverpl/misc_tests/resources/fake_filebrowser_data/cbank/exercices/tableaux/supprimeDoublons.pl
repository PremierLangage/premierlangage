# Copyright 2017 BEN HAMOUDA Amel
#
# Supprime les doublons d'un tableau

author=BEN HAMOUDA Amel
name=Supprime les doublons d'un tableau
title=Supprime les doublons d'un tableau
tag=supprimeDoublons
template=/template/autograderC
language=c_cpp

text==

Ecrire une fonction *supprimeDoublons* qui prend en paramétre un tableau d'entier (que l'on suppose déjà trié) et sa taille, 
cette fonction renverra la nouvelle taille du tableau.

==

code==
int supprimeDoublons(int *tab, int size) {
  /** votre code ici... **/
}

==

codebefore==
#include <stdlib.h>
#include <stdio.h>

==

solution==

int supprimeDoublons(int *tab, int size) {
	int i, j;
	for (i = 0, j = 1; j < size; j++) {
		if (tab[i] != tab[j]) {
			i++;
			if (i != j) {
				tab[i] = tab[j];
			}
		}
	}
	return i+1;
}
==

codeafter==

void redimentionTab(int *tab, int size) {
	tab = (int*)realloc(tab, sizeof(int)*size);
	if (tab == NULL) {
		return;
	}
}
void afficheTab(int *tab , int n) {
	int i;
	for (i=0; i<n; i++) {
		printf("%d ", tab[i]);
	}
	printf("\n");
}
int main(int argc, char const *argv[]) {
	int t[] = {89,10,5,100,6,8,5};
	triInsertion(t, 7);
	int n = supprimeDoublons(t, 7);
	afficheTab(t, n);
	printf("Nouvelle taille = %d\n", n);
	int tt[] = {2,2,89,10,1,1,45,65,56,65};
	triInsertion(tt, 10);
	n = supprimeDoublons(tt, 10);
	afficheTab(tt, n);
	printf("Nouvelle taille = %d\n", n);
	return 0;
}

==


grader==

from graderC import graderI

tests = [["Exécution simple", "", "", "5 6 8 10 89 100 \nNouvelle taille = 6\n1 2 10 45 56 65 89 \nNouvelle taille = 7\n"]]
graderI(tests)
==
