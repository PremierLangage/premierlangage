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

Ecrire une fonction *triInsertion* qui tri le tableau mis en paramétre par insertion.

==

code==
void triInsertion(int *tab, int taille){
  /** votre code ici... **/
}

==

codebefore==
#include <stdlib.h>
#include <stdio.h>

==

solution==

void triInsertion(int *tab, int taille){
   int i, j;
   for (i = 1; i < taille; ++i) {
       int elem = tab[i];
       for (j = i; j > 0 && tab[j-1] > elem; j--) {
           tab[j] = tab[j-1];
       }
       tab[j] = elem;
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
	int t[] = {1,78,5,9,80,7,400,45,85,78};
	triInsertion(t, 10);
    afficheTab(t,10);
	return 0;
}

==


grader==
from graderC import graderI

tests = [["Exécution simple", "", "", "1 5 7 9 45 78 78 80 85 400 \n"]]
graderI(tests)
==
