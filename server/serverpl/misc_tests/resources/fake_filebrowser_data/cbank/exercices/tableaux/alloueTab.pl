# Copyright 2017 BEN HAMOUDA Amel
#
# Allocation d'un tableau

author=BEN HAMOUDA Amel
name=Allocation d'un tableau
title=Allocation d'un tableau
tag=alloueTableau
template=/template/autograderC
language=c_cpp

text==

Ecrire une fonction *allouerTableau* qui alloue un tableau d'entier de taille n.

==

code==
int* allouerTableau(int n){
  /** votre code ici... **/
}

==

codebefore==
#include <stdlib.h>
#include <stdio.h>

==

solution==

int* allouerTableau(int n){
	int *tab = (int*)malloc(sizeof(int) * n);
	if (tab == NULL){ 
		return 0;
	}
	return tab;
}

==

codeafter==
int main(int argc, char const *argv[]){
	int n = atoi(argv[1]);
	int *t = allouerTableau(n);
	int i;
	for (i = 0; i < n; i++) {
		t[i] = 0;
	}
	return 0;
}

==


grader==
from graderC import graderII
import random

tests = [["Basique", "10", ""],
		 ["Vide", "0", ""],
		 ["Grand", "100", ""]] 

tests.append(["Aléatoire", str(random.randint(1, 20)), ""])
tests.append(["Aléatoire", str(random.randint(1, 20)), ""])

graderII(tests)
==
