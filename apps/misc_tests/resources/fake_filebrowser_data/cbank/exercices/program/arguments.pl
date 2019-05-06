# Copyright 2017 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Afficher les arguments d'un programme C

author=Nicolas Borie
name=Afficher les arguments d'un programme C
title=Afficher les arguments d'un programme C
tag=program
template=/template/stdsandboxC.pl

text==

Écrire un programme C qui affiche ses arguments. Le programme ne devra
pas afficher son nom qui est toujours positionné en tête du tableau
des arguments. On affichera un argument par ligne. Exécuté sans
argument, le programme ne doit donc rien afficher.
    
==

editor.code==
#include ...

int main(...){
  ...
}

==

solution==
#include <stdio.h>

int main(int argc, char* argv[]){
  int i;

  for (i=1 ; i<argc ; i++)
    printf("%s\n", argv[i]);
    
  return 0;
}


==

tests==
[["Basique", "argument1", ""],
["Sans argument", "", ""],
["Argument multiple", "arg1 arg2 arg3 arg4", ""],
["Mélange", "argument1 192 poule foo 42", ""],
["Complexe", "'argument en plusieurs mots' mot_unique", ""]]
==

