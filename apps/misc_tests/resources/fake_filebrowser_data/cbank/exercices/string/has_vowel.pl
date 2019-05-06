# Copyright 2017 DR
#

author=NB&DR
title= Repérer les voyelles
tag=function|string|strchr
template=/template/stdsandboxC.pl

text==

Écrire une fonction **has_vowel** qui prend une chaine de caractères en parametre 
et qui retourne l'entier du code ASCII la première voyelle trouvée dans cette 
chaine. Si la chaîne ne contient pas de voyelle alors votre fonction devra 
retourner 0.

==

editor.code==
const char *vowel="aeiouy";

int has_vowel(...){
  ...
}
==

solution==

#include <string.h>
const char *vowel="aeiouy";

int has_vowel(char *p){
  for(;*p;p++)
    if (strchr(vowel,*p)) return *p;
  return 0;
}
==

codeafter==

#include <stdlib.h>
#include <stdio.h>


int main(int argc, char* argv[]){

  int a=has_vowel(argv[1]);
  if (a)
  printf("la chaine  %s contient la voyelle %c\n",argv[1],a);
  else
  printf("la chaine  %s ne contient pas de voyelle\n",argv[1]); 
  return 0;
}
==


tests==

[["Basique", "labellevoyelle", ""],
["Y a pas de voyelles", "bcdfghjklmnpqrstvwxz", ""],
["Y'a un a", "aaaa", ""],
["Y'a un e", "xxxea", ""],
["Y'a un i", "xxxiea", ""],
["Y'a un o", "xxxoo", ""],
["Y'a un y", "xxxy", ""]]
==


