# Copyright 2017 DR

author=NB&DR

title= Fibonacci 
tag=function|string|recursivity
template=/template/stdsandboxC.pl

text==

Écrire une fonction récursive **fibo** qui calcule le $%n^{ième}%$ terme de la suite de Fibonacci.

La suite de Fibonacci est définie par ces deux premiers termes d'indice $%0%$ et d'indice $%1%$ qui valent respectivement $%0%$ et $%1%$.
les autres termes sont égaux à la somme des deux termes précédents de la suite.

Si l'entier en paramêtre est négatif alors votre fonction doit retourner zéro.

==

editor.code==
... fibo(...){
}
==

solution==

int fibo(int n){
if (n<0) return 0;
if (n<2) return n;
return fibo(n-1)+fibo(n-2);
}

==

codeafter==

#include <stdlib.h>
#include <stdio.h>


int main(int argc, char* argv[]){

  int a=atoi(argv[1]);
  int f=fibo(a);
  printf("fibo  de %d  = %d\n",a,f);
  return 0;
}
==


tests==
[["Basique", "5", ""],
["Grand", "30", ""],
["Négatif", "-2", ""],
["Nul", "0", ""],
["Aléatoire", str(random.randint(3, 29)), ""],
["Aléatoire", str(random.randint(3, 29)), ""],
["Aléatoire", str(random.randint(3, 29)), ""]]

==

