# Copyright 2016 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Calcul de la longueur d'une chaîne de caractères C

author=Nicolas Borie
name=longueur d'une chaîne de caractères
title=longueur d'une chaîne de caractères
tag=string
template=/C/template/autograderC

text==

Complètez la fonction suivante pour quelle retourne le nombre de
caractères contenus dans la chaîne **s** donnée en argument. Vous
devez écrire votre fonction sans rien utiliser des bibliothèques
standards.

Pour rappel, une chaîne de caractères C est tout d'abord un tableau de
**char**. Une chaîne est donc manipulée par l'adresse de son premier
élément. Une chaîne de caractères C se termine toujours par le
caractère **'\0'** qui encode justement la fin de la chaîne. C'est un
marqueur de fin de tableau car le langage C ne connait pas la longueur
des tableaux.

Pour obtenir la longueur de la chaîne **s**, il faut ainsi compter le
nombre de lettres apparaissant dans **s** avant le caractère de fin de
chaîne.

==

code==
int string_length(char* s){
  /* Votre code ici... */
}

==

codecmp==
int string_length(char* s){
  int len;
  
  for(len=0 ; s[len] != '\0'; len++) {}
  return len;
}

==

codecontext==
#include <stdio.h>

int string_length(char* s);

int main(int argc, char* argv[]){
  
  printf("La chaîne : %s a pour longueur %d\n", argv[1], string_length(argv[1]));
  return 0;
}

==

# LOAD IMPORTANT FILES FOR GRADING
sandbox=@/C/template/basic.c
sandbox=@/C/template/graderC.py

grader==
from graderC import grade_argcmd_stdin_cmp_soluce
tests = {"Petit mot": [" mot","", True], "Un mot": [" Bonjour","", True], "Deux mots" : [' "ca va?" ',"", True], "Mot vide" : [' ""',"", True], "Long mot": [' "Anti-constitutionnellement"',"", True] }
grade_argcmd_stdin_cmp_soluce(tests=tests, flags="-Wall -ansi", break_first_error=True, flags_soluce="-Wall -ansi")
==
