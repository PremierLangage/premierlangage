# Copyright 2017 Nicolas Borie <nicolas.borie@u-pem.fr>
author=Nicolas Borie
title=Compter les lettres minuscules
tag=string
template=/template/stdsandboxC.pl

text==

Écrire une fonction qui prend en argument une chaîne de caractères C
en ascii et retourne le nombre de lettre minuscule dans cette chaîne. 

==

editor.code==
int count_lower_case(char* s){
  /* votre code ici... */
}
==

solution==
int count_lower_case(char* s){
  int i;
  int lower=0;

  for (i=0 ; s[i]!='\0' ; i++){
    if ((s[i] >= 'a') && (s[i] <= 'z')){
      lower++;
    }
  }
  return lower;
}
==

codeafter==
#include <stdio.h>

int main(int argc, char* argv[]){
  printf("%d\n", count_lower_case(argv[1]));

  return 0;
}
==

tests==

[["Mot simple", "salut", ""],
 ["Mot compliqué", "Bonjour12LARTISTE42a", ""],
 ["Mot vide", "''", ""],
 ["Mot aléatoire", "".join([chr(65+random.randint(0,25)+(random.randint(0,1)*(97-65))) for i in range(random.randint(10, 30))]), ""],
 ["Mot aléatoire", "".join([chr(65+random.randint(0,25)+(random.randint(0,1)*(97-65))) for i in range(random.randint(10, 30))]), ""],
 ["Mot aléatoire", "".join([chr(65+random.randint(0,25)+(random.randint(0,1)*(97-65))) for i in range(random.randint(10, 30))]), ""]]

==

