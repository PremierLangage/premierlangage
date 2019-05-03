# Copyright 2018 DR
#
# Initialisation d'un tableau d'entier

author=DR
title=Initialisation d'un tableau avec les carrés des entiers
tag=array|function
template=/template/stdsandboxC.pl

text==

Ecrire une fonction **init_with_square** qui prend en paramètre **tab** l'adresse 
d'un tableau de n cases ainsi qu'un entier **n** (la taille du tableau) puis 
retourne l'adresse de ce même tableau de n entiers avec pour contenu les 
valeurs des premiers carrés parfait $%1%$, $%4%$, $%9%$, 
$%16%$ jusqu'à $%n^{2}%$.
    
Si n est négatif ou nul la fonction retourne **NULL** (définie dans stdio.h).
==

editor.code==
int* init_with_square(...) {
  /* votre code ici... */
}

==


codebefore==

#include <stdlib.h>
#include <stdio.h>

==

solution==

int* init_with_square(int* tab, int n){

	if (n<1) return NULL;


	int i;
	for (i = 0; i < n; i++) {
		tab[i] = (i+1)*(i+1);
	}
	return tab;
}


==


codeafter==


void printTableau(int *tab, int n) {
	int i;
	for (i = 0; i < n; i++) {
		printf("%d ", tab[i]);
	}
	printf("\n");
}


int main(int argc, char const *argv[]) {
	int n = atoi(argv[1]);
 	int *tab  = malloc(sizeof(int)*n);
	int *tcheck = init_with_square(tab, n);
	if (tcheck != NULL)
		printTableau(tcheck, n);
	else
		printf("tableau NULL");
	return 0;
}
==


tests==

[["Basique", "10", ""],
 ["Vide", "0", ""],
 ["Négatif", "-33", ""],
 ["Grand", "100", ""],
 ["Aléatoire", str(random.randint(1, 20)), ""],
 ["Aléatoire", str(random.randint(20, 40)), ""]]

==
