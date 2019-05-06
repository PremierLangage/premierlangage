# Copyright 2017 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Mettre les lettres en majuscule dans une chaîne

author=Nicolas Borie
name=Mettre les lettres en majuscule dans une chaîne
title=Mettre les lettres en majuscule dans une chaîne
tag=string|function
template=/template/autograderC

text==

Écrire une fonction C qui prend en argument une chaîne de caractères
et qui modifie les lettres minuscules qui y sont dedans pour les
transformer en leur majuscules correspondantes.

Les autres caratères contenus dans la chaînes qui ne sont pas des
lettres minuscules ne seront pas affectés par la fonction.
    
==

code==
void to_upper_in_string(...){
  ...
}

==

solution==
void to_upper_in_string(char* s){
  int i;
  for(i=0 ; s[i]!='\0' ; i++){
    if ((s[i] >= 'a') && (s[i] <='z'))
      s[i] = s[i]-'a'+'A';
  }  
}

==

codeafter==
#include <stdio.h>

int main(int argc, char* argv[]){
  to_upper_in_string(argv[1]);
  printf("%s\n", argv[1]);
  return 0;
}

==

    
grader==
from graderC import graderII

tests = [["Basique", "pouet", ""],
         ["Chaîne mélangé", '"PoUeT"', ""],
         ["Chaîne vide", '""', ""],
	 ["Trois mots", '"Pouet pouet TAGAda"', ""],
         ["Long mot", "Anti-ConstitutionnelleMent", ""],
	 ["Grand mélange ascii", '"dK$#%djsDFG*&dwr#$-cwFWwdW $#e"', ""]]

graderII(tests)
==
