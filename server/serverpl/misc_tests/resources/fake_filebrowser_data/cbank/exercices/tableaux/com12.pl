# Copyright 2017 BEN HAMOUDA Amel
#
# Un tableau en paramètre renvoie deux tableaux

author=BEN HAMOUDA Amel
name=Un tableau en paramètre renvoie deux tableaux
title=Un tableau en paramètre renvoie deux tableaux
tag=unTabReturnDeuxTab
template=/template/autograderC
language=c_cpp

text==


Ecrire une fonction *splitIP* qui prend en paramètre un tableau d'entier.
Et l'adresse de deux pointeurs sur des entiers.
cette fonction placera dans les deux adresses deux tableaux contenant :

    -> les entiers pairs du tableau mis en paramètre.
    -> les entiers impair du tableau mis en paramètre.

Le tableau passé en paramètre n'est pas modifié.
Les tailles utiles des tableaux seront retournées dans les adresses sizePaire sizeImpair .


On allouera deux tableaux de taille maximum (c'est à dire la taille du tableau passé en paramètre).

==

code==
void splitIP(int* tab,int size, int **tabPair, int *sizePair,  int **tabImpair, int *sizeImpair)
  /** votre code ici... **/
}

==

codebefore==
#include <stdlib.h>
#include <stdio.h>

==

solution==

void splitIP(int* tab,int size, int **tabPair, int *sizePair,  int **tabImpair, int *sizeImpair)
{
	int i;
	int j = 0;
	int k = 0;
	*tabPair=malloc(sizeof(int)*size);
	*tabImpair=malloc(sizeof(int)*size);
  	for (i = 0; i < size; ++i) {
  		if (tab[i] % 2 == 0) {
  			(*tabPair)[j] = tab[i];
  			j++;
  		}
  		else {
  			(*tabImpair)[k] = tab[i];
  			k++;
  		}
  	}
  	*sizeImpair = k;
  	*sizePair = j;
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

int *createtabfromargv(int argc,char const *argv[])
{
int *t=malloc(sizeof(int)*argc);
int i=0;
for(;argv[i];i++) { t[i]=atoi(argv[i]); }
return t;
}

int main(int argc, char const *argv[]){
	int sizePair, sizeImpair;
	int *t = createtabfromargv(argc,argv);
	int *tabPair;
	int *tabImpair ;
	splitIP(t,10, &tabPair, &sizePair, &tabImpair, &sizeImpair);
	afficheTab(tabPair,sizePair);
	afficheTab(tabImpair,sizeImpair);
	return 0;
}

==


grader==

from graderC import graderII

tests = [["Exécution simple", "1 2 3 5 6 7 15 27 90", ""],
	["Exécution simple", "3 5 7 1 2 4 8 100 90", ""]]
graderII(tests)
==
