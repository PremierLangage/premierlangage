# Copyright 2017 Nicolas Borie <nicolas.borie@u-pem.fr>
#

author=Dominique Revuz
title= Incremente le 
tag=function
template=/template/stdsandboxC.pl

text==

Écrire une function **incremente** qui prend l'adresse **p** d'un entier et un 
entier **inc** et incrémente l'entier pointé par **p** de la valeur **inc**.
La fonction retourne void.


Le programme de test sera le suivant :

    #include <stdio.h>
    #include <stdlib.h>    
        
    int main(int argc, char* argv[]){
      int a = atoi(argv[1]);
      int b= atoi(argv[2]);
      int c=a;
        incremente(&c,b);
      printf("%d + %d  == %d \n",a,b,c);
      return 0;
    }


==

editor.code==
... incremente(...){
  ...
}
==

solution==
void incremente(int *p,int inc)
{
    *p += inc ;
}

==

codeafter==

#include <stdio.h>
#include <stdlib.h>    
    
int main(int argc, char* argv[]){
  int a = atoi(argv[1]);
  int b= atoi(argv[2]);
  int c=a;
    incremente(&c,b);
  printf("%d + %d  == %d \n",a,b,c);
  return 0;
}
==

    
tests==

[["Basique", "1 1", ""],
["Aléatoire", ' '.join([str(random.randint(10, 1000)) for i in range(2)]), ""],
["Aléatoire", ' '.join([str(random.randint(10, 1000)) for i in range(2)]), ""],
["Aléatoire", ' '.join([str(random.randint(10, 1000)) for i in range(2)]), ""],
["Aléatoire", ' '.join([str(random.randint(10, 1000)) for i in range(2)]), ""]
]

==

