# Copyright 2017 DR
#
# Detection de voyelle dans un mot en C

author=NB&DR

title=Trouver la première voyelle
tag=function
template=/template/stdsandboxC.pl

text==

Écrire une fonction **has_vowel** qui prend une chaîne de caractères en
paramètre et qui retourne un entier correspondant au code ASCII de la
première voyelle trouvée dans la chaine. On retournera 0 si aucune
voyelle apparaît dans le mot.

==

editor.code==
const char* vowel="aeiouy";

int has_vowel(...){
  ...
}
==

solution==

#include <string.h>
const char* vowel="aeiouy";

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
  printf("la chaîne \"%s\" contient la voyelle %c.\n",argv[1],a);
  else
  printf("la chaîne \"%s\" ne contient pas de voyelle.\n", argv[1]); 
  return 0;
}
==


tests==

[["Basique", "'la belle voyelle'", ""],
["Sans voyelle", "bcdfghjklmnpqrstvwxz", ""],
["Trouve un a", "aaaa", ""],
["Trouve un e", "xxxea", ""],
["Trouve un i", "xxxiea", ""],
["Trouve un o", "xxxoo", ""],
["Trouve un y", "xxxy", ""]]

==

