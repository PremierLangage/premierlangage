# Copyright 2018 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# PGCD avec soustractions

author=Nicolas Borie
title=PGCD avec soustractions
tag=function|recursion
template=/template/stdsandboxC.pl

text==

Pour calculer un PGCD, on utilise habituellement l'algorithme
d'Euclide. Ce dernier est basé sur une bonne utilisation de divisions
euclidiennes itérée. Il est toutefois possible de calculer un Plus
Grand Diviseur Commun de deux entiers $% a %$ et $% b %$ de manière récursive
en ne faisant que des soutractions, des divisions par $% 2 %$ et des
multiplications par $% 2 %$.


Voici l'idée de l'algorithme (ce sont juste quelques arguments mathématiques en fait...):


Le PCGD de deux entiers $% a %$ et $% b %$ est égal :

* à $% a %$ si $% a = b %$.
    
* à $% 1 %$ si $% a %$ ou $% b %$ vaut $% 1 %$.    

* à $% 2 %$ fois le PGCD de $% \frac{a}{2} %$ et $% \frac{b}{2} %$ si
$% a %$ et $% b %$ sont tous les deux pairs.

* au PGCD de $% \frac{a}{2} %$ et $% b %$ si seulement $% a %$ est pair.

* au PGCD de $% a %$ et $% \frac{b}{2} %$ si seulement $% b %$ est pair.

* enfin, dans ce dernier cas $% a %$ et $% b %$ sont forcément impairs et distincts

    * au PGCD de $% a - b %$ et $% b %$ si $% a > b %$.

    * au PGCD de $% a %$ et $% b - a %$ si $% b > a %$.
==

editor.code==
int pgcd(int a, int b){
  ...
}
==

solution==
int pgcd(int a, int b){
  if (a == b)
    return a;
  if ((a == 1) || (b == 1))
    return 1;
  if (!(a%2) && !(b%2))
    return 2*pgcd(a/2, b/2);
  if (!(a%2))
    return pgcd(a/2, b);
  if (!(b%2))
    return pgcd(a, b/2);
  if (a > b)
    return pgcd(a-b, b);
  return pgcd(a, b-a);
}


==

codeafter==

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]){
  int a = atoi(argv[1]);
  int b = atoi(argv[2]);

  printf("Le PGCD de %d et %d est : %d\n", a, b, pgcd(a,b));
    
  return 0;
}

==


tests==

[["Basique", "3 6", ""],
 ["Premier entre eux", "120 11", ""],
 ["Aléatoire", ' '.join([str(d*a)+" "+str(d*b) for (d,a,b) in [(random.randint(1, 40), random.randint(1, 10000), random.randint(1, 10000))]] ), ""],
 ["Aléatoire", ' '.join([str(d*a)+" "+str(d*b) for (d,a,b) in [(random.randint(1, 40), random.randint(1, 10000), random.randint(1, 10000))]] ), ""],
 ["Aléatoire", ' '.join([str(d*a)+" "+str(d*b) for (d,a,b) in [(random.randint(1, 40), random.randint(1, 10000), random.randint(1, 10000))]] ), ""],
 ["Aléatoire", ' '.join([str(d*a)+" "+str(d*b) for (d,a,b) in [(random.randint(1, 40), random.randint(1, 10000), random.randint(1, 10000))]] ), ""],
 ["Aléatoire", ' '.join([str(d*a)+" "+str(d*b) for (d,a,b) in [(random.randint(1, 40), random.randint(1, 10000), random.randint(1, 10000))]] ), ""]]

==

