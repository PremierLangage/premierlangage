# Copyright 2017 Elise Hardy <ehardy@etud.u-pem.fr>
#
# Déclaration d'une structure C pour un plateau

author=Elise Hardy
name=Structure C pour un plateau
title=Structure C pour un plateau
tag=structure
template=/template/autograderC

text==
Déclarer et définir une *structure* C nommé *Plateau*. Cette structure
devra contenir trois champs un tableau de deux dimensions nommé *tab*, un entier *n*
 et un entier *k* respectivement la taille du plateau.

==

code==
typedef ...

==

solution==
typedef struct {
char **tab;
int n;
int k;
}Plateau;

==

codeafter==
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char* argv[]){
	Plateau P;

	P.n = atoi(argv[1]);
	P.k = atoi(argv[2]);

	if(P.n < 0 || P.k < 0){
		printf("Erreur un plateau ne peut avoir des dimensions négatives");
		return 0;
	}
	P.tab=malloc(sizeof(int*)*P.n);
	if(P.tab == NULL){
		exit(EXIT_FAILURE);
	}
	int i;
	for(i=0;i<P.n;i++){
		P.tab[i]=malloc(sizeof(int)*P.k);
		if(P.tab[i] == NULL){
			exit(EXIT_FAILURE);
		}
	}
	printf("plateau dimension : %d %d \n", P.n, P.k);
	return 0;
}
==

grader==
from graderC import graderII
 
tests = [["Déclaration et utilisation 1", "14 3",""],
         ["Déclaration et utilisation 2", "47 85",""]] 
graderII(tests)
==
