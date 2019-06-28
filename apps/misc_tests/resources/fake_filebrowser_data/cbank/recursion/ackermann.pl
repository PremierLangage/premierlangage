# Copyright 2017 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Fonction d'Ackermann

author=Nicolas Borie
title=Fonction d'Ackermann
tag=function|recursion
template=../template/stdsandboxC.pl

text==

La fonction d'Ackermann est une fonction récursive à deux paramètres
entiers positifs. Elle peut être définit comme il suit :

$% A(m, n) := 
\left\\{
\begin{array}{ll}
n + 1 & \text{ si } m = 0 \\newline
A(m-1, 1) & \text{ si } m > 0 \text{ et } n = 0 \\newline
A(m-1, A(m, n-1)) & \text{ si } m > 0 \text{ et } n > 0 \\newline
\end{array}
\\right.
%$

Complèter la fonction ci-dessus de manière à ce qu'elle retourne la
valeur d'akermann associée aux deux paramètres *m* et *n*.
==

editor.code==
int ackermann(int m, int n){
  ...
}
==

solution==

int ackermann(int m, int n){
  if (m == 0)
    return n+1;
  if (n == 0)
    return ackermann(m-1, 1);
  return ackermann(m-1, ackermann(m, n-1));
}

==
    
codeafter==

#include <stdlib.h>
#include <stdio.h>    
    
int main(int argc, char* argv[]){
  int m = atoi(argv[1]);
  int n = atoi(argv[2]);    
  printf("Ackermann(%d, %d) : %d\n", m, n, ackermann(m, n));
  return 0;
}
==

    
tests==

[["Basique", "0 0", ""], 
 ["Moyen", "2 2", ""],
 ["Gros", "3 5", ""],
 ["Aléatoire", ' '.join([str(random.randint(0, 1)), str(random.randint(0, 100))]), ""],
 ["Aléatoire", ' '.join([str(random.randint(0, 2)), str(random.randint(0, 20))]), ""],
 ["Aléatoire", ' '.join([str(random.randint(0, 3)), str(random.randint(0, 4))]), ""],
 ["Aléatoire", ' '.join([str(random.randint(0, 3)), str(random.randint(0, 4))]), ""]]

==

