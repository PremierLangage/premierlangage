# Copyright 2017 BEN HAMOUDA Amel
#
# Deux tableau en paramètre renvoie trois tableaux

author=BEN HAMOUDA Amel
name=Deux tableau en paramètre renvoie trois tableaux
title=Deux tableau en paramètre renvoie trois tableaux
tag=deuxTabReturnTroisTab
template=/template/autograderC
language=c_cpp

text==

Ecrire une fonction *com23* qui prend en paramétre deux tableaux d'entier, 
cette fonction renverra par adresse trois tableaux contenant pour l'un que 
les entiers qui se trouve que dans le premier tableau, pour le second les entiers 
qui se trouve que dans le second tableau et pour le dernier les entiers qui 
sont en commun dans les deux tableaux mis en paramétre.

==

code==
void com23(int *t1, int s1, int *t2, int s2, int **r1, int *rs1, int **r2, int *rs2, int **r3, int *rs3) {
  /** votre code ici... **/
}

==

codebefore==
#include <stdlib.h>
#include <stdio.h>

==

solution==

void com23(int *t1, int s1, int *t2, int s2, int **r1, int *rs1, int **r2, int *rs2, int **r3, int *rs3) {
	int i = 0, j = 0;
	*r1 = allouerTableau(s1+s2);
	*r2 = allouerTableau(s1+s2);
	*r3 = allouerTableau(s1+s2);
	triInsertion(t1, s1);
	triInsertion(t2, s2);

	while (i < s1 || j < s2) {
		if (t1[i] == t2[j]) {
			(*r3)[*rs3] = t2[j];
			(*rs3)++;
			i++;
			j++;
		}
		else if (t1[i] < t2[j]) {
			(*r1)[*rs1] = t1[i];
			(*rs1)++;
			i++;
			continue;
		}
		else {
			(*r2)[*rs2] = t2[j];
			(*rs2)++;
			j++;
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
	int t2[] = {1,2,3,4,5};
	int t1[] = {1,6,9,8,2};
	int *t3;
	int *t4;
	int *t5;
	int s3 = 0,s4 = 0,s5 = 0;
	com23(t1, 5, t2, 5, &t3, &s3, &t4, &s4, &t5, &s5);
	redimentionTab(t3, s3);
	redimentionTab(t4, s4);
	redimentionTab(t5, s5);
	afficheTab(t3, s3);
	afficheTab(t4, s4);
	afficheTab(t5, s5);
	return 0;
}

==


grader==

from graderC import graderI

tests = [["Exécution simple", "", "", "6 8 9 \n3 4 5 \n1 2 \n"]]
graderI(tests)
==
