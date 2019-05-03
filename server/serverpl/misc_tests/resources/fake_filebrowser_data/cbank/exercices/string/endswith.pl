# Copyright 2016 Nicolas Borie <nicolas.borie@u-pem.fr>
# Copyright 2017 DR <dr@univ-mlv.fr>
# se termine par la chaine 

author=Dominique & Nicolas
name=fin d'une chaîne de caractères
title=fin d'une chaîne de caractères
tag=string|function|loop|pointer
template=/template/autograderC

text==

Complètez la fonction suivante **endswith** pour quelle retourne si oui ou non
 la chaîne **s** donnée en argument se termine par les caractères de la chaine **fin** passé en argument.

Vous devez écrire votre fonction sans rien utiliser des bibliothèques standards.

  Rappel : une chaîne de caractères C est tout d'abord un tableau de
  **char**. Une chaîne est donc manipulée par l'adresse de son premier
  élément. Une chaîne de caractères C se termine toujours par le
  caractère **'\0'** qui encode justement la fin de la chaîne. C'est un
  marqueur de fin de tableau car le langage C ne connait pas la longueur
  des tableaux.

==

code==
#include <strings.h>
int endswith(char* s, char*fin){
 /*votre code ici */

}


==



solution==
#include <strings.h>

int endswith(char* s, char*fin){
 /*votre code ici */
 int ls=strlen(s);
 int lf=strlen(fin);
 int i;
  if (lf==0) return 1;
  if (lf>ls) return 0;
  for(i=0; i<lf;i++)
    if (s[i+(ls-lf)]!=fin[i]) return 0;
  
  return 1;
}
==

codebefore==
#include <stdio.h>
==

codeafter==
#include <stdlib.h>
int main(int argc, char* argv[]){

  int b = endswith(argv[1],argv[2]);

  if (b)
      printf("Marche pas %d",b);
  else
    printf("Marche");

  return 0;
}
==

grader==
from graderC import graderII

tests = [["Petit mot", "Petit_mot mot", ""], 
         ["Identique", "Bonjour Bonjour", ""], 
         ["Fin plus grand que le mot ", "mots lafintreslongue", ""], 
         ["Apparait plusieurs fois ", "aaaaaa aa", ""],
         ["N\'apparait pas","ksjlhqflqk dshfqj",""],
         ] 

graderII(tests)
==
