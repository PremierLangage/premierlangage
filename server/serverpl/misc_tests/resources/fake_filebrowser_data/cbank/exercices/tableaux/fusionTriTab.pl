# Copyright 2017 BEN HAMOUDA Amel
#
# Trier un tableau

author=BEN HAMOUDA Amel
name=Trier un tableau
title=Trier un tableau
tag=tritableau
template=/template/autograderC
language=c_cpp

text==

Ecrire une fonction *fusionTri* qui fusionne deux tableaux *droite* et *gauche* (que l'on suppose déjà trié) dans un tableau *result*.

==

code==
void fusionTri(int *gauche, int *droite, int gsize, int dsize, int **result, int rsize) {
  /** votre code ici... **/
}

==

codebefore==
#include <stdlib.h>
#include <stdio.h>

==

solution==

void fusionTri(int *gauche, int *droite, int gsize, int dsize, int **result, int rsize) {
  	int i,j,k;
  	*result = allouerTableau(rsize);
  	for (i = 0, j = 0, k = 0; i < rsize && (j < gsize || k < dsize); i++) {
		if (gauche[j] < droite[k] || k >= dsize) {
			(*result)[i] = gauche[j];
			j++;
		}
		else {
			(*result)[i] = droite[k];
			k++;
		}
  	}
}

==

codeafter==

void afficheTab(int *tab, int n) {
	int i;
	for (i=0; i<n; i++) {
		printf("%d ", tab[i]);
	}
	printf("\n");
}

int main(int argc, char const *argv[]) {
	int t[] = {9,8,7,6,5};
	int tt[] = {4,3,2,1,0};
	int *ttt;
	
	triInsertion(t, 5);
  	triInsertion(tt, 5);
	fusionTri(t, tt, 5, 5, &ttt, 5+5);
	afficheTab(ttt, 5+5);
	
	return 0;
}


==


grader==
from graderC import graderI

tests = [["Exécution simple", "", "", "0 1 2 3 4 5 6 7 8 9 \n"]]
graderI(tests)
==
