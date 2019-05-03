# Copyright 2017 BEN HAMOUDA Amel
#
# Copier un tableau

author=BEN HAMOUDA Amel
name=Copier un tableau
title=Copier un tableau
tag=copietableau
template=/template/autograderC
language=c_cpp

text==

Ecrire une fonction *copieTableau* qui retourne la copie d'un tableau d'entier.

==

code==
int* copieTableau(int* tab){
  /** votre code ici... **/
}

==

codebefore==
#include <stdlib.h>
#include <stdio.h>

==

solution==

int* copieTableau(int* tab, int n){
	int i;
  	int *copie = allouerTableau(n);
  	for (i = 0; i < n; ++i) {
  		copie[i] = tab[i];
  	}
	return copie;
}

==

codeafter==

void afficheTab(int *tab , int n) {
	int i;
	for (i=0; i<n; i++) {
		printf("%d ", tab[i]);
	}
	printf("\n");
}
int main(int argc, char const *argv[]){  
	int t[] = {1,2,5,9,8,7,4,45,85,78};
	int *c = copieTableau(t, 10);
	afficheTab(c,10);
	return 0;
}

==


grader==
from graderC import graderI

tests = [["Exécution simple", "", "", "1 2 5 9 8 7 4 45 85 78 \n"]]
graderI(tests)
==
