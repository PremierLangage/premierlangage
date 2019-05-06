# Copyright 2016 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Fonction qui affiche la date de compilation

author=Nicolas Borie
title=Fonction qui affiche la date de compilation
tag=macro|function
template=/template/stdsandboxC.pl

text==

Le compilateur **gcc** possède quelques macros prédéfinies et
adaptatives. Parmi ces dernières, il y a la macro **\_\_DATE\_\_**. Cette
dernière est substituée lors de la préproccession par une chaîne de
caractère donnant la date de compilation du programme.

Écrire une fonction *print_compilation_date* qui affichera lors de son
appel la phrase suivante :

    
    Le programme à été compilé le XXXXX.

    
Il faudra remplacer XXXXX par date de compilation du programme et ne
pas oublier le point ainsi que le retour à la ligne en fin de phrase. 

==

editor.code==

... print_compilation_date(...){
  ...
}

==

solution==

void print_compilation_date(){
  printf("Le programme à été compilé le %s.\n", __DATE__);
}
==


codebefore==

#include <stdio.h>
==

codeafter==

int main(int argc, char* argv[]){
  print_compilation_date();

  return 0;
}

==

tests==

[["Exécution simple", "",""]]

==

