# Copyright 2018 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Binomiaux récursifs

author=Nicolas Borie
title=Coefficients binomiaux en récursif
tag=function|recursion
template=/template/stdsandboxC.pl

text==

Les coefficients binomiaux $% \binom{n}{k} %$ peuvent être définis
récursivement en utilisant la formule de récurrence suivante :

$% \forall (n, k) \in \mathbb{N}^2 \text{ tel que } n > k > 0 : \binom{n}{k} :=  \binom{n-1}{k} + \binom{n-1}{k-1} %$ 

Les nombreuses conditions initiales sont les suivantes :

$% \forall n \in \mathbb{N} : \binom{n}{0} := {\color{red}1} , \binom{n}{n} := {\color{red}1} %$ (Ce sont las cas où $% k = 0 %$ ou bien $% k = n %$.)

Avec ces données, on peut alors construire un triangle d'entiers
appelé le triangle de Pascal. En voici les 6 premières lignes :
    
$%
\begin{array}{cccccccc}
{\color{red}1} & & & & & & & \\newline
{\color{red}1} & {\color{red}1} & & & & & & \\newline
{\color{red}1} & 2 & {\color{red}1} & & & & & \\newline
{\color{red}1} & 3 & 3 & {\color{red}1} & & & & \\newline
{\color{red}1} & 4 & 6 & 4 & {\color{red}1} & & & \\newline
{\color{red}1} & 5 & 10 & 10 & 5 & {\color{red}1} & & \\newline
{\color{red}1} & 6 & 15 & 20 & 15 & 6 & {\color{red}1} & \\newline
\vdots & & & & & & & \ddots \\newline
\end{array}    
%$

Dans ce triangle, les nombres en rouge ont été obtenu à l'aide des
conditions initiales. Les nombres noirs par contre ont nécéssité
l'utilisation de la formule de récurrence.

Complètez la fonction ci-dessous de manière à ce qu'elle retourne les
coefficients binomiaux à l'aide de cette méthode récurive brutale (On
ne ferait pas comme cela avec plus de connaissance en programmation).
==

editor.code==
int binomial(int n, int k){
  ...
}
==

solution==
int binomial(int n, int k){
  if ((n == k) || (k == 0))
    return 1;
  return binomial(n-1, k) + binomial(n-1, k-1);
}
==
    
codeafter==
#include <stdlib.h>
#include <stdio.h>    
    
int main(int argc, char* argv[]){
  int n = atoi(argv[1]);
  int k = atoi(argv[2]);
  printf("Binomial(%d, %d) : %d\n", n, k, binomial(n, k));
  return 0;
}
==

    
tests==

[["Basique", "0 0", ""], 
 ["Aux bords", "132 132", ""],
 ["L'autre bord", "4231 0", ""],
 ["Aléatoire", ' '.join([str(random.randint(7, 12)), str(random.randint(0, 6))]), ""],
 ["Aléatoire", ' '.join([str(random.randint(7, 12)), str(random.randint(0, 6))]), ""],
 ["Aléatoire", ' '.join([str(random.randint(7, 12)), str(random.randint(0, 6))]), ""],
 ["Aléatoire", ' '.join([str(random.randint(7, 12)), str(random.randint(0, 6))]), ""],
 ["Aléatoire", ' '.join([str(random.randint(7, 12)), str(random.randint(0, 6))]), ""],
 ["Aléatoire", ' '.join([str(random.randint(7, 12)), str(random.randint(0, 6))]), ""]]

==

