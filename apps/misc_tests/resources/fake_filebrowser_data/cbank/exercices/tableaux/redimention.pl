# Copyright 2017 BEN HAMOUDA Amel
#
# Redimentionne un tableau

author=BEN HAMOUDA Amel
name=Redimentionne un tableau
title=Redimentionne un tableau
tag=redimentionTab
template=/template/autograderC
language=c_cpp

text==

Ecrire une fonction *redimentionTab* qui prend en paramétre un tableau d'entier et sa taille, 
et redimentionne le tableau grace a la taille donnée en paramétre si besoin.

==

code==
void redimentionTab(int *tab, int size) {
  /** votre code ici... **/
}

==

codebefore==
#include <stdlib.h>
#include <stdio.h>

==

solution==

void redimentionTab(int *tab, int size) {
	tab = (int*)realloc(tab, sizeof(int)*size);
	if (tab == NULL) {
		return;
	}
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
	int size_tabPair, size_tabImpair;
	int t[] = {1,2,5,9,8,7,4,45,85,78};
	int *tabPair = allouerTableau(10);
	int *tabImpair = allouerTableau(10);
	com12(t, tabPair, tabImpair, 10, &size_tabPair, &size_tabImpair);
	redimentionTab(tabPair, size_tabPair);
	redimentionTab(tabPair, size_tabImpair);
	if (size_tabPair == 10){
		printf("Le tableau n'a pas était redimentionné.\n");
	}
	else {
		printf("Le tableau a était redimentionné.\n");
	}
	return 0;
}

==


grader==

from graderC import graderI

tests = [["Exécution simple", "", "", "Le tableau a était redimentionné.\n"]]
graderI(tests)
==
