# Copyright 2018 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Divisibilité par 7

author=Nicolas Borie
title=Divisibilité par 7
tag=function|recursion|array
template=/template/stdsandboxC.pl

text==

La divisibilité par 7 est un critère bien moins connu que la
divisibilité par 3 ou 9 (où l'on fait essentiellement la somme des
chiffres).

**Théorème :** un nombre entier est divisible par 7 si et seulement si
son nombre de dizaines moins deux fois le chiffre de ces unités est
divisible par 7.

Appliquons ce résultat sur le nombre 9390724 !

9390724 est-il divisible par 7 ?

    9390724 est multiple de 7 <==> 939072 - 2 x 4 = 939064 est multiple de 7
    939064 est multiple de 7  <==> 93906 - 2 x 4 = 93898 est multiple de 7
    93898 est multiple de 7   <==> 9389 - 2 x 8 = 9373 est multiple de 7
    9373 est multiple de 7    <==> 937 - 2 x 3 = 931 est multiple de 7
    931 est multiple de 7     <==> 93 - 2 x 1 = 91 est multiple de 7
    91 est multiple de 7      <==> 9 - 2 x 1 = 7 est multiple de 7

7 est bien multiple de 7 (pas trop dur celui-là), ainsi 9390724 est
bien divisible par 7 (un peu plus piquant lui sans le théorème).

On veut maintenant complèter la fonction qui suit de manière à ce
qu'elle retourne 1 si son argument est divisible par 7 et 0 sinon.

Faites confiances aux recommandations suivantes :

* Si l'argument est négatif, on fait un appel récursif sur son opposé
  (car 7 divise $% n %$ si et seulement si 7 divise $% -n %$)			 

* Si l'argument vaut 0 ou 7, alors on retourne 1.

* Si l'argument est positif mais inférieur ou égal à 13 et qu'il ne
  vaut ni 0, ni 7 ; alors il faut retourner 0 car l'argument n'est pas
  divisible par 7. 

* Si l'argument est positif et supérieur ou égal à 14, alors on
  utilise le théorème énoncé plus haut.			 
==

editor.code==
int divisible_by_7(int n){
  ...
}
==

solution==
int divisible_by_7(int n){
    if (n < 0)
        return divisible_by_7(-n);			     
    if ((n == 0) || (n == 7))
	return 1;
    if (n < 14)
	return 0;
    return divisible_by_7((n/10) - 2*(n%10));
}
==

codeafter==
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]){
  int n = atoi(argv[1]);

  if (divisible_by_7(n))
      printf("%d est divisible par 7.\n", n);
  else
      printf("%d n'est pas divisible par 7.\n", n);      
  return 0;
}

==

tests==

[["Basique", "0", ""],
 ["Petit", "7", ""],
 ["Pas bien grand", "6", ""],
 ["Aléatoire", str(random.randint(-2000000000, 2000000000)), ""],
 ["Aléatoire", str(random.randint(-2000000000, 2000000000)), ""],
 ["Aléatoire", str(random.randint(-2000000000, 2000000000)), ""],
 ["Aléatoire", str(random.randint(-2000000000, 2000000000)), ""],
 ["Aléatoire", str(random.randint(-2000000000, 2000000000)), ""],
 ["Aléatoire", str(random.randint(-2000000000, 2000000000)), ""],
 ["Aléatoire", str(7*random.randint(-200000000, 200000000)), ""]]
			 
==

