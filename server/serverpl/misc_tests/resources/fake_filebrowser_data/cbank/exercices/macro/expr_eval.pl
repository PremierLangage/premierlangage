# Copyright 2016 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Macro à paramètre avec un dièse sur argument

author=Nicolas Borie
title=Macro chaine depuis argument 
tag=macro
template=/template/stdsandboxC.pl

text==
Écrire une macro EVAL prenant un seul paramètre qui sera une
expression C s'évaluant dans les entiers.

En imaginant que cette expression soit `12*2`, votre macro devra
afficher sur la sortie standard 
`12*2 = 24`
et retourner à la ligne. 
    
Pour rappel, les arguments des macros ne sont pas typé. Le
préprocesseur ne fait que des inclusions et subistitutions. Lorsqu'une
macro prend un paramètre a, on peut obtenir une chaine de caractère C
à partir de a en utilisant #a dans le corps de la macro.
==

editor.code==
#define EVAL....

==

solution==
#define EVAL(e) printf("%s = %d\n", #e, e)

==

codeafter==
 
#include <stdio.h>

int main(int argc, char* argv[]){
  int a = 1;
  int b = 2;
  int c = 3; 
  
  printf("Sachant que a vaut 1, b vaut 2 et c vaut 3...\n");

  EVAL(2*a-b);
  EVAL(3*b-2*c);
  EVAL(a+b+c);
  EVAL(a*b*c);
  EVAL(153-89);
  return 0;
}

==

tests==
[["quelques expressions", "",""]] 
==

