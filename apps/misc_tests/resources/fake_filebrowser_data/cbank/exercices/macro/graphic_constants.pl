# Copyright 2016 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Déclaration de constantes pour une interface graphique

author=Nicolas Borie
title=Déclaration de constantes pour une interface graphique
tag=macro
template=/template/stdsandboxC.pl

text==
Définir quatre constantes préprocesseurs pour une interface
graphique. Les deux premières constantes donneront la taille de la
fenêtre : *WINDOW_SIZE_X* pour la largeur qui devra être de 800 et
*WINDOW_SIZE_Y* pour la hauteur qui devra valoir 600.

Rajouter ensuite une constante *NB_BUTTON* pour le nombre de boutons
clikables qui devra valoir 12 et finalement une constante *SHOW_DEBUG*
qui aura pour valeur quelque chose s'évaluant à faux dans un test
*if*. Cela désactivera le mode débogage par défault.
==

editor.code==
#...

==

solution==

#define WINDOW_SIZE_X 800
#define WINDOW_SIZE_Y 600
#define NB_BUTTON 12
#define SHOW_DEBUG 0

==

codeafter==
 
#include <stdio.h>

int main(int argc, char* argv[]){

printf("Largeur de la fenêtre : %d\n", WINDOW_SIZE_X);
printf("Hauteur de la fenêtre : %d\n", WINDOW_SIZE_Y);
printf("Nombre de boutons : %d\n", NB_BUTTON);
if ((SHOW_DEBUG))
  printf("Le mode débogage est activé.\n");
else
  printf("Le mode débogage est désactivé.\n");

return 0;
}

==

tests==
[["Initialisation des constantes", "",""]] 
==

