# Copyright 2018 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Factorielle d'un entier positif

author=Nicolas Borie
title=Factorielle d'un entier positif
tag=function|recursion
template=/template/stdsandboxC.pl

text==

La factorielle d'un entier positif $% n %$ est par convention $% 1 %$
si $% n = 0 %$ et le produit de tous les entiers strictement positifs
inférieur ou égal à $% n %$ sinon.

La factorielle d'un entier $% n %$ est noté $% n! %$ et est donc égal à 
$% n! := 1 \times 2 \times 3 \times \dots \times (n-1) \times n %$

Les premières valeurs sont ainsi :
    
$% 0! = 1 \qquad 1! = 1 \qquad 2! = 2 \qquad 3! = 6 \qquad 4! = 24 \qquad 5! = 120 %$

De manière récursive : la factorielle de $% 0 %$ vaut $% 1 %$ et pour
tout $% n > 0 %$, on a $% n! = n \times (n-1)! %$.

Complètez la fonction ci-dessous de manière à ce qu'elle retourne la
factorielle de $% n %$ en utilisant la valeur de factorielle de $% n-1
%$.    
==

editor.code==
int factorial(int n){
  ...
}
==

solution==
int factorial(int n){
  if (n==0)
    return 1;
  return n*factorial(n-1);
}
==
    
codeafter==

#include <stdlib.h>
#include <stdio.h>    
    
int main(int argc, char* argv[]){
  int n = atoi(argv[1]);
  printf("%d! = %d\n", n, factorial(n));
  return 0;
}
==

    
tests==

[["Basique", "0", ""], 
 ["Petit", "1", ""],
 ["Moyen", "5", ""],
 ["Aléatoire", str(random.randint(2, 4)), ""],
 ["Aléatoire", str(random.randint(6, 8)), ""],
 ["Aléatoire", str(random.randint(9, 11)), ""],
 ["Aléatoire", str(random.randint(11, 15)), ""],
 ["Aléatoire", str(random.randint(16, 20)), ""]]

==

