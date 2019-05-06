# Copyright 2017 Elise Hardy <ehardy@etud.u-pem.fr>
#
# Ecrire une fonction qui calcule la puissance d'un nombre

author=Elise Hardy
title=Écrire une fonction qui calcule la puissance d'un nombre
tag=function
template=/template/stdsandboxC.pl

text==

Écrire une function **puissance** qui prend en argument 2 entiers $%n%$ et 
$%p%$ et qui retourne l'entier $%n^p%$.
$%p%$ doit etre positif sinon la fonction retourne 0.

==

editor.code==
... puissance (...){
  /* Votre code ici... */
}
==

solution==
int puissance (int n, int p){
	if(p < 0){
		return 0;
	}
	int i;
	int puis=1;
	for(i=0;i<p;i++){
		puis*=n;
	}
	return puis;
}

==

codeafter==

#include <stdio.h>
#include <stdlib.h>    
    
int main(int argc, char* argv[]){
  int a = atoi(argv[1]);
  int b = atoi(argv[2]);

  printf("%d\n", puissance(a, b));
  return 0;
}
==

tests==

[["Basique", "2 5", ""],
 ["Impossible", "8 -4", ""],
 ["Aléatoire", " ".join([str(random.randint(-5, 10)) for i in range(2)]), ""],
 ["Aléatoire", " ".join([str(random.randint(-5, 10)) for i in range(2)]), ""],
 ["Aléatoire", " ".join([str(random.randint(-5, 10)) for i in range(2)]), ""],
 ["Aléatoire", " ".join([str(random.randint(-5, 10)) for i in range(2)]), ""]]

==

